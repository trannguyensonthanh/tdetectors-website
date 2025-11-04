import { Card } from '@/components/ui/card';
import { Camera, Cpu, Play } from 'lucide-react';
import cpuVsGpuCost from '@/assets/cpu-vs-gpu-cost.png';
import reidChallengeMap from '@/assets/reid-challenge-map.png';
const ChallengesSection = () => {
  return (
    <section id="challenges" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Thách thức Kép</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Hai rào cản công nghệ cần phải vượt qua
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:glow-effect animate-fade-in-up">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Thách thức Tái định danh
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Nhận dạng cùng một phương tiện qua các camera khác nhau là cực
                kỳ khó khăn do:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Góc nhìn camera thay đổi liên tục</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Điều kiện ánh sáng không đồng nhất</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Tắc nghẽn và che khuất từ các phương tiện khác</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Biến dạng hình ảnh do khoảng cách và độ phân giải</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="relative rounded-lg overflow-hidden bg-muted/30 flex items-center justify-center">
                  <img
                    src={reidChallengeMap}
                    alt="Minh họa Re-ID"
                    className="h-full w-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:glow-effect animate-fade-in-up animate-delay-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Thách thức Hiệu năng
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Các giải pháp hiện tại đều hoàn toàn phụ thuộc nặng vào những
                con GPU đắt đỏ:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Chi phí đầu tư phần cứng GPU cao (≥ $500/card)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Tiêu thụ điện năng lớn (200-350W/GPU)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Khó triển khai quy mô lớn với ngân sách hạn chế</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Yêu cầu bảo trì và làm mát phức tạp</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="relative rounded-lg overflow-hidden bg-muted/30 flex items-center justify-center">
                  <img
                    src={cpuVsGpuCost}
                    alt="So sánh chi phí CPU vs GPU"
                    className="h-full w-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 animate-fade-in-up">
        <div className="flex justify-center">
          <a
            href="/challenges"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Xem chi tiết thách thức"
          >
            <Play className="w-4 h-4" />
            Xem chi tiết
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
