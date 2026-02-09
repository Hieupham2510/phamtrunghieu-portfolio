'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader() {
    const [progress, setProgress] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Check if page is already loaded
        const isComplete = typeof document !== 'undefined' && document.readyState === 'complete'
        
        if (isComplete) {
            setProgress(100)
            setTimeout(() => setIsLoading(false), 500)
            return
        }

        let currentProgress = 0

        // Simulate initial quick load (DOM parsing)
        const initialInterval = setInterval(() => {
            currentProgress += Math.random() * 10 + 5
            if (currentProgress >= 60) {
                currentProgress = 60
                clearInterval(initialInterval)
            }
            setProgress(Math.min(currentProgress, 60))
        }, 100)

        // Track actual images and resources
        const images = Array.from(document.images)
        const totalResources = images.length || 1
        let loadedResources = 0

        const updateProgress = () => {
            loadedResources++
            // Map loaded resources to 60-90% range
            const resourceProgress = 60 + (loadedResources / totalResources) * 30
            currentProgress = Math.max(currentProgress, resourceProgress)
            setProgress(Math.min(currentProgress, 90))
        }

        // Monitor image loading
        images.forEach((img) => {
            if (img.complete) {
                updateProgress()
            } else {
                img.addEventListener('load', updateProgress)
                img.addEventListener('error', updateProgress) // Count errors as loaded to prevent hanging
            }
        })

        // Listen for full page load
        const handleLoad = () => {
            clearInterval(initialInterval)
            // Quick ramp to 100%
            const finalInterval = setInterval(() => {
                currentProgress += 5
                if (currentProgress >= 100) {
                    currentProgress = 100
                    clearInterval(finalInterval)
                    setProgress(100)
                    setTimeout(() => setIsLoading(false), 500)
                } else {
                    setProgress(currentProgress)
                }
            }, 50)
        }

        // Check if already complete, otherwise add listener
        if (typeof window !== 'undefined') {
            if (document.readyState === 'complete') {
                handleLoad()
            } else {
                window.addEventListener('load', handleLoad)
            }
        }

        // Fallback: force complete after 5 seconds to prevent infinite loading
        const fallbackTimer = setTimeout(() => {
            clearInterval(initialInterval)
            setProgress(100)
            setTimeout(() => setIsLoading(false), 500)
        }, 5000)

        return () => {
            clearInterval(initialInterval)
            clearTimeout(fallbackTimer)
            if (typeof window !== 'undefined') {
                window.removeEventListener('load', handleLoad)
            }
            images.forEach((img) => {
                img.removeEventListener('load', updateProgress)
                img.removeEventListener('error', updateProgress)
            })
        }
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
