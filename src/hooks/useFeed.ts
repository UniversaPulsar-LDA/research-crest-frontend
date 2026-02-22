import { useState, useEffect, useCallback } from 'react';
import { feedService, FeedPost, FeedData } from '@/services/feedService';
import { useAuth } from '@/contexts/AuthContext';

export function useFeed(limit = 10) {
    const { user } = useAuth();
    const [feedData, setFeedData] = useState<FeedData | null>(null);
    const [posts, setPosts] = useState<FeedPost[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [isFetchingMore, setIsFetchingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadFeed = useCallback(async (pageNum: number, isInitial = false) => {
        if (!user) {
            setIsLoading(false);
            return;
        }

        try {
            if (isInitial) {
                setIsLoading(true);
            } else {
                setIsFetchingMore(true);
            }
            setError(null);

            const response = await feedService.getFeed(pageNum, limit);
            const data = response.data;

            if (isInitial) {
                setFeedData(data);
                setPosts(data.feed_posts || []);
            } else {
                setPosts((prev) => [...prev, ...(data.feed_posts || [])]);
            }

            setHasMore(data.feed_posts?.length === limit || data.has_more === true);
        } catch (err: any) {
            setError(err.message || 'Failed to load feed');
            console.error("Feed error:", err);
        } finally {
            setIsLoading(false);
            setIsFetchingMore(false);
        }
    }, [limit, user]);

    useEffect(() => {
        loadFeed(1, true);
    }, [loadFeed]);

    const loadMore = () => {
        if (!isFetchingMore && hasMore) {
            const nextPage = page + 1;
            setPage(nextPage);
            loadFeed(nextPage);
        }
    };

    const createPost = async (postData: { post_text: string; visibility?: string; media_urls?: string[]; media_type?: string }) => {
        try {
            const result = await feedService.createPost(postData);

            // Optimistically add to the top of the feed if the backend returns the created post
            if (result.success && result.data) {
                setPosts((prev) => [result.data, ...prev]);
            } else {
                // Fallback just reload top of feed
                setPage(1);
                loadFeed(1, true);
            }
            return true;
        } catch (err) {
            console.error("Failed to create post", err);
            return false;
        }
    };

    const toggleLike = async (postId: string) => {
        // Optimistic UI updates
        setPosts((prevPosts) =>
            prevPosts.map((post) => {
                if (post.post_id === postId || (post as any).id === postId) {
                    return {
                        ...post,
                        is_liked: !post.is_liked,
                        like_count: post.is_liked ? Math.max(0, post.like_count - 1) : post.like_count + 1
                    };
                }
                return post;
            })
        );

        try {
            await feedService.likePost(postId);
        } catch (err) {
            console.error("Failed to toggle like on backend. Reverting optimistic UI.", err);
            // Revert Optimistic UI if it fails
            setPosts((prevPosts) =>
                prevPosts.map((post) => {
                    if (post.post_id === postId || (post as any).id === postId) {
                        return {
                            ...post,
                            is_liked: !post.is_liked,
                            like_count: post.is_liked ? Math.max(0, post.like_count - 1) : post.like_count + 1
                        };
                    }
                    return post;
                })
            );
        }
    };

    return {
        feedData,
        posts,
        isLoading,
        isFetchingMore,
        hasMore,
        error,
        loadMore,
        createPost,
        toggleLike
    };
}
