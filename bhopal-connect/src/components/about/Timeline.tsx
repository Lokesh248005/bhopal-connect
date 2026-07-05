import { Badge } from "@/components/ui/badge";

const roadmap = [
    {
        phase: "Phase 1: Foundation",
        status: "Completed",
        description: "Launch of Public Platform, Business & Student Portals.",
        date: "Q1 2025",
    },
    {
        phase: "Phase 2: Marketplace",
        status: "In Progress",
        description: "B2B RFP (Request for Proposal) System & Freelance Marketplace.",
        date: "Q2 2025",
    },
    {
        phase: "Phase 3: Integration",
        status: "Upcoming",
        description: "Direct Mentorship Channels & University Credit Integration (EPICS).",
        date: "Q3 2025",
    },
    {
        phase: "Phase 4: Expansion",
        status: "Planned",
        description: "Mobile App Launch & Regional Expansion beyond Bhopal.",
        date: "2026",
    },
];

export function Timeline() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container max-w-screen-xl px-4">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl font-bold tracking-tight mb-4">Future Roadmap</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Reflecting our commitment to long-term sustainable growth for the city.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:hidden" />

                    <div className="space-y-12">
                        {roadmap.map((item, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"}`}>

                                {/* Content */}
                                <div className="flex-1 md:w-1/2">
                                    <div className={`flex flex-col gap-2 ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                                        <Badge variant={item.status === "Completed" ? "default" : item.status === "In Progress" ? "secondary" : "outline"} className="w-fit mb-2">
                                            {item.status}
                                        </Badge>
                                        <h3 className="text-xl font-bold font-heading">{item.phase}</h3>
                                        <p className="text-muted-foreground">{item.description}</p>
                                        <span className="text-sm font-medium text-muted-foreground/80 mt-1">{item.date}</span>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10 -ml-[8.5px] md:-ml-0" />

                                {/* Spacer */}
                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
