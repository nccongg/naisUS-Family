import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Youtube, Music } from "lucide-react"
import Image from "next/image"

interface Member {
  id: string
  name: string
  role: string
  bio: string
  avatar?: string
  social?: {
    tiktok?: string
    facebook?: string
    instagram?: string
    youtube?: string
  }
}

interface MemberCardProps {
  member: Member
}

export function MemberCard({ member }: MemberCardProps) {
  // Nếu là ảnh rồng 3 đầu, cần crop theo vị trí
  const isDragonImage = member.avatar?.includes('meme-rong-3-dau')
  
  // Tính toán vị trí crop cho mỗi đầu rồng
  const getDragonTransform = () => {
    if (!isDragonImage) return "translateX(0%)"
    
    // member.id === "1" -> đầu trái (0%)
    // member.id === "2" -> đầu giữa (-33.33%)
    // member.id === "3" -> đầu phải (-66.66%)
    const translateX = member.id === "1" ? "0%" : member.id === "2" ? "-33.33%" : "-66.66%"
    
    return `translateX(${translateX})`
  }
  
  // Điều chỉnh object-position cho từng đầu rồng để hiển thị đúng phần đầu
  const getDragonObjectPosition = () => {
    if (!isDragonImage) return "center center"
    
    // Điều chỉnh để hiển thị phần đầu rồng, đặc biệt là đầu giữa
    // Sử dụng vị trí thấp hơn để hiển thị đầy đủ phần đầu
    if (member.id === "1") {
      return "left 30%" // Đầu trái - căn ở 30% từ trên
    } else if (member.id === "2") {
      return "center 30%" // Đầu giữa - căn ở 30% từ trên
    } else {
      return "right 30%" // Đầu phải - căn ở 30% từ trên
    }
  }
  
  return (
    <Card className="overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] border-border">
      <div className="relative h-64 w-full bg-card border-b border-border overflow-hidden">
        {member.avatar ? (
          isDragonImage ? (
            <div className="relative w-full h-full overflow-hidden">
              <div 
                className="absolute w-[300%] h-full"
                style={{ transform: getDragonTransform() }}
              >
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: getDragonObjectPosition() }}
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>
          ) : (
            <Image
              src={member.avatar}
              alt={member.name}
              fill
              className="object-cover"
            />
          )
        ) : (
          <div className="flex items-center justify-center h-full text-6xl">
            {member.name.charAt(0)}
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 italic">
          {member.role}
        </p>
        <p className="text-sm mb-4 line-clamp-3">{member.bio}</p>
        {member.social && (
          <div className="flex items-center space-x-2">
            {member.social.tiktok && (
              <a
                href={member.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-card hover:text-primary transition-all duration-200"
              >
                <Music className="h-4 w-4" />
              </a>
            )}
            {member.social.facebook && (
              <a
                href={member.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-card hover:text-primary transition-all duration-200"
              >
                <Facebook className="h-4 w-4" />
              </a>
            )}
            {member.social.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-card hover:text-primary transition-all duration-200"
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
            {member.social.youtube && (
              <a
                href={member.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-card hover:text-primary transition-all duration-200"
              >
                <Youtube className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

