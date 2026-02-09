'use client'
import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Facebook } from 'lucide-react'
import Link from 'next/link'
import TransitionLink from '@/components/ui/TransitionLink'
import { useSpotlight } from '@/hooks/useSpotlight'

const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About me', href: '/about-me' },
    { label: 'Works', href: '/workfolio', badge: '+30' },
    { label: 'Contact', href: '/contact' },
]

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

export default function Footer() {
    const { spotlightBackground, handleMouseMove } = useSpotlight(800, 'rgba(120, 119, 198, 0.4)')

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer
            onMouseMove={handleMouseMove}
            className="group relative mt-20 pt-20 pb-12 bg-card rounded-t-[3rem] overflow-hidden border-t border-muted/10"
        >
            {/* Full-section Spotlight */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: spotlightBackground }}
            />
            {/* Massive Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden translate-y-10 lg:translate-y-20">
                <span className="text-[20vw] font-black text-muted/[0.03] whitespace-nowrap leading-none tracking-tighter">
                    pham trung hieu
                </span>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 mb-20">

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h4 className="text-xs uppercase tracking-widest text-muted font-bold">Navigation</h4>
                        <nav className="flex flex-col space-y-4">
                            {footerLinks.map((link) => (
                                <TransitionLink
                                    key={link.href}
                                    href={link.href}
                                    className="text-3xl md:text-4xl font-bold tracking-tight inline-flex items-center gap-3 w-fit transition-colors hover:text-muted"
                                >
                                    <AnimatedWord label={link.label} />
                                    {link.badge && (
                                        <span className="text-[10px] px-2 py-0.5 bg-foreground text-background rounded-full font-bold">
                                            {link.badge}
                                        </span>
                                    )}
                                </TransitionLink>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Cards */}
                    <div className="space-y-6">
                        <h4 className="text-xs uppercase tracking-widest text-muted font-bold">Contact</h4>
                        <div className="space-y-4">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-6 bg-background/50 backdrop-blur-sm border border-muted/10 rounded-2xl space-y-1"
                            >
                                <p className="text-[10px] uppercase font-bold text-muted tracking-wider">Email</p>
                                <a href="mailto:hello@phamtrunghieu.com" className="text-lg font-bold hover:text-muted transition-colors">
                                    hello@phamtrunghieu.com
                                </a>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-6 bg-background/50 backdrop-blur-sm border border-muted/10 rounded-2xl space-y-1"
                            >
                                <p className="text-[10px] uppercase font-bold text-muted tracking-wider">Phone</p>
                                <a href="tel:+84912345678" className="text-lg font-bold hover:text-muted transition-colors">
                                    +84 912 345 678
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* Socials & Scroll to Top */}
                    <div className="flex flex-col justify-between">
                        <div className="space-y-6">
                            <h4 className="text-xs uppercase tracking-widest text-muted font-bold">Follow me</h4>
                            <div className="flex gap-4">
                                {[
                                    { icon: <Linkedin size={20} />, href: "#" },
                                    { icon: <Github size={20} />, href: "#" },
                                    { icon: <Facebook size={20} />, href: "#" }
                                ].map((social, idx) => (
                                    <Link
                                        key={idx}
                                        href={social.href}
                                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-background border border-muted/10 hover:bg-muted/10 transition-colors"
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end mt-12 lg:mt-0">
                            <motion.button
                                onClick={scrollToTop}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-16 h-16 flex items-center justify-center rounded-full bg-foreground text-background hover:shadow-xl transition-shadow"
                            >
                                <ArrowUp size={32} />
                            </motion.button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-muted/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold tracking-widest text-muted">
                    <p>© 2025 Pham Trung Hieu | Senior Software Engineer</p>
                    <p>Hanoi, Vietnam</p>
                </div>
            </div>
        </footer>
    )
}
