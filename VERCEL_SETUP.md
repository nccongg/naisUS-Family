# Hướng dẫn Setup Auto-Deploy cho Branch Dev trên Vercel

## Cách 1: Setup trong Vercel Dashboard (Khuyến nghị)

### Bước 1: Vào Vercel Dashboard
1. Đăng nhập vào [vercel.com](https://vercel.com)
2. Chọn project của bạn

### Bước 2: Cấu hình Git Integration
1. Vào **Settings** → **Git**
2. Đảm bảo repository đã được kết nối với Vercel

### Bước 3: Cấu hình Production Branch
1. Vào **Settings** → **Git**
2. Tìm phần **Production Branch**
3. Đặt **Production Branch** là `main` (hoặc `master`)

### Bước 4: Thêm Branch `dev` vào Preview Deployments
1. Vào **Settings** → **Git**
2. Tìm phần **Ignored Build Step** hoặc **Deploy Hooks**
3. Hoặc vào **Settings** → **Git** → **Deploy Hooks**
4. Vercel sẽ **tự động deploy tất cả các branch** khi bạn push code

### Bước 5: Kiểm tra Branch Settings
1. Vào **Deployments** tab
2. Bạn sẽ thấy các deployment từ các branch khác nhau
3. Mỗi branch sẽ có URL preview riêng:
   - `main` → Production URL (ví dụ: `naisus-family.vercel.app`)
   - `dev` → Preview URL (ví dụ: `naisus-family-git-dev-username.vercel.app`)

## Cách 2: Sử dụng vercel.json (Tùy chọn)

File `vercel.json` đã được tạo để đảm bảo cấu hình được lưu trong code.

## Cách hoạt động

- **Push lên `main`**: Deploy lên production (URL chính)
- **Push lên `dev`**: Deploy lên preview environment (URL preview riêng)
- **Push lên branch khác**: Cũng sẽ có preview URL riêng

## Kiểm tra Auto-Deploy

1. Push code lên branch `dev`:
   ```bash
   git checkout dev
   git add .
   git commit -m "Test auto-deploy"
   git push origin dev
   ```

2. Vào Vercel Dashboard → **Deployments**
3. Bạn sẽ thấy deployment mới đang chạy từ branch `dev`
4. Sau khi build xong, bạn sẽ có preview URL

## Lưu ý

- **Production Branch**: Chỉ branch này mới deploy lên production URL
- **Preview Deployments**: Tất cả các branch khác sẽ có preview URL riêng
- **Environment Variables**: Có thể set khác nhau cho production và preview

## Troubleshooting

### Không thấy deployment từ branch `dev`
1. Kiểm tra Vercel đã kết nối đúng repository chưa
2. Kiểm tra branch `dev` đã tồn tại trên GitHub chưa
3. Vào **Settings** → **Git** → kiểm tra **Production Branch** setting

### Muốn disable auto-deploy cho một số branch
1. Vào **Settings** → **Git**
2. Tìm **Ignored Build Step**
3. Thêm điều kiện để skip build (ví dụ: skip branch `test`)

