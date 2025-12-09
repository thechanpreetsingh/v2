'use client'

import Image from 'next/image'
import { featuredProjects } from '@/lib/featured-data'
import { Icon } from '@/components/icons'

export default function Featured() {
  return (
    <section id="projects" className="section max-w-[1000px] mx-auto px-6 md:px-0">
      <h2 className="numbered-heading">Some Things I've Built</h2>

      <ul className="list-none p-0 m-0">
        {featuredProjects.map((project, i) => {
          const isEven = i % 2 === 0

          return (
            <li
              key={i}
              className="relative mb-24 last:mb-0 md:grid md:grid-cols-12 md:items-center md:gap-2.5"
            >
              {/* Mobile Layout - Image First */}
              <div className="block md:hidden mb-6">
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full rounded overflow-hidden bg-green group"
                >
                  <div className="relative w-full aspect-[16/10] rounded overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={700}
                      height={438}
                      className="w-full h-full object-cover transition-all duration-250"
                    />
                  </div>
                  {/* Mobile overlay - lighter for better visibility */}
                  <div className="absolute top-0 left-0 w-full h-full bg-navy/20 group-hover:bg-navy/0 transition-all duration-250" />
                </a>
              </div>

              {/* Content - Full width on mobile, positioned on desktop */}
              <div
                className={`
                  relative md:row-start-1 md:z-10
                  ${isEven 
                    ? 'md:col-span-7 md:col-start-1 md:text-left' 
                    : 'md:col-span-7 md:col-start-6 md:text-right'
                  }
                `}
              >
                <p className="text-green font-mono text-xs font-normal mb-2">
                  Featured Project
                </p>

                <h3 className="text-lightest-slate text-xl md:text-[28px] font-semibold mb-4 md:mb-5">
                  <a 
                    href={project.external} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-link hover:text-green transition-colors"
                  >
                    {project.title}
                  </a>
                </h3>

                {/* Description Box */}
                <div className="relative md:bg-light-navy md:p-6 md:rounded md:shadow-lg">
                  <p className="text-lg leading-relaxed text-light-slate">
                    {project.description}
                  </p>
                </div>

                {/* Tech List */}
                <ul
                  className={`
                    flex flex-wrap mt-4 md:mt-6 p-0 list-none gap-x-4 md:gap-x-5 gap-y-1
                    ${isEven ? 'justify-start' : 'justify-start md:justify-end'}
                  `}
                >
                  {project.tech.map((tech, idx) => (
                    <li
                      key={idx}
                      className="font-mono text-sm text-light-slate"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div
                  className={`
                    flex items-center mt-4 md:mt-2.5 text-lightest-slate
                    ${isEven 
                      ? 'justify-start' 
                      : 'justify-start md:justify-end'
                    }
                  `}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      aria-label="GitHub Link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2.5 -ml-2.5 hover:text-green transition-colors"
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

              {/* Desktop Image - Hidden on mobile */}
              <div
                className={`
                  hidden md:block md:row-start-1
                  ${isEven 
                    ? 'md:col-span-7 md:col-start-6' 
                    : 'md:col-span-7 md:col-start-1'
                  }
                `}
              >
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full rounded overflow-hidden bg-green group"
                >
                  <div className="relative w-full aspect-[16/10] rounded overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={700}
                      height={438}
                      className="w-full h-full object-cover transition-all duration-250"
                    />
                  </div>
                  {/* Desktop overlay */}
                  <div className="absolute top-0 left-0 w-full h-full bg-navy/30 mix-blend-multiply group-hover:bg-transparent transition-all duration-250" />
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
