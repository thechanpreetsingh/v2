'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projectsData } from '@/lib/projects-data'
import { Icon } from '@/components/icons'

const GRID_LIMIT = 6

export default function Projects() {
  const [showMore, setShowMore] = useState(false)
  
  const projectsToShow = showMore ? projectsData : projectsData.slice(0, GRID_LIMIT)

  return (
    <section className="flex flex-col items-center section">
      <h2 className="numbered-heading w-full text-center md:text-left max-w-[1000px]">
        Other Noteworthy Projects
      </h2>

      <a
        href="/archive"
        className="inline-link font-mono text-sm mb-12"
      >
        view the archive
      </a>

      <ul className="list-none p-0 m-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative mt-12 max-w-[1000px] w-full">
        <AnimatePresence>
          {projectsToShow.map((project, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="relative cursor-default transition-all duration-250 group"
            >
              <div className="flex flex-col items-start relative h-full p-8 rounded bg-light-navy shadow-lg transition-all duration-250 group-hover:-translate-y-2">
                {/* Top Section */}
                <div className="flex items-center justify-between w-full mb-9">
                  <div className="text-green">
                    <Icon name="Folder" className="w-10 h-10" />
                  </div>
                  <div className="flex items-center -mr-2.5 text-light-slate">
                    {project.github && (
                      <a
                        href={project.github}
                        aria-label="GitHub Link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-1.5 relative z-10 hover:text-green transition-colors"
                      >
                        <Icon name="GitHub" className="w-5 h-5" />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        aria-label="External Link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-1.5 relative z-10 hover:text-green transition-colors"
                      >
                        <Icon name="External" className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="mb-2.5">
                    {project.external ? (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lightest-slate text-xl font-semibold hover:text-green transition-colors before:content-[''] before:absolute before:z-0 before:w-full before:h-full before:top-0 before:left-0"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <span className="text-lightest-slate text-xl font-semibold">
                        {project.title}
                      </span>
                    )}
                  </h3>

                  <p className="text-sm text-slate leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech List */}
                <ul className="flex flex-wrap mt-5 p-0 list-none">
                  {project.tech.map((tech, idx) => (
                    <li
                      key={idx}
                      className="font-mono text-xs text-slate mr-4 mb-1 whitespace-nowrap"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {projectsData.length > GRID_LIMIT && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="btn mt-20 mx-auto"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
    </section>
  )
}
