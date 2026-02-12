'use client'

import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 150 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const checkHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const isSelectable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer')

            setIsHovering(!!isSelectable)
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', checkHover)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', checkHover)
        }
    }, [cursorX, cursorY])

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-foreground/30 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: '-50%',
                translateY: '-50%',
            }}
            animate={{
                scale: isHovering ? 2.5 : 1,
                backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0)',
            }}
        />
    )
}

export default CustomCursor
