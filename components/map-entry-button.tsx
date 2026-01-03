"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n/use-translation"
import { Map } from "lucide-react"

export function MapEntryButton() {
  const { t } = useTranslation()
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-100 dark:border-indigo-900/50">
      <Link href="/map" className="block">
        <button className="w-full group relative py-4 px-6 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="flex items-center justify-center gap-3 relative">
            <Map className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span>{t("map.enterPage")}</span>
          </div>
        </button>
      </Link>
    </div>
  )
}