"use client"

import { ImageGallery } from "./image-gallery"
import { useTranslation } from "@/lib/i18n/use-translation"
import { TypewriterText } from "@/components/typewriter-text"
import { siteConfig } from "@/config/site.config"

export function CharacterShowcase() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Name */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-2">
          {siteConfig.features.typewriterEffect ? (
            <TypewriterText text={siteConfig.character.name} speed={150} delay={300} />
          ) : (
            <span>{siteConfig.character.name}</span>
          )}
        </h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
          {t("subtitle")}
        </p>
      </div>

      {/* Image Display - Aspect ratio container */}
      <div className="flex justify-center px-4">
        <div className="relative w-full max-w-[400px] md:max-w-[500px] aspect-[5/7]">
          <ImageGallery />
        </div>
      </div>
    </div>
  )
}
