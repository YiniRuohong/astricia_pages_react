"use client"

import { useTranslation } from "@/lib/i18n/use-translation"
import Image from "next/image"
import { siteConfig } from "@/config/site.config"

export function CharacterInfo() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Basic Info */}
      <div className="space-y-3 md:space-y-4">
        <h2 className="text-xs md:text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
          Profile
        </h2>

        <dl className="space-y-2 md:space-y-3">
          <div className="flex justify-between items-center">
            <dt className="text-xs md:text-sm text-slate-600 dark:text-slate-400">{t("character.birthday")}</dt>
            <dd className="text-sm md:text-base font-medium text-slate-900 dark:text-slate-100">{t("character.birthdayValue")}</dd>
          </div>
        </dl>
      </div>

      {/* Traits */}
      <div className="space-y-3 md:space-y-4">
        <h2 className="text-xs md:text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
          Traits
        </h2>
        <ul className="space-y-1.5 md:space-y-2">
          <li className="flex items-center gap-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
            {t("character.traits.beastEars")}
          </li>
          <li className="flex items-center gap-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
            {t("character.traits.staff")}
          </li>
          <li className="flex items-center gap-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
            {t("character.traits.heterochromia")}
          </li>
          <li className="flex items-center gap-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
            {t("character.traits.starMagic")}
          </li>
        </ul>
      </div>

      {/* Likes */}
      <div className="space-y-3 md:space-y-4">
        <h2 className="text-xs md:text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
          Likes
        </h2>
        <ul className="space-y-1.5 md:space-y-2">
          <li className="text-xs md:text-sm text-slate-700 dark:text-slate-300">· {t("character.likesItems.ancientStories")}</li>
          <li className="text-xs md:text-sm text-slate-700 dark:text-slate-300">· {t("character.likesItems.iceFruitPudding")}</li>
          <li className="text-xs md:text-sm text-slate-700 dark:text-slate-300">· {t("character.likesItems.hotSprings")}</li>
          <li className="text-xs md:text-sm text-slate-700 dark:text-slate-300">· {t("character.likesItems.fluffyThings")}</li>
        </ul>
      </div>

      {/* Personality */}
      <div className="space-y-3 md:space-y-4">
        <h2 className="text-xs md:text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
          Personality
        </h2>
        <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {t("character.personalityDescription")}
        </p>
      </div>

      {/* Signature */}
      <div className="pt-3 md:pt-4 border-t border-slate-200 dark:border-slate-800">
        <Image
          src={siteConfig.character.signatureImage}
          alt={t("character.signatureAlt")}
          width={250}
          height={100}
          className="h-12 md:h-16 w-auto object-contain opacity-60"
        />
      </div>
    </div>
  )
}
