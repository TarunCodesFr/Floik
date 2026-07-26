"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Megaphone, Plus, Trash2, Edit3, 
  CheckCircle2, AlertCircle, Info, Clock,
  Save, X
} from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useAuth } from '@/context/auth-context';
import { toast } from "sonner";
import { AutoSkeleton } from "auto-skeleton-react-and-native";
import { apiFetch } from '@/lib/api'

interface Announcement {
  id: string;
  title: string;
  content: string;
  type: string;
  isActive: boolean;
  gradient?: string;
  createdAt: string;
}

export default function AnnouncementsPage() {
  const { token } = useAuth();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  
  // Form State
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('GENERAL');
  const [link, setLink] = useState('');
  const [linkText, setLinkText] = useState('');
  const [gradient, setGradient] = useState('linear-gradient(to right, #E7D1A2, #B89052)');

  const PRESET_GRADIENTS = [
    { name: 'Floik Gold', value: 'linear-gradient(to right, #E7D1A2, #B89052)' },
    { name: 'Metallic', value: 'linear-gradient(to right, #D8B77A, #B89052)' },
    { name: 'Midnight Gold', value: 'linear-gradient(to right, #B89052, #1a1a1a)' },
    { name: 'Phoenix', value: 'linear-gradient(to right, #FF4D00, #FFD700)' },
    { name: 'Royal', value: 'linear-gradient(to right, #7C3AED, #C084FC)' },
  ];

  const fetchAnnouncements = async () => {
    setIsLoading(true);
    try {
      const data = await apiFetch('/api/announcements');
      setAnnouncements(data);
    } catch (error) {
      toast.error("Failed to fetch announcements");
    }
    setIsLoading(false);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiFetch('/api/announcements', {
        method: 'POST',
        body: JSON.stringify({ title, content, type, link, linkText, gradient })
      });
      toast.success("Announcement posted successfully!");
      setTitle(''); setContent(''); setType('GENERAL'); setLink(''); setLinkText(''); setGradient('linear-gradient(to right, #E7D1A2, #B89052)');
      setIsCreating(false);
      fetchAnnouncements();
    } catch (error) {
      toast.error("Failed to post announcement");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await apiFetch(`/api/announcements/${id}`, {
        method: 'DELETE',
      });
      setAnnouncements(prev => prev.filter(a => a.id !== id));
      toast.success("Announcement deleted");
    } catch (error) {
      toast.error("Error deleting announcement");
    }
  };

  useEffect(() => {
    if (token) fetchAnnouncements();
  }, [token]);

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight flex items-center gap-4 text-primary">
            <Megaphone className="w-10 h-10" /> Announcements
          </h1>
          <p className="text-muted-foreground font-medium max-w-lg">Broadcast updates, maintenance notices, and events to the portal dashboard.</p>
        </div>
        <Button 
          onClick={() => setIsCreating(!isCreating)} 
          className="rounded-xl h-14 px-8 font-black uppercase tracking-widest gap-2 shadow-lg shadow-primary/20"
        >
          {isCreating ? <X size={20} /> : <Plus size={20} />}
          {isCreating ? "Cancel" : "New Post"}
        </Button>
      </div>

      <AnimatePresence>
        {isCreating && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <Card className="p-8 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-xl">
              <form onSubmit={handleCreate} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 ml-1">Title</label>
                    <Input 
                      placeholder="Maintenance Update..." 
                      value={title} 
                      onChange={e => setTitle(e.target.value)}
                      className="h-14 rounded-2xl bg-background border-border/10 focus:ring-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 ml-1">Category</label>
                    <Select value={type} onValueChange={setType}>
                      <SelectTrigger className="h-14 rounded-2xl bg-background border-border/10">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="GENERAL">General Update</SelectItem>
                        <SelectItem value="MAINTENANCE">Maintenance</SelectItem>
                        <SelectItem value="EVENT">Special Event</SelectItem>
                        <SelectItem value="ALERT">Critical Alert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 ml-1">Destination URL (Optional)</label>
                    <Input 
                      placeholder="https://store..." 
                      value={link} 
                      onChange={e => setLink(e.target.value)}
                      className="h-14 rounded-2xl bg-background border-border/10 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 ml-1">CTA Label (e.g. View More)</label>
                    <Input 
                      placeholder="View Rewards" 
                      value={linkText} 
                      onChange={e => setLinkText(e.target.value)}
                      className="h-14 rounded-2xl bg-background border-border/10 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 ml-1">Banner Gradient</label>
                  <div className="flex flex-wrap gap-3">
                    {PRESET_GRADIENTS.map((p) => (
                      <button
                        key={p.name}
                        type="button"
                        onClick={() => setGradient(p.value)}
                        className={`group relative w-12 h-12 rounded-xl border-2 transition-all ${gradient === p.value ? 'border-primary' : 'border-transparent hover:scale-105 hover:border-white/10'}`}
                        style={{ background: p.value }}
                      >
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{p.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 ml-1">Message Content</label>
                  <Textarea 
                    placeholder="Write your announcement here..." 
                    value={content} 
                    onChange={e => setContent(e.target.value)}
                    className="min-h-[150px] rounded-2xl bg-background border-border/10 p-6"
                    required
                  />
                </div>
                <Button type="submit" className="w-full h-14 rounded-2xl font-black uppercase tracking-widest text-sm">
                  <Save className="w-5 h-5 mr-2" /> Publish Broadcast
                </Button>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 gap-6">
        {isLoading ? (
          <AutoSkeleton isLoading={true}>
            <div className="space-y-6">
              {[1, 2].map(i => <div key={i} className="h-40 rounded-3xl bg-card/50" />)}
            </div>
          </AutoSkeleton>
        ) : announcements.length > 0 ? (
          announcements.map((ann, i) => (
            <motion.div key={ann.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
              <Card className="rounded-3xl bg-card border border-white/5 p-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-4">
                    <div 
                      className="p-3 rounded-2xl text-white"
                      style={{ 
                        background: ann.gradient && /^(linear|radial)-gradient\([a-zA-Z0-9\s,#%\(\)\.\-]+\)$/i.test(ann.gradient) 
                          ? ann.gradient 
                          : 'var(--primary)' 
                      }}
                    >
                      {ann.type === 'MAINTENANCE' ? <Clock size={24} /> :
                       ann.type === 'ALERT' ? <AlertCircle size={24} /> :
                       ann.type === 'EVENT' ? <Info size={24} /> :
                       <Megaphone size={24} />}
                    </div>
                    <div>
                      <h3 className="text-xl font-black tracking-tight">{ann.title}</h3>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        <span>{ann.type}</span>
                        <div className="w-1 h-1 rounded-full bg-border" />
                        <span>{new Date(ann.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-1 md:pl-16">{ann.content}</p>
                </div>
                <div className="flex gap-2 shrink-0 self-end md:self-center">
                  <Button variant="outline" size="icon" onClick={() => handleDelete(ann.id)} className="rounded-xl h-12 w-12 border-red-500/20 text-red-500 hover:bg-red-500/10">
                    <Trash2 size={18} />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-24 bg-card/10 rounded-3xl border border-dashed border-border/20">
            <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-50">No announcements yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
