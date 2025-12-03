# Hướng dẫn Deploy lên GitHub Pages

## ⚠️ Lưu ý quan trọng

Ứng dụng này sử dụng:
- **API Routes** (`/api/contact`, `/api/posts`)
- **Server-side rendering** với Prisma database
- **Server Components** trong Next.js

GitHub Pages **CHỈ hỗ trợ static files**, nên:
- ❌ API routes sẽ **KHÔNG hoạt động** trên GitHub Pages
- ❌ Database queries sẽ **KHÔNG hoạt động** 
- ✅ Chỉ các trang tĩnh mới hiển thị được

## Giải pháp được khuyến nghị: Vercel

Vercel là nền tảng tốt nhất cho Next.js vì:
- ✅ Hỗ trợ đầy đủ API routes
- ✅ Hỗ trợ Server Components
- ✅ Hỗ trợ database (Prisma)
- ✅ Deploy tự động từ GitHub
- ✅ Miễn phí cho personal projects

### Cách deploy lên Vercel:

1. Push code lên GitHub
2. Vào [vercel.com](https://vercel.com)
3. Import project từ GitHub
4. Thêm environment variable: `DATABASE_URL`
5. Deploy!

## Nếu vẫn muốn dùng GitHub Pages

### Bước 1: Cấu hình GitHub Pages

1. Vào repository trên GitHub
2. Settings → Pages
3. Source: chọn **GitHub Actions**

### Bước 2: Cập nhật BASE_PATH (nếu cần)

Nếu repository của bạn **KHÔNG phải** `username.github.io`, bạn cần cập nhật `BASE_PATH` trong file `.github/workflows/deploy.yml`:

```yaml
BASE_PATH: '/NaisUS-Family'  # Thay bằng tên repo của bạn
```

### Bước 3: Push code

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push
```

### Bước 4: Kiểm tra deployment

1. Vào tab **Actions** trên GitHub
2. Xem workflow đang chạy
3. Sau khi hoàn thành, vào **Settings → Pages** để xem URL

## Xử lý lỗi

### Build fails vì API routes

API routes không thể export thành static files. Bạn có 2 lựa chọn:

1. **Xóa hoặc comment API routes** (không khuyến nghị)
2. **Chuyển sang Vercel** (khuyến nghị)

### Ảnh không hiển thị

Đảm bảo `next.config.js` có `images: { unoptimized: true }` (đã được thêm)

### Links không hoạt động

Kiểm tra `basePath` trong `next.config.js` và `BASE_PATH` trong workflow file

## Kết luận

**Khuyến nghị mạnh mẽ**: Sử dụng **Vercel** thay vì GitHub Pages cho ứng dụng Next.js này.

GitHub Pages chỉ phù hợp cho:
- Static websites
- Documentation sites
- Landing pages đơn giản

Vercel phù hợp cho:
- Next.js applications
- API routes
- Server-side features
- Database integration

