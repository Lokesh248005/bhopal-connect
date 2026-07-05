"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { ArrowUpRight, TrendingUp, Users, Eye, MousePointerClick } from "lucide-react";

// Mock Data
const viewsData = [
    { name: 'Mon', views: 400 },
    { name: 'Tue', views: 300 },
    { name: 'Wed', views: 550 },
    { name: 'Thu', views: 700 },
    { name: 'Fri', views: 450 },
    { name: 'Sat', views: 600 },
    { name: 'Sun', views: 800 },
];

const applicationData = [
    { name: 'Frontend', applications: 45 },
    { name: 'Backend', applications: 30 },
    { name: 'Fullstack', applications: 55 },
    { name: 'Design', applications: 20 },
    { name: 'Marketing', applications: 15 },
];

const demographicsData = [
    { name: 'Bhopal', value: 400 },
    { name: 'Indore', value: 300 },
    { name: 'Jabalpur', value: 300 },
    { name: 'Other', value: 200 },
];

const COLORS = ['#0d9488', '#14b8a6', '#5eead4', '#ccfbf1'];

export default function AnalyticsPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Analytics & Insights</h1>
                    <p className="text-muted-foreground">
                        Track your profile performance and candidate engagement.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Last 7 Days</span>
                </div>
            </div>

            {/* Key Metrics Row */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Page Views</CardTitle>
                        <Eye className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12,345</div>
                        <p className="text-xs text-green-500 flex items-center gap-1">
                            +12% <ArrowUpRight className="h-3 w-3" />
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3,200</div>
                        <p className="text-xs text-green-500 flex items-center gap-1">
                            +4% <ArrowUpRight className="h-3 w-3" />
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">RFQ Clicks</CardTitle>
                        <MousePointerClick className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">450</div>
                        <p className="text-xs text-green-500 flex items-center gap-1">
                            +8% <ArrowUpRight className="h-3 w-3" />
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3.6%</div>
                        <p className="text-xs text-red-500 flex items-center gap-1">
                            -1% <ArrowUpRight className="h-3 w-3 rotate-180" />
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Profile Views Area Chart */}
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Profile Views Trend</CardTitle>
                        <CardDescription>Daily views over the past week</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={viewsData}>
                                    <defs>
                                        <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#0d9488" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#0d9488" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: "#18181b", borderColor: "#27272a", color: "#fff" }}
                                        itemStyle={{ color: "#fff" }}
                                        cursor={{ stroke: "#27272a" }}
                                    />
                                    <CartesianGrid strokeDasharray="3 3" className="stroke-zinc-200 dark:stroke-zinc-800" vertical={false} />
                                    <Area type="monotone" dataKey="views" stroke="#0d9488" fillOpacity={1} fill="url(#colorViews)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Demographics Pie Chart */}
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Visitor Demographics</CardTitle>
                        <CardDescription>Candidate distribution by city</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={demographicsData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {demographicsData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ backgroundColor: "#18181b", borderColor: "#27272a", color: "#fff", borderRadius: "8px" }}
                                        itemStyle={{ color: "#fff" }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex justify-center gap-4 text-xs text-muted-foreground mt-4">
                            {demographicsData.map((entry, index) => (
                                <div key={entry.name} className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                                    {entry.name}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Applications Bar Chart */}
                <Card className="col-span-7">
                    <CardHeader>
                        <CardTitle>Applications by Category</CardTitle>
                        <CardDescription>Which skillsets are attracting the most interest?</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={applicationData}>
                                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        cursor={{ fill: 'transparent' }}
                                        contentStyle={{ backgroundColor: "#18181b", borderColor: "#27272a", color: "#fff" }}
                                    />
                                    <Bar dataKey="applications" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
