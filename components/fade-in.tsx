"use client"

import { useEffect, useRef, useState } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function FadeIn({ children, delay = 0, duration = 600, direction = 'up', className = '' }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const directionStyles = {
    up: 'translateY-40',
    down: 'translateY-40',
    left: 'translateX-40',
    right: 'translateX-40'
  }

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : directionStyles[direction],
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  )
}
