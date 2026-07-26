"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, LogOut, User, ExternalLink, ChevronDown, Shield, Activity, MessageSquare } from "lucide-react";
import { getAvatarUrl } from "@/lib/avatar";

const ROLE_BADGE_STYLES: Record<string, string> = {
  'text-primary': 'bg-primary/10 border-primary/20 text-primary',
  'text-blue-500': 'bg-blue-500/10 border-blue-500/20 text-blue-500',
  'text-emerald-500': 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500',
  'text-rose-500': 'bg-rose-500/10 border-rose-500/20 text-rose-500',
  'text-amber-500': 'bg-amber-500/10 border-amber-500/20 text-amber-500',
  'text-violet-500': 'bg-violet-500/10 border-violet-500/20 text-violet-500',
  'text-cyan-500': 'bg-cyan-500/10 border-cyan-500/20 text-cyan-500',
  'text-pink-500': 'bg-pink-500/10 border-pink-500/20 text-pink-500',
}

function getHighestRole(user: any): { name: string; style: string } | null {
  const roles = user?.userRoles
    ?.map((ur: any) => ur.role)
    ?.sort((a: any, b: any) => (a.position ?? 999) - (b.position ?? 999)) || []
  if (roles.length === 0) return null
  return {
    name: roles[0].name,
    style: ROLE_BADGE_STYLES[roles[0].color] || ROLE_BADGE_STYLES['text-primary'],
  }
}
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/auth-context";
import { NotificationBell } from "@/components/notification-bell";

export function Navbar() {
  const { user, logout, loading } = useAuth();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => { setMounted(true); }, []);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!mounted) return null;

  const isPortalPage = pathname?.startsWith('/portal');

  return (
    <nav className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image src="/assets/floik.png" alt="Floik Logo" width={32} height={32} className="object-contain" />
              <span className="font-sans text-xl md:text-2xl font-black tracking-tight text-foreground">
                floik
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              {['Home', 'Portal', 'Community', 'Features', 'About'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : item === 'Features' ? '/#features' : `/${item.toLowerCase()}`}
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <NotificationBell />
            {loading ? (
              <div className="w-9 h-9 rounded-full bg-zinc-800 animate-pulse" />
            ) : user ? (
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800/80 hover:border-white/10 transition-all"
                >
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10 shrink-0">
                    <Image
                      src={getAvatarUrl(user.profilePicture, user.username, user.xboxId)}
                      alt={user.username}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left leading-tight hidden xl:block">
                    <p className="text-xs font-bold text-foreground truncate max-w-[100px]">
                      {user.displayName || user.username}
                    </p>
                    {(() => {
                      const hr = getHighestRole(user)
                      return hr ? (
                        <span className={`inline-block px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-wider ${hr.style}`}>
                          {hr.name}
                        </span>
                      ) : (
                        <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">{user.role}</p>
                      )
                    })()}
                  </div>
                  <ChevronDown size={14} className={`text-zinc-500 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.96 }}
                      className="absolute right-0 mt-2 w-56 p-2 rounded-2xl bg-zinc-950 border border-white/10 shadow-2xl"
                    >
                      <div className="flex items-center gap-3 px-3 py-3 border-b border-white/5 mb-1">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
                          <Image
                            src={getAvatarUrl(user.profilePicture, user.username, user.xboxId)}
                            alt={user.username}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-left leading-tight min-w-0">
                          <p className="text-sm font-bold text-foreground truncate">
                            {user.displayName || user.username}
                          </p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            {(() => {
                              const hr = getHighestRole(user)
                              return hr ? (
                                <span className={`inline-block px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-wider ${hr.style}`}>
                                  {hr.name}
                                </span>
                              ) : (
                                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">{user.role}</span>
                              )
                            })()}
                          </div>
                        </div>
                      </div>

                      <Link
                        href="/portal/profile"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
                      >
                        <User size={16} />
                        Profile Settings
                      </Link>

                      <Link
                        href={`/profile/${user.username}`}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
                      >
                        <ExternalLink size={16} />
                        View Profile
                      </Link>

                      <Link
                        href="/community"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
                      >
                        <MessageSquare size={16} />
                        Community
                      </Link>

                      <Link
                        href="/portal"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
                      >
                        <Activity size={16} />
                        Portal
                      </Link>

                      <div className="border-t border-white/5 mt-1 pt-1">
                        <button
                          onClick={() => { setDropdownOpen(false); logout(); }}
                          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-xs font-bold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-all"
                        >
                          <LogOut size={16} />
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : isPortalPage ? (
              <button
                onClick={() => {
                  const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
                  const apiUrl = apiBase.startsWith('http') ? apiBase : `https://${apiBase}`;
                  window.location.href = `${apiUrl}/api/auth/microsoft`;
                }}
                className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-[0.7rem] font-black hover:brightness-110 transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
              >
                <ExternalLink size={14} />
                Sign in with Microsoft
              </button>
            ) : (
              <Link
                href="/portal"
                className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-[0.7rem] font-black hover:brightness-110 transition-all shadow-lg shadow-primary/20"
              >
                Sign In
              </Link>
            )}
          </div>

          <div className="flex md:hidden items-center gap-2">
            <NotificationBell />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-secondary/20"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/10 p-6 space-y-3 text-center"
          >
            {['Home', 'Portal', 'Community', 'Features', 'About'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : item === 'Features' ? '/#features' : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm font-bold text-zinc-400 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
            <div className="border-t border-white/5 pt-3 space-y-2">
              {user ? (
                <>
                  <div className="flex items-center justify-center gap-3 py-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                      <Image src={getAvatarUrl(user.profilePicture, user.username)} alt={user.username} fill className="object-cover" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-foreground">{user.displayName || user.username}</p>
                      {(() => {
                        const hr = getHighestRole(user)
                        return hr ? (
                          <span className={`inline-block px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-wider ${hr.style}`}>
                            {hr.name}
                          </span>
                        ) : (
                          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">{user.role}</p>
                        )
                      })()}
                    </div>
                  </div>
                  <Link
                    href="/community"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-zinc-900 border border-white/5 text-sm font-bold text-zinc-300 hover:text-white transition-colors"
                  >
                    <MessageSquare size={16} /> Community
                  </Link>
                  <Link
                    href="/portal/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-zinc-900 border border-white/5 text-sm font-bold text-zinc-300 hover:text-white transition-colors"
                  >
                    <User size={16} /> Profile Settings
                  </Link>
                  <button
                    onClick={() => { setIsOpen(false); logout(); }}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-rose-500/10 text-rose-500 font-bold text-sm transition-colors"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/portal"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-sm"
                >
                  Sign In
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
