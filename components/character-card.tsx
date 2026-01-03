"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/lib/i18n/use-translation"
import { TypewriterText } from "@/components/typewriter-text"
import Image from "next/image"
import { useEffect, useState } from "react"

export function CharacterCard() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <Card className="border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 shadow-lg hover:shadow-xl">
      <CardContent className="p-6 space-y-6">
        {/* Name with Typewriter Effect */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {isVisible && <TypewriterText text="Astricia" speed={150} delay={300} />}
          </h1>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        </div>

        {/* Traits - Minimal Badges */}
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge variant="outline" className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
            {t("character.traits.beastEars")}
          </Badge>
          <Badge variant="outline" className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
            {t("character.traits.staff")}
          </Badge>
          <Badge variant="outline" className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
            {t("character.traits.heterochromia")}
          </Badge>
          <Badge variant="outline" className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
            {t("character.traits.starMagic")}
          </Badge>
        </div>

        {/* Info Section - Clean Grid */}
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
            <span className="text-sm text-slate-600 dark:text-slate-400">{t("character.age")}</span>
            <span className="font-mono text-lg text-slate-900 dark:text-slate-100">18</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
            <span className="text-sm text-slate-600 dark:text-slate-400">{t("character.birthday")}</span>
            <span className="font-mono text-sm text-slate-900 dark:text-slate-100">{t("character.birthdayValue")}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
            <span className="text-sm text-slate-600 dark:text-slate-400">{t("character.height")}</span>
            <span className="font-mono text-lg text-slate-900 dark:text-slate-100">165cm</span>
          </div>
        </div>

        {/* Likes - Minimal List */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("character.likes")}</h3>
          <ul className="space-y-1">
            <li className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
              <span className="w-1 h-1 bg-indigo-500"></span>
              {t("character.likesItems.ancientStories")}
            </li>
            <li className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
              <span className="w-1 h-1 bg-indigo-500"></span>
              {t("character.likesItems.iceFruitPudding")}
            </li>
            <li className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
              <span className="w-1 h-1 bg-indigo-500"></span>
              {t("character.likesItems.hotSprings")}
            </li>
            <li className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
              <span className="w-1 h-1 bg-indigo-500"></span>
              {t("character.likesItems.fluffyThings")}
            </li>
          </ul>
        </div>

        {/* Personality - Clean Text */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("character.personality")}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {t("character.personalityDescription")}
          </p>
        </div>

        {/* Signature Image */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
            <Image
              src="https://github.com/YiniRuohong/astricia/blob/main/source/%E7%AD%BE%E5%90%8D.png?raw=true?height=170&width=59.66"
              alt={t("character.signatureAlt")}
              width={250}
              height={100}
              className="w-full object-contain"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
