'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTransition } from '@/contexts/TransitionContext'

export default function RouteTransition() {
    const { isTransitioning, progress } = useTransition()

    return (
        <AnimatePresence mode="wait">
            {isTransitioning && (
                <>
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ 
                            opacity: 0,
                            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
                        }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
                    >
                        <div className="container-custom flex flex-col items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className="relative"
                            >
                                <span className="text-[8vw] md:text-[6vw] font-bold tracking-tighter leading-none">
                                    {Math.floor(progress)}%
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        key="curtain-left"
                        initial={{ x: 0 }}
                        exit={{
                            x: "-100%",
                            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                        }}
                        className="fixed top-0 left-0 w-1/2 h-full bg-accent-purple z-[9998]"
                    />
                    <motion.div
                        key="curtain-right"
                        initial={{ x: 0 }}
                        exit={{
                            x: "100%",
                            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                        }}
                        className="fixed top-0 right-0 w-1/2 h-full bg-accent-purple z-[9998]"
                    />
                </>
            )}
        </AnimatePresence>
    )
}
