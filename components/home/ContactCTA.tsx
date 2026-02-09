'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import ExplosionBackground from '../animations/ExplosionBackground';

export default function ContactCTA() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects for floating elements
    const yAstronaut = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const yMail = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const yHeart = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);

    return (
        <section ref={containerRef} className="relative section-padding overflow-hidden bg-background">

            {/* Background Marquee - Subtle & Huge */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.03]">
                <div className="whitespace-nowrap flex overflow-hidden">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex gap-12 text-[20vw] font-black uppercase leading-none"
                    >
                        <span>Let's start new project</span>
                        <span>Let's start new project</span>
                        <span>Let's start new project</span>
                        <span>Let's start new project</span>
                    </motion.div>
                </div>
            </div>
            <ExplosionBackground />

            <div className="container-custom relative z-10">
                <div className="flex flex-col items-center justify-center text-center gap-12 max-w-4xl mx-auto">

                    {/* Floating 3D Assets */}
                    <motion.div style={{ y: yMail, rotate: -15 }} className="absolute -left-4 md:left-20 top-20 w-24 h-24 md:w-32 md:h-32 opacity-80">
                        <Image src="/images/cta/mail-icon.png" alt="Mail" fill className="object-contain" />
                    </motion.div>

                    <motion.div style={{ y: yHeart, rotate: 15 }} className="absolute -right-4 md:right-32 top-10 w-20 h-20 md:w-28 md:h-28 opacity-80">
                        <Image src="/images/cta/heart-icon.png" alt="Heart" fill className="object-contain" />
                    </motion.div>

                    <motion.div style={{ y: yAstronaut }} className="absolute right-10 bottom-10 md:-right-0 md:bottom-0 w-32 h-32 md:w-48 md:h-48 opacity-90 hidden md:block">
                        <Image src="/images/cta/astronaut.png" alt="Astronaut" fill className="object-contain" />
                    </motion.div>


                    {/* Main Typography */}
                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]"
                        >
                            Let's talk about <br />
                            <span className="text-muted">your project!</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-muted/60 max-w-2xl mx-auto"
                        >
                            Have an idea? Let's discuss and bring it to life together.
                        </motion.p>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            href="mailto:contact@phamtrunghieu.com"
                            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-foreground text-background rounded-full text-xl font-bold uppercase tracking-wider overflow-hidden hover:bg-accent-purple hover:text-white transition-colors duration-300"
                        >
                            <span className="relative z-10">Contact Me</span>

                            {/* Arrow Transition */}
                            <span className="relative z-10 p-1 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </span>
                        </Link>
                    </motion.div>

                    {/* Compact Footer Links for Phase 5 scope */}
                    <div className="flex flex-wrap gap-8 md:gap-16 pt-12 items-center justify-center text-sm md:text-base font-bold uppercase tracking-widest text-muted/50">
                        <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-foreground transition-colors">Behance</a>
                        <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
