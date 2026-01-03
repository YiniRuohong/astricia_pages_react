"use client"

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { ImmersiveMap } from '@/components/immersive-map'
import { LanguageSwitcher } from '@/components/language-switcher'
import { ThemeToggle } from '@/components/theme-toggle'
import { ArrowLeft, Maximize2, Minimize2, X } from 'lucide-react'
import { useTranslation } from '@/lib/i18n/use-translation'
import { useLanguage } from '@/lib/i18n/use-translation'
import { siteConfig } from '@/config/site.config'

export default function MapPage() {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const mapWrapperRef = useRef<HTMLDivElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  const toggleFullscreen = () => {
    if (!mapWrapperRef.current) return
    if (!isFullscreen) {
      mapWrapperRef.current.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Fixed Header */}
      <nav className="fixed top-0 right-0 left-0 z-50 px-4 py-3 md:px-6 md:py-4 flex justify-between items-center bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-400 hover:text-slate-100 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs md:text-sm font-medium">{t("map.backHome")}</span>
        </Link>
        <div className="flex gap-2 md:gap-4">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Map Container - Game style fullscreen */}
      <div className="pt-12 md:pt-16 h-screen">
        <div className="relative w-full h-[calc(100vh-3rem)] md:h-[calc(100vh-4rem)]">
          {/* Map */}
          <div
            ref={mapWrapperRef}
            className="w-full h-full relative"
          >
            <ImmersiveMap />
          </div>

          {/* Floating Control Panel */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button
              onClick={toggleFullscreen}
              className="p-2 bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-slate-300 hover:text-slate-100 hover:bg-slate-800 transition-all rounded-md shadow-xl"
              title={isFullscreen ? t("map.exitFullscreen") : t("map.fullscreen")}
            >
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </button>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
            <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg p-3 shadow-xl max-w-md">
              <h1 className="text-sm md:text-base font-bold text-slate-100 mb-1">
                {siteConfig.map.text.title[language as keyof typeof siteConfig.map.text.title]}
              </h1>
              <p className="text-xs text-slate-400">
                {siteConfig.map.text.subtitle[language as keyof typeof siteConfig.map.text.subtitle]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
