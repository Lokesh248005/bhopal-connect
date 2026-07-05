"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { fileURLToPath } from "url";

const applications = [
    {
        id: 1,
        company: "TechNova Solutions",
        role: "Frontend Intern",
        date: "2023-10-25",
        status: "Interview",
        type: "Internship"
    },
    {
        id: 2,
        company: "Bhopal Textiles",
        role: "Inventory System Project",
        date: "2023-10-20",
        status: "Pending",
        type: "Project (Paid)"
    },
    {
        id: 3,
        company: "GreenCity Ngo",
        role: "Social Media Volunteer",
        date: "2023-10-15",
        status: "Rejected",
        type: "Volunteer"
    }
];

export default function ApplicationsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">My Applications</h1>
                <p className="text-muted-foreground">Track the status of your internship and project applications.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Application History</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Company</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Applied Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {applications.map((app) => (
                                <TableRow key={app.id}>
                                    <TableCell className="font-medium">{app.company}</TableCell>
                                    <TableCell>{app.role}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{app.type}</Badge>
                                    </TableCell>
                                    <TableCell>{app.date}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={app.status === 'Interview' ? 'default' : app.status === 'Rejected' ? 'destructive' : 'secondary'}
                                        >
                                            {app.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm">Details</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
