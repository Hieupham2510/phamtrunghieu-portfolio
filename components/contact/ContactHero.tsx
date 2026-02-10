'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ContactHero() {
    return (
        <section className="pt-32 pb-12 md:pt-48 md:pb-24 px-6 md:px-12">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl"
                >
                    <span className="text-white/60 text-lg md:text-xl mb-6 block">
                        Hello there!
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-8 md:mb-12">
                        Let's talk about your project!
                    </h1>

                    <a
                        href="mailto:hieupham2510@gmail.com"
                        className="group inline-flex items-center gap-2 text-2xl md:text-4xl font-medium text-white hover:text-[#907CFF] transition-colors"
                    >
                        hieupham2510@gmail.com
                        <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>

                    <p className="mt-8 text-white/60 max-w-2xl text-lg leading-relaxed">
                        I'm currently available for new projects and open to discussing how I can help you achieve your goals.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
