export interface Business {
    id: string;
    name: string;
    slug: string;
    logo: string; // Placeholder string or URL
    industry: "Manufacturing" | "IT Services" | "Retail" | "Healthcare" | "Education" | "Construction";
    size: "1-10" | "11-50" | "51-200" | "201+";
    rating: number; // 0-5
    reviewCount: number;
    location: string;
    verified: boolean;
    description: string;
    services: string[];
    projects: Project[];
}

export interface Project {
    title: string;
    description: string;
    image?: string;
    date: string;
}

export const businesses: Business[] = [
    {
        id: "1",
        name: "TechNova Solutions",
        slug: "technova-solutions",
        logo: "TN",
        industry: "IT Services",
        size: "11-50",
        rating: 4.8,
        reviewCount: 12,
        location: "MP Nagar, Bhopal",
        verified: true,
        description: "Leading provider of custom software development and cloud solutions for local MSMEs.",
        services: ["Web Development", "Cloud Migration", "Mobile Apps"],
        projects: [
            {
                title: "E-Commerce Platform for Local Artisans",
                description: "Built a scalable marketplace for local handicrafts.",
                date: "2024",
            }
        ]
    },
    {
        id: "2",
        name: "Bhopal Precision Gears",
        slug: "bhopal-precision-gears",
        logo: "BP",
        industry: "Manufacturing",
        size: "51-200",
        rating: 4.5,
        reviewCount: 34,
        location: "Govindpura Industrial Area, Bhopal",
        verified: true,
        description: "Manufacturer of high-quality precision gears and automotive components.",
        services: ["Gear Manufacturing", "CNC Machining", "Prototype Design"],
        projects: []
    },
    {
        id: "3",
        name: "GreenLeaf Organics",
        slug: "greenleaf-organics",
        logo: "GL",
        industry: "Retail",
        size: "1-10",
        rating: 4.2,
        reviewCount: 8,
        location: "Arera Colony, Bhopal",
        verified: false,
        description: "Distributor of organic farming produce and sustainable lifestyle products.",
        services: ["Organic Produce Supply", "Sustainable Packaging"],
        projects: []
    },
    {
        id: "4",
        name: "MediCare Diagnostics",
        slug: "medicare-diagnostics",
        logo: "MD",
        industry: "Healthcare",
        size: "11-50",
        rating: 4.9,
        reviewCount: 56,
        location: "Kolar Road, Bhopal",
        verified: true,
        description: "Advanced diagnostic center offering pathology and imaging services.",
        services: ["Pathology", "Radiology", "Health Checkups"],
        projects: []
    },
    {
        id: "5",
        name: "BuildRight Construction",
        slug: "buildright-construction",
        logo: "BR",
        industry: "Construction",
        size: "11-50",
        rating: 4.0,
        reviewCount: 5,
        location: "Hoshangabad Road, Bhopal",
        verified: true,
        description: "Residential and commercial construction services.",
        services: ["Building Construction", "Renovation", "Interior Design"],
        projects: []
    },
    {
        id: "6",
        name: "CyberSafe Systems",
        slug: "cybersafe-systems",
        logo: "CS",
        industry: "IT Services",
        size: "1-10",
        rating: 3.8,
        reviewCount: 3,
        location: "Indrapuri, Bhopal",
        verified: false,
        description: "Cybersecurity consulting and network protection.",
        services: ["Network Security", "Audit", "Consulting"],
        projects: []
    }
];
