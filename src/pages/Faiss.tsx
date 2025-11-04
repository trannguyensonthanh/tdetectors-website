import { Search, Database, Zap, BarChart3, AlertTriangle } from 'lucide-react';
import bruteForceVsFaiss from '../assets/brute-force-vs-faiss.png';

export default function Faiss() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary text-sm font-medium">
              Similarity Search
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            <span className="text-primary">Faiss Index</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            "Google cho dấu vân tay" - Tìm kiếm vector tương đồng cực nhanh
          </p>
        </div>

        {/* === PHẦN 1: VẤN ĐỀ - TÌM KIM TRONG ĐÁY BỂ === */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            Bài toán: "Tìm kim trong đáy bể" Dữ liệu
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center  border border-tech-border p-8 rounded-lg">
            <div className="text-lg text-tech-subtle space-y-6 pr-4">
              <h3 className="text-3xl font-bold mb-2">
                Thách thức: Quy mô & Hiệu năng
              </h3>

              <p>
                Khi một chiếc xe mới xuất hiện, hệ thống phải so sánh vector đặc
                trưng (ví dụ 512 chiều) của nó với{' '}
                <strong className="!text-white">
                  hàng triệu — thậm chí hàng tỷ
                </strong>{' '}
                vector đã lưu. Yêu cầu: phản hồi gần như tức thời để xử lý
                real-time.
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Vector dim: <strong>512</strong>
                </li>
                <li>
                  Quy mô dữ liệu: <strong>10M → 1B+</strong> vectors
                </li>
                <li>
                  Yêu cầu latency: <strong>&lt;100ms</strong> (real-time)
                </li>
              </ul>

              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="bg-card rounded-lg p-4 border border-border flex flex-col">
                  <span className="text-sm text-muted-foreground">
                    Kích thước mẫu
                  </span>
                  <strong className="text-2xl">10M+</strong>
                  <span className="text-sm">vectors (512-d)</span>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border flex flex-col">
                  <span className="text-sm text-muted-foreground">
                    Brute-force
                  </span>
                  <strong className="text-2xl">vài giây → vài phút</strong>
                  <span className="text-sm">
                    mỗi truy vấn (không khả thi cho real-time)
                  </span>
                </div>
              </div>

              <div className="bg-red-900/40 border border-red-500 p-4 rounded-lg flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-red-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">
                    So sánh tuần tự (Brute-force)
                  </p>
                  <p className="text-sm text-red-200">
                    Mỗi truy vấn phải đo khoảng cách đến mọi vector → độ trễ
                    lớn, chi phí CPU/RAM cực cao.
                  </p>
                </div>
              </div>

              <div className="bg-green-900/30 border border-green-600 p-4 rounded-lg flex items-start gap-3">
                <Database className="h-6 w-6 text-green-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">
                    Giải pháp đề xuất: Faiss (ANN)
                  </p>
                  <p className="text-sm text-green-200">
                    Xây dựng index (IVF, PQ, HNSW, …) để truy vấn Top‑K trong
                    milli → micro giây với tổn thất độ chính xác rất nhỏ.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Scale to billions
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Latency: ms → µs
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Memory-efficient (Quantization)
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Tóm lại: để đạt real-time và tiết kiệm tài nguyên, chuyển từ
                brute-force sang Faiss + pipeline offline build/indexing là bắt
                buộc.
              </p>
            </div>
            <div>
              <img
                src={bruteForceVsFaiss}
                alt="Brute Force vs Faiss ANNS"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="space-y-20">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
              Faiss là gì?
            </h2>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">F</strong>acebook{' '}
              <strong className="text-foreground">AI</strong>{' '}
              <strong className="text-foreground">S</strong>imilarity{' '}
              <strong className="text-foreground">S</strong>earch (
              <em>Faiss</em>) — thư viện mã nguồn mở của Meta AI tối ưu cho tìm
              kiếm và clustering các vector đặc trưng ở quy mô lớn. Faiss được
              viết bằng C++ với binding Python, hỗ trợ cả CPU và GPU, cung cấp
              bộ công cụ phong phú để xây dựng các index nhanh, bộ nhớ hiệu quả
              và có thể mở rộng tới hàng triệu → hàng tỷ vectors.
            </p>

            <p className="text-tech-subtle mb-4">
              Faiss cho phép bạn đánh đổi một chút độ chính xác để đạt được tốc
              độ truy vấn cực nhanh bằng các thuật toán ANN (Approximate Nearest
              Neighbor). Thích hợp cho các bài toán như tìm kiếm ảnh/video tương
              đồng, recommendation, deduplication và real-time matching.
            </p>

            <ul className="list-disc pl-5 space-y-2 mb-4 text-tech-subtle">
              <li>
                Các kiểu index phổ biến: <strong>IVF</strong>,{' '}
                <strong>PQ</strong>, <strong>HNSW</strong> (và các kết hợp như
                IVF+PQ, OPQ, …)
              </li>
              <li>
                Hỗ trợ <strong>GPU acceleration</strong> cho việc build/query ở
                quy mô lớn
              </li>
              <li>
                Tối ưu bộ nhớ bằng <strong>quantization</strong> — giảm
                footprint mà vẫn giữ độ chính xác cao
              </li>
              <li>
                API linh hoạt (C++/Python) — dễ tích hợp vào pipeline
                offline/real-time
              </li>
            </ul>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Scale to billions
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Latency: ms → µs
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                IVF · PQ · HNSW
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                CPU & GPU
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Production-ready
              </span>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Tóm lại: Faiss là lựa chọn hàng đầu khi cần tìm kiếm vector nhanh
              và hiệu quả trên dữ liệu lớn — xây dựng index offline, phục vụ
              truy vấn real-time với chi phí tài nguyên hợp lý.
            </p>
          </div>

          {/* === PHẦN 2: TẠI SAO FAISS LÀ GIẢI PHÁP? === */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-12">
              Tại sao Faiss là "Vũ khí Bí mật"?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Database,
                  title: 'Khả năng Mở rộng Khổng lồ',
                  description:
                    'Được thiết kế để xử lý hàng tỷ vector, sẵn sàng cho các bài toán quy mô thành phố.',
                },
                {
                  icon: Zap,
                  title: 'Tốc độ Micro-giây',
                  description:
                    'Sử dụng các thuật toán Approximate Nearest Neighbor (ANN) để tìm kiếm nhanh hơn hàng nghìn lần so với brute-force.',
                },
                {
                  icon: Search,
                  title: 'Tìm kiếm Gần đúng (ANN)',
                  description:
                    'Chấp nhận hy sinh một phần rất nhỏ độ chính xác (ví dụ: từ 100% xuống 99.9%) để đổi lấy tốc độ vượt trội.',
                },
                {
                  icon: BarChart3,
                  title: 'Tối ưu Bộ nhớ',
                  description:
                    'Sử dụng các kỹ thuật nén vector (Quantization) để giảm đáng kể dung lượng RAM cần thiết.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-tech-card rounded-lg p-6 border border-tech-border text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <item.icon
                    className="h-12 w-12 highlight mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-tech-subtle flex-grow">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary/30 rounded-2xl p-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Quy trình sử dụng
            </h2>
            <div className="space-y-6 max-w-7xl mx-auto">
              {[
                {
                  step: 1,
                  title: 'Build Index',
                  desc: 'Hệ thống nạp toàn bộ vector đặc trưng của các phương tiện đã biết vào một Faiss Index và lưu lại.',
                },
                {
                  step: 2,
                  title: 'Query (Real-time)',
                  desc: 'Khi có xe mới, trích xuất vector đặc trưng của nó và gửi yêu cầu tìm kiếm đến Faiss Index.',
                },
                {
                  step: 3,
                  title: 'Top-K Search',
                  desc: 'Faiss trả về ID và điểm tương đồng (similarity score) của K phương tiện giống nhất trong database chỉ trong vài mili giây.',
                },
                {
                  step: 4,
                  title: 'Association',
                  desc: 'Nếu điểm tương đồng cao nhất vượt ngưỡng (ví dụ: > 0.95), hệ thống xác nhận trùng khớp và gán Global ID.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 bg-card rounded-lg p-6"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-2 text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
