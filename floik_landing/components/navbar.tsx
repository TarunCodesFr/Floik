"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-2xl border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 relative">
          {!scrolled && (
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
          )}

          <a href="/" className="flex items-center gap-2.5 z-20 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/assets/floik.png"
                alt="Floik"
                width={28}
                height={28}
                className="object-contain relative"
              />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              floik
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/50 hover:text-white transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary/60 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-20 p-2 text-white/70"
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              ) : (
                <>
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-2xl border-t border-white/5">
          <div className="px-4 py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}

          </div>
        </div>
      )}
    </header>
  );
}
