"use client";

import { useEffect, useState, Suspense, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { apiFetch } from '@/lib/api'

function AuthCallbackContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const calledRef = useRef(false);

  useEffect(() => {
    const code = searchParams.get('code');
    const state = searchParams.get('state') || '';
    if (code && !calledRef.current) {
      calledRef.current = true;
      handleCallback(code, state);
    } else if (!code) {
      setError('No authorization code found');
    }
  }, [searchParams]);

  const handleCallback = async (code: string, state: string) => {
    try {
      const data = await apiFetch(`/api/auth/microsoft/callback?code=${code}&state=${state}`);
      login(data.token, data.user);
    } catch (err) {
      setError('Failed to authenticate with Xbox');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-6">
        {!error ? (
          <>
            <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto" />
            <div className="space-y-2">
              <h1 className="text-2xl font-black font-title tracking-widest">Authenticating</h1>
              <p className="text-muted-foreground font-medium">Linking your Xbox account...</p>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <h1 className="text-2xl font-black text-red-500 font-title tracking-widest">Auth Error <span className='text-green-500'>No Xbox account found with this email!</span></h1>
            <p className="text-muted-foreground font-medium">{error}</p>
            <button onClick={() => router.push('/portal')} className="px-8 py-3 bg-primary text-white rounded-xl font-black uppercase text-xs tracking-widest">Try Again</button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    }>
      <AuthCallbackContent />
    </Suspense>
  );
}
