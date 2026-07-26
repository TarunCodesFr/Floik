"use client";

import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
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
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,183,122,0.02),transparent_60%)] pointer-events-none" />

      <div
        className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
          Ready for your story
        </h2>
        <p className="mt-4 text-lg text-white/40">
          Be one of the first to build with Floik.
        </p>
      </div>
    </section>
  );
}