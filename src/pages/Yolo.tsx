import { Target, Zap, Layers, TrendingUp } from 'lucide-react';
import yoloPerformanceChart from '@/assets/yolo-performance-chart.png';
import yolov12Architecture from '@/assets/yolov12-architecture.png';

export default function Yolo() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary text-sm font-medium">
              Object Detection
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            <span className="text-primary">YOLOv12</span> Detector
          </h1>
          <p className="text-xl text-muted-foreground">
            "Đôi mắt" của hệ thống - Phát hiện phương tiện với độ chính xác
            99.1%
          </p>
        </div>

        {/* Why YOLO */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            Tại sao chọn YOLOv12?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Tốc độ cực nhanh',
                description:
                  'Real-time inference với latency thấp, phù hợp cho ứng dụng video streaming',
              },
              {
                icon: Target,
                title: 'Độ chính xác cao',
                description:
                  'mAP@0.5 đạt 0.991 trên vehicle detection, vượt trội so với các phiên bản trước',
              },
              {
                icon: Layers,
                title: 'Single-stage detector',
                description:
                  'Kiến trúc một giai đoạn đơn giản hơn Faster R-CNN, dễ tối ưu hóa',
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
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8 text-center">
            Kiến trúc YOLOv12
          </h2>
          <div className="mb-12">
            <img
              src={yolov12Architecture}
              alt="YOLOV12 Architecture"
              className="w-full rounded-2xl shadow-card"
            />
          </div>

          <div className="space-y-8">
            {/* Backbone */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Backbone: CSPDarknet
                  </h3>
                  <p className="text-primary font-medium">
                    Trích xuất đặc trưng từ ảnh đầu vào
                  </p>
                </div>
              </div>
              <div className="space-y-4 ml-16">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Cross Stage Partial Network
                  </h4>
                  <p className="text-muted-foreground">
                    Chia luồng đặc trưng thành hai nhánh, giảm tính toán
                    redundant và tăng khả năng học gradient
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Multiple scales
                  </h4>
                  <p className="text-muted-foreground">
                    Trích xuất đặc trưng ở 3 scale khác nhau (P3, P4, P5) để
                    phát hiện đối tượng ở nhiều kích thước
                  </p>
                </div>
              </div>
            </div>

            {/* Neck */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Neck: FPN + PAN
                  </h3>
                  <p className="text-primary font-medium">
                    Kết hợp đặc trưng đa cấp độ
                  </p>
                </div>
              </div>
              <div className="space-y-4 ml-16">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Feature Pyramid Network (FPN)
                  </h4>
                  <p className="text-muted-foreground">
                    Top-down pathway truyền ngữ cảnh semantic mạnh từ layer cao
                    xuống layer thấp
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Path Aggregation Network (PAN)
                  </h4>
                  <p className="text-muted-foreground">
                    Bottom-up pathway tăng cường localization information từ
                    layer thấp lên layer cao
                  </p>
                </div>
              </div>
            </div>

            {/* Head */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Head: Detection Layer
                  </h3>
                  <p className="text-primary font-medium">
                    Dự đoán bounding boxes và classes
                  </p>
                </div>
              </div>
              <div className="space-y-4 ml-16">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Anchor-based prediction
                  </h4>
                  <p className="text-muted-foreground">
                    Sử dụng pre-defined anchor boxes được tối ưu cho vehicle
                    shapes
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Multi-scale detection
                  </h4>
                  <p className="text-muted-foreground">
                    3 detection heads ở scale khác nhau cho xe gần (lớn), xe
                    vừa, và xe xa (nhỏ)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loss Function */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8 text-center">
            Hàm Loss
          </h2>
          <div className="bg-secondary/30 rounded-2xl p-8 lg:p-12">
            <div className="max-w-7xl mx-auto">
              <p className="text-xl text-muted-foreground mb-6">
                YOLOv12 sử dụng loss function kết hợp 3 thành phần:
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Localization Loss (CIoU)
                    </h4>
                    <p className="text-muted-foreground">
                      Complete Intersection over Union - đo lường độ chính xác
                      của bounding box dự đoán so với ground truth
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Confidence Loss
                    </h4>
                    <p className="text-muted-foreground">
                      Binary cross-entropy cho objectness score - xác suất box
                      chứa đối tượng
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Classification Loss
                    </h4>
                    <p className="text-muted-foreground">
                      Cross-entropy cho multi-class prediction - phân loại loại
                      phương tiện (car, truck, bus...)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8 text-center">
            Biểu đồ hiệu năng YOLOv12
          </h2>
          <div className="bg-card rounded-2xl p-6 border border-border">
            <img
              src={yoloPerformanceChart}
              alt="YOLOv12 performance chart"
              className="w-full rounded-lg shadow-card"
            />
            <p className="text-sm text-muted-foreground mt-4">
              Biểu đồ mô tả mAP và latency trên dataset vehicle. Giá trị thể
              hiện hiệu năng của mô hình ở nhiều điều kiện khác nhau.
            </p>
          </div>
        </div>

        {/* Performance */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            Hiệu năng đạt được
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                metric: 'mAP@0.5',
                value: '0.991',
                description: 'Mean Average Precision',
              },
              {
                icon: Zap,
                metric: 'Inference Time',
                value: '12ms',
                description: 'Per frame trên CPU',
              },
              {
                icon: TrendingUp,
                metric: 'F1-Score',
                value: '0.98',
                description: 'Precision & Recall',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 border border-border text-center"
              >
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-sm text-muted-foreground mb-2">
                  {item.metric}
                </div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
