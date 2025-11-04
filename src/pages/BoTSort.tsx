import {
  Activity,
  GitBranch,
  Link as LinkIcon,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';
import botsortPipline from '@/assets/botsort-pipeline.png';

export default function BoTSort() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary text-sm font-medium">
              Multi-Object Tracking
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            <span className="text-primary">BoT-SORT</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            "Trí nhớ ngắn hạn" - Theo dõi phương tiện trong một camera
          </p>
        </div>

        <div className="space-y-16">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
              BoT-SORT là gì?
            </h2>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">B</strong>ottleneck{' '}
              <strong className="text-foreground">o</strong>f{' '}
              <strong className="text-foreground">T</strong>ransformers{' '}
              <strong className="text-foreground">SORT</strong> — một phương
              pháp multi-object tracking kết hợp hai thành phần chính:
              <ul className="mt-2 ml-4 list-disc">
                <li>
                  <strong>Motion model</strong>: Kalman Filter dự đoán vị trí và
                  kích thước bounding box theo thời gian, cho phép gating bằng
                  Mahalanobis distance để loại các phép ghép phi lý.
                </li>
                <li>
                  <strong>Appearance model (Re‑ID)</strong>: mạng đặc trưng
                  (embedding) cho mỗi detection; dùng khoảng cách
                  cosine/euclidean giữa embedding để xác định cùng một đối tượng
                  qua các frame.
                </li>
              </ul>
              Quy trình khớp điển hình gồm nhiều bước: ưu tiên ghép bằng
              appearance + motion gating, sau đó dùng IoU để xử lý các trường
              hợp còn lại; mọi bước tối ưu bằng Hungarian algorithm. BoT‑SORT
              còn tận dụng chiến lược tách detection theo mức độ tin cậy
              (high/low score) để giữ ổn định khi detector trả về score thấp.
              Các điểm cần lưu ý: chuẩn hóa embedding (L2), chọn ngưỡng
              appearance và IoU phù hợp, đặt max_age để quản lý vòng đời track,
              và cân bằng giữa chi phí tính toán và chất lượng theo dõi.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Thành phần chính
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Activity,
                  title: 'Kalman Filter',
                  description:
                    'Dự đoán vị trí phương tiện ở frame tiếp theo dựa trên trajectory trước đó',
                },
                {
                  icon: LinkIcon,
                  title: 'Re-ID Embedding',
                  description:
                    'Sử dụng visual features để phân biệt các xe tương tự nhau',
                },
                {
                  icon: GitBranch,
                  title: 'Dual Association',
                  description: 'Kết hợp cả IoU matching và appearance matching',
                },
                {
                  icon: TrendingUp,
                  title: 'Trajectory Management',
                  description:
                    'Quản lý active, lost, và removed tracks một cách thông minh',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border border-border"
                >
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* === PHẦN 1: TẠI SAO CẦN BOT-SORT? VẤN ĐỀ CỦA TRACKER CŨ === */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 mt-12 text-center">
            Tại sao BoT-SORT lại Quan trọng?
          </h2>
          <div className="gap-8 items-center bg-tech-card border border-tech-border p-8 rounded-lg">
            <div className="text-lg text-tech-subtle space-y-4">
              <h3 className="!text-3xl !text-red-400 font-bold mb-4">
                Vấn đề: "ID Switch"
              </h3>
              <p className="mb-4">
                Các tracker đơn giản (như SORT) chủ yếu dựa vào vị trí và kích
                thước bounding box (IoU) để ghép detections giữa các frame. Khi
                một chiếc xe{' '}
                <strong className="!text-white">bị che khuất tạm thời</strong> —
                ví dụ: bị xe khác che ngang, bị vật cản đi qua, hoặc do motion
                blur — detector có thể không phát hiện được nó trong vài frame
                liên tiếp.
              </p>
              <p className="mb-4">
                Khi xe đó xuất hiện lại, nếu hệ thống chỉ so khớp theo vị trí
                thì rất dễ{' '}
                <strong className="!text-white">gán một ID mới</strong> cho cùng
                một đối tượng. Hiện tượng này gọi là <em>ID Switch</em>, và nó
                làm suy giảm độ tin cậy của dữ liệu theo dõi (ví dụ: sai lệch
                thống kê hành vi, mất liên tục trajectory, giảm mAP tracking).
              </p>
              <p className="mb-4">
                Nguyên nhân phổ biến dẫn tới ID Switch:
                <ul className="mt-2 ml-4 list-disc">
                  <li>
                    Occlusion/chèn lấn giữa các đối tượng có kích thước tương
                    tự.
                  </li>
                  <li>
                    Biến động điểm đo (noisy detections) và sai số đo vị trí.
                  </li>
                  <li>
                    Thay đổi tư thế, góc nhìn hoặc ánh sáng làm thay đổi đặc
                    trưng hình ảnh.
                  </li>
                  <li>
                    Detector trả về score thấp khiến track bị xóa sớm (low
                    max_age).
                  </li>
                </ul>
              </p>
              <p className="mb-4">
                Cách giảm thiểu ID Switch trong BoT-SORT:
                <ul className="mt-2 ml-4 list-disc">
                  <li>
                    Sử dụng{' '}
                    <strong className="!text-white">Re‑ID embedding</strong> để
                    so sánh đặc trưng ngoại hình, giúp nhận diện lại đối tượng
                    ngay cả khi vị trí thay đổi.
                  </li>
                  <li>
                    Áp dụng{' '}
                    <strong className="!text-white">motion gating</strong>{' '}
                    (Mahalanobis) và Kalman Filter để loại trừ các ghép phi lý
                    và giữ track tồn tại trong một số frame khi bị mất
                    detection.
                  </li>
                  <li>
                    Tách detections theo độ tin cậy (high/low score) để ưu tiên
                    ghép an toàn trước, sau đó xử lý các trường hợp còn lại bằng
                    IoU.
                  </li>
                  <li>
                    Chuẩn hóa embedding (L2), điều chỉnh ngưỡng appearance/IoU
                    và tăng max_age hợp lý để cân bằng giữa ổn định ID và loại
                    bỏ nhiễu.
                  </li>
                </ul>
              </p>
            </div>
            <div></div>
          </div>
        </div>

        {/* === PHẦN 2: LUỒNG HOẠT ĐỘNG CỦA BOT-SORT === */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Luồng Hoạt động Thông minh của BoT-SORT
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Cột hình ảnh pipeline */}
            <div className="flex justify-center">
              <img
                src={botsortPipline}
                alt="BoT-SORT Pipeline"
                className="rounded-lg shadow-2xl shadow-tech-card"
              />
            </div>

            {/* Cột giải thích các bước */}
            <div className="space-y-6">
              <div className="bg-tech-card p-6 rounded-lg border-l-4 border-tech-highlight">
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  1. Dự đoán (Prediction)
                </h3>
                <p className="text-tech-subtle">
                  Sử dụng <strong className="text-white">Kalman Filter</strong>{' '}
                  để ước tính vị trí tiếp theo của mỗi track, đồng thời bù trừ
                  cho chuyển động của camera (CMC).
                </p>
              </div>
              <div className="bg-tech-card p-6 rounded-lg border-l-4 border-tech-highlight">
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  2. Liên kết Kép (Dual Association)
                </h3>
                <p className="text-tech-subtle">
                  <strong className="text-white">Giai đoạn 1 (Re-ID):</strong>{' '}
                  Ưu tiên khớp các xe có "dấu vân tay hình ảnh" giống nhau. Cực
                  kỳ hiệu quả khi xe xuất hiện lại sau khi bị che khuất.
                </p>
                <p className="text-tech-subtle mt-2">
                  <strong className="text-white">Giai đoạn 2 (IoU):</strong> Với
                  các xe còn lại, sử dụng phương pháp khớp vị trí (IoU) cổ điển
                  để "cứu" các trường hợp hình ảnh bị mờ hoặc nhiễu.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cải tiến Chính
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Activity,
                title: 'Kalman Filter + CMC',
                description:
                  'Dự đoán chuyển động chính xác hơn bằng cách loại bỏ rung lắc của camera.',
              },
              {
                icon: LinkIcon,
                title: 'Re-ID Association',
                description:
                  'Sử dụng đặc trưng ngoại hình để "nhớ" mặt xe, chống lại lỗi ID Switch.',
              },
              {
                icon: GitBranch,
                title: 'Dual Matching Strategy',
                description:
                  'Chiến lược 2 bước linh hoạt, kết hợp Re-ID và IoU để tối đa hóa độ chính xác.',
              },
              {
                icon: ShieldCheck,
                title: 'Trajectory Management',
                description:
                  'Quản lý vòng đời của track (mới, đã mất, xóa) một cách thông minh và hiệu quả.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-tech-card rounded-lg p-6 border border-tech-border text-center flex flex-col items-center text-red"
              >
                <item.icon
                  className="h-12 w-12 text-tech-highlight mb-4 text-primary"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-bold text-tech-heading mb-3 text-primary">
                  {item.title}
                </h3>
                <p className="text-tech-subtle flex-grow">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
