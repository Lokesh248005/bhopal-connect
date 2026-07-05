import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SkillCardProps {
    title: string;
    count: number;
    icon: React.ElementType;
    className?: string;
}

export function SkillCard({ title, count, icon: Icon, className }: SkillCardProps) {
    return (
        <Link href="/students/learning-paths" className="block h-full">
            <div className={`p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all h-full flex flex-col items-start ${className}`}>
                <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{count} Courses available</p>

                <div className="mt-auto flex items-center text-sm font-medium text-primary group">
                    Explore <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
}
