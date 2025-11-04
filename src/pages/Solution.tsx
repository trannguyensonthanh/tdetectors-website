import { CheckCircle, Layers, Zap, Target, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Solution() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary text-sm font-medium">
              Giải pháp của chúng tôi
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Tdetectors <span className="text-primary">MC-MOT System</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Kết hợp Deep Learning tiên tiến với tối ưu hóa phần cứng thông minh
          </p>
        </div>

        {/* Core Philosophy */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-6 lg:p-12 text-center shadow-xl transform transition-transform hover:-translate-y-2">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Triết lý thiết kế
            </h2>
            <p className="text-lg lg:text-xl text-white/90 max-w-5xl mx-auto mb-6">
              Không hy sinh độ chính xác — tối ưu hóa cho CPU và môi trường thực
              tế. Tdetectors hướng đến hiệu năng thời thực, ổn định và dễ triển
              khai trên hệ thống biên (edge) mà vẫn giữ chất lượng nhận dạng
              hàng đầu.
            </p>

            <blockquote className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-lg p-4 italic text-white/80 mb-8">
              "Tốc độ khi cần thiết. Độ chính xác khi quan trọng. Triển khai khi
              sẵn sàng."
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
              <div className="flex flex-col items-center bg-white/5 rounded-lg p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-3">
                  <Layers className="h-6 w-6 text-white" aria-hidden />
                </div>
                <h3 className="text-white font-medium text-2xl mb-1">
                  Chuẩn xác
                </h3>
                <p className="text-lg text-white/80">
                  Mô hình được tinh chỉnh để giảm false-positive và tăng recall.
                </p>
              </div>

              <div className="flex flex-col items-center bg-white/5 rounded-lg p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-3">
                  <Zap className="h-6 w-6 text-white" aria-hidden />
                </div>
                <h3 className="text-white font-medium mb-1 text-2xl">
                  Tối ưu hóa
                </h3>
                <p className="text-lg text-white/80">
                  Pipeline nhẹ, tối ưu cho CPU với inference nhanh và ổn định.
                </p>
              </div>

              <div className="flex flex-col items-center bg-white/5 rounded-lg p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-3">
                  <Target className="h-6 w-6 text-white" aria-hidden />
                </div>
                <h3 className="text-white font-medium mb-1 text-2xl">
                  Triển khai dễ dàng
                </h3>
                <p className="text-lg text-white/80">
                  Tài liệu và công cụ hỗ trợ giúp tích hợp nhanh vào hệ thống
                  thực tế.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/architecture" aria-label="Xem kiến trúc hệ thống">
                <Button
                  size="lg"
                  className="bg-white text-primary font-semibold hover:bg-white/5 hover:text-primary-foreground"
                >
                  Xem kiến trúc hệ thống
                </Button>
              </Link>
              <Link to="/results" aria-label="Xem kết quả đạt được">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5"
                >
                  Kết quả đạt được
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Key Components */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            Các thành phần chính
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'YOLOv12',
                subtitle: 'Phát hiện phương tiện',
                description:
                  'SOTA object detector với mAP 0.991, cân bằng hoàn hảo giữa tốc độ và độ chính xác',
                link: '/yolo',
                color: 'text-primary',
              },
              {
                icon: Layers,
                title: 'BoT-SORT',
                subtitle: 'Tracking trong camera',
                description:
                  'Kết hợp Kalman Filter và Re-ID embedding để theo dõi ổn định trong một camera',
                link: '/botsort',
                color: 'text-primary',
              },
              {
                icon: Code,
                title: 'Vision Transformer',
                subtitle: 'Trích xuất đặc trưng',
                description:
                  "Self-attention mechanism học được 'dấu vân tay hình ảnh' duy nhất cho mỗi phương tiện",
                link: '/vit',
                color: 'text-primary',
              },
              {
                icon: Zap,
                title: 'Triplet Loss',
                subtitle: 'Học metric',
                description:
                  'Huấn luyện mô hình để tạo embedding space phân tách rõ ràng giữa các xe khác nhau',
                link: '/triplet-loss',
                color: 'text-primary',
              },
              {
                icon: Target,
                title: 'Faiss Index',
                subtitle: 'Tra cứu nhanh',
                description:
                  'Tìm kiếm similarity trong không gian hàng triệu vector với độ trễ cực thấp',
                link: '/faiss',
                color: 'text-primary',
              },
              {
                icon: Zap,
                title: 'OpenVINO™',
                subtitle: 'Tối ưu hóa inference',
                description:
                  'Intel toolkit tăng tốc toàn bộ pipeline, đạt 15.23 FPS trên CPU',
                link: '/openvino',
                color: 'text-primary',
              },
            ].map((component, index) => (
              <Link
                key={index}
                to={component.link}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-card group"
              >
                <component.icon
                  className={`h-10 w-10 ${component.color} mb-4 group-hover:scale-110 transition-transform`}
                />
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                  {component.title}
                </h3>
                <p className="text-sm text-primary mb-3">
                  {component.subtitle}
                </p>
                <p className="text-sm text-muted-foreground">
                  {component.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            Quy trình hoạt động
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: 1,
                title: 'Data Ingestion',
                description:
                  'Thu thập frame từ nhiều camera không giao nhau trong mạng lưới',
              },
              {
                step: 2,
                title: 'Vehicle Detection & Tracking',
                description:
                  'YOLOv12 phát hiện phương tiện, BoT-SORT theo dõi từng xe trong camera',
              },
              {
                step: 3,
                title: 'License Plate Recognition',
                description:
                  'Trích xuất biển số xe (nếu có) làm đặc trưng bổ sung',
              },
              {
                step: 4,
                title: 'Re-ID Feature Extraction',
                description:
                  'Vision Transformer tạo embedding vector 512-D cho mỗi phương tiện',
              },
              {
                step: 5,
                title: 'Multi-Camera Association',
                description:
                  'Faiss Index tìm kiếm similarity, liên kết cùng một xe qua các camera khác nhau',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6 bg-card rounded-lg p-6 border border-border"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-6">
            Khám phá chi tiết từng công nghệ
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/architecture">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Xem kiến trúc hệ thống
              </Button>
            </Link>
            <Link to="/yolo">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 hover:bg-primary/10"
              >
                Tìm hiểu về YOLOv12
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
