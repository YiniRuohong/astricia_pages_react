"use client"

import { TypewriterText } from "./typewriter-text"

interface HeroSectionProps {
  title: string
  subtitle: string
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="text-center space-y-8 px-4">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-slate-900 dark:text-slate-100">
          <TypewriterText text={title} speed={100} delay={200} />
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="w-px h-24 bg-gradient-to-b from-indigo-500 to-transparent mx-auto"></div>
      </div>
    </section>
  )
}
