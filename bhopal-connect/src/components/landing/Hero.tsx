"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Building2, GraduationCap, Sparkles } from "lucide-react";
import Link from "next/link";
import { FloatingElement } from "@/components/landing/FloatingElement"; // We'll create this next

export function HeroSection() {
    return (
        <AuroraBackground className="min-h-screen">
            <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm"
                >
                    <Sparkles className="h-4 w-4" />
                    <span className="uppercase tracking-widest text-xs font-bold">The Future of Bhopal</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-heading text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground mb-6 drop-shadow-2xl px-4"
                >
                    Bhopal<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-blue-400 animate-gradient-x drop-shadow-sm pb-2">Connect</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed font-normal px-4 drop-shadow-md"
                >
                    The ultimate ecosystem where <span className="font-bold text-primary">Visionary Businesses</span> meet <span className="font-bold text-primary">Ambitious Talent</span>. Built on the EPICS framework.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <Link href="/signup?role=business">
                        <Button size="xl" className="h-16 px-10 text-xl rounded-full shadow-[0_0_40px_-10px_rgba(var(--primary-rgb),0.5)] hover:shadow-[0_0_60px_-15px_rgba(var(--primary-rgb),0.6)] transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-blue-600 border-none text-white">
                            <Building2 className="mr-3 h-6 w-6" />
                            Hire Talent
                        </Button>
                    </Link>
                    <Link href="/signup?role=student">
                        <Button size="xl" variant="outline" className="h-16 px-10 text-xl rounded-full glass hover:bg-white/20 transition-all duration-300 hover:scale-105 border-2">
                            <GraduationCap className="mr-3 h-6 w-6" />
                            Find Projects
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Floating 3D Elements (Visual Flair) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* We will create a FloatingElement component for cleaner code */}
                <FloatingElement className="top-[15%] left-[10%] opacity-40 md:opacity-100" delay={0}>
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center rotate-12">
                        <Building2 className="w-10 h-10 text-blue-500" />
                    </div>
                </FloatingElement>

                <FloatingElement className="bottom-[20%] right-[10%] opacity-40 md:opacity-100" delay={1}>
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-500/20 to-green-500/20 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center -rotate-12">
                        <GraduationCap className="w-12 h-12 text-teal-500" />
                    </div>
                </FloatingElement>
            </div>
        </AuroraBackground>
    );
}
