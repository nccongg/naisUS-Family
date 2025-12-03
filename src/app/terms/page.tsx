import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions - NaisUS Family",
  description: "Terms and Conditions for NaisUS Family website",
}

export default function TermsPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            Bằng việc truy cập và sử dụng website này, bạn đồng ý tuân thủ các điều khoản và điều kiện sau đây.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Use of Website</h2>
          <p className="text-muted-foreground">
            Bạn được phép:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Truy cập và xem nội dung website</li>
            <li>Chia sẻ link đến các bài viết</li>
            <li>Sử dụng nội dung cho mục đích cá nhân, phi thương mại</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
          <p className="text-muted-foreground">
            Tất cả nội dung trên website này, bao gồm văn bản, hình ảnh, logo, và thiết kế, 
            đều thuộc về NaisUS Family và được bảo vệ bởi luật bản quyền.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            NaisUS Family không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh từ việc sử dụng 
            hoặc không thể sử dụng website này.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
          <p className="text-muted-foreground">
            Chúng tôi có quyền thay đổi các điều khoản này bất cứ lúc nào. 
            Việc tiếp tục sử dụng website sau khi có thay đổi được coi là bạn đã chấp nhận các điều khoản mới.
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

