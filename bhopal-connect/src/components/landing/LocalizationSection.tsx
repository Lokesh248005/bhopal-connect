"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function LocalizationSection() {
    return (
        <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
            {/* Dark Map Texture Overlay (Conceptual) */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

            <div className="container max-w-screen-xl px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20"
                        >
                            <MapPin className="w-3 h-3" /> Hyper-Local Focus
                        </motion.div>
                        <h2 className="font-heading text-5xl md:text-7xl font-black mb-8 leading-tight">
                            Built for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Bhopal.</span>
                        </h2>
                        <p className="text-xl text-zinc-400 mb-8 leading-relaxed max-w-md">
                            We aren&apos;t Silicon Valley. We are MP Nagar, Govindpura, and Shyamla Hills. We understand the specific needs of Bhopal&apos;s MSMEs.
                        </p>
                        <Link href="/about">
                            <Button size="lg" variant="outline" className="rounded-full border-zinc-700 hover:bg-zinc-800 text-white gap-2">
                                Read our Story <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 shadow-2xl relative"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Abstract City Representation */}
                                <div className="text-[12rem] font-black text-white/5 select-none tracking-tighter">BPL</div>
                            </div>

                            {/* Floating Stats Cards */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="absolute top-12 left-12 bg-zinc-900/90 backdrop-blur-md p-4 rounded-xl border border-zinc-700 shadow-xl"
                            >
                                <div className="text-xs text-zinc-400 uppercase font-bold">Govindpura Ind. Area</div>
                                <div className="text-2xl font-bold text-emerald-400">200+ Units</div>
                            </motion.div>

                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-12 right-12 bg-zinc-900/90 backdrop-blur-md p-4 rounded-xl border border-zinc-700 shadow-xl text-right"
                            >
                                <div className="text-xs text-zinc-400 uppercase font-bold">Student Hubs</div>
                                <div className="text-2xl font-bold text-cyan-400">MANIT • RGPV</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
