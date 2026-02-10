import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
    title: "Workfolio",
    description:
        "Projects by Pham Trung Hieu — case studies and product challenges designed, built, and shipped.",
};

import WorkfolioGrid from "@/components/workfolio/WorkfolioGrid";

export default function WorkfolioPage() {
    return (
        <>
            <Header />
            <main className="overflow-clip min-h-screen">
                <WorkfolioGrid />
                <ContactCTA />
            </main>
            <Footer />
        </>
    );
}
