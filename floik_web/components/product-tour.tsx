"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, ShieldCheck, Zap, Activity } from "lucide-react";

const TOUR_ITEMS = [
  {
    id: "identity",
    title: "Enterprise Identity",
    description: "Centrally manage every user, role, and permission across your ecosystem. Real-time syncing ensures no delays in access.",
    icon: Users,
    color: "from-blue-500/20 to-transparent",
    imageAccent: "bg-blue-500/10"
  },
  {
    id: "governance",
    title: "Automated Governance",
    description: "Set the rules once. Our engine enforces policies, tracks compliance, and automatically revokes access when criteria shift.",
    icon: ShieldCheck,
    color: "from-primary/20 to-transparent",
    imageAccent: "bg-primary/10"
  },
  {
    id: "workflows",
    title: "High-Velocity Workflows",
    description: "Trigger custom actions based on user behavior. Welcome flows, warning systems, and offboarding are handled instantly.",
    icon: Zap,
    color: "from-amber-500/20 to-transparent",
    imageAccent: "bg-amber-500/10"
  },
  {
    id: "auditing",
    title: "Immutable Auditing",
    description: "Every action is logged. Search, filter, and export your entire community's history with zero lag.",
    icon: Activity,
    color: "from-emerald-500/20 to-transparent",
    imageAccent: "bg-emerald-500/10"
  }
];

