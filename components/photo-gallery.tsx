"use client"

import { useState, useEffect, useRef } from "react"
import NextImage from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useTranslation } from "@/lib/i18n/use-translation"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// 图片资源列表
const GALLERY_IMAGES = [
  { src: "https://cdn.sa.net/2024/10/24/Djz3NSiOVaWq97X.jpg", alt: "Astricia illustration 1" },
  { src: "https://cdn.sa.net/2024/10/24/ENyHIVXKmPBQrnh.jpg", alt: "Astricia illustration 2" },
  { src: "https://cdn.sa.net/2024/10/24/TVI5XFuBNC8Hrxe.jpg", alt: "Astricia illustration 3" },
  { src: "https://cdn.sa.net/2024/10/24/MU2s7gtuCa4GnSe.png", alt: "Astricia illustration 4" },
  { src: "https://cdn.sa.net/2024/10/24/c6r8SNRA3EYuawI.jpg", alt: "Astricia illustration 5" },
  { src: "https://cdn.sa.net/2024/10/24/4pnfDHlMk6NQL9K.jpg", alt: "Astricia illustration 6" },
  { src: "https://cdn.sa.net/2024/10/24/YaIPQCt4dhDeoqM.jpg", alt: "Astricia illustration 7" },
  { src: "https://cdn.sa.net/2024/10/24/AxfbFXwgsEnOZoN.png", alt: "Astricia illustration 8" },
  { src: "https://cdn.sa.net/2024/10/24/j4aMiVwvH8m6b1x.jpg", alt: "Astricia illustration 9" },
  { src: "https://cdn.sa.net/2024/10/24/x3zuStBk4Zp2NOQ.jpg", alt: "Astricia illustration 10" },
  { src: "https://cdn.sa.net/2024/10/24/149ieR5tIKOs3aq.png", alt: "Astricia illustration 11" },
  { src: "https://cdn.sa.net/2024/10/24/6aMVyjUSJOKeYFL.jpg", alt: "Astricia illustration 12" },
  { src: "https://cdn.sa.net/2024/10/24/lzdbu6XBDgWJ2rL.png", alt: "Astricia illustration 13" },
  { src: "https://cdn.sa.net/2024/10/24/3j2JzcgslGtfkYb.png", alt: "Astricia illustration 14" },
  { src: "https://cdn.sa.net/2024/10/24/bm4axGBrVNk1KfA.webp", alt: "Astricia illustration 15" },
  { src: "https://cdn.sa.net/2025/05/03/2d8bocaODNrZ1IL.webp", alt: "Astricia illustration 16" },
  { src: "https://cdn.sa.net/2025/05/03/9bGmznyst24JBNE.webp", alt: "Astricia illustration 17" },
  { src: "https://cdn.sa.net/2025/05/03/V1rT8X7F5qhftSg.webp", alt: "Astricia illustration 18" },
  { src: "https://cdn.sa.net/2025/05/03/lNKTHeUwXr5gyBu.jpg", alt: "Astricia illustration 19" },
  { src: "https://cdn.sa.net/2025/11/28/eJagyotKmruUX8n.png", alt: "Astricia illustration 20" },
]

export function PhotoGallery() {
  const translation = useTranslation()
  const t = translation?.t ?? ((key: string) => key)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})
  const [imageDimensions, setImageDimensions] = useState<Record<string, { width: number; height: number }>>({})
  const galleryRef = useRef<HTMLDivElement>(null)

  // 预加载图片获取尺寸
  useEffect(() => {
    GALLERY_IMAGES.forEach((image) => {
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

  // 监听 Esc 键
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
          {GALLERY_IMAGES.map((image, index) => (
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
