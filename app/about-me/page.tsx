import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/home/ContactCTA";
import AboutHero from "@/components/about/AboutHero";
import AboutProjectMarquee from "@/components/about/AboutProjectMarquee";
import WorkProcess from "@/components/about/WorkProcess";
import AboutStatistics from "@/components/about/AboutStatistics";
import WorkExperience from "@/components/about/WorkExperience";
import SkillsToolsMarquee from "@/components/about/SkillsToolsMarquee";

export const metadata: Metadata = {
    title: "About Me",
    description:
        "Learn more about Pham Trung Hieu — Senior Software Engineer. Work process, experience, skills, and education.",
};

export default function AboutMePage() {
    return (
        <>
            <Header />
            <main className="overflow-clip min-h-screen">
                <AboutHero />
                <AboutProjectMarquee />
                <WorkProcess />
                <AboutStatistics />
                <WorkExperience />
                <SkillsToolsMarquee />
                <ContactCTA />
            </main>
            <Footer />
        </>
    );
}
