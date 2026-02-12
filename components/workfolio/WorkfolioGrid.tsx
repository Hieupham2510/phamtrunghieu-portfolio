'use client'

import Masonry from 'react-masonry-css'
import ProjectCard from './ProjectCard'
import { WORKFOLIO_PROJECTS } from '@/lib/data/projects'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function WorkfolioGrid() {
    const breakpointColumnsObj = {
        default: 2,
        1100: 2,
        700: 1
    };

    return (
        <section className="section-padding bg-background pt-32">
            <div className="container-custom">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex -ml-8 md:-ml-16 w-auto"
                    columnClassName="pl-8 md:pl-16 bg-clip-padding space-y-16 md:space-y-32"
                >
                    {/* Hero Section as Grid Item */}
                    <div className="flex flex-col items-start pt-12 md:pt-24 mb-12 md:mb-4">
                        <div className="relative bg-[#907CFF] rounded-full px-6 py-2 md:px-10 md:py-4 flex items-center gap-4 hover:shadow-[0_0_40px_-10px_#907CFF] transition-shadow duration-500">
                            <div className="relative w-12 h-8 md:w-16 md:h-10">
                                <Image
                                    src="/images/workfolio/workfolio-heading.png"
                                    alt="Projects Icon"
                                    fill
                                    sizes="(max-width: 768px) 48px, 64px"
                                    className="object-contain"
                                />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                                Projects
                            </h1>
                        </div>
                    </div>

                    {WORKFOLIO_PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </Masonry>
            </div>
        </section>
    )
}
