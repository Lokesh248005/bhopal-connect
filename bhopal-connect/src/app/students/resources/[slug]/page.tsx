import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { learningPaths } from "@/lib/student-data";
import { ArrowLeft, CheckCircle, PlayCircle, FileText } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        slug: string;
    };
}

export default async function ResourcePage({ params }: PageProps) {
    const { slug } = await params;
    const path = learningPaths.find(p => p.slug === slug);

    if (!path) return notFound();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="border-b border-border/40">
                <div className="container max-w-screen-xl py-4 px-4">
                    <Link href="/students/learning-paths" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Paths
                    </Link>
                </div>
            </div>

            <div className="container max-w-screen-xl px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h1 className="font-heading text-3xl font-bold mb-2">{path.title}</h1>
                            <p className="text-muted-foreground">{path.description}</p>
                        </div>

                        {/* Video Player Placeholder */}
                        <div className="aspect-video bg-black rounded-xl flex items-center justify-center relative group cursor-pointer overflow-hidden">
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform" />
                        </div>

                        <div className="prose dark:prose-invert max-w-none">
                            <h3>About this module</h3>
                            <p>
                                This comprehensive module covers the essential skills required for {path.industry}.
                                You will learn through a mix of video lectures, hands-on assignments, and real-world case studies from Bhopal businesses.
                            </p>
                            <h3>What you will learn</h3>
                            <ul>
                                {path.tags.map(tag => (
                                    <li key={tag}>Mastering {tag} fundamentals</li>
                                ))}
                                <li>Industry best practices</li>
                                <li>Project deployment strategies</li>
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar Curriculum */}
                    <div className="space-y-6">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-bold mb-4">Course Progress</h3>
                                <div className="space-y-2 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span>{path.progress || 0}% Complete</span>
                                        <span>{path.modules} Modules</span>
                                    </div>
                                    <Progress value={path.progress || 0} className="h-2" />
                                </div>

                                <Separator className="mb-6" />

                                <div className="space-y-4">
                                    <h4 className="text-sm font-bold uppercase text-muted-foreground tracking-wider">Syllabus</h4>
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors group">
                                            <div className={`mt-0.5 h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0 ${i === 1 ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/30"}`}>
                                                {i === 1 && <CheckCircle className="w-3 h-3" />}
                                            </div>
                                            <div>
                                                <div className={`text-sm font-medium ${i === 1 ? "text-primary" : "text-foreground"}`}>Module {i}: Fundamentals</div>
                                                <div className="text-xs text-muted-foreground flex items-center gap-1">
                                                    <PlayCircle className="w-3 h-3" /> 45 mins
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Button className="w-full mt-6">Continue Learning</Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-bold mb-4">Resources</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm text-primary hover:underline cursor-pointer">
                                        <FileText className="w-4 h-4" /> Download Cheatsheet
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-primary hover:underline cursor-pointer">
                                        <FileText className="w-4 h-4" /> Project Files
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
