"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n/use-translation"

export function MapEntryButton() {
  const { t } = useTranslation()
  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-xs md:text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
        Explore
      </h2>
      <Link
        href="/map"
        className="inline-block px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base border border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 hover:bg-slate-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-900 transition-all duration-300 rounded"
      >
        {t("map.enterPage")} →
      </Link>
    </div>
  )
}