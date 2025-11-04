import { Card } from '@/components/ui/card';
import { Sparkles, TrendingUp, Cpu, Monitor, Play } from 'lucide-react';

const FutureSection = () => {
  const visions = [
    {
      icon: Sparkles,
      title: 'Nâng cấp Mô hình',
      description:
        'Tích hợp các kiến trúc transformer mới nhất, fine-tuning cho điều kiện Việt Nam',
    },
    {
      icon: TrendingUp,
      title: 'Mở rộng Chức năng',
      description:
        'Phân tích hành vi phương tiện, phát hiện vi phạm, dự đoán lộ trình',
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description:
        'Triển khai trên Intel VPU (Movidius) để giảm chi phí và tăng khả năng mở rộng',
    },
    {
      icon: Monitor,
      title: 'Giao diện Người dùng',
      description:
        'Xây dựng dashboard trực quan cho giám sát và quản lý hệ thống',
    },
  ];

  return (
    <section id="future" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Tầm nhìn Tương lai</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Những bước phát triển tiếp theo của Tdetectors
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visions.map((vision, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:glow-effect hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 bg-primary/10 rounded-lg inline-block mb-4">
                <vision.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{vision.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {vision.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <Card className="inline-block p-8 bg-primary/10 border-primary/30 glow-effect">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">Hành trình mới bắt đầu</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Tdetectors là bước đệm quan trọng hướng tới một hệ thống giám sát
              giao thông thông minh, hiệu quả và có thể triển khai rộng rãi tại
              Việt Nam
            </p>
          </Card>
        </div>
        <div className="max-w-7xl mx-auto mt-8 animate-fade-in-up">
          <div className="flex justify-center">
            <a
              href="/future"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="tầm nhìn tương lai chi tiết"
            >
              <Play className="w-4 h-4" />
              Xem chi tiết
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
