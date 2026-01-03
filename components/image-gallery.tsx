"use client"

import { useState, useEffect, useMemo } from "react"
import { useTranslation } from "@/lib/i18n/use-translation"
import Image from "next/image"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

const CASUAL_WITHOUT_CLOAK = "https://cdn.sa.net/2025/05/18/EGu6CRHASBrwoLl.png"
const CASUAL_WITH_CLOAK = "https://cdn.sa.net/2025/05/18/y4EfhVPa6sqxtm9.png"
const WINTER_IMAGE = "https://cdn.sa.net/2026/01/03/bvU4FnoOJCfPieZ.png"

export function ImageGallery() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<"casual" | "winter">("casual")
  const [casualVariant, setCasualVariant] = useState<"with" | "without">("with")
  const [isTransitioning, setIsTransitioning] = useState(false)

  // 使用 useMemo 确保图片地址总是有效的
  const currentImage = useMemo(() => {
    if (activeTab === "casual") {
      return casualVariant === "with" ? CASUAL_WITH_CLOAK : CASUAL_WITHOUT_CLOAK
    }
    return WINTER_IMAGE
  }, [activeTab, casualVariant])

  // 图片切换动画
  useEffect(() => {
    setIsTransitioning(true)
    const timeout = setTimeout(() => {
      setIsTransitioning(false)
    }, 200)
    return () => clearTimeout(timeout)
  }, [activeTab, casualVariant])

  const handleTabChange = (tab: "casual" | "winter") => {
    if (tab !== activeTab) {
      setActiveTab(tab)
    }
  }

  const handleVariantChange = (variant: "with" | "without") => {
    if (variant !== casualVariant) {
      setCasualVariant(variant)
    }
  }

  return (
    <div className="w-full h-full">
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative w-full h-full cursor-zoom-in">
            <Image
              src={currentImage}
              alt={activeTab === "casual" ? t("gallery.casualAlt") : t("gallery.winterAlt")}
              fill
              className={`object-contain transition-opacity duration-200 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
              sizes="(max-width: 500px) 100vw, 500px"
              priority
            />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white p-4 flex justify-center items-center max-w-4xl">
          <Image
            src={currentImage}
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
            onClick={() => handleTabChange("casual")}
            className={`flex-1 px-4 py-2 text-sm rounded transition-all duration-200 ${
              activeTab === "casual"
                ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
                : "bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            {t("gallery.casual")}
          </button>
          <button
            onClick={() => handleTabChange("winter")}
            className={`flex-1 px-4 py-2 text-sm rounded transition-all duration-200 ${
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
              onClick={() => handleVariantChange("with")}
              className={`flex-1 px-4 py-2 text-xs rounded transition-all duration-200 ${
                casualVariant === "with"
                  ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
                  : "bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              {t("gallery.withCloak")}
            </button>
            <button
              onClick={() => handleVariantChange("without")}
              className={`flex-1 px-4 py-2 text-xs rounded transition-all duration-200 ${
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

