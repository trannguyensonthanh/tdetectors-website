import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Mail, Play, QrCode } from 'lucide-react';
import githubQrCode from '@/assets/github-qr-code.png';
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/70"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Liên hệ & Nguồn mở</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Khám phá mã nguồn và kết nối với chúng tôi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* GitHub QR Code */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in-up">
            <div className="text-center space-y-6">
              <div className="p-4 bg-primary/10 rounded-lg inline-block">
                <QrCode className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Quét để truy cập GitHub</h3>

              <div className="bg-white p-4 rounded-lg inline-block">
                <img
                  src={githubQrCode}
                  alt="GitHub QR code"
                  className="w-48 h-48 object-contain rounded-md shadow-sm"
                  width={192}
                  height={192}
                />
                <p className="mt-3 text-sm text-muted-foreground text-center">
                  Quét để truy cập repo GitHub
                </p>
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect w-full"
                asChild
              >
                <a
                  href="https://github.com/ThaiTOm/Tdetectors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Xem trên GitHub
                </a>
              </Button>
            </div>
          </Card>

          {/* Contact Info */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in-up animate-delay-100">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Liên hệ</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">
                      Team Leader
                    </p>
                    <p className="font-semibold">Nguyễn Duy Thái</p>
                    <a
                      href="mailto:n22dccn077@student.ptithcm.edu.vn"
                      className="text-primary hover:underline"
                    >
                      n22dccn077@student.ptithcm.edu.vn
                    </a>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">
                      AI Engineer
                    </p>
                    <p className="font-semibold">Trần Nguyễn Sơn Thành</p>
                    <a
                      href="mailto:n22dccn078@student.ptithcm.edu.vn"
                      className="text-primary hover:underline"
                    >
                      n22dccn078@student.ptithcm.edu.vn
                    </a>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">
                      Data Specialist
                    </p>
                    <p className="font-semibold">Cao Duy Thái</p>
                    <a
                      href="mailto:n22dccn076@student.ptithcm.edu.vn"
                      className="text-primary hover:underline"
                    >
                      n22dccn076@student.ptithcm.edu.vn
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="font-bold mb-3">Người hướng dẫn</h4>
                <p className="text-muted-foreground mb-1">
                  ThS. Huỳnh Trung Trụ
                </p>
                <a
                  href="mailto:tru.ht@ptithcm.edu.vn"
                  className="text-primary hover:underline"
                >
                  truht@ptithcm.edu.vn
                </a>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="font-bold mb-3">Đơn vị</h4>
                <p className="text-muted-foreground">
                  Học viện Công nghệ Bưu chính Viễn thông
                  <br />
                  TP. Hồ Chí Minh
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center animate-fade-in-up">
          <Card className="inline-block p-8 bg-primary/5 border-primary/30">
            <p className="text-xl font-bold mb-2">🚀 Dự án Nguồn Mở</p>
            <p className="text-muted-foreground max-w-2xl">
              Chúng tôi tin vào sức mạnh của cộng đồng. Mã nguồn Tdetectors hoàn
              toàn miễn phí và mở để bạn nghiên cứu, cải tiến và phát triển
            </p>
          </Card>
        </div>
        <div className="max-w-7xl mx-auto mt-8 animate-fade-in-up">
          <div className="flex justify-center">
            <a
              href="/team"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Liên hệ chi tiết"
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

export default ContactSection;
