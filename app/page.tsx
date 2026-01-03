"use client"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { CharacterCard } from "@/components/character-card"
const ImageGallery = dynamic(
  () => import('@/components/image-gallery').then(mod => mod.ImageGallery),
  { ssr: false, loading: () => <div className="h-60 bg-slate-100/50 dark:bg-slate-900/50 animate-pulse rounded-lg mb-6 border border-slate-200 dark:border-slate-800"></div> }
)
import { AuthorInfo } from "@/components/author-info"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Providers } from "@/components/providers"
const PhotoGallery = dynamic(
  () => import('@/components/photo-gallery').then(mod => mod.PhotoGallery),
  { ssr: false, loading: () => <div className="h-60 bg-slate-100/50 dark:bg-slate-900/50 animate-pulse rounded-lg mb-6 border border-slate-200 dark:border-slate-800"></div> }
)
import { ScrollHandler } from "@/components/scroll-handler"
import { ThemeToggle } from "@/components/theme-toggle"
import { BackToTopButton } from "@/components/back-to-top-button"
import { MapEntryButton } from "@/components/map-entry-button"
import { DynamicBackground } from "@/components/dynamic-background"

export default function Home() {
  return <Providers>
    <ScrollHandler />
    <DynamicBackground />
    <main className="min-h-screen bg-slate-50/80 dark:bg-slate-950/80 py-8 px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col space-y-8">
        {/* Minimal Top Bar */}
        <div className="flex justify-end gap-4">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Character Card - Left Side */}
          <div className="lg:col-span-4">
            <Suspense fallback={<div className="h-96 bg-slate-100/50 dark:bg-slate-900/50 animate-pulse rounded-lg border border-slate-200 dark:border-slate-800"></div>}>
              <CharacterCard />
            </Suspense>
          </div>

          {/* Right Side Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Image Gallery */}
            <Suspense fallback={<div className="h-80 bg-slate-100/50 dark:bg-slate-900/50 animate-pulse rounded-lg border border-slate-200 dark:border-slate-800"></div>}>
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

        {/* Photo Gallery Section */}
        <section className="max-w-7xl mx-auto">
          <Suspense fallback={<div className="h-60 bg-slate-100/50 dark:bg-slate-900/50 animate-pulse rounded-lg border border-slate-200 dark:border-slate-800"></div>}>
            <PhotoGallery />
          </Suspense>
        </section>
      </div>

      <BackToTopButton />
    </main>
  </Providers>
}
