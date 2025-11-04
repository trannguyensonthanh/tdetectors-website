import { Card } from '@/components/ui/card';
import { AlertCircle, Play } from 'lucide-react';
import hcmcTraffic from '@/assets/hcmc-traffic-home.png';
const ProblemSection = () => {
  return (
    <section
      id="problem"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/70"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Bối cảnh Vấn đề</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Giao thông đô thị đang đối mặt với thách thức giám sát và quản lý
          </p>
        </div>

        <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in-up animate-delay-100">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-start space-x-4">
                <AlertCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Thực trạng</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    TP.HCM với hàng triệu phương tiện lưu thông mỗi ngày, việc
                    giám sát và theo dõi hành trình của từng phương tiện qua
                    mạng lưới camera không giao nhau (non-overlapping) là một
                    thách thức lớn.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <AlertCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Nhu cầu</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cần một giải pháp giám sát thông minh, tự động có khả năng
                    tái định danh phương tiện chính xác qua nhiều camera mà
                    không phụ thuộc vào phần cứng đắt đỏ.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden bg-muted/30 min-h-[300px] flex items-center justify-center">
              <img
                src={hcmcTraffic}
                alt="Hình ảnh giao thông TP.HCM"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              {/* <p className="relative z-10 text-4xl font-bold text-primary/50 text-center px-4">
                Hình ảnh giao thông TP.HCM
              </p> */}
            </div>
          </div>
        </Card>
      </div>
      <div className="max-w-7xl mx-auto mt-8 animate-fade-in-up">
        <div className="flex justify-center">
          <a
            href="/problem"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Xem chi tiết bối cảnh vấn đề"
          >
            <Play className="w-4 h-4" />
            Xem chi tiết
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
