"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Lock, FileText } from 'lucide-react';

export default function PrivacyPage() {
  const points = [
    {
      title: "Information Collection",
      content: "We collect your Xbox LIVE Gamertag and unique identifier (XUID) when you authenticate via Microsoft. We do not store your passwords or personal credit card information."
    },
    {
      title: "How We Use Data",
      content: "Your data is used to maintain your profile, track your in-game progress, and manage your applications within the Floik portal."
    },
    {
      title: "Data Security",
      content: "We implement industry-standard encryption and security protocols to protect your information from unauthorized access or disclosure."
    },
    {
      title: "Third-Party Sharing",
      content: "We do not sell your personal data to third parties. Data is only shared with platform providers required to operate our servers (e.g., Microsoft/Xbox API)."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative p-12 md:p-20 rounded-[3rem] bg-card/30 backdrop-blur-3xl border border-border/10 overflow-hidden shadow-2xl"
        >
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full -ml-32 -mb-32 pointer-events-none" />

          <div className="relative space-y-4 mb-12">
            <h2 className="text-primary text-[0.6rem] font-black uppercase tracking-[0.4em]">Data Integrity</h2>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-none">Privacy <span className="text-primary italic">Policy</span></h1>
            <p className="text-muted-foreground font-medium">Last Updated: May 19, 2026</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {points.map((point, idx) => (
              <div key={idx} className="space-y-4 p-6 rounded-3xl bg-background/20 border border-border/5">
                <div className="text-primary mb-2">
                  {idx === 0 && <Eye size={20} />}
                  {idx === 1 && <FileText size={20} />}
                  {idx === 2 && <Lock size={20} />}
                  {idx === 3 && <ShieldAlert size={20} />}
                </div>
                <h3 className="text-lg font-black text-foreground tracking-tight">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-medium">{point.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 space-y-4">
            <h3 className="text-xl font-black text-foreground tracking-tight">Your Rights</h3>
            <p className="text-muted-foreground leading-relaxed font-medium">
              You have the right to request a copy of the data we hold about you or to request the deletion of your account and all associated data. To do so, please contact us via our official support channels.
            </p>
          </div>
        </motion.div>

        <div className="text-center space-y-4">
          <p className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-muted-foreground">Copyright 2026 Floik Network</p>
          <div className="h-px w-20 bg-primary/20 mx-auto" />
        </div>
      </div>
    </div>
  );
}

function ShieldAlert({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="m12 10 4 4" />
      <path d="m18 13 4-4" />
      <path d="m18 9 4 4" />
      <path d="M20 6.7L12 3 4 6.7v5.8c0 5.1 3.4 9.8 8 11 4.6-1.2 8-5.9 8-11" />
    </svg>
  );
}
