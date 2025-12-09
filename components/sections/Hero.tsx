'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navDelay = 1000 // Same as old version - hero content shows after 1 second

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay)
    return () => clearTimeout(timeout)
  }, [])

  const items = [
    <h1 key="hi" className="mb-7 ml-1 text-green font-mono text-sm md:text-base lg:text-lg font-normal">
      Hi, my name is
    </h1>,
    <h2 key="name" className="big-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-lightest-slate">
      Chanpreet Singh.
    </h2>,
    <h3 key="tagline" className="big-heading mt-2.5 text-5xl md:text-6xl lg:text-7xl font-semibold text-slate leading-[0.9]">
      I build things for the web.
    </h3>,
    <p key="desc" className="mt-5 max-w-[540px] text-base md:text-lg">
      I'm a software developer and full-stack engineer specializing in JavaScript, TypeScript, React, Node.js, and Angular. 
      I create exceptional digital experiences and scalable web applications. Currently, I'm an engineer at{' '}
      <a 
        href="https://www.oncehub.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-link"
      >
        Oncehub
      </a>, building accessible scheduling products.
    </p>,
    <a 
      key="cta"
      href="https://go.oncehub.com/chanpreetsingh" 
      className="btn big-button mt-12 inline-block"
      target="_blank" 
      rel="noreferrer"
    >
      Schedule virtual meeting
    </a>
  ]

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1, // Start first item at 100ms like the old version
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.645, 0.045, 0.355, 1] // Original easing from old version
      }
    }
  }

  return (
    <section className="flex flex-col items-start justify-center min-h-screen py-0 px-0 section">
      {isMounted ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="w-full opacity-0">
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
      )}
    </section>
  )
}
