"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { 
  ArrowLeft, 
  Send, 
  Loader2,
  CheckCircle2,
  ShieldCheck,
  Users, Code2, Bug, UserX, Handshake, Star, Gem, ExternalLink, FileText
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from '@/context/auth-context';
import { toast } from "sonner";
import { AutoSkeleton } from "auto-skeleton-react-and-native";
import { apiFetch } from "@/lib/api";

const ICON_MAP: Record<string, any> = {
  ShieldCheck, Users, Code2, Bug, UserX, Handshake, Star, Gem, FileText, ExternalLink
};

export default function ApplyPage() {
  const { type } = useParams();
  const formId = type as string;
  const router = useRouter();
  const { user, token, loading } = useAuth();
  const [formData, setFormData] = useState<any>(null);
  const [formLoading, setFormLoading] = useState(true);


  useEffect(() => {
    if (!formId) return;
    setFormLoading(true);
    apiFetch(`/api/forms/${formId}`)
      .then(data => {
        setFormData(data);
        setFormLoading(false);
      })
      .catch(() => setFormLoading(false));
  }, [formId]);

  const config = formData;

  const formSchema = useMemo(() => {
    if (!config?.fields) return z.object({});
    const schemaObj: any = {};
    config.fields.forEach((field: any) => {
      switch (field.type) {
        case 'number':
          schemaObj[field.id] = field.required
            ? z.coerce.number()
            : z.coerce.number().optional();
          break;
        case 'email':
          schemaObj[field.id] = field.required
            ? z.string().email(`${field.label} must be a valid email`)
            : z.string().email().optional().or(z.literal(''));
          break;
        case 'tel':
          schemaObj[field.id] = field.required
            ? z.string().regex(/^[\d\s\-+()]+$/, `${field.label} must be a valid phone number`)
            : z.string().optional();
          break;
        case 'url':
          schemaObj[field.id] = field.required
            ? z.string().url(`${field.label} must be a valid URL`)
            : z.string().url().optional().or(z.literal(''));
          break;
        default:
          schemaObj[field.id] = field.required
            ? z.string().min(1, `${field.label} is required`).max(5000, `${field.label} is too long`)
            : z.string().max(5000).optional();
      }
    });
    return z.object(schemaObj);
  }, [config]);

  const defaultValues = useMemo(() => {
    if (!config?.fields) return {};
    const defaults: any = {};
    config.fields.forEach((field: any) => {
      defaults[field.id] = "";
    });
    return defaults;
  }, [config]);

  const form = useForm<any>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // Re-sync default values when config loads
  useEffect(() => {
    if (config?.fields) {
      form.reset(defaultValues);
    }
  }, [config, defaultValues, form]);

  async function onSubmit(values: any) {
    try {
      await apiFetch('/api/portal/submit', {
        method: 'POST',
        body: JSON.stringify({
          formId: formId,
          content: values
        })
      });

      toast.success("Your application has been received and added to our review queue.");
      router.push('/portal');
    } catch (error) {
      toast.error("Something went wrong while sending your form. Please try again.");
    }
  }

  const FormIcon = config ? (ICON_MAP[config.icon] || FileText) : FileText;

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {(loading || formLoading) ? (
          <AutoSkeleton isLoading={true}>
            <div className="flex flex-col gap-12">
              <div className="h-6 w-32 bg-secondary/10 rounded" />
              <div className="h-64 rounded-3xl bg-card/30" />
              <div className="h-12 w-64 bg-secondary/10 rounded" />
              <div className="h-[600px] rounded-3xl bg-card/40" />
            </div>
          </AutoSkeleton>
        ) : (!user && !loading) || !config ? null : (
          <>
            <Link href="/portal" className="inline-flex items-center gap-2 text-[0.6rem] font-black tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Back to Portal
            </Link>

            <div className="relative rounded-3xl bg-card/30 backdrop-blur-xl border border-border/10 overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-bl from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none" />
               
               <div className="p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
                  <div className="relative group">
                     <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                     <div className="relative w-40 h-40 bg-background/50 rounded-2xl border border-border/10 flex items-center justify-center p-6 shadow-inner">
                        <FormIcon className="w-20 h-20 text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.3)]" />
                     </div>
                     <div className="absolute -top-3 -right-3 px-4 py-1.5 bg-primary text-primary-foreground text-[0.55rem] font-black uppercase tracking-widest rounded-full shadow-lg">
                        {config.title}
                     </div>
                  </div>

                  <div className="flex-1 text-center md:text-left space-y-4">
                     <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-none">
                        {config.title.split(' ')[0]} <span className="text-primary italic">{config.title.split(' ').slice(1).join(' ')}</span>
                     </h1>
                     <p className="text-muted-foreground text-sm md:text-lg max-w-2xl font-medium leading-relaxed">
                        {config.description}
                     </p>
                     <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <div className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-[0.6rem] font-black uppercase tracking-widest flex items-center gap-2">
                           <CheckCircle2 size={12} /> {config.fields?.length || 0} questions to answer
                        </div>
                        <div className="px-4 py-2 rounded-xl bg-secondary/10 border border-border/10 text-muted-foreground text-[0.6rem] font-black uppercase tracking-widest flex items-center gap-2">
                           <Loader2 size={12} /> Review time: 48-72h
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="space-y-6">
               <div className="flex items-center gap-4 px-4">
                  <h2 className="text-2xl font-black text-foreground tracking-widest">
                     Apply for <span className="text-primary italic">{config.title}</span>
                  </h2>
                  <div className="h-px grow bg-border/20" />
               </div>

               <Card className="rounded-3xl bg-card/40 backdrop-blur-xl border-border/10 shadow-2xl overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                     <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div className="col-span-1 md:col-span-2 flex flex-wrap gap-4 mb-2">
                                 <div className="px-5 py-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-[0.65rem] font-black uppercase tracking-widest text-emerald-400">Verified via Xbox Live:</span>
                                    <span className="text-[0.7rem] font-black text-foreground">{user?.username || 'Loading...'}</span>
                                 </div>
                                 <div className="px-5 py-3 rounded-2xl bg-primary/5 border border-primary/10 flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary/40" />
                                    <span className="text-[0.65rem] font-black uppercase tracking-widest text-primary/60">XUID Instance:</span>
                                    <span className="text-[0.7rem] font-black text-foreground/60">{user?.xboxId?.slice(0, 8) || '...'}...</span>
                                 </div>
                              </div>

                              {config.fields?.map((field: any) => (
                                 <FormField
                                    key={field.id}
                                    control={form.control}
                                    name={field.id}
                                    render={({ field: fieldProps }) => (
                                       <FormItem className={field.type === 'textarea' ? "md:col-span-2" : ""}>
                                          <FormLabel className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                                             {field.label} {field.required && <span className="text-primary">*</span>}
                                          </FormLabel>
                                          <FormControl>
                                             {field.type === 'textarea' ? (
                                                <Textarea 
                                                   {...fieldProps} 
                                                   value={fieldProps.value ?? ''}
                                                   placeholder={field.placeholder} 
                                                   className="bg-background/40 border-border/10 rounded-2xl focus:border-primary/50 min-h-[160px] transition-all text-[0.85rem] font-bold p-5"
                                                />
                                             ) : field.type === 'select' ? (
                                                <Select onValueChange={fieldProps.onChange} value={fieldProps.value ?? ''}>
                                                   <SelectTrigger className="bg-background/40 border-border/10 rounded-2xl focus:border-primary/50 py-7 px-5 text-[0.85rem] font-bold tracking-wider capitalize">
                                                      <SelectValue placeholder={`Select ${field.label}`} />
                                                   </SelectTrigger>
                                                   <SelectContent className="bg-card/95 backdrop-blur-3xl border-border/10 rounded-2xl">
                                                      {field.options?.map((opt: string) => (
                                                         <SelectItem key={opt} value={opt} className="rounded-xl focus:bg-primary/10 text-[0.75rem] font-black transition-colors p-3 cursor-pointer">
                                                            {opt}
                                                         </SelectItem>
                                                      ))}
                                                   </SelectContent>
                                                </Select>
                                             ) : (
                                                <Input 
                                                   {...fieldProps} 
                                                   value={fieldProps.value ?? ''}
                                                   type={field.type || 'text'} 
                                                   placeholder={field.placeholder} 
                                                   className="bg-background/40 border-border/10 rounded-2xl focus:border-primary/50 py-7 px-5 transition-all text-[0.85rem] font-bold"
                                                />
                                             )}
                                          </FormControl>
                                          <FormMessage className="text-[0.65rem] font-black italic ml-1" />
                                       </FormItem>
                                    )}
                                 />
                              ))}
                           </div>

                           <motion.div 
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              className="pt-6"
                           >
                              <Button 
                                 type="submit" 
                                 disabled={form.formState.isSubmitting}
                                 className="w-full py-10 text-xl font-black rounded-2xl bg-primary hover:brightness-110 shadow-2xl shadow-primary/20 transition-all flex gap-4 tracking-widest"
                              >
                                 {form.formState.isSubmitting ? (
                                    <Loader2 className="animate-spin w-6 h-6" />
                                 ) : (
                                    <>
                                       <Send className="w-5 h-5" />
                                       Submit Application
                                    </>
                                 )}
                              </Button>
                              <p className="text-center mt-6 text-[0.6rem] font-bold text-muted-foreground uppercase tracking-widest opacity-50">
                                 By submitting, you agree to our terms of service and community guidelines.
                              </p>
                           </motion.div>
                        </form>
                     </Form>
                  </CardContent>
               </Card>
            </div>
          </>
        )}
        {!loading && !formLoading && !config && (
          <div className="text-center py-32 space-y-4 opacity-50">
            <FileText className="w-12 h-12 mx-auto text-muted-foreground" />
            <p className="text-xs font-bold uppercase tracking-[0.3em]">Form not found</p>
          </div>
        )}
      </div>
    </div>
  );
}
