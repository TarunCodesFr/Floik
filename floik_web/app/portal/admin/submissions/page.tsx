"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, Search, Eye, Filter,
  ShieldCheck, Code2, Users, Bug, UserX, Handshake
} from 'lucide-react';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from '@/context/auth-context';
import { toast } from "sonner";
import Image from "next/image";
import { getAvatarUrl } from "@/lib/avatar";
import { AutoSkeleton } from "auto-skeleton-react-and-native";

import { apiFetch } from "@/lib/api";

export default function SubmissionsPage() {
  const { token } = useAuth();
  const [allSubmissions, setAllSubmissions] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'PENDING' | 'APPROVED' | 'REJECTED'>('ALL');

  const fetchAllSubmissions = async () => {
    setIsFetching(true);
    try {
      const data = await apiFetch('/api/portal/submissions/all');
      setAllSubmissions(data);
    } catch (error) {
      toast.error("Failed to fetch submissions");
    }
    setIsFetching(false);
  };

  useEffect(() => {
    if (token) fetchAllSubmissions();
  }, [token]);

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight flex items-center gap-4">
            <ClipboardList className="text-primary w-10 h-10" /> Submissions
          </h1>
          <p className="text-muted-foreground font-medium max-w-lg">Manage and review incoming applications from the community.</p>
        </div>
        <div className="relative w-full md:w-80 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Search username..." 
            className="w-full h-14 pl-12 bg-card/50 border-border/10 rounded-2xl focus:ring-primary/20" 
            onChange={e => setFilter(e.target.value)} 
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 p-1.5 bg-card/30 rounded-2xl border border-border/10 w-fit">
        {['ALL', 'PENDING', 'APPROVED', 'REJECTED'].map((tab) => (
          <button 
            key={tab} 
            onClick={() => setStatusFilter(tab as any)}
            className={`px-6 py-2.5 rounded-xl text-[0.6rem] font-black uppercase tracking-widest transition-all ${
              statusFilter === tab 
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
              : 'text-muted-foreground hover:bg-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {isFetching ? (
        <AutoSkeleton isLoading={true}>
          <div className="grid grid-cols-1 gap-6">
            {[1, 2, 3].map(i => <div key={i} className="h-44 rounded-3xl bg-card/50" />)}
          </div>
        </AutoSkeleton>
      ) : (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          {allSubmissions
            .filter(s => s.user.username.toLowerCase().includes(filter.toLowerCase()))
            .filter(s => statusFilter === 'ALL' || s.status === statusFilter)
            .sort((a, b) => {
              if (a.status === 'REJECTED' && b.status !== 'REJECTED') return 1;
              if (a.status !== 'REJECTED' && b.status === 'REJECTED') return -1;
              return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            })
            .map((s, i) => (
              <Card key={i} className="rounded-3xl bg-card border border-white/5 shadow-xl overflow-hidden hover:border-primary/20 transition-all">
                <div className="p-6 md:p-10 space-y-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-center gap-5">
                      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                        <Image 
                          src={getAvatarUrl(s.user.profile?.profilePicture, s.user.username, s.user.xboxId)}
                          alt={s.user.username}
                          width={64}
                          height={64}
                          className="image-render-pixel scale-125"
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl md:text-2xl font-black text-foreground">{s.user.username}</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-[0.6rem] text-primary font-black uppercase tracking-widest">{s.form?.title || 'Unknown Form'}</span>
                          <div className="w-1 h-1 rounded-full bg-white/20" />
                          <span className="text-[0.6rem] text-muted-foreground font-bold uppercase tracking-widest">{new Date(s.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full md:w-auto items-center gap-3">
                      <div className={`px-5 py-2.5 rounded-xl text-[0.6rem] font-black uppercase tracking-widest border ${
                        s.status === 'APPROVED' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 
                        s.status === 'REJECTED' ? 'bg-red-500/10 border-red-500/20 text-red-500' : 
                        'bg-primary/10 border-primary/20 text-primary'
                      }`}>
                        {s.status}
                      </div>
                      <Link href={`/portal/submission/${s.id}`}>
                        <Button variant="outline" className="rounded-xl px-6 h-11 text-[0.6rem] font-black uppercase tracking-widest border-white/10 bg-white/5 hover:bg-white/10">
                          <Eye className="w-4 h-4 mr-2" /> Detail
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-black/5 border border-border/5">
                    {Object.entries(s.content).slice(0, 4).map(([k, v]: [string, any], idx) => (
                      <div key={idx} className="space-y-1.5">
                        <p className="text-[0.55rem] font-black text-primary/60 uppercase tracking-widest truncate">{k.replace(/_/g, ' ')}</p>
                        <p className="text-xs font-semibold text-foreground line-clamp-1">{String(v)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          {allSubmissions.filter(s => (statusFilter === 'ALL' || s.status === statusFilter) && s.user.username.toLowerCase().includes(filter.toLowerCase())).length === 0 && (
            <div className="text-center py-24 bg-card/10 rounded-3xl border border-dashed border-border/20">
              <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-50">No submissions found matching criteria</p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
