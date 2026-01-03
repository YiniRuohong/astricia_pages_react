"use client"

import { useTranslation } from "@/lib/i18n/use-translation"
import Image from "next/image"

export function CharacterCard() {
  const { t } = useTranslation()

  return (
    <div className="space-y-12">
      {/* Name */}
      <div className="space-y-4">
        <h2 className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Character</h2>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Astricia
        </h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-8">
        <div className="space-y-2">
          <p className="text-sm text-slate-500 dark:text-slate-400">{t("character.age")}</p>
          <p className="text-3xl font-semibold text-slate-900 dark:text-slate-100">18</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-slate-500 dark:text-slate-400">{t("character.height")}</p>
          <p className="text-3xl font-semibold text-slate-900 dark:text-slate-100">165cm</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-slate-500 dark:text-slate-400">{t("character.birthday")}</p>
          <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t("character.birthdayValue")}</p>
        </div>
      </div>

      {/* Traits */}
      <div className="space-y-4">
        <h3 className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Traits</h3>
        <div className="flex flex-wrap gap-3">
          {[
            t("character.traits.beastEars"),
            t("character.traits.staff"),
            t("character.traits.heterochromia"),
            t("character.traits.starMagic")
          ].map((trait, index) => (
            <span
              key={index}
              className="inline-block px-4 py-2 text-sm border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* Likes */}
      <div className="space-y-4">
        <h3 className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Likes</h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li>{t("character.likesItems.ancientStories")}</li>
          <li>{t("character.likesItems.iceFruitPudding")}</li>
          <li>{t("character.likesItems.hotSprings")}</li>
          <li>{t("character.likesItems.fluffyThings")}</li>
        </ul>
      </div>

      {/* Personality */}
      <div className="space-y-4">
        <h3 className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Personality</h3>
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          {t("character.personalityDescription")}
        </p>
      </div>

      {/* Signature */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <Image
          src="https://github.com/YiniRuohong/astricia/blob/main/source/%E7%AD%BE%E5%90%8D.png?raw=true?height=170&width=59.66"
          alt={t("character.signatureAlt")}
          width={250}
          height={100}
          className="h-20 w-auto object-contain opacity-60"
        />
      </div>
    </div>
  )
}
