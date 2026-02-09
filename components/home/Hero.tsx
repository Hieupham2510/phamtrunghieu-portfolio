'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { CornerRightDown } from 'lucide-react'

const CountUp = ({ to }: { to: number }) => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))

    useEffect(() => {
        const controls = animate(count, to, { duration: 6, ease: "easeOut" })
        return controls.stop
    }, [to])

    return <motion.span>{rounded}</motion.span>
}

const skills = [
    'React / Next.js', 'TypeScript', 'Node.js', 'System Design',
    'Cloud Architecture', 'CI/CD', 'API Design', 'Database Optimization',
    'Frontend Performance', 'Backend Scalability', 'Testing', 'DevOps'
]

export default function Hero() {
    return (
        <section className="container-custom section-padding min-h-[100vh] flex flex-col justify-center pt-32 relative">
            {/* Background Radial Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-radial-gradient pointer-events-none -z-10 opacity-50" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-12 relative z-10"
            >
                {/* Intro Text */}
                <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-2xl max-w-3xl text-muted font-medium leading-relaxed"
                >
                    Senior Software Engineer — crafting high-performance systems
                    and building scalable digital solutions that drive innovation.
                </motion.p>

                {/* Hero Name + Character */}
                <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-12">
                    <motion.h1
                        variants={fadeInUp}
                        className="text-[15vw] lg:text-[13vw] font-black leading-[0.75] tracking-tighter -ml-1 md:-ml-3 text-foreground"
                    >
                        Pham Trung <br /> Hieu
                    </motion.h1>

                    {/* Character Illustration */}
                    <div className="relative lg:w-1/2 mt-12 lg:mt-0 overflow-visible">
                        <motion.div
                            variants={fadeInUp}
                            className="relative flex justify-center lg:justify-end lg:translate-x-12 xl:translate-x-24 px-12 md:px-16 lg:px-20"
                        >
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] flex items-center justify-center group"
                            >
                                <div className="absolute inset-0 bg-accent-purple/20 blur-[120px] rounded-full animate-pulse-slow lg:scale-125 pointer-events-none" />

                                <div className="relative w-full h-full rounded-full border-4 border-card shadow-2xl bg-card overflow-hidden">
                                    <Image
                                        src="/images/hero-character.jpg"
                                        alt="Pham Trung Hieu Character"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>

                                {/* Badge 1: 4+ Years Experience */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute top-[10%] left-[-10%] md:left-0 bg-card/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-muted/10 z-20"
                                >
                                    <span className="text-3xl md:text-4xl font-black block bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-accent-blue flex items-center">
                                        <CountUp to={4} />+
                                    </span>
                                    <span className="text-[10px] md:text-xs text-muted font-bold uppercase tracking-wider">Years Exp.</span>
                                </motion.div>

                                {/* Badge 2: Open to Work */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute top-[-5%] left-[20%] md:left-[30%] bg-card/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-muted/10 flex items-center gap-2 z-20"
                                >
                                    <div className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </div>
                                    <span className="text-[10px] md:text-xs font-bold whitespace-nowrap uppercase tracking-wider">Open to work</span>
                                </motion.div>

                                {/* Badge 3: 30+ Projects */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                    className="absolute bottom-[10%] left-[-15%] md:left-[-10%] lg:left-[-5%] bg-card/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-muted/10 z-20"
                                >
                                    <span className="text-3xl md:text-4xl font-black block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center">
                                        <CountUp to={30} />+
                                    </span>
                                    <div className="font-bold text-[10px] md:text-xs text-muted uppercase tracking-wider">
                                        Projects
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Skills Tags Area - More refined */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-wrap gap-2 md:gap-3 max-w-5xl mt-12"
                >
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-4 py-2 border border-muted/10 dark:border-white/5 rounded-full text-xs md:text-sm font-semibold hover:bg-foreground hover:text-background transition-all duration-500 cursor-default select-none bg-card/40 backdrop-blur-md text-muted hover:text-foreground"
                        >
                            {skill}
                        </span>
                    ))}
                </motion.div>

                {/* Scroll Indicator - Refined for Reference Site Style */}
                <motion.div
                    variants={fadeInUp}
                    className="flex justify-end items-center w-full pt-2"
                >
                    <div className="flex items-center gap-4 group cursor-default">
                        <span className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                            Scroll for more
                        </span>
                        <motion.div
                            animate={{ y: [0, 5, 0], x: [0, 2, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-foreground"
                        >
                            <CornerRightDown size={28} strokeWidth={2.5} />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
