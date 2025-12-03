import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/blog-card"
import { MemberCarousel } from "@/components/member-carousel"
import { Music, Users } from "lucide-react"
import { prisma } from "@/lib/prisma"

async function getFeaturedPosts() {
  try {
    const posts = await prisma.post.findMany({
      take: 6,
      orderBy: { createdAt: "desc" },
    })
    return posts
  } catch (error) {
    return []
  }
}

const members = [
  {
    id: "1",
    name: "C",
    role: "Head of intern - Full Snake Development",
    bio: "Xếp của các loại intern. Chuyên viết code như rắn bò, nhưng code vẫn chạy được... đôi khi.",
    avatar: "/images/members/meme-rong-3-dau.jpg",
    social: {
      tiktok: "https://tiktok.com",
      facebook: "https://facebook.com",
    }
  },
  {
    id: "2",
    name: "N",
    role: "Intern lấc cấc - Content Engineer",
    bio: "Vua còn tent. Chuyên tạo content nhưng đôi khi content tạo ra chính mình cũng không hiểu.",
    avatar: "/images/members/meme-rong-3-dau.jpg",
    social: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    }
  },
  {
    id: "3",
    name: "H",
    role: "HR-Designer - Thư kí intern",
    bio: "Job nào cũng intern được blabla. Làm HR, làm Designer, làm Thư kí... tất cả đều ở mức intern nhưng vẫn hoàn thành tốt công việc.",
    avatar: "/images/members/meme-rong-3-dau.jpg",
    social: {
      tiktok: "https://tiktok.com",
      instagram: "https://instagram.com",
    }
  },
]

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts()

  return (
    <div>
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative w-full max-w-4xl h-96 sm:h-[500px] rounded-2xl overflow-hidden bg-card border border-border mb-8">
            <Image
              src="/images/banner.jpg"
              alt="NaisUS Family Banner"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            We Are <span className="text-primary">NaisUS Family</span>
            <br />
            <span className="text-3xl md:text-5xl">Effort 110%, Chaos 200%.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Một gia đình tech nhưng gà :))))
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <Music className="mr-2 h-5 w-5" />
                Watch us on TikTok
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              <Link href="/members">
                <Users className="mr-2 h-5 w-5" />
                Meet the Family
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container py-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Chào mừng đến với NaisUS Family! Chúng tôi là bố của các bạn, các bạn là con của chúng tôi. Trong mindset của chúng tôi, chúng tôi luôn đặt chúng tôi ở trên tất cả mọi người, tức là chúng tôi dell sợ thằng nào hết. Trên thế giới này được mấy thg dev hít đất được 100 cái, nên chúng tôi là số 1.
          </p>
        </div>
      </section>

      {/* Featured Blog Posts */}
      {featuredPosts.length > 0 && (
        <section className="container py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Blog Posts</h2>
            <Button asChild variant="ghost">
              <Link href="/blog">View All →</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.slice(0, 6).map((post) => (
              <BlogCard 
                key={post.id} 
                post={{
                  ...post,
                  excerpt: post.excerpt || undefined
                }} 
              />
            ))}
          </div>
        </section>
      )}

      {/* Members Preview */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Meet the Family</h2>
          <Button asChild variant="ghost">
            <Link href="/members">View All →</Link>
          </Button>
        </div>
        <MemberCarousel members={members} autoPlayInterval={4000} />
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6 p-12 rounded-2xl bg-card border border-border">
          <h2 className="text-3xl md:text-4xl font-bold">
            Join The Family
          </h2>
          <p className="text-lg text-muted-foreground">
            Chúng tôi không nhận đơn, chỉ nhận vibe.
          </p>
          <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

