from PIL import Image
import os

def create_logo_stack():
    """
    Ghép các file logo trong thư mục 'logos_input' thành một cột ảnh dọc duy nhất,
    giảm chiều cao tổng nếu vượt quá MAX_TOTAL_HEIGHT và điều chỉnh chiều rộng tương ứng.
    """
    # --- CÁC THAM SỐ TÙY CHỈNH ---
    INPUT_DIR = "logos_input"
    OUTPUT_DIR = "../public/images"
    OUTPUT_FILENAME = "tech-logos-stack.png"

    LOGO_WIDTH = 300           # Chiều rộng cố định ban đầu cho mỗi logo (pixels)
    MAX_TOTAL_HEIGHT = 1200    # Chiều cao tối đa cho ảnh cuối cùng (pixels). Nếu tổng > giá trị này sẽ co lại.
    BACKGROUND_COLOR = (255, 255, 255, 0)  # Nền trong suốt

    print("Bắt đầu quá trình ghép logo theo chiều dọc...")

    # 1. Tìm và sắp xếp các file logo
    try:
        logo_files = sorted([f for f in os.listdir(INPUT_DIR) if f.endswith(('.png', '.svg', '.jpg', '.jpeg'))])
        if not logo_files:
            print(f"Lỗi: Không tìm thấy file logo nào trong thư mục '{INPUT_DIR}'.")
            return
        print(f"Đã tìm thấy {len(logo_files)} logo: {logo_files}")
    except FileNotFoundError:
        print(f"Lỗi: Thư mục '{INPUT_DIR}' không tồn tại. Vui lòng tạo và đặt các file logo vào đó.")
        return

    # 2. Mở, thay đổi kích thước theo chiều rộng cố định và lưu các logo vào một danh sách
    images = []
    total_height = 0

    for filename in logo_files:
        try:
            img_path = os.path.join(INPUT_DIR, filename)
            img = Image.open(img_path).convert("RGBA")

            # Giữ nguyên tỷ lệ, thay đổi kích thước theo chiều rộng cố định
            original_width, original_height = img.size
            aspect_ratio = original_height / original_width if original_width != 0 else 1
            new_height = max(1, int(LOGO_WIDTH * aspect_ratio))

            img = img.resize((LOGO_WIDTH, new_height), Image.Resampling.LANCZOS)

            images.append(img)
            total_height += new_height
        except Exception as e:
            print(f"Lỗi khi xử lý file '{filename}': {e}")
            continue

    if not images:
        print("Không có hình ảnh nào được xử lý thành công.")
        return

    print(f"Tổng chiều cao ban đầu: {total_height} px. Giới hạn chiều cao tối đa: {MAX_TOTAL_HEIGHT} px.")

    # 3. Nếu tổng chiều cao vượt quá MAX_TOTAL_HEIGHT, thu nhỏ tất cả ảnh theo tỉ lệ đồng đều
    scale = 1.0
    if total_height > MAX_TOTAL_HEIGHT:
        scale = MAX_TOTAL_HEIGHT / total_height
        print(f"Tổng chiều cao vượt giới hạn. Áp dụng tỉ lệ thu nhỏ: {scale:.4f}")
        for i, img in enumerate(images):
            new_w = max(1, int(img.width * scale))
            new_h = max(1, int(img.height * scale))
            images[i] = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        # cập nhật tổng chiều cao
        total_height = sum(img.height for img in images)

    # 4. Tính toán kích thước của ảnh cuối cùng (chiều rộng lấy max width của các ảnh sau khi điều chỉnh)
    final_width = max(img.width for img in images)
    final_height = total_height

    print(f"Kích thước ảnh cuối cùng: {final_width}x{final_height} pixels.")

    # 5. Tạo một ảnh nền trong suốt mới và dán lần lượt từng logo căn giữa theo chiều ngang
    final_image = Image.new("RGBA", (final_width, final_height), BACKGROUND_COLOR)

    current_y = 0
    for img in images:
        x_offset = (final_width - img.width) // 2
        final_image.paste(img, (x_offset, current_y), img)
        current_y += img.height

    # 6. Lưu ảnh cuối cùng
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    output_path = os.path.join(OUTPUT_DIR, OUTPUT_FILENAME)

    try:
        final_image.save(output_path, "PNG")
        print(f"\nThành công! Cột logo đã được tạo tại: '{os.path.abspath(output_path)}'")
    except Exception as e:
        print(f"Lỗi khi lưu ảnh cuối cùng: {e}")

if __name__ == "__main__":
    create_logo_stack()