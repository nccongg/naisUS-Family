import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container py-20 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-8">
        Trang bạn đang tìm không tồn tại. Có thể nó đã bị xóa hoặc chưa được tạo.
        <br />
        (Hoặc đơn giản là chúng tôi quên tạo nó)
      </p>
      <Button asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  )
}

