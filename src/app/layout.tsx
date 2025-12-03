import type { Metadata } from "next"
import { Inter, Lexend } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const lexend = Lexend({ 
  subsets: ["latin"],
  variable: "--font-lexend",
})

export const metadata: Metadata = {
  title: "NaisUS Family - Effort 110%, Chaos 200%",
  description: "Một gia đình tech nhưng gà :)))) We Are NaisUS Family — Effort 110%, Chaos 200%.",
  keywords: ["NaisUS", "Family", "Tech", "Blog", "Vietnamese"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

