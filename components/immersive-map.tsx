"use client";
import React, { useState, useRef, useEffect } from 'react';
import type { StaticImageData } from 'next/image';
import mapSrc from '../public/map.png';
import { siteConfig } from '@/config/site.config';

const MIN_SCALE = siteConfig.map.config.minScale
const MAX_SCALE = siteConfig.map.config.maxScale

export function ImmersiveMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isPinching, setIsPinching] = useState(false)
  const [origin, setOrigin] = useState([0, 0])
  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)
  const initialPinchDistanceRef = useRef(0)
  const initialScaleRef = useRef(1)

  const startDragging = (x: number, y: number) => {
    setIsDragging(true)
    setOrigin([x - translate.x, y - translate.y])
  }

  const getTouchDistance = (touch1: Touch, touch2: Touch) => {
    const dx = touch1.clientX - touch2.clientX
    const dy = touch1.clientY - touch2.clientY
    return Math.hypot(dx, dy)
  }

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    startDragging(e.clientX, e.clientY)
  }

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      // 双指缩放：记录初始双指距离与缩放基准
      e.preventDefault()
      setIsPinching(true)
      initialPinchDistanceRef.current = getTouchDistance(e.touches[0], e.touches[1])
      initialScaleRef.current = scale
    } else if (e.touches.length === 1) {
      // 单指拖拽：记录拖拽起点
      const touch = e.touches[0]
      startDragging(touch.clientX, touch.clientY)
    }
  }

  const handleMove = (x: number, y: number) => {
    const rawX = x - origin[0]
    const rawY = y - origin[1]
    const container = containerRef.current?.getBoundingClientRect()
    const imgW = typeof mapSrc === 'object' ? (mapSrc as StaticImageData).width : 0
    const imgH = typeof mapSrc === 'object' ? (mapSrc as StaticImageData).height : 0
    if (container) {
      // 限制拖拽边界，避免地图被拖出视口范围
      const minX = container.width - imgW * scale
      const minY = container.height - imgH * scale
      const x = Math.max(minX, Math.min(0, rawX))
      const y = Math.max(minY, Math.min(0, rawY))
      setTranslate({ x, y })
    } else {
      setTranslate({ x: rawX, y: rawY })
    }
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    handleMove(e.clientX, e.clientY)
  }

  const onTouchMove = (e: TouchEvent) => {
    if (e.touches.length === 2 && isPinching) {
      // 双指缩放：按距离比例计算新的缩放值并限制上下限
      e.preventDefault()
      const currentDistance = getTouchDistance(e.touches[0], e.touches[1])
      const scaleRatio = currentDistance / initialPinchDistanceRef.current
      const newScale = initialScaleRef.current * scaleRatio

      setScale(Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale)))
    } else if (e.touches.length === 1 && isDragging && !isPinching) {
      // 单指拖拽：持续更新位移
      e.preventDefault()
      const touch = e.touches[0]
      handleMove(touch.clientX, touch.clientY)
    }
  }

  const endDragging = () => {
    setIsDragging(false)
    setIsPinching(false)
  }

  const onMouseUp = () => endDragging()
  const onTouchEnd = () => endDragging()

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault()
    const scaleAmount = e.deltaY < 0 ? 0.1 : -0.1
    setScale((s) => {
      let newScale = s + scaleAmount
      if (newScale < MIN_SCALE) newScale = MIN_SCALE
      if (newScale > MAX_SCALE) newScale = MAX_SCALE
      return newScale
    })
  }

  useEffect(() => {
    if (isDragging || isPinching) {
      // 拖拽/缩放期间绑定全局监听，避免指针移出容器导致中断
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
      window.addEventListener('touchmove', onTouchMove, { passive: false })
      window.addEventListener('touchend', onTouchEnd)
    } else {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [isDragging, isPinching])

  useEffect(() => {
    if (!containerRef.current || typeof mapSrc === 'string') return
    const rect = containerRef.current.getBoundingClientRect()
    const imgW = (mapSrc as StaticImageData).width * scale
    const imgH = (mapSrc as StaticImageData).height * scale
    const minX = rect.width - imgW
    const minY = rect.height - imgH
    // 缩放时同步校正位移，保证地图仍在视口内
    setTranslate(prev => ({
      x: Math.max(minX, Math.min(0, prev.x)),
      y: Math.max(minY, Math.min(0, prev.y)),
    }))
  }, [scale])

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onWheel={onWheel}
      className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing touch-none select-none"
    >
      <img
        src={typeof mapSrc === 'string' ? mapSrc : mapSrc.src}
        alt="World Map"
        className="absolute top-0 left-0 select-none pointer-events-none max-w-none"
        style={{
          transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
          transformOrigin: 'top left',
        }}
        draggable={false}
      />
    </div>
  )
}
