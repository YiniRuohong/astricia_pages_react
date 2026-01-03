"use client"

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

export function TypewriterText({ text, speed = 100, delay = 0, className = "" }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }
    }, delay > 0 && currentIndex === 0 ? delay : speed)

    return () => clearTimeout(timeout)
  }, [currentIndex, text, speed, delay])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
