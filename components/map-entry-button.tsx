"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n/use-translation"

export function MapEntryButton() {
  const { t } = useTranslation()
  return (
    <div className="border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg p-4">
      <Link href="/map" className="block">
        <button className="w-full py-3 px-4 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors rounded border border-slate-200 dark:border-slate-700">
          {t("map.enterPage")}
        </button>
      </Link>
    </div>
  )
}