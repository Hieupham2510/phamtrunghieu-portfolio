'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader() {
    const [progress, setProgress] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(() => setIsLoading(false), 500)
                    return 100
                }
                const increment = Math.floor(Math.random() * 15) + 5
                return Math.min(prev + increment, 100)
            })
        }, 150)

        return () => clearInterval(interval)
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <>
                    {/* Main Loader Screen */}
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{
                            opacity: 0,
                            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
                        }}
                        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
                    >
                        <div className="container-custom flex flex-col items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: { duration: 0.5, ease: "easeOut" }
                                }}
                                exit={{
                                    scale: 1.2,
                                    opacity: 0,
                                    transition: { duration: 0.4 }
                                }}
                                className="relative"
                            >
                                <span className="text-[12vw] md:text-[8vw] font-bold tracking-tighter leading-none">
                                    {Math.floor(progress)}%
                                </span>
                            </motion.div>

                            <div className="w-full max-w-md h-[2px] bg-muted/20 mt-8 overflow-hidden rounded-full">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ ease: "easeInOut" }}
                                    className="h-full bg-foreground"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Curtain Reveal Animation */}
                    <motion.div
                        key="curtain-left"
                        initial={{ x: 0 }}
                        exit={{
                            x: "-100%",
                            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
                        }}
                        className="fixed top-0 left-0 w-1/2 h-full bg-accent-purple z-[9998]"
                    />
                    <motion.div
                        key="curtain-right"
                        initial={{ x: 0 }}
                        exit={{
                            x: "100%",
                            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
                        }}
                        className="fixed top-0 right-0 w-1/2 h-full bg-accent-purple z-[9998]"
                    />
                </>
            )}
        </AnimatePresence>
    )
}
