import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { studentProfile } from "@/lib/student-data";
import { Download, Github, Linkedin, MapPin, Share2 } from "lucide-react";

export default function PortfolioPage() {
    return (
        <div className="container max-w-screen-xl px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Sidebar Profile */}
                <aside className="space-y-6">
                    <Card className="text-center overflow-hidden">
                        <div className="h-32 bg-primary/10"></div>
                        <div className="px-6 relative">
                            <div className="w-24 h-24 rounded-full bg-background border-4 border-background mx-auto -mt-12 flex items-center justify-center text-3xl font-bold text-primary shadow-sm">
                                {studentProfile.name.charAt(0)}
                            </div>
                        </div>
                        <CardContent className="pt-4 pb-8">
                            <h1 className="font-heading text-2xl font-bold">{studentProfile.name}</h1>
                            <p className="text-muted-foreground">{studentProfile.major}</p>
                            <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mt-1">
                                <MapPin className="w-3 h-3" /> {studentProfile.college}
                            </div>

                            <div className="flex flex-wrap justify-center gap-2 mt-6">
                                <Button size="sm" variant="outline" className="gap-2">
                                    <Linkedin className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline" className="gap-2">
                                    <Github className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline" className="gap-2">
                                    <Share2 className="w-4 h-4" />
                                </Button>
                            </div>

                            <Button className="w-full mt-6 gap-2">
                                <Download className="w-4 h-4" /> Download Resume
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Skills</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {studentProfile.skills.map(skill => (
                                <Badge key={skill} variant="secondary">{skill}</Badge>
                            ))}
                        </CardContent>
                    </Card>
                </aside>

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <section>
                        <h2 className="font-heading text-2xl font-bold mb-4">About Me</h2>
                        <Card>
                            <CardContent className="p-6 text-muted-foreground leading-relaxed">
                                {studentProfile.about}
                            </CardContent>
                        </Card>
                    </section>

                    <section>
                        <h2 className="font-heading text-2xl font-bold mb-4">EPICS Projects</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {studentProfile.projects.map((project, i) => (
                                <Card key={i} className="hover:border-primary/50 transition-colors">
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-lg">{project.title}</h3>
                                            <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                                                {project.status}
                                            </Badge>
                                        </div>
                                        <p className="text-muted-foreground mb-4">{project.description}</p>
                                        <div className="text-sm text-muted-foreground flex gap-4">
                                            <span>Role: <span className="font-medium text-foreground">{project.role}</span></span>
                                            <span>Date: <span className="font-medium text-foreground">{project.date}</span></span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading text-2xl font-bold mb-4">Certifications</h2>
                        <Card>
                            <CardContent className="p-0">
                                {studentProfile.certifications.map((cert, i) => (
                                    <div key={i} className={`p-6 flex justify-between items-center ${i !== 0 ? "border-t border-border" : ""}`}>
                                        <div>
                                            <h4 className="font-bold">{cert.name}</h4>
                                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                                        </div>
                                        <span className="text-sm text-muted-foreground">{cert.date}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </div>
        </div>
    );
}
