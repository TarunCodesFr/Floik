"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const FEATURES = [
  {
    title: "User Management",
    tagline: "Full control over your community members",
    description:
      "Manage every aspect of your community members from a single interface. Granular role-based access control, rich profiles with avatars and bios, and automated onboarding workflows that welcome new members the moment they join.",
    highlights: [
      "Role-based access control with custom permission sets",
      "Rich user profiles with avatars, bios, and display names",
      "Xbox/Microsoft identity integration for gaming communities",
      "Bulk user management and automated onboarding flows",
    ],
    image: "/assets/showcase_2.png",
    accent: "from-amber-500/10 via-amber-500/5",
    borderAccent: "border-amber-500/20",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    glowColor: "rgba(251,191,36,0.08)",
  },
  {
    title: "Application Forms",
    tagline: "Build forms, review submissions, decide instantly",
    description:
      "Create dynamic application forms with custom fields, validation rules, and conditional logic. Review submissions in a dedicated admin queue, approve or reject with one click, and communicate decisions automatically.",
    highlights: [
      "Drag-and-drop form builder with custom fields",
      "Submission queue with approval/rejection workflow",
      "Conditional logic for dynamic field visibility",
      "Automatic decision notifications to applicants",
    ],
    image: "/assets/showcase_3.png",
    accent: "from-blue-500/10 via-blue-500/5",
    borderAccent: "border-blue-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    glowColor: "rgba(96,165,250,0.08)",
  },
  {
    title: "Admin Dashboard",
    tagline: "Real-time visibility into your operations",
    description:
      "A comprehensive admin dashboard that gives you real-time metrics on user growth, submission rates, forum activity, and system health. Track trends over time with interactive charts and export reports.",
    highlights: [
      "Real-time metrics on users, submissions, and activity",
      "Interactive charts showing growth trends over time",
      "Exportable reports for community analytics",
      "Quick-action widgets for daily moderation tasks",
    ],
    image: "/assets/showcase_4.png",
    accent: "from-emerald-500/10 via-emerald-500/5",
    borderAccent: "border-emerald-500/20",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    glowColor: "rgba(52,211,153,0.08)",
  },
  {
    title: "Permissions & Roles",
    tagline: "Granular permissions, flexible hierarchy",
    description:
      "Design your community hierarchy with custom roles that carry specific permission sets. Drag to reorder role priority for automatic assignment, create form-scoped reviewers, and grant granular access to every feature.",
    highlights: [
      "Custom roles with granular, per-feature permissions",
      "Drag-to-reorder priority system for role hierarchy",
      "Form-scoped reviewer roles for application workflows",
      "Permission wildcards for broad or narrow access control",
    ],
    image: "/assets/showcase_5.png",
    accent: "from-violet-500/10 via-violet-500/5",
    borderAccent: "border-violet-500/20",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    glowColor: "rgba(167,139,250,0.08)",
  },
  {
    title: "Community Forum",
    tagline: "Rich discussions with modern tooling",
    description:
      "A full-featured community forum with rich text editing powered by Tiptap, emoji reactions with live counts, pinning and locking for moderation, and role-gated posting to ensure the right people can participate.",
    highlights: [
      "Rich text editor with images, headings, and formatting",
      "Emoji reactions with live counters",
      "Post pinning, locking, and role-gated permissions",
      "Nested comment threads with author sidebars",
    ],
    image: "/assets/showcase_6.png",
    accent: "from-rose-500/10 via-rose-500/5",
    borderAccent: "border-rose-500/20",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
    glowColor: "rgba(251,113,133,0.08)",
  },
  {
    title: "Notification System",
    tagline: "Keep your community informed in real time",
    description:
      "Send global announcements or targeted notifications to specific users or roles. Each notification supports type-specific icons, deep links to relevant pages, and read/unread tracking so nothing gets missed.",
    highlights: [
      "Global announcements to all community members",
      "Targeted notifications by user or role",
      "Deep-linked notifications that navigate to relevant pages",
      "Read/unread tracking with unread badge counts",
    ],
    image: "/assets/hero_main.png",
    accent: "from-cyan-500/10 via-cyan-500/5",
    borderAccent: "border-cyan-500/20",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    glowColor: "rgba(34,211,238,0.08)",
  },
];

function resolveAccent(accent: string, index: number): string {
  const colors = [
    "rgba(251,191,36,0.06)",
    "rgba(96,165,250,0.06)",
    "rgba(52,211,153,0.06)",
    "rgba(167,139,250,0.06)",
    "rgba(251,113,133,0.06)",
    "rgba(34,211,238,0.06)",
  ];
  return colors[index % colors.length];
}

