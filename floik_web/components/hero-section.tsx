"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Users,
  Zap,
  Box
} from "lucide-react";

import { ProductStage } from "./product-stage";

export function HeroSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const logoScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.5]);
  const logoY = useTransform(scrollYProgress, [0, 0.15], [0, -120]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const headlineY = useTransform(scrollYProgress, [0, 0.12], [0, -60]);
  const stageOpacity = useTransform(scrollYProgress, [0.08, 0.2], [0, 1]);
  const stageY = useTransform(scrollYProgress, [0.08, 0.2], [120, 0]);
  const stageScale = useTransform(scrollYProgress, [0.08, 0.2], [0.9, 1]);

  // Orbital ring sizing
  const ring1 = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const ring2 = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#030303] min-h-[200vh]">
      {/* Grid pattern background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-[radial-gradient(circle_at_top,rgba(216,183,122,0.06),transparent_70%)]" />
      </div>

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">

        {/* Logo — focal center, shrinks on scroll */}
        <motion.div
          style={{ scale: logoScale, y: logoY }}
          className="relative z-50 mb-14 flex justify-center"
        >
          <div className="absolute -inset-24 rounded-full bg-primary/15 blur-[120px] animate-pulse" />
          <Image
            src="/assets/floik.png"
            alt="Floik logo"
            width={160}
            height={160}
            className="relative z-10 drop-shadow-[0_0_80px_rgba(184,144,82,0.4)] brightness-150"
          />

          {/* Orbital rings — appear on scroll */}
          <motion.div
            style={{ opacity: ring1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[420px] border border-white/[0.04] rounded-full pointer-events-none"
          />
          <motion.div
            style={{ opacity: ring2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] border border-white/[0.03] rounded-full pointer-events-none"
          />
        </motion.div>

        {/* Headline block — fades out */}
        <motion.div
          style={{ opacity: headlineOpacity, y: headlineY }}
          className="text-center space-y-8 max-w-4xl"
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.35em] text-zinc-500">
              Open Source Governance Engine
            </span>
          </div> */}

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black tracking-[-0.03em] text-white leading-[0.9]">
            The portal for{" "}
            <span className="text-primary italic font-black">Community Ops.</span>
          </h1>

          <p className="max-w-lg mx-auto text-base md:text-lg text-zinc-500 font-medium leading-relaxed">
            Manage users, automate workflows, and secure your community
            infrastructure — all from one open-source hub.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="h-14 px-10 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-[0.15em] hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 shadow-[0_8px_30px_rgba(255,255,255,0.08)]">
              Enter Portal <ArrowRight className="size-4" />
            </button>
            <button className="h-14 px-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white font-black text-xs uppercase tracking-[0.15em] hover:bg-white/[0.07] transition-all">
              Read the Docs
            </button>
          </div>
        </motion.div>

        {/* Product showcase — scrolls in from below */}
        <motion.div
          style={{ opacity: stageOpacity, y: stageY, scale: stageScale }}
          className="absolute inset-x-0 bottom-0 top-20 flex flex-col items-center justify-end pb-8 pointer-events-none"
        >
          {/* Floating hub cards */}
          <div className="hidden lg:block">
            {[
              { title: "User Mgmt", icon: Users, x: -420, y: -220 },
              { title: "Governance", icon: Shield, x: 420, y: -220 },
              { title: "Workflows", icon: Zap, x: -420, y: 80 },
              { title: "Auditing", icon: Box, x: 420, y: 80 }
            ].map((mod, i) => (
              <motion.div
                key={i}
                style={{ x: mod.x, y: mod.y }}
                className="absolute top-1/2 left-1/2 p-4 rounded-xl bg-[#0a0a0a]/80 border border-white/[0.05] backdrop-blur-2xl flex items-center gap-3 shadow-2xl"
              >
                <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <mod.icon className="size-4 text-primary" />
                </div>
                <span className="text-[9px] font-black text-white uppercase tracking-wider">{mod.title}</span>
              </motion.div>
            ))}
          </div>

          {/* The actual product stage */}
          <div className="w-full max-w-6xl px-4 pointer-events-auto">
            <ProductStage />
          </div>
        </motion.div>

      </div>
    </section>
  );
}