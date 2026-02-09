'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface AnalogClockProps {
    timeZone?: string
}

const AnalogClock: React.FC<AnalogClockProps> = ({ timeZone = 'Asia/Ho_Chi_Minh' }) => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date()
            // Adjust for timezone if needed
            const tzTime = new Date(now.toLocaleString('en-US', { timeZone }))
            setTime(tzTime)
        }, 1000)

        return () => clearInterval(timer)
    }, [timeZone])

    const seconds = time.getSeconds()
    const minutes = time.getMinutes()
    const hours = time.getHours() % 12

    // Hand rotations
    const secondsDeg = (seconds / 60) * 360
    const minutesDeg = ((minutes + seconds / 60) / 60) * 360
    const hoursDeg = ((hours + minutes / 60) / 12) * 360

    return (
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            {/* Background Blobs (as seen in image) */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-500/30 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-green-500/20 rounded-full blur-3xl" />

            {/* Clock Face */}
            <div className="relative w-full h-full rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center">

                {/* Hour markers (ticks) */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-3 bg-white/20 rounded-full"
                        style={{
                            transform: `rotate(${i * 30}deg) translateY(-${100 - 10}px)`,
                            transformOrigin: '50% 100%'
                        }}
                    />
                ))}

                {/* Numbers 3, 6, 9, 12 */}
                <span className="absolute top-6 text-sm font-black text-white/40">12</span>
                <span className="absolute right-6 text-sm font-black text-white/40">3</span>
                <span className="absolute bottom-6 text-sm font-black text-white/40">6</span>
                <span className="absolute left-6 text-sm font-black text-white/40">9</span>

                {/* Hour Hand (Purple - Shorter) */}
                <motion.div
                    className="absolute w-2 h-[25%] bg-[#8B5CF6] rounded-full origin-bottom shadow-sm"
                    animate={{ rotate: hoursDeg }}
                    transition={{ type: 'spring', stiffness: 50, damping: 10 }}
                    style={{ bottom: '50%' }}
                />

                {/* Minute Hand (White - Longer) */}
                <motion.div
                    className="absolute w-1.5 h-[40%] bg-white rounded-full origin-bottom shadow-sm"
                    animate={{ rotate: minutesDeg }}
                    transition={{ type: 'spring', stiffness: 50, damping: 10 }}
                    style={{ bottom: '50%' }}
                />

                {/* Second Hand (Blue - Thinnest/Longest) */}
                <motion.div
                    className="absolute w-0.5 h-[45%] bg-[#3B82F6] rounded-full origin-bottom z-10"
                    animate={{ rotate: secondsDeg }}
                    transition={{ ease: "linear", duration: 0 }}
                    style={{ bottom: '50%' }}
                />

                {/* Center Pin */}
                <div className="absolute w-3 h-3 bg-white rounded-full z-20 shadow-md border-2 border-background" />
            </div>
        </div>
    )
}

export default AnalogClock
