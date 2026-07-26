"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Shield, Heart } from 'lucide-react';
import Image from 'next/image';

const VALUES = [
  {
    icon: Shield,
    title: "Secure Governance",
    description: "Our portal is built with enterprise-grade security, giving you total control over user access and administrative roles."
  },
  {
    icon: Target,
    title: "Community Growth",
    description: "Every tool we build is optimized for community retention and streamlined support workflows, helping you scale with ease."
  },
  {
    icon: Zap,
    title: "Open Source Power",
    description: "Transparency is our foundation. Floik is an open-source ecosystem designed to be audited, extended, and improved by everyone."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative space-y-6"
        >
          <h2 className="text-primary text-[0.7rem] font-black uppercase tracking-[0.4em] mb-4">The Studio</h2>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground leading-tight">
            The next generation of <br />
            <span className="text-primary italic">Community Commerce.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
            Floik is a premium, open-source commerce platform designed to maximize revenue, automate fulfillment, and empower community growth for global networks.
          </p>
        </motion.div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
              <Shield size={24} />
            </div>
            <h2 className="text-4xl font-black leading-tight">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded in 2026, Floik emerged from a simple realization: community monetization is broken. Most networks are forced to use closed-source, high-fee platforms that don't scale.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We decided to build the ultimate open-source successor—a unified commerce portal that puts revenue and performance at the forefront. Built for community leaders who demand the gold standard in digital sales.
            </p>
            <div className="flex gap-10 pt-4">
              <div>
                <div className="text-3xl font-black text-primary">2026</div>
                <div className="text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground">Established</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary">100%</div>
                <div className="text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground">Indie Owned</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-20" />
            <div className="relative rounded-[3rem] overflow-hidden border border-border/10 aspect-video bg-card/40 backdrop-blur-3xl flex items-center justify-center">
              <Image src="/assets/floik.png" alt="Floik Logo" width={150} height={150} className="opacity-40 grayscale brightness-200 object-contain" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-card/20 border border-border/10 hover:border-primary/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <val.icon size={28} />
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight">{val.title}</h3>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-16 rounded-[4rem] bg-linear-to-br from-primary via-primary to-emerald-500 text-primary-foreground text-center space-y-8 shadow-2xl shadow-primary/20"
        >
          <Heart size={48} className="mx-auto text-white/50" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
            Ready to scale your <br /> community revenue?
          </h2>
          <p className="max-w-xl mx-auto text-primary-foreground/70 font-bold">
            Join the networks already processing millions with Floik's open-source power.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <button className="px-10 py-5 bg-white text-primary rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl transform active:scale-95 transition-all" onClick={() => window.location.href = '/portal'}>Enter Portal</button>
            <button className="px-10 py-5 bg-primary-foreground/10 backdrop-blur-md text-white border border-white/10 rounded-2xl font-black uppercase text-xs tracking-widest transform active:scale-95 transition-all">View Docs</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
