'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedWordProps {
    label: string
    className?: string
}

const AnimatedWord = ({ label, className }: AnimatedWordProps) => {
    return (
        <motion.div
            className={`relative overflow-hidden inline-block pr-2 ${className || ''}`}
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

export default AnimatedWord
