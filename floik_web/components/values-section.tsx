"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Code2, Users, Activity, Lock, Box } from "lucide-react";

const VALUES = [
  {
    title: "Open Source Heritage",
    description: "Built for transparency. Every line of code is auditable and extensible by the community.",
    icon: Code2,
    size: "lg:col-span-2",
  },
  {
    title: "Self-Sovereignty",
    description: "You own your data. Full control over user governance and identity.",
    icon: Lock,
    size: "lg:col-span-1",
  },
  {
    title: "Granular Controls",
    description: "Enterprise-grade user management with custom roles and permission layers.",
    icon: ShieldCheck,
    size: "lg:col-span-1",
  },
  {
    title: "Global Operations",
    description: "Orchestrate community workflows across any timezone with zero administrative lag.",
    icon: Activity,
    size: "lg:col-span-2",
  }
];

export function ValuesSection() {
  return (
    <section id="values" className="bg-[#030303] py-48 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 space-y-6">
           <div className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">The Floik Standard</div>
           <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Built for <span className="text-primary italic">Governance.</span></h2>
           <p className="max-w-2xl mx-auto text-zinc-500 font-medium text-lg italic">
             "We provide the infrastructure. You provide the vision. <br />
             An open-source ecosystem designed for the modern community."
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-10 rounded-4xl bg-zinc-950 border border-white/5 flex flex-col gap-10 hover:bg-zinc-900 transition-all ${f.size}`}
            >
               <div className="size-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <f.icon className="size-8" />
               </div>
               <div className="space-y-4">
                  <h3 className="text-3xl font-black text-white tracking-tight">{f.title}</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed">
                     {f.description}
                  </p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
