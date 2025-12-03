# Images Directory

Thư mục chứa các hình ảnh cho website NaisUS Family.

## Cấu trúc thư mục:

- `members/` - Ảnh của các thành viên trong gia đình
- `blog/` - Ảnh thumbnail và hình ảnh cho blog posts
- `tech/` - Ảnh cho tech corner
- `avatars/` - Avatar images cho members

## Cách sử dụng:

Trong Next.js, bạn có thể reference các file trong thư mục `public` trực tiếp:

```tsx
// Ví dụ:
<Image src="/images/members/c.jpg" alt="Member C" width={200} height={200} />
```