function WordReveal({ text }: { text: string }) {
  return (
    <span className="inline-flex flex-wrap">
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="relative overflow-hidden mr-[0.3em]"
        >
          <span
            className="inline-block animate-reveal"
            style={{
              animationDelay: `${0.6 + i * 0.04}s`,
              opacity: 0,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

function FeatureRow({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[0];
  index: number;
}) {
  const [revealed, setRevealed] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [scrollOffset, setScrollOffset] = useState(0);
  const [mouseGlow, setMouseGlow] = useState({ x: 0, y: 0, active: false });
  const [numVisible, setNumVisible] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const isReversed = index % 2 === 1;
  const accentColor = resolveAccent(feature.accent, index);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          setTimeout(() => setNumVisible(true), 400);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!revealed) return;
    const onScroll = () => {
      if (!rowRef.current) return;
      const rect = rowRef.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      setScrollOffset((center - viewportCenter) * 0.03);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [revealed]);

  const handleMouse = useCallback((e: React.MouseEvent) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -10,
      y: (x - 0.5) * 10,
    });
    setMouseGlow({ x: e.clientX, y: e.clientY, active: true });
  }, []);

  const resetMouse = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setMouseGlow((p) => ({ ...p, active: false }));
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={rowRef}
      className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${index > 0 ? "mt-32 sm:mt-40" : ""
        }`}
    >
      {/* ━━━ Image ━━━ */}
      <div
        ref={(el) => {
          imgRef.current = el;
          (containerRef as any).current = el;
        }}
        onMouseMove={handleMouse}
        onMouseLeave={resetMouse}
        className={`relative ${isReversed ? "lg:order-2" : ""}`}
        style={{
          transform: `translateY(${scrollOffset}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Cursor glow */}
        {mouseGlow.active && (
          <div
            className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px circle at ${mouseGlow.x - (containerRef.current?.getBoundingClientRect()?.left || 0)
                }px ${mouseGlow.y - (containerRef.current?.getBoundingClientRect()?.top || 0)
                }px, ${accentColor}, transparent 70%)`,
              opacity: 0.6,
            }}
          />
        )}

        {/* Image container with reveal clip */}
        <div
          className={`relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shine-overlay img-glow-ring group ${revealed ? "animate-scale-in" : "opacity-0"
            }`}
          style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${mouseGlow.active ? 1.015 : 1
              })`,
            transition: "transform 0.15s ease-out",
          }}
        >
          {/* Background layer - moves opposite for depth */}
          <div
            className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
            style={{
              background: `linear-gradient(135deg, ${accentColor.replace(
                "0.06",
                "0.03"
              )}, transparent)`,
              transform: `translate(${tilt.y * -0.5}px, ${tilt.x * 0.5}px)`,
            }}
          />

          {/* Radial scan effect */}
          <div
            className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(600px circle at 50% 50%, transparent 30%, rgba(0,0,0,0.3) 100%)`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent z-10 pointer-events-none" />

          <Image
            src={feature.image}
            alt={feature.title}
            width={1920}
            height={1080}
            className="w-full h-auto transition-all duration-700 group-hover:scale-105 relative z-[5]"
          />
        </div>
      </div>

      {/* ━━━ Text ━━━ */}
      <div className={`${isReversed ? "lg:order-1" : ""}`}>
        <div
          className={`flex items-center gap-4 mb-5 ${revealed ? "animate-fade-in-up" : "opacity-0"
            }`}
          style={{ animationDelay: "0.2s" }}
        >
          <div
            className={`relative size-12 rounded-xl ${feature.iconBg} flex items-center justify-center overflow-hidden`}
          >
            <div
              className={`absolute inset-0 opacity-0 ${feature.iconBg} ${numVisible ? "animate-scale-in" : ""}`}
              style={{ animationDelay: "0.5s" }}
            />
            <span
              className={`text-lg font-bold ${feature.iconColor} relative z-10`}
            >
              {numVisible
                ? (index + 1).toString().padStart(2, "0")
                : "—"}
            </span>
          </div>
          <span
            className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${feature.iconColor} ${revealed ? "animate-fade-in" : "opacity-0"
              }`}
            style={{ animationDelay: "0.3s" }}
          >
            Feature
          </span>
        </div>

        <h3
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${revealed ? "animate-reveal" : "opacity-0"
            }`}
          style={{ animationDelay: "0.25s" }}
        >
          {feature.title}
        </h3>

        <p
          className={`mt-2 text-sm lg:text-base text-primary/70 font-medium ${revealed ? "animate-fade-in-up" : "opacity-0"
            }`}
          style={{ animationDelay: "0.35s" }}
        >
          <WordReveal text={feature.tagline} />
        </p>

        <p
          className={`mt-4 text-sm sm:text-base text-white/40 leading-relaxed ${revealed ? "animate-fade-in-up" : "opacity-0"
            }`}
          style={{ animationDelay: "0.45s" }}
        >
          {feature.description}
        </p>

        <ul className="mt-6 space-y-3">
          {feature.highlights.map((h, i) => (
            <li
              key={i}
              className={`flex items-start gap-3 text-sm text-white/50 ${revealed ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: `${0.55 + i * 0.08}s` }}
            >
              <span
                className={`flex items-center justify-center size-5 rounded-full shrink-0 mt-0.5 ${feature.iconBg}`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={feature.iconColor}
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Features() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0 });

  const onSectionMouse = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setCursorGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      onMouseMove={onSectionMouse}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(216,183,122,0.02),transparent_70%)] pointer-events-none" />

      {/* Large cursor-reactive ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(800px circle at ${cursorGlow.x}% ${cursorGlow.y}%, rgba(216,183,122,0.04), transparent 60%)`,
        }}
      />

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6">
            <span className="relative flex size-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-primary animate-ping opacity-40" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Everything Included
            </span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white/90">
            One platform. <span className="gradient-text">Endless possibilities.</span>
          </h2>
          <p className="mt-4 text-white/40 leading-relaxed max-w-2xl mx-auto">
            Every tool your community needs — from user management to forums, all deeply integrated and ready to use.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06] mb-28">
          {[
            { label: "Users Managed", value: "10K+" },
            { label: "Active Communities", value: "500+" },
            { label: "Open Source", value: "100%" },
            { label: "Uptime", value: "99.9%" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="bg-[#0a0a0a] px-6 py-8 sm:py-10 text-center group hover:bg-white/[0.01] transition-colors"
            >
              <span className="text-2xl sm:text-3xl font-bold gradient-text-strong">
                {stat.value}
              </span>
              <p className="mt-1.5 text-xs text-white/40 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Rows */}
        {FEATURES.map((feature, i) => (
          <FeatureRow key={i} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}
