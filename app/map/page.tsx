"use client"

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { ImmersiveMap } from '@/components/immersive-map'
import { LanguageSwitcher } from '@/components/language-switcher'
import { ThemeToggle } from '@/components/theme-toggle'
import { useTranslation } from '@/lib/i18n/use-translation'
import { ArrowLeft, Maximize2, Minimize2 } from 'lucide-react'
import { BackToTopButton } from '@/components/back-to-top-button'

export default function MapPage() {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  const toggleFullscreen = () => {
    if (!containerRef.current) return
    if (!isFullscreen) {
      containerRef.current.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <nav className="fixed top-0 right-0 left-0 z-50 px-8 py-6 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm font-medium">Home</span>
        </Link>
        <div className="flex gap-4">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Map Container */}
      <div className="pt-24 pb-16 px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-2">
              World Map
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Drag to pan · Scroll to zoom
            </p>
          </div>

          {/* Map Controls */}
          <div className="mb-6 flex justify-end gap-2">
            <button
              onClick={toggleFullscreen}
              className="px-4 py-2 text-sm border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded flex items-center gap-2"
            >
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              {isFullscreen ? 'Exit' : 'Fullscreen'}
            </button>
          </div>

          {/* Map */}
          <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <div className="w-full h-[70vh]">
              <ImmersiveMap />
            </div>
          </div>
        </div>
      </div>

      <BackToTopButton />
    </div>
  )
}
