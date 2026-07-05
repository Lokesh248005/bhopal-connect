"use client";

import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-3xl group/bento hover:shadow-2xl hover:shadow-teal-500/10 transition duration-300 shadow-sm p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 justify-between flex flex-col space-y-4 overflow-hidden relative",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-teal-500/5 opacity-0 group-hover/bento:opacity-100 transition duration-500" />

            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-10">
                <div className="mb-2 w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover/bento:bg-teal-500 group-hover/bento:text-white transition-colors">
                    {icon}
                </div>
                <div className="font-heading font-bold text-zinc-900 dark:text-zinc-100 mb-2 mt-2 text-xl">
                    {title}
                </div>
                <div className="font-sans font-normal text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                    {description}
                </div>
            </div>
        </div>
    );
};
