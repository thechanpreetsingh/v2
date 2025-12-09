'use client'

import Image from 'next/image'
import { featuredProjects } from '@/lib/featured-data'
import { Icon } from '@/components/icons'

export default function Featured() {
  return (
    <section id="projects" className="section max-w-[1000px] mx-auto">
      <h2 className="numbered-heading">Some Things I've Built</h2>

      <ul className="list-none p-0 m-0">
        {featuredProjects.map((project, i) => {
          const isEven = i % 2 === 0

          return (
            <li
              key={i}
              className="relative grid grid-cols-12 items-center gap-2.5 mb-24 last:mb-0 md:shadow-lg md:shadow-navy-shadow/30"
            >
              {/* Content */}
              <div
                className={`
                  relative col-span-12 row-start-1 p-10 md:p-0
                  ${isEven ? 'md:col-span-7 md:col-start-1 md:text-left' : 'md:col-span-7 md:col-start-6 md:text-right'}
                `}
              >
                <p className="my-2.5 text-green font-mono text-xs font-normal">
                  Featured Project
                </p>

                <h3 className="text-lightest-slate text-2xl md:text-[28px] font-semibold mb-5">
                  <a href={project.external} target="_blank" rel="noopener noreferrer" className="inline-link">
                    {project.title}
                  </a>
                </h3>

                <div className="relative z-[2] p-6 rounded bg-light-navy shadow-lg md:bg-light-navy">
                  <p className="text-sm md:text-base">{project.description}</p>
                </div>

                <ul
                  className={`
                    flex flex-wrap relative z-[2] mt-6 p-0 list-none
                    ${isEven ? 'justify-start' : 'md:justify-end justify-start'}
                  `}
                >
                  {project.tech.map((tech, idx) => (
                    <li
                      key={idx}
                      className={`
                        font-mono text-xs whitespace-nowrap mb-1.5
                        ${isEven ? 'mr-5 md:mr-5' : 'mr-5 md:mr-0 md:ml-5'}
                      `}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div
                  className={`
                    flex items-center relative mt-2.5 -ml-2.5 text-lightest-slate
                    ${isEven ? 'justify-start md:justify-start' : 'justify-start md:justify-end md:-ml-0 md:-mr-2.5'}
                  `}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      aria-label="GitHub Link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2.5 hover:text-green transition-colors"
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
                      className="flex items-center justify-center p-2.5 hover:text-green transition-colors"
                    >
                      <Icon name="External" className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Image */}
              <div
                className={`
                  relative col-span-12 row-start-1 h-full opacity-25 md:opacity-100
                  ${isEven ? 'md:col-span-7 md:col-start-6' : 'md:col-span-7 md:col-start-1'}
                `}
              >
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full h-full rounded bg-green group"
                >
                  <div className="relative w-full h-full rounded overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={700}
                      height={438}
                      className="rounded object-cover w-full h-auto transition-all duration-250"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute top-0 left-0 w-full h-full bg-navy opacity-30 mix-blend-normal group-hover:opacity-0 transition-opacity duration-250 rounded" />
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
