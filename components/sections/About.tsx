'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'Node.js',
    'Express.js',
    'Angular',
    'React',
    'PostgreSQL',
    'Data Structures',
    'MySQL'
  ]

  return (
    <section id="about" className="section max-w-[900px] mx-auto">
      <h2 className="numbered-heading">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 md:gap-14">
        <div className="space-y-5">
          <p className="text-lg leading-relaxed">
            Hello! My name is <strong className="text-lightest-slate">Chanpreet Singh</strong>, and I am a passionate self-taught software developer 
            with expertise in full-stack web development. I specialize in creating innovative, user-focused 
            digital solutions with a strong emphasis on performance, accessibility, and modern design principles.
          </p>

          <p className="text-lg leading-relaxed">
            Fast-forward to today, and I've had the privilege of working at{' '}
            <a 
              href="https://www.tcs.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-link"
            >
              Tata Consultancy Services
            </a> and{' '}
            <a 
              href="https://www.techmahindra.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-link"
            >
              Tech Mahindra
            </a>. 
            My main focus these days is building accessible, inclusive scheduling products and scalable digital
            experiences at{' '}
            <a 
              href="https://www.oncehub.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-link"
            >
              Oncehub
            </a>, 
            serving a variety of enterprise clients worldwide.
          </p>

          <p className="text-lg leading-relaxed">Here are a few technologies I've been working with recently:</p>

          <ul className="grid grid-cols-2 gap-2 mt-6 p-0 list-none">
            {skills.map((skill, i) => (
              <li 
                key={i} 
                className="relative pl-5 font-mono text-sm md:text-base mb-2.5 before:content-['▹'] before:absolute before:left-0 before:text-green before:text-base before:leading-3"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative max-w-[300px] mx-auto md:mx-0 w-full md:w-auto mt-12 md:mt-0">
          <div className="group relative block w-full rounded bg-green shadow-lg hover:bg-transparent transition-all duration-250">
            <div className="relative rounded overflow-hidden">
              <Image
                src="/images/me.jpg"
                alt="Chanpreet Singh"
                width={300}
                height={300}
                className="rounded transition-all duration-250"
                priority
              />
            </div>
            
            {/* Border overlay */}
            <div className="absolute top-5 left-5 w-full h-full border-2 border-green rounded -z-10 transition-all duration-250 group-hover:top-[15px] group-hover:left-[15px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
