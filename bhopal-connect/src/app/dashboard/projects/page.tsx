"use client";

import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { useState } from "react";

const mockProjects = [
    {
        id: "1",
        title: "E-commerce Website Redesign",
        description: "Looking for a team of students to modernize our existing Shopify store with a custom theme and improved mobile responsiveness.",
        status: "Active" as const,
        proposals: 5,
        views: 124,
        postedAt: "2 days ago",
        budget: "₹25,000"
    },
    {
        id: "2",
        title: "Inventory Management System",
        description: "Need a custom dashboard to track stock levels across 3 warehouses. Preference for React/Node stack.",
        status: "Active" as const,
        proposals: 2,
        views: 89,
        postedAt: "5 days ago",
        budget: "₹40,000"
    },
    {
        id: "3",
        title: "Social Media Marketing Campaign",
        description: "Short-term project to design creatives for our Diwali sale.",
        status: "Closed" as const,
        proposals: 12,
        views: 350,
        postedAt: "1 month ago",
        budget: "₹10,000"
    }
];

export default function ProjectsPage() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>
                    <p className="text-muted-foreground">Manage your posted RFQs and track active developments.</p>
                </div>

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button className="gap-2">
                            <Plus className="w-4 h-4" /> Post New Project
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                            <DialogTitle>Post a Requirement</DialogTitle>
                            <DialogDescription>
                                Describe your project needs to attract the best student talent in Bhopal.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="title">Project Title</Label>
                                <Input id="title" placeholder="e.g. Mobile App for Delivery" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="budget">Estimated Budget</Label>
                                <Input id="budget" placeholder="e.g. ₹20,000 - ₹50,000" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="desc">Description</Label>
                                <Textarea id="desc" placeholder="Detail your requirements..." className="h-24" />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                            <Button onClick={() => setIsDialogOpen(false)}>Post Project</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
