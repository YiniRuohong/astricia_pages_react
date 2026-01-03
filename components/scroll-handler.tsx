"use client"

import { useEffect, useRef } from "react"

export function ScrollHandler() {
  const isButtonScrollRef = useRef(false)
  const lastScrollYRef = useRef(0)
  const hasEnteredGalleryRef = useRef(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight
      const scrollDirection = currentScrollY > lastScrollYRef.current ? "down" : "up"

      lastScrollYRef.current = currentScrollY

      if (isButtonScrollRef.current) {
        return
      }

      // 降低吸附敏感度，减少自动吸附频率
      // 只在非常接近吸附点时才触发（现在是 10% 的范围）
      const snapThreshold = windowHeight * 0.1
      const snapTarget = windowHeight
      const distanceToSnap = Math.abs(currentScrollY - snapTarget)

      // 只有向下滚动且距离目标很近时才吸附
      if (
        scrollDirection === "down" &&
        distanceToSnap < snapThreshold &&
        currentScrollY > windowHeight * 0.5 &&
        hasEnteredGalleryRef.current === false
      ) {
        // 防抖：避免频繁触发
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }

        scrollTimeoutRef.current = setTimeout(() => {
          window.scrollTo({
            top: snapTarget,
            behavior: "smooth",
          })
          hasEnteredGalleryRef.current = true
        }, 100)
      }
    }

    // 使用 passive 选项提高滚动性能
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    window.markButtonScroll = () => {
      isButtonScrollRef.current = true
      setTimeout(() => {
        isButtonScrollRef.current = false
      }, 1000)
    }

    return () => {
      delete window.markButtonScroll
    }
  }, [])

  return null
}

declare global {
  interface Window {
    markButtonScroll?: () => void
  }
}
