import { Card } from '@/components/ui/card';
import {
  ArrowRight,
  Database,
  Eye,
  FileText,
  Fingerprint,
  Network,
  Cpu,
  Play,
} from 'lucide-react';

const SolutionSection = () => {
  const steps = [
    {
      icon: Database,
      title: 'Data Ingestion',
      description: 'Thu thập và xử lý luồng video từ nhiều camera',
    },
    {
      icon: Eye,
      title: 'Detection & Tracking',
      description: 'Phát hiện và theo dõi phương tiện với YOLOv12 + BoT-SORT',
    },
    {
      icon: FileText,
      title: 'License Plate Recognition',
      description: 'Nhận dạng biển số xe để tạo metadata',
    },
    {
      icon: Fingerprint,
      title: 'Re-Identification',
      description: 'Tạo dấu vân tay hình ảnh với Vision Transformer',
    },
    {
      icon: Network,
      title: 'Multi-Camera Association',
      description: 'Liên kết và tái định danh qua nhiều camera với Faiss',
    },
  ];

  return (
    <section
      id="solution"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/70"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Giải pháp của Chúng tôi</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Kiến trúc hệ thống Tdetectors với 5 bước xử lý thông minh
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:glow-effect">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl">
                      {index + 1}
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden sm:block h-6 w-6 text-primary/50 flex-shrink-0" />
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Cpu className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">
              Tối ưu hóa toàn bộ bởi Intel® OpenVINO™
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Toàn bộ pipeline suy luận được tối ưu hóa sâu với Intel® OpenVINO™
            Toolkit, cho phép chạy mô hình AI phức tạp trên CPU thông thường với
            hiệu năng vượt trội.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 animate-fade-in-up">
        <div className="flex justify-center">
          <a
            href="/solution"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Xem chi tiết giải pháp"
          >
            <Play className="w-4 h-4" />
            Xem chi tiết
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
