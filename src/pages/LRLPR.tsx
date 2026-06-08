import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Trophy,
  Eye,
  Cpu,
  Layers,
  Shield,
  Database,
  Zap,
  ArrowRight,
  Target,
  Brain,
  BarChart3,
  Microscope,
  Sparkles,
  Camera,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';
import DemoLR001 from '../assets/demolr/lr-demo-001.jpg';
import DemoLR002 from '../assets/demolr/lr-demo-002.jpg';
import DemoLR003 from '../assets/demolr/lr-demo-003.jpg';
import DemoLR004 from '../assets/demolr/lr-demo-004.jpg';
import DemoLR005 from '../assets/demolr/lr-demo-005.jpg';
import DemoLR006 from '../assets/demolr/lr-demo-006.jpg';
import DemoLR007 from '../assets/demolr/lr-demo-007.jpg';
import DemoLR008 from '../assets/demolr/lr-demo-008.jpg';
import lr from '../assets/demolr/lr.png';
import hr from '../assets/demolr/hr.png';
import sr from '../assets/demolr/sr.png';
export default function LRLPR() {
  const anhdemolr = [
    DemoLR001,
    DemoLR002,
    DemoLR003,
    DemoLR004,
    DemoLR005,
    DemoLR006,
    DemoLR007,
    DemoLR008,
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary text-sm font-medium">
              ICPR 2026 • Top 15 Worldwide
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Module <span className="text-primary">LRLPR</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Low-Resolution License Plate Recognition
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nhận diện biển số xe độ phân giải thấp đạt chuẩn quốc tế — Mảnh ghép
            định danh tuyệt đối cho hệ thống Multi-Camera Tracking
          </p>
        </div>

        {/* ICPR Context */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-primary" />
                  Cuộc thi ICPR 2026 LRLPR
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">ICPR</strong>{' '}
                  (International Conference on Pattern Recognition) là một trong
                  những hội nghị khoa học
                  <strong className="text-foreground">
                    {' '}
                    danh giá và lâu đời nhất thế giới
                  </strong>{' '}
                  về Thị giác máy tính và Trí tuệ nhân tạo (được xếp hạng{' '}
                  <Badge variant="outline" className="border-primary/30">
                    CORE Rank cao
                  </Badge>
                  ).
                </p>
                <p>
                  Việc lọt vào <strong className="text-primary">Top 15</strong>{' '}
                  trong cuộc thi do ICPR tổ chức chứng minh thuật toán của nhóm
                  đã tiệm cận mức{' '}
                  <strong className="text-foreground">
                    State-of-the-Art (SOTA)
                  </strong>{' '}
                  toàn cầu.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  Bài toán cực khó
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Nhận diện biển số độ phân giải thấp trong môi trường hoang dã
                  (<em>in the wild</em>) là một "ác mộng" với AI:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Mờ do chuyển động',
                    'Nhiễu hạt ban đêm',
                    'Lóa sáng đèn pha',
                    'Nén video nặng',
                  ].map((issue, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                      {issue}
                    </div>
                  ))}
                </div>
                <p>
                  Các mô hình SOTA hiện hành chỉ đạt{' '}
                  <strong className="text-foreground">50-60%</strong>. Nhóm bứt
                  phá lên <strong className="text-primary">76-79%</strong> trên
                  Blind Test Set.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Role in System */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-8 text-center">
              Vai trò trong hệ thống{' '}
              <span className="text-primary">Multi-Camera Tracking</span>
            </h2>
            <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    <span className="text-xl">Vấn đề với Re-ID ngoại hình</span>
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Vehicle Re-ID (YOLOv12 + BoT-SORT) theo dõi quỹ đạo xe dựa
                    trên đặc trưng ngoại hình (màu sắc, kiểu dáng). Tuy nhiên,
                    ngoại hình dễ bị trùng lặp — ví dụ:
                    <strong className="text-foreground">
                      {' '}
                      10 chiếc xe Vios màu trắng giống hệt nhau
                    </strong>
                    .
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-xl">Sự bù trừ hoàn hảo</span>
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Module LRLPR là{' '}
                    <strong className="text-foreground">
                      "chốt chặn cuối cùng"
                    </strong>
                    , cung cấp
                    <strong className="text-primary">
                      {' '}
                      định danh tuyệt đối
                    </strong>
                    . Đọc được biển số ngay cả khi xe ở rất xa camera (vùng LR
                    region), giải quyết triệt để bài toán đứt gãy Tracklet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Pillars Overview */}
        <section className="mb-20">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4 text-center">
            Giải pháp <span className="text-primary">"Winning Pipeline"</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Xây dựng End-to-End Pipeline với 4 trụ cột chính
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Database,
                title: 'Physics-based Data Engineering',
                desc: 'Tăng cường dữ liệu mô phỏng chính xác sự suy thoái vật lý của camera CCTV',
              },
              {
                icon: Sparkles,
                title: 'Super-Resolution Module',
                desc: 'Khôi phục chi tiết biển số từ ảnh LR cực thấp trước khi đưa vào OCR',
              },
              {
                icon: Brain,
                title: 'ResTranOCR Architecture',
                desc: 'ResNet34 + CBAM + QualityFusion (5 frames) + Transformer Encoder',
              },
              {
                icon: BarChart3,
                title: 'K-Fold Ensemble & TTA',
                desc: '"Sự khôn ngoan của đám đông" — tối đa hóa sự ổn định trên Blind Test',
              },
            ].map((pillar, i) => (
              <Card
                key={i}
                className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-0">
                    Trụ cột {i + 1}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="font-semibold text-foreground mb-2 text-base">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{pillar.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* PILLAR 1 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Database className="w-6 h-6 text-primary" />
            </div>
            <div>
              <Badge variant="outline" className="mb-1 border-primary/30">
                Trụ cột 1
              </Badge>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">
                Physics-based Data Engineering & Degradation Pipeline
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-secondary/30 rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Microscope className="w-5 h-5 text-primary" />
                <span className="text-xl font-bold">
                  Triết lý thiết kế:
                </span>{' '}
                Giải quyết triệt để "Domain Shift"
              </h3>
              <p className="text-base text-muted-foreground">
                Các phép Augmentation cơ bản (xoay, lật, cắt) không thể tái tạo
                được đặc tính vật lý của dữ liệu từ camera giao thông thực tế.
                Nhóm đã xây dựng{' '}
                <strong className="text-foreground">
                  Degradation Pipeline
                </strong>{' '}
                mô phỏng chính xác 100% các điều kiện khắc nghiệt của camera
                giám sát CCTV.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-foreground">
              4 Nhóm Augmentation Mô phỏng Vật lý
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Nhóm 1: Quang học & Môi trường',
                  items: [
                    'RandomSunFlare — lóa sáng đèn pha, phản chiếu mặt trời',
                    'RandomShadow — bóng râm cây cối, cột điện',
                    'ToGray — mô phỏng chế độ hồng ngoại (IR mode) ban đêm',
                  ],
                },
                {
                  title: 'Nhóm 2: Suy thoái Không gian & Nén Video',
                  items: [
                    'Downscale cực mạnh (15-35% kích thước thật) → vỡ hạt, răng cưa',
                    'ImageCompression — mô phỏng nhiễu nén H.264/JPEG',
                    'Ép mô hình nhận diện dựa trên hình thái học (morphology)',
                  ],
                },
                {
                  title: 'Nhóm 3: Nhiễu Cảm biến & Chuyển động',
                  items: [
                    'MotionBlur — mờ nhòe do tốc độ cao',
                    'ISONoise & GaussNoise — nhiễu hạt thiếu sáng',
                    'Xác suất cao để mô hình "lì đòn" hơn',
                  ],
                },
                {
                  title: 'Nhóm 4: Che khuất cục bộ (CoarseDropout)',
                  items: [
                    'Mô phỏng biển số bị dính bùn, ốc vít, che khuất',
                    'Ép mô hình suy luận dựa trên ngữ cảnh chuỗi',
                    'Không phụ thuộc vào vùng pixel cố định',
                  ],
                },
              ].map((group, i) => (
                <Card key={i} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {group.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-base text-muted-foreground"
                        >
                          <ArrowRight className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xl font-bold">
                    {' '}
                    Synthetic LR Generation{' '}
                  </span>
                </h4>
                <p className="text-base text-muted-foreground">
                  Thay vì dùng Super-Resolution (dễ sinh ảo giác), nhóm{' '}
                  <strong className="text-foreground">đi ngược lại</strong>:
                  Dùng Degradation Pipeline "phá hủy" ảnh HR thành Synthetic LR.
                  Nhân đôi kích thước tập huấn luyện với chất lượng nhãn hoàn
                  hảo.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xl font-bold">
                    Strict Track-based Validation Split
                  </span>
                </h4>
                <p className="text-base text-muted-foreground">
                  Phát hiện lỗ hổng{' '}
                  <strong className="text-foreground">Data Leakage</strong> nếu
                  dùng random_split. Áp dụng phân chia dựa trên Track_ID, chỉ
                  dùng ảnh Real LR cho Validation. Điểm Validation phản ánh
                  chính xác <strong className="text-primary">99%</strong> khả
                  năng thực chiến.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LR Samples Showcase */}
        <section className="mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4 text-center">
              Thực tế ảnh <span className="text-primary">Low-Resolution</span>{' '}
              khắc nghiệt đến mức nào?
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
              Dưới đây là các mẫu ảnh biển số thực tế từ camera CCTV — độ phân
              giải cực thấp, mờ nhòe, nhiễu hạt, lóa sáng. Đây chính là thách
              thức mà hệ thống phải đối mặt mỗi ngày.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {anhdemolr.map((imgSrc, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg"
                >
                  {/* Container ép tỷ lệ 3:1 đồng nhất cho mọi ảnh */}
                  <div className="aspect-[3/1] bg-muted/30 border border-border rounded-lg flex items-center justify-center overflow-hidden hover:border-primary/50 transition-colors">
                    <img
                      src={imgSrc}
                      alt={`Ảnh biển số LR mẫu ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      /* Lưu ý: Nếu ảnh của bạn bị cắt mất chữ, hãy thay 'object-cover' bằng 'object-contain' */
                    />
                  </div>

                  {/* Hiệu ứng hiển thị thông số khi hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-medium text-foreground">
                        Mẫu {index + 1}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        ~{12 + index * 3}×{6 + index * 2}px
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-secondary/30 rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <span className="text-xl">
                  Tại sao ảnh LR lại "ác mộng"
                </span>{' '}
                với AI?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    label: 'Kích thước cực nhỏ',
                    detail:
                      'Biển số chỉ còn 15-40px chiều rộng sau khi crop từ full frame',
                  },
                  {
                    label: 'Nén video H.264/JPEG',
                    detail:
                      'Artifacts nén làm mất hoàn toàn nét chữ, biến thành khối pixel',
                  },
                  {
                    label: 'Motion blur',
                    detail:
                      'Xe di chuyển 60-80km/h → biển số thành vệt nhòe dài',
                  },
                  {
                    label: 'Nhiễu ISO ban đêm',
                    detail:
                      'Camera tự tăng ISO → nhiễu hạt phủ kín ký tự biển số',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border"
                  >
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
                    <div>
                      <div className="text-lg font-medium text-foreground">
                        {item.label}
                      </div>
                      <div className="text-base text-muted-foreground">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PILLAR 2: Super-Resolution */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <Badge variant="outline" className="mb-1 border-primary/30">
                Trụ cột 2
              </Badge>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">
                Super-Resolution Module
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-secondary/30 rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                <span className="text-lg">
                  Vai trò: Khôi phục chi tiết trước khi nhận dạng{' '}
                </span>
              </h3>
              <p className="text-base text-muted-foreground">
                Trước khi đưa ảnh biển số vào module OCR, ảnh LR được đi qua
                mạng Super-Resolution để{' '}
                <strong className="text-foreground">
                  tăng cường độ phân giải và khôi phục các nét chữ bị mất
                </strong>
                . Module SR đóng vai trò như "kính lúp AI" — phóng to và làm rõ
                chi tiết mà mắt thường không thể nhìn thấy.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-foreground text-center">
              Quá trình khôi phục:{' '}
              <span className="text-primary">LR → SR → HR</span>
            </h3>
            <p className="text-center text-muted-foreground text-base max-w-2xl mx-auto">
              Từ ảnh biển số mờ nhòe, vỡ hạt → Super-Resolution khôi phục nét
              chữ → Kết quả gần bằng ảnh gốc chất lượng cao
            </p>

            <div className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="grid grid-cols-3 gap-4 items-center">
                  {/* Cột 1: Ảnh Low-Resolution (LR) */}
                  <div className="text-center">
                    <div className="aspect-[3/1] bg-muted/30 border border-border rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                      <img
                        src={lr}
                        alt="Low-Resolution"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge variant="destructive" className="text-[10px]">
                      Low-Resolution
                    </Badge>
                    <div className="text-[10px] text-muted-foreground mt-1">
                      ~20×8px • Mờ, vỡ hạt
                    </div>
                  </div>

                  {/* Cột 2: Ảnh Super-Resolution (SR Output) */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-5 h-5 text-primary" />
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[10px] text-primary font-medium">
                      Super-Resolution
                    </span>
                    <div className="w-full aspect-[3/1] bg-muted/30 border border-border rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={
                          sr
                        } /* <--- ĐIỀN LINK HOẶC IMPORT BIẾN ẢNH SR VÀO ĐÂY */
                        alt="Super-Resolution"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge
                      variant="outline"
                      className="text-[10px] border-primary/30 text-primary"
                    >
                      SR Output
                    </Badge>
                  </div>

                  {/* Cột 3: Ảnh High-Resolution (HR / Ground Truth) */}
                  <div className="text-center">
                    <div className="aspect-[3/1] bg-muted/30 border border-border rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                      <img
                        src={
                          hr
                        } /* <--- ĐIỀN LINK HOẶC IMPORT BIẾN ẢNH HR VÀO ĐÂY */
                        alt="High-Resolution"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge className="text-[10px] bg-green-500/10 text-green-600 border-green-500/30">
                      High-Resolution
                    </Badge>
                    <div className="text-[10px] text-muted-foreground mt-1">
                      Ground Truth • Sắc nét
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span className="text-xl font-bold">
                    Kiến trúc SR Network
                  </span>
                </h4>
                <div className="font-mono text-xs text-muted-foreground space-y-1">
                  <div className="text-primary text-lg font-bold">
                    # Super-Resolution Pipeline
                  </div>
                  <div className="text-sm">Input: LR image [H, W, C]</div>
                  <div className="text-sm">
                    Feature Extraction → Residual Blocks
                  </div>
                  <div className="text-sm">
                    Sub-pixel Convolution (Upscale ×4)
                  </div>
                  <div className="text-sm">
                    Reconstruction → HR image [4H, 4W, C]
                  </div>
                  <div className="text-primary mt-2 text-lg">
                    → Biển số sắc nét, nét chữ rõ ràng
                  </div>
                </div>
              </div>
              <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-xl font-bold">
                    {' '}
                    Tại sao SR quan trọng?{' '}
                  </span>
                </h4>
                <ul className="space-y-2">
                  {[
                    'Tăng kích thước ảnh ×4 giữ nguyên nét chữ',
                    'Giảm nhiễu hạt & artifacts nén video',
                    'Khôi phục biên cạnh ký tự bị vỡ',
                    'Cải thiện accuracy OCR 15-25% trên ảnh LR cực khó',
                    'Hoạt động real-time (~30ms/ảnh trên GPU)',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PILLAR 3 - ResTranOCR V2 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <div>
              <Badge variant="outline" className="mb-1 border-primary/30">
                Trụ cột 3
              </Badge>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">
                Kiến trúc ResTranOCR
              </h2>
            </div>
          </div>

          <p className="text-muted-foreground mb-8">
            Mạng nơ-ron End-to-End mạnh mẽ, tối ưu hóa luồng tensor
            (Batch-First), gồm 4 module cốt lõi:
          </p>

          <div className="space-y-8">
            {[
              {
                step: 'Module 1',
                title: 'Spatial Transformer Network (STN)',
                icon: Eye,
                problem:
                  'Bounding box crop từ YOLOv12/BoT-SORT bị méo phối cảnh, nghiêng do góc camera.',
                solution:
                  'STN đóng vai trò "mắt kính cận" — dùng mạng Localization (CNN nhỏ) dự đoán 6 tham số Affine, tự động xoay, phóng to, nắn thẳng 5 frames. Hoàn toàn khả vi (differentiable), học End-to-End.',
              },
              {
                step: 'Module 2',
                title: 'Attentive Feature Extraction (ResNet34 + CBAM)',
                icon: Layers,
                problem:
                  'ResNet50 quá sâu, dễ mất thông tin không gian của ảnh LR. Nhiễu nền dễ nhầm lẫn với nét chữ.',
                solution:
                  'Chọn ResNet34 với "The Stride Trick" — tinh chỉnh stride (2,1) ở block cuối, ép Height về 1 nhưng bảo toàn Width. CBAM thực hiện chú ý kép: Channel Attention khuếch đại kênh chứa nét chữ, Spatial Attention làm mờ nhiễu hạt/bóng râm.',
              },
              {
                step: 'Module 3',
                title: 'Quality Attention Fusion (QAF)',
                icon: Sparkles,
                problem:
                  'Gộp trung bình 5 frames → 1 frame bị nhòe sẽ hỏng toàn bộ thông tin.',
                solution:
                  'Score Net "chấm điểm" chất lượng từng pixel qua 5 frames, dùng Softmax theo trục thời gian. Vùng nét căng được trọng số cao, vùng lóa sáng bị đánh gần 0. Kết quả: "Siêu Feature Map" hội tụ tinh hoa 5 frames.',
              },
              {
                step: 'Module 4',
                title: 'Transformer Encoder + CTC Decoder',
                icon: Cpu,
                problem:
                  'BiLSTM gặp vanishing gradient với chuỗi dài, không hiểu ngữ cảnh toàn cục.',
                solution:
                  'Transformer với Multi-Head Self-Attention nhìn toàn bộ biển số cùng lúc. Học cấu trúc [Số][Chữ][Số] của biển số VN. CTC Loss căn chỉnh chuỗi dự đoán mà không cần bounding box ký tự.',
              },
            ].map((module, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-6 items-start">
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <module.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-sm">
                        {module.step}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <p className="text-base text-muted-foreground">
                        <strong className="text-foreground">Vấn đề:</strong>{' '}
                        {module.problem}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-base text-muted-foreground">
                        <strong className="text-foreground">Giải pháp:</strong>{' '}
                        {module.solution}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`bg-card rounded-lg p-6 border border-border ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <div className="font-mono text-sm text-muted-foreground space-y-1">
                    {i === 0 && (
                      <>
                        <div className="text-primary">
                          # Spatial Transformer Network
                        </div>
                        <div>Input: 5 frames × [H, W, C]</div>
                        <div>Localization CNN → 6 Affine params</div>
                        <div>Grid Generator → Sampler</div>
                        <div className="text-primary mt-2">
                          → 5 rectified frames
                        </div>
                      </>
                    )}
                    {i === 1 && (
                      <>
                        <div className="text-primary"># ResNet34 + CBAM</div>
                        <div>ResNet34 backbone (stride modified)</div>
                        <div>Block 3,4: stride (2,1) → H=1, W=preserved</div>
                        <div>CBAM: Channel Attn × Spatial Attn</div>
                        <div className="text-primary mt-2">
                          → Feature Map [B, C, 1, W]
                        </div>
                      </>
                    )}
                    {i === 2 && (
                      <>
                        <div className="text-primary">
                          # Quality Attention Fusion
                        </div>
                        <div>Score_Net(F1..F5) → Quality scores</div>
                        <div>Softmax(scores, dim=time)</div>
                        <div>Fused = Σ(weight_i × Feature_i)</div>
                        <div className="text-primary mt-2">
                          → "Super Feature Map"
                        </div>
                      </>
                    )}
                    {i === 3 && (
                      <>
                        <div className="text-primary"># Transformer + CTC</div>
                        <div>Positional Encoding (1D)</div>
                        <div>Multi-Head Self-Attention × N layers</div>
                        <div>Linear → Softmax → CTC Decode</div>
                        <div className="text-primary mt-2">
                          → "51A-12345" (confidence: 0.97)
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PILLAR 4 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <Badge variant="outline" className="mb-1 border-primary/30">
                Trụ cột 4
              </Badge>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">
                K-Fold Ensemble & Test-Time Augmentation
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-foreground">
              Chiến lược Huấn luyện Bền vững
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Track-based 5-Fold CV',
                  desc: 'Phân chia K-Fold dựa trên Track_ID — chống rò rỉ dữ liệu triệt để. 5 mô hình chuyên gia có góc nhìn độc lập.',
                  icon: Database,
                },
                {
                  title: 'OneCycleLR & Gradient Clipping',
                  desc: 'Kìm cương bùng nổ đạo hàm, Learning Rate hình sin giúp vượt qua local minima. Hội tụ 50 epochs/fold.',
                  icon: Zap,
                },
                {
                  title: 'Mixed Precision (FP16/FP32)',
                  desc: 'Tối ưu VRAM, tăng Batch Size, tốc độ huấn luyện ×1.5-2x mà không giảm accuracy.',
                  icon: Cpu,
                },
              ].map((item, i) => (
                <Card key={i} className="border-border">
                  <CardHeader>
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-foreground">
              Test-Time Augmentation (TTA)
            </h3>
            <div className="bg-secondary/30 rounded-xl p-6 border border-border">
              <p className="text-base text-muted-foreground mb-4">
                Trong thực tế, xe lướt qua camera rất nhanh — chỉ có{' '}
                <strong className="text-foreground">một cơ hội duy nhất</strong>{' '}
                để đọc biển số. Hệ thống tạo 4 biến thể quang học real-time:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Original', desc: 'Ảnh gốc' },
                  { label: 'Center Crop 90%', desc: 'Phóng to ký tự nhỏ' },
                  { label: 'Rotate Left 2°', desc: 'Bù góc nghiêng trái' },
                  { label: 'Rotate Right 2°', desc: 'Bù góc nghiêng phải' },
                ].map((v, i) => (
                  <div
                    key={i}
                    className="text-center p-3 rounded-lg bg-card border border-border"
                  >
                    <div className="text-base font-medium text-foreground">
                      {v.label}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {v.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground">
              Soft-Voting Ensemble — "Sự khôn ngoan của đám đông"
            </h3>
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5</div>
                  <div className="text-base text-muted-foreground">
                    K-Fold Models
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">×4</div>
                  <div className="text-base text-muted-foreground">
                    TTA Views
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">=20</div>
                  <div className="text-base text-muted-foreground">
                    Predictions/Vehicle
                  </div>
                </div>
              </div>
              <p className="text-base text-muted-foreground">
                <strong className="text-foreground">Soft-Voting:</strong> Không
                đếm phiếu (Hard Voting), mà
                <strong className="text-foreground">
                  {' '}
                  trung bình cộng ma trận xác suất Softmax
                </strong>{' '}
                từ 20 lượt đánh giá. Triệt tiêu hoàn toàn sai số ngẫu nhiên, tạo
                Confidence Score cực kỳ chuẩn xác — phù hợp tiêu chí
                Tie-Breaker: Confidence Gap của cuộc thi.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12 border border-primary/20">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-6">
              Kết luận
            </h2>
            <blockquote className="text-muted-foreground italic leading-relaxed">
              "Bằng việc tích hợp thành công module nhận diện biển số độ phân
              giải thấp (LRLPR) đạt chuẩn quốc tế (
              <strong className="text-primary">Top 10 ICPR 2026</strong>) vào hệ
              thống Multi-Camera Tracking, đồ án không chỉ giải quyết trọn vẹn
              bài toán theo dõi quỹ đạo bằng đặc trưng ngoại hình (Re-ID), mà
              còn thiết lập một cơ chế
              <strong className="text-foreground"> định danh tuyệt đối</strong>.
              Khả năng đọc chính xác biển số xe ngay cả khi phương tiện ở khoảng
              cách rất xa, bị nhòe mờ hay nhiễu sáng đã minh chứng cho tính ứng
              dụng thực tiễn vượt trội của hệ thống trong các hệ thống Giao
              thông thông minh (ITS) và Giám sát an ninh diện rộng."
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
}
