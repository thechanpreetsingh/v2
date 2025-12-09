'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Social from '@/components/Social'
import Email from '@/components/Email'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Jobs from '@/components/sections/Jobs'
import Featured from '@/components/sections/Featured'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  if (isLoading) {
    return <Loader finishLoading={() => setIsLoading(false)} />
  }

  return (
    <>
      <Nav />
      <Social />
      <Email />
      
      <div className="container-custom">
        <main className="counter-reset fill-height" id="content">
          <Hero />
          <About />
          <Jobs />
          <Featured />
          <Projects />
          <Contact />
        </main>
      </div>
      
      <Footer />
    </>
  )
}
