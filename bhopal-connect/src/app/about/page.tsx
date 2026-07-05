"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Zap, Heart, Globe, Building, Code, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div className="bg-white min-h-screen text-zinc-950 font-sans selection:bg-teal-500/20">
            {/* Editorial Hero */}
            <div ref={containerRef} className="min-h-[90vh] w-full flex flex-col justify-center px-4 relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 pointer-events-none mix-blend-multiply"></div>
                <div className="container max-w-screen-xl mx-auto z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-px flex-1 bg-zinc-200"></div>
                            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">Est. 2024 • Bhopal</span>
                        </div>

                        <h1 className="font-heading text-[10vw] leading-[0.8] font-black tracking-tighter text-zinc-950">
                            THE GAP<br />
                            <span className="text-zinc-300">PROTOCOL.</span>
                        </h1>

                        <div className="flex flex-col md:flex-row gap-12 mt-12 items-start">
                            <p className="text-2xl md:text-3xl font-light leading-snug max-w-2xl text-zinc-600">
                                We are fixing the <span className="text-zinc-950 font-medium">geolocation bug</span> in hiring.
                                Connecting raw talent
                                with real opportunity.
                            </p>
                            <div className="mt-2 flex items-center gap-2 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-wide">Read Manifesto</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Narrative - Light Mode Sticky Scroll */}
            <div className="py-32 bg-zinc-50 border-t border-zinc-200">
                <div className="container max-w-screen-xl px-4">
                    <div className="mb-24">
                        <Badge variant="outline" className="mb-4 rounded-full px-4 py-1 border-zinc-300 text-zinc-500">Our Story</Badge>
                        <h2 className="text-5xl md:text-6xl font-black text-zinc-900 tracking-tight">
                            From Campus to <br /> Corporate.
                        </h2>
                    </div>

                    <StickyScroll content={content} contentClassName="bg-white shadow-2xl border border-zinc-100" />
                </div>
            </div>

            {/* Values / Manifesto - High Contrast */}
            <div className="py-32 bg-zinc-950 text-white relative overflow-hidden">
                <div className="container max-w-screen-xl px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-7xl font-black mb-8 tracking-tighter">OUR<br />CODE.</h2>
                            <p className="text-xl text-zinc-400 max-w-md">
                                The principles that guide every commit, every partnership, and every placement we make.
                            </p>
                        </div>
                        <div className="space-y-12">
                            {[
                                { title: "Proof > Degrees", desc: "A deployed app is worth more than a distinction grade." },
                                { title: "Talent is Universal", desc: "Access is distributed. We exist to bridge that delta." },
                                { title: "Community Driven", desc: "We don't extract value; we circulate it within the local ecosystem." }
                            ].map((item, idx) => (
                                <div key={idx} className="border-t border-zinc-800 pt-8 group">
                                    <div className="flex items-baseline justify-between mb-4">
                                        <h3 className="text-3xl font-bold group-hover:text-teal-400 transition-colors">{item.title}</h3>
                                        <span className="font-mono text-zinc-600">0{idx + 1}</span>
                                    </div>
                                    <p className="text-lg text-zinc-500 max-w-lg">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Light Mode Adjusted Content with Dark Cards for contrast inside the sticky scroll
const content = [
    {
        title: "The Disconnect",
        description:
            "Bhopal produces thousands of brilliant engineers every year. Yet, local businesses struggle to find tech talent, bordering on outsourcing to metro cities. The gap wasn't skill—it was access.",
        content: (
            <div className="h-full w-full bg-zinc-50 flex flex-col items-center justify-center p-8 rounded-md border border-zinc-200 relative overflow-hidden group text-zinc-900">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="flex items-center gap-8 mb-6">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-zinc-200 shadow-sm">
                                <Users className="w-8 h-8 text-zinc-400" />
                            </div>
                            <span className="text-xs mt-2 text-zinc-500">Students</span>
                        </div>
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-red-500/50 to-transparent border-t border-dashed border-red-500" />
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-zinc-200 shadow-sm">
                                <Building className="w-8 h-8 text-zinc-400" />
                            </div>
                            <span className="text-xs mt-2 text-zinc-500">Businesses</span>
                        </div>
                    </div>
                    <div className="bg-red-50 border border-red-200 px-4 py-2 rounded-full">
                        <span className="text-red-500 text-sm font-bold">🚫 No Connection</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Enter EPICS",
        description:
            "We adopted the EPICS framework. Students get academic credit not for writing papers, but for building software that solves real problems for local NGOs and MSMEs.",
        content: (
            <div className="h-full w-full bg-white flex flex-col items-center justify-center p-8 rounded-2xl border border-zinc-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Heart className="w-32 h-32 text-pink-500 rotate-12" />
                </div>
                <div className="relative z-10 grid grid-cols-2 gap-4 w-full">
                    <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                        <div className="text-3xl font-black text-zinc-900 mb-1">20+</div>
                        <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">NGO Partners</div>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                        <div className="text-3xl font-black text-zinc-900 mb-1">50+</div>
                        <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Live Projects</div>
                    </div>
                    <div className="col-span-2 bg-gradient-to-r from-teal-50 to-emerald-50 p-4 rounded-xl border border-teal-100 flex items-center justify-between">
                        <span className="font-bold text-sm text-teal-900">Academic Impact</span>
                        <span className="bg-teal-500 text-white text-[10px] font-bold px-2 py-1 rounded">CREDITED</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "The Platform",
        description:
            "BhopalConnect is a Credibility Protocol. We verify skills through code, not certificates. We verify businesses through presence, not just payments.",
        content: (
            <div className="h-full w-full bg-zinc-900 flex flex-col items-center justify-center text-white p-4 rounded-md border border-zinc-800 relative overflow-hidden">
                <div className="w-full max-w-[250px] bg-zinc-950 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="h-6 bg-zinc-900 border-b border-zinc-800 flex items-center px-3 gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-400 to-green-400" />
                            <div className="space-y-1">
                                <div className="h-2 w-16 bg-zinc-800 rounded" />
                                <div className="h-2 w-10 bg-zinc-800 rounded" />
                            </div>
                            <div className="ml-auto">
                                <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            </div>
                        </div>
                        <div className="h-16 bg-zinc-900/50 rounded border border-zinc-800/50 p-2">
                            <div className="flex gap-1 mb-2">
                                <div className="h-1 w-full bg-green-500/20 rounded" />
                                <div className="h-1 w-2/3 bg-green-500/20 rounded" />
                            </div>
                            <div className="text-[8px] text-green-400 font-mono"> git commit -m "feat: trust_protocol"</div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Vision 2026",
        description:
            "Targeting 500+ student placements and digitizing 100+ local MSMEs. The goal is to make Bhopal the central tech hub of Central India.",
        content: (
            <div className="h-full w-full bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center justify-center text-zinc-900 p-8 rounded-md border border-indigo-100 relative overflow-hidden">
                <div className="text-center relative z-10">
                    <div className="text-sm font-bold text-indigo-500 mb-2 uppercase tracking-widest">Growth Target</div>
                    <div className="text-6xl font-black mb-4 text-indigo-900 tracking-tighter">
                        500+
                    </div>
                    <div className="text-zinc-500 text-sm mb-6 font-medium">Placements Projected</div>
                    <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "60%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-indigo-600"
                        />
                    </div>
                </div>
            </div>
        ),
    },
];
