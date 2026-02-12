'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/data/projects'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={project.caseStudyLink} className="group block w-full">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5">
                {/* Media Container */}
                <div className="relative w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating Pills - Bottom Left */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    <span className="bg-white/90 text-black px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-md">
                        {project.company}
                    </span>
                    <span className="bg-black/60 text-white border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-md">
                        {project.category}
                    </span>
                </div>

                {/* Hover Arrow - Top Right */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-black" />
                </div>
            </div>

            {/* Content Below Card */}
            <div className="mt-6 pl-1 space-y-2">
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Case Study</span>
                    <div className="h-px bg-white/10 flex-grow max-w-[50px]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {project.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg line-clamp-2 max-w-xl">
                    {project.description}
                </p>
            </div>
        </Link>
    )
}
