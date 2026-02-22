import { apiClient } from '../lib/api';

// ---------------------------------------------------------------------------
// TYPES: Based on api_contract.md Section 3: Profile APIs
// ---------------------------------------------------------------------------

export interface GeneralInfo {
    full_name: string;
    verified: boolean;
    position: string;
    instituteName: string;
    finalEducation: string;
    email: string;
    location: string;
    department?: string;
    tags: string[];
    affiliations_count: number;
    connections_count: number;
    followers_count: number;
}

export interface ResearcherProfile {
    connections: number;
    citations: number;
    h_index: number;
    citations_per_year: Array<{ year: number; value: number }>;
    research_interests: string[];
    advisors: {
        phd_advisors: string[];
        ms_advisors: string[];
        bsc_advisors: string[];
    };
    responsibilities: string[];
}

export interface NotableResearcher {
    name: string;
    position: string;
    researcher_id: string;
    researcher_image: string;
    researcher_email: string;
}

// Prisma Profile representation
export interface ProfileResponse {
    success: boolean;
    message?: string;
    data: {
        id: string;
        userId: string;
        fullName: string;
        username: string;
        profilePhoto?: string;
        coverPhoto?: string;
        verified: boolean;
        designation?: string;
        institutionName?: string;
        finalEducation?: string;
        affiliation?: string;
        location?: string;
        department?: string;
        domainClassification: string[];
        tags: string[];
        bio?: string;
        affiliationsCount: number;
        website?: string;
        // Add extra stats if provided in future points
        citations?: number;
        h_index?: number;
        citations_per_year?: Array<{ year: number; value: number }>;
        research_interests?: string[];
        advisors?: {
            phd_advisors?: string[];
            ms_advisors?: string[];
        };
        responsibilities?: string[];
    };
}

export interface ProfileOverview {
    about: string;
    education: Array<{
        university: string;
        degree: string;
        marketing?: string;
        year_range: string;
        gpa?: number;
    }>;
    analytics_last_7_days: {
        total_views: number;
        search_appearance: number;
    };
    skills: string[];
    timeline: Array<{
        year: number;
        event: string;
        order: number;
    }>;
    posts: any[]; // Adjust based on Feed API post structure later
}

export interface ProfileOverviewResponse {
    success: boolean;
    data: ProfileOverview;
}

// ---------------------------------------------------------------------------
// SERVICE METHODS
// ---------------------------------------------------------------------------

export const profileService = {
    /**
     * Fetches the profile data for the currently authenticated user.
     */
    getMyProfile: async () => {
        const response = await apiClient.get<ProfileResponse>('/profile/api/v1/profile/me');
        return response.data;
    },

    /**
     * Fetches the public profile data for a specific user ID.
     */
    getUserProfile: async (userId: string) => {
        const response = await apiClient.get<ProfileResponse>(`/profile/api/v1/profile/${userId}`);
        return response.data;
    },

    /**
     * Fetches the profile overview data for a specific user ID (used in Overview tab).
     */
    getProfileOverview: async (userId: string) => {
        const response = await apiClient.get<ProfileOverviewResponse>(`/profile/api/v1/profile/${userId}/overview`);
        return response.data;
    },

    /**
     * Updates the currently authenticated user's profile.
     */
    updateMyProfile: async (payload: Partial<GeneralInfo & ResearcherProfile>) => {
        // Contract implies PUT /me for updating profile
        const response = await apiClient.put<ProfileResponse>('/profile/api/v1/profile/me', payload);
        return response.data;
    }
};
