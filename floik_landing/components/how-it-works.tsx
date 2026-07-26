"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const STEPS = [
  {
    num: "01",
    title: "Connect your community",
    desc: "Integrate Microsoft/Xbox, Google, or email auth. Members join with their existing identities — zero friction, zero new passwords.",
    tag: "Identity auth",
    image: "/assets/showcase_2.png",
    dir: "ltr" as const,
  },
  {
    num: "02",
    title: "Configure roles & permissions",
    desc: "Define custom roles with granular permissions. Set up application forms, forums, and notification workflows that fit your exact structure.",
    tag: "Role engine",
    image: "/assets/showcase_5.png",
    dir: "rtl" as const,
  },
  {
    num: "03",
    title: "Launch & scale",
    desc: "Your portal goes live. Members apply, post in forums, and get notified — all from one dashboard built for communities that move fast.",
    tag: "Live dashboard",
    image: "/assets/showcase_4.png",
    dir: "ltr" as const,
  },
];

export default function HowItWorks() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const hdrRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mediaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const hdr = hdrRef.current;
    const panels = panelRefs.current;
    const medias = mediaRefs.current;
    const dots = dotRefs.current;
    if (!scene || !hdr) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const eio = (t: number) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    function getProgress() {
      const sceneTop = scene.getBoundingClientRect().top + window.scrollY;
      const scrolled = window.scrollY - sceneTop;
      const total = scene.offsetHeight - window.innerHeight;
      return clamp(scrolled / total, 0, 1);
    }

    function tick() {
      const p = getProgress();
      const N = 3;
      const introEnd = 0.12;
      const introOut = clamp((p - introEnd * 0.5) / (introEnd * 0.5), 0, 1);

      // header shrinks + fades away
      const hdrScale = lerp(1, 0.55, eio(introOut));
      const hdrY = lerp(0, -60, eio(introOut));
      const hdrOp = lerp(1, 0, eio(introOut));
      hdr.style.transform = `translate(-50%,-50%) scale(${hdrScale}) translateY(${hdrY}px)`;
      hdr.style.opacity = String(hdrOp);

      panels.forEach((panel, i) => {
        if (!panel || !medias[i]) return;

        const start = introEnd + (i * (1 - introEnd)) / N;
        const end = introEnd + ((i + 1) * (1 - introEnd)) / N;
        const localP = clamp((p - start) / (end - start), 0, 1);

        const enterP = clamp(localP / 0.35, 0, 1);
        const exitP = clamp((localP - 0.65) / 0.35, 0, 1);

        let ty: number, ry: number, rz: number, scale: number, op: number;

        if (localP < 0.35) {
          ty = lerp(90, 0, eio(enterP));
          ry = lerp(i % 2 === 0 ? -22 : 22, 0, eio(enterP));
          rz = lerp(i % 2 === 0 ? 4 : -4, 0, eio(enterP));
          scale = lerp(0.82, 1, eio(enterP));
          op = lerp(0, 1, eio(enterP));
        } else if (localP < 0.65) {
          ty = 0; ry = 0; rz = 0; scale = 1; op = 1;
        } else {
          ty = lerp(0, -70, eio(exitP));
          ry = lerp(0, i % 2 === 0 ? 18 : -18, eio(exitP));
          rz = lerp(0, i % 2 === 0 ? -3 : 3, eio(exitP));
          scale = lerp(1, 0.88, eio(exitP));
          op = lerp(1, 0, eio(exitP));
        }

        panel.style.transform =
          `translateY(calc(-50% + ${ty}px)) perspective(1200px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${scale})`;
        panel.style.opacity = String(op);
        panel.style.pointerEvents = op > 0.05 ? "auto" : "none";

        // image has its own independent 3D tilt
        const mediaTiltX = lerp(0, -4, eio(clamp(localP / 0.5, 0, 1)));
        const mediaTiltY = i % 2 === 0 ? lerp(-6, 2, eio(localP)) : lerp(6, -2, eio(localP));
        medias[i]!.style.transform =
          `perspective(800px) rotateX(${mediaTiltX}deg) rotateY(${mediaTiltY}deg)`;

        // dots
        const isActive = localP > 0.1 && localP < 0.9;
        if (dots[i]) {
          dots[i]!.style.background = isActive ? "#D8B77A" : "rgba(255,255,255,0.1)";
          dots[i]!.style.width = isActive ? "48px" : "28px";
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    }

    // initial off-screen state
    panels.forEach((p, i) => {
      if (!p) return;
      p.style.transform = `translateY(-50%) perspective(1200px) rotateY(${i % 2 === 0 ? -22 : 22}deg) scale(0.82)`;
      p.style.opacity = "0";
      p.style.pointerEvents = "none";
    });

    tick();

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes blink       { 0%,100%{opacity:.3}   50%{opacity:1} }
        @keyframes gshift      { 0%{background-position:0%} 100%{background-position:300%} }
        @keyframes scrollpulse { 0%,100%{transform:scaleY(1);opacity:.3} 50%{transform:scaleY(1.6);opacity:.8} }
        .hiw-gold {
          background: linear-gradient(120deg,#a07030,#F0D898,#D8B77A,#a07030);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 300%;
          animation: gshift 5s linear infinite;
        }
        .hiw-dot { transition: background .4s, width .4s; }
      `}</style>

      {/* 400vh scene — sticky panel lives inside */}
      <div ref={sceneRef} style={{ height: "400vh", position: "relative" }} id="how-it-works">

        <div style={{
          position: "sticky", top: 0, height: "100vh", overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "center",
          perspective: "1200px", background: "#060606",
        }}>

          {/* ── Headline (shrinks away) ── */}
          <div
            ref={hdrRef}
            style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              textAlign: "center", zIndex: 10, pointerEvents: "none",
              width: "100%", padding: "0 40px",
            }}
          >
            {/* <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(216,183,122,0.2)", borderRadius: 100,
              padding: "5px 16px", marginBottom: 24,
            }}>
              <div style={{
                width: 5, height: 5, borderRadius: "50%", background: "#D8B77A",
                animation: "blink 2s ease-in-out infinite",
              }} />
              <span style={{
                fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase",
                color: "rgba(216,183,122,0.45)", fontWeight: 700,
              }}>
                How it works
              </span>
            </div> */}

            <div style={{
              fontSize: "clamp(42px,7vw,88px)", fontWeight: 900,
              letterSpacing: "-3px", lineHeight: 0.95,
              color: "rgba(255,255,255,0.92)",
            }}>
              Up and running<br />
              in <span className="hiw-gold">minutes</span>
            </div>
          </div>

          {/* ── Panels ── */}
          {STEPS.map((step, i) => (
            <div
              key={i}
              ref={el => { panelRefs.current[i] = el; }}
              style={{
                position: "absolute", width: "100%", top: "50%", left: 0,
                willChange: "transform, opacity",
              }}
            >
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                alignItems: "center",
                minHeight: "70vh",
                maxWidth: 1100,
                margin: "0 auto",
                padding: "0 40px",
                direction: step.dir,
              }}>

                {/* Text side */}
                <div style={{
                  display: "flex", flexDirection: "column", justifyContent: "center",
                  padding: step.dir === "ltr" ? "0 60px 0 0" : "0 0 0 60px",
                  direction: "ltr",
                }}>
                  <div style={{
                    fontSize: 120, fontWeight: 900, letterSpacing: -6, lineHeight: 1,
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(216,183,122,0.1)",
                    marginBottom: -20, fontFamily: "monospace", userSelect: "none",
                  }}>
                    {step.num}
                  </div>

                  <div style={{
                    fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 800,
                    letterSpacing: -1, lineHeight: 1.1,
                    color: "rgba(255,255,255,0.92)", marginBottom: 20,
                  }}>
                    {step.title}
                  </div>

                  <div style={{
                    fontSize: 15, color: "rgba(255,255,255,0.36)",
                    lineHeight: 1.8, maxWidth: 360,
                  }}>
                    {step.desc}
                  </div>

                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    marginTop: 28, fontSize: 11, fontWeight: 700,
                    letterSpacing: ".14em", textTransform: "uppercase",
                    color: "rgba(216,183,122,0.55)",
                    borderBottom: "1px solid rgba(216,183,122,0.18)",
                    paddingBottom: 6, width: "fit-content",
                  }}>
                    <span style={{
                      display: "block", width: 20, height: 1,
                      background: "#D8B77A", opacity: .5,
                    }} />
                    {step.tag}
                  </div>
                </div>

                {/* Image side */}
                <div
                  ref={el => { mediaRefs.current[i] = el; }}
                  style={{
                    position: "relative", height: "55vh",
                    borderRadius: 4, overflow: "hidden",
                    transformStyle: "preserve-3d", direction: "ltr",
                  }}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    style={{
                      objectFit: "cover",
                      filter: "brightness(.65) saturate(.85)",
                    }}
                  />
                  {/* directional vignette blending image into bg */}
                  <div style={{
                    position: "absolute", inset: 0, zIndex: 2,
                    background: step.dir === "ltr"
                      ? "linear-gradient(135deg,rgba(6,6,6,0.4),transparent 60%)"
                      : "linear-gradient(225deg,rgba(6,6,6,0.4),transparent 60%)",
                  }} />
                </div>

              </div>
            </div>
          ))}

          {/* ── Progress dots ── */}
          <div style={{
            position: "absolute", bottom: 32, left: "50%",
            transform: "translateX(-50%)",
            display: "flex", gap: 8, zIndex: 20,
          }}>
            {STEPS.map((_, i) => (
              <div
                key={i}
                ref={el => { dotRefs.current[i] = el; }}
                className="hiw-dot"
                style={{
                  width: i === 0 ? 48 : 28, height: 3, borderRadius: 2,
                  background: i === 0 ? "#D8B77A" : "rgba(255,255,255,0.1)",
                }}
              />
            ))}
          </div>

          {/* ── Scroll hint ── */}
          <div style={{
            position: "absolute", bottom: 36, right: 44,
            fontSize: 11, color: "rgba(255,255,255,0.18)",
            letterSpacing: ".1em", textTransform: "uppercase",
            display: "flex", alignItems: "center", gap: 8, zIndex: 20,
          }}>
            Scroll
            <div style={{
              width: 1, height: 28,
              background: "rgba(255,255,255,0.12)",
              animation: "scrollpulse 1.8s ease-in-out infinite",
            }} />
          </div>

        </div>
      </div>
    </>
  );
}