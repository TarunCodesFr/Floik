"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#030303] pt-40 pb-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-10">
              <Image
                src="/assets/floik.png"
                alt="Floik logo"
                width={36}
                height={36}
              />
              <span className="font-sans text-2xl font-black tracking-tight text-white">
                floik
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium">
              The premium, open-source portal for digital community governance.
              Manage users, workflows, and audits through a unified industrial hub.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-10">Product</h4>
            <ul className="space-y-6 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
              <li><Link href="/portal" className="hover:text-primary transition-colors">User Dashboard</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Open Source</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-10">Community</h4>
            <ul className="space-y-6 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
              <li><Link href="/community" className="hover:text-primary transition-colors">Forum</Link></li>
              <li><Link href="https://discord.gg/floik" className="hover:text-primary transition-colors">Discord</Link></li>
              <li><Link href="/portal" className="hover:text-primary transition-colors">Ticket Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-10">Studio</h4>
            <ul className="space-y-6 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/tos" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.2em]">
            © 2026 Floik Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="size-6 rounded-full bg-white/5 flex items-center justify-center">
              <Image src="/assets/floik.png" alt="" width={12} height={12} className="opacity-60" />
            </div>
            <span className="text-zinc-500 text-[9px] font-black uppercase tracking-[0.2em]">Powered by Floik</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
