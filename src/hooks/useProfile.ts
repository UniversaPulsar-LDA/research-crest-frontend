import { useState, useEffect } from 'react';
import { profileService, ProfileResponse, ProfileOverviewResponse } from '../services/profileService';
import { useAuth } from '../contexts/AuthContext';

export function useProfile(userId?: string) {
    const { user } = useAuth();

    const [profileData, setProfileData] = useState<ProfileResponse['data'] | null>(null);
    const [overviewData, setOverviewData] = useState<ProfileOverviewResponse['data'] | null>(null);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // If we have a specific userId, fetch that. Otherwise, fetch "me" if there is an authenticated user.
        const fetchProfile = async () => {
            try {
                setIsLoading(true);
                setError(null);

                // Determine target ID for overview fetching
                let targetId = userId;

                let profileRes: ProfileResponse;

                if (userId) {
                    profileRes = await profileService.getUserProfile(userId);
                } else if (user) {
                    profileRes = await profileService.getMyProfile();
                    // Assuming user object has an _id or id property we can use for overview fetch later if needed.
                    // For now, if no ID is passed, we fetch 'me' for main profile. 
                    // Note: Backend might require user ID for the overview fetch.
                    targetId = (user as any)._id || (user as any).id || (user as any).customID;
                } else {
                    // No user context to query
                    setIsLoading(false);
                    return;
                }

                setProfileData(profileRes.data);

                // Fetch Overview data if we have an ID
                if (targetId) {
                    try {
                        const overviewRes = await profileService.getProfileOverview(targetId);
                        setOverviewData(overviewRes.data);
                    } catch (overviewErr) {
                        console.warn("Failed to fetch overview data, it might not exist yet:", overviewErr);
                        // Don't fail the whole hook if just overview fails
                    }
                }

            } catch (err: any) {
                setError(err.message || 'Failed to load profile');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfile();
    }, [userId, user]);

    return { profileData, overviewData, isLoading, error };
}
