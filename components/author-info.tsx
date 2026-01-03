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
    <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-purple-50/50 dark:from-slate-900 dark:to-purple-950/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>

      <CardContent className="p-8 relative">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <Avatar className="h-20 w-20 border-4 border-white dark:border-slate-800 relative shadow-xl">
              <AvatarImage src="https://cdn.sa.net/2024/10/24/Knmr5dXCQFycqDp.jpg?height=64&width=64" alt={t("author.name")} className="object-cover" />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white text-xl font-bold">AU</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-1 text-center sm:text-left space-y-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {t("author.name")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t("author.description")}</p>
          </div>

          <div className="flex gap-3 mt-4 sm:mt-0">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="h-12 w-12 rounded-full border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Link href="https://blog.atago.moe" target="_blank" aria-label={t("author.blog")}>
                <Globe className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="h-12 w-12 rounded-full border-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Link href="https://x.com/Yini_Ruohong" target="_blank" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
