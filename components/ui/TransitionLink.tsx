'use client'

import { useTransition } from '@/contexts/TransitionContext'
import { ReactNode, MouseEvent } from 'react'

interface TransitionLinkProps {
    href: string
    children: ReactNode
    className?: string
    onClick?: () => void
}

export default function TransitionLink({ href, children, className, onClick }: TransitionLinkProps) {
    const { navigate } = useTransition()

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        
        console.log('[TransitionLink] Clicked:', href)
        
        // Execute any custom onClick
        if (onClick) {
            onClick()
        }

        // Don't transition if it's an anchor link
        if (href.startsWith('#')) {
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
            return
        }

        // Navigate with transition
        navigate(href)
    }

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    )
}
