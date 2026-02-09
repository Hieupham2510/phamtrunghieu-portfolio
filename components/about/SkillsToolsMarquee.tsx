'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TECH_STACK } from '@/lib/about'

export default function SkillsToolsMarquee() {
  // Hai bản để loop mượt (x: -50% thì bản 2 thay bản 1)
  const items = [...TECH_STACK, ...TECH_STACK]

  return (
    <section className="section-padding overflow-hidden bg-background">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max gap-8 md:gap-12 items-center"
          animate={{ x: '-50%' }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 30,
          }}
        >
          {items.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="relative shrink-0 w-12 h-12 md:w-14 md:h-14 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-contain"
                sizes="56px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
