"use client";

import { motion } from "framer-motion";
import { ArrowRightLeft, Building2, GraduationCap, LayoutDashboard, Zap } from "lucide-react";

export function SolutionSection() {
    return (
        <section className="py-32 bg-zinc-50 dark:bg-zinc-900 overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container max-w-screen-xl px-4 text-center relative z-10">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight"
                    >
                        The <span className="text-primary">Ecosystem</span> Engine
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        We replaced the broken pipeline with a high-speed digital infrastructure.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 relative">
                    {/* Business Node */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-background/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-border/50 w-72 lg:w-96 hover:scale-105 transition-transform duration-300"
                    >
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 text-white">
                            <Building2 className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Businesses</h3>
                        <ul className="text-sm text-muted-foreground text-left space-y-2">
                            <li className="flex items-center gap-2"><Zap className="w-3 h-3 text-blue-500" /> Post RFQs immediately</li>
                            <li className="flex items-center gap-2"><Zap className="w-3 h-3 text-blue-500" /> Filter verified talent</li>
                            <li className="flex items-center gap-2"><Zap className="w-3 h-3 text-blue-500" /> Pay only for results</li>
                        </ul>
                    </motion.div>

                    {/* Platform Core */}
                    <div className="relative z-20">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="bg-gradient-to-br from-zinc-900 to-black text-white p-1 rounded-full shadow-2xl border-4 border-white dark:border-zinc-800"
                        >
                            <div className="bg-zinc-950 rounded-full p-8 w-40 h-40 flex flex-col items-center justify-center">
                                <LayoutDashboard className="w-12 h-12 mb-2 text-primary" />
                                <div className="font-bold text-lg">HUB</div>
                            </div>
                        </motion.div>
                        {/* Connection Lines */}
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent -z-10 blur-[1px]" />
                    </div>

                    {/* Student Node */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-background/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-border/50 w-72 lg:w-96 hover:scale-105 transition-transform duration-300"
                    >
                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20 text-white">
                            <GraduationCap className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Students</h3>
                        <ul className="text-sm text-muted-foreground text-left space-y-2">
                            <li className="flex items-center gap-2"><Zap className="w-3 h-3 text-green-500" /> Work on live projects</li>
                            <li className="flex items-center gap-2"><Zap className="w-3 h-3 text-green-500" /> Earn academic credits</li>
                            <li className="flex items-center gap-2"><Zap className="w-3 h-3 text-green-500" /> Build real portfolio</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
