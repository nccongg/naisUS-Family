"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Menu,
  X,
  Music
} from "lucide-react"

const socialLinks = [
  {
    icon: Music,
    href: "https://tiktok.com",
    tooltip: "Bí kíp võ công.",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61584648595155&notif_id=1764611787317515&notif_t=follower_invite&ref=notif",
    tooltip: "Bán hàng đa cấp.",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    tooltip: "Donate đi.",
  },
  {
    icon: Youtube,
    href: "https://youtube.com",
    tooltip: "Muốn nghỉ làm",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Image
            src="/images/logo.png"
            alt="NaisUS Family Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link 
            href="/members" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Members
          </Link>
          <Link 
            href="/blog" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Blog
          </Link>
          <Link 
            href="/tech" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Tech
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* Social Icons & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <div key={social.href} className="relative">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-card hover:text-primary transition-all duration-200"
                    onMouseEnter={() => setHoveredIcon(social.href)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                  {hoveredIcon === social.href && (
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-popover border rounded-md text-xs whitespace-nowrap shadow-lg z-50">
                      {social.tooltip}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-popover border-l border-t rotate-45"></div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
            <Link href="/contact">Join the Family</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container py-4 space-y-4">
            <Link 
              href="/" 
              className="block text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/members" 
              className="block text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Members
            </Link>
            <Link 
              href="/blog" 
              className="block text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/tech" 
              className="block text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tech
            </Link>
            <Link 
              href="/contact" 
              className="block text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-2 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
            <Button asChild className="w-full mt-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Join the Family
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

