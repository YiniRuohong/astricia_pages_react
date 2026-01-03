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
          variant="outline"
          size="sm"
          className="gap-2 h-10 px-4 rounded-full border-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
        >
          <Languages className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          <span className="text-sm">{language === "zh" ? "中文" : language === "ja" ? "日本語" : "English"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl border-2 shadow-xl">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className="cursor-pointer rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("zh")}
          className="cursor-pointer rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
        >
          中文
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("ja")}
          className="cursor-pointer rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
        >
          日本語
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
