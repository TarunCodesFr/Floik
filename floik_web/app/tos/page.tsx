"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Info } from 'lucide-react';

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using Floik's Minecraft servers, websites, or services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services."
    },
    {
      title: "2. Rules of Conduct",
      content: "Players must behave professionally and respectfully. Griefing, cheating, harassment, and exploiting bugs are strictly prohibited. We reserve the right to terminate access to any user who violates these guidelines without notice."
    },
    {
      title: "3. Virtual Goods and Purchases",
      content: "All purchases made on our platform are for virtual goods that hold no real-world value. These purchases are final and non-refundable, except at our sole discretion or as required by law."
    },
    {
      title: "4. Disclaimer",
      content: "Our services are provided 'as is' without warranty of any kind. Floik is not responsible for any data loss, service interruptions, or actions of third parties within our Minecraft network."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative p-12 md:p-20 rounded-[3rem] bg-card/30 backdrop-blur-3xl border border-border/10 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />

          <div className="relative space-y-4 mb-12">
            <h2 className="text-primary text-[0.6rem] font-black uppercase tracking-[0.4em]">Legal Framework</h2>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">Terms of <span className="text-primary italic">Service</span></h1>
            <p className="text-muted-foreground font-medium">Last Updated: May 19, </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xl font-black text-foreground tracking-tight">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-primary/5 border border-primary/10 flex gap-6 items-start">
            <div className="p-3 rounded-2xl bg-primary/20 text-primary shrink-0">
              <ShieldAlert size={24} />
            </div>
            <p className="text-sm font-bold text-muted-foreground leading-relaxed">
              Please note that Floik is not affiliated with, endorsed by, or in any way associated with Mojang AB or Microsoft. Minecraft is a trademark of Mojang AB.
            </p>
          </div>
        </motion.div>

        <div className="flex justify-between items-center px-8 text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground">
          <p>© 2026 FLOIK</p>
          <div className="flex gap-6">
            <button className="hover:text-primary transition-colors">Contact Support</button>
            <button className="hover:text-primary transition-colors">Privacy Policy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
