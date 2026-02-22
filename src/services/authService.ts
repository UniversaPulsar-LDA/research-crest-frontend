import { apiClient } from '../lib/api';

// Interface matching api_contract.md
export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterDetails {
    name: string;
    email: string;
    password?: string;
    password_confirmation?: string;
    phone?: string;
    role: string;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    data: {
        accessToken: string;
        refreshToken: string;
        user: any;
        profile: any;
        customID?: string; // registration uses customID
    };
}

export const authService = {
    login: async (credentials: LoginCredentials) => {
        const response = await apiClient.post<AuthResponse>('/auth/api/v1/auth/login', credentials);
        return response.data;
    },

    register: async (details: RegisterDetails) => {
        const response = await apiClient.post<AuthResponse>('/auth/api/v1/auth/register', details);
        return response.data;
    },

    getCurrentUser: async () => {
        const response = await apiClient.post('/auth/api/v1/auth/me');
        return response.data;
    }
};
