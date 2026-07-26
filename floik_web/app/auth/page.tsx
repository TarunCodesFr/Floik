"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gamepad2, Mail, Lock, User, Loader2, Eye, EyeOff,
  AtSign, ArrowRight, Globe, ShieldCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { apiFetch, API_URL } from "@/lib/api";

type PortalType = "MINECRAFT" | "GENERIC";
type AuthMode = "login" | "register";

export default function AuthPage() {
  const { user, loading: authLoading, login } = useAuth();
  const router = useRouter();
  const [portalType, setPortalType] = useState<PortalType | null>(null);
  const [settingsLoading, setSettingsLoading] = useState(true);
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && user) {
      router.push("/portal");
      return;
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    apiFetch("/api/settings")
      .then(data => {
        if (data) setPortalType(data.portalType);
      })
      .catch(() => {})
      .finally(() => setSettingsLoading(false));
  }, []);

  const handleMicrosoftLogin = () => {
    window.location.href = `${API_URL}/api/auth/microsoft`;
  };

  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}/api/auth/google`;
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const endpoint = mode === "login" ? "login" : "register";
      const body: any = { email, password };
      if (mode === "register") body.username = username;

      const data = await apiFetch(`/api/auth/${endpoint}`, {
        method: "POST",
        body: JSON.stringify(body),
      });

      login(data.token, data.user);
    } catch (err: any) {
      setError(err.message || "Authentication failed");
      setSubmitting(false);
    }
  };

  const loading = authLoading || settingsLoading;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <Loader2 className="w-10 h-10 text-primary animate-spin mx-auto" />
          <p className="text-sm font-bold text-muted-foreground animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }

  const isMinecraft = portalType === "MINECRAFT";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Link href="/portal" className="inline-flex items-center gap-2 text-[0.6rem] font-black tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors mb-8 group">
          <ArrowRight className="w-3 h-3 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Portal
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[32px] bg-card/60 backdrop-blur-3xl border border-border/10 shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-10 space-y-8">
            <div className="text-center space-y-3">
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                {isMinecraft ? (
                  <Gamepad2 className="w-7 h-7 text-primary" />
                ) : (
                  <Globe className="w-7 h-7 text-primary" />
                )}
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl font-black text-foreground tracking-tight">
                  {isMinecraft ? "Xbox Authentication" : "Sign In"}
                </h1>
                <p className="text-xs text-muted-foreground font-medium">
                  {isMinecraft
                    ? "Link your Xbox Live account to continue"
                    : "Use your email or social account to continue"}
                </p>
              </div>
            </div>

            {isMinecraft ? (
              <div className="space-y-4">
                <Button
                  onClick={handleMicrosoftLogin}
                  size="lg"
                  className="w-full h-14 text-sm font-bold rounded-2xl bg-primary text-primary-foreground hover:brightness-110 transition-all flex items-center justify-center gap-3"
                >
                  <Image src="/assets/floik.png" width={20} height={20} alt="Logo" className="brightness-200 contrast-200" />
                  Sign in with Microsoft
                </Button>

                <p className="text-[0.55rem] text-muted-foreground font-medium text-center leading-relaxed">
                  By signing in, you agree to our{" "}
                  <Link href="/tos" className="text-primary hover:underline">Terms of Service</Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <Button
                  onClick={handleGoogleLogin}
                  size="lg"
                  className="w-full h-14 text-sm font-bold rounded-2xl bg-white text-gray-900 hover:bg-gray-100 transition-all flex items-center justify-center gap-3 border border-gray-200"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Sign in with Google
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border/10" />
                  </div>
                  <div className="relative flex justify-center text-[0.55rem] font-bold uppercase tracking-widest">
                    <span className="bg-card/60 px-4 text-muted-foreground">or continue with email</span>
                  </div>
                </div>

              <form onSubmit={handleEmailAuth} className="space-y-5">
                <AnimatePresence mode="wait">
                  {mode === "register" && (
                    <motion.div
                      key="username"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-1"
                    >
                      <label className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                        Username
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          value={username}
                          onChange={e => setUsername(e.target.value)}
                          placeholder="Choose a username"
                          className="bg-background/40 border-border/10 rounded-2xl pl-11 py-6 text-sm font-bold"
                          required
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-1">
                  <label className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                    Email
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="bg-background/40 border-border/10 rounded-2xl pl-11 py-6 text-sm font-bold"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder={mode === "register" ? "At least 6 characters" : "Enter your password"}
                      className="bg-background/40 border-border/10 rounded-2xl pl-11 pr-11 py-6 text-sm font-bold"
                      required
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[0.6rem] font-bold text-destructive text-center bg-destructive/10 border border-destructive/20 rounded-xl px-4 py-3"
                  >
                    {error}
                  </motion.p>
                )}

                <Button
                  type="submit"
                  disabled={submitting}
                  size="lg"
                  className="w-full h-14 text-sm font-bold rounded-2xl bg-primary text-primary-foreground hover:brightness-110 transition-all flex items-center justify-center gap-3"
                >
                  {submitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <ShieldCheck className="w-5 h-5" />
                  )}
                  {mode === "login" ? "Sign In" : "Create Account"}
                </Button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setMode(mode === "login" ? "register" : "login");
                      setError(null);
                    }}
                    className="text-[0.6rem] font-bold text-muted-foreground hover:text-primary transition-colors"
                  >
                    {mode === "login"
                      ? "Don't have an account? Register"
                      : "Already have an account? Sign In"}
                  </button>
                </div>
              </form>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
