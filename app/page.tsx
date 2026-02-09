import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import PageLoader from "@/components/animations/PageLoader";

// Lazy load below-fold components for better performance
const Projects = dynamic(() => import("@/components/home/Projects"));
const SkillMarquee = dynamic(() => import("@/components/home/SkillMarquee"));
const ServiceCards = dynamic(() => import("@/components/home/ServiceCards"));
const AboutBrief = dynamic(() => import("@/components/home/AboutBrief"));
const VisualBreak = dynamic(() => import("@/components/home/VisualBreak"));
const ContactCTA = dynamic(() => import("@/components/home/ContactCTA"));
const Footer = dynamic(() => import("@/components/layout/Footer"));

export default function Home() {
    return (
        <>
            <PageLoader />
            <Header />
            <main className="overflow-clip">
                <Hero />
                <Projects />
                <SkillMarquee />
                <ServiceCards />
                <AboutBrief />
                <VisualBreak />
                <ContactCTA />
            </main>
            <Footer />
        </>
    );
}
