"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Bug,
  ArrowRight,
  MousePointer2
} from "lucide-react";

const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const start = setTimeout(() => {
      let index = 0;
      timeout = setInterval(() => {
        setDisplayed(text.slice(0, index + 1));
        index++;
        if (index >= text.length) clearInterval(timeout);
      }, 50);
    }, delay);
    return () => {
      clearTimeout(start);
      clearInterval(timeout);
    };
  }, [text, delay]);
  return <span className="text-[11px] text-zinc-300 font-medium whitespace-pre">{displayed}</span>;
}

export function ProductStage() {
  const [view, setView] = useState<"SELECT" | "SUBMIT" | "ADMIN">("SELECT");

  useEffect(() => {
    const timer = setInterval(() => {
      setView((prev) => {
        if (prev === "SELECT") return "SUBMIT";
        if (prev === "SUBMIT") return "ADMIN";
        return "SELECT";
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[520px] rounded-3xl bg-[#080808] border border-white/[0.06] shadow-[0_20px_80px_rgba(0,0,0,0.6)] overflow-hidden"
      >
        {/* Header bar */}
        <div className="h-12 border-b border-white/[0.05] bg-[#060606] px-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-zinc-800" />
              <div className="size-2.5 rounded-full bg-zinc-800" />
              <div className="size-2.5 rounded-full bg-zinc-800" />
            </div>
            <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest ml-3">
              {view === "ADMIN" ? "Admin Panel" : "Community Portal"} — Live
            </span>
          </div>
          <div className="flex bg-zinc-900/80 border border-white/[0.05] rounded-lg p-0.5">
            <div className={`px-3 py-1 rounded-md text-[8px] font-black uppercase transition-all ${view !== "ADMIN" ? "bg-zinc-800 text-white" : "text-zinc-600"}`}>Portal</div>
            <div className={`px-3 py-1 rounded-md text-[8px] font-black uppercase transition-all ${view === "ADMIN" ? "bg-zinc-800 text-white" : "text-zinc-600"}`}>Admin</div>
          </div>
        </div>

        {/* Content area */}
        <div className="relative h-[calc(100%-3rem)] w-full p-8 md:p-10">
          <AnimatePresence mode="wait">

            {/* VIEW 1 — Portal selection cards */}
            {view === "SELECT" && (
              <motion.div
                key="select"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-5 h-full"
              >
                {/* Animated cursor */}
                <motion.div
                  animate={{ x: [20, 320, 160], y: [20, 80, 160] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-50 pointer-events-none"
                >
                  <MousePointer2 className="size-5 text-primary fill-primary drop-shadow-lg" />
                </motion.div>

                {[
                  { title: "Staff Apps", desc: "Apply for a staff role", icon: ShieldCheck, accent: "text-primary", ring: true },
                  { title: "Creator Program", desc: "Join the creator team", icon: Users, accent: "text-blue-400", ring: false },
                  { title: "Bug Reports", desc: "Report an issue", icon: Bug, accent: "text-rose-400", ring: false }
                ].map((opt, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`p-7 rounded-2xl bg-white/[0.03] border flex flex-col gap-6 transition-all ${opt.ring ? "border-primary/30 ring-1 ring-primary/20" : "border-white/[0.06] hover:border-white/10"}`}
                  >
                    <div className={`size-12 rounded-xl bg-white/[0.04] flex items-center justify-center ${opt.accent}`}>
                      <opt.icon className="size-6" />
                    </div>
                    <div>
                      <div className="text-lg font-black text-white">{opt.title}</div>
                      <div className="text-[11px] text-zinc-600 font-medium mt-1">{opt.desc}</div>
                    </div>
                    <ArrowRight className="size-4 text-zinc-700 mt-auto" />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* VIEW 2 — Form submission */}
            {view === "SUBMIT" && (
              <motion.div
                key="submit"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-center h-full"
              >
                <div className="w-full max-w-md p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-7 relative overflow-hidden">
                  {/* Progress bar */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-white/[0.05]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4 }}
                      className="h-full bg-primary"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <ShieldCheck className="size-5" />
                    </div>
                    <h3 className="text-xl font-black text-white">Staff Application</h3>
                  </div>

                  <div className="space-y-4">
                    {["Username", "Experience", "Why do you want to join?"].map((label, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">{label}</div>
                        <div className="h-10 w-full bg-black/30 border border-white/[0.06] rounded-lg flex items-center px-3">
                          {i === 0 && (
                            <TypingText text="JaysonCodes" delay={800} />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full h-12 bg-primary text-primary-foreground font-black uppercase text-[10px] tracking-[0.2em] rounded-lg">
                    Submit Application
                  </button>
                </div>
              </motion.div>
            )}

            {/* VIEW 3 — Admin dashboard */}
            {view === "ADMIN" && (
              <motion.div
                key="admin"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 h-full"
              >
                {/* Metric cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "Total Users", value: "2,841" },
                    { label: "Open Tickets", value: "37" },
                    { label: "Pending Apps", value: "142" },
                    { label: "Uptime", value: "99.9%" }
                  ].map((card, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-3">
                      <div className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.2em]">{card.label}</div>
                      <div className="text-xl font-black text-white">{card.value}</div>
                    </div>
                  ))}
                </div>

                {/* Submission alert */}
                <div className="p-6 rounded-2xl bg-black/40 border border-white/[0.05] space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-black text-white">New Submission</div>
                    <div className="flex items-center gap-2 px-2.5 py-1 bg-primary/10 rounded-full">
                      <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-[8px] font-black text-primary uppercase tracking-wider">Review</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="size-12 rounded-xl bg-zinc-900 border border-white/[0.05] flex items-center justify-center">
                      <Users className="size-5 text-zinc-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-black text-zinc-200">Staff Application: Jayson</div>
                      <div className="text-[10px] text-zinc-600">Submitted 2m ago · #12492</div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-[9px] font-black uppercase">Approve</div>
                      <div className="px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-400 text-[9px] font-black uppercase">Decline</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
