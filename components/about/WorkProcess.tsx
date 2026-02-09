'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { WORK_PROCESS } from '@/lib/about'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function WorkProcess() {
    const { sectionTitle, introSentence, ctaText, ctaHref, steps } = WORK_PROCESS

    return (
        <section className="container-custom section-padding">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="space-y-16 md:space-y-24"
            >
                <div className="max-w-3xl space-y-6">
                    <motion.h2
                        variants={fadeInUp}
                        className="text-[12vw] lg:text-[5rem] font-bold leading-[0.9] tracking-tighter text-foreground"
                    >
                        {sectionTitle}
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-muted leading-relaxed"
                    >
                        {introSentence}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {steps.map((step, index) => (
                        <motion.article
                            key={step.id}
                            variants={fadeInUp}
                            className="group relative p-8 md:p-10 rounded-[2rem] bg-card border border-muted/10 hover:border-accent-purple/30 transition-colors duration-300"
                        >
                            <div className="flex flex-col md:flex-row gap-8 md:gap-10">
                                <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl overflow-hidden bg-background/50 border border-muted/10">
                                    <Image
                                        src={step.image}
                                        alt={step.label}
                                        fill
                                        className="object-contain p-2"
                                        sizes="96px"
                                    />
                                </div>
                                <div className="space-y-4 flex-1">
                                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent-purple">
                                        {step.label}
                                    </p>
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm md:text-base font-medium text-muted">
                                        {step.subtitle}
                                    </p>
                                    <p className="text-muted leading-relaxed">
                                        {step.description}
                                    </p>
                                    <p className="text-sm font-semibold text-foreground italic">
                                        {step.tagline}
                                    </p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div variants={fadeInUp} className="pt-4">
                    <Link
                        href={ctaHref}
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold uppercase tracking-wider hover:bg-accent-purple hover:text-white transition-colors text-sm md:text-base"
                    >
                        {ctaText}
                        <span className="text-xl leading-none">→</span>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    )
}
