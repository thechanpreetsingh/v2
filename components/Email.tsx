'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/config'

const loaderDelay = 2000 // Same as old version

export default function Email() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay)
    return () => clearTimeout(timeout)
  }, [])

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.645, 0.045, 0.355, 1]
      }
    }
  }

  return (
    <div className="hidden md:block fixed bottom-0 left-auto right-10 lg:right-12 w-10 z-10">
      {isMounted && (
        <motion.div 
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center relative after:content-[''] after:block after:w-px after:h-[90px] after:mx-auto after:bg-light-slate"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-xs tracking-widest [writing-mode:vertical-rl] my-5 p-2.5 inline-block text-light-slate hover:text-green hover:-translate-y-1 transition-all duration-250"
          >
            {siteConfig.email}
          </a>
        </motion.div>
      )}
    </div>
  )
}
