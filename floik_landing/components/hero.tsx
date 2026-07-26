"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function WavyText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  let charIdx = 0;
  return (
    <>
      {words.map((word, wi) => {
        const chars = word.split("").map((char, ci) => {
          const idx = charIdx++;
          return (
            <span
              key={ci}
              className={`inline-block animate-wave ${className || ""}`}
              style={{ animationDelay: `${1.2 + idx * 0.035}s` }}
            >
              {char}
            </span>
          );
        });
        return (
          <span key={wi} className="inline-block whitespace-nowrap mx-[0.15em] first:ml-0 last:mr-0">
            {chars}
          </span>
        );
      })}
    </>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMouse({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  const mx = (mouse.x - 0.5) * 2;
  const my = (mouse.y - 0.5) * 2;

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 sm:pt-24">
      {/* ━━ Ambient ━━ */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(216,183,122,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute top-[15%] left-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-drift"
        style={{ background: "radial-gradient(circle, rgba(216,183,122,0.04) 0%, transparent 60%)" }} />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none animate-drift-2"
        style={{ background: "radial-gradient(circle, rgba(184,144,82,0.03) 0%, transparent 60%)" }} />

      {/* ━━ Grid ━━ */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none overflow-hidden">
        <div className="w-[200%] h-[200%] animate-grid-scroll" style={{
          backgroundImage: "linear-gradient(to right, #D8B77A 1px, transparent 1px), linear-gradient(to bottom, #D8B77A 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
      </div>

      {/* ━━ Scan lines ━━ */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.012]" style={{
        background: "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(216,183,122,0.3) 2px, rgba(216,183,122,0.3) 3px)"
      }} />

      {/* ━━ Noise ━━ */}
      <div className="absolute inset-0 pointer-events-none noise-overlay" />

      {/* ━━━ Wave Ring 1 — outer large ━━━ */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{
        transform: `translate(-50%, -50%) translate(${mx * 15}px, ${my * 15}px)`,
        transition: "transform 0.3s ease-out",
      }}>
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" className="opacity-20">
          <circle cx="400" cy="400" r="350" stroke="url(#wg1)" strokeWidth="1" className="animate-rotate-glow" style={{ transformOrigin: "400px 400px", animationDuration: "30s" }} />
          <circle cx="400" cy="400" r="300" stroke="url(#wg1)" strokeWidth="0.5" className="animate-rotate-glow" style={{ transformOrigin: "400px 400px", animationDuration: "25s", animationDirection: "reverse" }} />
          <circle cx="400" cy="400" r="250" stroke="url(#wg2)" strokeWidth="0.5" className="animate-rotate-glow" style={{ transformOrigin: "400px 400px", animationDuration: "20s" }} />
          <defs>
            <linearGradient id="wg1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D8B77A" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#D8B77A" stopOpacity="0" />
              <stop offset="100%" stopColor="#D8B77A" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="wg2" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5E6CA" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#F5E6CA" stopOpacity="0" />
              <stop offset="100%" stopColor="#F5E6CA" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ━━━ Wave Ring 2 — mid ━━━ */}
      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{
        transform: `translate(-50%, -50%) translate(${mx * -10}px, ${my * -12}px)`,
        transition: "transform 0.3s ease-out",
      }}>
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" className="opacity-15">
          <circle cx="300" cy="300" r="280" stroke="url(#wg3)" strokeWidth="0.5" strokeDasharray="4 8" className="animate-rotate-glow" style={{ transformOrigin: "300px 300px", animationDuration: "35s" }} />
          <circle cx="300" cy="300" r="220" stroke="url(#wg4)" strokeWidth="0.5" strokeDasharray="2 6" className="animate-rotate-glow" style={{ transformOrigin: "300px 300px", animationDuration: "28s", animationDirection: "reverse" }} />
          <defs>
            <linearGradient id="wg3" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#D8B77A" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#D8B77A" stopOpacity="0" />
              <stop offset="100%" stopColor="#D8B77A" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="wg4" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#B89052" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#B89052" stopOpacity="0" />
              <stop offset="100%" stopColor="#B89052" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ━━━ Wave Ring 3 — tight around heading ━━━ */}
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{
        transform: `translate(-50%, -50%) translate(${mx * 8}px, ${my * -6}px)`,
        transition: "transform 0.3s ease-out",
      }}>
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" className="opacity-25">
          <circle cx="200" cy="200" r="180" stroke="url(#wg5)" strokeWidth="0.5" className="animate-rotate-glow" style={{ transformOrigin: "200px 200px", animationDuration: "18s" }} />
          <circle cx="200" cy="200" r="140" stroke="url(#wg6)" strokeWidth="1" strokeDasharray="1 5" className="animate-rotate-glow" style={{ transformOrigin: "200px 200px", animationDuration: "14s", animationDirection: "reverse" }} />
          <defs>
            <linearGradient id="wg5" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#F5E6CA" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#F5E6CA" stopOpacity="0" />
              <stop offset="100%" stopColor="#F5E6CA" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="wg6" x1="0" y1="0.5" x2="1" y2="0.5">
              <stop offset="0%" stopColor="#D8B77A" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#D8B77A" stopOpacity="0" />
              <stop offset="100%" stopColor="#D8B77A" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ━━ Floating geometric dots ━━ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => {
          const h = (i * 137.508) % 100;
          const v = (i * 47.123) % 100;
          return (
            <div
              key={i}
              className="absolute size-1 rounded-full bg-primary"
              style={{
                left: `${h}%`,
                top: `${v}%`,
                opacity: 0.15 + (i % 5) * 0.05,
                animation: `float ${6 + (i % 4) * 2}s ease-in-out infinite`,
                animationDelay: `${(i % 5) * 0.8}s`,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* ━━ Badge ━━ */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6 animate-reveal">
            <span className="relative flex size-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-primary animate-ping opacity-40" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Open Source — Community Operations Platform
            </span>
          </div> */}

          {/* ━━ Heading with wave effects ━━ */}
          <div className="relative">
            {/* Glow aura */}
            <div className="absolute -inset-20 bg-primary/5 blur-[120px] rounded-full animate-glow-pulse pointer-events-none" />

            {/* Shimmer scan line */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
              <div className="absolute inset-x-0 h-px top-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer pointer-events-none" style={{ animationDuration: "4s" }} />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.92] max-w-5xl relative mt-10">
              <span className="block stagger-1 animate-reveal">
                <span className="text-white/90"><WavyText text="The portal for" /></span>
              </span>
              <span className="block stagger-2 animate-reveal relative">
                <WavyText text="Community Operations." className="gradient-text" />
                {/* Animated wave underline — dual waves */}
                <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-5 opacity-40" viewBox="0 0 400 20" preserveAspectRatio="none">
                  <path d="M0 10 Q50 3 100 10 T200 10 T300 10 T400 10" stroke="url(#wu1)" strokeWidth="2" fill="none">
                    <animate attributeName="d" dur="4s" repeatCount="indefinite"
                      values="M0 10 Q50 3 100 10 T200 10 T300 10 T400 10;
                              M0 5 Q50 13 100 5 T200 13 T300 5 T400 5;
                              M0 10 Q50 3 100 10 T200 10 T300 10 T400 10" />
                  </path>
                  <path d="M0 10 Q50 17 100 10 T200 10 T300 10 T400 10" stroke="url(#wu2)" strokeWidth="1" fill="none" opacity="0.6">
                    <animate attributeName="d" dur="3.2s" repeatCount="indefinite"
                      values="M0 10 Q50 17 100 10 T200 10 T300 10 T400 10;
                              M0 10 Q50 3 100 10 T200 10 T300 10 T400 10;
                              M0 10 Q50 17 100 10 T200 10 T300 10 T400 10" />
                  </path>
                  <defs>
                    <linearGradient id="wu1" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#D8B77A" stopOpacity="0" />
                      <stop offset="30%" stopColor="#D8B77A" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#F5E6CA" stopOpacity="1" />
                      <stop offset="70%" stopColor="#D8B77A" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#D8B77A" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="wu2" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#B89052" stopOpacity="0" />
                      <stop offset="30%" stopColor="#B89052" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#D8B77A" stopOpacity="0.6" />
                      <stop offset="70%" stopColor="#B89052" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#B89052" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
          </div>

          <p className="mt-8 max-w-2xl text-base sm:text-lg text-white/40 leading-relaxed stagger-3 animate-reveal">
            Manage users, automate workflows, and secure your community infrastructure — all from one unified, open-source hub.
          </p>

          {/* ━━ CTAs — informational only ━━ */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 stagger-4 animate-reveal">
            {/* <a href="#features" className="relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-b from-white/20 to-transparent border border-white/10 hover:from-white/30 transition-all duration-300 group">
              Explore Features
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/70 group-hover:translate-x-1 transition-transform duration-300">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </a> */}
            <a href="https://github.com/floik" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full text-sm font-medium text-white/60 border border-white/10 hover:border-white/20 hover:text-white/80 transition-all duration-300 inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
              View on GitHub
            </a>
          </div>

          {/* ━━ Rating ━━ */}
          {/* <div className="mt-6 flex items-center gap-2 text-xs text-white/30 stagger-5 animate-reveal">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary/60">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                </svg>
              ))}
            </div>
            <span>Free forever &bull; Open source &bull; No credit card</span>
          </div> */}
        </div>
      </div>

      {/* ━━━ Hero Images ━━━ */}
      <div className="relative w-full mt-16 sm:mt-20 stagger-6 animate-reveal">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[90%] h-[60%] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-[95vw] sm:max-w-[90vw] lg:max-w-[85vw] mx-auto card-3d">
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shine-overlay img-glow-ring group"
            style={{
              transform: `perspective(1200px) rotateX(${my * -3}deg) rotateY(${mx * 3}deg)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent z-20 pointer-events-none" />
            <Image
              src="/assets/hero_main2.png"
              alt="Floik Portal"
              width={1920}
              height={1080}
              className={`w-full h-auto transition-all duration-1000 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
              onLoad={() => setLoaded(true)}
              priority
            />
          </div>

          <div className="absolute -bottom-10 -right-6 sm:-bottom-14 sm:-right-10 w-[40%] max-w-md hidden lg:block animate-float-slow z-30"
            style={{
              transform: `perspective(1200px) rotateX(${my * -2}deg) rotateY(${mx * 4}deg) translateZ(30px)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            <div className="relative rounded-xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-primary/10 rotate-2 hover:rotate-0 transition-all duration-700 shine-overlay img-glow-ring">
              <Image src="/assets/hero_main.png" alt="Floik Interface" width={960} height={540} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-20" />
    </section>
  );
}
