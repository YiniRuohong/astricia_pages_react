"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/i18n/use-translation"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const langMap: Record<string, string> = {
    en: "EN",
    zh: "中文",
    ja: "日本語"
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="px-2 md:px-3 py-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
          {langMap[language]}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-slate-200 dark:border-slate-800">
        {Object.entries(langMap).map(([code, label]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code)}
            className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
