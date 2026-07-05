import { Button } from "@/components/ui/button";
import { CheckCircle2, UserCheck, Search, Handshake } from "lucide-react";

export function Features() {
    return (
        <section className="py-24 bg-background">
            <div className="container max-w-screen-xl px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-6">
                        Connecting Academia to Industry
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A seamless workflow designed to help businesses grow and students learn through real-world application.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Businesses */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                            For Businesses
                        </div>
                        <h3 className="font-heading text-3xl font-bold">
                            Streamline your hiring and projects.
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Search className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Post RFQs & Projects</h4>
                                    <p className="text-muted-foreground mt-1">Submit requirements for internships, freelance gigs, or full-time roles.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <UserCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Verify Applicants</h4>
                                    <p className="text-muted-foreground mt-1">Access verified student portfolios with skills vetted by faculty.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column: Students */}
                    <div className="space-y-8 relative">
                        <div className="absolute top-10 -right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10 mix-blend-multiply" />

                        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent-foreground">
                            For Students
                        </div>
                        <h3 className="font-heading text-3xl font-bold">
                            Launch your career before graduation.
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent-foreground">
                                    <Handshake className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Connect with Founders</h4>
                                    <p className="text-muted-foreground mt-1">Directly interact with local business owners and decision makers.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent-foreground">
                                    <CheckCircle2 className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Earn Real Experience</h4>
                                    <p className="text-muted-foreground mt-1">Work on live projects that count towards your EPICS credits.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
