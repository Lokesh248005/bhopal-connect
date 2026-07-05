import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Users } from "lucide-react";

export function Vision() {
    return (
        <section className="py-20 bg-background">
            <div className="container max-w-screen-xl px-4">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/20 text-primary bg-primary/5">
                        Our Vision
                    </Badge>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Bridging the Gap Between <span className="text-primary">Ambition</span> and <span className="text-accent text-teal-600">Opportunity</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        BhopalConnect isn't just a job board. It's a city-wide initiative to synchronize the raw potential of our students with the localized needs of our growing business ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="border-border/50 shadow-sm hover:shadow-md transition-all">
                        <CardContent className="pt-6">
                            <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="font-heading text-xl font-bold mb-3">Mission</h3>
                            <p className="text-muted-foreground">
                                To empower 10,000+ students with real-world industry experience while helping 500+ local MSMEs scale through digital innovation.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border/50 shadow-sm hover:shadow-md transition-all">
                        <CardContent className="pt-6">
                            <div className="w-12 h-12 rounded-lg bg-green-50 text-green-600 flex items-center justify-center mb-4">
                                <Lightbulb className="w-6 h-6" />
                            </div>
                            <h3 className="font-heading text-xl font-bold mb-3">Innovation</h3>
                            <p className="text-muted-foreground">
                                Fostering a culture where academic theory meets practical application, solving real civic and commercial challenges.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border/50 shadow-sm hover:shadow-md transition-all">
                        <CardContent className="pt-6">
                            <div className="w-12 h-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="font-heading text-xl font-bold mb-3">Community</h3>
                            <p className="text-muted-foreground">
                                Building a self-sustaining ecosystem where seniors mentor juniors, and businesses invest in future talent.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
