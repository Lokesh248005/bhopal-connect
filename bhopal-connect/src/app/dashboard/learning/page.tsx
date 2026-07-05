"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

export default function LearningDashboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">My Learning</h1>
                <p className="text-muted-foreground">Continue where you left off.</p>
            </div>

            <div className="grid gap-6">
                {/* Active Course */}
                <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="h-32 w-48 bg-muted rounded-lg flex items-center justify-center shrink-0">
                                <PlayCircle className="w-12 h-12 text-muted-foreground" />
                            </div>
                            <div className="flex-1 w-full">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="text-xs font-bold text-primary uppercase tracking-wide mb-1">In Progress</div>
                                        <h3 className="text-xl font-bold">Full Stack Web Development - Bhopal Edition</h3>
                                    </div>
                                    <Button>Resume</Button>
                                </div>
                                <p className="text-muted-foreground text-sm mb-6">
                                    Module 3: Database Design with PostgreSQL
                                </p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>45% Complete</span>
                                        <span>12/28 Modules</span>
                                    </div>
                                    <Progress value={45} className="h-2" />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <h2 className="text-xl font-bold mt-4">Saved Paths</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="hover:bg-muted/50 transition-colors cursor-pointer group">
                        <CardContent className="p-6">
                            <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Digital Marketing for Local Business</h3>
                            <p className="text-sm text-muted-foreground mb-4">Learn SEO and Social Media strategies tailored for tier-2 cities.</p>
                            <Link href="/students/learning-paths" className="text-sm font-medium underline">View Path</Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
