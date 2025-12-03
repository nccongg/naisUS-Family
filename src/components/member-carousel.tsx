"use client"

import { useEffect, useState } from "react"
import { MemberCard } from "./member-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Member {
  id: string
  name: string
  role: string
  bio: string
  avatar?: string
  social?: {
    tiktok?: string
    facebook?: string
    instagram?: string
    youtube?: string
  }
}

interface MemberCarouselProps {
  members: Member[]
  autoPlayInterval?: number
}

export function MemberCarousel({ members, autoPlayInterval = 3000 }: MemberCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || members.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % members.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isPaused, members.length, autoPlayInterval])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length)
  }

  const goToIndex = (index: number) => {
    setCurrentIndex(index)
  }

  if (members.length === 0) return null

  // Tính toán index cho prev, current, next
  const getMemberIndex = (offset: number) => {
    return (currentIndex + offset + members.length) % members.length
  }

  const prevIndex = getMemberIndex(-1)
  const nextIndex = getMemberIndex(1)

  return (
    <div 
      className="relative w-full py-8 px-4 flex flex-col items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container với 3 cards */}
      <div className="relative h-[500px] w-[500px] flex items-center justify-center">
        {/* Previous Card (bên trái) */}
        <div
          className="absolute left-0 transition-all duration-500 ease-in-out cursor-pointer"
          style={{
            transform: 'translateX(-30%) scale(0.85)',
            opacity: 0.5,
            zIndex: 1,
          }}
          onClick={goToPrev}
        >
          <div className="w-[280px] pointer-events-none">
            <MemberCard member={members[prevIndex]} />
          </div>
        </div>

        {/* Current Card (ở giữa) */}
        <div
          className="absolute transition-all duration-500 ease-in-out"
          style={{
            transform: 'scale(1)',
            opacity: 1,
            zIndex: 3,
          }}
        >
          <div className="w-[320px]">
            <MemberCard member={members[currentIndex]} />
          </div>
        </div>

        {/* Next Card (bên phải) */}
        <div
          className="absolute right-0 transition-all duration-500 ease-in-out cursor-pointer"
          style={{
            transform: 'translateX(30%) scale(0.85)',
            opacity: 0.5,
            zIndex: 1,
          }}
          onClick={goToNext}
        >
          <div className="w-[280px] pointer-events-none">
            <MemberCard member={members[nextIndex]} />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      {members.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border-border shadow-lg"
            onClick={goToPrev}
            aria-label="Previous member"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border-border shadow-lg"
            onClick={goToNext}
            aria-label="Next member"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {members.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {members.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-primary/50"
              }`}
              aria-label={`Go to member ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

