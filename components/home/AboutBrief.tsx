'use client';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import TypewriterText from '@/components/ui/TypewriterText';

const ROLES = [
    "Product Designer",
    "Web Designer",
    "Mobile Engineer",
    "Creative Developer"
];

export default function AboutBrief() {
    return (
        <section className="py-24 md:py-32 bg-background">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">

                    {/* Left Column: Label */}
                    <div className="md:col-span-3 lg:col-span-3">
                        <div className="flex items-center gap-3 text-muted uppercase tracking-wider font-medium text-sm md:text-base md:sticky md:top-32">
                            <span>✦</span>
                            <span>About me</span>
                        </div>
                    </div>

                    {/* Right Column: Roles + Content */}
                    <div className="md:col-span-9 lg:col-span-9 flex flex-col gap-12">

                        {/* Typewriter Role - Massive */}
                        <div className="text-[10vw] md:text-[6vw] font-black leading-[0.9] tracking-tighter uppercase text-accent-purple whitespace-nowrap">
                            <TypewriterText words={ROLES} />
                        </div>

                        {/* Heading */}
                        <div className="w-full">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-[1.2]"
                            >
                                I craft <span className="text-muted">digital experiences</span> with a focus on simplicity and purpose.
                            </motion.h2>
                        </div>

                        {/* Bio & Actions */}
                        <div className="w-full space-y-8">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-muted leading-relaxed"
                            >
                                I am a Senior Software Engineer & Product Designer based in Hanoi. With over 5 years of experience, I bridge the gap between design and engineering to build products that look great and work perfectly.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap gap-6 items-center"
                            >
                                <a
                                    href="/resume.pdf"
                                    className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold uppercase tracking-wider hover:bg-muted transition-colors text-sm md:text-base"
                                >
                                    <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                                    Download Resume
                                </a>
                                <Link
                                    href="/about"
                                    className="text-base md:text-lg font-bold uppercase tracking-wider underline decoration-muted/30 underline-offset-8 hover:decoration-foreground transition-all"
                                >
                                    More about me
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
