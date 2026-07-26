"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Users, 
  Code2, 
  Bug, 
  UserX, 
  Handshake,
  ArrowRight,
  TrendingUp,
  Activity,
  History
} from "lucide-react";

export function MiniPortal() {
  const options = [
    { title: "Staff Apps", icon: ShieldCheck, color: "text-primary" },
    { title: "Dev Program", icon: Code2, color: "text-emerald-500" },
    { title: "Partner", icon: Handshake, color: "text-violet-500" }
  ];

  return (
    <div className="w-full h-full bg-card/40 backdrop-blur-3xl rounded-[2.5rem] border border-border/10 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
           <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
           <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Portal / Active Session</span>
        </div>
        <div className="flex p-1 bg-white/5 rounded-lg border border-white/5">
           <div className="px-3 py-1 rounded-md bg-zinc-900 text-[8px] font-black uppercase text-white">Workflows</div>
           <div className="px-3 py-1 text-[8px] font-black uppercase text-zinc-500">History</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 flex-1 overflow-hidden">
        <div className="grid grid-cols-2 gap-4">
           {options.map((opt, i) => (
             <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                <div className={`size-10 rounded-xl bg-primary/10 flex items-center justify-center ${opt.color}`}>
                   <opt.icon className="size-5" />
                </div>
                <div>
                   <div className="text-[10px] font-black text-white">{opt.title}</div>
                   <div className="text-[8px] text-zinc-500 font-medium">Click to apply</div>
                </div>
             </div>
           ))}
           <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col justify-between">
              <TrendingUp className="size-5 text-primary" />
              <div className="text-[10px] font-black text-white uppercase tracking-tight">Success Rate: 98%</div>
           </div>
        </div>

        <div className="p-4 rounded-2xl bg-black/40 border border-border/5 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="size-8 rounded-lg bg-zinc-800" />
              <div>
                 <div className="text-[10px] font-black text-white">Staff Application</div>
                 <div className="text-[8px] text-emerald-500 font-bold uppercase">Approved</div>
              </div>
           </div>
           <ArrowRight className="size-3 text-zinc-600" />
        </div>
      </div>
    </div>
  );
}

export function MiniAdmin() {
  return (
    <div className="w-full h-full bg-card/40 backdrop-blur-3xl rounded-[2.5rem] border border-border/10 overflow-hidden flex flex-col">
       <div className="p-6 border-b border-border/5 flex items-center justify-between">
          <div className="flex -space-x-2">
             {[1,2,3].map(i => <div key={i} className="size-6 rounded-full border-2 border-zinc-900 bg-zinc-800" />)}
          </div>
          <div className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">Admin Dashboard</div>
       </div>

       <div className="p-8 space-y-8 flex-1 overflow-hidden">
          <div className="space-y-2">
             <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Platform Metrics</div>
             <div className="text-4xl font-black text-white">$42k</div>
             <div className="flex items-center gap-2 text-emerald-500 font-black text-[10px]">
                <Activity className="size-3" /> +12.4% THIS MONTH
             </div>
          </div>

          <div className="flex items-end gap-2 h-24">
             {[30, 50, 45, 80, 60, 90, 70].map((h, i) => (
                <div key={i} className="flex-1 bg-white/5 border-t border-white/10 rounded-t-lg transition-all hover:bg-primary/20" style={{ height: `${h}%` }} />
             ))}
          </div>

          <div className="pt-4 space-y-3">
             <div className="flex items-center justify-between p-3 rounded-xl bg-white/3 border border-white/5">
                <span className="text-[9px] font-black text-zinc-400 uppercase">Review Pending</span>
                <span className="text-[9px] font-black text-white">14 APPS</span>
             </div>
             <div className="flex items-center justify-between p-3 rounded-xl bg-white/3 border border-white/5">
                <span className="text-[9px] font-black text-zinc-400 uppercase">System Uptime</span>
                <span className="text-[9px] font-black text-primary">99.9%</span>
             </div>
          </div>
       </div>
    </div>
  );
}
