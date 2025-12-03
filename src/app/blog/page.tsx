import { BlogCard } from "@/components/blog-card"
import { prisma } from "@/lib/prisma"

export const metadata = {
  title: "Blog - NaisUS Family",
  description: "Read our latest blog posts about tech, life, and everything in between",
}

async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    })
    return posts
  } catch (error) {
    return []
  }
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Những bài viết về tech, cuộc sống, và đôi khi là những thứ không liên quan gì cả
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Chưa có bài viết nào. Đang viết... sớm thôi!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}

