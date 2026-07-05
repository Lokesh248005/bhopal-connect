"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { useAuthStore } from "@/store/auth-store";
import {
    BarChart,
    Briefcase,
    Building2,
    FileText,
    GraduationCap,
    Home,
    LogOut,
    MapPin,
    Settings,
    User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function AppSidebar() {
    const pathname = usePathname();
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);

    if (!user) return null;

    const studentLinks = [
        { title: "Dashboard", url: "/dashboard", icon: Home },
        { title: "Learning Paths", url: "/students/learning-paths", icon: GraduationCap },
        { title: "My Portfolio", url: "/students/portfolio", icon: User },
        { title: "Applied Jobs", url: "/dashboard/applications", icon: Briefcase },
    ];

    const businessLinks = [
        { title: "Dashboard", url: "/dashboard", icon: Home },
        { title: "My Projects", url: "/dashboard/projects", icon: Briefcase },
        { title: "Talent Search", url: "/dashboard/talent", icon: User },
        { title: "Analytics", url: "/dashboard/analytics", icon: BarChart },
    ];

    const links = user.role === "business" ? businessLinks : studentLinks;

    return (
        <Sidebar>
            <SidebarHeader className="p-4 border-b border-border/50">
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        BC
                    </div>
                    <div className="font-bold text-lg tracking-tight">BhopalConnect</div>
                </Link>
            </SidebarHeader>

            <SidebarContent className="p-2">
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {links.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                                        <Link href={item.url}>
                                            <item.icon className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Shortcuts</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/marketplace">
                                        <Building2 className="w-4 h-4" />
                                        <span>Marketplace</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4 border-t border-border/50">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-3 cursor-pointer hover:bg-muted p-2 rounded-lg transition-colors">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={`https://avatar.vercel.sh/${user.email}`} />
                                <AvatarFallback>{user.avatar}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 text-sm overflow-hidden">
                                <div className="font-bold truncate">{user.name}</div>
                                <div className="text-xs text-muted-foreground truncate">{user.email}</div>
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                        <DropdownMenuItem>
                            <User className="w-4 h-4 mr-2" /> Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="w-4 h-4 mr-2" /> Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive focus:text-destructive" onClick={logout}>
                            <LogOut className="w-4 h-4 mr-2" /> Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
