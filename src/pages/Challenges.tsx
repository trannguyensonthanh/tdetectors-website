import { Brain, Cpu as CpuIcon, Eye, Layers } from 'lucide-react';
import reidChallenge from '@/assets/reid-challenge.png';

export default function Challenges() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary text-sm font-medium">
              Thách thức kép
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Hai Rào cản <span className="text-primary">Chính</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Re-Identification và Hiệu năng - Cả hai đều cần phải vượt qua
          </p>
        </div>

        {/* Challenge 1: Re-ID */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={reidChallenge}
                alt="Re-ID Challenge"
                className="rounded-2xl shadow-card"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                  Thách thức Re-Identification
                </h2>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                Làm thế nào để nhận dạng cùng một chiếc xe khi nó xuất hiện ở
                các camera khác nhau, trong điều kiện hoàn toàn khác biệt?
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: 'Góc quay thay đổi',
                    description:
                      'Camera A quay từ phía trước, Camera B quay từ bên cạnh - cùng một xe nhưng hình ảnh khác biệt hoàn toàn',
                  },
                  {
                    title: 'Điều kiện ánh sáng',
                    description:
                      'Ban ngày vs ban đêm, trời nắng vs trời mưa - màu sắc và chi tiết thay đổi đáng kể',
                  },
                  {
                    title: 'Độ phân giải & chất lượng',
                    description:
                      'Khoảng cách từ camera, chất lượng ống kính, và tốc độ di chuyển tạo ra ảnh với độ rõ nét khác nhau',
                  },
                  {
                    title: 'Tương đồng giữa các xe',
                    description:
                      'Nhiều xe cùng loại, cùng màu, cùng nhà sản xuất - làm sao phân biệt?',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-5 border border-border"
                  >
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why it's hard */}
          <div className="mt-12 bg-secondary/30 rounded-2xl p-8 lg:p-12 border border-border shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                <Brain className="h-8 w-8 text-primary" />
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                  Tại sao đây là bài toán khó?
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Re-Identification không chỉ là bài toán nhận diện — nó phải
                  vận hành trong thế giới thực với hàng triệu biến thể hình ảnh,
                  yêu cầu cả đặc trưng phân biệt cao và hiệu năng đáp ứng thời
                  gian thực.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-card rounded-lg p-4 border border-border">
                    <h4 className="font-semibold text-foreground mb-2 text-xl">
                      Không gian đặc trưng khổng lồ
                    </h4>
                    <p className="text-lg text-muted-foreground mb-3">
                      Số lượng phương tiện, góc nhìn, khoảng cách và điều kiện
                      môi trường tạo thành không gian tìm kiếm rất rộng — gây
                      khó cho việc học biểu diễn tổng quát.
                    </p>
                    <ul className="text-lg text-muted-foreground space-y-1">
                      <li>• Hàng triệu cá thể khả dĩ</li>
                      <li>• Biến thể góc quay & phối cảnh</li>
                      <li>• Thay đổi màu sắc do ánh sáng</li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-lg p-4 border border-border">
                    <h4 className="font-semibold text-foreground mb-2 text-xl">
                      Đặc trưng phân biệt mong manh
                    </h4>
                    <p className="text-lg text-muted-foreground mb-3">
                      Các yếu tố nhận dạng thường là chi tiết nhỏ (logo, vết
                      xước, phụ kiện) dễ bị che khuất, nhoè, hoặc trùng lặp giữa
                      nhiều phương tiện.
                    </p>
                    <ul className="text-lg text-muted-foreground space-y-1">
                      <li>• Chi tiết dễ che khuất</li>
                      <li>• Nhiễu và mờ do chuyển động</li>
                      <li>• Tương đồng cao giữa các mẫu xe</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center gap-3 bg-muted/5 rounded-md p-3 border border-border">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                      1M+
                    </div>
                    <div>
                      <div className="text-xl text-muted-foreground">
                        ID khả dĩ
                      </div>
                      <div className="font-semibold text-foreground text-lg">
                        Hàng triệu
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-muted/5 rounded-md p-3 border border-border">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                      24/7
                    </div>
                    <div>
                      <div className="text-xl text-muted-foreground">
                        Điều kiện
                      </div>
                      <div className="font-semibold text-foreground text-lg">
                        Ngày/đêm, mưa/nắng
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-muted/5 rounded-md p-3 border border-border">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                      ≈1%
                    </div>
                    <div>
                      <div className="text-xl text-muted-foreground">
                        Độ khác biệt
                      </div>
                      <div className="font-semibold text-foreground text-lg">
                        Chi tiết nhỏ quyết định
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-lg p-4 border border-primary/10">
                  <h4 className="font-semibold text-foreground mb-2 text-2xl">
                    Hệ quả
                  </h4>
                  <p className="text-lg text-muted-foreground mb-2">
                    Muốn đạt độ chính xác cao cần mô hình mạnh — nhưng mô hình
                    mạnh thường nặng và chậm. Ngược lại, mô hình nhẹ nhanh nhưng
                    dễ bỏ sót các khác biệt tinh vi.
                  </p>
                  <p className="text-lg text-primary font-semibold">
                    Nhiệm vụ: tìm điểm cân bằng — đặc trưng đủ mạnh để phân
                    biệt, đủ nhẹ để chạy realtime trên CPU.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge 2: Performance */}
        <div>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <CpuIcon className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                Thách thức Hiệu năng & Chi phí
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Các giải pháp Re-ID hiện đại thường phụ thuộc vào GPU - rào cản
              lớn cho triển khai thực tế
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Layers,
                title: 'Mô hình Deep Learning nặng',
                description:
                  'Vision Transformers và CNNs sâu yêu cầu khối lượng tính toán khổng lồ để trích xuất đặc trưng chất lượng cao',
              },
              {
                icon: CpuIcon,
                title: 'Phụ thuộc GPU đắt đỏ',
                description:
                  'GPU chuyên dụng (Tesla, RTX series) có giá từ hàng chục đến hàng trăm triệu đồng, khó mở rộng quy mô',
              },
              {
                icon: Eye,
                title: 'Thời gian thực bị hy sinh',
                description:
                  'Trên CPU thông thường, inference có thể mất vài giây cho mỗi frame - không thể chấp nhận được',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* The Trade-off */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
              Bài toán đánh đổi (Trade-off Dilemma)
            </h3>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-foreground mb-2">
                      Độ chính xác cao → Mô hình phức tạp → Chi phí lớn
                    </h4>
                    <p className="text-lg">
                      Để đạt độ chính xác Re-ID tốt, cần dùng mạng neural sâu
                      (ViT, ResNet-152) nhưng chúng chỉ chạy nhanh trên GPU.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-xl">
                      Tốc độ nhanh → Mô hình đơn giản → Độ chính xác thấp
                    </h4>
                    <p className="text-lg ">
                      Mô hình nhẹ có thể chạy trên CPU nhưng thường không đủ
                      mạnh để phân biệt các phương tiện tương đồng.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">?</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2 text-xl">
                      Giải pháp của Tdetectors
                    </h4>
                    <p className="text-lg">
                      Làm thế nào để có cả hai: Độ chính xác cao VÀ tốc độ thời
                      gian thực trên CPU phổ thông?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
