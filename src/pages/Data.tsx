import {
  Database,
  Image,
  Camera,
  CheckCircle,
  Layers,
  Users,
} from 'lucide-react';
import datasetsOverview from '@/assets/datasets-overview.jpg';
import dataFunnelDiagram from '@/assets/data-funnel-diagram.png';
import hcmcCameraMap from '@/assets/hcmc-camera-map.png';

export default function Data() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary text-sm font-medium">
              Nền tảng dữ liệu
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Dữ liệu <span className="text-primary">Huấn luyện</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Hơn 1 triệu ảnh phương tiện từ nhiều nguồn khác nhau
          </p>
        </div>

        {/* Overview Image */}
        <div className="mb-20 animate-fade-in">
          <img
            src={datasetsOverview}
            alt="Datasets Overview"
            className="w-full rounded-2xl shadow-card"
          />
        </div>

        {/* === PHẦN 1: SƠ ĐỒ DATA FUNNEL === */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            Chiến lược Dữ liệu "Đa nguồn - Một đích"
          </h2>
          <div className="max-w-5xl mx-auto">
            <img
              src={dataFunnelDiagram}
              alt="Data Funnel Diagram"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Re-ID Datasets */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-12">
            Dữ liệu Re-Identification
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Cung cấp sự đa dạng về chủng loại xe, góc chụp, và điều kiện ánh
            sáng
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vehicle-1M */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Vehicle-1M
                  </h3>
                  <p className="text-primary font-medium">Dataset khổng lồ</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Hơn 1 triệu ảnh</strong>{' '}
                    từ ~50,000 ID phương tiện duy nhất
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Đa dạng về{' '}
                    <strong className="text-foreground">chủng loại xe</strong>:
                    sedan, SUV, truck, bus
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Nền tảng cho mô hình{' '}
                    <strong className="text-foreground">
                      tổng quát hóa tốt
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* VRIC & VehicleID */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    VRIC & VehicleID
                  </h3>
                  <p className="text-primary font-medium">
                    Dữ liệu từ camera thực tế
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Thu thập từ{' '}
                    <strong className="text-foreground">
                      camera giám sát thực tế
                    </strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Tăng khả năng{' '}
                    <strong className="text-foreground">chống chịu</strong> với
                    điều kiện môi trường khắc nghiệt
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Bao gồm nhiều{' '}
                    <strong className="text-foreground">
                      góc quay và ánh sáng
                    </strong>{' '}
                    khác nhau
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LPR Datasets */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-12">
            Dữ liệu License Plate
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Tập trung vào các ảnh đã được chú thích biển số chi tiết
          </p>

          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                <Image className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Roboflow Universe
                </h3>
                <p className="text-primary font-medium">
                  Bộ sưu tập từ cộng đồng
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Tổng hợp nhiều bộ dữ liệu{' '}
                    <strong className="text-foreground">
                      chuyên biệt về biển số
                    </strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Annotation chất lượng cao từ{' '}
                    <strong className="text-foreground">cộng đồng</strong>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Đa dạng về{' '}
                    <strong className="text-foreground">
                      định dạng biển số
                    </strong>{' '}
                    quốc tế
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Tối ưu cho{' '}
                    <strong className="text-foreground">
                      biển số Việt Nam
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-world Data */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-5">
            Dữ liệu Thực tế
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Đảm bảo mô hình hoạt động hiệu quả trong môi trường triển khai thực
            tế
          </p>

          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12">
            <div className="flex items-start gap-6 mb-8">
              <div className="p-4 bg-white/10 rounded-lg flex-shrink-0">
                <Camera className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-heading font-bold text-white mb-3">
                  Mạng lưới Camera TP.HCM
                </h3>
                <p className="text-xl text-white/90">
                  Thu thập tự động từ hệ thống giám sát thực tế
                </p>

                <img
                  src={hcmcCameraMap}
                  alt="Bản đồ camera TP.HCM"
                  className="mt-6 w-full rounded-lg shadow-lg border border-white/10"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-white">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <p>
                  Thu thập từ <strong>~200 camera</strong> trong mạng lưới giám
                  sát TP.HCM
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <p>
                  Dữ liệu <strong>"sống"</strong> phản ánh điều kiện giao thông
                  thực tế
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <p>
                  Sử dụng để <strong>kiểm thử và tinh chỉnh</strong> mô hình
                  liên tục
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <p>
                  Bao gồm các <strong>edge cases</strong> khó trong thực tế
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* === PHẦN 4: THỐNG KÊ TỔNG QUAN === */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nền tảng Dữ liệu trong những Con số
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { value: '1M+', label: 'Ảnh Huấn luyện', icon: Layers },
              { value: '70K+', label: 'Định danh Xe', icon: Users },
              { value: '200+', label: 'Camera Thực tế', icon: Camera },
              { value: '1.5TB+', label: 'Tổng Dung lượng', icon: Database },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-tech-card rounded-lg p-8 border border-tech-border text-center transform hover:scale-105 hover:border-tech-highlight transition-all duration-300"
              >
                <stat.icon
                  className="h-12 w-12 highlight mx-auto mb-4"
                  strokeWidth={1.5}
                />
                <div className="text-5xl font-black text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-tech-subtle">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
