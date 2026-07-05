"use client";

import { AlertTriangle, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container max-w-screen-xl px-4">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">The Disconnect</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Why is talent struggling to find work while businesses struggle to find talent?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Business Pain */}
                    <Card className="border-l-4 border-l-destructive/50 bg-red-50/10 dark:bg-red-900/10">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6 text-destructive">
                                <AlertTriangle className="w-8 h-8" />
                                <h3 className="text-2xl font-bold">For Businesses</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                                    <span className="text-lg">Fragmented supplier discovery (relying on word-of-mouth).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                                    <span className="text-lg">Digital agencies are too expensive for MSME budgets.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                                    <span className="text-lg">Fresh graduates lack industry-ready practical skills.</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Student Pain */}
                    <Card className="border-l-4 border-l-orange-500/50 bg-orange-50/10 dark:bg-orange-900/10">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6 text-orange-600 dark:text-orange-400">
                                <AlertTriangle className="w-8 h-8" />
                                <h3 className="text-2xl font-bold">For Students</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                                    <span className="text-lg">No clear roadmap to gain marketable skills.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                                    <span className="text-lg">Huge gap between classroom theory and industry practice.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                                    <span className="text-lg">Zero exposure to real client constraints and deadlines.</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-2xl font-medium italic text-muted-foreground">
                        &ldquo;These are not separate problems. They&apos;re two sides of the same coin.&rdquo;
                    </p>
                </div>
            </div>
        </section>
    );
}
