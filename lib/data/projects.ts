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
    {
        id: 5,
        title: "Airsoft",
        company: "Airsoft",
        category: "Web Development",
        description: "E-commerce and technical platform for Airsoft equipment and enthusiasts.",
        year: "2024",
        thumbnail: "/images/projects/airsoft.png",
        caseStudyLink: "/workfolio/airsoft",
        tags: ["E-commerce", "Community", "Retail"],
        links: {
            web: "https://airsofttech.vn/"
        }
    },
    {
        id: 6,
        title: "Diag",
        company: "Diag",
        category: "Healthcare Service",
        description: "Medical diagnostic and testing platform providing comprehensive health services.",
        year: "2024",
        thumbnail: "/images/projects/diag.png",
        caseStudyLink: "/workfolio/diag",
        tags: ["Healthcare", "Diagnostics", "Medical"],
        links: {
            web: "https://diag.vn/"
        }
    },
    {
        id: 7,
        title: "MyPvcombank",
        company: "PVcomBank",
        category: "Digital Banking",
        description: "Modern mobile banking application offering comprehensive financial services.",
        year: "2024",
        thumbnail: "/images/projects/mypvcombank.png",
        caseStudyLink: "/workfolio/mypvcombank",
        tags: ["Fintech", "Banking", "Mobile"],
        links: {
            android: "https://play.google.com/store/apps/details?id=com.pvcombank.mypvcb.production&hl=vi"
        }
    },
    {
        id: 8,
        title: "Ndakey",
        company: "PILA",
        category: "Identity Verification",
        description: "Automated KYC and identity verification solution for secure onboarding.",
        year: "2024",
        thumbnail: "/images/projects/ndakey.png",
        caseStudyLink: "/workfolio/ndakey",
        tags: ["Security", "KYC", "Fintech"],
        links: {
            android: "https://play.google.com/store/apps/details?id=io.kyc.onboarding&hl=vi"
        }
    },
    {
        id: 9,
        title: "Payso Landing",
        company: "Payso",
        category: "Fintech Platform",
        description: "A fast and secure payment gateway landing page presenting cutting-edge financial solutions.",
        year: "2025",
        thumbnail: "/images/projects/payso_landing_page.png",
        caseStudyLink: "/workfolio/payso-landing",
        tags: ["Fintech", "Landing Page", "Payments"],
        links: {
            web: "https://payso.vn/"
        }
    },
    {
        id: 10,
        title: "Pvconnect",
        company: "PVcomBank",
        category: "Retail Banking",
        description: "Personal banking assistant app for managing accounts and financial connectivity.",
        year: "2024",
        thumbnail: "/images/projects/pvconnect.png",
        caseStudyLink: "/workfolio/pvconnect",
        tags: ["Banking", "Finance", "Mobile"],
        links: {
            android: "https://play.google.com/store/apps/details?id=com.pvcombank.retail"
        }
    },
    {
        id: 11,
        title: "THD Law",
        company: "THD Law Firm",
        category: "Legal Services",
        description: "Official legal portal for professional consultation and law services information.",
        year: "2024",
        thumbnail: "/images/projects/thd_landing_page.png",
        caseStudyLink: "/workfolio/thd-law",
        tags: ["Legal", "Law Firm", "Professional"],
        links: {
            web: "https://luatthd.vn/"
        }
    },
    {
        id: 12,
        title: "Vietnam Travel",
        company: "Vietnam Tourism",
        category: "Tourism App",
        description: "A travel companion app helping users explore and navigate tourist destinations in Vietnam.",
        year: "2024",
        thumbnail: "/images/projects/vietnam_travel.png",
        caseStudyLink: "/workfolio/vietnam-travel",
        tags: ["Travel", "Tourism", "Mobile"],
        links: {
            android: "https://play.google.com/store/apps/details?id=com.biin.tourism"
        }
    }
];
