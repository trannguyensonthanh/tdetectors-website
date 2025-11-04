import { AlertCircle, Camera, Clock, DollarSign } from 'lucide-react';
import hcmcTraffic from '@/assets/hcmc-traffic.png';

export default function Problem() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary text-sm font-medium">
              Bối cảnh vấn đề
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Thách thức <span className="text-primary">Giao thông Đô thị</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Sự cấp thiết phải có giải pháp giám sát thông minh tại TP.HCM
          </p>
        </div>

        {/* Traffic Image */}
        <div className="mb-20 animate-fade-in">
          <div className="relative rounded-2xl overflow-hidden shadow-card">
            <img
              src={hcmcTraffic}
              alt="HCMC Traffic"
              className="w-full h-[400px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-lg lg:text-xl font-medium">
                TP.HCM với hơn 10 triệu dân và mật độ phương tiện cực cao
              </p>
            </div>
          </div>
        </div>

        {/* Problem Statement (Enhanced) */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-primary text-sm font-medium">
                  Vấn đề cốt lõi
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                Theo dõi phương tiện liên camera trong môi trường thực tế
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Trong bối cảnh đô thị hóa và lưu lượng phương tiện ngày càng gia
                tăng, TP.HCM có hệ thống camera rộng khắp nhưng phần lớn hoạt
                động rời rạc: giám sát thụ động, ghi lại sự cố, và truy xuất sau
                khi sự việc đã xảy ra.
              </p>

              <div className="space-y-4 text-base text-muted-foreground">
                <p className="text-lg">
                  <strong className="text-foreground">Thách thức chính:</strong>{' '}
                  Làm thế nào để tự động liên kết và theo dõi hành trình một
                  phương tiện qua nhiều camera không chồng lấp (non-overlapping)
                  khi gặp các biến đổi lớn như góc quay khác nhau, điều kiện ánh
                  sáng, che phủ, và mật độ phương tiện cao?
                </p>

                <p className="text-lg">
                  Giải quyết vấn đề này là bước then chốt để nâng cao an ninh,
                  hỗ trợ điều tra, tối ưu hóa vận hành giao thông và làm nền
                  tảng cho các ứng dụng thành phố thông minh.
                </p>

                <div className="mt-2 bg-card p-4 rounded-lg border border-border">
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    Những câu hỏi cần trả lời
                  </h3>
                  <ul className="list-inside list-disc text-lg text-muted-foreground space-y-2">
                    <li>
                      Làm sao nhận diện cùng một phương tiện qua các góc nhìn
                      khác nhau?
                    </li>
                    <li>
                      Làm thế nào đảm bảo độ tin cậy trong điều kiện ánh sáng,
                      thời tiết thay đổi?
                    </li>
                    <li>
                      Làm sao hệ thống hoạt động theo thời gian thực với chi phí
                      hợp lý?
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <aside className="w-full lg:w-96 flex-shrink-0 space-y-6">
              <div className="bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-lg border border-border">
                <h4 className="text-xl font-heading font-bold text-foreground mb-2">
                  Tóm tắt tính năng cần thiết
                </h4>
                <ul className="text-lg text-muted-foreground space-y-2">
                  <li>● Nhận diện và khớp phương tiện qua nhiều camera</li>
                  <li>
                    ● Khả năng thích ứng với biến đổi ngoại hình và ánh sáng
                  </li>
                  <li>
                    ● Xử lý gần thời gian thực với chi phí triển khai tối ưu
                  </li>
                  <li>● Khả năng mở rộng trên diện rộng của thành phố</li>
                </ul>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      10M
                    </div>
                    <div className="text-lg text-muted-foreground">
                      Dân số TP.HCM
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      Hàng nghìn
                    </div>
                    <div className="text-lg text-muted-foreground">
                      Camera giám sát
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      Hàng trăm ngàn
                    </div>
                    <div className="text-lg text-muted-foreground">
                      Phương tiện/ngày
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 text-primary px-4 py-3 rounded-lg text-xl font-medium border border-primary/20">
                Kết luận:
                <div className="text-lg text-gray-700 dark:text-gray-300">
                  Cần một hệ thống thông minh, bền vững và khả thi về mặt chi
                  phí để biến mạng lưới camera thành nguồn dữ liệu chủ động cho
                  an ninh và quản lý giao thông.
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Key Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: Camera,
              title: 'Camera không giao nhau',
              description:
                'Không có vùng chồng lấp giữa các góc quay, khó khăn trong việc liên kết',
              color: 'text-primary',
            },
            {
              icon: AlertCircle,
              title: 'Biến đổi ngoại hình',
              description:
                'Cùng một xe nhưng khác biệt hoàn toàn do góc, ánh sáng, thời tiết',
              color: 'text-primary',
            },
            {
              icon: Clock,
              title: 'Yêu cầu thời gian thực',
              description:
                'Cần xử lý tức thời để phát hiện và phản ứng kịp thời',
              color: 'text-primary',
            },
            {
              icon: DollarSign,
              title: 'Chi phí triển khai',
              description: 'Giải pháp phụ thuộc GPU đắt đỏ khó mở rộng quy mô',
              color: 'text-primary',
            },
          ].map((challenge, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <challenge.icon
                className={`h-10 w-10 ${challenge.color} mb-4 group-hover:scale-110 transition-transform`}
              />
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {challenge.title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact */}
        <div
          className="max-w-7xl mx-auto"
          role="region"
          aria-labelledby="impact-heading"
        >
          <div className="mb-8">
            <h2
              id="impact-heading"
              className="text-3xl lg:text-4xl font-heading font-bold text-foreground text-center"
            >
              Tác động xã hội
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left: impact cards (span 2 on large) */}
            <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: AlertCircle,
                  title: 'An ninh & Pháp luật',
                  desc: 'Truy vết phương tiện liên quan đến tội phạm, tai nạn hoặc vi phạm giao thông nhanh chóng, giúp rút ngắn thời gian điều tra và nâng cao hiệu quả thực thi pháp luật.',
                  accent: 'from-red-50 to-transparent',
                },
                {
                  icon: Clock,
                  title: 'Quản lý Giao thông & An toàn',
                  desc: 'Phân tích luồng phương tiện, phát hiện ùn tắc, tai nạn và hỗ trợ tối ưu hóa tín hiệu để giảm thiểu thời gian di chuyển và tăng cường an toàn giao thông.',
                  accent: 'from-amber-50 to-transparent',
                },
                {
                  icon: Camera,
                  title: 'Thành phố Thông minh & Dữ liệu',
                  desc: 'Cung cấp nền tảng dữ liệu liên tục cho các ứng dụng định tuyến, hoạch định hạ tầng và dự báo mật độ giao thông phục vụ quy hoạch dài hạn.',
                  accent: 'from-sky-50 to-transparent',
                },
                {
                  icon: DollarSign,
                  title: 'Tính khả thi & Mở rộng',
                  desc: 'Thiết kế tối ưu cho chi phí triển khai, tận dụng xử lý biên và kỹ thuật tiết kiệm tài nguyên để mở rộng quy mô toàn thành phố.',
                  accent: 'from-green-50 to-transparent',
                },
              ].map((imp, idx) => (
                <div
                  key={idx}
                  className="relative bg-card rounded-xl p-6 border border-border overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`absolute -left-8 -top-8 w-40 h-40 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${imp.accent}`}
                    aria-hidden="true"
                  />
                  <div className="flex items-start gap-4 relative">
                    <imp.icon className="h-10 w-10 text-primary shrink-0" />
                    <div>
                      <h3 className="text-xl font-medium text-foreground mb-1">
                        {imp.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {imp.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: stats + CTA */}
            <aside className="space-y-6">
              <div className="bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-lg border border-border">
                <h4 className="text-xl font-heading font-bold text-foreground mb-3">
                  Tác động định lượng
                </h4>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      10M+
                    </div>
                    <div className="text-lg text-muted-foreground">Dân số</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">K+</div>
                    <div className="text-lg text-muted-foreground">
                      Camera giám sát
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      100k+
                    </div>
                    <div className="text-lg text-muted-foreground">
                      Phương tiện/ngày
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <h5 className="text-xl font-medium text-foreground mb-2">
                  Lợi ích ngắn & dài hạn
                </h5>
                <ul className="text-base text-muted-foreground space-y-2 list-inside list-disc">
                  <li>Phản ứng nhanh hơn với sự cố và vi phạm</li>
                  <li>Giảm ùn tắc, tiết kiệm thời gian di chuyển</li>
                  <li>Dữ liệu nền tảng cho quy hoạch và chính sách</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg text-center border border-border bg-gradient-to-b from-background/50 to-transparent">
                <p className="text-lg text-muted-foreground mb-3">
                  Muốn thử nghiệm hoặc triển khai thí điểm? Hãy bắt đầu với một
                  khu vực nhỏ để kiểm chứng hiệu quả trước khi mở rộng.
                </p>
                <div className="flex gap-3 justify-center">
                  <a
                    href="/team"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:brightness-95 transition"
                    aria-label="xem chi tiết"
                  >
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
