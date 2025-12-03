"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Send, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    isHuman: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "", isHuman: false })
      } else {
        alert("Có lỗi xảy ra. Vui lòng thử lại sau.")
      }
    } catch (error) {
      alert("Có lỗi xảy ra. Vui lòng thử lại sau.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="container py-12 max-w-2xl">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
              <h2 className="text-2xl font-bold">Cảm ơn bạn đã liên hệ!</h2>
              <p className="text-muted-foreground">
                Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi sớm nhất có thể.
                <br />
                (Hoặc ít nhất là cố gắng)
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Gửi tin nhắn khác
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container py-12 max-w-2xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground">
          Có điều gì muốn nói? Hãy gửi tin nhắn cho chúng tôi!
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            Điền form dưới đây hoặc email trực tiếp đến{" "}
            <a href="mailto:contact@naisus.family" className="text-primary hover:underline">
              contact@naisus.family
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Tên của bạn"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Viết tin nhắn của bạn ở đây..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="isHuman"
                checked={formData.isHuman}
                onChange={(e) => setFormData({ ...formData, isHuman: e.target.checked })}
                className="h-4 w-4 rounded border-gray-300"
                required
              />
              <Label htmlFor="isHuman" className="text-sm font-normal cursor-pointer">
                Tôi là robot nếu tôi không click.
              </Label>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
              {isSubmitting ? (
                "Đang gửi..."
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>
          <Mail className="inline h-4 w-4 mr-1" />
          Report bugs — chúng tôi sẽ sửa… sớm thôi.
        </p>
      </div>
    </div>
  )
}

