import { MemberCard } from "@/components/member-card"

const members = [
  {
    id: "1",
    name: "C",
    role: "Head of intern - Full Snake Development",
    bio: "Xếp của các loại intern. Chuyên viết code như rắn bò, nhưng code vẫn chạy được... đôi khi. Có thể debug cả ngày không mệt nhưng mệt khi phải giải thích code cho người khác.",
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
    bio: "Vua còn tent. Chuyên tạo content nhưng đôi khi content tạo ra chính mình cũng không hiểu. Có thể viết cả ngày về một chủ đề mà không ai biết đang viết về cái gì.",
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
    bio: "Job nào cũng intern được blabla. Làm HR, làm Designer, làm Thư kí... tất cả đều ở mức intern nhưng vẫn hoàn thành tốt công việc. Chuyên gia trong việc làm nhiều việc cùng lúc nhưng tất cả đều ở mức... intern.",
    avatar: "/images/members/meme-rong-3-dau.jpg",
    social: {
      tiktok: "https://tiktok.com",
      instagram: "https://instagram.com",
    }
  },
]

export const metadata = {
  title: "Members - NaisUS Family",
  description: "Meet the amazing members of NaisUS Family",
}

export default function MembersPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the Family</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Những thành viên đang góp phần tạo nên chaos 200% của chúng tôi
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}

