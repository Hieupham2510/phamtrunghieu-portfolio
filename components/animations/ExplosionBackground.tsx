'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Generates random particles
const generateParticles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
        id: i,
        angle: Math.random() * 360, // Random direction
        distance: Math.random() * 300 + 100, // Random distance from center
        size: Math.random() * 4 + 1, // Random size
        delay: Math.random() * 2, // Random start delay for continuous feel
        duration: Math.random() * 2 + 2, // Random speed
    }));
};

export default function ExplosionBackground() {
    // Check for hydration to avoid mismatch
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const particles = generateParticles(100); // 50 particles

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
            {/* Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent-purple/20 blur-[100px] rounded-full" />

            {/* Particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute top-1/2 left-1/2 bg-white rounded-full"
                    style={{
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        x: [0, Math.cos(p.angle * (Math.PI / 180)) * p.distance],
                        y: [0, Math.sin(p.angle * (Math.PI / 180)) * p.distance],
                        opacity: [0, 1, 0], // Fade in then out
                        scale: [0, 1.5, 0], // Grow then shrink
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeOut",
                    }}
                />
            ))}
        </div>
    );
}
