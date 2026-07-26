"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { getAvatarUrl } from "@/lib/avatar"
import {
  LayoutDashboard,
  FileText,
  Megaphone,
  Bell,
  LogOut,
  Users,
  Layers,
  Inbox,
  Shield,
  Settings as SettingsIcon,
  MessageSquare,
} from "lucide-react"

import { useAuth } from "@/context/auth-context"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarRail,
  useSidebar
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { ChevronsUpDown } from "lucide-react"

interface NavItem {
  title: string
  url: string
  icon: React.ElementType
  permission?: string
}

const mainNavItems: NavItem[] = [
  { title: "Dashboard", url: "/portal/admin", icon: LayoutDashboard },
  { title: "Submissions", url: "/portal/admin/submissions", icon: Inbox, permission: "submissions:view" },
  { title: "Users", url: "/portal/admin/users", icon: Users, permission: "users:manage" },
  { title: "Announcements", url: "/portal/admin/announcements", icon: Megaphone, permission: "announcements:manage" },
  { title: "Forums", url: "/portal/admin/forums", icon: MessageSquare, permission: "forum:moderate" },
]

const settingsItems: NavItem[] = [
  { title: "Roles", url: "/portal/admin/roles", icon: Shield, permission: "roles:manage" },
  { title: "Applications", url: "/portal/admin/forms", icon: Layers, permission: "forms:view" },
  { title: "Settings", url: "/portal/admin/settings", icon: SettingsIcon },
  { title: "Notifications", url: "/portal/admin/notifications", icon: Bell, permission: "notifications:send" },
]

function getUserPermissions(user: any): string[] {
  if (user?.role === 'ADMIN') return ['*']
  if (!user?.userRoles || user.userRoles.length === 0) return []
  const perms = new Set<string>()
  for (const ur of user.userRoles) {
    if (ur.role?.permissions && Array.isArray(ur.role.permissions)) {
      for (const p of ur.role.permissions) {
        if (typeof p === 'string') perms.add(p)
      }
    }
  }
  return [...perms]
}

function getHighestRole(user: any): { name: string; style: string } | null {
  const roles = user?.userRoles
    ?.map((ur: any) => ur.role)
    ?.sort((a: any, b: any) => (a.position ?? 999) - (b.position ?? 999)) || []
  if (roles.length === 0) return null
  const styles: Record<string, string> = {
    'text-primary': 'text-primary',
    'text-blue-500': 'text-blue-500',
    'text-emerald-500': 'text-emerald-500',
    'text-rose-500': 'text-rose-500',
    'text-amber-500': 'text-amber-500',
    'text-violet-500': 'text-violet-500',
    'text-cyan-500': 'text-cyan-500',
    'text-pink-500': 'text-pink-500',
  }
  return {
    name: roles[0].name,
    style: styles[roles[0].color] || 'text-primary',
  }
}

function canAccess(userPerms: string[], required?: string): boolean {
  if (!required) return true
  if (userPerms.includes('*')) return true
  if (userPerms.includes(required)) return true
  const parts = required.split(':')
  for (let i = parts.length; i > 0; i--) {
    if (userPerms.includes([...parts.slice(0, i - 1), '*'].join(':'))) return true
  }
  return false
}

export function AdminSidebar() {
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const { state } = useSidebar()
  const userPerms = React.useMemo(() => getUserPermissions(user), [user])

  const visibleMain = mainNavItems.filter(item => canAccess(userPerms, item.permission))
  const visibleSettings = settingsItems.filter(item => canAccess(userPerms, item.permission))

  if (visibleMain.length === 0 && visibleSettings.length === 0) return null

  return (
    <Sidebar collapsible="icon" className="border-r border-border/10 bg-card">
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-4">
          <div className="relative size-8 shrink-0">
            <Image
              src="/assets/floik.png"
              alt="Floik Studio"
              fill
              className="object-contain"
            />
          </div>
          {state === "expanded" && (
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="text-sm font-bold text-foreground leading-tight">floik</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Admin Panel</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="custom-scrollbar">
        {visibleMain.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>Overview</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-1">
                {visibleMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      isActive={pathname === item.url}
                      className={`rounded-lg transition-colors ${pathname === item.url
                          ? "bg-primary/10 text-primary"
                          : "text-zinc-500 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      <Link href={item.url}>
                        <item.icon size={18} />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {visibleSettings.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>Configuration</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-1">
                {visibleSettings.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      isActive={pathname === item.url}
                      className={`rounded-lg transition-colors ${pathname === item.url
                          ? "bg-primary/10 text-primary"
                          : "text-zinc-500 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      <Link href={item.url}>
                        <item.icon size={18} />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="p-2 border-t border-white/5">
        <SidebarMenu>
          <SidebarMenuItem>
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-white/10 data-[state=open]:text-white h-12 rounded-lg transition-colors"
                  >
                    <div className="relative size-8 rounded-full overflow-hidden shrink-0 border border-white/10">
                      <Image
                        src={getAvatarUrl(user.profilePicture, user.username, user.xboxId)}
                        alt={user.username}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {state === "expanded" && (
                      <div className="grid flex-1 text-left text-sm leading-tight ml-2">
                        <span className="truncate font-semibold text-white text-xs">{user.username}</span>
                        <span className="truncate text-[10px] text-zinc-500 font-medium">
                          {(() => {
                            const hr = getHighestRole(user)
                            return hr ? (
                              <span className={hr.style}>{hr.name}</span>
                            ) : user.role
                          })()}
                        </span>
                      </div>
                    )}
                    <ChevronsUpDown className="ml-auto size-4 text-zinc-500" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 bg-[#09090b] border-white/10 rounded-xl"
                  side="right"
                  align="end"
                  sideOffset={4}
                >
                  <div className="flex items-center gap-3 p-3">
                    <div className="relative size-9 rounded-full overflow-hidden border border-white/10">
                      <Image
                        src={getAvatarUrl(user.profilePicture, user.username, user.xboxId)}
                        alt={user.username}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold text-white text-xs">{user.username}</span>
                      <span className="truncate text-[10px] text-zinc-500 font-medium">
                        {(() => {
                          const hr = getHighestRole(user)
                          return hr ? (
                            <span className={hr.style}>{hr.name}</span>
                          ) : user.role
                        })()}
                      </span>
                    </div>
                  </div>
                  <DropdownMenuSeparator className="bg-white/5" />
                  <DropdownMenuItem className="text-zinc-400 hover:text-white hover:bg-white/5 cursor-pointer text-xs font-medium py-2 rounded-lg m-1">
                    <Bell className="mr-2 size-4" />
                    Notifications
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/5" />
                  <DropdownMenuItem
                    onClick={logout}
                    className="text-rose-500 hover:text-rose-400 hover:bg-rose-500/10 cursor-pointer text-xs font-medium py-2 rounded-lg m-1"
                  >
                    <LogOut className="mr-2 size-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
