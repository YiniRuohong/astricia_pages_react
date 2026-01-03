"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n/use-translation"

export function MapEntryButton() {
  const { t } = useTranslation()
  return (
    <div className="space-y-4">
      <h2 className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Explore</h2>
      <Link
        href="/map"
        className="inline-block px-8 py-4 text-base border border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 hover:bg-slate-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-900 transition-all duration-300 rounded"
      >
        {t("map.enterPage")} →
      </Link>
    </div>
  )
}