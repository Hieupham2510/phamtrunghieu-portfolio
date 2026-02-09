import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
    title: "Workfolio",
    description:
        "Projects by Pham Trung Hieu — case studies and product challenges designed, built, and shipped.",
};

export default function WorkfolioPage() {
    return (
        <>
            <Header />
            <main className="overflow-clip min-h-screen">
                <section className="container-custom section-padding pt-32">
                    <h1 className="text-[12vw] lg:text-[7vw] font-bold leading-[0.9] tracking-tighter text-foreground mb-6">
                        Projects
                    </h1>
                    <p className="text-muted text-lg md:text-xl max-w-2xl">
                        Danh sách dự án & case studies — đang được xây dựng. (Phase 3)
                    </p>
                </section>
                <ContactCTA />
            </main>
            <Footer />
        </>
    );
}
