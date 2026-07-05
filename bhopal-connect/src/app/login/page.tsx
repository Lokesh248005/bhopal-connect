"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuthStore, UserRole } from "@/store/auth-store";
import { Building2, GraduationCap, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner"; // Assuming sonner is installed, if not will use alert for now or install it

export default function LoginPage() {
    const router = useRouter();
    const login = useAuthStore((state) => state.login);
    const isLoading = useAuthStore((state) => state.isLoading);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (role: UserRole) => {
        if (!email || !password) {
            // Simple validation
            alert("Please enter email and password");
            return;
        }

        try {
            await login(email, role);
            router.push("/dashboard");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold font-heading">Welcome Back</CardTitle>
                    <CardDescription>
                        Login to access your dashboard
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="student" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6">
                            <TabsTrigger value="student">
                                <GraduationCap className="w-4 h-4 mr-2" /> Student
                            </TabsTrigger>
                            <TabsTrigger value="business">
                                <Building2 className="w-4 h-4 mr-2" /> Business
                            </TabsTrigger>
                        </TabsList>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <TabsContent value="student">
                            <Button
                                className="w-full mt-6"
                                onClick={() => handleLogin('student')}
                                disabled={isLoading}
                            >
                                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Login as Student
                            </Button>
                        </TabsContent>

                        <TabsContent value="business">
                            <Button
                                className="w-full mt-6"
                                onClick={() => handleLogin('business')}
                                disabled={isLoading}
                            >
                                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Login as Business
                            </Button>
                        </TabsContent>
                    </Tabs>
                </CardContent>
                <CardFooter className="flex justify-center flex-col gap-4">
                    <div className="text-sm text-muted-foreground">
                        Don&apos;t have an account? <Link href="/signup" className="text-primary hover:underline">Sign up</Link>
                    </div>
                    <div className="text-xs text-muted-foreground text-center px-8">
                        Demo Mode: Use any email/password.
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
