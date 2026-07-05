export interface LearningPath {
    id: string;
    title: string;
    slug: string;
    description: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    duration: string;
    modules: number;
    tags: string[];
    industry: string;
    progress?: number; // for authenticated view
    image: string; // placeholder color or gradient class
    skills: string[];
}

export interface ResourceModule {
    id: string;
    title: string;
    description: string;
    videoUrl: string; // YouTube embed ID
    duration: string;
}

export const learningPaths: LearningPath[] = [
    {
        id: "1",
        title: "Full Stack Web Dev in Bhopal",
        slug: "full-stack-web-dev",
        description: "Master React, Node.js, and local hosting solutions tailored for Bhopal's MSME needs.",
        level: "Intermediate",
        duration: "8 Weeks",
        modules: 12,
        tags: ["React", "Node.js", "PostgreSQL"],
        industry: "IT Services",
        image: "bg-blue-500",
        progress: 45,
        skills: ["Next.js", "TypeScript", "Tailwind"]
    },
    {
        id: "2",
        title: "Digital Marketing for Local Business",
        slug: "digital-marketing-local",
        description: "Learn how to optimize GMB profiles, run FB ads, and manage social media for local shops.",
        level: "Beginner",
        duration: "4 Weeks",
        modules: 8,
        tags: ["SEO", "Social Media", "Analytics"],
        industry: "Retail & Marketing",
        image: "bg-purple-500",
        progress: 10,
        skills: ["SEO", "Copywriting", "Analytics"]
    },
    {
        id: "3",
        title: "IoT for Smart City Projects",
        slug: "iot-smart-city",
        description: "Hands-on guide to building sensors and data collection units for Bhopal Smart City initiatives.",
        level: "Advanced",
        duration: "10 Weeks",
        modules: 15,
        tags: ["Arduino", "Python", "MQTT"],
        industry: "Urban Tech",
        image: "bg-green-500",
        progress: 0,
        skills: ["Arduino", "Python", "Electronics"]
    }
];

export const studentProfile = {
    name: "Rahul Sharma",
    college: "MANIT Bhopal",
    major: "Computer Science",
    year: "3rd Year",
    skills: ["React", "JavaScript", "Python", "UI/UX"],
    about: "Passionate developer looking to solve real community problems through technology. Exploring internships in local startups.",
    projects: [
        {
            title: "Smart Waste Management",
            description: "IoT based dustbin monitoring system for campus.",
            role: "Lead Developer",
            status: "Completed",
            date: "Jan 2024"
        },
        {
            title: "Local Artisan Marketplace",
            description: "E-commerce platform connect rural artisans to city buyers.",
            role: "Frontend Dev",
            status: "In Progress",
            date: "Mar 2024"
        }
    ],
    certifications: [
        {
            name: "Full Stack Web Development",
            issuer: "Coursera",
            date: "2023"
        },
        {
            name: "AWS Cloud Practitioner",
            issuer: "AWS",
            date: "2024"
        }
    ]
};
