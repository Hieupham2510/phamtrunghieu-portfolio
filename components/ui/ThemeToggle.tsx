'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    const [isAnimating, setIsAnimating] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const handleToggle = () => {
        setIsAnimating(true)
        setTheme(theme === 'dark' ? 'light' : 'dark')
        setTimeout(() => setIsAnimating(false), 800)
    }

    if (!mounted) return <div className="p-2 w-9 h-9" />

    return (
        <>
            {/* Expanding Circle Animation */}
            <AnimatePresence>
                {isAnimating && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0.8 }}
                        animate={{
                            scale: 100,
                            opacity: 0,
                            transition: {
                                duration: 0.8,
                                ease: [0.76, 0, 0.24, 1]
                            }
                        }}
                        exit={{ opacity: 0 }}
                        className="fixed top-0 right-0 w-20 h-20 rounded-full bg-accent-purple z-[9997] pointer-events-none"
                        style={{
                            transformOrigin: 'center center',
                        }}
                    />
                )}
            </AnimatePresence>

            <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={handleToggle}
                className="relative p-2 rounded-full hover:bg-muted/10 transition-colors overflow-hidden"
                aria-label="Toggle theme"
            >
                <AnimatePresence mode="wait">
                    {theme === 'dark' ? (
                        <motion.div
                            key="sun"
                            initial={{ rotate: -90, scale: 0 }}
                            animate={{ rotate: 0, scale: 1 }}
                            exit={{ rotate: 90, scale: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <Sun className="w-5 h-5 text-yellow-500" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="moon"
                            initial={{ rotate: 90, scale: 0 }}
                            animate={{ rotate: 0, scale: 1 }}
                            exit={{ rotate: -90, scale: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <Moon className="w-5 h-5 text-slate-700" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </>
    )
}
