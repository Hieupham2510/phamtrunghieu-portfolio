'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function VisualBreak() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax: Image moves slower than container
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    // Scale: Subtle zoom out effect for depth
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

    // Badge Rotation
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section ref={containerRef} className="py-12 md:py-24 bg-background">
            <div className="container-custom">
                <div className="relative">

                    <div className="relative w-full h-[50vh] md:h-[80vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden group cursor-pointer z-0">
                        <motion.div
                            style={{ y, scale }}
                            className="relative w-full h-[120%] -top-[10%]"
                        >
                            <Image
                                src="/images/visualBreak/lifestyle.png"
                                alt="Lifestyle Visual"
                                fill
                                sizes="(max-width: 768px) 100vw, 80vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                        </motion.div>
                    </div>

                    <div className="absolute -top-16 right-6 md:-top-24 md:right-12 z-20 pointer-events-none">
                        <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">

                            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-full" />

                            <motion.div
                                style={{ rotate }}
                                className="absolute inset-0 w-full h-full flex items-center justify-center"
                            >
                                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                                    <path
                                        id="circlePath"
                                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                        fill="none"
                                    />
                                    <text className="text-[11px] font-bold uppercase tracking-[2px] fill-white">
                                        <textPath href="#circlePath" startOffset="0%">
                                            Let's start new project •
                                        </textPath>
                                    </text>
                                </svg>
                            </motion.div>

                            <div className="relative w-12 h-12 md:w-16 md:h-16">
                                <Image
                                    src="/images/visualBreak/badge.png"
                                    alt="Logo"
                                    fill
                                    sizes="(max-width: 768px) 48px, 64px"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
