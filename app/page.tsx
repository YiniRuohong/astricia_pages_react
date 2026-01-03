"use client"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { CharacterShowcase } from "@/components/character-showcase"
import { CharacterInfo } from "@/components/character-info"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Providers } from "@/components/providers"
import { ScrollHandler } from "@/components/scroll-handler"
import { ThemeToggle } from "@/components/theme-toggle"
import { AuthorInfo } from "@/components/author-info"
import { MapEntryButton } from "@/components/map-entry-button"

// Dynamically import heavy components for better performance
const PhotoGallery = dynamic(
  () => import('@/components/photo-gallery').then(mod => mod.PhotoGallery),
  { ssr: false, loading: () => <div className="w-full h-60 bg-slate-100/50 dark:bg-slate-900/50 animate-pulse"></div> }
)

const DynamicBackground = dynamic(
  () => import('@/components/dynamic-background').then(mod => mod.DynamicBackground),
  { ssr: false }
)

const BackToTopButton = dynamic(
  () => import('@/components/back-to-top-button').then(mod => mod.BackToTopButton),
  { ssr: false }
)

export default function Home() {
  return <Providers>
    <ScrollHandler />
    <DynamicBackground />

    <main className="min-h-screen">
      {/* Fixed Top Bar */}
      <nav className="fixed top-0 right-0 left-0 z-50 px-4 py-3 md:px-8 md:py-6 flex justify-end items-center gap-4 md:gap-6">
        <ThemeToggle />
        <LanguageSwitcher />
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-12 md:pt-24 md:pb-16">
        {/* Character Showcase - Reference shiro.page style */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
          <CharacterShowcase />
        </div>

        {/* Info Section - Two column layout */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-16">
          <CharacterInfo />
          <div className="space-y-6 md:space-y-8">
            <AuthorInfo />
            <MapEntryButton />
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Suspense fallback={<div className="w-full h-60 bg-slate-100/50 dark:bg-slate-900/50 animate-pulse"></div>}>
            <PhotoGallery />
          </Suspense>
        </div>
      </div>

      <BackToTopButton />
    </main>
  </Providers>
}
