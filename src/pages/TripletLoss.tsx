import {
  Users,
  ArrowRight,
  Target,
  CheckCircle2,
  XCircle,
  MoveHorizontal,
} from 'lucide-react';
import embeddingSpace3d from '../assets/embedding-space-3d.png';
import tripletAnchor from '../assets/triplet-anchor.png';
import tripletPostitive from '../assets/triplet-positive.png';
import tripletNegative from '../assets/triplet-negative.png';
export default function TripletLoss() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary text-sm font-medium">
              Metric Learning
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            <span className="text-primary">Triplet Loss</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Dạy mô hình cách "Cảm nhận" sự Tương đồng qua Triplet Loss
          </p>
        </div>

        {/* === PHẦN 1: MỤC TIÊU - KHÔNG GIAN ĐẶC TRƯNG LÝ TƯỞNG === */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            Mục tiêu: Xây dựng một "Vũ trụ" Dữ liệu Hoàn hảo
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-lg text-tech-subtle space-y-6">
              <p>
                Mục tiêu không phải là "phân loại" xe (ví dụ: Toyota, Honda).
                Thay vào đó, chúng ta muốn dạy mô hình cách tạo ra một{' '}
                <strong className="!text-white">
                  không gian đặc trưng (embedding space)
                </strong>
                .
              </p>
              <p>
                Trong không gian này, mỗi chiếc xe là một điểm. Các điểm đại
                diện cho cùng một chiếc xe sẽ{' '}
                <strong className="!text-green-400">
                  tụ lại thành một cụm
                </strong>
                , trong khi các điểm của những chiếc xe khác nhau sẽ bị{' '}
                <strong className="!text-red-400">đẩy ra thật xa</strong>.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/90 p-2 rounded-lg shadow-2xl">
                <img
                  src={embeddingSpace3d}
                  alt="Biểu đồ phân tán 3D"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === PHẦN 2: CƠ CHẾ HOẠT ĐỘNG CỦA TRIPLET LOSS === */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            Phương pháp: Học từ Bộ ba (Triplet)
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* ANCHOR */}
            <div className="bg-tech-card rounded-lg p-8 border-2 border-blue-500/80 text-center flex flex-col items-center">
              {/* 
                  ### YÊU CẦU HÌNH ẢNH #2.1 ###
                  - Tên file gợi ý: `public/images/triplet-anchor.jpg`
                  - Nội dung: Chọn một ảnh xe bất kỳ làm "anchor".
                */}
              <img
                src={tripletAnchor}
                alt="Anchor Vehicle"
                className="rounded-md h-40 object-cover w-full mb-6"
              />
              <Users className="h-12 w-12 text-blue-400 mx-auto" />
              <h3 className="text-2xl font-bold text-blue-400 mt-3">Anchor</h3>
              <p className="text-tech-subtle mt-2 flex-grow">
                Ảnh gốc của một phương tiện đang xét.
              </p>
            </div>

            {/* POSITIVE */}
            <div className="bg-tech-card rounded-lg p-8 border-2 border-green-500/80 text-center flex flex-col items-center">
              {/* 
                  ### YÊU CẦU HÌNH ẢNH #2.2 ###
                  - Tên file gợi ý: `public/images/triplet-positive.jpg`
                  - Nội dung: Chọn một ảnh khác của CÙNG chiếc xe với ảnh Anchor, nhưng ở góc chụp hoặc điều kiện ánh sáng khác.
                */}
              <img
                src={tripletPostitive}
                alt="Positive Vehicle"
                className="rounded-md h-40 object-cover w-full mb-6"
              />
              <CheckCircle2 className="h-12 w-12 text-green-400 mx-auto" />
              <h3 className="text-2xl font-bold text-green-400 mt-3">
                Positive
              </h3>
              <p className="text-tech-subtle mt-2 flex-grow">
                Một ảnh khác của <strong className="!text-white">cùng</strong>{' '}
                phương tiện.
              </p>
            </div>

            {/* NEGATIVE */}
            <div className="bg-tech-card rounded-lg p-8 border-2 border-red-500/80 text-center flex flex-col items-center">
              {/* 
                  ### YÊU CẦU HÌNH ẢNH #2.3 ###
                  - Tên file gợi ý: `public/images/triplet-negative.jpg`
                  - Nội dung: Chọn ảnh của một chiếc xe hoàn toàn KHÁC.
                */}
              <img
                src={tripletNegative}
                alt="Negative Vehicle"
                className="rounded-md h-40 object-cover w-full mb-6"
              />
              <XCircle className="h-12 w-12 text-red-400 mx-auto" />
              <h3 className="text-2xl font-bold text-red-400 mt-3">Negative</h3>
              <p className="text-tech-subtle mt-2 flex-grow">
                Một ảnh của một phương tiện{' '}
                <strong className="!text-white">khác</strong>.
              </p>
            </div>
          </div>
        </div>
        {/* === PHẦN 3: CÔNG THỨC VÀ DIỄN GIẢI === */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12">
            "Kéo gần - Đẩy xa": Logic của Hàm Loss
          </h2>
          <div className="bg-tech-card border border-tech-border rounded-lg p-10 max-w-7xl mx-auto">
            <div className="text-center">
              <p className="text-2xl mb-7 text-tech-subtle">
                Mục tiêu của Hàm Loss là đảm bảo:
              </p>
              <code className="text-2xl md:text-3xl font-bold bg-black/50 p-4 rounded-md text-tech-text">
                distance(A, P) +{' '}
                <span className="text-tech-highlight">margin</span> &lt;
                distance(A, N)
              </code>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
              <div className="flex items-start space-x-4">
                <div className="text-green-400 mt-1">
                  <CheckCircle2 />
                </div>
                <p className="text-tech-subtle">
                  <strong className="!text-white">"Kéo gần":</strong> Buộc
                  khoảng cách giữa{' '}
                  <strong className="text-blue-400">Anchor</strong> và{' '}
                  <strong className="text-green-400">Positive</strong> phải càng
                  nhỏ càng tốt.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-red-400 mt-1">
                  <MoveHorizontal />
                </div>
                <p className="text-tech-subtle">
                  <strong className="!text-white">"Đẩy xa":</strong> Buộc khoảng
                  cách giữa <strong className="text-blue-400">Anchor</strong> và{' '}
                  <strong className="text-red-400">Negative</strong> phải lớn
                  hơn khoảng cách "kéo gần" ít nhất một khoảng{' '}
                  <strong className="text-tech-highlight">margin</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
