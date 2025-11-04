import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Award,
  Users,
  Building2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';

export default function Team() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Giới hạn số ký tự hiển thị khi thu gọn
  const maxLength = 250;

  // const instructor = {
  //   name: 'Huỳnh Trung Trụ',
  //   title: 'Giảng viên hướng dẫn',
  //   department: 'Khoa Công nghệ Thông tin',
  //   email: 'truht@ptithcm.edu.vn',
  //   expertise: [
  //     'Computer Vision',
  //     'Machine Learning',
  //     'Deep Learning',
  //     'AI Systems',
  //   ],
  // };

  const teamMembers = [
    {
      name: 'Nguyễn Duy Thái',
      role: 'Team Leader & System Architect & Lead AI Model Engineer',
      responsibilities:
        'Responsible for overall system architecture design and project management.',
      skills: [
        'System Design',
        'OpenVINO',
        'Performance Optimization',
        'Python',
      ],
      github: 'https://github.com/ThaiTOm',
      email: 'n22dccn077@student.ptithcm.edu.vn',
    },
    {
      name: 'Trần Nguyễn Sơn Thành',
      role: 'AI Model Engineer & Data Scientist (Support and Optimization)',
      responsibilities:
        'Hỗ trợ phát triển và huấn luyện mô hình YOLOv12, ViT, và Re-ID, thu thập dữ liệu.',
      skills: [
        'Machine Learning',
        'PyTorch',
        'Model Training',
        'Computer Vision',
        'Web development',
      ],
      github: 'https://github.com/trannguyensonthanh',
      email: 'n22dccn078@student.ptithcm.edu.vn',
    },
    {
      name: 'Cao Duy Thái',
      role: 'Data & Integration Specialist',
      responsibilities:
        'Thu thập và xử lý dữ liệu, tích hợp Faiss, xây dựng pipeline tracking',
      skills: ['Data Engineering', 'BoT-SORT', 'Faiss', 'Database Management'],
      github: 'https://github.com/caoduythai',
      email: 'n22dccn076@student.ptithcm.edu.vn',
    },
  ];

  const schoolInfo = {
    name: 'Học viện Công nghệ Bưu chính Viễn thông, Cơ sở tại TP. Hồ Chí Minh',
    shortName: 'PTITHCM',
    slogan: 'Nơi Khởi nguồn Sáng tạo Số',
    description: `Là một trong hai cơ sở đào tạo chính của Học viện Công nghệ Bưu chính Viễn thông, với lịch sử hình thành và phát triển lâu đời, PTITHCM là trung tâm đào tạo và nghiên cứu uy tín hàng đầu khu vực phía Nam trong các lĩnh vực mũi nhọn của cuộc cách mạng công nghiệp 4.0 như Công nghệ Thông tin, Viễn thông, An toàn Thông tin, Điện tử, và Kinh tế số. 
    Sứ mệnh của Học viện là đào tạo ra nguồn nhân lực chất lượng cao, có tư duy sáng tạo, kỹ năng chuyên môn vững vàng và khả năng hội nhập quốc tế, đóng góp trực tiếp vào sự nghiệp công nghiệp hóa, hiện đại hóa đất nước. Tầm nhìn của chúng tôi là trở thành một trường đại học nghiên cứu hàng đầu khu vực, tiên phong trong đổi mới sáng tạo và chuyển đổi số.`,
    address: '97 Man Thiện, Phường Hiệp Phú, TP. Thủ Đức, TP. Hồ Chí Minh',
    website: 'https://www.ptithcm.edu.vn',
  };

  // Quyết định đoạn text sẽ hiển thị
  const displayText = isExpanded
    ? schoolInfo.description
    : `${schoolInfo.description.substring(0, maxLength)}...`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80">
      {/* School Info Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in bg-tech-card/50 backdrop-blur-sm p-8 rounded-2xl border border-tech-border">
            <Building2 className="w-16 h-16 mx-auto mb-6 text-primary" />

            {/* Tên trường với hiệu ứng gradient */}
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {schoolInfo.name}
            </h1>

            {/* Tên viết tắt và Slogan */}
            <p className="text-xl text-muted-foreground font-semibold tracking-widest mb-6">
              {schoolInfo.shortName} - {schoolInfo.slogan}
            </p>

            {/* Phần mô tả có thể mở rộng */}
            <p className="text-foreground/80 max-w-6xl mx-auto mb-6 text-left md:text-center text-lg leading-relaxed transition-all duration-300">
              {displayText}
            </p>

            {/* Nút "Xem thêm" / "Rút gọn" */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 mx-auto mb-8 transition-colors"
            >
              {isExpanded ? (
                <>
                  Rút gọn <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  Xem thêm <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Thông tin liên hệ ở cuối */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-sm text-muted-foreground border-t border-tech-border pt-6">
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {schoolInfo.address}
              </span>
              <span className="hidden md:block text-primary/50">•</span>
              <a
                href={schoolInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {schoolInfo.website}
              </a>
            </div>
          </div>

          {/* <div className="mb-20">
            <div className="text-center mb-12">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Giảng viên hướng dẫn
              </h2>
              <p className="text-muted-foreground">
                Người định hướng và dẫn dắt dự án
              </p>
            </div>

            <Card className="max-w-2xl mx-auto border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <GraduationCap className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">{instructor.name}</CardTitle>
                <CardDescription className="text-lg">
                  {instructor.title}
                </CardDescription>
                <Badge variant="secondary" className="w-fit mx-auto mt-2">
                  {instructor.department}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Chuyên môn:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.expertise.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-primary/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <a
                      href={`mailto:${instructor.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {instructor.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div> */}
          {/* Team Members Section */}
          <div>
            <div className="text-center mb-12">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Đội ngũ phát triển
              </h2>
              <p className="text-muted-foreground">
                Ba thành viên chính xây dựng hệ thống Tdetectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-2xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </div>
                    <CardTitle className="text-xl text-center">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-center font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-primary">
                        Trách nhiệm:
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {member.responsibilities}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-primary">
                        Kỹ năng:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {member.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="outline"
                            className="text-xs border-primary/30"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4 pt-2">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Project Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/10">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                3
              </div>
              <div className="text-sm text-muted-foreground">Thành viên</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/10">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                6+
              </div>
              <div className="text-sm text-muted-foreground">
                Tháng phát triển
              </div>
            </div>
            <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/10">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                15.23
              </div>
              <div className="text-sm text-muted-foreground">FPS đạt được</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/10">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                99.1%
              </div>
              <div className="text-sm text-muted-foreground">Độ chính xác</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
