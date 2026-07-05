"use client";

export function StatsTicker() {
    const items = [
        "500+ Businesses Verified",
        "•",
        "12,000+ Students Ready",
        "•",
        "EPICS Certified",
        "•",
        "₹2Cr+ Value Generated",
        "•",
        "Zero Commission for Students",
        "•",
        "Trusted by MANIT & RGPV",
        "•",
    ];

    return (
        <div className="w-full bg-primary/5 border-y border-primary/10 overflow-hidden py-4">
            <div className="flex whitespace-nowrap animate-infinite-scroll">
                {[...items, ...items, ...items].map((item, i) => (
                    <span key={i} className="mx-8 text-lg font-bold text-muted-foreground uppercase tracking-widest opacity-70">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
