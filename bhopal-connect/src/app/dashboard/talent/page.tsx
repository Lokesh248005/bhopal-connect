"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Briefcase } from "lucide-react";

// Mock student data
const students = [
    {
        id: 1,
        name: "Rahul Sharma",
        role: "Full Stack Developer",
        college: "MANIT Bhopal",
        skills: ["React", "Node.js", "PostgreSQL"],
        available: true,
        initials: "RS"
    },
    {
        id: 2,
        name: "Priya Patel",
        role: "UI/UX Designer",
        college: "RGPV",
        skills: ["Figma", "Adobe XD", "Illustration"],
        available: true,
        initials: "PP"
    },
    {
        id: 3,
        name: "Amit Verma",
        role: "Digital Marketer",
        college: "LNCT",
        skills: ["SEO", "Content Writing", "Social Media"],
        available: false,
        initials: "AV"
    },
    {
        id: 4,
        name: "Sneha Gupta",
        role: "Data Analyst",
        college: "BSSS",
        skills: ["Python", "SQL", "Tableau"],
        available: true,
        initials: "SG"
    }
];

export default function TalentSearchPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Find Talent</h1>
                <p className="text-muted-foreground">Discover skilled students ready for internships and freelance projects.</p>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 p-4 bg-muted/40 rounded-xl border border-border/50">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search by name or skill..." className="pl-9 bg-background" />
                </div>
                <Select>
                    <SelectTrigger className="w-[180px] bg-background">
                        <SelectValue placeholder="College" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="manit">MANIT</SelectItem>
                        <SelectItem value="rgpv">RGPV</SelectItem>
                        <SelectItem value="lnct">LNCT</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px] bg-background">
                        <SelectValue placeholder="Availability" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Any</SelectItem>
                        <SelectItem value="available">Available Now</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {students.map(student => (
                    <Card key={student.id} className="overflow-hidden hover:border-primary/50 transition-colors">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
                                    <AvatarImage src={`https://avatar.vercel.sh/${student.name}`} />
                                    <AvatarFallback>{student.initials}</AvatarFallback>
                                </Avatar>
                                {student.available && (
                                    <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                                        Available
                                    </Badge>
                                )}
                            </div>

                            <div className="mb-4">
                                <h3 className="font-bold text-lg">{student.name}</h3>
                                <p className="text-sm font-medium text-primary">{student.role}</p>
                                <div className="flex items-center text-xs text-muted-foreground mt-1">
                                    <MapPin className="w-3 h-3 mr-1" /> {student.college}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {student.skills.map(skill => (
                                    <Badge key={skill} variant="secondary" className="text-xs">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <Button variant="outline" className="w-full">View Profile</Button>
                                <Button className="w-full">Contact</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
