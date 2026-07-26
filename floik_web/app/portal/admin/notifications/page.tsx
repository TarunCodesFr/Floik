"use client"

import * as React from "react"
import { Bell, Send, Users, User, Info, AlertTriangle, CheckCircle2, X, Search, Trash2 } from "lucide-react"
import { apiFetch } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { formatDistanceToNow } from "date-fns"

interface User {
  id: string
  username: string
  xboxId: string
}

export default function AdminNotificationsPage() {
  const [users, setUsers] = React.useState<User[]>([])
  const [targetType, setTargetType] = React.useState<"GLOBAL" | "USER">("GLOBAL")
  const [selectedUserId, setSelectedUserId] = React.useState<string>("")
  const [title, setTitle] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [type, setType] = React.useState("INFO")
  const [link, setLink] = React.useState("")
  const [isSending, setIsSending] = React.useState(false)

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await apiFetch('/api/portal/users')
        setUsers(data)
      } catch (error) {
        console.error("Failed to fetch users")
      }
    }
    fetchUsers()
  }, [])

  const sendNotification = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !message) return toast.error("Title and message are required")

    setIsSending(true)
    try {
      await apiFetch('/api/notifications', {
        method: 'POST',
        body: JSON.stringify({
          userId: targetType === 'USER' ? selectedUserId : null,
          title,
          message,
          type,
          link
        })
      })

      toast.success(`Notification sent ${targetType === 'GLOBAL' ? 'globally' : 'to user'}`)
      setTitle("")
      setMessage("")
      setLink("")
    } catch (error: any) {
      toast.error(error.message || "Failed to send notification")
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center gap-4 text-white">
          <Bell className="w-10 h-10 text-primary" /> Notifications
        </h1>
        <p className="text-zinc-400 uppercase text-[10px] font-bold tracking-[0.2em]">Broadcast system alerts and targeted user messages</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Card className="bg-card/60 border-border/10 backdrop-blur-3xl shadow-2xl rounded-[32px]">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" /> Dispatch Center
            </CardTitle>
            <CardDescription className="text-zinc-500">Configure your alert audience and payload</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={sendNotification} className="space-y-6">
              <div className="space-y-4 p-4 rounded-2xl bg-primary/5 border border-border/10">
                <div className="flex items-center gap-4">
                  <Button 
                    type="button"
                    variant={targetType === 'GLOBAL' ? 'default' : 'ghost'} 
                    onClick={() => setTargetType('GLOBAL')}
                    className="flex-1 rounded-xl"
                  >
                    <Users className="w-4 h-4 mr-2" /> Global
                  </Button>
                  <Button 
                    type="button"
                    variant={targetType === 'USER' ? 'default' : 'ghost'} 
                    onClick={() => setTargetType('USER')}
                    className="flex-1 rounded-xl"
                  >
                    <User className="w-4 h-4 mr-2" /> Targeted
                  </Button>
                </div>

                {targetType === 'USER' && (
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Select User</label>
                    <Select value={selectedUserId} onValueChange={setSelectedUserId}>
                      <SelectTrigger className="bg-background/50 border-white/10 rounded-xl">
                        <SelectValue placeholder="Search users..." />
                      </SelectTrigger>
                      <SelectContent className="bg-background/95 backdrop-blur-2xl border-white/10">
                        {users.map(u => (
                          <SelectItem key={u.id} value={u.id}>{u.username} ({u.xboxId})</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Alert Type</label>
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger className="bg-background/50 border-white/10 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-background/95 backdrop-blur-2xl border-white/10">
                      <SelectItem value="INFO">Information</SelectItem>
                      <SelectItem value="SUCCESS">Success</SelectItem>
                      <SelectItem value="WARNING">Warning</SelectItem>
                      <SelectItem value="ERROR">Error</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Optional Link</label>
                  <Input 
                    placeholder="/portal/submissions" 
                    value={link} 
                    onChange={(e) => setLink(e.target.value)}
                    className="bg-background/50 border-white/10 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Title</label>
                <Input 
                  placeholder="System Update" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-background/50 border-white/10 rounded-xl h-12 text-sm font-bold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                <Textarea 
                  placeholder="A new feature has been added..." 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-background/50 border-white/10 rounded-2xl min-h-[120px] text-sm"
                />
              </div>

              <Button disabled={isSending} type="submit" className="w-full h-12 rounded-xl font-black uppercase tracking-widest">
                {isSending ? "Sending..." : "Dispatch Notification"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-card/40 border-border/10 backdrop-blur-3xl shadow-2xl rounded-[32px] h-fit sticky top-8">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" /> Experience Preview
                </CardTitle>
                <CardDescription className="text-zinc-500">Real-time simulation of the user's view</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="p-6 rounded-[24px] bg-card/80 border border-border/10 shadow-2xl space-y-4">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center border border-border/10">
                            {type === 'INFO' && <Info className="text-primary w-5 h-5" />}
                            {type === 'SUCCESS' && <CheckCircle2 className="text-emerald-500 w-5 h-5" />}
                            {type === 'WARNING' && <AlertTriangle className="text-amber-500 w-5 h-5" />}
                            {type === 'ERROR' && <X className="text-rose-500 w-5 h-5" />}
                        </div>
                        <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-bold text-white">{title || "Notification Title"}</h4>
                                <span className="text-[10px] text-zinc-500 font-medium">Just Now</span>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed font-sans mt-1">
                                {message || "Your notification message will appear here. Be concise and clear with your instructions."}
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}
