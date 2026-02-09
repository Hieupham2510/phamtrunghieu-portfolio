'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import { ABOUT_STATISTICS } from '@/lib/about'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const CountUp = ({ to, suffix = '' }: { to: number; suffix?: string }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: 'easeOut' })
    return controls.stop
  }, [to, count])

  return (
    <span className="inline-flex">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export default function AboutStatistics() {
  return (
    <section className="container-custom section-padding">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {ABOUT_STATISTICS.map((stat) => {
          const isImageLeft = stat.imagePosition === 'left'
          const hasAccentBg = 'accentBg' in stat && stat.accentBg
          const imageOverflow = 'imageOverflow' in stat && stat.imageOverflow
          const subLabel = 'subLabel' in stat ? stat.subLabel : null

          return (
            <motion.article
              key={stat.id}
              variants={fadeInUp}
              className={`relative flex flex-row items-stretch min-h-[200px] md:min-h-[240px] p-6 md:p-8 rounded-3xl border transition-colors duration-300 overflow-visible ${
                hasAccentBg
                  ? 'bg-accent-purple border-accent-purple/20'
                  : 'bg-card border-muted/10 hover:border-muted/20'
              }`}
            >
              {/* Illustration - trái hoặc phải, có thể thò ra ngoài */}
              <div
                className={`relative shrink-0 flex items-center justify-center ${
                  isImageLeft
                    ? `w-2/5 min-w-[120px] md:min-w-[160px] ${imageOverflow ? '-ml-4 md:-ml-6' : ''}`
                    : `w-2/5 min-w-[120px] md:min-w-[180px] order-2 ${imageOverflow ? '-mr-8 md:-mr-12' : ''}`
                }`}
              >
                <div
                  className={`relative w-full aspect-square max-w-[180px] md:max-w-[220px] ${imageOverflow ? 'scale-110' : ''}`}
                >
                  <Image
                    src={stat.image}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 160px, 220px"
                  />
                </div>
              </div>

              {/* Số + Label - luôn block nội dung, trái hoặc phải tùy card */}
              <div
                className={`flex flex-col justify-center gap-1 flex-1 min-w-0 ${
                  isImageLeft ? 'text-right pl-4' : 'text-left pr-4 order-1'
                }`}
              >
                <p
                  className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter ${
                    hasAccentBg
                      ? 'text-foreground'
                      : 'bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-accent-blue'
                  }`}
                >
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </p>
                <p
                  className={`text-sm md:text-base leading-snug ${
                    hasAccentBg ? 'text-foreground/80' : 'text-muted'
                  }`}
                >
                  {stat.label}
                </p>
                {subLabel && (
                  <p
                    className={`text-sm mt-1 ${
                      hasAccentBg ? 'text-foreground/70' : 'text-muted'
                    }`}
                  >
                    {subLabel}
                  </p>
                )}
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </section>
  )
}
