"use client"

import { useState, useEffect, useRef } from "react"
import NextImage from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useTranslation } from "@/lib/i18n/use-translation"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site.config"

export function PhotoGallery() {
  const translation = useTranslation()
  const t = translation?.t ?? ((key: string) => key)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})
  const [imageDimensions, setImageDimensions] = useState<Record<string, { width: number; height: number }>>({})
  const galleryRef = useRef<HTMLDivElement>(null)

  // 预加载图片尺寸，避免布局抖动
  useEffect(() => {
    siteConfig.gallery.images.forEach((image) => {
      const img = new window.Image()
      img.crossOrigin = "anonymous"
      img.src = image.src
      img.onload = () => {
        setImageDimensions((prev) => ({
          ...prev,
          [image.src]: { width: img.naturalWidth, height: img.naturalHeight },
        }))
      }
    })
  }, [])

  // 处理图片加载失败
  const handleImageError = (src: string) => {
    console.error(`Failed to load image: ${src}`)
  }

  // 处理图片加载成功
  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => ({ ...prev, [src]: true }))
  }

  // 打开模态框
  const openModal = (src: string) => {
    setSelectedImage(src)
    setIsOpen(true)
  }

  // 关闭模态框
  const closeModal = () => {
    setIsOpen(false)
  }

  // 监听 Esc 键关闭预览弹窗
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section id="gallery" className="py-8 md:py-12 px-4 min-h-screen snap-start" ref={galleryRef}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          {t("gallery.title")}
        </h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {siteConfig.gallery.images.map((image, index) => (
            <div key={index} className="break-inside-avoid">
              <Card
                className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group relative"
                onClick={() => openModal(image.src)}
              >
                <div className="relative w-full">
                  <NextImage
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={500}
                    height={500}
                    className={cn(
                      "w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110",
                      loadedImages[image.src] ? "opacity-100" : "opacity-0",
                    )}
                    loading="lazy"
                    onError={() => handleImageError(image.src)}
                    onLoad={() => handleImageLoad(image.src)}
                    unoptimized
                  />
                  {!loadedImages[image.src] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                      <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent">
          <DialogTitle className="sr-only">{t("gallery.previewTitle")}</DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center">
            {selectedImage && (
              <div className="relative max-w-full max-h-[85vh]">
                <NextImage
                  src={selectedImage || "/placeholder.svg"}
                  alt="Gallery preview"
                  width={1200}
                  height={800}
                  className="object-contain max-h-[85vh] rounded-lg"
                  onClick={(event) => {
                    if (event) event.stopPropagation()
                  }}
                  unoptimized
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
