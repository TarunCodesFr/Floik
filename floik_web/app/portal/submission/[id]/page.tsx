"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Shield, CheckCircle, XCircle, Clock, FileText, BadgeCheck, ShieldCheck, Code2, Users, Star, Gem, Bug, UserX, Handshake, ExternalLink } from "lucide-react";
import { AutoSkeleton } from "auto-skeleton-react-and-native";
import Image from "next/image";
import { getAvatarUrl } from "@/lib/avatar";
import Link from "next/link";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

const ICON_MAP: Record<string, any> = {
  ShieldCheck, Users, Code2, Bug, UserX, Handshake, Star, Gem, FileText, ExternalLink
};

interface Submission {
  id: string;
  status: string;
  content: any;
  reviewNote?: string;
  createdAt: string;
  user: {
    username: string;
    xboxId: string;
    role: string;
    profile?: { profilePicture: string | null } | null;
  };
  form?: {
    title: string;
    icon: string;
    color: string;
  };
}

import { apiFetch } from "@/lib/api";

export default function SubmissionDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { token, user: currentUser } = useAuth();
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [loading, setLoading] = useState(true);
  const [reviewNote, setReviewNote] = useState("");

  useEffect(() => {
    if (id) {
      fetchSubmission();
    }
  }, [id]);

  const fetchSubmission = async () => {
    try {
      const data = await apiFetch(`/api/portal/submissions/${id}`);
      setSubmission(data);
      if (data.reviewNote) setReviewNote(data.reviewNote);
    } catch (error) {
      toast.error("Could not load submission details.");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (status: string) => {
    try {
      await apiFetch(`/api/portal/submissions/${id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status, reviewNote })
      });

      toast.success(`Submission is now ${status.toLowerCase()}.`);
      fetchSubmission();
    } catch (error) {
      toast.error("Failed to update submission status.");
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <Link href="/portal" className="inline-flex items-center gap-2 text-[0.6rem] font-black tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors group">
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          Back to Portal
        </Link>

        {loading ? (
          <AutoSkeleton isLoading={true}>
            <div className="space-y-10">
              <div className="h-64 rounded-3xl bg-card/30" />
              <div className="h-[500px] rounded-3xl bg-card/20" />
            </div>
          </AutoSkeleton>
        ) : submission ? (
          <>
            {/* Header Card (Updated with Reference Style) */}
            <div className={`relative rounded-4xl ${submission.status === 'APPROVED' ? 'bg-[#2ecc71]' : submission.status === 'REJECTED' ? 'bg-[#e74c3c]' : 'bg-[#3498db]'} overflow-hidden shadow-2xl transition-colors duration-500`}>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-white/10 to-transparent opacity-30 pointer-events-none" />
              
              <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center text-center md:text-left relative z-10">
                <div className="relative group shrink-0">
                  <div className="relative w-32 h-32 bg-white/20 rounded-4xl flex items-center justify-center p-3 shadow-2xl backdrop-blur-md">
                    <Image
                      src={getAvatarUrl(submission.user.profile?.profilePicture, submission.user.username, submission.user.xboxId)}
                      alt={submission.user.username}
                      width={100}
                      height={100}
                      className="object-contain image-render-pixel scale-110 drop-shadow-2xl"
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-4 justify-center md:justify-start">
                        <h1 className="text-4xl md:text-6xl font-black font-title text-white tracking-tighter leading-none">
                          {submission.user.username}
                        </h1>
                        <div className="px-3 py-1 rounded-lg bg-white text-[0.7rem] font-black uppercase text-black shadow-xl">
                          {submission.status === 'REJECTED' ? 'DENIED' : submission.status}
                        </div>
                      </div>
                      <p className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-widest flex items-center gap-2 justify-center md:justify-start">
                        <User size={14} className="text-white" /> {submission.user.xboxId}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                    <div className="px-5 py-2.5 rounded-2xl bg-white/20 text-white text-[0.7rem] font-black uppercase tracking-widest flex items-center gap-3 backdrop-blur-md">
                      {React.createElement(ICON_MAP[submission.form?.icon || ''] || FileText, { size: 14 })}
                      {submission.form?.title || 'Unknown Form'}
                    </div>
                    <div className="px-5 py-2.5 rounded-2xl bg-white/10 text-white text-[0.7rem] font-black uppercase tracking-widest flex items-center gap-3 backdrop-blur-md">
                      <Calendar size={14} /> {new Date(submission.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Section (Now at Top) */}
            <div className="relative rounded-4xl bg-primary/5 border border-primary/10 overflow-hidden shadow-lg p-8 md:p-10 space-y-6">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/40" />
              <h3 className="text-xl md:text-2xl font-black font-title capitalize tracking-tight flex items-center gap-3">
                <Shield size={22} className="text-primary" /> Review Message
              </h3>
              
              {submission.status === 'PENDING' && currentUser?.role === 'ADMIN' ? (
                <div className="space-y-6">
                  <Textarea
                    placeholder="Provide detailed feedback or reasoning..."
                    value={reviewNote}
                    onChange={(e) => setReviewNote(e.target.value)}
                    className="bg-black/40 border-white/5 rounded-2xl min-h-[160px] focus:border-primary/50 text-[0.95rem] p-6 leading-relaxed shadow-inner"
                  />
                  <div className="flex flex-col md:flex-row gap-6">
                    <Button
                      onClick={() => updateStatus('APPROVED')}
                      className="flex-1 py-10 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xl shadow-2xl transition-all flex gap-3 capitalize"
                    >
                      <CheckCircle size={24} /> Approve Submission
                    </Button>
                    <Button
                      onClick={() => updateStatus('REJECTED')}
                      variant="outline"
                      className="flex-1 py-10 rounded-2xl border-red-500/20 hover:bg-red-500/10 text-red-500 font-black text-xl transition-all flex gap-3 capitalize"
                    >
                      <XCircle size={24} /> Reject Submission
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-8 rounded-2xl bg-black/20 border border-white/5">
                  <p className="text-[0.95rem] md:text-lg font-medium italic text-foreground/80 leading-relaxed whitespace-pre-wrap">
                    {submission.reviewNote || "Awaiting final decision and reviewer feedback."}
                  </p>
                </div>
              )}
            </div>

            {/* Content Details */}
            <Card className="rounded-[2.5rem] bg-card/20 backdrop-blur-md border-border/10 shadow-xl overflow-hidden">
              <CardHeader className="p-8 pb-4 border-b border-white/5">
                <CardTitle className="text-xl font-black font-title text-foreground tracking-tight flex items-center gap-3 capitalize">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <BadgeCheck size={20} />
                  </div>
                  Application Content
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 md:p-12 space-y-12 focus:outline-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                  {Object.entries(submission.content).map(([key, value]: [string, any], index) => (
                    <div key={index} className={`space-y-4 ${typeof value === 'string' && value.length > 100 ? 'md:col-span-2' : ''}`}>
                      <h4 className="text-[0.7rem] font-bold text-primary capitalize tracking-[0.15em] opacity-60">
                        {key.replace(/_/g, ' ')}
                      </h4>
                      <div className="p-8 rounded-3xl bg-black/30 border border-white/5 text-[1rem] font-medium leading-relaxed text-foreground md:text-foreground/90 shadow-inner whitespace-pre-wrap">
                        {String(value)}
                      </div>
                    </div>
                  ))}
                </div>

                {currentUser?.role === 'ADMIN' && submission.status !== 'PENDING' && (
                  <div className="pt-10 border-t border-white/5 text-center">
                    <p className="text-[0.7rem] font-bold text-muted-foreground uppercase tracking-widest mb-6">
                      Application processed. <span className="text-primary cursor-pointer hover:underline font-black" onClick={() => updateStatus('PENDING')}>Click here to reset state.</span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        ) : (
          <div className="text-center py-20 bg-card/10 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-black mb-4">Submission not found</h2>
            <p className="text-muted-foreground mb-8">This application may have been removed or you don't have access.</p>
            <Button onClick={() => router.push('/portal')}>Return to Portal</Button>
          </div>
        )}
      </div>
    </div>
  );
}
