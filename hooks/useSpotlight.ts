'use client'
import { useMotionValue, useMotionTemplate } from 'framer-motion'
import React from 'react'

export function useSpotlight(
    radius: number = 800,
    color: string = 'rgba(120, 119, 198, 0.3)'
) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const spotlightBackground = useMotionTemplate`
        radial-gradient(
            ${radius}px circle at ${mouseX}px ${mouseY}px,
            ${color},
            transparent 80%
        )
    `

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return { spotlightBackground, handleMouseMove }
}
