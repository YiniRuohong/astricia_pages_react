"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/lib/i18n/use-translation"
import { Sparkles, Cake, Ruler, Heart, Smile } from "lucide-react"
import Image from "next/image"

export function CharacterCard() {
  const { t } = useTranslation()

  return (
    <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white text-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <CardTitle className="text-3xl font-bold tracking-wide relative z-10">Astricia</CardTitle>
        <p className="text-purple-100 text-sm mt-2 relative z-10">✨ 星之魔法使者 ✨</p>
      </CardHeader>
      <CardContent className="pt-8 space-y-6">
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 dark:from-purple-900/50 dark:to-purple-800/50 dark:text-purple-100 px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-md transition-all">
            {t("character.traits.beastEars")}
          </Badge>
          <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 dark:from-blue-900/50 dark:to-blue-800/50 dark:text-blue-100 px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-md transition-all">
            {t("character.traits.staff")}
          </Badge>
          <Badge variant="secondary" className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 dark:from-amber-900/50 dark:to-amber-800/50 dark:text-amber-100 px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-md transition-all">
            {t("character.traits.heterochromia")}
          </Badge>
          <Badge variant="secondary" className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 dark:from-indigo-900/50 dark:to-indigo-800/50 dark:text-indigo-100 px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-md transition-all">
            {t("character.traits.starMagic")}
          </Badge>
        </div>

        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-950/30 rounded-xl transition-all hover:shadow-md">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-md">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-semibold text-gray-700 dark:text-gray-200">{t("character.age")}</span>
              <span className="ml-2 text-lg font-bold text-purple-600 dark:text-purple-400">18</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-transparent dark:from-pink-950/30 rounded-xl transition-all hover:shadow-md">
            <div className="p-2 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg shadow-md">
              <Cake className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-semibold text-gray-700 dark:text-gray-200">{t("character.birthday")}</span>
              <span className="ml-2 text-lg font-bold text-pink-600 dark:text-pink-400">{t("character.birthdayValue")}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/30 rounded-xl transition-all hover:shadow-md">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md">
              <Ruler className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-semibold text-gray-700 dark:text-gray-200">{t("character.height")}</span>
              <span className="ml-2 text-lg font-bold text-blue-600 dark:text-blue-400">165cm</span>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 rounded-xl transition-all hover:shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-md">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-gray-700 dark:text-gray-200">{t("character.likes")}</span>
            </div>
            <ul className="grid grid-cols-2 gap-2 ml-1">
              <li className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                {t("character.likesItems.ancientStories")}
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                {t("character.likesItems.iceFruitPudding")}
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                {t("character.likesItems.hotSprings")}
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                {t("character.likesItems.fluffyThings")}
              </li>
            </ul>
          </div>

          <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl transition-all hover:shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-md">
                <Smile className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-gray-700 dark:text-gray-200">{t("character.personality")}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{t("character.personalityDescription")}</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-semibold text-gray-700 dark:text-gray-200">{t("character.signature")}</span>
          </div>
          <div className="rounded-xl overflow-hidden border-2 border-purple-200 dark:border-purple-800 shadow-md hover:shadow-xl transition-all duration-300">
            <Image
              src="https://github.com/YiniRuohong/astricia/blob/main/source/%E7%AD%BE%E5%90%8D.png?raw=true?height=170&width=59.66"
              alt={t("character.signatureAlt")}
              width={250}
              height={100}
              className="w-full object-contain bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
