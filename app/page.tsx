"use client"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { CharacterCard } from "@/components/character-card"
const ImageGallery = dynamic(
  () => import('@/components/image-gallery').then(mod => mod.ImageGallery),
  { ssr: false, loading: () => <div className="w-full h-80 bg-slate-100/50 dark:bg-slate-900/50 animate-pulse"></div> }
)
import { AuthorInfo } from "@/components/author-info"
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
import { HeroSection } from "@/components/hero-section"
import { FadeIn } from "@/components/fade-in"
import { useTranslation } from "@/lib/i18n/use-translation"

export default function Home() {
  const { t } = useTranslation()

  return <Providers>
    <ScrollHandler />
    <DynamicBackground />

    <main className="min-h-screen">
      {/* Fixed Top Bar */}
      <nav className="fixed top-0 right-0 left-0 z-50 px-8 py-6 flex justify-end items-center gap-6">
        <ThemeToggle />
        <LanguageSwitcher />
      </nav>

      {/* Hero Section */}
      <HeroSection
        title="Astricia"
        subtitle="星之魔法使者 · Star Messenger"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 pb-24 space-y-32">
        {/* Character Section */}
        <FadeIn direction="up" delay={200}>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Suspense fallback={<div className="w-full h-96 bg-slate-100/50 dark:bg-slate-900/50 animate-pulse"></div>}>
                <ImageGallery />
              </Suspense>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <Suspense fallback={<div className="w-full h-96 bg-slate-100/50 dark:bg-slate-900/50 animate-pulse"></div>}>
                <CharacterCard />
              </Suspense>
            </div>
          </section>
        </FadeIn>

        {/* Map & Author Section */}
        <FadeIn direction="up" delay={400}>
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <MapEntryButton />
            </div>
            <div className="lg:col-span-2">
              <AuthorInfo />
            </div>
          </section>
        </FadeIn>

        {/* Photo Gallery Section */}
        <FadeIn direction="up" delay={600}>
          <section>
            <Suspense fallback={<div className="w-full h-60 bg-slate-100/50 dark:bg-slate-900/50 animate-pulse"></div>}>
              <PhotoGallery />
            </Suspense>
          </section>
        </FadeIn>
      </div>

      <BackToTopButton />
    </main>
  </Providers>
}
