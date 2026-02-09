"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Apple, Play } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    company: string;
    year?: string;
    links: {
        web?: string;
        android?: string;
        ios?: string;
    };
    image: string;
    category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    tags,
    company,
    year,
    links,
    image,
    category,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="group relative flex flex-col gap-8"
        >
            {/* Image Container with Parallax Effect */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-card border border-muted/10 shadow-2xl">
                <motion.div
                    className="h-full w-full relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                >
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>

                {/* Internal Tags (Integrated Look) */}
                <div className="absolute bottom-10 left-10 flex flex-wrap gap-3 z-20">
                    <div className="backdrop-blur-2xl bg-white/10 border border-white/20 px-6 py-2.5 rounded-full text-[10px] font-black text-white shadow-2xl uppercase tracking-[0.15em]">
                        {company}
                    </div>
                    {tags.slice(0, 2).map((tag, index) => (
                        <div
                            key={index}
                            className="backdrop-blur-2xl bg-black/20 border border-white/10 px-6 py-2.5 rounded-full text-[10px] font-black text-white/90 shadow-2xl uppercase tracking-[0.15em] hidden sm:block"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-col gap-6 px-4">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <h3 className="text-4xl md:text-5xl font-black text-foreground group-hover:text-accent-purple transition-colors duration-500 leading-none tracking-tighter">
                            {title}
                        </h3>
                        <span className="text-[10px] font-black text-muted/60 bg-muted/5 px-5 py-2 rounded-full border border-muted/10 uppercase tracking-[0.2em]">
                            {category}
                        </span>
                    </div>
                    <p className="text-muted text-xl leading-relaxed max-w-2xl font-medium group-hover:text-foreground/80 transition-colors duration-500">
                        {description}
                    </p>
                </div>

                {/* Platform Links */}
                <div className="flex items-center gap-4 mt-2">
                    {links.web && (
                        <a
                            href={links.web}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-foreground text-background text-xs font-black uppercase tracking-[0.15em] hover:bg-accent-purple hover:text-white transition-all duration-500 shadow-xl"
                        >
                            <Globe size={20} />
                            <span>View Site</span>
                        </a>
                    )}
                    {links.android && (
                        <a
                            href={links.android}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-card border border-muted/20 text-foreground text-xs font-black uppercase tracking-[0.15em] hover:border-accent-purple hover:text-accent-purple transition-all duration-500 shadow-lg"
                        >
                            <Play size={20} />
                            <span>Android</span>
                        </a>
                    )}
                    {links.ios && (
                        <a
                            href={links.ios}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-card border border-muted/20 text-foreground text-xs font-black uppercase tracking-[0.15em] hover:border-accent-purple hover:text-accent-purple transition-all duration-500 shadow-lg"
                        >
                            <Apple size={20} />
                            <span>iOS</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
