import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Code, FileText, Shield } from "lucide-react";

export default function DocsPage() {
    return (
        <div className="container max-w-screen-xl px-4 py-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold font-heading mb-4">Documentation</h1>
                <p className="text-muted-foreground text-lg">
                    Everything you need to know about the BhopalConnect platform, EPICS guidelines, and technical implementation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Book className="w-5 h-5 text-primary" />
                            User Guides
                        </CardTitle>
                        <CardDescription>For Businesses and Students</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                            Step-by-step tutorials on how to create profiles, post RFQs, submit proposals, and manage projects.
                        </p>
                        <Button variant="outline" size="sm">Read Guides</Button>
                    </CardContent>
                </Card>

                <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="w-5 h-5 text-primary" />
                            EPICS Framework
                        </CardTitle>
                        <CardDescription>Academic & Project Guidelines</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                            Understand the Engineering Projects in Community Service (EPICS) model, grading criteria, and mentorship structure.
                        </p>
                        <Button variant="outline" size="sm">View Framework</Button>
                    </CardContent>
                </Card>

                <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Code className="w-5 h-5 text-primary" />
                            Developer API
                        </CardTitle>
                        <CardDescription>For Integrations</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                            API reference for integrating external LMS, verifying credentials, and accessing public marketplace data.
                        </p>
                        <Button variant="outline" size="sm">API Docs</Button>
                    </CardContent>
                </Card>

                <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-primary" />
                            Trust & Safety
                        </CardTitle>
                        <CardDescription>Policies & Moderation</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                            Learn how we verify businesses, protect student data, and handle dispute resolutions on the platform.
                        </p>
                        <Button variant="outline" size="sm">Read Policies</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
