import {
  TrendingUp,
  Zap,
  Target,
  Award,
  BarChart3,
  CheckCircle,
} from 'lucide-react';
import fpsComparison from '@/assets/fps-comparison.jpg';
import chartFpsComparison from '@/assets/chart-fps-comparison.png';
import chartLatencyComparison from '@/assets/chart-latency-comparison.png';

export default function Results() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary text-sm font-medium">
              Performance Results
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Kết quả <span className="text-primary">Đột phá</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Từ 0.17 FPS đến 15.23 FPS - Tăng gần 9000% hiệu năng
          </p>
        </div>

        {/* Dramatic Comparison */}
        <div className="mb-20">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center mb-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-white">
                <div className="text-sm font-medium mb-2 opacity-90">
                  BASELINE (PyTorch)
                </div>
                <div className="text-6xl lg:text-7xl font-heading font-bold mb-4">
                  0.17
                </div>
                <div className="text-2xl font-medium mb-4">FPS</div>
                <div className="text-sm opacity-75">
                  Không thể sử dụng trong thực tế
                </div>
              </div>
              <div className="text-white">
                <div className="text-sm font-medium mb-2 opacity-90">
                  OPTIMIZED (OpenVINO)
                </div>
                <div className="text-6xl lg:text-7xl font-heading font-bold mb-4 animate-glow-pulse">
                  15.23
                </div>
                <div className="text-2xl font-medium mb-4">FPS</div>
                <div className="text-sm opacity-75">
                  Thời gian thực trên CPU thông thường
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-white mb-2">
                ↑ 8858% Throughput
              </div>
              <div className="text-white/90">
                Tăng gần 90 lần hiệu năng chỉ bằng tối ưu hóa phần mềm
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-4 border border-border">
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                FPS Comparison
              </h3>
              <img
                src={chartFpsComparison}
                alt="Chart FPS Comparison"
                className="w-full rounded-xl shadow-card"
              />
              <p className="text-center text-sm text-muted-foreground mt-3">
                Biểu đồ so sánh FPS giữa baseline (PyTorch) và bản tối ưu hoá
                (OpenVINO).
              </p>
            </div>

            <div className="bg-card rounded-2xl p-4 border border-border">
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                Latency Comparison
              </h3>
              <img
                src={chartLatencyComparison}
                alt="Chart Latency Comparison"
                className="w-full rounded-xl shadow-card"
              />
              <p className="text-center text-sm text-muted-foreground mt-3">
                Biểu đồ phân tích thời gian trễ (latency) trước và sau khi tối
                ưu hoá.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Metrics */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            Chỉ số chi tiết
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                metric: 'Throughput',
                baseline: '0.17 FPS',
                optimized: '15.23 FPS',
                improvement: '+8858%',
                color: 'text-primary',
              },
              {
                icon: Target,
                metric: 'Latency',
                baseline: '5882 ms',
                optimized: '65.7 ms',
                improvement: '-94.3%',
                color: 'text-green-500',
              },
              {
                icon: Award,
                metric: 'Detector mAP',
                baseline: '0.991',
                optimized: '0.991',
                improvement: 'Unchanged',
                color: 'text-blue-500',
              },
              {
                icon: CheckCircle,
                metric: 'Re-ID Accuracy',
                baseline: '92.5%',
                optimized: '93.1%',
                improvement: '+0.6%',
                color: 'text-primary',
              },
              {
                icon: BarChart3,
                metric: 'Memory Usage',
                baseline: '2.4 GB',
                optimized: '1.8 GB',
                improvement: '-25%',
                color: 'text-green-500',
              },
              {
                icon: TrendingUp,
                metric: 'CPU Utilization',
                baseline: '100%',
                optimized: '85%',
                improvement: 'More efficient',
                color: 'text-blue-500',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                  <h3 className="font-heading font-bold text-foreground">
                    {item.metric}
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Baseline:</span>
                    <span className="font-medium text-foreground">
                      {item.baseline}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Optimized:</span>
                    <span className="font-medium text-foreground">
                      {item.optimized}
                    </span>
                  </div>
                  <div className={`text-right text-sm font-bold ${item.color}`}>
                    {item.improvement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accuracy Preservation */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8">
            Giữ nguyên độ chính xác
          </h2>
          <div className="bg-secondary/30 rounded-2xl p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-8">
              Một trong những thành tựu lớn nhất: Tăng tốc độ gần 90 lần mà{' '}
              <strong className="text-foreground">
                không hy sinh độ chính xác
              </strong>
              . Điều này chứng minh OpenVINO không phải là "trade-off" mà là
              "win-win".
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Detection Accuracy
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">mAP@0.5:</span>
                    <span className="text-2xl font-bold text-primary">
                      0.991
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Precision:</span>
                    <span className="text-xl font-semibold text-foreground">
                      0.98
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Recall:</span>
                    <span className="text-xl font-semibold text-foreground">
                      0.98
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Re-ID Performance
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Rank-1 Accuracy:
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      93.1%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Rank-5 Accuracy:
                    </span>
                    <span className="text-xl font-semibold text-foreground">
                      97.8%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">mAP:</span>
                    <span className="text-xl font-semibold text-foreground">
                      0.887
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-world Impact */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            Tác động thực tế
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Chi phí triển khai',
                before: 'GPU Server $5,000+',
                after: 'Intel CPU $500',
                saving: 'Tiết kiệm 90% chi phí phần cứng',
              },
              {
                title: 'Khả năng mở rộng',
                before: '10 camera/server',
                after: '50+ camera/server',
                saving: 'Tăng 5x số camera trên một node',
              },
              {
                title: 'Tiêu thụ điện',
                before: '300W GPU',
                after: '65W CPU',
                saving: 'Giảm 78% năng lượng',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h3 className="text-lg font-heading font-bold text-foreground mb-4 text-center">
                  {item.title}
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">
                      Trước:
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {item.before}
                    </div>
                  </div>
                  <div className="text-center text-primary text-2xl">↓</div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">
                      Sau:
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {item.after}
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-border text-center">
                  <div className="text-sm font-semibold text-primary">
                    {item.saving}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
