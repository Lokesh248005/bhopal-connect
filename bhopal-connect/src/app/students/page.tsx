"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { learningPaths } from "@/lib/student-data";
import { motion } from "framer-motion";
import {
    BookOpen,
    Briefcase,
    Code2,
    GraduationCap,
    Layers,
    Rocket,
    Trophy,
    UserCheck,
    Zap
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function StudentsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950">
            {/* Hero Section with Aurora */}
            <AuroraBackground className="min-h-[80vh]">
                <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-600 dark:text-teal-400 backdrop-blur-sm"
                    >
                        <UserCheck className="h-4 w-4" />
                        <span className="uppercase tracking-widest text-xs font-bold">Student Launchpad</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-heading text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground mb-6 drop-shadow-2xl"
                    >
                        Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 animate-gradient-x">Career.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-3xl text-muted-foreground/80 max-w-4xl mx-auto mb-12 leading-relaxed font-light px-4"
                    >
                        Stop waiting for campus placements. <br className="hidden md:block" />
                        Build a <span className="text-foreground font-semibold">Real Portfolio</span> with <span className="text-foreground font-semibold">Live Projects</span> from Bhopal&apos;s best businesses.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <Link href="/students/learning-paths">
                            <Button size="xl" className="h-16 px-10 text-xl rounded-full shadow-2xl shadow-teal-500/20 hover:shadow-teal-500/40 bg-gradient-to-r from-teal-600 to-emerald-600 border-none text-white hover:scale-105 transition-transform">
                                <Rocket className="mr-3 h-6 w-6" />
                                Start Learning
                            </Button>
                        </Link>
                        <Link href="/students/portfolio">
                            <Button size="xl" variant="outline" className="h-16 px-10 text-xl rounded-full glass hover:bg-white/20 border-teal-200 dark:border-teal-800 text-foreground">
                                <Briefcase className="mr-3 h-6 w-6" />
                                View Opportunities
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </AuroraBackground>

            {/* Bento Grid Features */}
            <section className="py-24 px-4 container max-w-screen-xl relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Why Join BhopalConnect?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We bridge the gap between academic theory and industry reality.
                    </p>
                </div>

                <BentoGrid>
                    {features.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </section>

            {/* Live Projects Teaser */}
            <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                <div className="container max-w-screen-xl px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-8">Proof of Work &gt; Degrees</h2>
                    <p className="text-xl text-zinc-400 mb-12 max-w-3xl mx-auto">
                        In the new economy, nobody cares what you studied. They care what you can build.
                        We give you the canvas.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {learningPaths.slice(0, 3).map((path, idx) => (
                            <div key={idx} className="group relative bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 rounded-3xl p-8 transition-all hover:-translate-y-2">
                                <div className="absolute top-6 right-6 p-3 bg-zinc-950 rounded-2xl border border-zinc-700">
                                    <Layers className="w-6 h-6 text-teal-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 pr-12">{path.title}</h3>
                                <p className="text-zinc-400 mb-6 line-clamp-2">{path.description}</p>
                                <div className="flex items-center gap-2 text-sm font-bold text-teal-400">
                                    {path.skills.slice(0, 3).join(" • ")}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16">
                        <Link href="/students/learning-paths">
                            <Button size="lg" variant="secondary" className="rounded-full px-8">
                                Explore All Paths <span className="ml-2">→</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Improved Skeletons with meaningful visual representation

const SkeletonOne = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center p-4">
        <div className="w-full h-full bg-white dark:bg-black rounded-lg border border-neutral-200 dark:border-neutral-800 relative overflow-hidden flex flex-col p-3">
            <div className="h-2 w-1/3 bg-neutral-200 dark:bg-neutral-800 rounded mb-2"></div>
            <div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded"></div>
            <div className="absolute bottom-3 right-3 p-2 bg-teal-500 rounded-full">
                <Briefcase className="w-3 h-3 text-white" />
            </div>
        </div>
    </div>
);

const SkeletonTwo = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-neutral-900 dark:to-neutral-800 items-center justify-center">
        <div className="bg-white dark:bg-black p-4 rounded-full shadow-lg border border-green-200 dark:border-green-800 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-green-500" />
            <span className="font-bold text-sm">Verified</span>
        </div>
    </div>
);

const SkeletonThree = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 flex items-end justify-center p-4 overflow-hidden relative">
        <div className="flex -space-x-4">
            {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-black bg-zinc-300 dark:bg-zinc-700" />
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white dark:border-black bg-teal-500 flex items-center justify-center text-white text-xs font-bold">+50</div>
        </div>
    </div>
);

const SkeletonFour = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-100 to-red-100 dark:from-neutral-900 dark:to-neutral-800 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <GraduationCap className="w-32 h-32 text-orange-500" />
        </div>
        <div className="relative z-10 bg-white dark:bg-black px-4 py-2 rounded-lg border border-orange-200 dark:border-orange-800 font-bold text-orange-600 text-sm">
            EPICS Approved
        </div>
    </div>
);

const SkeletonFive = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 p-4">
        <div className="grid grid-cols-3 gap-2 w-full h-full">
            <div className="bg-teal-500/10 rounded col-span-2"></div>
            <div className="bg-blue-500/10 rounded"></div>
            <div className="bg-purple-500/10 rounded"></div>
            <div className="bg-orange-500/10 rounded col-span-2"></div>
        </div>
    </div>
);

const SkeletonSix = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-neutral-900 dark:to-neutral-800 items-center justify-center">
        <div className="w-3/4 h-32 bg-white dark:bg-black rounded-lg shadow-sm border border-yellow-200 dark:border-yellow-800 p-3 transform rotate-3 transition-transform hover:rotate-0">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-zinc-200 rounded-full" />
                <div className="w-20 h-2 bg-zinc-200 rounded" />
            </div>
            <div className="w-full h-16 bg-zinc-100 rounded" />
        </div>
    </div>
);


const features = [
    {
        title: "Live Industry Projects",
        description: "Don't just build to-do apps. Build real CRM modules for local MSMEs.",
        header: <SkeletonOne />,
        icon: <Briefcase className="h-4 w-4 " />,
    },
    {
        title: "Verified Skill Badges",
        description: "Earn badges that local employers actually trust and recognize.",
        header: <SkeletonTwo />,
        icon: <Trophy className="h-4 w-4" />,
    },
    {
        title: "Mentorship on Demand",
        description: "Get code reviews and career advice from Bhopal's top alumni.",
        header: <SkeletonThree />,
        icon: <UserCheck className="h-4 w-4" />,
    },
    {
        title: "Academic Credits (EPICS)",
        description: "Your work here counts towards your college project submissions. No double work.",
        header: <SkeletonFour />,
        icon: <GraduationCap className="h-4 w-4" />,
    },
    {
        title: "Full Stack Growth",
        description: "Learning paths curated for modern market needs: Next.js, Python, DevOps.",
        header: <SkeletonFive />,
        icon: <Zap className="h-4 w-4" />,
    },
    {
        title: "Portfolio that Speaks",
        description: "Auto-generated portfolio page showcasing your commits and deployed links.",
        header: <SkeletonSix />,
        icon: <BookOpen className="h-4 w-4" />,
    },
];
