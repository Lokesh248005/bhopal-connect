import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                        <span className="text-white font-bold text-lg">B</span>
                    </div>
                    <span className="font-heading font-bold text-xl tracking-tight text-foreground">
                        BhopalConnect
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="/marketplace" className="hover:text-foreground transition-colors">
                        For Business
                    </Link>
                    <Link href="/students" className="hover:text-foreground transition-colors">
                        For Students
                    </Link>
                    <Link href="/about" className="hover:text-foreground transition-colors">
                        About
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link href="/login" className="hidden sm:block">
                        <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                            Log in
                        </Button>
                    </Link>
                    <Link href="/signup">
                        <Button className="font-semibold px-6">Get Started</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
