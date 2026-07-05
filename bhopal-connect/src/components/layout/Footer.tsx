import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-muted/30">
            <div className="container max-w-screen-xl py-12 px-4 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
                                <span className="text-white font-bold text-xs">B</span>
                            </div>
                            <span className="font-heading font-bold text-lg tracking-tight">
                                BhopalConnect
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Powering Bhopal’s business and talent ecosystem. Bridging the gap between local industry and academia.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-foreground">Platform</h4>
                        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="/marketplace" className="hover:text-primary transition-colors">
                                B2B Marketplace
                            </Link>
                            <Link href="/students" className="hover:text-primary transition-colors">
                                Student Hub
                            </Link>
                            <Link href="/dashboard" className="hover:text-primary transition-colors">
                                Dashboards
                            </Link>
                        </nav>
                    </div>

                    {/* Links Column 2 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-foreground">Resources</h4>
                        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="/about" className="hover:text-primary transition-colors">
                                About Us
                            </Link>
                            <Link href="/blog" className="hover:text-primary transition-colors">
                                Success Stories
                            </Link>
                            <Link href="/contact" className="hover:text-primary transition-colors">
                                Contact Support
                            </Link>
                        </nav>
                    </div>

                    {/* Links Column 3 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-foreground">Legal</h4>
                        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="/privacy" className="hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/docs" className="hover:text-primary transition-colors">
                                Documentation
                            </Link>
                        </nav>
                    </div>
                </div>

                <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} BhopalConnect. Built for EPICS.</p>
                </div>
            </div>
        </footer>
    );
}
