import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Business } from "@/lib/mock-data";
import { CheckCircle2, Globe, MapPin, Share2 } from "lucide-react";

interface CompanyHeaderProps {
    business: Business;
}

export function CompanyHeader({ business }: CompanyHeaderProps) {
    return (
        <div className="bg-background border-b border-border/40 pb-8 mb-8">
            <div className="container max-w-screen-xl px-4 pt-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Logo box */}
                    <div className="h-24 w-24 md:h-32 md:w-32 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-3xl md:text-4xl shrink-0">
                        {business.logo}
                    </div>

                    <div className="flex-1 min-w-0 space-y-4">
                        <div>
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">{business.name}</h1>
                                {business.verified && (
                                    <Badge variant="secondary" className="gap-1 text-primary bg-primary/10 hover:bg-primary/20">
                                        <CheckCircle2 className="h-3.5 w-3.5" /> Verified
                                    </Badge>
                                )}
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                                <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    {business.location}
                                </div>
                                <div className="flex items-center gap-1">
                                    {business.industry}
                                </div>
                                <div className="flex items-center gap-1">
                                    {business.size} Employees
                                </div>
                            </div>
                        </div>

                        <p className="text-muted-foreground max-w-2xl leading-relaxed">
                            {business.description}
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {business.services.map((service, i) => (
                                <Badge key={i} variant="outline" className="px-3 py-1 bg-muted/30">
                                    {service}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 w-full md:w-auto">
                        <Button size="lg" className="w-full md:w-auto">Request a Quote</Button>
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex-1 gap-2">
                                <Globe className="h-4 w-4" /> Website
                            </Button>
                            <Button variant="outline" size="icon">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
