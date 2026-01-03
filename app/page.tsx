"use client"
import dynamic from 'next/dynamic'
import { Suspense, memo } from 'react'
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { Providers } from "@/components/providers"

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

// Memoize components to prevent unnecessary re-renders
const CharacterShowcase = memo(
  () => import('@/components/character-showcase').then(mod => mod.CharacterShowcase)
)

const CharacterInfo = dynamic(
  () => import('@/components/character-info').then(mod => mod.CharacterInfo)
)

const AuthorInfo = dynamic(
  () => import('@/components/author-info').then(mod => mod.AuthorInfo)
)

const MapEntryButton = dynamic(
  () => import('@/components/map-entry-button').then(mod => mod.MapEntryButton)
)

const ScrollHandler = dynamic(
  () => import('@/components/scroll-handler').then(mod => mod.ScrollHandler)
)

export default function Home() {
  return <Providers>
    <Suspense fallback={null}>
      <ScrollHandler />
      <DynamicBackground />
    </Suspense>

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
          <Suspense fallback={<div className="h-[600px] animate-pulse bg-slate-100/50 dark:bg-slate-900/50 rounded-lg"></div>}>
            <CharacterShowcase />
          </Suspense>
        </div>

        {/* Info Section - Two column layout */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-16">
          <Suspense fallback={<div className="h-64 animate-pulse bg-slate-100/50 dark:bg-slate-900/50 rounded-lg"></div>}>
            <CharacterInfo />
          </Suspense>
          <div className="space-y-6 md:space-y-8">
            <Suspense fallback={<div className="h-32 animate-pulse bg-slate-100/50 dark:bg-slate-900/50 rounded-lg"></div>}>
              <AuthorInfo />
            </Suspense>
            <Suspense fallback={<div className="h-24 animate-pulse bg-slate-100/50 dark:bg-slate-900/50 rounded-lg"></div>}>
              <MapEntryButton />
            </Suspense>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Suspense fallback={<div className="w-full h-60 bg-slate-100/50 dark:bg-slate-900/50 animate-pulse"></div>}>
            <PhotoGallery />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={null}>
        <BackToTopButton />
      </Suspense>
    </main>
  </Providers>
}
