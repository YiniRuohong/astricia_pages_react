"use client"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { CharacterCard } from "@/components/character-card"
const ImageGallery = dynamic(
  () => import('@/components/image-gallery').then(mod => mod.ImageGallery),
  { ssr: false, loading: () => <div className="h-60 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 animate-pulse rounded-2xl mb-6" /> }
)
import { AuthorInfo } from "@/components/author-info"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Providers } from "@/components/providers"
const PhotoGallery = dynamic(
  () => import('@/components/photo-gallery').then(mod => mod.PhotoGallery),
  { ssr: false, loading: () => <div className="h-60 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 animate-pulse rounded-2xl mb-6" /> }
)
import { ScrollIndicator } from "@/components/scroll-indicator"
import { ScrollHandler } from "@/components/scroll-handler"
import { ThemeToggle } from "@/components/theme-toggle"
import { BackToTopButton } from "@/components/back-to-top-button"
import { MapEntryButton } from "@/components/map-entry-button"

export default function Home() {
  return <Providers>
    <ScrollHandler />
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 dark:from-slate-950 dark:via-purple-950/20 dark:to-indigo-950/20 py-8 px-4 md:px-6 lg:px-8 transition-colors duration-500">
      <div className="mx-auto max-w-7xl flex flex-col space-y-10">
        <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 rounded-2xl shadow-lg p-4 flex justify-end gap-3 transition-all duration-300">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Character Card - Left Side */}
          <div className="lg:col-span-4">
            <Suspense fallback={<div className="h-96 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 animate-pulse rounded-3xl shadow-xl" />}>
              <CharacterCard />
            </Suspense>
          </div>

          {/* Right Side Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Image Gallery */}
            <Suspense fallback={<div className="h-80 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 animate-pulse rounded-3xl shadow-xl" />}>
              <ImageGallery />
            </Suspense>

            {/* Map Entry & Author Info Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <MapEntryButton />
              </div>
              <div className="md:col-span-2">
                <AuthorInfo />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <section className="mt-12 max-w-7xl mx-auto">
        <Suspense fallback={<div className="h-60 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 animate-pulse rounded-3xl shadow-xl" />}>
          <PhotoGallery />
        </Suspense>
      </section>

      <BackToTopButton />
    </main>
  </Providers>
}
