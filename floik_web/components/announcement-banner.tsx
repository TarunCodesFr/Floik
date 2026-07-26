"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Megaphone, ChevronRight, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Announcement {
  id: string;
  title: string;
  content: string;
  type: string;
  link?: string;
  linkText?: string;
  gradient?: string;
  isActive: boolean;
}

export function AnnouncementBanner() {
  const pathname = usePathname()
  const isPortal = pathname?.startsWith('/portal')
  const [announcement, setAnnouncement] = React.useState<Announcement | null>(null)
  const [isVisible, setIsVisible] = React.useState(true)

  React.useEffect(() => {
    const fetchLatest = async () => {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
      const apiUrl = apiBase.startsWith('http') ? apiBase : `https://${apiBase}`;
      try {
        const res = await fetch(`${apiUrl}/api/announcements`)
        if (res.ok) {
          const data = await res.json()
          const active = data.find((a: Announcement) => a.isActive)
          if (active) setAnnouncement(active)
        }
      } catch (error) {}
    }
    fetchLatest()
  }, [])

  if (!announcement || !isVisible) return null

  const getBackground = () => {
    // Sanitize gradient input - allows basic linear/radial gradients, safe characters only
    if (announcement.gradient && /^(linear|radial)-gradient\([a-zA-Z0-9\s,#%\(\)\.\-]+\)$/i.test(announcement.gradient)) {
      return { background: announcement.gradient };
    }
    
    switch (announcement.type) {
      case 'MAINTENANCE': return { background: 'linear-gradient(90deg, #EA580C, #FB923C)' };
      case 'ALERT': return { background: 'linear-gradient(90deg, #DC2626, #F87171)' };
      case 'EVENT': return { background: 'linear-gradient(90deg, #7C3AED, #C084FC)' };
      default: return { background: 'linear-gradient(90deg, #007EA7, #003459)' };
    }
  }

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className={`sticky ${isPortal ? 'top-0' : 'top-[80px]'} w-full overflow-hidden backdrop-blur-md border-b border-white/10 z-[49]`}
        style={getBackground()}
      >
        {/* High-Speed Hyper-Drive Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`streak-${i}`}
              initial={{ x: "-50%", opacity: 0 }}
              animate={{ 
                x: "150%", 
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 1 + Math.random() * 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "linear"
              }}
              className="absolute h-[1px] w-64 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              style={{ top: `${Math.random() * 100}%` }}
            />
          ))}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`spark-${i}`}
              initial={{ x: "-20%", opacity: 0 }}
              animate={{ 
                x: "120%", 
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 0.8 + Math.random() * 1.2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
              className="absolute w-1.5 h-0.5 rounded-full bg-white/80 blur-[0.5px]"
              style={{ top: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-4 text-center relative z-10">
          <div className="flex items-center gap-2">
            <Megaphone size={12} className="shrink-0 text-white/80" />
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-white leading-none">
              {announcement.content}
            </p>
          </div>
          
          {announcement.link && (
            <Link 
              href={announcement.link} 
              className="group flex items-center gap-1 px-3 py-1 rounded-full bg-black/20 hover:bg-black/30 transition-all text-[9px] font-black uppercase tracking-wider text-white border border-white/10"
            >
              {announcement.linkText || "View Rewards"}
              <ChevronRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}

          <button 
            onClick={() => setIsVisible(false)}
            className="absolute right-4 p-1 hover:bg-black/10 rounded-full transition-colors text-white/80"
          >
            <X size={12} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
