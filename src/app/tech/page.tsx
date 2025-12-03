import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Brain, Server } from "lucide-react"

const techCategories = [
  {
    id: "web",
    name: "Web Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    posts: [
      {
        title: "React Hooks: Tại sao useEffect chạy 2 lần?",
        description: "Câu hỏi muôn thuở của mọi React developer. Spoiler: Đó là feature, không phải bug!",
      },
      {
        title: "Next.js 14: App Router là gì và tại sao nó làm bạn đau đầu?",
        description: "Hướng dẫn từng bước để hiểu App Router, hoặc ít nhất là giả vờ hiểu.",
      },
      {
        title: "TypeScript: Khi nào thì dùng 'any'?",
        description: "Câu trả lời: Không bao giờ. Nhưng đôi khi bạn vẫn làm thế.",
      },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Development",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    posts: [
      {
        title: "Flutter vs React Native: Cuộc chiến không hồi kết",
        description: "So sánh hai framework mobile phổ biến nhất. Kết luận: Cả hai đều tốt, chọn cái nào bạn thích.",
      },
      {
        title: "iOS Development: Tại sao Xcode lại phức tạp đến thế?",
        description: "Một câu chuyện về việc build app iOS và những giọt nước mắt.",
      },
    ],
  },
  {
    id: "ai",
    name: "AI & Machine Learning",
    icon: Brain,
    color: "from-green-500 to-emerald-500",
    posts: [
      {
        title: "ChatGPT: Bạn có đang dùng nó để code không?",
        description: "Sự thật về việc developers dùng AI để code. Spoiler: Tất cả chúng ta đều làm thế.",
      },
      {
        title: "Machine Learning: Train model đầu tiên của bạn",
        description: "Hướng dẫn train model phân loại mèo và chó. Tỷ lệ thành công: 50%.",
      },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    icon: Server,
    color: "from-orange-500 to-red-500",
    posts: [
      {
        title: "Docker: Container là gì và tại sao nó lại quan trọng?",
        description: "Giải thích Docker bằng ngôn ngữ đơn giản nhất có thể. Hoặc ít nhất là cố gắng.",
      },
      {
        title: "CI/CD: Tự động hóa deployment và những lỗi thường gặp",
        description: "Những câu chuyện về CI/CD pipeline và những lần nó làm bạn khóc.",
      },
    ],
  },
]

export const metadata = {
  title: "Tech Corner - NaisUS Family",
  description: "Tech tips, tutorials, and guides with a humorous twist",
}

export default function TechPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tech Corner</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Những tips về tech mà thg đell nào cũng biết rồi!
        </p>
      </div>

      <div className="space-y-12">
        {techCategories.map((category) => {
          const Icon = category.icon
          return (
            <div key={category.id}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/20 text-primary border border-primary/30">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">{category.name}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.posts.map((post, index) => (
                  <Card key={index} className="hover:shadow-lg hover:shadow-primary/10 transition-all border-border">
                    <CardHeader>
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                      <CardDescription>{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted-foreground italic">
                        Coming soon... hoặc không.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

