import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cookie Policy - NaisUS Family",
  description: "Cookie Policy for NaisUS Family website",
}

export default function CookiesPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
          <p className="text-muted-foreground">
            Cookies là các file nhỏ được lưu trên thiết bị của bạn khi bạn truy cập website. 
            Chúng giúp website hoạt động tốt hơn và cung cấp thông tin về cách bạn sử dụng website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
          <p className="text-muted-foreground">
            Chúng tôi sử dụng cookies để:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Ghi nhớ các tùy chọn của bạn (ví dụ: theme dark/light)</li>
            <li>Phân tích cách bạn sử dụng website để cải thiện trải nghiệm</li>
            <li>Đảm bảo website hoạt động đúng cách</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
              <p className="text-muted-foreground">
                Các cookies cần thiết để website hoạt động. Không thể tắt các cookies này.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
              <p className="text-muted-foreground">
                Giúp chúng tôi hiểu cách bạn sử dụng website để cải thiện nội dung và trải nghiệm.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
          <p className="text-muted-foreground">
            Bạn có thể quản lý cookies thông qua cài đặt trình duyệt của mình. 
            Tuy nhiên, việc tắt cookies có thể ảnh hưởng đến chức năng của website.
          </p>
        </section>
      </div>

      <div className="mt-8">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

