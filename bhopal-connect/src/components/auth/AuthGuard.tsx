"use client";

import { useAuthStore } from "@/store/auth-store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        // Small delay to allow zustand persist to rehydrate
        // In a real app, you might check a 'hydrated' state
        const timeout = setTimeout(() => {
            if (!isAuthenticated) {
                router.push("/login");
            }
            setIsChecking(false);
        }, 100);

        return () => clearTimeout(timeout);
    }, [isAuthenticated, router]);

    if (isChecking) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    if (!isAuthenticated) return null;

    return <>{children}</>;
}
