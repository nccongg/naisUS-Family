import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://naisus.family'

  // Get all blog posts
  let posts: { slug: string; updatedAt: Date }[] = []
  try {
    posts = await prisma.post.findMany({
      select: {
        slug: true,
        updatedAt: true,
      },
    })
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error)
  }

  const routes = [
    '',
    '/members',
    '/blog',
    '/tech',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...blogRoutes]
}

