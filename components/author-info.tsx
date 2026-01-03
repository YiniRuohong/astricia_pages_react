"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n/use-translation"
import { Globe, Twitter } from "lucide-react"
import Link from "next/link"

export function AuthorInfo() {
  const { t } = useTranslation()

  return (
    <Card className="border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 shadow-lg hover:shadow-xl">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Avatar className="h-16 w-16 border-2 border-slate-200 dark:border-slate-700">
            <AvatarImage src="https://cdn.sa.net/2024/10/24/Knmr5dXCQFycqDp.jpg?height=64&width=64" alt={t("author.name")} />
            <AvatarFallback className="bg-slate-800 text-white font-bold">AU</AvatarFallback>
          </Avatar>

          <div className="flex-1 text-center sm:text-left space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              {t("author.name")}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{t("author.description")}</p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-10 w-10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Link href="https://blog.atago.moe" target="_blank" aria-label={t("author.blog")}>
                <Globe className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-10 w-10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Link href="https://x.com/Yini_Ruohong" target="_blank" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
