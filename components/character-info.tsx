"use client"

import { useTranslation } from "@/lib/i18n/use-translation"
import Image from "next/image"

export function CharacterInfo() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      {/* Basic Info */}
      <div className="space-y-4">
        <h2 className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
          Profile
        </h2>

        <dl className="space-y-3">
          <div className="flex justify-between items-center">
            <dt className="text-sm text-slate-600 dark:text-slate-400">{t("character.birthday")}</dt>
            <dd className="text-base font-medium text-slate-900 dark:text-slate-100">{t("character.birthdayValue")}</dd>
          </div>

          <div className="flex justify-between items-center">
            <dt className="text-sm text-slate-600 dark:text-slate-400">{t("character.traits.beastEars")}</dt>
            <dd className="text-base font-medium text-slate-900 dark:text-slate-100">✓</dd>
          </div>

          <div className="flex justify-between items-center">
            <dt className="text-sm text-slate-600 dark:text-slate-400">{t("character.traits.staff")}</dt>
            <dd className="text-base font-medium text-slate-900 dark:text-slate-100">✓</dd>
          </div>

          <div className="flex justify-between items-center">
            <dt className="text-sm text-slate-600 dark:text-slate-400">{t("character.traits.heterochromia")}</dt>
            <dd className="text-base font-medium text-slate-900 dark:text-slate-100">✓</dd>
          </div>

          <div className="flex justify-between items-center">
            <dt className="text-sm text-slate-600 dark:text-slate-400">{t("character.traits.starMagic")}</dt>
            <dd className="text-base font-medium text-slate-900 dark:text-slate-100">✓</dd>
          </div>
        </dl>
      </div>

      {/* Likes */}
      <div className="space-y-4">
        <h2 className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
          Likes
        </h2>
        <ul className="space-y-2">
          <li className="text-sm text-slate-700 dark:text-slate-300">· {t("character.likesItems.ancientStories")}</li>
          <li className="text-sm text-slate-700 dark:text-slate-300">· {t("character.likesItems.iceFruitPudding")}</li>
          <li className="text-sm text-slate-700 dark:text-slate-300">· {t("character.likesItems.hotSprings")}</li>
          <li className="text-sm text-slate-700 dark:text-slate-300">· {t("character.likesItems.fluffyThings")}</li>
        </ul>
      </div>

      {/* Personality */}
      <div className="space-y-4">
        <h2 className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
          Personality
        </h2>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {t("character.personalityDescription")}
        </p>
      </div>

      {/* Signature */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
        <Image
          src="https://github.com/YiniRuohong/astricia/blob/main/source/%E7%AD%BE%E5%90%8D.png?raw=true?height=170&width=59.66"
          alt={t("character.signatureAlt")}
          width={250}
          height={100}
          className="h-16 w-auto object-contain opacity-60"
        />
      </div>
    </div>
  )
}
