import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - NaisUS Family",
  description: "Privacy Policy for NaisUS Family website",
}

export default function PrivacyPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground">
            Chúng tôi thu thập thông tin khi bạn sử dụng website của chúng tôi, bao gồm:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Thông tin bạn cung cấp khi liên hệ với chúng tôi</li>
            <li>Dữ liệu sử dụng website (cookies, analytics)</li>
            <li>Thông tin từ các form bạn điền</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground">
            Chúng tôi sử dụng thông tin để:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Cải thiện trải nghiệm người dùng</li>
            <li>Phản hồi các yêu cầu và câu hỏi của bạn</li>
            <li>Gửi thông tin cập nhật về website (nếu bạn đồng ý)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
          <p className="text-muted-foreground">
            Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn và không chia sẻ với bên thứ ba 
            mà không có sự đồng ý của bạn.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Contact Us</h2>
          <p className="text-muted-foreground">
            Nếu bạn có câu hỏi về Privacy Policy, vui lòng liên hệ với chúng tôi qua{" "}
            <Link href="/contact" className="text-primary hover:underline">
              form liên hệ
            </Link>
            .
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

