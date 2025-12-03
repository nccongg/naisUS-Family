# Hướng dẫn Fix Lỗi 404 khi Deploy

## Các vấn đề đã được sửa:

### ✅ 1. Sửa .gitignore để commit các file ảnh cần thiết
- Đã thêm exception cho `banner.jpg` và `logo.png` trong `.gitignore`
- Các file này sẽ được commit và deploy lên Vercel

### ✅ 2. Tạo các trang Policy còn thiếu
- `/privacy` - Privacy Policy page
- `/terms` - Terms & Conditions page  
- `/cookies` - Cookie Policy page
- `/guidelines` - Community Guidelines page

### ⚠️ 3. Favicon.ico
- Đã thêm metadata cho favicon trong `layout.tsx`
- Bạn cần thêm file `favicon.ico` vào thư mục `public/`

## Các bước tiếp theo:

### Bước 1: Commit các file ảnh
```bash
# Kiểm tra xem các file ảnh có được track không
git status

# Nếu banner.jpg và logo.png chưa được track, thêm chúng:
git add public/images/banner.jpg
git add public/images/logo.png
git commit -m "Add essential images for deployment"
git push
```

### Bước 2: Thêm Favicon
Bạn có thể:
1. Tạo favicon.ico và đặt vào `public/favicon.ico`
2. Hoặc sử dụng online tool như [favicon.io](https://favicon.io) để tạo favicon
3. Hoặc tạm thời bỏ qua (browser sẽ không hiển thị favicon nhưng không ảnh hưởng đến website)

### Bước 3: Deploy lại
Sau khi commit các file ảnh, Vercel sẽ tự động deploy lại và các lỗi 404 sẽ được fix.

## Kiểm tra sau khi deploy:

1. ✅ `/images/banner.jpg` - Không còn lỗi 404
2. ✅ `/images/logo.png` - Không còn lỗi 404
3. ✅ `/privacy` - Trang hiển thị đúng
4. ✅ `/terms` - Trang hiển thị đúng
5. ✅ `/cookies` - Trang hiển thị đúng
6. ✅ `/guidelines` - Trang hiển thị đúng
7. ⚠️ `/favicon.ico` - Cần thêm file (không bắt buộc)

