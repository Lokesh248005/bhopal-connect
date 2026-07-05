import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LearningPath } from "@/lib/student-data";
import { BookOpen, Clock, BarChart } from "lucide-react";
import Link from "next/link";

interface PathCardProps {
    path: LearningPath;
    compact?: boolean;
}

export function PathCard({ path, compact = false }: PathCardProps) {
    return (
        <Card className="flex flex-col h-full hover:shadow-md transition-all group overflow-hidden border-border/60">
            <div className={`h-32 w-full ${path.image} opacity-80 group-hover:opacity-100 transition-opacity`} />

            <CardHeader className="pb-3 relative">
                <Badge className="absolute -top-3 right-4 shadow-sm" variant="secondary">
                    {path.level}
                </Badge>
                <h3 className="font-heading font-bold text-xl leading-snug line-clamp-2">
                    {path.title}
                </h3>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {path.industry}
                </div>
            </CardHeader>

            <CardContent className="flex-1 pb-4">
                {!compact && (
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {path.description}
                    </p>
                )}

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {path.duration}
                    </div>
                    <div className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" /> {path.modules} Modules
                    </div>
                </div>

                {path.progress !== undefined && path.progress > 0 && (
                    <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-medium">
                            <span>Progress</span>
                            <span>{path.progress}%</span>
                        </div>
                        <Progress value={path.progress} className="h-2" />
                    </div>
                )}
            </CardContent>

            <CardFooter className="pt-0">
                <Link href={`/students/resources/${path.slug}`} className="w-full">
                    <Button className="w-full" variant={path.progress && path.progress > 0 ? "secondary" : "default"}>
                        {path.progress && path.progress > 0 ? "Continue Learning" : "Start Path"}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
