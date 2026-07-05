import { CompanyHeader } from "@/components/marketplace/profile/CompanyHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { businesses } from "@/lib/mock-data";
import { ArrowLeft, Star, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        id: string;
    };
}

// Ensure params are awaited before use
export default async function BusinessProfilePage({ params }: PageProps) {
    const { id } = await params; // Await params here
    const business = businesses.find((b) => b.id === id);

    if (!business) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Back Nav */}
            <div className="border-b border-border/40">
                <div className="container max-w-screen-xl py-4 px-4">
                    <Link href="/marketplace" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Marketplace
                    </Link>
                </div>
            </div>

            <CompanyHeader business={business} />

            <div className="container max-w-screen-xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="w-full justify-start h-12 bg-transparent border-b border-border rounded-none p-0 space-x-6">
                                <TabsTrigger
                                    value="overview"
                                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent px-0 pb-3"
                                >
                                    Overview
                                </TabsTrigger>
                                <TabsTrigger
                                    value="services"
                                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent px-0 pb-3"
                                >
                                    Services & Capabilities
                                </TabsTrigger>
                                <TabsTrigger
                                    value="portfolio"
                                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent px-0 pb-3"
                                >
                                    Portfolio
                                </TabsTrigger>
                            </TabsList>

                            <div className="mt-8 space-y-8">
                                <TabsContent value="overview" className="space-y-8">
                                    <section>
                                        <h3 className="text-xl font-bold mb-4 font-heading">About Us</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {business.description} Founded with a mission to bridge local expertise with modern technology. We have served over 50+ clients in the Bhopal region and continue to expand our footprint in Central India.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold mb-4 font-heading">Certifications</h3>
                                        <div className="flex gap-4">
                                            <div className="border border-border p-4 rounded-lg bg-muted/10 text-center min-w-[120px]">
                                                <div className="font-bold text-foreground">ISO 9001</div>
                                                <div className="text-xs text-muted-foreground">Quality</div>
                                            </div>
                                            <div className="border border-border p-4 rounded-lg bg-muted/10 text-center min-w-[120px]">
                                                <div className="font-bold text-foreground">MSME</div>
                                                <div className="text-xs text-muted-foreground">Certified</div>
                                            </div>
                                        </div>
                                    </section>
                                </TabsContent>

                                <TabsContent value="services" className="space-y-6">
                                    <h3 className="text-xl font-bold mb-4 font-heading">Our Expertise</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {business.services.map((service, i) => (
                                            <Card key={i}>
                                                <CardContent className="p-6">
                                                    <h4 className="font-bold mb-2">{service}</h4>
                                                    <p className="text-sm text-muted-foreground">Professional delivery with high standards and timely execution.</p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </TabsContent>

                                <TabsContent value="portfolio" className="space-y-6">
                                    <h3 className="text-xl font-bold mb-4 font-heading">Recent Projects</h3>
                                    {business.projects.length > 0 ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {business.projects.map((project, i) => (
                                                <Card key={i} className="overflow-hidden">
                                                    <div className="h-40 bg-muted/50 flex items-center justify-center text-muted-foreground text-sm uppercase tracking-wide font-medium">
                                                        Project Image
                                                    </div>
                                                    <CardContent className="p-6">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <h4 className="font-bold text-lg">{project.title}</h4>
                                                            <Badge variant="outline">{project.date}</Badge>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground">{project.description}</p>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="p-8 text-center border border-dashed rounded-xl text-muted-foreground">
                                            No public projects listed yet.
                                        </div>
                                    )}
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-6">
                        <Card>
                            <CardContent className="p-6 space-y-6">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold">Rating & Reviews</h3>
                                        <div className="flex items-center gap-1 font-bold text-lg text-foreground">
                                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /> {business.rating}
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">Based on {business.reviewCount} verified reviews</p>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3 text-sm">
                                            <span className="w-8">5★</span>
                                            <Progress value={80} className="h-2" />
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <span className="w-8">4★</span>
                                            <Progress value={15} className="h-2" />
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <span className="w-8">3★</span>
                                            <Progress value={5} className="h-2" />
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-4">
                                    <h4 className="font-bold text-sm uppercase text-muted-foreground tracking-wider">Contact Person</h4>
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold">JD</div>
                                        <div>
                                            <div className="font-medium">John Doe</div>
                                            <div className="text-xs text-muted-foreground">Business Manager</div>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="w-full h-9">Send Message</Button>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                            <h4 className="font-bold mb-2 flex items-center gap-2">
                                <ThumbsUp className="h-4 w-4 text-primary" /> Why work with us?
                            </h4>
                            <ul className="text-sm space-y-2 text-muted-foreground">
                                <li>✓ Local expertise in Bhopal market</li>
                                <li>✓ Verified credentials & GST</li>
                                <li>✓ 24/7 Support available</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
