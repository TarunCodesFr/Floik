"use client";

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import {
  Users, ShieldCheck, Code2, Bug, UserX, Handshake,
  ArrowRight, History, FileText, ChevronRight, Activity, Search,
  Star, Gem, ExternalLink, Loader2
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/context/auth-context';
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const ICON_MAP: Record<string, any> = {
  ShieldCheck, Users, Code2, Bug, UserX, Handshake, Star, Gem, FileText, ExternalLink
};

function PerspectiveCard({ children, glowColor }: { children: React.ReactNode, glowColor: string }) {
  const x = useMotionValue(0); const y = useMotionValue(0);
  const mouseXSpring = useSpring(x); const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX / rect.width - 0.5); y.set(e.clientY / rect.height - 0.5);
  };
  return (
    <motion.div onMouseMove={handleMouseMove} onMouseLeave={() => { x.set(0); y.set(0) }} style={{ rotateY, rotateX, transformStyle: "preserve-3d" }} className="relative h-full">
      <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }} className="h-full">{children}</div>
      <motion.div style={{ background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`, opacity: useTransform(mouseXSpring, [-0.5, 0.5], [0.1, 0.2]) }} className="absolute inset-0 pointer-events-none -z-10 blur-3xl" />
    </motion.div>
  );
}

import { apiFetch } from '@/lib/api';

export default function PortalPage() {
  const { user, token, loading } = useAuth();
  const router = useRouter();
  const [mySubmissions, setMySubmissions] = useState<any[]>([]);
  const [forms, setForms] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [formsLoading, setFormsLoading] = useState(true);
  const [view, setView] = useState<'options' | 'history'>('options');

  useEffect(() => {
    if (!loading && !user) router.push('/auth');
  }, [user, loading, router]);

  useEffect(() => {
    fetchForms();
  }, []);

  useEffect(() => { if (user) fetchMySubmissions(); }, [user]);

  const fetchForms = async () => {
    setFormsLoading(true);
    try {
      const data = await apiFetch('/api/forms/active');
      setForms(data);
    } catch (e) { }
    setFormsLoading(false);
  };

  const fetchMySubmissions = async () => {
    setIsFetching(true);
    try {
      const data = await apiFetch('/api/portal/submissions');
      setMySubmissions(data);
    } catch (e) { }
    setIsFetching(false);
  };

  return (
    <div className="min-h-screen bg-background pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* <Badge variant="outline" className="px-4 py-1.5 rounded-full border-primary/20 bg-primary/5 text-primary text-[10px] uppercase font-bold tracking-widest animate-pulse">
            Floik Central
          </Badge> */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-tight">
              Community <span className="text-primary italic">Portal</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
              Join our crew, report issues, and help shape the future of our network through official workflows.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-32">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : (
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <nav className="flex p-1.5 bg-white/3 border border-white/5 rounded-2xl backdrop-blur-xl">
                <button
                  onClick={() => setView('options')}
                  className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${view === 'options' ? 'bg-primary text-white shadow-xl' : 'text-zinc-500 hover:text-white'}`}
                >
                  Workflows
                </button>
                <button
                  onClick={() => setView('history')}
                  className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${view === 'history' ? 'bg-primary text-white shadow-xl' : 'text-zinc-500 hover:text-white'}`}
                >
                  <History size={14} /> My History
                </button>
              </nav>

              {(user?.role === 'ADMIN' || (user?.userRoles && user.userRoles.length > 0)) && (
                <Link href="/portal/admin">
                  <Button variant="outline" className="h-14 px-8 rounded-2xl border-white/10 hover:border-primary/40 hover:bg-primary/5 text-xs font-bold uppercase tracking-widest flex gap-2">
                    <ShieldCheck size={16} className="text-primary" /> Admin View
                  </Button>
                </Link>
              )}
            </div>

            <AnimatePresence mode="wait">
              {view === 'options' && (
                <motion.div key="options" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {formsLoading ? (
                    [1, 2, 3].map(i => (
                      <div key={i} className="h-64 rounded-[24px] bg-card/30 border border-border/10 animate-pulse" />
                    ))
                  ) : forms.length > 0 ? forms.map((form) => {
                    const FormIcon = ICON_MAP[form.icon] || FileText;
                    const glowColor = form.color === 'text-primary' ? 'rgba(184,144,82,0.15)'
                      : form.color === 'text-blue-500' ? 'rgba(59, 130, 246, 0.1)'
                      : form.color === 'text-emerald-500' ? 'rgba(16, 185, 129, 0.1)'
                      : form.color === 'text-rose-500' ? 'rgba(244, 63, 94, 0.1)'
                      : form.color === 'text-amber-500' ? 'rgba(245, 158, 11, 0.1)'
                      : form.color === 'text-violet-500' ? 'rgba(139, 92, 246, 0.1)'
                      : 'rgba(59,130,246,0.1)';
                    return (
                      <Link key={form.id} href={`/portal/apply/${form.id}`} className="group h-full">
                        <PerspectiveCard glowColor={glowColor}>
                          <Card className="h-full rounded-[24px] bg-card/60 backdrop-blur-3xl border border-border/10 group-hover:border-primary/40 group-hover:shadow-[0_0_40px_-12px_rgba(184,144,82,0.3)] transition-all p-8 flex flex-col items-start gap-8">
                            <div className={`w-14 h-14 rounded-2xl bg-primary/5 border border-border/10 flex items-center justify-center transition-colors group-hover:bg-primary/10 group-hover:border-primary/20 ${form.color || 'text-primary'}`}>
                              <FormIcon size={24} />
                            </div>
                            <div className="space-y-3">
                              <CardTitle className="text-xl font-bold text-foreground tracking-tight">{form.title}</CardTitle>
                              <CardDescription className="text-muted-foreground font-medium leading-relaxed">{form.description}</CardDescription>
                            </div>
                            <div className="mt-auto w-full flex items-center justify-between text-muted-foreground group-hover:text-primary transition-colors pr-2">
                              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all">Begin Workflow</span>
                              <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </Card>
                        </PerspectiveCard>
                      </Link>
                    );
                  }) : (
                    <div className="col-span-full text-center py-20 opacity-40">
                      <FileText className="w-12 h-12 mx-auto text-muted-foreground" />
                      <p className="text-xs font-bold uppercase tracking-[0.3em] mt-4">No active forms available</p>
                    </div>
                  )}
                </motion.div>
              )}

              {view === 'history' && (
                <div className="max-w-4xl mx-auto w-full">
                  {isFetching ? (
                    <div className="space-y-4">
                      {[1, 2, 3].map(i => <div key={i} className="h-28 rounded-[24px] bg-card/50 border border-border/10 animate-pulse" />)}
                    </div>
                  ) : (
                    <motion.div key="history" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                      {mySubmissions.length > 0 ? mySubmissions.map((s, i) => {
                        const statusStyles = {
                          APPROVED: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-500',
                          REJECTED: 'border-rose-500/20 bg-rose-500/5 text-rose-500',
                          PENDING: 'border-amber-500/20 bg-amber-500/5 text-amber-500',
                        }[s.status as 'APPROVED' | 'REJECTED' | 'PENDING'] || 'border-border/10 bg-card/50 text-foreground';

                        const SubIcon = ICON_MAP[s.form?.icon] || FileText;

                        return (
                          <Link key={i} href={`/portal/submission/${s.id}`}>
                            <div className={`p-6 md:p-8 rounded-[24px] border bg-card/40 border-border/10 flex items-center justify-between hover:bg-card/60 hover:border-border/20 transition-all group shadow-2xl`}>
                              <div className="flex items-center gap-6">
                                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/5 border border-border/10 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors`}>
                                  <SubIcon size={24} />
                                </div>
                                <div className="space-y-1.5 transition-transform group-hover:translate-x-1">
                                  <div className="flex items-center gap-3">
                                    <h4 className="text-lg font-bold text-foreground tracking-tight">{s.form?.title || 'Unknown Form'}</h4>
                                    <Badge variant="outline" className={`text-[10px] font-bold uppercase tracking-widest ${statusStyles}`}>
                                      {s.status === 'REJECTED' ? 'DENIED' : s.status}
                                    </Badge>
                                  </div>
                                  <p className="text-xs font-medium text-muted-foreground">
                                    Submitted {new Date(s.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Record</span>
                                <div className="w-10 h-10 rounded-xl bg-card border border-border/10 flex items-center justify-center text-muted-foreground group-hover:text-primary-foreground group-hover:bg-primary transition-all">
                                  <ChevronRight size={18} />
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      }) : (
                        <div className="text-center py-32 space-y-4 opacity-30">
                          <Search className="w-12 h-12 mx-auto text-muted-foreground" />
                          <p className="text-xs font-bold uppercase tracking-[0.3em]">No submission records found</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
