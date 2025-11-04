import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Rocket,
  Zap,
  Globe,
  Brain,
  Shield,
  TrendingUp,
  Users,
  Target,
  Lightbulb,
  Star,
} from 'lucide-react';

export default function Future() {
  const visionItems = [
    {
      icon: Brain,
      title: 'AI Enhancement',
      description: 'Tích hợp các mô hình AI tiên tiến hơn',
      details: [
        'Nâng cấp lên YOLOv13/v14 khi phát hành',
        'Tích hợp Transformer-based tracking algorithms',
        'Áp dụng Self-supervised learning cho Re-ID',
        'Tối ưu hóa mô hình với Neural Architecture Search',
      ],
      color: 'text-blue-500',
    },
    {
      icon: Globe,
      title: 'Multi-Camera System',
      description: 'Mở rộng sang hệ thống đa camera',
      details: [
        'Cross-camera tracking và Re-identification',
        'Đồng bộ hóa giữa nhiều camera',
        'Tạo bản đồ di chuyển toàn cục',
        'Tích hợp với hệ thống giám sát thành phố',
      ],
      color: 'text-green-500',
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Tối ưu hiệu suất xử lý thời gian thực',
      details: [
        'Đạt 60+ FPS trên edge devices',
        'Giảm độ trễ xuống dưới 50ms',
        'Tối ưu hóa với TensorRT và ONNX Runtime',
        'Hỗ trợ hardware acceleration (GPU, NPU, VPU)',
      ],
      color: 'text-yellow-500',
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Bảo mật và quyền riêng tư',
      details: [
        'Blur khuôn mặt và biển số xe tự động',
        'Tuân thủ GDPR và các quy định bảo mật',
        'Mã hóa dữ liệu end-to-end',
        'On-device processing để bảo vệ privacy',
      ],
      color: 'text-red-500',
    },
    {
      icon: Target,
      title: 'Advanced Analytics',
      description: 'Phân tích dữ liệu nâng cao',
      details: [
        'Dự đoán mật độ giao thông',
        'Phát hiện anomaly và sự cố',
        'Phân tích hành vi người tham gia giao thông',
        'Tạo báo cáo và dashboard tự động',
      ],
      color: 'text-purple-500',
    },
    {
      icon: Users,
      title: 'Community Integration',
      description: 'Tích hợp cộng đồng và người dùng',
      details: [
        'API mở cho developers',
        'Mobile app cho người dùng cuối',
        'Crowdsourcing data từ cộng đồng',
        'Tích hợp với ứng dụng bản đồ phổ biến',
      ],
      color: 'text-pink-500',
    },
  ];

  const roadmap = [
    {
      phase: 'Q1 2026',
      title: 'Foundation Enhancement',
      items: [
        'Triển khai YOLOv12 optimized model',
        'Cải thiện ViT architecture cho Re-ID',
        'Tích hợp OpenVINO 2024 version',
        'Xây dựng REST API đầy đủ',
      ],
      status: 'in-progress',
    },
    {
      phase: 'Q2 2026',
      title: 'Multi-Camera Support',
      items: [
        'Phát triển cross-camera tracking',
        'Xây dựng camera synchronization system',
        'Tạo global trajectory mapping',
        'Testing với 3-5 cameras',
      ],
      status: 'planned',
    },
    {
      phase: 'Q3 2026',
      title: 'Edge Deployment',
      items: [
        'Tối ưu cho NVIDIA Jetson',
        'Port sang Intel NUC và Raspberry Pi',
        'Xây dựng edge management platform',
        'Real-time monitoring dashboard',
      ],
      status: 'planned',
    },
    {
      phase: 'Q4 2026',
      title: 'AI Analytics & Scale',
      items: [
        'Predictive traffic analytics',
        'Anomaly detection system',
        'Auto-scaling infrastructure',
        'Deploy pilot tại TPHCM',
      ],
      status: 'planned',
    },
  ];

  const applications = [
    {
      icon: TrendingUp,
      title: 'Smart City Management',
      description: 'Quản lý giao thông thông minh cho thành phố',
      benefits: [
        'Giảm tắc nghẽn giao thông 30-40%',
        'Tối ưu hóa đèn tín hiệu tự động',
        'Phát hiện vi phạm giao thông',
        'Hỗ trợ quy hoạch đô thị',
      ],
    },
    {
      icon: Shield,
      title: 'Public Safety',
      description: 'Tăng cường an ninh công cộng',
      benefits: [
        'Tìm kiếm người/phương tiện mất tích',
        'Theo dõi đối tượng tình nghi',
        'Phát hiện hành vi bất thường',
        'Hỗ trợ điều tra tội phạm',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Research Platform',
      description: 'Nền tảng nghiên cứu học thuật',
      benefits: [
        'Dataset chuẩn cho nghiên cứu MOT',
        'Benchmark cho thuật toán mới',
        'Open-source tools và models',
        'Collaboration với các trường đại học',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            <Star className="w-3 h-3 mr-1" />
            Future Vision
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Tầm Nhìn <span className="text-primary">Tương Lai</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto">
            Xây dựng hệ thống theo dõi đa mục tiêu tiên tiến nhất cho giao thông
            thông minh, góp phần tạo nên thành phố thông minh của tương lai
          </p>
        </div>

        {/* Vision Cards */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Định Hướng Phát Triển</h2>
            <p className="text-muted-foreground">
              Các lĩnh vực trọng tâm trong quá trình phát triển sản phẩm
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionItems.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <item.icon className={`w-12 h-12 ${item.color} mb-4`} />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Roadmap */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Lộ Trình Phát Triển</h2>
            <p className="text-muted-foreground">
              Kế hoạch chi tiết cho năm 2026 và những năm tiếp theo
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {roadmap.map((phase, index) => (
              <Card
                key={index}
                className={`${
                  phase.status === 'in-progress' ? 'border-primary' : ''
                } hover:shadow-lg transition-all duration-300`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant={
                        phase.status === 'in-progress' ? 'default' : 'secondary'
                      }
                    >
                      {phase.phase}
                    </Badge>
                    {phase.status === 'in-progress' && (
                      <Badge variant="outline" className="text-primary">
                        <Rocket className="w-3 h-3 mr-1" />
                        Đang thực hiện
                      </Badge>
                    )}
                  </div>
                  <CardTitle>{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            phase.status === 'in-progress'
                              ? 'bg-primary'
                              : 'bg-muted-foreground'
                          }`}
                        />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Ứng Dụng Thực Tiễn</h2>
            <p className="text-muted-foreground">
              Những lĩnh vực có thể áp dụng hệ thống trong tương lai
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <app.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{app.title}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {app.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
