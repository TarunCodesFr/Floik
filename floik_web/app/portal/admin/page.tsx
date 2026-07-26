"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Users,
  ArrowUpRight,
  TrendingUp,
  Activity,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useAuth } from "@/context/auth-context"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button"
import { format, subMonths, isWithinInterval, startOfMonth, endOfMonth } from "date-fns"

const chartConfig = {
  users: {
    label: "New Users",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

import { apiFetch } from "@/lib/api"

export default function AdminDashboard() {
  const { token } = useAuth()
  const [stats, setStats] = React.useState({
    totalSubmissions: 0,
    activeUsers: 0,
    growthRate: 12.5,
    successfulApps: 0,
    pendingReview: 0
  })
  const [userData, setUserData] = React.useState<any[]>([])
  const [filteredChartData, setFilteredChartData] = React.useState<any[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [timeRange, setTimeRange] = React.useState('3m')

  React.useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [submissions, users, statsData] = await Promise.all([
          apiFetch('/api/portal/submissions'),
          apiFetch('/api/portal/users'),
          apiFetch('/api/portal/stats')
        ])

        setUserData(users)
        setStats({
          totalSubmissions: statsData.totalSubmissions,
          activeUsers: statsData.totalUsers,
          growthRate: 4.5,
          successfulApps: statsData.approvedSubmissions,
          pendingReview: statsData.pendingSubmissions
        })
      } catch (error) {
        console.error("Dashboard Fetch Error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (token) fetchAllData()
  }, [token])

  React.useEffect(() => {
    if (userData.length === 0) return;

    const now = new Date();
    const processedData = [];

    if (timeRange === '3m' || timeRange === 'all') {
      // Monthly grouping for last 6 months
      for (let i = 5; i >= 0; i--) {
        const monthStart = startOfMonth(subMonths(now, i));
        const monthEnd = endOfMonth(subMonths(now, i));
        const count = userData.filter(u => {
          if (!u.createdAt) return false;
          const createdAt = new Date(u.createdAt);
          return createdAt >= monthStart && createdAt <= monthEnd;
        }).length;

        processedData.push({
          label: format(monthStart, "MMM"),
          users: count
        });
      }
    } else if (timeRange === '30d') {
      // Daily grouping for last 30 days (grouped by weeks for 4-5 points, or every 5 days for clarity)
      for (let i = 25; i >= 0; i -= 5) {
        const d = new Date(now);
        d.setDate(d.getDate() - i);
        const count = userData.filter(u => {
          if (!u.createdAt) return false;
          const createdAt = new Date(u.createdAt);
          return createdAt <= d;
        }).length;
        processedData.push({ label: format(d, "MMM d"), users: count });
      }
    } else if (timeRange === '7d') {
      // Daily points for last 7 days
      for (let i = 6; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i);
        const count = userData.filter(u => {
          if (!u.createdAt) return false;
          const createdAt = new Date(u.createdAt);
          return format(createdAt, 'yyyy-MM-dd') === format(d, 'yyyy-MM-dd');
        }).length;
        processedData.push({ label: format(d, "EEE"), users: count });
      }
    }

    setFilteredChartData(processedData);
  }, [userData, timeRange]);

  const metricCards = [
    {
      title: "Active Accounts",
      value: stats.activeUsers.toLocaleString(),
      trend: "+12.5%",
      trendUp: true,
      desc: "Engagement exceed targets",
      status: "Strong user retention",
      icon: TrendingUp
    },
    {
      title: "Growth Rate",
      value: `${stats.growthRate}%`,
      trend: "+4.5%",
      trendUp: true,
      desc: "Meets growth projections",
      status: "Steady performance increase",
      icon: Activity
    },
    {
      title: "New Submissions",
      value: stats.totalSubmissions.toLocaleString(),
      trend: "+8.2%",
      trendUp: true,
      desc: "Waitlist activity increased",
      status: "Increased demand",
      icon: TrendingUp
    },
    {
      title: "Pending Reviews",
      value: stats.pendingReview.toLocaleString(),
      trend: "-20%",
      trendUp: false,
      desc: "Queue needs attention",
      status: "Action required",
      icon: ArrowDownRight
    },
  ]

  return (
    <div className="space-y-8 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricCards.map((card, i) => (
          <Card key={card.title} className="bg-card border-border/10 p-6 space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-[13px] font-medium text-muted-foreground">{card.title}</span>
              <div className={`flex items-center gap-1 text-[11px] font-bold px-1.5 py-0.5 rounded ${card.trendUp ? "text-primary bg-primary/10" : "text-rose-500 bg-rose-500/10"}`}>
                <card.icon className="size-3" />
                {card.trend}
              </div>
            </div>

            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-white tracking-tight">{isLoading ? "..." : card.value}</h2>
              <div className="flex items-center gap-2 pt-4">
                <span className="text-[11px] text-white font-medium flex items-center gap-1.5">
                  {card.status} <TrendingUp className="size-3 text-zinc-600" />
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 font-medium">{card.desc}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-card border-border/10 overflow-hidden">
        <CardHeader className="p-8 pb-0 flex flex-row items-center justify-between space-y-0">
          <div className="space-y-1">
            <CardTitle className="text-lg font-bold text-white">Total Users</CardTitle>
            <CardDescription className="text-zinc-500 font-medium text-xs">Total for the last 6 months</CardDescription>
          </div>
          <div className="flex bg-white/5 p-1 rounded-lg border border-white/5">
            {[
              { label: 'Last 3 months', value: '3m' },
              { label: 'Last 30 days', value: '30d' },
              { label: 'Last 7 days', value: '7d' }
            ].map((opt) => (
              <Button
                key={opt.value}
                variant="ghost"
                size="sm"
                onClick={() => setTimeRange(opt.value)}
                className={`h-7 px-4 text-[10px] font-bold rounded-md transition-all ${timeRange === opt.value ? "bg-[#09090b] text-white shadow-sm" : "text-zinc-500 hover:text-white"}`}
              >
                {opt.label}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent className="p-8 pt-10">
          <ChartContainer config={chartConfig} className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={filteredChartData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--border))" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="hsl(var(--border))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#ffffff05" />
                <XAxis
                  dataKey="label"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#71717a", fontSize: 10, fontWeight: 600 }}
                  tickMargin={15}
                />
                <YAxis
                  hide
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  fillOpacity={0.5}
                  fill="#B06858"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2 bg-card border-border/10 p-8 flex flex-col justify-between min-h-[300px]">
          <div className="space-y-6">
            <div className="size-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
              <Activity className="size-5 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Platform Health</h3>
              <p className="text-sm text-zinc-500 font-medium max-w-sm">All systems are operational. Network latency is optimal at 42ms with no reported outages in the last 24 hours.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-8">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-primary" />
              <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">Operational</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Uptime: 99.98%</span>
          </div>
        </Card>

        <Card className="bg-card border-border/10 p-8 space-y-8">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Active Alerts</h3>
            <p className="text-xs text-zinc-500 font-medium">Critical system notifications</p>
          </div>

          <div className="space-y-3">
            {[
              { title: "Review Submissions", icon: Clock, color: "text-amber-500" },
              { title: "Security Audit", icon: AlertCircle, color: "text-blue-500" },
              { title: "System Cleared", icon: CheckCircle2, color: "text-primary" },
            ].map((alert) => (
              <div key={alert.title} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                  <alert.icon className={`size-4 ${alert.color}`} />
                  <span className="text-xs font-bold text-white">{alert.title}</span>
                </div>
                <ArrowUpRight className="size-3.5 text-zinc-600" />
              </div>
            ))}
          </div>

          <Button className="w-full bg-white text-black hover:bg-zinc-200 text-xs font-bold h-10 rounded-xl">
            View All Alerts
          </Button>
        </Card>
      </div>
    </div>
  )
}
