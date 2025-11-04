import { Cpu, Zap, Layers, TrendingUp, AlertTriangle } from 'lucide-react';

export default function OpenVINO() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary text-sm font-medium">
              Optimization Toolkit
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Intel® <span className="text-primary">OpenVINO™</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            "Động cơ tăng tốc" - Tối ưu hóa toàn bộ pipeline inference
          </p>
        </div>

        {/* === PHẦN 1: VẤN ĐỀ HIỆU NĂNG BASELINE (CẢNH BÁO + SO SÁNH) === */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-6">
            Rào cản hiệu năng trên CPU
          </h2>
          <p className="text-center text-muted-foreground max-w-5xl mx-auto mb-10 text-xl">
            Kịch bản thực tế: model nặng chạy trên CPU mà không tối ưu — kết quả
            là throughput thấp, latency cao và CPU gần như đầy tải. Dưới đây là
            biểu diễn trực quan của kết quả baseline và lợi ích khi tối ưu.
          </p>

          <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 items-stretch">
            {/* Baseline card */}
            <div className="bg-tech-card border border-red-500/30 p-8 rounded-2xl flex flex-col">
              <div className="flex items-start gap-6">
                <AlertTriangle
                  className="h-16 w-16 text-red-400 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="text-2xl font-bold text-red-400 mb-2">
                    Kết quả Baseline (PyTorch trên CPU)
                  </h3>
                  <p className="text-tech-subtle mb-4">
                    Chạy trực tiếp trên CPU mà không có tối ưu hóa: pipeline
                    inference phức tạp dẫn đến throughput cực thấp và latency
                    rất cao.
                  </p>

                  <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                    <div>
                      <dt className="text-muted-foreground">Throughput</dt>
                      <dd className="text-white text-2xl font-mono font-semibold">
                        0.17 FPS
                      </dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Latency / frame</dt>
                      <dd className="text-white text-2xl font-mono font-semibold">
                        ~6s
                      </dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">CPU Usage</dt>
                      <dd className="text-yellow-300 font-bold">⟳ 95%</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Usability</dt>
                      <dd className="text-yellow-300 font-bold">
                        Không thể dùng
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Tiny sparkline / bar visualization */}
              <div className="mt-6">
                <div className="text-xs text-muted-foreground mb-2">
                  Hiệu năng theo frame (mô phỏng)
                </div>
                <div className="flex items-end gap-2 h-20">
                  {/* Bars: baseline very low */}
                  <div
                    className="w-6 bg-red-400 rounded-t-md"
                    style={{ height: '6%' }}
                  />
                  <div
                    className="w-6 bg-red-400 rounded-t-md"
                    style={{ height: '8%' }}
                  />
                  <div
                    className="w-6 bg-red-400 rounded-t-md"
                    style={{ height: '4%' }}
                  />
                  <div
                    className="w-6 bg-red-400 rounded-t-md"
                    style={{ height: '12%' }}
                  />
                  <div
                    className="w-6 bg-red-400 rounded-t-md"
                    style={{ height: '7%' }}
                  />
                  <div
                    className="w-6 bg-red-400 rounded-t-md"
                    style={{ height: '5%' }}
                  />
                  <div
                    className="w-6 bg-red-400/60 rounded-t-md"
                    style={{ height: '3%' }}
                  />
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  Thấp → Ứng dụng real-time là không khả thi
                </div>
              </div>

              <div className="mt-6">
                <p className="text-yellow-300 font-bold text-lg">
                  ⇒ Không thể áp dụng vào thực tế!
                </p>
              </div>
            </div>

            {/* Optimized / Recommendation card */}
            <div className="bg-card border border-border p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Cpu className="h-10 w-10 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Hướng tối ưu (OpenVINO)
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6">
                  Áp dụng conversion → IR → tối ưu hóa (vectorization, fusion,
                  runtime nhẹ) để tăng throughput và giảm latency.
                </p>

                <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  <div>
                    <dt className="text-muted-foreground">
                      Expected Throughput
                    </dt>
                    <dd className="text-primary text-2xl font-mono font-semibold">
                      15.23 FPS
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Estimated Latency</dt>
                    <dd className="text-foreground text-2xl font-mono font-semibold">
                      ~66 ms
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Tăng tốc gấp</dt>
                    <dd className="text-foreground text-2xl font-bold">
                      {(15.23 / 0.17).toFixed(1)}x
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Mức độ tích hợp</dt>
                    <dd className="text-foreground font-semibold">
                      Production-ready
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 space-y-3">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Các bước chính
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-3">
                      <Zap className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      Tối ưu graph: fusion & operator merge
                    </li>
                    <li className="flex items-start gap-3">
                      <Layers className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      Sử dụng vectorized kernels (AVX2/AVX-512)
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      Runtime nhẹ, memory pooling & caching
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Bắt đầu chuyển đổi: xuất sang ONNX → OpenVINO IR → deploy
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-20">
          <div className="bg-gradient-primary rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              OpenVINO là gì?
            </h2>
            <p className="text-lg max-w-7xl mx-auto mb-6">
              <strong>OpenVINO</strong> (Open Visual Inference &amp; Neural
              Network Optimization) là toolkit của Intel giúp chuyển đổi, tối ưu
              và chạy mạng neural với hiệu năng cao trên phần cứng Intel — từ
              CPU, GPU tới VPU. Mục tiêu: throughput tăng, latency giảm, và sử
              dụng tài nguyên hiệu quả để đưa model vào production.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                className="inline-flex items-center gap-3 bg-white text-primary px-6 py-3 rounded-full font-semibold shadow-md"
                href="#"
                aria-label="Tìm hiểu thêm về OpenVINO"
              >
                Tìm hiểu thêm
              </a>
              <span className="text-sm text-white/80">
                Hỗ trợ: PyTorch → ONNX → OpenVINO IR • Deployment: edge / server
                / cloud
              </span>
            </div>
          </div>

          <section aria-labelledby="acceleration-mechanisms" className="px-4">
            <h2
              id="acceleration-mechanisms"
              className="text-3xl font-heading font-bold text-foreground mb-4 text-center"
            >
              Ba cơ chế tăng tốc chính
            </h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
              OpenVINO tối ưu trên nhiều tầng: từ instruction set tới
              graph-level fusion và một runtime tối giản — kết hợp giúp đạt
              throughput cao và latency thấp trên phần cứng Intel.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Cpu,
                  title: 'Vectorization',
                  subtitle: 'AVX2 / AVX-512',
                  description:
                    'Sử dụng SIMD để xử lý nhiều điểm dữ liệu đồng thời trong một clock cycle — tăng hiệu năng cho toán tử số học nặng.',
                  highlight: 'Memory-aligned kernels',
                  stat: '×8',
                  statLabel: 'Speed-up (kernels)',
                  accent: 'from-indigo-50 to-indigo-100',
                },
                {
                  icon: Layers,
                  title: 'Graph Fusion',
                  subtitle: 'Operator Merging',
                  description:
                    'Gộp các sequence ops (Conv → BN → ReLU) thành một kernel duy nhất để giảm memory traffic và latency giữa các op.',
                  highlight: 'Fused execution paths',
                  stat: '−30%',
                  statLabel: 'Reduced memory bandwidth',
                  accent: 'from-rose-50 to-rose-100',
                },
                {
                  icon: Zap,
                  title: 'Lightweight Runtime',
                  subtitle: 'Minimal Overhead',
                  description:
                    'Runtime tối giản, memory pooling và cache-aware scheduling giúp giảm overhead so với framework full-stack.',
                  highlight: 'Low-latency scheduling',
                  stat: '≈66 ms',
                  statLabel: 'Example latency',
                  accent: 'from-amber-50 to-amber-100',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 relative shadow-sm hover:shadow-lg transform transition will-change-transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary/30"
                    tabIndex={0}
                    aria-labelledby={`accel-${index}-title`}
                    role="group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`h-12 w-12 rounded-lg flex items-center justify-center border border-primary/10 bg-gradient-to-br ${item.accent}`}
                          aria-hidden
                        >
                          <Icon className="h-6 w-6 text-primary" />
                        </div>

                        <div>
                          <h3
                            id={`accel-${index}-title`}
                            className="text-lg font-heading font-semibold text-foreground"
                          >
                            {item.title}
                          </h3>
                          <p className="text-sm text-primary font-medium">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">
                          {item.statLabel}
                        </div>
                        <div className="text-2xl font-mono font-bold text-foreground">
                          {item.stat}
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-muted-foreground">
                      {item.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold border border-primary/20">
                        {item.highlight}
                      </div>
                    </div>

                    {/* subtle mini visualization */}
                    <div className="mt-4" aria-hidden>
                      <div className="h-2 bg-muted-foreground/8 rounded-full overflow-hidden">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r from-primary to-primary/60`}
                          style={{
                            width:
                              index === 0 ? '80%' : index === 1 ? '60%' : '45%',
                          }}
                        />
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Relative impact indicator
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <div className="bg-secondary/30 rounded-2xl p-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-3 text-center">
              Conversion Pipeline
            </h2>
            <p className="text-center text-muted-foreground max-w-5xl mx-auto mb-8">
              Một flow trực quan từ model training tới production-ready
              inference. Mỗi bước có thông tin định dạng và ghi chú nhỏ để dễ
              hiểu.
            </p>

            <div
              className="flex flex-col md:flex-row items-stretch justify-center gap-6 max-w-7xl mx-auto"
              role="list"
              aria-label="OpenVINO conversion pipeline steps"
            >
              {[
                {
                  icon: Cpu,
                  name: 'PyTorch Model',
                  format: '.pth / .pt',
                  desc: 'Model training với đầy đủ định nghĩa, weights và optimizer state — chuẩn bị để xuất sang ONNX.',
                  note: 'Export-ready: tracing / scripting',
                },
                {
                  icon: Layers,
                  name: 'ONNX',
                  format: '.onnx',
                  desc: 'Định dạng trung gian tiêu chuẩn để phân phối graph & weights giữa frameworks.',
                  note: 'Kiểm tra ops compatibility',
                },
                {
                  icon: Cpu,
                  name: 'OpenVINO IR',
                  format: '.xml + .bin',
                  desc: 'IR (Intermediate Representation) — model được tối ưu hóa (fused ops, layout transforms) cho runtime của OpenVINO.',
                  note: 'Quantize / precision tuning',
                },
                {
                  icon: Zap,
                  name: 'Optimized Inference',
                  format: 'e.g. 15.23 FPS',
                  desc: 'Runtime tối ưu: vectorized kernels, memory pooling và caching — sẵn sàng deploy edge/server.',
                  note: 'Monitor & A/B test in production',
                },
              ].map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <div
                    key={index}
                    role="listitem"
                    className="flex-1 bg-card border border-border rounded-lg p-6 relative flex flex-col gap-4 transform transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="absolute -top-3 left-4">
                      <div className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full border border-primary/20">
                        Step {index + 1}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <div>
                        <div className="font-heading font-bold text-foreground">
                          {stage.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stage.format}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground flex-1">
                      {stage.desc}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="text-xs text-muted-foreground">
                        {stage.note}
                      </div>
                      {index === 1 && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold">
                          Compatibility check
                        </span>
                      )}
                    </div>

                    {/* Connector for desktop between items */}
                    {index < 3 && (
                      <div className="hidden md:flex absolute right-[-44px] top-1/2 transform -translate-y-1/2">
                        <svg
                          width="88"
                          height="24"
                          viewBox="0 0 88 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                          <path
                            d="M0 12H70"
                            stroke="rgba(99,102,241,0.12)"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M70 12L62 6"
                            stroke="rgba(99,102,241,0.24)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M70 12L62 18"
                            stroke="rgba(99,102,241,0.24)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 to-primary/10 px-4 py-2 rounded-full border border-primary/10">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary font-semibold">
                  Mẹo: thử quantization và operator fusion để tăng throughput
                  hơn nữa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
