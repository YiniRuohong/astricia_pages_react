"use client"

import { ImageGallery } from "./image-gallery"
import { useTranslation } from "@/lib/i18n/use-translation"

export function CharacterShowcase() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      {/* Name */}
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-2">
          Astricia
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {t("character.age")} · {t("character.height")}
        </p>
      </div>

      {/* Image Display - Aspect ratio container */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-[500px] aspect-[5/7]">
          <ImageGallery />
        </div>
      </div>
    </div>
  )
}