export function ProductTour() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#030303]">
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 gap-12 lg:gap-24">
        
        {/* Left Side: Sticky Text & Tabs */}
        <div className="w-full md:w-5/12 space-y-12">
           <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Capabilities</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]">
                Command your <br className="hidden md:block" />
                <span className="text-primary italic">infrastructure.</span>
              </h2>
           </div>

           <div className="relative border-l border-white/10 pl-6 space-y-12">
             {TOUR_ITEMS.map((item, index) => {
               // Calculate opacity based on scroll progress mapping
               const start = index * 0.25;
               const peak = start + 0.125;
               const end = start + 0.25;
               
               const opacity = useTransform(
                 scrollYProgress,
                 [start, peak, end],
                 [0.3, 1, 0.3]
               );

               const scale = useTransform(
                 scrollYProgress,
                 [start, peak, end],
                 [0.95, 1, 0.95]
               );

               return (
                 <motion.div key={item.id} style={{ opacity, scale }} className="relative">
                   <div className="flex items-center gap-4 mb-3">
                     <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                       <item.icon className="size-5 text-white" />
                     </div>
                     <h3 className="text-xl font-black text-white">{item.title}</h3>
                   </div>
                   <p className="text-zinc-500 font-medium leading-relaxed">
                     {item.description}
                   </p>
                 </motion.div>
               );
             })}
             
             {/* Progress Indicator line */}
             <motion.div 
               className="absolute -left-px top-0 w-[2px] bg-primary origin-top"
               style={{ scaleY: scrollYProgress }}
             />
           </div>
        </div>

        {/* Right Side: Visual Showcase */}
        <div className="w-full md:w-7/12 h-[50vh] md:h-[70vh] relative perspective-1000">
           <div className="absolute inset-0 rounded-[2.5rem] bg-zinc-950 border border-white/10 shadow-2xl overflow-hidden flex flex-col">
              {/* Fake UI Header */}
              <div className="h-14 border-b border-white/5 bg-[#0a0a0a] px-6 flex items-center gap-3">
                 <div className="flex gap-1.5">
                   <div className="size-2.5 rounded-full bg-zinc-800" />
                   <div className="size-2.5 rounded-full bg-zinc-800" />
                   <div className="size-2.5 rounded-full bg-zinc-800" />
                 </div>
              </div>
              
              {/* Dynamic UI Content based on scroll */}
              <div className="relative flex-1 p-8 overflow-hidden flex items-center justify-center">
                 {TOUR_ITEMS.map((item, index) => {
                   const start = index * 0.25;
                   const peak = start + 0.125;
                   const end = start + 0.25;

                   const opacity = useTransform(
                     scrollYProgress,
                     [start, peak, end],
                     [0, 1, 0]
                   );

                   const y = useTransform(
                     scrollYProgress,
                     [start, peak, end],
                     [40, 0, -40]
                   );

                   return (
                     <motion.div 
                       key={item.id} 
                       style={{ opacity, y, pointerEvents: "none" }}
                       className="absolute inset-0 flex items-center justify-center bg-linear-to-br"
                     >
                        <div className={`absolute inset-0 bg-linear-to-br opacity-20 ${item.color}`} />
                        <div className={`w-[85%] h-[85%] rounded-2xl border border-white/10 shadow-2xl flex flex-col p-6 gap-4 ${item.imageAccent} bg-opacity-50 backdrop-blur-md overflow-hidden relative`}>
                            {/* Window Header */}
                            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                               <item.icon className="size-4 text-white" />
                               <span className="text-xs font-black text-white">{item.title}</span>
                            </div>

                            {/* Dynamic Content */}
                            <div className="flex-1 overflow-hidden relative text-left">
                               {item.id === "identity" && (
                                 <div className="space-y-3">
                                    {["jayson.eth", "alex_dev", "guest_9012"].map((u, i) => (
                                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5">
                                         <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-md bg-zinc-800" />
                                            <span className="text-[11px] font-bold text-white">{u}</span>
                                         </div>
                                         <div className={`px-2 py-1 rounded text-[8px] font-black uppercase ${i === 0 ? "bg-primary/20 text-primary" : i === 1 ? "bg-blue-500/20 text-blue-400" : "bg-zinc-800 text-zinc-400"}`}>
                                           {i === 0 ? "Admin" : i === 1 ? "Moderator" : "Member"}
                                         </div>
                                      </div>
                                    ))}
                                 </div>
                               )}
                               
                               {item.id === "governance" && (
                                 <div className="space-y-4">
                                    <div className="p-3 rounded-lg bg-black/40 border border-primary/20 space-y-2">
                                       <div className="text-[9px] font-black text-primary uppercase tracking-widest">Global Policy Active</div>
                                       <div className="text-[11px] text-zinc-300">Require 2FA for all Moderator roles.</div>
                                    </div>
                                    <div className="p-3 rounded-lg bg-black/40 border border-red-500/20 space-y-2">
                                       <div className="text-[9px] font-black text-red-500 uppercase tracking-widest">Auto-Revoke</div>
                                       <div className="text-[11px] text-zinc-300">Remove access upon 3 failed verified logins.</div>
                                    </div>
                                 </div>
                               )}

                               {item.id === "workflows" && (
                                 <div className="flex flex-col gap-2 relative">
                                    <div className="absolute left-4 top-4 bottom-4 w-px bg-white/10" />
                                    <div className="flex items-center gap-4 z-10">
                                       <div className="size-8 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                                          <div className="size-2 rounded-full bg-amber-400" />
                                       </div>
                                       <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex-1">
                                          <div className="text-[10px] font-bold text-white">Trigger: User Joins</div>
                                       </div>
                                    </div>
                                    <div className="flex items-center gap-4 z-10 mt-2">
                                       <div className="size-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                                          <div className="size-2 rounded-full bg-emerald-400" />
                                       </div>
                                       <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex-1">
                                          <div className="text-[10px] font-bold text-white">Action: Assign 'Member'</div>
                                       </div>
                                    </div>
                                 </div>
                               )}

                               {item.id === "auditing" && (
                                 <div className="space-y-3 font-mono text-[9px]">
                                    {[
                                      { t: "10:42 AM", msg: "Policy 'Auto-Revoke' updated", usr: "jayson.eth" },
                                      { t: "10:05 AM", msg: "Failed login attempt (x3)", usr: "guest_9012" },
                                      { t: "10:05 AM", msg: "Access revoked via workflow", usr: "SYSTEM" },
                                    ].map((log, i) => (
                                      <div key={i} className="flex gap-4 p-2 border-b border-white/5">
                                         <span className="text-zinc-600 shrink-0">{log.t}</span>
                                         <span className="text-emerald-400 shrink-0">{log.usr}</span>
                                         <span className="text-zinc-300 truncate">{log.msg}</span>
                                      </div>
                                    ))}
                                 </div>
                               )}
                            </div>
                        </div>
                     </motion.div>
                   );
                 })}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
