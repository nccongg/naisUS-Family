import Link from "next/link"
import { Facebook, Instagram, Youtube, Music, Mail } from "lucide-react"

const socialLinks = [
  { icon: Music, href: "https://tiktok.com", label: "TikTok" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/members" className="hover:text-primary transition-colors">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tech" className="hover:text-primary transition-colors">
                  Tech Corner
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Social */}
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{social.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Column 3 - Policies */}
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="hover:text-primary transition-colors">
                  Community Guidelines
                </Link>
              </li>
              <li className="text-xs text-muted-foreground italic">
                &quot;110% Effort Compliance&quot; (meme)
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@naisus.family"
                  className="flex items-center space-x-2 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>contact@naisus.family</span>
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Feedback Form
                </Link>
              </li>
              <li className="text-xs text-muted-foreground italic">
                &quot;Report bugs — chúng tôi sẽ sửa… sớm thôi.&quot;
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 NaisUS Family — Made with ❤️ & 110% effort.</p>
        </div>
      </div>
    </footer>
  )
}

