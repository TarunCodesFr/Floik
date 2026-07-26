"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Code2, 
  Layout, 
  Eye, 
  GitBranch, 
  Smartphone, 
  Download,
  ChevronRight,
  Sparkles,
  Command,
  Search,
  MessageSquare
} from "lucide-react";

export function IDEStage() {
  const [activeTab, setActiveTab] = useState("PLAN");
  const [typedText, setTypedText] = useState("");
  const fullText = "Build me a professional community portal for Floik with user management and ticketing.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 mb-32">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative group h-[700px] rounded-4xl bg-[#0c0c0c] border border-zinc-800/50 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
      >
        {/* IDE Header */}
        <div className="h-14 border-b border-zinc-800/50 bg-[#080808] px-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-6">
            {/* Window Controls */}
            <div className="flex gap-1.5">
               <div className="size-3 rounded-full bg-zinc-800" />
               <div className="size-3 rounded-full bg-zinc-800" />
               <div className="size-3 rounded-full bg-zinc-800" />
            </div>
            
            {/* Tabs */}
            <div className="flex items-center bg-[#121212] rounded-lg p-1 border border-zinc-800/50">
               {[
                 { id: "PLAN", icon: Layout },
                 { id: "DESIGN", icon: Sparkles },
                 { id: "CODE", icon: Code2 },
                 { id: "PREVIEW", icon: Eye }
               ].map((tab) => (
                 <button
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id)}
                   className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-[10px] font-black tracking-widest transition-all ${activeTab === tab.id ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-white"}`}
                 >
                   <tab.icon className="size-3" />
                   {tab.id}
                 </button>
               ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800/50 text-[10px] font-bold text-zinc-400">
                <GitBranch className="size-3" />
                Assets
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800/50 text-[10px] font-bold text-zinc-400">
                <Smartphone className="size-3" />
                Test on Mobile
             </div>
             <div className="px-4 py-1.5 rounded-lg bg-white text-black text-[10px] font-black uppercase tracking-widest">
                Export Code
             </div>
          </div>
        </div>

        {/* IDE Main Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <div className="w-80 border-r border-zinc-800/50 bg-[#0a0a0a] p-6 space-y-8 flex flex-col">
             <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Workspace</div>
                   <Command className="size-3 text-zinc-600" />
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50 flex items-center gap-3">
                   <div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Sparkles className="size-4 text-primary" />
                   </div>
                   <div>
                      <div className="text-[11px] font-bold text-white tracking-tight">portal_v1.floik</div>
                      <div className="text-[9px] text-zinc-500">Last edited 2m ago</div>
                   </div>
                </div>
             </div>

             <div className="space-y-3 flex-1">
                <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Progress (4/6)</div>
                {[
                  { label: "Building Architecture", status: "DONE" },
                  { label: "Finalising the UI", status: "DONE" },
                  { label: "Making the plan", status: "DONE" },
                  { label: "Verifying the build", status: "IN_PROGRESS" },
                  { label: "Deploying API", status: "PENDING" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 py-1">
                     <div className={`size-4 rounded-full border-2 flex items-center justify-center ${step.status === "DONE" ? "border-emerald-500 bg-emerald-500/20" : step.status === "IN_PROGRESS" ? "border-primary animate-pulse" : "border-zinc-800"}`}>
                        {step.status === "DONE" && <div className="size-1.5 bg-emerald-500 rounded-full" />}
                     </div>
                     <span className={`text-[11px] font-medium ${step.status === "DONE" ? "text-zinc-500 line-through" : step.status === "IN_PROGRESS" ? "text-white" : "text-zinc-600"}`}>
                        {step.label}
                     </span>
                  </div>
                ))}
             </div>

             {/* Chat Input */}
             <div className="mt-auto relative">
                <div className="absolute -top-12 left-0 right-0 p-3 rounded-xl bg-[#121212] border border-zinc-800/50 text-[10px] text-zinc-400 italic">
                   {typedText}
                   <span className="animate-pulse">|</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#080808] border border-zinc-800/50 flex items-center gap-3 group/input focus-within:border-primary/50 transition-all">
                   <MessageSquare className="size-4 text-zinc-600" />
                   <input 
                     placeholder="Enter command..." 
                     className="bg-transparent border-none outline-none text-[11px] text-zinc-300 w-full font-medium"
                     readOnly
                   />
                   <div className="size-6 rounded-lg bg-zinc-900 border border-zinc-800/50 flex items-center justify-center text-zinc-600">
                      <ChevronRight className="size-3" />
                   </div>
                </div>
             </div>
          </div>

          {/* Code/Content Panel */}
          <div className="flex-1 bg-[#0c0c0c] p-12 overflow-y-auto">
             <div className="max-w-2xl">
                <AnimatePresence mode="wait">
                  {activeTab === "PLAN" && (
                    <motion.div 
                      key="plan"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                       <div className="space-y-4">
                          <h2 className="text-4xl font-black text-white tracking-tighter">Project Plan</h2>
                          <p className="text-zinc-500 text-sm leading-relaxed max-w-lg font-medium">
                             A unified dashboard to track community metrics, manage support requests, and orchestrate automated workflows.
                          </p>
                       </div>

                       <div className="grid grid-cols-1 gap-8 pt-8">
                          {[
                            { title: "Core Features", items: ["Real-time engagement tracking", "Secure workflow fulfillment", "Custom administrative roles"] },
                            { title: "Target Audience", items: ["Community CEOs", "Operations Leads", "Support Teams"] }
                          ].map((sec, i) => (
                             <div key={i} className="space-y-4">
                                <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">0{i+1}. {sec.title}</div>
                                <div className="space-y-3">
                                   {sec.items.map((item, j) => (
                                     <div key={j} className="flex items-center gap-3 text-sm text-zinc-400 font-medium">
                                        <div className="size-1 bg-zinc-800 rounded-full" />
                                        {item}
                                     </div>
                                   ))}
                                </div>
                             </div>
                          ))}
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
