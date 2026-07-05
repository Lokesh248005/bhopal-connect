import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'student' | 'business' | 'admin';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatar?: string;
    companyName?: string; // for business
    collegeName?: string; // for student
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, role: UserRole) => Promise<void>;
    register: (name: string, email: string, role: UserRole) => Promise<void>;
    logout: () => void;
}

// Mock delay to simulate API call
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            isLoading: false,

            login: async (email, role) => {
                set({ isLoading: true });
                await delay(1000); // Simulate network request

                // Mock User Data based on role
                const mockUser: User = {
                    id: '123',
                    name: role === 'business' ? 'TechNova Solutions' : 'Rahul Sharma',
                    email,
                    role,
                    avatar: role === 'business' ? 'TN' : 'RS',
                    companyName: role === 'business' ? 'TechNova Solutions' : undefined,
                    collegeName: role === 'student' ? 'MANIT Bhopal' : undefined,
                };

                set({ user: mockUser, isAuthenticated: true, isLoading: false });
            },

            register: async (name, email, role) => {
                set({ isLoading: true });
                await delay(1000);

                const mockUser: User = {
                    id: '456',
                    name,
                    email,
                    role,
                    avatar: name.charAt(0).toUpperCase(),
                };

                set({ user: mockUser, isAuthenticated: true, isLoading: false });
            },

            logout: () => {
                set({ user: null, isAuthenticated: false });
            },
        }),
        {
            name: 'bhopal-connect-auth', // unique name for localStorage
        }
    )
);
