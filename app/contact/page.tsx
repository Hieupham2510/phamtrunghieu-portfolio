import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Pham Trung Hieu — Senior Software Engineer. Let's talk about your project.",
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="overflow-clip min-h-screen">
                <section className="container-custom section-padding pt-32">
                    <h1 className="text-[12vw] lg:text-[7vw] font-bold leading-[0.9] tracking-tighter text-foreground mb-6">
                        Contact
                    </h1>
                    <p className="text-muted text-lg md:text-xl max-w-2xl">
                        Trang liên hệ & form — đang được xây dựng. (Phase 4)
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}
