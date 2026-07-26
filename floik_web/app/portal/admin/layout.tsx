"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { 
  SidebarProvider, 
  SidebarInset, 
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar"
import { AdminSidebar } from "@/components/admin-sidebar"
import { AutoSkeleton } from "auto-skeleton-react-and-native"

import Image from "next/image"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth()
  const router = useRouter()

  const canAccessAdmin = user?.role === 'ADMIN' || (user?.userRoles && user.userRoles.length > 0)

  React.useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/portal")
      } else if (!canAccessAdmin) {
        router.push("/portal")
      }
    }
  }, [user, loading, router, canAccessAdmin])

  if (loading || !user || !canAccessAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <AutoSkeleton isLoading={true}>
          <div className="w-full max-w-7xl mx-auto p-8 space-y-8">
            <div className="h-12 w-1/3 bg-muted rounded-2xl" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="h-40 bg-muted rounded-3xl" />
               <div className="h-40 bg-muted rounded-3xl" />
               <div className="h-40 bg-muted rounded-3xl" />
            </div>
          </div>
        </AutoSkeleton>
      </div>
    )
  }

  return (
    <SidebarProvider>
      <AdminLayoutInner children={children} />
    </SidebarProvider>
  )
}

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const { state } = useSidebar()
  const sidebarWidth = state === 'expanded' ? '16rem' : '3rem'

  return (
    <div className="flex h-screen w-full bg-[#030712] font-sans">
      <style jsx global>{`
        .admin-dashboard h1, .admin-dashboard h2, .admin-dashboard h3, .admin-dashboard h4, .admin-dashboard h5, .admin-dashboard h6 {
          font-family: var(--font-outfit), sans-serif !important;
        }
      `}</style>
      <AdminSidebar />
      <SidebarInset
        className="flex flex-col overflow-hidden bg-transparent admin-dashboard"
        style={{ marginLeft: sidebarWidth }}
      >
        <header className="flex h-14 items-center gap-4 border-b border-white/5 px-6 shrink-0 bg-[#09090b] z-20">
          <SidebarTrigger className="text-zinc-400 hover:text-white transition-colors h-9 w-9 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center p-0" />
          <div className="h-4 w-px bg-white/10 mx-1" />
          <div className="flex items-center gap-2 text-sm text-zinc-400">
             <span className="font-medium">Admin</span>
             <span className="text-white/20">/</span>
             <span className="text-white font-semibold">Dashboard</span>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <div className="max-w-[1600px] mx-auto space-y-8">
            {children}
          </div>
        </main>
      </SidebarInset>
    </div>
  )
}
