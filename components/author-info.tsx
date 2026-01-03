"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslation } from "@/lib/i18n/use-translation"
import Link from "next/link"

export function AuthorInfo() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <h2 className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
        Creator
      </h2>

      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12 border border-slate-200 dark:border-slate-800">
          <AvatarImage src="https://cdn.sa.net/2024/10/24/Knmr5dXCQFycqDp.jpg" alt={t("author.name")} />
          <AvatarFallback className="bg-slate-900 text-white">AU</AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-1">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {t("author.name")}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {t("author.description")}
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          href="https://blog.atago.moe"
          target="_blank"
          className="px-4 py-2 text-sm border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-900 dark:hover:border-slate-100 transition-colors rounded"
        >
          Blog
        </Link>
        <Link
          href="https://x.com/Yini_Ruohong"
          target="_blank"
          className="px-4 py-2 text-sm border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-900 dark:hover:border-slate-100 transition-colors rounded"
        >
          Twitter
        </Link>
      </div>
    </div>
  )
}
