export interface Project {
    id: string | number;
    title: string;
    category: string;
    company: string;
    description: string;
    year: string;
    thumbnail: string; // Video or Image path
    caseStudyLink: string;
    externalLink?: string;
    tags?: string[];
    links?: {
        web?: string;
        android?: string;
        ios?: string;
    };
}

export const WORKFOLIO_PROJECTS: Project[] = [
    {
        id: 1,
        title: "Anyjoi",
        company: "Anyjoi",
        category: "Product Design",
        description: "A comprehensive platform integrating social, marketplace, and creator economy features.",
        year: "2023",
        thumbnail: "/images/projects/anyjoi.png", // Ensure these exist or use placeholders
        caseStudyLink: "/workfolio/anyjoi",
        tags: ["Social", "Marketplace", "Creator Economy"],
        links: {
            web: "#",
            android: "#",
            ios: "#"
        }
    },
    {
        id: 2,
        title: "Blitzhype",
        company: "Blitzhype",
        category: "Web Platform",
        description: "Influencer marketing and commerce platform empowering brands to leverage partnerships.",
        year: "2023",
        thumbnail: "/images/projects/blitzhype.png",
        caseStudyLink: "/workfolio/blitzhype",
        tags: ["Marketing", "Influencer", "E-commerce"],
        links: {
            web: "#"
        }
    },
    {
        id: 3,
        title: "Payso",
        company: "Payso",
        category: "Fintech Design",
        description: "Leading payment gateway providing modern, fast, and cost-effective solutions.",
        year: "2025",
        thumbnail: "/images/projects/payso.png",
        caseStudyLink: "/workfolio/payso",
        tags: ["Fintech", "Payment", "Vietnam"],
        links: {
            web: "#"
        }
    },
    {
        id: 4,
        title: "Savi",
        company: "Savi",
        category: "Mobile Design",
        description: "Premium ebook reader and marketplace dedicated to spreading knowledge.",
        year: "2025",
        thumbnail: "/images/projects/savi.png",
        caseStudyLink: "/workfolio/savi",
        tags: ["Mobile App", "Education", "Ebook"],
        links: {
            android: "#",
            ios: "#"
        }
    },
    // Placeholder for "District by Zomato" style project from reference to fill grid
    {
        id: 5,
        title: "Tata IPL 2025",
        company: "BCCI",
        category: "Visual Design",
        description: "Designing high-scale ticketing experience for India's biggest sporting event.",
        year: "2025",
        thumbnail: "/images/projects/payso.png", // Reuse for now
        caseStudyLink: "/workfolio/ipl-2025",
        tags: ["Event", "Ticketing", "Experience"]
    }
];
