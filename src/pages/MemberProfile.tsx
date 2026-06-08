import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Globe,
  Phone,
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Heart,
  Calendar,
  Building2,
  BookOpen,
  Star,
  Trophy,
  Camera,
} from 'lucide-react';

const teamMembersData: Record<
  string,
  {
    name: string;
    nickname: string;
    role: string;
    avatar: string;
    coverPhoto: string;
    bio: string;
    birthDate: string;
    hometown: string;
    currentCity: string;
    phone: string;
    email: string;
    github: string;
    linkedin: string;
    website: string;
    education: {
      school: string;
      major: string;
      class: string;
      studentId: string;
      gpa: string;
      period: string;
    };
    skills: { name: string; level: number }[];
    experience: {
      title: string;
      company: string;
      period: string;
      description: string;
    }[];
    certifications: string[];
    achievements: string[];
    projects: { name: string; description: string; tech: string[] }[];
    interests: string[];
    languages: { name: string; level: string }[];
    photos: string[];
  }
> = {
  'nguyen-duy-thai': {
    name: 'Nguyễn Duy Thái',
    nickname: 'Thai ND',
    role: 'Team Leader & System Architect',
    avatar: '',
    coverPhoto: '',
    bio: 'Đam mê nghiên cứu và phát triển các hệ thống AI ứng dụng trong thực tế. Chuyên về tối ưu hóa hiệu năng hệ thống và triển khai mô hình AI trên edge devices.',
    birthDate: 'DD/MM/YYYY',
    hometown: 'Hà Nội',
    currentCity: 'TP. Hồ Chí Minh',
    phone: 'không thể cung cấp',
    email: 'n22dccn077@student.ptithcm.edu.vn',
    github: 'https://github.com/nguyenduythai',
    linkedin: 'https://linkedin.com/in/nguyenduythai',
    website: '',
    education: {
      school: 'Học viện Công nghệ Bưu chính Viễn thông TP.HCM (PTITHCM)',
      major: 'Công nghệ Thông tin',
      class: 'E22CQCN02-N',
      studentId: 'N22DCCN077',
      gpa: '3.35/4.0',
      period: '2022 - 2027',
    },
    skills: [
      { name: 'Python', level: 100 },
      { name: 'AI System Architecture', level: 95 },
      { name: 'Computer Vision', level: 92 },
      { name: 'Natural Language Processing', level: 85 },
      { name: 'System Design', level: 90 },
      { name: 'Docker/DevOps', level: 80 },
      { name: 'Performance Optimization', level: 92 },
      { name: 'PyTorch', level: 85 },
    ],
    experience: [
      {
        title: 'Team Leader - Đồ án Tdetectors',
        company: 'PTITHCM',
        period: '5/2025 - 11/2025',
        description:
          'Thiết kế kiến trúc hệ thống Multi-Camera Tracking, tối ưu hóa pipeline xử lý, tích hợp OpenVINO để đạt 15.23 FPS trên Intel CPU.',
      },
      {
        title: 'Thành viên đội thi ICPR 2026 LRLPR',
        company: 'ICPR 2026 Competition',
        period: '1/2026 - 3/2026',
        description:
          'Đạt Top 10 cuộc thi nhận diện biển số xe độ phân giải thấp quốc tế ICPR 2026, với accuracy 76-79% trên Blind Test Set.',
      },
      {
        title:
          'Thành viên đội "3 chú lính ngự lâm" đại diện trường tham gia cuộc thi OLYMPIC AI 2025 cấp Miền Nam',
        company: 'OLYMPIC AI 2025',
        period: '10/2025 - 11/2025',
        description:
          'Đạt giải khuyến khích tại vòng thi Miền Nam OLYMPIC AI 2025',
      },
      {
        title:
          'Thành viên đội "3 chú lính ngự lâm" đại diện trường tham gia cuộc thi OLYMPIC AI 2025 cấp Quốc gia',
        company: 'OLYMPIC AI 2025',
        period: '11/2025 - 12/2025',
        description:
          'Đạt giải khuyến khích tại vòng thi Quốc gia OLYMPIC AI 2025 (trong top 20 đội xuất sắc nhất toàn quốc)',
      },
      {
        title: 'Leader AI Engineer',
        company: 'Công ty GESO',
        period: '2023 - Now',
        description:
          'Có 3 năm kinh nghiệm làm việc tại GESO, đảm nhận vai trò Leader AI Engineer, dẫn dắt các dự án AI từ giai đoạn ý tưởng đến triển khai thực tế.',
      },
    ],
    certifications: ['Chứng chỉ (sẽ cập nhật)', 'Chứng chỉ (sẽ cập nhật)'],
    achievements: [
      '🏆 Top 10/600 đội tham gia ICPR 2026 LRLPR Competition - Nhận diện biển số xe độ phân giải thấp cấp quốc tế',
      '🧠 Thiết kế kiến trúc hệ thống Multi-Camera Tracking đạt 15.23 FPS trên Intel CPU',
      '🔬 Phát triển mô hình ResTranOCR đạt 79% (cao nhất là 82%) accuracy trên Blind Test Set ICPR 2026',
      '🎖️ Giải khuyến khích OLYMPIC AI 2025 cấp Miền Nam',
      '🎖️ Giải khuyến khích OLYMPIC AI 2025 cấp Quốc gia (trong top 20 đội xuất sắc nhất toàn quốc)',
      '🎖️ Hoàn thành đề tài "Development of a Multi-Camera Multi-Object Tracking (MC-MOT) System for Vehicle Surveillance and Re-Identification with Intel OpenVINO™ Inference Optimization" với thành tích xuất xắc trong Nghiên cứu Khoa học Sinh viên 2025 cấp Học viện (cơ sở Miền Nam và Miền Bắc)',
    ],
    projects: [
      {
        name: 'Tdetectors - Multi-Camera Vehicle Tracking',
        description:
          'Hệ thống theo dõi phương tiện xuyên camera sử dụng YOLOv12, BoT-SORT, ViT Re-ID, và OpenVINO.',
        tech: ['Python', 'OpenVINO', 'YOLOv12', 'BoT-SORT', 'Faiss'],
      },
      {
        name: 'LRLPR - Low Resolution License Plate Recognition',
        description:
          'Module nhận diện biển số xe độ phân giải thấp đạt chuẩn quốc tế, tích hợp vào hệ thống Multi-Camera Tracking.',
        tech: ['PyTorch', 'ResTranOCR V2', 'K-Fold Ensemble', 'TTA'],
      },
      {
        name: 'Smart Waste Classification System (Plastic, Paper, Metal, Organic)',
        description:
          'Hệ thống phân loại rác thải thông minh sử dụng công nghệ Computer Vision và Deep Learning.',
        tech: ['Python', 'PyTorch', 'OpenCV'],
      },
      {
        name: 'Rất nhiều dự án nghiên cứu phát triển AI theo mục tiêu phát triển của công ty',
        description: 'Dự án phân loại thức uống, phân loại cử chỉ tay, vv...',
        tech: ['Tech 1', 'Tech 2'],
      },
    ],
    interests: [
      'AI/ML/DL',
      'System Optimization',
      'Edge Computing',
      'Computer Vision',
      'NLP',
      'Learning & Development',
      'Singing & Music',
    ],
    languages: [
      { name: 'Tiếng Việt', level: 'Bản ngữ' },
      { name: 'Tiếng Anh', level: 'Ielts: 6.5 - Toeic: 935' },
    ],
    photos: [],
  },
  'tran-nguyen-son-thanh': {
    name: 'Trần Nguyễn Sơn Thành',
    nickname: 'Thanh TNS',
    role: 'Lead AI Model Engineer',
    avatar: '',
    coverPhoto: '',
    bio: 'Chuyên nghiên cứu và phát triển các mô hình Deep Learning cho bài toán Computer Vision. Đặc biệt quan tâm đến kiến trúc Transformer và các phương pháp tối ưu huấn luyện.',
    birthDate: 'DD/MM/YYYY',
    hometown: 'Quê quán (sẽ cập nhật)',
    currentCity: 'TP. Hồ Chí Minh',
    phone: '0xxx-xxx-xxx',
    email: 'thanh.tran@student.ptithcm.edu.vn',
    github: 'https://github.com/trannguyensonthanh',
    linkedin: 'https://linkedin.com/in/trannguyensonthanh',
    website: '',
    education: {
      school: 'Học viện Công nghệ Bưu chính Viễn thông TP.HCM (PTITHCM)',
      major: 'Công nghệ Thông tin',
      class: 'Lớp (sẽ cập nhật)',
      studentId: 'N21DCCN0XX',
      gpa: 'X.XX/4.0',
      period: '2021 - 2025',
    },
    skills: [
      { name: 'PyTorch', level: 95 },
      { name: 'Deep Learning', level: 92 },
      { name: 'Computer Vision', level: 90 },
      { name: 'Transformer Architecture', level: 88 },
      { name: 'Model Training & Optimization', level: 85 },
      { name: 'Python', level: 90 },
    ],
    experience: [
      {
        title: 'Lead AI Model Engineer - Đồ án Tdetectors',
        company: 'PTITHCM',
        period: '2024 - 2025',
        description:
          'Phát triển và huấn luyện mô hình YOLOv12, Vision Transformer (ViT) cho Re-ID, và pipeline Triplet Loss.',
      },
      {
        title: 'Kiến trúc sư chính - ResTranOCR V2',
        company: 'ICPR 2026 LRLPR Competition',
        period: '2025 - 2026',
        description:
          'Thiết kế và triển khai kiến trúc ResTranOCR V2 (ResNet34 + CBAM + Quality Attention Fusion + Transformer Encoder) đạt Top 10 ICPR 2026.',
      },
      {
        title: 'Vị trí (sẽ cập nhật)',
        company: 'Công ty (sẽ cập nhật)',
        period: '20XX - 20XX',
        description: 'Mô tả kinh nghiệm (sẽ cập nhật)',
      },
    ],
    certifications: ['Chứng chỉ (sẽ cập nhật)', 'Chứng chỉ (sẽ cập nhật)'],
    achievements: [
      '🏆 Top 10 ICPR 2026 LRLPR Competition',
      '🧠 Thiết kế kiến trúc ResTranOCR V2 đạt 76-79% accuracy trên Blind Test Set',
      '🔬 Phát triển Quality Attention Fusion module cho multi-frame recognition',
      'Thành tích khác (sẽ cập nhật)',
    ],
    projects: [
      {
        name: 'Tdetectors - Multi-Camera Vehicle Tracking',
        description:
          'Phát triển các mô hình AI cốt lõi: YOLOv12 (mAP 0.991), ViT Re-ID, Triplet Loss training.',
        tech: ['PyTorch', 'YOLOv12', 'ViT', 'Triplet Loss'],
      },
      {
        name: 'ResTranOCR V2 - LRLPR Engine',
        description:
          'Kiến trúc nhận diện biển số xe độ phân giải thấp: STN + ResNet34-CBAM + QAF + Transformer + CTC.',
        tech: ['PyTorch', 'ResNet34', 'CBAM', 'Transformer', 'CTC'],
      },
      {
        name: 'Dự án (sẽ cập nhật)',
        description: 'Mô tả dự án (sẽ cập nhật)',
        tech: ['Tech 1', 'Tech 2'],
      },
    ],
    interests: [
      'Deep Learning Research',
      'Transformer Architectures',
      'Computer Vision',
      'Sở thích khác (sẽ cập nhật)',
    ],
    languages: [
      { name: 'Tiếng Việt', level: 'Bản ngữ' },
      { name: 'Tiếng Anh', level: 'Trình độ (sẽ cập nhật)' },
    ],
    photos: [],
  },
  'cao-duy-thai': {
    name: 'Cao Duy Thái',
    nickname: 'Thai CD',
    role: 'Data & Integration Specialist',
    avatar: '',
    coverPhoto: '',
    bio: 'Chuyên về xử lý dữ liệu lớn và tích hợp hệ thống. Đam mê xây dựng các data pipeline hiệu quả và tối ưu hóa quy trình làm việc với dữ liệu.',
    birthDate: 'DD/MM/YYYY',
    hometown: 'Quê quán (sẽ cập nhật)',
    currentCity: 'TP. Hồ Chí Minh',
    phone: '0xxx-xxx-xxx',
    email: 'thai.cao@student.ptithcm.edu.vn',
    github: 'https://github.com/caoduythai',
    linkedin: 'https://linkedin.com/in/caoduythai',
    website: '',
    education: {
      school: 'Học viện Công nghệ Bưu chính Viễn thông TP.HCM (PTITHCM)',
      major: 'Công nghệ Thông tin',
      class: 'Lớp (sẽ cập nhật)',
      studentId: 'N21DCCN0XX',
      gpa: 'X.XX/4.0',
      period: '2021 - 2025',
    },
    skills: [
      { name: 'Data Engineering', level: 90 },
      { name: 'BoT-SORT Integration', level: 85 },
      { name: 'Faiss Vector Database', level: 88 },
      { name: 'Python', level: 88 },
      { name: 'Database Management', level: 82 },
      { name: 'Data Augmentation', level: 86 },
    ],
    experience: [
      {
        title: 'Data & Integration Specialist - Đồ án Tdetectors',
        company: 'PTITHCM',
        period: '2024 - 2025',
        description:
          'Thu thập và xử lý dữ liệu giao thông HCMC, tích hợp Faiss vector database, xây dựng tracking pipeline với BoT-SORT.',
      },
      {
        title: 'Data Engineer - LRLPR Pipeline',
        company: 'ICPR 2026 LRLPR Competition',
        period: '2025 - 2026',
        description:
          'Xây dựng Physics-based Degradation Pipeline, chiến lược Synthetic LR Generation, và Track-based K-Fold Cross Validation.',
      },
      {
        title: 'Vị trí (sẽ cập nhật)',
        company: 'Công ty (sẽ cập nhật)',
        period: '20XX - 20XX',
        description: 'Mô tả kinh nghiệm (sẽ cập nhật)',
      },
    ],
    certifications: ['Chứng chỉ (sẽ cập nhật)', 'Chứng chỉ (sẽ cập nhật)'],
    achievements: [
      '🏆 Top 10 ICPR 2026 LRLPR Competition',
      '📦 Xây dựng Physics-based Degradation Pipeline mô phỏng 100% điều kiện camera CCTV',
      '🔍 Thiết kế Strict Track-based Validation Split chống Data Leakage',
      'Thành tích khác (sẽ cập nhật)',
    ],
    projects: [
      {
        name: 'Tdetectors - Multi-Camera Vehicle Tracking',
        description:
          'Thu thập dữ liệu giao thông, tích hợp Faiss cho multi-camera association, xây dựng BoT-SORT tracking pipeline.',
        tech: ['Python', 'Faiss', 'BoT-SORT', 'Data Pipeline'],
      },
      {
        name: 'LRLPR Data Engineering',
        description:
          'Xây dựng Degradation Pipeline với 4 nhóm Physics-based Augmentation, Synthetic LR Generation, và K-Fold strategy.',
        tech: ['Albumentations', 'OpenCV', 'Data Augmentation', 'K-Fold CV'],
      },
      {
        name: 'Dự án (sẽ cập nhật)',
        description: 'Mô tả dự án (sẽ cập nhật)',
        tech: ['Tech 1', 'Tech 2'],
      },
    ],
    interests: [
      'Data Engineering',
      'Vector Databases',
      'MLOps',
      'Sở thích khác (sẽ cập nhật)',
    ],
    languages: [
      { name: 'Tiếng Việt', level: 'Bản ngữ' },
      { name: 'Tiếng Anh', level: 'Trình độ (sẽ cập nhật)' },
    ],
    photos: [],
  },
};

