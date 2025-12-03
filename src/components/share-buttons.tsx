"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Link as LinkIcon } from "lucide-react"
import { usePathname } from "next/navigation"

interface ShareButtonsProps {
  title: string
}

export function ShareButtons({ title }: ShareButtonsProps) {
  const pathname = usePathname()
  const shareUrl = typeof window !== "undefined" 
    ? `${window.location.origin}${pathname}`
    : ""
  const shareText = title

  const copyToClipboard = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(shareUrl)
      alert("Link đã được copy!")
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Button variant="outline" size="sm" asChild>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="h-4 w-4 mr-2" />
          Facebook
        </a>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="h-4 w-4 mr-2" />
          Twitter
        </a>
      </Button>
      <Button variant="outline" size="sm" onClick={copyToClipboard}>
        <LinkIcon className="h-4 w-4 mr-2" />
        Copy Link
      </Button>
    </div>
  )
}

