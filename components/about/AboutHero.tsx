'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import { ABOUT_INTRO } from '@/lib/about'
import TypewriterText from '@/components/ui/TypewriterText'

export default function AboutHero() {
    const { roleTags, heading, bio, resumeUrl, resumeCtaText, moreAboutLabel, moreAboutHref } = ABOUT_INTRO

    return (
        <section className="section-padding bg-background pt-32">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">

                    <div className="md:col-span-3 lg:col-span-3">
                        <div className="flex items-center gap-3 text-muted uppercase tracking-wider font-medium text-sm md:text-base md:sticky md:top-32">
                            <span>✦</span>
                            <span>About me</span>
                        </div>
                    </div>

                    <div className="md:col-span-9 lg:col-span-9 flex flex-col gap-12">

                        <div className="text-[10vw] md:text-[6vw] font-black leading-[0.9] tracking-tighter uppercase text-accent-purple whitespace-nowrap">
                            <TypewriterText words={roleTags} />
                        </div>

                        <div className="w-full">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-foreground"
                            >
                                {heading.split(' digital experiences ')[0]}
                                <span className="text-muted"> digital experiences </span>
                                {heading.split(' digital experiences ')[1]}
                            </motion.h1>
                        </div>

                        <div className="w-full space-y-8">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-muted leading-relaxed"
                            >
                                {bio}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap gap-6 items-center"
                            >
                                
                                <Link
                                    href={moreAboutHref}
                                    className="text-base md:text-lg font-bold uppercase tracking-wider underline decoration-muted/30 underline-offset-8 hover:decoration-foreground transition-all"
                                >
                                    {moreAboutLabel}
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
