'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'
import TransitionLink from '@/components/ui/TransitionLink'
import { useSpotlight } from '@/hooks/useSpotlight'
import AnalogClock from '@/components/ui/AnalogClock'

const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About me', href: '/about-me' },
    { label: 'Works', href: '/workfolio', badge: '+30' },
    { label: 'Contact', href: '/contact' },
]

const menuListVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}

const menuItemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.33, 1, 0.68, 1] as any
        }
    },
    exit: {
        y: 40,
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: "easeIn" as any
        }
    }
}

const AnimatedWord = ({ label }: { label: string }) => {
    return (
        <motion.div
            className="relative overflow-hidden inline-block"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            <div className="flex">
                {label.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            rest: { y: 0 },
                            hover: { y: "-100%" }
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.6, 0.01, -0.05, 0.95] as any,
                            delay: i * 0.02
                        }}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </div>
            <div className="flex absolute top-full left-0">
                {label.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            rest: { y: 0 },
                            hover: { y: "-100%" }
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.6, 0.01, -0.05, 0.95] as any,
                            delay: i * 0.02
                        }}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    )
}


export default function MenuOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const { spotlightBackground, handleMouseMove } = useSpotlight(800, 'rgba(120, 119, 198, 0.2)')

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { delay: 0.4, duration: 0.3 } }}
                    transition={{ duration: 0.3 }}
                    onMouseMove={handleMouseMove}
                    className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl overflow-hidden"
                >
                    {/* Full-screen Spotlight */}
                    <motion.div
                        className="pointer-events-none absolute -inset-px opacity-50"
                        style={{ background: spotlightBackground }}
                    />

                    <div className="container-custom h-full flex items-center relative">
                        {/* Close Button */}
                        <div className="absolute top-12 left-6 md:left-12 lg:left-24 flex items-center gap-4">
                            {/* Branding in Menu */}
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-foreground flex items-center justify-center text-background font-black text-xs">P</div>
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-foreground">Menu</span>
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="absolute top-10 right-6 md:right-12 lg:right-24 p-4 hover:bg-muted/10 rounded-full transition-all duration-300 group"
                        >
                            <X size={32} className="group-hover:rotate-90 transition-transform duration-500" />
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 w-full pt-12">
                            {/* Left Column: Navigation */}
                            <div className="lg:col-span-7 flex flex-col justify-center">
                                <motion.nav
                                    variants={menuListVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="flex flex-col gap-4 md:gap-6"
                                >
                                    {menuItems.map((item) => (
                                        <motion.div
                                            key={item.href}
                                            variants={menuItemVariants}
                                        >
                                            <TransitionLink
                                                href={item.href}
                                                onClick={onClose}
                                                className="group flex items-center gap-8 text-6xl md:text-8xl lg:text-9xl font-black lowercase tracking-tighter"
                                            >
                                                <span className="text-muted/20 group-hover:text-foreground transition-colors duration-500">
                                                    <AnimatedWord label={item.label} />
                                                </span>
                                            </TransitionLink>
                                        </motion.div>
                                    ))}
                                </motion.nav>
                            </div>

                            {/* Right Column: Context & Info */}
                            <div className="lg:col-span-5 hidden lg:flex flex-col justify-center border-l border-muted/10 pl-20 gap-16">
                                {/* Availability Block */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-col gap-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-500">Available for freelance</span>
                                    </div>
                                    <h4 className="text-2xl font-bold text-foreground">Let&apos;s build something great together.</h4>
                                    <a href="mailto:hello@phamtrunghieu.com" className="text-muted hover:text-foreground transition-colors font-medium border-b border-muted/20 w-fit pb-1">
                                        hello@phamtrunghieu.com
                                    </a>
                                </motion.div>

                                {/* Location & Time - Replaced with Analog Clock */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-col gap-6"
                                >
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted/60">Local Time</span>
                                        <h3 className="text-xl font-bold text-foreground">Hanoi, Vietnam</h3>
                                    </div>

                                    <div className="flex justify-start pl-4 py-4">
                                        <AnalogClock />
                                    </div>
                                </motion.div>

                                {/* Social Links */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex flex-col gap-6"
                                >
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted/60">Socials</span>
                                    <div className="flex flex-col gap-4">
                                        {['LinkedIn', 'GitHub', 'Facebook'].map((social) => (
                                            <a
                                                key={social}
                                                href="#"
                                                className="group flex items-center justify-between text-xl font-bold text-muted hover:text-foreground transition-all duration-300"
                                            >
                                                <span>{social}</span>
                                                <div className="h-[2px] w-0 bg-foreground group-hover:w-8 transition-all duration-500" />
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Mobile Footer Info */}
                        <div className="absolute bottom-12 left-6 right-6 flex justify-between items-end lg:hidden">
                            <div className="text-muted text-[10px] font-bold uppercase tracking-widest space-y-1">
                                <p>Hanoi, Vietnam</p>
                                <p>© 2024 Pham Trung Hieu</p>
                            </div>
                            <div className="flex gap-4">
                                <a href="#" className="font-bold text-xs">Li</a>
                                <a href="#" className="font-bold text-xs">Gh</a>
                                <a href="#" className="font-bold text-xs">Fb</a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
