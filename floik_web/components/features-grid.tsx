"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FEATURES = [
  {
    title: "User Management",
    tagline: "Automated roles",
    description: "Manage thousands of users with granular permission layers and automated roles.",
    size: "lg:col-span-2",
  },
  {
    title: "Instant Verification",
    tagline: "Zero latency",
    description: "Verify community status instantly via secured workflow webhooks.",
    size: "lg:col-span-1",
  },
  {
    title: "Actionable Insights",
    tagline: "Deep engagement",
    description: "Understand your community growth with advanced engagement analysis.",
    size: "lg:col-span-1",
  },
  {
    title: "Open Ecosystem",
    tagline: "Your rules",
    description: "Fully extensible portal architecture that adapts to your community vision.",
    size: "lg:col-span-2",
  }
];

export function FeaturesGrid() {
  return (
    <section id="features" className="bg-[#030303] py-48 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32 space-y-4">
           <div className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Foundations</div>
           <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
             The pillars of <span className="text-primary italic">Universal</span> governance.
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`p-12 rounded-[2.5rem] flex flex-col gap-10 hover:scale-[1.02] transition-all duration-500 ${f.title === "User Management" ? 'bg-primary text-primary-foreground' : 'bg-zinc-950 border border-white/5'} ${f.size}`}
            >
               <div className="space-y-4">
                  <div className={`text-[10px] font-black uppercase tracking-[0.4em] ${f.title === "User Management" ? 'text-white/60' : 'text-primary'}`}>{f.tagline}</div>
                  <h3 className="text-4xl font-black tracking-tight leading-none">{f.title}</h3>
               </div>
               <p className={`font-medium leading-relaxed max-w-sm ${f.title === "User Management" ? 'text-primary-foreground/70' : 'text-zinc-500'}`}>
                  {f.description}
               </p>
               <div className={`mt-auto pt-8 border-t flex items-center justify-between ${f.title === "User Management" ? 'border-black/10' : 'border-white/5'}`}>
                  <span className="text-[10px] font-black uppercase tracking-widest">Learn More</span>
                  <ArrowRight className="size-5" />
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}