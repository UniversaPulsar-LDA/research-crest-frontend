import { apiClient } from '../lib/api';

export interface FeedPost {
    post_id: string;
    author_id: string;
    author_name: string;
    author_photo?: string;
    post_text: string;
    media_urls?: string[];
    media_type?: string;
    like_count: number;
    comment_count: number;
    share_count: number;
    is_liked: boolean;
    created_at: string;
    visibility: string;
}

export interface SuggestedArticle {
    article_id: string;
    article_title: string;
    article_category?: string;
    article_thumbnail?: string;
    published_time: string;
    read_time?: number;
}

export interface PostActivity {
    activity_id: string;
    activity_title: string;
    activity_thumbnail?: string;
    view_count: number;
}

export interface FeedProfileSidebar {
    user_id: string;
    full_name: string;
    username: string;
    profile_photo?: string;
    cover_photo?: string;
    verified: boolean;
    designation?: string;
    instituteName?: string;
    finalEducation?: string;
    publications_count?: number;
    h_index?: number;
    followers_count?: number;
    affiliations_count?: number;
    domain_classification?: string[];
    research_interests?: string[];
}

export interface NotableResearcher {
    user_id?: string;
    notable_id?: string;
    name: string;
    role?: string;
    profile_photo?: string;
    email?: string;
    is_verified?: boolean;
}

export interface FeedData {
    current_user_id: string;
    profile_sidebar?: FeedProfileSidebar;
    feed_posts: FeedPost[];
    suggested_articles?: SuggestedArticle[];
    post_activities?: PostActivity[];
    notable?: NotableResearcher[];
    has_more?: boolean;
}

export interface FeedResponse {
    success: boolean;
    data: FeedData;
}

export const feedService = {
    getFeed: async (page = 1, limit = 10) => {
        const response = await apiClient.get<FeedResponse>(`/feed/api/v1/feed?page=${page}&limit=${limit}`);
        return response.data;
    },

    createPost: async (postData: { post_text: string; visibility?: string; media_urls?: string[]; media_type?: string }) => {
        const response = await apiClient.post<any>('/feed/api/v1/posts', postData);
        return response.data;
    },

    likePost: async (postId: string) => {
        const response = await apiClient.post<any>(`/feed/api/v1/posts/${postId}/like`);
        return response.data;
    },

    commentOnPost: async (postId: string, commentData: { text: string }) => {
        const response = await apiClient.post<any>(`/feed/api/v1/posts/${postId}/comment`, commentData);
        return response.data;
    },
};
