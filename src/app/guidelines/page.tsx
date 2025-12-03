import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Community Guidelines - NaisUS Family",
  description: "Community Guidelines for NaisUS Family",
}

export default function GuidelinesPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Community Guidelines</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Welcome to NaisUS Family!</h2>
          <p className="text-muted-foreground">
            Chúng tôi là một cộng đồng tech với tinh thần vui vẻ và meme. 
            Để giữ cho không gian này tích cực và thân thiện, vui lòng tuân thủ các nguyên tắc sau:
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Be Respectful</h2>
          <p className="text-muted-foreground">
            Tôn trọng tất cả mọi người trong cộng đồng, bất kể trình độ, kinh nghiệm hay background.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Share Knowledge</h2>
          <p className="text-muted-foreground">
            Chia sẻ kiến thức và kinh nghiệm của bạn. Mọi người đều có thể học hỏi lẫn nhau!
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Keep It Fun</h2>
          <p className="text-muted-foreground">
            Chúng tôi yêu thích meme và humor, nhưng hãy đảm bảo nó không làm tổn thương ai cả.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. No Spam or Self-Promotion</h2>
          <p className="text-muted-foreground">
            Tránh spam và quảng cáo quá mức. Chia sẻ dự án của bạn là tốt, nhưng đừng lạm dụng.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Report Issues</h2>
          <p className="text-muted-foreground">
            Nếu bạn thấy hành vi không phù hợp, vui lòng{" "}
            <Link href="/contact" className="text-primary hover:underline">
              liên hệ với chúng tôi
            </Link>
            .
          </p>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Remember</h2>
          <p className="text-lg text-muted-foreground italic">
            &quot;Effort 110%, Chaos 200%&quot; - nhưng hãy giữ cho nó vui vẻ và tích cực! 🚀
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

