'use client'

import { useState, useEffect, useRef, KeyboardEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { jobsData } from '@/lib/jobs-data'

export default function Jobs() {
  const [activeTabId, setActiveTabId] = useState(0)
  const [tabFocus, setTabFocus] = useState<number | null>(null)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  const focusTab = () => {
    if (tabFocus !== null && tabs.current[tabFocus]) {
      tabs.current[tabFocus]?.focus()
      return
    }
    // If we're at the end, go to the start
    if (tabFocus !== null && tabFocus >= tabs.current.length) {
      setTabFocus(0)
    }
    // If we're at the start, move to the end
    if (tabFocus !== null && tabFocus < 0) {
      setTabFocus(tabs.current.length - 1)
    }
  }

  useEffect(() => {
    if (tabFocus !== null) {
      focusTab()
    }
  }, [tabFocus])

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowUp': {
        e.preventDefault()
        setTabFocus(tabFocus === null ? 0 : tabFocus - 1)
        break
      }
      case 'ArrowDown': {
        e.preventDefault()
        setTabFocus(tabFocus === null ? 0 : tabFocus + 1)
        break
      }
      default:
        break
    }
  }

  return (
    <section id="jobs" className="section max-w-[700px] mx-auto">
      <h2 className="numbered-heading">Where I've Worked</h2>

      <div className="flex flex-col sm:flex-row min-h-[340px]">
        {/* Tab List */}
        <div
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={onKeyDown}
          className="relative z-[3] w-max p-0 m-0 list-none flex sm:flex-col overflow-x-auto sm:overflow-x-visible -ml-6 sm:ml-0 w-[calc(100%+50px)] sm:w-auto mb-8 sm:mb-0"
        >
          {jobsData.map((job, i) => (
            <button
              key={i}
              ref={(el) => { tabs.current[i] = el }}
              id={`tab-${i}`}
              role="tab"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-selected={activeTabId === i}
              aria-controls={`panel-${i}`}
              onClick={() => setActiveTabId(i)}
              className={`
                flex items-center justify-center sm:justify-start w-full h-[42px] px-5 pb-0.5
                border-l-0 sm:border-l-2 border-b-2 sm:border-b-0 border-lightest-navy
                bg-transparent font-mono text-xs text-left whitespace-nowrap
                transition-all duration-250
                hover:bg-light-navy focus:bg-light-navy
                ${activeTabId === i ? 'text-green' : 'text-slate'}
                ${i === 0 ? 'ml-6 sm:ml-0' : ''}
                ${i === jobsData.length - 1 ? 'pr-6 sm:pr-5' : ''}
              `}
            >
              <span>{job.company}</span>
            </button>
          ))}
          
          {/* Highlight - Mobile (horizontal) */}
          <div
            className="absolute bottom-0 left-0 z-10 w-full max-w-[120px] h-0.5 bg-green rounded transition-transform duration-250 ease-[cubic-bezier(0.645,0.045,0.355,1)] ml-6 sm:hidden"
            style={{
              transform: `translateX(calc(${activeTabId} * 120px))`,
            }}
          />
          {/* Highlight - Desktop (vertical) */}
          <div
            className="absolute top-0 left-0 z-10 w-0.5 h-[42px] bg-green rounded transition-transform duration-250 ease-[cubic-bezier(0.645,0.045,0.355,1)] hidden sm:block"
            style={{
              transform: `translateY(calc(${activeTabId} * 42px))`,
            }}
          />
        </div>

        {/* Tab Panels */}
        <div className="relative w-full sm:ml-5">
          <AnimatePresence mode="wait">
            {jobsData.map((job, i) => {
              if (activeTabId !== i) return null

              return (
                <motion.div
                  key={i}
                  id={`panel-${i}`}
                  role="tabpanel"
                  tabIndex={activeTabId === i ? 0 : -1}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activeTabId !== i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-auto p-2.5"
                >
                  <h3 className="mb-0.5 text-2xl font-medium leading-[1.3]">
                    <span className="text-lightest-slate">{job.title}</span>
                    <span className="text-green">
                      &nbsp;@&nbsp;
                      <a href={job.url} className="inline-link" target="_blank" rel="noopener noreferrer">
                        {job.company}
                      </a>
                    </span>
                  </h3>

                  <p className="mb-6 text-light-slate font-mono text-xs">
                    {job.range}
                  </p>

                  <ul className="space-y-4">
                    {job.responsibilities.map((item, idx) => (
                      <li
                        key={idx}
                        className="relative pl-7 text-lg text-slate leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-green before:text-xl before:leading-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
