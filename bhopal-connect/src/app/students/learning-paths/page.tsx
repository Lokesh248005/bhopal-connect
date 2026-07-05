import { PathCard } from "@/components/students/PathCard";
import { Badge } from "@/components/ui/badge";
import { learningPaths } from "@/lib/student-data";

export default function LearningPathsPage() {
    return (
        <div className="container max-w-screen-xl px-4 py-12">
            <div className="mb-12">
                <h1 className="font-heading text-4xl font-bold mb-4">Learning Paths</h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    Curated curriculums designed in partnership with local industry leaders.
                    Complete these paths to earn verified badges and internship opportunities.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Filters Sidebar (Mock) */}
                <aside className="space-y-8 h-fit lg:sticky lg:top-24">
                    <div>
                        <h3 className="font-bold mb-4">Level</h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="cursor-pointer hover:bg-muted">Beginner</Badge>
                            <Badge variant="outline" className="cursor-pointer hover:bg-muted">Intermediate</Badge>
                            <Badge variant="outline" className="cursor-pointer hover:bg-muted">Advanced</Badge>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Industry</h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="cursor-pointer hover:bg-muted">IT Services</Badge>
                            <Badge variant="outline" className="cursor-pointer hover:bg-muted">Retail</Badge>
                            <Badge variant="outline" className="cursor-pointer hover:bg-muted">Manufacturing</Badge>
                        </div>
                    </div>
                </aside>

                {/* Grid */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {learningPaths.map(path => (
                        <PathCard key={path.id} path={path} />
                    ))}
                    {/* Duplicate for visual fullness */}
                    {learningPaths.map(path => (
                        <PathCard key={`dup-${path.id}`} path={path} />
                    ))}
                </div>
            </div>
        </div>
    );
}
