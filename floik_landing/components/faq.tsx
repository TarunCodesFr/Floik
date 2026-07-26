"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const FAQ_ITEMS = [
  {
    q: "What is Floik?",
    a: "Floik is an open-source portal platform designed for community operations. It provides user management, role-based access control, application forms, community forums, notification systems, and an admin dashboard — all in one unified hub.",
  },
  {
    q: "Who is Floik for?",
    a: "Floik is built for gaming communities, Minecraft server networks, Discord communities, and any online group that needs structured member management. It's equally powerful for small communities and large server networks.",
  },
  {
    q: "Is Floik free and open source?",
    a: "Yes. Floik is completely free and open source. You can self-host it on your own infrastructure. There are no hidden fees, premium tiers, or credit card requirements.",
  },
  {
    q: "Can I customize the portal branding?",
    a: "Absolutely. The admin settings panel lets you customize the site name, portal type (Minecraft or Generic), authentication methods, and more. The entire UI is built with Tailwind CSS so you can customize the look and feel.",
  },
  {
    q: "What authentication methods are supported?",
    a: "Floik supports Microsoft/Xbox Live authentication (for Minecraft communities), email/password registration, and Google OAuth. You can enable or disable each method from the admin settings.",
  },
  {
    q: "How do permissions and roles work?",
    a: "Floik features a granular permission system. You can create custom roles with specific permissions (e.g., 'View Submissions', 'Manage Users', 'Moderate Forum'). Roles can be assigned to users and reordered by priority.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left side */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6">
              <span className="relative flex size-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-primary animate-ping opacity-40" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                FAQ
              </span>
            </div> */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
              Frequently asked{" "}
              <span className="gradient-text">questions</span>
            </h2>
            <p className="mt-4 text-white/40 leading-relaxed">
              Haven&apos;t found what you&apos;re looking for?{" "}
              <a
                href="mailto:support@floik.com"
                className="text-primary/70 hover:text-primary transition-colors"
              >
                Contact us
              </a>
              .
            </p>
          </div>

          {/* Right side - FAQ items */}
          <div className="lg:col-span-3 space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 ${openIndex === i
                    ? "border-primary/20 bg-primary/[0.02]"
                    : "border-white/[0.06] bg-[#111] hover:border-white/[0.12]"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-medium text-white/80 pr-4">
                    {item.q}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`shrink-0 text-white/30 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""
                      }`}
                  >
                    <path
                      d="M8 3v10M3 8h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="px-6 pb-5 text-sm text-white/40 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
