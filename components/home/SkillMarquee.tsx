'use client';
import { motion } from 'framer-motion';
import { MARQUEE_ITEMS } from '@/lib/mock-data';

export default function SkillMarquee() {
    // Duplicate the items enough times to ensure seamless scrolling
    // If text is short, we might need 4 duplicates. With current length, 2 is plenty, but let's do 4 for safety on huge screens.
    const marqueeContent = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

    return (
        <section className="py-24 overflow-hidden bg-background">
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex w-max whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 100, // Slower for readability and smoothness
                    }}
                >
                    {marqueeContent.map((item, index) => (
                        <div key={index} className="flex items-center shrink-0">
                            <span className="text-[8vw] md:text-[6vw] font-black uppercase text-transparent stroke-text px-8 transition-colors duration-300 hover:text-foreground hover:stroke-foreground cursor-default">
                                {item}
                            </span>
                            <span className="text-3xl text-primary mx-4">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(var(--foreground-rgb), 0.2);
                    color: transparent;
                }
                .stroke-text:hover {
                    -webkit-text-stroke: 1px rgba(var(--foreground-rgb), 1);
                     color: rgba(var(--foreground-rgb), 1);
                }
            `}</style>
        </section>
    );
}
