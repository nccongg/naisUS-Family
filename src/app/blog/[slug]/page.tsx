import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import ReactMarkdown from "react-markdown"
import { ShareButtons } from "@/components/share-buttons"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const post = await prisma.post.findUnique({
      where: { slug },
    })

    if (!post) {
      return {
        title: "Post Not Found",
      }
    }

    return {
      title: `${post.title} - NaisUS Family Blog`,
      description: post.excerpt || post.title,
    }
  } catch (error) {
    return {
      title: "Post Not Found",
    }
  }
}

async function getPost(slug: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
    })
    return post
  } catch (error) {
    return null
  }
}

async function getRelatedPosts(currentSlug: string) {
  try {
    const posts = await prisma.post.findMany({
      where: {
        slug: { not: currentSlug },
      },
      take: 3,
      orderBy: { createdAt: "desc" },
    })
    return posts
  } catch (error) {
    return []
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  const relatedPosts = await getRelatedPosts(slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="container py-12 max-w-4xl">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <time dateTime={post.createdAt.toISOString()}>
              {formattedDate}
            </time>
            <div className="flex items-center space-x-2">
              <span>By NaisUS Family</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="border-t pt-8 mb-12">
          <h3 className="text-lg font-semibold mb-4">Share this post</h3>
          <ShareButtons title={post.title} />
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="border-t pt-12">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2">
                  <a href={`/blog/${relatedPost.slug}`} className="hover:text-primary">
                    {relatedPost.title}
                  </a>
                </h3>
                {relatedPost.excerpt && (
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

