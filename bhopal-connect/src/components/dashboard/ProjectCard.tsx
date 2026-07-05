"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, Eye, MessageSquare } from "lucide-react";

interface ProjectCardProps {
    project: {
        id: string;
        title: string;
        description: string;
        status: 'Active' | 'Draft' | 'Closed';
        proposals: number;
        views: number;
        postedAt: string;
        budget: string;
    };
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="hover:border-primary/50 transition-colors">
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-lg">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">Budget: {project.budget}</p>
                    </div>
                    <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                        {project.status}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="pb-3">
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {project.description}
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{project.proposals} Proposals</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{project.views} Views</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{project.postedAt}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="pt-0 flex justify-end gap-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button size="sm">View Proposals</Button>
            </CardFooter>
        </Card>
    );
}
