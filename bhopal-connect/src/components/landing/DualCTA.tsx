import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Rocket } from "lucide-react";
import Link from "next/link";

export function DualCTA() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container max-w-screen-xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Business Card */}
                    <div className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 md:p-10 transition-all hover:shadow-lg hover:border-primary/20">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Briefcase className="w-32 h-32 text-primary" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full items-start">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary mb-6">
                                <Briefcase className="w-6 h-6" />
                            </div>

                            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                                For Local Businesses
                            </h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
                                Post RFQs, find talented interns, and solve business challenges with fresh perspectives from the city's top students.
                            </p>

                            <ul className="mb-8 space-y-3 text-sm text-foreground/80">
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    Post Requests for Quotation (RFQs)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    Recruit Interns & Fresher Talent
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    Showcase Your Company Profile
                                </li>
                            </ul>

                            <div className="mt-auto">
                                <Link href="/marketplace">
                                    <Button variant="default" className="w-full sm:w-auto gap-2">
                                        Access Marketplace <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Student Card */}
                    <div className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 md:p-10 transition-all hover:shadow-lg hover:border-accent/50">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Rocket className="w-32 h-32 text-accent" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full items-start">
                            <div className="p-3 rounded-lg bg-accent/10 text-accent mb-6">
                                <Rocket className="w-6 h-6" />
                            </div>

                            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                                For Students
                            </h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
                                Build a real-world portfolio, connect with local companies, and gain the skills that actually matter in the industry.
                            </p>

                            <ul className="mb-8 space-y-3 text-sm text-foreground/80">
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                    Work on Live Industry Projects
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                    Build a Verified Portfolio
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                    Direct Networking with Founders
                                </li>
                            </ul>

                            <div className="mt-auto">
                                <Link href="/students">
                                    <Button variant="secondary" className="w-full sm:w-auto gap-2">
                                        Join Student Hub <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
