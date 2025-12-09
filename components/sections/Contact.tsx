'use client'

import { siteConfig } from '@/lib/config'

export default function Contact() {
  return (
    <section id="contact" className="section max-w-[600px] mx-auto text-center">
      <h2 className="numbered-heading">What's Next?</h2>
      
      <h2 className="text-5xl md:text-6xl font-semibold text-lightest-slate mb-5">
        Get In Touch
      </h2>

      <p className="mb-12">
        I'm currently looking for new opportunities, and my inbox is always open. 
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <a 
        href={`mailto:${siteConfig.email}`}
        className="btn big-button inline-block"
      >
        Say Hello
      </a>
    </section>
  )
}
