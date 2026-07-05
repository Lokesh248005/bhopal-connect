import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Business } from "@/lib/mock-data";
import { Briefcase, CheckCircle2, MapPin, Star } from "lucide-react";
import Link from "next/link";

interface BusinessCardProps {
    business: Business;
}

export function BusinessCard({ business }: BusinessCardProps) {
    return (
        <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-start gap-4 pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                    {business.logo}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg truncate leading-none">
                            {business.name}
                        </h3>
                        {business.verified && (
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        )}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span className="truncate">{business.location}</span>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="flex-1 pb-4">
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 h-10">
                    {business.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="font-normal text-xs">
                        {business.industry}
                    </Badge>
                    <Badge variant="outline" className="font-normal text-xs">
                        {business.size} employees
                    </Badge>
                </div>
            </CardContent>

            <CardFooter className="pt-0 flex items-center justify-between border-t border-border/40 p-4 bg-muted/20">
                <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-sm">{business.rating}</span>
                    <span className="text-xs text-muted-foreground">({business.reviewCount})</span>
                </div>

                <Link href={`/marketplace/${business.id}`}>
                    <Button size="sm" variant="outline">View Profile</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
