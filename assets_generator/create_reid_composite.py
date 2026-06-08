from PIL import Image
import os

def create_reid_composite_image_v2():
    """
    Ghép 4 ảnh camera thành một hàng trên.
    Resize ảnh bản đồ để có cùng chiều rộng với hàng trên và đặt ở hàng dưới.
    """
    # --- CÁC THAM SỐ TÙY CHỈNH ---
    INPUT_DIR = "reid_composite_input"
    OUTPUT_DIR = "../public/images"
    OUTPUT_FILENAME = "reid-demo-composite.png"
    
    TOP_ROW_FILES = [
        "demo-reid-c43.png", 
        "demo-reid-c41.png", 
        "demo-reid-c44.png", 
        "demo-reid-c42.png"
    ]
    BOTTOM_ROW_FILE = "demo-reid-map-trajectory.png"

    PADDING = 10  # Khoảng cách giữa các ảnh
    BACKGROUND_COLOR = "#0a192f" # Màu nền (tech-bg)

    # --- SCRIPT LOGIC ---
    print("Bắt đầu tạo ảnh composite cho demo Re-ID (v2)...")

    # 1. Tải tất cả các hình ảnh
    try:
        top_images = [Image.open(os.path.join(INPUT_DIR, f)) for f in TOP_ROW_FILES]
        map_image = Image.open(os.path.join(INPUT_DIR, BOTTOM_ROW_FILE))
        print(f"Đã tải thành công {len(top_images)} ảnh camera và 1 ảnh bản đồ.")
    except FileNotFoundError as e:
        print(f"Lỗi: Không tìm thấy file ảnh - {e}. Hãy đảm bảo tất cả các file ảnh nằm trong '{INPUT_DIR}'.")
        return
    except Exception as e:
        print(f"Đã xảy ra lỗi khi tải ảnh: {e}")
        return

    # 2. Tính toán kích thước cho hàng trên
    # Chiều rộng của hàng trên là tổng chiều rộng các ảnh con cộng với khoảng cách
    total_width_top = sum(img.width for img in top_images) + PADDING * (len(top_images) - 1)
    # Chiều cao của hàng trên là chiều cao của ảnh con cao nhất
    max_height_top = max(img.height for img in top_images)

    # 3. *** THAY ĐỔI CHÍNH: RESIZE ẢNH BẢN ĐỒ ***
    # Chiều rộng mới của bản đồ sẽ bằng chiều rộng của hàng trên
    new_map_width = total_width_top
    
    # Tính chiều cao mới của bản đồ để giữ nguyên tỷ lệ
    map_original_width, map_original_height = map_image.size
    map_aspect_ratio = map_original_height / map_original_width
    new_map_height = int(new_map_width * map_aspect_ratio)

    # Resize ảnh bản đồ với chất lượng cao
    print(f"Resizing ảnh bản đồ từ {map_original_width}x{map_original_height} -> {new_map_width}x{new_map_height}")
    map_image_resized = map_image.resize((new_map_width, new_map_height), Image.Resampling.LANCZOS)

    # 4. Tính toán kích thước của ảnh composite cuối cùng
    final_width = total_width_top # Chiều rộng cuối cùng giờ đây chính bằng chiều rộng hàng trên
    final_height = max_height_top + PADDING + new_map_height # Chiều cao là tổng của 2 hàng và padding
    
    print(f"Kích thước ảnh cuối cùng sẽ là: {final_width}x{final_height} pixels.")

    # 5. Tạo một ảnh nền mới
    final_image = Image.new("RGB", (final_width, final_height), BACKGROUND_COLOR)

    # 6. Dán các ảnh của hàng trên vào (Logic không đổi)
    current_x = 0
    for img in top_images:
        y_offset = (max_height_top - img.height) // 2
        final_image.paste(img, (current_x, y_offset))
        current_x += img.width + PADDING

    # 7. Dán ảnh bản đồ đã được resize ở hàng dưới
    y_map = max_height_top + PADDING
    # Vì chiều rộng đã bằng nhau nên không cần tính toán vị trí x nữa
    final_image.paste(map_image_resized, (0, y_map))

    # 8. Lưu ảnh cuối cùng
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    output_path = os.path.join(OUTPUT_DIR, OUTPUT_FILENAME)
    
    try:
        final_image.save(output_path, "PNG", quality=95)
        print(f"\nThành công! Ảnh composite đã được tạo tại: '{os.path.abspath(output_path)}'")
    except Exception as e:
        print(f"Lỗi khi lưu ảnh cuối cùng: {e}")

if __name__ == "__main__":
    create_reid_composite_image_v2()