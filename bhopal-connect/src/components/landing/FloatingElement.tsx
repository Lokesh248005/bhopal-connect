"use client";

import { motion } from "framer-motion";

export function FloatingElement({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
    return (
        <motion.div
            className={`absolute ${className}`}
            animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
}
