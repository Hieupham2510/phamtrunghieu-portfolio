'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { MOCK_PROJECTS } from '@/lib/mock-data'
import { ABOUT_INTRO } from '@/lib/about'

export default function AboutProjectMarquee() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    })

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

    const projectImages = MOCK_PROJECTS.map((p) => p.image)
    // Đúng 2 bản để loop vô tận không giật: khi translate -50% thì bản 2 thay bản 1, reset 0% trùng hình
    const marqueeContent = [...projectImages, ...projectImages]

    const { resumeUrl, resumeCtaText } = ABOUT_INTRO


    const DownloadButton = () => (
        <>
            <div className="absolute inset-0 bg-black/80 dark:bg-white/10 backdrop-blur-sm rounded-full" />
            <motion.div
                style={{ rotate }}
                className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
            >
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                    <path
                        id="aboutMarqueeCirclePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                    />
                    <text className="text-[11px] font-bold uppercase tracking-[2px] fill-white dark:fill-foreground">
                        <textPath href="#aboutMarqueeCirclePath" startOffset="0%">
                            {resumeCtaText} •
                        </textPath>
                    </text>
                </svg>
            </motion.div>
            <div className="relative w-12 h-12 md:w-16 md:h-16">
                <Image
                    src="/images/aboutMe/download.png"
                    alt={resumeCtaText}
                    fill
                    className="object-contain"
                />
            </div>
        </>
    )

    return (
        <section ref={containerRef} className="section-padding bg-background overflow-visible relative">
            {/* Marquee full width, không padding ngang */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex w-max gap-4 md:gap-6"
                    animate={{ x: '-50%' }}
                    transition={{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 35,
                    }}
                >
                    {marqueeContent.map((src, index) => (
                        <div
                            key={`${src}-${index}`}
                            className="relative shrink-0 w-[330px] md:w-[415px] lg:w-[498px] xl:w-[830px] rounded-2xl overflow-hidden bg-card border border-muted/10"
                            style={{ aspectRatio: '830/630' }}
                        >
                            <Image
                                src={src}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 330px, (max-width: 1024px) 415px, (max-width: 1280px) 498px, 830px"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Download Resume - absolute góc phải trên section, thừa nửa ra ngoài */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 -translate-x-1/2 flex items-center justify-center z-10">
                {resumeUrl ? (
                    <Link
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-full h-full flex items-center justify-center rounded-full transition-transform hover:scale-105"
                    >
                        <DownloadButton />
                    </Link>
                ) : (
                    <div className="relative w-full h-full flex items-center justify-center rounded-full opacity-90">
                        <DownloadButton />
                    </div>
                )}
            </div>
        </section>
    )
}
