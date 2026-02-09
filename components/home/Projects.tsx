"use client";

import React from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { MOCK_PROJECTS } from "@/lib/mock-data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Projects = () => {
    return (
        <section id="projects" className="container-custom section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                {/* Left Side: Sticky Header & Info */}
                <div className="lg:col-span-5 self-stretch">
                    <div className="lg:sticky lg:top-[120px] h-fit flex flex-col gap-8">
                        <div>
                            <h2 className="text-[12vw] lg:text-[7vw] font-bold leading-[0.9] tracking-tighter text-foreground mb-6">
                                Projects
                            </h2>
                            <p className="text-muted text-lg md:text-xl max-w-sm leading-relaxed">
                                A snapshot of the product challenges I&apos;ve designed, built, and shipped recently.
                            </p>
                        </div>

                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group flex items-center justify-between px-6 py-3 w-fit gap-4 border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
                        >
                            <span className="text-sm font-bold uppercase tracking-wider">
                                See All
                            </span>
                            <ArrowRight className="h-4 w-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </motion.button>
                    </div>
                </div>

                {/* Right Side: Project Cards list */}
                <div className="lg:col-span-7 flex flex-col gap-24 md:gap-32 w-full">
                    {MOCK_PROJECTS.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}

                    {/* Mobile Button (Visible only on < lg) */}
                    <div className="lg:hidden mt-8 flex justify-center">
                        <button className="group flex items-center gap-4 w-fit text-foreground hover:text-accent-purple transition-colors">
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">
                                Explore All Projects
                            </span>
                            <div className="flex items-center justify-center h-12 w-12 rounded-full border border-muted/20 group-hover:bg-foreground group-hover:border-foreground group-hover:text-background transition-all duration-500">
                                <ArrowRight className="h-5 w-5" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
