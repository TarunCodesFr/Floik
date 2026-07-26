"use client"

import * as React from "react"
import { Bell, Check, Trash2, ExternalLink, Info, AlertTriangle, CheckCircle2, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/context/auth-context"
import { toast } from "sonner"
import { safeFormatDistance } from "@/lib/dates"

interface Notification {
  id: string
  title: string
  message: string
  type: string
  link: string | null
  isRead: boolean
  createdAt: string
}

export function NotificationBell() {
  const { user } = useAuth()
  const [notifications, setNotifications] = React.useState<Notification[]>([])
  const [isLoading, setIsLoading] = React.useState(false)

  const unreadCount = notifications.filter(n => !n.isRead).length

  const fetchNotifications = React.useCallback(async () => {
    if (!user) return
    setIsLoading(true)
    const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    const apiUrl = apiBase.startsWith('http') ? apiBase : `https://${apiBase}`;
    try {
      const res = await fetch(`${apiUrl}/api/notifications`, {
        credentials: 'include'
      })
      if (res.ok) {
        const data = await res.json()
        setNotifications(data)
      }
    } catch (error) {
      console.error("Failed to fetch notifications")
    } finally {
      setIsLoading(false)
    }
  }, [user])

  React.useEffect(() => {
    fetchNotifications()
    // Optional: Poll every 30 seconds
    const interval = setInterval(fetchNotifications, 30000)
    return () => clearInterval(interval)
  }, [fetchNotifications])

  const markRead = async (id: string) => {
    const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    const apiUrl = apiBase.startsWith('http') ? apiBase : `https://${apiBase}`;
    try {
      const res = await fetch(`${apiUrl}/api/notifications/${id}/read`, {
        method: 'PATCH',
        credentials: 'include'
      })
      if (res.ok) {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n))
      }
    } catch (error) {
      toast.error("Failed to mark as read")
    }
  }

  const deleteNotification = async (id: string) => {
    const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    const apiUrl = apiBase.startsWith('http') ? apiBase : `https://${apiBase}`;
    try {
      const res = await fetch(`${apiUrl}/api/notifications/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      })
      if (res.ok) {
        setNotifications(prev => prev.filter(n => n.id !== id))
        toast.success("Notification deleted")
      }
    } catch (error) {
      toast.error("Failed to delete notification")
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'SUCCESS': return <CheckCircle2 className="w-4 h-4 text-emerald-500" />
      case 'WARNING': return <AlertTriangle className="w-4 h-4 text-amber-500" />
      case 'ERROR': return <X className="w-4 h-4 text-rose-500" />
      default: return <Info className="w-4 h-4 text-primary" />
    }
  }

  if (!user) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative hover:bg-white/5 transition-colors">
          <Bell className="w-5 h-5 text-foreground/80" />
          <AnimatePresence>
            {unreadCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute top-1 right-1 w-4 h-4 bg-red-600 text-[10px] font-black flex items-center justify-center rounded-full border-2 border-background animate-pulse"
              >
                {unreadCount}
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-[380px] sm:w-[420px] p-0 bg-card/95 backdrop-blur-3xl border-border/10 shadow-2xl rounded-[24px] overflow-hidden border"
      >
        <div className="p-5 border-b border-border/5 bg-primary/5 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold tracking-tight text-foreground flex items-center gap-2">
              <Bell className="w-4 h-4 text-primary" />
              Notifications
            </h3>
            <p className="text-[10px] text-zinc-400 font-medium tracking-wide mt-0.5">Stay updated with your latest activity</p>
          </div>
          {unreadCount > 0 && (
            <Badge variant="secondary" className="text-[10px] bg-red-500/10 text-red-500 hover:bg-red-500/15 border-none px-2 rounded-lg">
              {unreadCount} New
            </Badge>
          )}
        </div>

        <ScrollArea className="h-[400px]">
          {notifications.length === 0 ? (
            <div className="p-16 flex flex-col items-center justify-center text-center space-y-4 opacity-40">
              <div className="w-16 h-16 rounded-[24px] bg-white/3 flex items-center justify-center border border-white/5">
                <Bell className="w-8 h-8 text-zinc-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">All caught up!</p>
                <p className="text-[11px] text-zinc-500 mt-1">No new notifications at the moment.</p>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-white/3">
              {notifications.map((n) => (
                <div 
                  key={n.id} 
                  className={`p-5 transition-all relative group ${!n.isRead ? 'bg-primary/3' : 'hover:bg-white/2'}`}
                >
                  <div className="flex gap-4">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${!n.isRead ? 'bg-primary/10 border-primary/20' : 'bg-white/3 border-white/5'}`}>
                      {getTypeIcon(n.type)}
                    </div>
                    <div className="flex-1 space-y-1.5 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className={`text-xs font-bold leading-none truncate ${!n.isRead ? 'text-white' : 'text-zinc-300'}`}>
                          {n.title}
                        </p>
                        <span className="text-[10px] text-zinc-500 font-medium shrink-0">
                          {safeFormatDistance(n.createdAt, { addSuffix: false })}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-2">
                        {n.message}
                      </p>
                      
                      <div className="flex items-center gap-3 pt-1">
                        {n.link && (
                          <Button asChild variant="link" size="sm" className="h-auto p-0 text-[10px] text-primary font-bold hover:no-underline">
                            <Link href={n.link} className="flex items-center gap-1.5">
                              View activity <ExternalLink className="w-2.5 h-2.5" />
                            </Link>
                          </Button>
                        )}
                        {!n.isRead && (
                          <button 
                            onClick={() => markRead(n.id)}
                            className="text-[10px] font-bold text-primary/70 hover:text-primary transition-colors ml-auto underline underline-offset-4 decoration-primary/20"
                          >
                            Mark Read
                          </button>
                        )}
                        <Button 
                          onClick={() => deleteNotification(n.id)}
                          variant="ghost" 
                          size="sm" 
                          className="h-7 w-7 p-0 text-zinc-600 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg opacity-0 lg:group-hover:opacity-100 transition-all flex items-center justify-center ml-auto"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
        
        {notifications.length > 0 && (
          <div className="p-4 border-t border-white/5 bg-white/1 text-center">
             <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">End of stream</p>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
