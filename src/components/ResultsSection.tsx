import { Card } from '@/components/ui/card';
import { TrendingUp, Zap, Award } from 'lucide-react';

const ResultsSection = () => {
  return (
    <section
      id="results"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/70"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Kết quả Đột phá</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Con số nói lên tất cả - Sự chuyển biến không thể tin được
          </p>
        </div>

        {/* Before / After Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-destructive/10 border-destructive/30 animate-fade-in-up">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-destructive">
                Trước Tối ưu hóa
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-5xl font-bold text-destructive mb-2">
                    0.17
                  </p>
                  <p className="text-xl text-muted-foreground">FPS</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Không thể sử dụng trong thực tế
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-primary/10 border-primary/30 glow-effect animate-fade-in-up animate-delay-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Sau Tối ưu hóa
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-5xl font-bold text-primary mb-2">15.23</p>
                  <p className="text-xl text-muted-foreground">FPS</p>
                </div>
                <p className="text-sm text-foreground font-semibold">
                  Thời gian thực trên CPU thông thường
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Metrics */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in-up">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-4xl font-bold text-primary mb-2">+8858%</p>
            <p className="text-muted-foreground">Tăng Throughput</p>
          </Card>

          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in-up animate-delay-100">
            <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-4xl font-bold text-primary mb-2">-94.3%</p>
            <p className="text-muted-foreground">Giảm Latency</p>
          </Card>

          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in-up animate-delay-200">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-4xl font-bold text-primary mb-2">89.4x</p>
            <p className="text-muted-foreground">Tăng tốc tổng thể</p>
          </Card>
        </div>

        {/* Performance Table */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-6 text-center">
            So sánh Chi tiết
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left py-4 px-4 text-muted-foreground">
                    Chỉ số
                  </th>
                  <th className="text-center py-4 px-4 text-destructive">
                    Baseline
                  </th>
                  <th className="text-center py-4 px-4 text-primary">
                    OpenVINO
                  </th>
                  <th className="text-center py-4 px-4 text-foreground">
                    Cải thiện
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-4 font-medium">FPS</td>
                  <td className="py-4 px-4 text-center text-destructive">
                    0.17
                  </td>
                  <td className="py-4 px-4 text-center text-primary font-bold">
                    15.23
                  </td>
                  <td className="py-4 px-4 text-center text-primary">+8858%</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-4 font-medium">Latency (ms)</td>
                  <td className="py-4 px-4 text-center text-destructive">
                    5882
                  </td>
                  <td className="py-4 px-4 text-center text-primary font-bold">
                    66
                  </td>
                  <td className="py-4 px-4 text-center text-primary">-94.3%</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Speedup</td>
                  <td className="py-4 px-4 text-center text-destructive">
                    1.0x
                  </td>
                  <td className="py-4 px-4 text-center text-primary font-bold">
                    89.4x
                  </td>
                  <td className="py-4 px-4 text-center text-primary">+8840%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Accuracy Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              Độ chính xác Detection
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">mAP@0.5</span>
                <span className="text-2xl font-bold text-primary">99.1%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">F1-Score</span>
                <span className="text-2xl font-bold text-primary">98.0%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Precision</span>
                <span className="text-2xl font-bold text-primary">98.1%</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in-up animate-delay-100">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              Độ chính xác Re-ID
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Training Accuracy</span>
                <span className="text-2xl font-bold text-primary">95.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">
                  Validation Accuracy
                </span>
                <span className="text-2xl font-bold text-primary">93.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Embedding Dim</span>
                <span className="text-2xl font-bold text-primary">768</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center animate-fade-in-up">
          <Card className="inline-block p-8 bg-primary/5 border-primary/30">
            <p className="text-2xl font-bold mb-2">
              <span className="text-gradient">Nhanh nhưng vẫn Chính xác</span>
            </p>
            <p className="text-muted-foreground">
              Đạt được sự cân bằng hoàn hảo giữa tốc độ và độ tin cậy
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
