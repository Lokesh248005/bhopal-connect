"use client";

import { AuthGuard } from "@/components/auth/AuthGuard";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthGuard>
            <SidebarProvider>
                <div className="flex min-h-screen w-full bg-background">
                    <AppSidebar />
                    <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6 lg:h-[60px]">
                            <SidebarTrigger />
                            <div className="w-full flex-1">
                                {/* Breadcrumbs or Header Title could go here */}
                                <span className="font-semibold">Dashboard</span>
                            </div>
                        </header>
                        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                            {children}
                        </div>
                    </main>
                </div>
            </SidebarProvider>
        </AuthGuard>
    );
}
