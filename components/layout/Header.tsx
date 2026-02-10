'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { motion } from 'framer-motion'
import { useTransition } from '@/contexts/TransitionContext'
import MenuOverlay from './MenuOverlay'
import TransitionLink from '@/components/ui/TransitionLink'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { navigate } = useTransition()
    const pathname = usePathname()

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault()
        console.log('[Header] Contact button clicked')
        navigate('/contact')
    }

    if (!mounted) return null

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-muted/10 py-4' : 'bg-transparent py-8'
                    }`}
            >
                <div className="container-custom flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <TransitionLink href="/" className="relative w-10 h-10 overflow-hidden rounded-lg bg-card border border-muted/20 block">
                            <Image
                                src="/images/logo.png"
                                alt="PTH Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </TransitionLink>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold tracking-tight">Pham Trung Hieu</span>
                            <span className="text-[10px] text-muted uppercase font-medium tracking-wider">Senior Software Engineer</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {[
                            { label: 'About', href: '/about-me' },
                            { label: 'Works', href: '/workfolio' }
                        ].map((link) => {
                            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
                            return (
                                <TransitionLink
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-bold tracking-tight transition-colors hover:text-foreground relative group ${isActive ? 'text-foreground' : 'text-muted'}`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeNav"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-purple rounded-full"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </TransitionLink>
                            )
                        })}
                    </nav>

                    <div className="flex items-center gap-4 md:gap-8">
                        <ThemeToggle />

                        <motion.a
                            href="/contact"
                            onClick={handleContactClick}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-foreground text-background rounded-full text-sm font-black lowercase tracking-tight hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
                        >
                            say hello
                            <span className="text-xl leading-none">👋</span>
                        </motion.a>

                        <button
                            onClick={() => setMenuOpen(true)}
                            className="p-2 hover:bg-muted/10 rounded-full transition-colors"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>
            <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    )
}
