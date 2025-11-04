import { Brain, Eye, Layers, Zap } from 'lucide-react';
import attentionMapShowcase from '@/assets/attention-map-showcase.png';

export default function ViT() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary text-sm font-medium">
              Feature Extraction
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Vision <span className="text-primary">Transformer</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            "Bộ não nhận dạng" - Tạo dấu vân tay hình ảnh duy nhất cho mỗi xe
          </p>
        </div>

        {/* Why ViT after YOLO */}
        <div className="mb-20">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 mb-12">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Tại sao cần ViT sau YOLOv12?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-white">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  🎯 YOLO: Định vị và phân loại
                </h3>
                <p className="text-white/90">
                  YOLOv12 xuất sắc trong việc <strong>tìm ra vị trí</strong> và{' '}
                  <strong>phân loại loại xe</strong>
                  (car, truck, bus...), nhưng không tạo ra "chữ ký" duy nhất cho
                  từng cá thể.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  🔍 ViT: Nhận dạng cá thể
                </h3>
                <p className="text-white/90">
                  ViT học các <strong>đặc trưng tinh tế</strong> (vết xước,
                  logo, chi tiết body) để phân biệt hai chiếc xe cùng loại, cùng
                  màu với nhau.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Self-Attention Mechanism */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8">
            Cơ chế Self-Attention
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Self-attention là "siêu năng lực" của Transformer, cho phép mô
                hình "nhìn" toàn bộ ảnh một lúc và tự động học được phần nào
                quan trọng để nhận dạng.
              </p>
              <div className="space-y-4">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="font-heading font-bold mb-2 text-primary">
                    Query, Key, Value
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Mỗi patch của ảnh tạo ra 3 vector: Query (hỏi), Key (khóa),
                    Value (giá trị). Attention score = similarity giữa Query và
                    Key.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="font-heading font-bold mb-2 text-primary">
                    Global Context
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Khác CNN chỉ nhìn receptive field nhỏ, ViT "nhìn" toàn bộ
                    ảnh ngay từ layer đầu tiên, nắm bắt context toàn cục.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src={attentionMapShowcase}
                alt="ViT Attention"
                className="rounded-2xl shadow-card h-96 w-full"
              />
              <p className="text-sm text-muted-foreground text-center mt-4">
                Attention map cho thấy mô hình tập trung vào đâu
              </p>
            </div>
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-12">
            Kiến trúc Vision Transformer
          </h2>
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Patch Embedding
                  </h3>
                  <p className="text-primary font-medium">
                    Chia ảnh thành các patch nhỏ
                  </p>
                </div>
              </div>
              <div className="ml-16 space-y-3">
                <p className="text-muted-foreground">
                  Ảnh xe 224x224 được chia thành 196 patches (14x14), mỗi patch
                  16x16 pixels
                </p>
                <p className="text-muted-foreground">
                  Mỗi patch được flatten và project thành embedding vector 768-D
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Positional Encoding
                  </h3>
                  <p className="text-primary font-medium">
                    Mã hóa vị trí không gian
                  </p>
                </div>
              </div>
              <div className="ml-16 space-y-3">
                <p className="text-muted-foreground">
                  Thêm learnable position embedding để mô hình biết patch nào ở
                  đâu trong ảnh
                </p>
                <p className="text-muted-foreground">
                  Quan trọng vì self-attention không có khái niệm "thứ tự" như
                  CNN
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Transformer Encoder
                  </h3>
                  <p className="text-primary font-medium">
                    12 layers của Multi-Head Attention
                  </p>
                </div>
              </div>
              <div className="ml-16 space-y-3">
                <p className="text-muted-foreground">
                  Mỗi layer gồm: Multi-Head Self-Attention → Layer Norm → MLP →
                  Layer Norm
                </p>
                <p className="text-muted-foreground">
                  12 heads cho phép mô hình học nhiều "góc nhìn" khác nhau về
                  ảnh
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Global Average Pooling
                  </h3>
                  <p className="text-primary font-medium">
                    Tạo embedding vector cuối cùng
                  </p>
                </div>
              </div>
              <div className="ml-16 space-y-3">
                <p className="text-muted-foreground">
                  Output của 196 patch tokens được average pooling thành 1
                  vector 512-D
                </p>
                <p className="text-muted-foreground">
                  Đây chính là "dấu vân tay hình ảnh" đại diện cho toàn bộ
                  phương tiện
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-12">
            Ưu điểm của ViT trong Re-ID
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Eye,
                title: 'Robust với thay đổi góc quay',
                description:
                  'Self-attention học được relation giữa các parts bất kể perspective, không bị giới hạn bởi receptive field cố định như CNN',
              },
              {
                icon: Brain,
                title: 'Học global dependencies',
                description:
                  'Có thể liên kết thông tin từ đầu xe và đuôi xe trong một layer, quan trọng khi chỉ nhìn thấy một phần xe',
              },
              {
                icon: Layers,
                title: 'Feature hierarchy tự động',
                description:
                  'Không cần hand-craft features, ViT tự học được đặc trưng nào quan trọng qua attention weights',
              },
              {
                icon: Zap,
                title: 'Pre-training hiệu quả',
                description:
                  'ViT pre-trained trên ImageNet-21K có thể fine-tune nhanh chóng cho vehicle Re-ID với data ít hơn',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
