import {
  ArrowRight,
  Database,
  Eye,
  Cpu,
  Layers,
  Link as LinkIcon,
} from 'lucide-react';
import systemArchitecture from '@/assets/system-architecture.png';

export default function Architecture() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary text-sm font-medium">
              System Architecture
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Kiến trúc <span className="text-primary">End-to-End</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Pipeline 5 bước từ video input đến multi-camera association
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-20 animate-fade-in">
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-border">
            <img
              src={systemArchitecture}
              alt="System Architecture"
              className="w-full"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Kiến trúc tổng thể hệ thống Tdetectors MC-MOT
          </p>
        </div>

        {/* Pipeline Steps */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            Pipeline xử lý chi tiết
          </h2>
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">
                      BƯỚC 1
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      Data Ingestion
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Thu thập video streams từ nhiều camera không giao nhau trong
                  mạng lưới. Mỗi camera đặt ở vị trí khác nhau trong thành phố,
                  không có vùng chồng lấp.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Input: Multiple video streams (resolution 1920x1080, 25-30
                      FPS)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Preprocessing: Frame extraction, resize, normalization
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-lg p-8 border border-border">
                <div className="font-mono text-sm text-muted-foreground">
                  <div className="text-primary mb-2"># Camera Network</div>
                  <div>Camera_1: Intersection A</div>
                  <div>Camera_2: Highway B</div>
                  <div>Camera_3: Parking Lot C</div>
                  <div className="mt-4 text-primary">→ Frame Buffer</div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 bg-card rounded-lg p-8 border border-border">
                <div className="font-mono text-sm text-muted-foreground">
                  <div className="text-primary mb-2">
                    # Detection & Tracking
                  </div>
                  <div>YOLOv12: Detect vehicles</div>
                  <div>→ BBox: [x, y, w, h]</div>
                  <div className="mt-2">BoT-SORT: Track ID</div>
                  <div>→ Track: [ID, trajectory]</div>
                  <div className="mt-4 text-primary">
                    Output: Tracked objects
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">
                      BƯỚC 2
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      Vehicle Detection & Tracking
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  YOLOv12 phát hiện tất cả phương tiện trong frame với mAP
                  0.991. BoT-SORT theo dõi từng phương tiện qua các frame liên
                  tiếp trong một camera.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>YOLOv12 backbone tối ưu cho vehicle class</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Kalman Filter dự đoán vị trí trong frame tiếp theo
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Layers className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">
                      BƯỚC 3
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      License Plate Recognition (LRLPR)
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Module nhận diện biển số xe độ phân giải thấp đạt{' '}
                  <strong>Top 10 ICPR 2026</strong>. Khi biển số bị mờ, nhòe do
                  camera chiếu từ xa, ảnh sẽ được đưa qua pipeline ResTranOCR V2
                  (ResNet34 + CBAM + Quality Attention Fusion + Transformer) kết
                  hợp K-Fold Ensemble & TTA.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Biển số xe = <strong>định danh tuyệt đối</strong>, ưu tiên
                      hơn đặc trưng ngoại hình
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Khi biển số LR không đọc được → fallback sang Visual Re-ID
                      (ViT)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Accuracy 76-79% trên Blind Test Set (SOTA chỉ 50-60%)
                    </span>
                  </li>
                </ul>
                <a
                  href="/lrlpr"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:underline font-medium"
                >
                  Xem chi tiết Module LRLPR →
                </a>
              </div>
              <div className="bg-card rounded-lg p-8 border border-border">
                <div className="font-mono text-sm text-muted-foreground">
                  <div className="text-primary mb-2">
                    # LRLPR Module (ICPR 2026 Top 10)
                  </div>
                  <div>Crop: Vehicle BBox → LP region</div>
                  <div>STN: Rectify perspective</div>
                  <div>ResNet34+CBAM: Feature extract</div>
                  <div>QAF: Fuse 5 frames quality</div>
                  <div>Transformer+CTC: Decode chars</div>
                  <div>5-Fold × 4 TTA = 20 predictions</div>
                  <div>Soft-Voting → "51A-12345"</div>
                  <div className="mt-4 text-primary">
                    → Absolute Identity (conf: 0.97)
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 bg-card rounded-lg p-8 border border-border">
                <div className="font-mono text-sm text-muted-foreground">
                  <div className="text-primary mb-2"># Re-ID Extraction</div>
                  <div>ViT: Process vehicle crop</div>
                  <div>→ Embedding: [512-D vector]</div>
                  <div className="mt-2">Normalize: L2 norm</div>
                  <div className="mt-4 text-primary">→ Feature vector</div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Cpu className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">
                      BƯỚC 4
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      Re-ID Feature Extraction
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Vision Transformer xử lý ảnh đã crop của xe, tạo ra embedding
                  vector 512 chiều - "dấu vân tay hình ảnh" duy nhất cho mỗi
                  phương tiện.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Self-attention học global context của xe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Robust với thay đổi góc quay và ánh sáng</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <LinkIcon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">
                      BƯỚC 5
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      Multi-Camera Association
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Faiss Index tìm kiếm similarity trong database hàng triệu
                  vector. Liên kết cùng một xe qua các camera khác nhau dựa trên
                  khoảng cách cosine.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      IndexFlatL2 hoặc IndexIVFFlat cho tìm kiếm nhanh
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Threshold similarity để quyết định match</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-lg p-8 border border-border">
                <div className="font-mono text-sm text-muted-foreground">
                  <div className="text-primary mb-2"># Association</div>
                  <div>Query: New vehicle embedding</div>
                  <div>Faiss: Search top-K similar</div>
                  <div>→ Match: Same vehicle ID</div>
                  <div className="mt-4 text-primary">
                    → Cross-camera tracking
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OpenVINO Optimization Layer */}
        <div className="bg-secondary/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Cpu className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              OpenVINO™ Optimization Layer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Toàn bộ pipeline trên được tăng tốc bởi Intel® OpenVINO™ Toolkit
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-heading font-bold text-foreground mb-3">
                Model Optimization
              </h3>
              <p className="text-sm text-muted-foreground">
                Convert PyTorch → ONNX → OpenVINO IR. Quantization INT8 giảm
                kích thước model.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-heading font-bold text-foreground mb-3">
                Hardware Acceleration
              </h3>
              <p className="text-sm text-muted-foreground">
                Tận dụng AVX-512, graph fusion, và multi-threading trên Intel
                CPU.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-heading font-bold text-foreground mb-3">
                Runtime Optimization
              </h3>
              <p className="text-sm text-muted-foreground">
                Lightweight runtime với memory pooling và inference caching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
