import { Play, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import demoReidC41 from '@/assets/demo-reid-c41.png';
import demoReidC42 from '@/assets/demo-reid-c42.png';
import demoReidC43 from '@/assets/demo-reid-c43.png';
import demoReidC44 from '@/assets/demo-reid-c44.png';
import demoReidMap from '@/assets/demo-reid-map-trajectory.png';
import githubQrCode from '@/assets/github-qr-code.png';
import paperPdf from '@/assets/paper.pdf';

export default function Demo() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary text-sm font-medium">
              Live Demonstration
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Demo & <span className="text-primary">Showcase</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Xem hệ thống hoạt động trong thực tế
          </p>
        </div>

        <div className="mb-6 text-center">
          <h3 className="text-4xl font-heading font-bold text-foreground mb-2">
            Demo 1: Tracking & LPR trong Môi trường Thực tế (TP.HCM)
          </h3>
          <p className="text-muted-foreground">
            Hệ thống theo dõi và nhận dạng biển số xe của phương tiện đang giao
            thông trên đường phố TP.HCM.
          </p>
        </div>

        <div className="mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-border bg-card">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/AktD6WMdBYs"
                title="Tdetectors Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* Demo Composite Image */}
        <div className="mb-20">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in-up animate-delay-100">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold">
                    Demo 2: Tái hiện Hành trình
                  </h3>
                  <p className="text-muted-foreground">
                    Chiếc xe tải được theo dõi liên tục qua 4 camera không giao
                    nhau
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 items-start">
                <div className="lg:col-span-2 space-y-4">
                  <div className="relative rounded-lg overflow-hidden bg-muted/30 min-h-[160px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                    <div className="text-center space-y-2 p-8">
                      <img
                        src={demoReidMap}
                        alt="Trajectory Map"
                        className="w-[1000px] rounded-lg shadow-md"
                      />
                      <p className="text-sm text-muted-foreground mt-2 text-center">
                        Bản đồ hành trình tổng hợp qua 4 camera
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-4 gap-4 pt-2">
                    <div className="text-center p-2 bg-secondary/30 rounded-lg">
                      <img
                        src={demoReidC41}
                        alt="Camera 1"
                        className="w-full h-36 rounded-md mb-2"
                      />
                      <p className="text-3xl font-bold text-primary mb-1">
                        Camera 1
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Góc nhìn đầu tiên
                      </p>
                    </div>

                    <div className="text-center p-2 bg-secondary/30 rounded-lg">
                      <img
                        src={demoReidC42}
                        alt="Camera 2"
                        className="w-full h-36 rounded-md mb-2"
                      />
                      <p className="text-3xl font-bold text-primary mb-1">
                        Camera 2
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Phát hiện lại
                      </p>
                    </div>

                    <div className="text-center p-2 bg-secondary/30 rounded-lg">
                      <img
                        src={demoReidC43}
                        alt="Camera 3"
                        className="w-full h-36 rounded-md mb-2"
                      />
                      <p className="text-3xl font-bold text-primary mb-1">
                        Camera 3
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Xác nhận identity
                      </p>
                    </div>

                    <div className="text-center p-2 bg-secondary/30 rounded-lg">
                      <img
                        src={demoReidC44}
                        alt="Camera 4"
                        className="w-full h-36 rounded-md mb-2"
                      />
                      <p className="text-3xl font-bold text-primary mb-1">
                        Camera 4
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Hoàn thành hành trình
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          {/* 
          <div className="mt-12 text-left animate-fade-in-up">
            <Card className="inline-block p-6 bg-primary/5 border-primary/30">
              <p className="text-lg font-semibold px-11 lg:px-">
                ✓ Nhận dạng chính xác <br />✓ Thời gian thực
                <br />✓ Trên CPU thông thường
              </p>
            </Card>
          </div> */}

          <div className="mt-20 mb-6 text-center">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-2">
              Demo 3: Hệ thống Hoạt động Toàn diện
            </h3>
            <p className="text-muted-foreground">
              Hệ thống nhận diện xe car xanh với ID 65 qua nhiều camera khác
              nhau (c008, c009)
            </p>
          </div>

          <div className="mb-20">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-border bg-card">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/fJZQ7YMWx00"
                  title="Tdetectors Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Features */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            Tính năng trình diễn
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Real-time Detection',
                description:
                  'YOLOv12 phát hiện tất cả phương tiện trong frame với độ trễ thấp',
                icon: '🎯',
              },
              {
                title: 'Single-Camera Tracking',
                description:
                  'BoT-SORT theo dõi ổn định từng xe qua các frame trong một camera',
                icon: '📹',
              },
              {
                title: 'License Plate Recognition',
                description: 'Trích xuất biển số xe tự động khi nhìn thấy rõ',
                icon: '🔢',
              },
              {
                title: 'Feature Extraction',
                description:
                  'Vision Transformer tạo embedding vector 512-D cho mỗi xe',
                icon: '🧠',
              },
              {
                title: 'Cross-Camera Association',
                description:
                  'Liên kết cùng một xe qua các camera khác nhau bằng Faiss',
                icon: '🔗',
              },
              {
                title: 'Trajectory Visualization',
                description:
                  'Hiển thị hành trình hoàn chỉnh của xe qua nhiều camera',
                icon: '📍',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Showcase */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            Chỉ số trong demo
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Processing Speed', value: '15.23 FPS' },
              { label: 'Vehicles Tracked', value: '847' },
              { label: 'Re-ID Success Rate', value: '93.1%' },
              { label: 'Cameras Used', value: '4' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border text-center"
              >
                <div className="text-3xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub & Resources */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            Tài nguyên & Mã nguồn
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <Github className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                GitHub Repository
              </h3>
              <p className="text-muted-foreground mb-6">
                Truy cập mã nguồn đầy đủ, tài liệu hướng dẫn, và pretrained
                models
              </p>
              <a
                href="https://github.com/ThaiTOm/Tdetectors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </a>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <ExternalLink className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                Báo cáo nghiên cứu
              </h3>
              <p className="text-muted-foreground mb-6">
                Đọc báo cáo chi tiết về phương pháp, thử nghiệm và kết quả
              </p>
              <a
                href={paperPdf}
                target="_blank"
                rel="noopener noreferrer"
                download
                aria-label="Download paper PDF"
              >
                <Button
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/10"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Download Paper
                </Button>
              </a>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="mt-12 bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-6">
              Quét mã QR để truy cập ngay
            </h3>
            <div className="inline-block bg-white p-6 rounded-lg">
              <div className="w-48 h-48 bg-muted flex items-center justify-center">
                <img
                  src={githubQrCode}
                  alt="GitHub QR Code"
                  className="w-48 h-48 object-contain rounded-md"
                />
              </div>
            </div>
            <p className="text-white/90 mt-6 max-w-md mx-auto">
              Quét mã QR bằng điện thoại để truy cập repository GitHub và tài
              liệu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
