import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Brain,
  Eye,
  Fingerprint,
  Magnet,
  Play,
  Search,
  Zap,
} from 'lucide-react';
import yolov12History from '@/assets/yolov12-history.png';
import botsortPipline from '@/assets/botsort-pipeline.png';
import vitArchitechture from '@/assets/vit-architecture.png';
import tripletLossDes from '@/assets/triplet-loss-des.png';
import faissIndexArchitecture from '@/assets/faiss-index-architecture.png';
import openvinoOptimize from '@/assets/openvino-optimize.png';

const TechnologySection = () => {
  const technologies = [
    {
      id: 'yolo',
      icon: Eye,
      name: 'YOLOv12',
      tagline: 'Đôi mắt của hệ thống',
      description:
        'Mô hình phát hiện đối tượng tốc độ cao với độ chính xác vượt trội',
      features: [
        'Phát hiện thời gian thực với tốc độ > 30 FPS',
        'mAP@0.5 đạt 99.1% trên tập dữ liệu',
        'Tối ưu cho CPU với kiến trúc CSPDarknet',
        'Cân bằng hoàn hảo giữa tốc độ và độ chính xác',
      ],
      image: yolov12History,
      link: '/yolo',
    },
    {
      id: 'botsort',
      icon: Fingerprint,
      name: 'BoT-SORT',
      tagline: 'Trí nhớ ngắn hạn',
      description: 'Theo dõi đối tượng ổn định với Kalman Filter nâng cao',
      features: [
        'Kalman Filter dự đoán chuyển động chính xác',
        'Chiến lược liên kết kép: Re-ID + IoU',
        'Xử lý tốt các trường hợp che khuất',
        'Duy trì identity ổn định trong video',
      ],
      image: botsortPipline,
      link: '/botsort',
    },
    {
      id: 'vit',
      icon: Brain,
      name: 'Vision Transformer',
      tagline: 'Bộ não nhận dạng',
      description: 'Cơ chế Self-Attention tạo dấu vân tay hình ảnh độc đáo',
      features: [
        'Mô hình hóa mối quan hệ toàn cục trong ảnh',
        'Tạo embedding 768 chiều cho mỗi phương tiện',
        'Robust với thay đổi góc nhìn và ánh sáng',
        'Attention Map trực quan hóa vùng quan trọng',
      ],
      image: vitArchitechture,
      link: '/vit',
    },
    {
      id: 'triplet',
      icon: Magnet,
      name: 'Triplet Loss',
      tagline: 'Kéo lại & Đẩy ra',
      description: 'Học cách phân biệt phương tiện trong không gian embedding',
      features: [
        'Anchor: Ảnh gốc của phương tiện',
        'Positive: Cùng phương tiện, camera khác',
        'Negative: Phương tiện khác, đẩy xa ra',
        'Tạo không gian embedding có cấu trúc rõ ràng',
      ],
      image: tripletLossDes,
      link: '/triplet-loss',
    },
    {
      id: 'faiss',
      icon: Search,
      name: 'Faiss Index',
      tagline: 'Google cho Dấu vân tay',
      description: 'Tìm kiếm vector tương đồng với tốc độ ánh sáng',
      features: [
        'Tra cứu hàng triệu vector trong milliseconds',
        'IndexFlatL2 cho độ chính xác tối đa',
        'Tối ưu hóa bởi Facebook AI Research',
        'Scalable cho hệ thống quy mô lớn',
      ],
      image: faissIndexArchitecture,
      link: '/faiss',
    },
    {
      id: 'openvino',
      icon: Zap,
      name: 'Intel OpenVINO™',
      tagline: 'Động cơ Tăng tốc',
      description: 'Tối ưu hóa sâu cho CPU Intel với 3 cơ chế chính',
      features: [
        'Vectorization: Tận dụng AVX2/AVX512',
        'Graph Fusion: Gộp các phép toán liên tiếp',
        'Lightweight Runtime: Giảm overhead',
        'Tăng tốc 8858% so với baseline',
      ],
      image: openvinoOptimize,
      link: '/openvino',
    },
  ];

  return (
    <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Công nghệ Core</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Sáu công nghệ then chốt tạo nên sức mạnh của Tdetectors
          </p>
        </div>

        <Tabs defaultValue="yolo" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 h-auto bg-secondary/50 p-2 mb-8">
            {technologies.map((tech) => (
              <TabsTrigger
                key={tech.id}
                value={tech.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-2"
              >
                <tech.icon className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">{tech.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {technologies.map((tech) => (
            <TabsContent key={tech.id} value={tech.id} className="mt-0">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <tech.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{tech.name}</h3>
                    <p className="text-primary text-lg">{tech.tagline}</p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  {tech.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {tech.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="relative rounded-lg overflow-hidden bg-muted/30 flex items-center justify-center">
                    <img
                      src={tech.image}
                      alt={`Hình minh họa ${tech.name}`}
                      className="w-full h-full relative z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 pointer-events-none" />
                  </div>
                </div>
              </Card>
              <div className="max-w-7xl mx-auto mt-8 animate-fade-in-up">
                <div className="flex justify-center">
                  <a
                    href={tech.link}
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                    aria-label="Xem chi tiết công nghệ"
                  >
                    <Play className="w-4 h-4" />
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TechnologySection;
