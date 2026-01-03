"use client"

import { useState } from "react"
import { useTranslation } from "@/lib/i18n/use-translation"
import Image from "next/image"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

export function ImageGallery() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState("casual")
  const [casualVariant, setCasualVariant] = useState<"with" | "without">("with")

  const CASUAL_WITHOUT_CLOAK = "https://cdn.sa.net/2025/05/18/EGu6CRHASBrwoLl.png"
  const CASUAL_WITH_CLOAK = "https://cdn.sa.net/2025/05/18/y4EfhVPa6sqxtm9.png"
  const WINTER_IMAGE = "https://cdn.sa.net/2024/10/23/Rt6CAwJgHL19hiu.png"

  const getCurrentImage = () => {
    if (activeTab === "casual") {
      return casualVariant === "with" ? CASUAL_WITH_CLOAK : CASUAL_WITHOUT_CLOAK
    }
    return WINTER_IMAGE
  }

  return (
    <div className="w-full h-full">
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative w-full h-full cursor-zoom-in">
            <Image
              src={getCurrentImage()}
              alt={activeTab === "casual" ? t("gallery.casualAlt") : t("gallery.winterAlt")}
              fill
              className="object-contain"
              sizes="(max-width: 500px) 100vw, 500px"
              priority
            />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white p-4 flex justify-center items-center max-w-4xl">
          <Image
            src={getCurrentImage()}
            alt={activeTab === "casual" ? t("gallery.casualAlt") : t("gallery.winterAlt")}
            width={800}
            height={1200}
            className="object-contain max-w-full max-h-[90vh]"
          />
        </DialogContent>
      </Dialog>

      {/* Version Selector - Fixed at bottom */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
        {/* Tab Selector */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("casual")}
            className={`flex-1 px-4 py-2 text-sm rounded transition-colors ${
              activeTab === "casual"
                ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
                : "bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            {t("gallery.casual")}
          </button>
          <button
            onClick={() => setActiveTab("winter")}
            className={`flex-1 px-4 py-2 text-sm rounded transition-colors ${
              activeTab === "winter"
                ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
                : "bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            {t("gallery.winter")}
          </button>
        </div>

        {/* Casual Variant Selector */}
        {activeTab === "casual" && (
          <div className="flex gap-2">
            <button
              onClick={() => setCasualVariant("with")}
              className={`flex-1 px-4 py-2 text-xs rounded transition-colors ${
                casualVariant === "with"
                  ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
                  : "bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              {t("gallery.withCloak")}
            </button>
            <button
              onClick={() => setCasualVariant("without")}
              className={`flex-1 px-4 py-2 text-xs rounded transition-colors ${
                casualVariant === "without"
                  ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
                  : "bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              {t("gallery.withoutCloak")}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

