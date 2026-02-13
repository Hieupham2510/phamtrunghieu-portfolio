'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Home, ArrowLeft, Code, Star } from 'lucide-react'

export default function NotFound() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">
            {/* Pixel-style background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        repeating-linear-gradient(
                            0deg,
                            transparent,
                            transparent 2px,
                            currentColor 2px,
                            currentColor 4px
                        ),
                        repeating-linear-gradient(
                            90deg,
                            transparent,
                            transparent 2px,
                            currentColor 2px,
                            currentColor 4px
                        )
                    `,
                    backgroundSize: '20px 20px'
                }} />
            </div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* Main 404 Image */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full max-w-4xl mx-auto mb-12"
                    >
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-accent-purple/30">
                            <Image
                                src="/images/notfound/404_notfound.png"
                                alt="404 Error - Page Not Found"
                                fill
                                className="object-contain"
                                style={{ imageRendering: 'pixelated' }}
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                            />
                        </div>

                        {/* Pixel-style decorative corners */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-accent-purple" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-accent-purple" />
                        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-accent-purple" />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-accent-purple" />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-12"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 pixel-text">
                            Oops! Page Not Found
                        </h1>
                        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
                            Looks like you've wandered into uncharted territory. The page you're looking for doesn't exist or has been moved.
                        </p>
                    </motion.div>

                    {/* Action Buttons - Pixel Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <Link href="/">
                            <button className="group relative px-8 py-4 bg-accent-purple text-white font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-purple/50 flex items-center gap-3">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-purple-600" />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                                    backgroundImage: `
                                        repeating-linear-gradient(
                                            0deg,
                                            transparent,
                                            transparent 2px,
                                            rgba(255,255,255,0.1) 2px,
                                            rgba(255,255,255,0.1) 4px
                                        )
                                    `
                                }} />
                                <Home className="w-5 h-5 relative z-10" />
                                <span className="relative z-10">Go Home</span>
                            </button>
                        </Link>

                        <Link href="/workfolio">
                            <button className="group relative px-8 py-4 bg-foreground/10 text-foreground font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-foreground/20 flex items-center gap-3 border-2 border-foreground/20">
                                <Code className="w-5 h-5" />
                                <span>View Projects</span>
                            </button>
                        </Link>

                        <Link href="/contact">
                            <button className="group relative px-8 py-4 bg-foreground/10 text-foreground font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-foreground/20 flex items-center gap-3 border-2 border-foreground/20">
                                <Star className="w-5 h-5" />
                                <span>Contact Me</span>
                            </button>
                        </Link>
                    </motion.div>

                    {/* Retro-style back link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-12"
                    >
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center gap-2 text-muted hover:text-accent-purple transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium">Go back to previous page</span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating pixel particles */}
            {mounted && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-accent-purple/30"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
