import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService, LoginCredentials, RegisterDetails } from '../services/authService';
import { useRouter } from 'next/router';

interface User {
    email: string;
    role: string;
    customID?: string;
    accountStatus?: string;
}

interface Profile {
    name?: string;
    firstName?: string;
    lastName?: string;
    [key: string]: any;
}

interface AuthContextType {
    user: User | null;
    profile: Profile | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (credentials: LoginCredentials) => Promise<void>;
    register: (details: RegisterDetails) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        const initAuth = async () => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                try {
                    const res = await authService.getCurrentUser();
                    if (res.success && res.data?.user) {
                        setUser(res.data.user);
                        // In a real app we might fetch the full profile here if not returned by /me
                        // For now we'll just set what we have
                        if (res.data.profile) setProfile(res.data.profile);
                        setIsAuthenticated(true);
                    } else {
                        handleLogoutCleanup(); // Token might be invalid despite existence
                    }
                } catch (error) {
                    console.error("Failed to authenticate on load", error);
                    handleLogoutCleanup();
                }
            }
            setIsLoading(false);
        };

        initAuth();
    }, []);

    const handleLogoutCleanup = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setUser(null);
        setProfile(null);
        setIsAuthenticated(false);
    };

    const login = async (credentials: LoginCredentials) => {
        setIsLoading(true);
        try {
            const response = await authService.login(credentials);
            if (response.success && response.data) {
                localStorage.setItem('accessToken', response.data.accessToken);
                if (response.data.refreshToken) {
                    localStorage.setItem('refreshToken', response.data.refreshToken);
                }
                setUser(response.data.user);
                setProfile(response.data.profile || null);
                setIsAuthenticated(true);
            } else {
                throw new Error(response.message || "Login failed");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (details: RegisterDetails) => {
        setIsLoading(true);
        try {
            const response = await authService.register(details);
            if (!response.success) {
                throw new Error(response.message || "Registration failed");
            }
            // Usually, we require them to log in after registering. 
            // Some flows auto-login. The API contract doesn't explicitly return access tokens on register.
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        handleLogoutCleanup();
        router.push('/');
    };

    return (
        <AuthContext.Provider value={{ user, profile, isAuthenticated, isLoading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
