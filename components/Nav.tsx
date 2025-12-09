'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/lib/config'

export default function Nav() {
  const [scrollDirection, setScrollDirection] = useState('none')
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('menu-open')
    } else {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('menu-open')
    }
    
    return () => {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  // Handle escape key to close menu
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
      }
    }
    
    if (menuOpen) {
      window.addEventListener('keydown', handleEsc)
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [menuOpen])

  useEffect(() => {
    setIsMounted(true)
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < 5) {
        ticking = false
        return
      }

      setScrollDirection(scrollY > lastScrollY ? 'down' : 'up')
      setScrolledToTop(scrollY < 50)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = (
    <>
      <ol className="flex items-center justify-between p-0 m-0 list-none">
        {siteConfig.navLinks.map(({ url, name }, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.1 }}
            className="relative mx-1.5 text-xs counter-increment"
            style={{ counterIncrement: 'item 1' }}
          >
            <a
              href={url}
              className="px-2.5 py-2 block text-slate hover:text-green transition-colors before:content-['0'_counter(item)_'.'] before:mr-1 before:text-green before:text-[11px]"
            >
              {name}
            </a>
          </motion.li>
        ))}
      </ol>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: siteConfig.navLinks.length * 0.1 + 0.1 }}
        className="ml-4"
      >
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2.5 text-xs leading-none border border-green rounded text-green hover:bg-green/10 transition-all font-mono"
        >
          Resume
        </a>
      </motion.div>
    </>
  )

  return (
    <header
      className={`
        fixed top-0 z-[11] flex items-center justify-between w-full px-12 md:px-10 lg:px-12
        bg-navy/85 backdrop-blur-[10px] transition-all duration-250
        ${!scrolledToTop ? 'h-[70px] shadow-lg shadow-navy-shadow/50' : 'h-[100px]'}
      `}
    >
      <nav className="flex items-center justify-between relative w-full text-lightest-slate font-mono z-[12]">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Link 
            href="/" 
            className="text-green w-[42px] h-[42px] flex items-center justify-center hover:text-green-tint transition-colors outline-none focus:outline-none focus-visible:outline-none"
            aria-label="Home"
          >
            <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96" className="w-full h-full">
              <title>Logo</title>
              <g transform="translate(-2.000000, -2.000000)">
                <g transform="translate(11.000000, 5.000000)">
                  <text x="23" y="57" fill="currentColor" fontSize="50px" fontFamily="SF Mono, monospace">c</text>
                  <polygon
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="39 0 0 22 0 67 39 90 78 68 78 23"
                    fill="none"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          {isMounted && navItems}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-[13] p-0 border-0 bg-transparent text-green cursor-pointer touch-manipulation"
          aria-label="Menu"
        >
          <div 
            className={`w-7 h-0.5 bg-current origin-center transition-all duration-200 ease-out ${
              menuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <div 
            className={`w-7 h-0.5 bg-current my-1.5 origin-center transition-all duration-200 ease-out ${
              menuOpen ? 'opacity-0 translate-x-5' : ''
            }`}
          />
          <div 
            className={`w-7 h-0.5 bg-current origin-center transition-all duration-200 ease-out ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {menuOpen && (
            <motion.aside
              key="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ 
                x: 0,
                transition: {
                  type: "tween",
                  duration: 0.25,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
              exit={{ 
                x: '100%',
                transition: {
                  type: "tween",
                  duration: 0.2,
                  ease: [0.4, 0, 1, 1]
                }
              }}
              className="md:hidden fixed top-0 bottom-0 right-0 w-[min(75vw,400px)] h-screen z-[12] bg-light-navy shadow-2xl mobile-menu-optimized"
            >
              <nav className="flex flex-col items-center justify-center w-full h-full relative">
                <ol className="p-0 m-0 list-none w-full flex flex-col items-center">
                  {siteConfig.navLinks.map(({ url, name }, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          delay: 0.05 + i * 0.05,
                          duration: 0.25,
                          ease: [0.4, 0, 0.2, 1]
                        }
                      }}
                      className="relative text-center my-1 counter-increment w-full"
                      style={{ counterIncrement: 'item 1' }}
                    >
                      <a
                        href={url}
                        onClick={() => setMenuOpen(false)}
                        className="block px-6 py-4 w-full text-lightest-slate hover:text-green transition-colors duration-200 relative before:content-['0'_counter(item)_'.'] before:block before:text-green before:text-sm before:mb-2 before:font-mono"
                      >
                        <span className="text-lg font-medium">{name}</span>
                      </a>
                    </motion.li>
                  ))}
                </ol>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 0.05 + siteConfig.navLinks.length * 0.05,
                      duration: 0.25,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }}
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-12 py-4 mt-6 text-sm leading-none border-2 border-green rounded text-green hover:bg-green/10 transition-all duration-200 font-mono"
                >
                  Resume
                </motion.a>
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>
        
        {/* Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
              }}
              exit={{ 
                opacity: 0,
                transition: { duration: 0.2, ease: [0.4, 0, 1, 1] }
              }}
              onClick={() => setMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-navy/70 z-[11] backdrop-blur-sm cursor-pointer will-change-opacity"
            />
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