export default function MemberProfile() {
  const { memberId } = useParams<{ memberId: string }>();
  const member = memberId ? teamMembersData[memberId] : null;

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy thành viên</h1>
          <Link to="/team" className="text-primary hover:underline">
            ← Quay lại trang Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Cover Photo */}
      <div className="relative h-48 md:h-64 lg:h-80 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 overflow-hidden">
        {member.coverPhoto ? (
          <img
            src={member.coverPhoto}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
            </div>
          </div>
        )}
        <Link
          to="/team"
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-md rounded-full text-sm font-medium text-foreground hover:bg-background transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại Team
        </Link>
      </div>

      <div className="container mx-auto max-w-7xl px-4">
        {/* Profile Header */}
        <div className="relative -mt-16 md:-mt-20 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Avatar */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-background bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-4xl md:text-5xl font-bold text-primary shadow-lg overflow-hidden flex-shrink-0">
              {member.avatar ? (
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                member.name.charAt(0)
              )}
            </div>
            <div className="pt-2 md:pt-8 flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {member.name}
              </h1>
              <p className="text-lg text-primary font-medium mt-1">
                {member.role}
              </p>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                {member.bio}
              </p>
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {member.currentCity}
                </span>
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4" />
                  {member.education.school.split('(')[1]?.replace(')', '') ||
                    member.education.school}
                </span>
              </div>
              {/* Social Links */}
              <div className="flex gap-3 mt-4">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 rounded-full bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Personal Info */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Thông tin cá nhân
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground">Ngày sinh</p>
                    <p className="font-medium text-foreground">
                      {member.birthDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground">Quê quán</p>
                    <p className="font-medium text-foreground">
                      {member.hometown}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground">Điện thoại</p>
                    <p className="font-medium text-foreground">
                      {member.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground text-xs">
                      {member.email}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Học vấn
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="font-semibold text-foreground">
                  {member.education.school}
                </p>
                <p className="text-muted-foreground">
                  Chuyên ngành: {member.education.major}
                </p>
                <p className="text-muted-foreground">
                  Lớp: {member.education.class}
                </p>
                <p className="text-muted-foreground">
                  MSSV: {member.education.studentId}
                </p>
                <p className="text-muted-foreground">
                  GPA: {member.education.gpa}
                </p>
                <p className="text-muted-foreground">
                  {member.education.period}
                </p>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Ngôn ngữ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {member.languages.map((lang, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-foreground">{lang.name}</span>
                    <span className="text-muted-foreground">{lang.level}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Sở thích
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {member.interests.map((interest, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column (2/3) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skills */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Kỹ năng chuyên môn
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {member.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  Thành tích nổi bật
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {member.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Kinh nghiệm
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {member.experience.map((exp, i) => (
                  <div
                    key={i}
                    className="relative pl-6 border-l-2 border-primary/20"
                  >
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                    <h4 className="font-semibold text-foreground">
                      {exp.title}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Building2 className="w-3 h-3" />
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Dự án
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {member.projects.map((project, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-secondary/30 border border-border"
                  >
                    <h4 className="font-semibold text-foreground">
                      {project.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tech.map((t, j) => (
                        <Badge
                          key={j}
                          variant="outline"
                          className="text-xs border-primary/30"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Chứng chỉ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {member.certifications.map((cert, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <Award className="w-4 h-4 text-primary" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Photo Gallery */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" />
                  Hình ảnh
                </CardTitle>
              </CardHeader>
              <CardContent>
                {member.photos.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {member.photos.map((photo, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg overflow-hidden bg-secondary"
                      >
                        <img
                          src={photo}
                          alt={`Photo ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg bg-secondary/50 border border-dashed border-border flex items-center justify-center"
                      >
                        <div className="text-center text-muted-foreground">
                          <Camera className="w-6 h-6 mx-auto mb-1 opacity-50" />
                          <p className="text-xs">Ảnh {i}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
