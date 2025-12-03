import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create sample blog posts
  const posts = [
    {
      title: "Welcome to NaisUS Family!",
      slug: "welcome-to-naisus-family",
      content: `# Welcome to NaisUS Family!

Chào mừng bạn đến với NaisUS Family - nơi mà chúng tôi code với **110% effort** và tạo ra **200% chaos**.

## Chúng tôi là ai?

Chúng tôi là một nhóm developers, designers, và những người yêu công nghệ nhưng không quá nghiêm túc về cuộc sống. Ở đây bạn sẽ tìm thấy:

- Những bài blog về tech
- Những câu chuyện vui vẻ về cuộc sống dev
- Đôi khi là những tips hữu ích (hoặc không hữu ích lắm)

## Tại sao lại là "NaisUS"?

Đó là một câu chuyện dài... và chúng tôi sẽ kể sau. Hiện tại, hãy tận hưởng những nội dung mà chúng tôi tạo ra!

---

*Made with ❤️ & 110% effort*`,
      excerpt: "Chào mừng bạn đến với NaisUS Family - nơi mà chúng tôi code với 110% effort và tạo ra 200% chaos.",
    },
    {
      title: "React Hooks: Tại sao useEffect chạy 2 lần?",
      slug: "react-useeffect-runs-twice",
      content: `# React Hooks: Tại sao useEffect chạy 2 lần?

Câu hỏi muôn thuở của mọi React developer mới bắt đầu: **Tại sao useEffect của tôi chạy 2 lần?**

## Câu trả lời ngắn gọn

Đó là **feature, không phải bug!** React 18+ chạy effects 2 lần trong development mode để giúp bạn phát hiện side effects không mong muốn.

## Tại sao lại như vậy?

React muốn đảm bảo rằng component của bạn có thể:
- Mount → Unmount → Mount lại mà không bị lỗi
- Xử lý cleanup functions đúng cách
- Tránh memory leaks

## Làm thế nào để fix?

Thực ra không cần "fix" vì nó chỉ xảy ra trong development. Trong production, nó chỉ chạy 1 lần.

Nhưng nếu bạn muốn test trong dev mode, bạn có thể:
- Sử dụng \`useEffect\` với dependency array đúng cách
- Implement cleanup functions
- Hoặc... đơn giản là chấp nhận nó! 😄

---

*Happy coding!*`,
      excerpt: "Câu hỏi muôn thuở của mọi React developer. Spoiler: Đó là feature, không phải bug!",
    },
    {
      title: "Next.js 14: App Router là gì?",
      slug: "nextjs-14-app-router",
      content: `# Next.js 14: App Router là gì?

Next.js 14 giới thiệu **App Router** - một cách mới để xây dựng ứng dụng React với Next.js.

## App Router vs Pages Router

### Pages Router (cũ)
- File-based routing với \`pages/\` directory
- Dễ hiểu, dễ bắt đầu
- Đã được sử dụng rộng rãi

### App Router (mới)
- File-based routing với \`app/\` directory
- Hỗ trợ React Server Components
- Layouts và nested routes tốt hơn
- Streaming và Suspense built-in

## Tại sao nên dùng App Router?

1. **Server Components**: Render trên server, giảm bundle size
2. **Better Performance**: Streaming, partial rendering
3. **Improved DX**: Layouts, loading states, error boundaries

## Migration

Nếu bạn đang dùng Pages Router, không cần vội migrate. Pages Router vẫn được support và sẽ tiếp tục được maintain.

---

*App Router hay Pages Router? Cả hai đều tốt!*`,
      excerpt: "Hướng dẫn từng bước để hiểu App Router, hoặc ít nhất là giả vờ hiểu.",
    },
    {
      title: "TypeScript: Khi nào thì dùng 'any'?",
      slug: "typescript-when-to-use-any",
      content: `# TypeScript: Khi nào thì dùng 'any'?

Câu trả lời ngắn gọn: **Không bao giờ.** Nhưng đôi khi bạn vẫn làm thế.

## Tại sao 'any' là xấu?

\`any\` loại bỏ tất cả lợi ích của TypeScript:
- Mất type safety
- Mất autocomplete
- Mất compile-time error checking

## Khi nào bạn có thể dùng 'any'?

Thực ra... không nên dùng. Nhưng nếu bạn **thực sự** cần:

1. **\`unknown\`** - Type-safe alternative
2. **Type assertions** - \`as Type\`
3. **Generics** - \`<T>\`

## Best Practices

\`\`\`typescript
// ❌ Bad
function processData(data: any) {
  return data.value
}

// ✅ Good
function processData<T>(data: T): T {
  return data
}

// ✅ Better
function processData<T extends { value: unknown }>(data: T): T['value'] {
  return data.value
}
\`\`\`

---

*Type safety > Convenience*`,
      excerpt: "Câu trả lời: Không bao giờ. Nhưng đôi khi bạn vẫn làm thế.",
    },
    {
      title: "Docker: Container là gì?",
      slug: "docker-containers-explained",
      content: `# Docker: Container là gì?

Docker containers đã trở thành một phần không thể thiếu trong modern development workflow.

## Container là gì?

Container là một cách để đóng gói ứng dụng cùng với tất cả dependencies của nó vào một "package" có thể chạy ở bất kỳ đâu.

## Tại sao lại quan trọng?

- **Consistency**: Chạy giống nhau ở mọi môi trường
- **Isolation**: Mỗi container độc lập
- **Portability**: Chạy trên bất kỳ máy nào có Docker

## Docker vs Virtual Machine

- **VM**: Nặng, chậm, cần nhiều resources
- **Container**: Nhẹ, nhanh, chia sẻ OS kernel

## Basic Commands

\`\`\`bash
# Build image
docker build -t my-app .

# Run container
docker run -p 3000:3000 my-app

# List containers
docker ps
\`\`\`

---

*Containerize everything!*`,
      excerpt: "Giải thích Docker bằng ngôn ngữ đơn giản nhất có thể. Hoặc ít nhất là cố gắng.",
    },
    {
      title: "CI/CD: Tự động hóa deployment",
      slug: "cicd-automation",
      content: `# CI/CD: Tự động hóa deployment

CI/CD (Continuous Integration/Continuous Deployment) giúp bạn deploy code nhanh hơn và an toàn hơn.

## CI/CD là gì?

- **CI**: Tự động test và build code mỗi khi có commit
- **CD**: Tự động deploy code đã được test lên production

## Lợi ích

1. **Faster Releases**: Deploy nhanh hơn
2. **Fewer Bugs**: Tự động test trước khi deploy
3. **Better Quality**: Code được review và test tự động

## Popular Tools

- **GitHub Actions**: Built-in với GitHub
- **GitLab CI**: Built-in với GitLab
- **Jenkins**: Self-hosted
- **CircleCI**: Cloud-based

## Basic GitHub Actions Example

\`\`\`yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm test
      - run: npm run build
\`\`\`

---

*Automate everything!*`,
      excerpt: "Những câu chuyện về CI/CD pipeline và những lần nó làm bạn khóc.",
    },
  ]

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    })
  }

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

