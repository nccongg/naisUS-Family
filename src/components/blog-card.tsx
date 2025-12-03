import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface Post {
  id: number
  title: string
  slug: string
  excerpt?: string | null
  createdAt: Date
  thumbnail?: string
  tag?: string
}

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer border-border">
        {post.thumbnail && (
          <div className="relative h-48 w-full">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <CardHeader>
          {post.tag && (
            <span className="text-xs font-semibold text-primary mb-2 inline-block px-2 py-1 bg-primary/10 rounded">
              {post.tag}
            </span>
          )}
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          {post.excerpt && (
            <CardDescription className="line-clamp-3">
              {post.excerpt}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">{formattedDate}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

