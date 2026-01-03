"use client"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { CharacterInfo } from "@/components/character-info"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Providers } from "@/components/providers"
const PhotoGallery = dynamic(
  () => import('@/components/photo-gallery').then(mod => mod.PhotoGallery),
  { ssr: false, loading: () => <div className="w-full h-60 bg-slate-100/50 dark:bg-slate-900/50 animate-pulse"></div> }
)
import { ScrollHandler } from "@/components/scroll-handler"
import { ThemeToggle } from "@/components/theme-toggle"
import { BackToTopButton } from "@/components/back-to-top-button"
import { MapEntryButton } from "@/components/map-entry-button"
import { DynamicBackground } from "@/components/dynamic-background"
import { AuthorInfo } from "@/components/author-info"
import { CharacterShowcase } from "@/components/character-showcase"

export default function Home() {
  return <Providers>
    <ScrollHandler />
    <DynamicBackground />

    <main className="min-h-screen">
      {/* Fixed Top Bar */}
      <nav className="fixed top-0 right-0 left-0 z-50 px-8 py-6 flex justify-end items-center gap-6">
        <ThemeToggle />
        <LanguageSwitcher />
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16">
        {/* Character Showcase - Reference shiro.page style */}
        <div className="max-w-7xl mx-auto px-8 mb-16">
          <CharacterShowcase />
        </div>

        {/* Info Section - Two column layout */}
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <CharacterInfo />
          <div className="space-y-8">
            <AuthorInfo />
            <MapEntryButton />
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="max-w-7xl mx-auto px-8">
          <Suspense fallback={<div className="w-full h-60 bg-slate-100/50 dark:bg-slate-900/50 animate-pulse"></div>}>
            <PhotoGallery />
          </Suspense>
        </div>
      </div>

      <BackToTopButton />
    </main>
  </Providers>
}
