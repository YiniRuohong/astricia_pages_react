"use client";
import React, { useState, useRef, useEffect } from 'react';
import type { StaticImageData } from 'next/image';
import mapSrc from '../public/map.png';

const MIN_SCALE = 0.5
const MAX_SCALE = 3

export function ImmersiveMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [origin, setOrigin] = useState([0, 0])
  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)

  const startDragging = (x: number, y: number) => {
    setIsDragging(true)
    setOrigin([x - translate.x, y - translate.y])
  }

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    startDragging(e.clientX, e.clientY)
  }

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0]
    if (!touch) return
    startDragging(touch.clientX, touch.clientY)
  }

  const handleMove = (x: number, y: number) => {
    const rawX = x - origin[0]
    const rawY = y - origin[1]
    const container = containerRef.current?.getBoundingClientRect()
    const imgW = typeof mapSrc === 'object' ? (mapSrc as StaticImageData).width : 0
    const imgH = typeof mapSrc === 'object' ? (mapSrc as StaticImageData).height : 0
    if (container) {
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
    if (!isDragging) return
    const touch = e.touches[0]
    if (!touch) return
    handleMove(touch.clientX, touch.clientY)
  }

  const endDragging = () => {
    if (isDragging) {
      setIsDragging(false)
    }
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
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
      window.addEventListener('touchmove', onTouchMove)
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
  }, [isDragging])

  useEffect(() => {
    if (!containerRef.current || typeof mapSrc === 'string') return
    const rect = containerRef.current.getBoundingClientRect()
    const imgW = (mapSrc as StaticImageData).width * scale
    const imgH = (mapSrc as StaticImageData).height * scale
    const minX = rect.width - imgW
    const minY = rect.height - imgH
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
