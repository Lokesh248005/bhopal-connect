"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
    { label: "Local Businesses", value: 50, suffix: "+" },
    { label: "Students Upskilled", value: 1200, suffix: "+" },
    { label: "RFQs Processed", value: 450, suffix: "" },
    { label: "Value Generated", value: 25, suffix: " Lakhs" },
];

export function Stats() {
    return (
        <section className="py-16 bg-primary text-primary-foreground">
            <div className="container max-w-screen-xl px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-2"
                        >
                            <div className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
                                {stat.value}{stat.suffix}
                            </div>
                            <div className="text-sm md:text-base font-medium opacity-80 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
