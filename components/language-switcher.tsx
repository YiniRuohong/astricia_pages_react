"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/i18n/use-translation"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 h-10 px-4 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium"
        >
          <Languages className="h-4 w-4" />
          <span className="text-sm">{language === "zh" ? "中文" : language === "ja" ? "日本語" : "EN"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-slate-200 dark:border-slate-800">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          EN
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("zh")}
          className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          中文
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("ja")}
          className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          日本語
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
