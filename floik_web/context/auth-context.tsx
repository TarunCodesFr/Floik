"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  username: string;
  displayName?: string | null;
  bio?: string | null;
  profilePicture?: string | null;
  xboxId: string;
  role: string;
  createdAt?: string;
  userRoles?: { role: { id: string; name: string; color: string; position: number; permissions?: string[] } }[];
}

interface AuthContextType {
  user: User | null;
  token: string | null; // Kept for backwards compatibility if some components still need it
  loading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

import { apiFetch } from '@/lib/api';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null); // Legacy tracking
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const logout = useCallback(async () => {
    try {
      await apiFetch('/api/auth/logout', { method: 'POST' });
    } catch (e) {
      // Ignore
    }
    setToken(null);
    setUser(null);
    router.push('/');
  }, [router]);

  const refreshUser = useCallback(async () => {
    try {
      const userData = await apiFetch('/api/auth/me');
      if (userData.token) setToken(userData.token);
      setUser(userData);
    } catch (e: any) {
      if (e.status !== 401 && e.status !== 404) {
        console.error('Failed to refresh user', e);
      }
      // If we failed to refresh and think we are logged in, clear it.
      // We check the current 'user' state via a ref or by just attempting logout
      // But actually, we can just call logout() and it will handle the state.
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []); // logout is also stable, but let's keep it simple

  useEffect(() => {
    refreshUser();
  }, []); // Only run once on mount

  const login = (newToken: string, newUser: User) => {
    setToken(newToken);
    setUser(newUser);
    router.push('/portal');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
