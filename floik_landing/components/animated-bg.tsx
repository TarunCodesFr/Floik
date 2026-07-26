"use client";

import { useEffect, useRef } from "react";

interface Orb {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
  hue: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w;
      canvas!.height = h;
    };
    window.addEventListener("resize", resize);
    resize();

    const orbs: Orb[] = Array.from({ length: 8 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: 250 + Math.random() * 400,
      opacity: 0.02 + Math.random() * 0.04,
      hue: 35 + Math.random() * 25,
    }));

    const particles: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; size: number; hue: number }[] = [];
    let mouseX = w / 2;
    let mouseY = h / 2;
    let lastSpawn = 0;

    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMouse);

    const draw = (time: number) => {
      ctx!.clearRect(0, 0, w, h);

      for (const orb of orbs) {
        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < -orb.size) orb.x = w + orb.size;
        if (orb.x > w + orb.size) orb.x = -orb.size;
        if (orb.y < -orb.size) orb.y = h + orb.size;
        if (orb.y > h + orb.size) orb.y = -orb.size;

        const dx = mouseX - orb.x;
        const dy = mouseY - orb.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 400) {
          orb.x -= dx * 0.0003;
          orb.y -= dy * 0.0003;
        }

        const g = ctx!.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.size);
        g.addColorStop(0, `hsla(${orb.hue}, 55%, 55%, ${orb.opacity})`);
        g.addColorStop(0.4, `hsla(${orb.hue}, 40%, 35%, ${orb.opacity * 0.6})`);
        g.addColorStop(1, `hsla(${orb.hue}, 30%, 15%, 0)`);
        ctx!.fillStyle = g;
        ctx!.fillRect(orb.x - orb.size, orb.y - orb.size, orb.size * 2, orb.size * 2);
      }

      if (time - lastSpawn > 200) {
        lastSpawn = time;
        const count = 1 + Math.floor(Math.random() * 2);
        for (let i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * w,
            y: h + 10,
            vx: (Math.random() - 0.5) * 0.6,
            vy: -(0.4 + Math.random() * 0.8),
            life: 0,
            maxLife: 400 + Math.random() * 600,
            size: 1 + Math.random() * 3,
            hue: 35 + Math.random() * 20,
          });
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += Math.sin(p.life * 0.01) * 0.3;
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.life > p.maxLife || p.y < -20) {
          particles.splice(i, 1);
          continue;
        }

        const progress = p.life / p.maxLife;
        const alpha = Math.min(1, (1 - progress) * 0.5);
        const twinkle = 0.5 + Math.sin(p.life * 0.05) * 0.5;
        ctx!.fillStyle = `hsla(${p.hue}, 50%, 70%, ${alpha * twinkle})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
