'use client'
import React, { useRef, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

interface SpotlightCardProps {
    children: React.ReactNode
    className?: string
    glowColor?: string
}

export const SpotlightCard = ({ children, className = "", glowColor = "rgba(120, 119, 198, 0.15)" }: SpotlightCardProps) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            className={`group relative rounded-2xl border border-muted/10 bg-background overflow-hidden ${className}`}
            style={{ position: 'relative' }}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl transition duration-300 opacity-0 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            ${glowColor},
                            transparent 80%
                        )
                    `,
                }}
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}
