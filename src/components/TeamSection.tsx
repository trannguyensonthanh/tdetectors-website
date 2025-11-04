import { Card } from '@/components/ui/card';
import { Play, User, Users } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: 'Nguyễn Duy Thái',
      role: 'Team Leader & System Architect & Lead AI Model Engineer',
      description:
        'Responsible for overall system architecture design and project management.',
    },
    {
      name: 'Trần Nguyễn Sơn Thành',
      role: 'AI Model Engineer & Data Scientist (Support and Optimization)',
      description: 'Supports development and optimization of AI models.',
    },
    {
      name: 'Cao Duy Thái',
      role: 'Data & Integration Specialist',
      description: 'Handles data processing and system integration.',
    },
  ];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/70">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Đội ngũ Phát triển</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Những con người đằng sau dự án
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {team.map((member, index) => (
            <Card
              key={index}
              className="p-8 text-center bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:glow-effect animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm">
                {member.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Advisor Section */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in-up">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold mb-2">Người hướng dẫn</h3>
              <p className="text-xl text-primary font-semibold mb-2">
                ThS. Huỳnh Trung Trụ
              </p>
              <p className="text-muted-foreground">
                Giảng viên Khoa Công Nghệ Thông Tin 2, Học viện Công nghệ Bưu
                chính Viễn thông TP.HCM
              </p>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center animate-fade-in-up">
          <Card className="inline-block p-6 bg-primary/5 border-primary/30">
            <p className="text-lg font-semibold text-muted-foreground">
              <span className="text-primary">
                Học viện Công nghệ Bưu chính Viễn thông
              </span>
              <br />
              TP. Hồ Chí Minh
            </p>
          </Card>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 animate-fade-in-up">
        <div className="flex justify-center">
          <a
            href="/team"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Xem chi tiết đội ngũ phát triển"
          >
            <Play className="w-4 h-4" />
            Xem chi tiết
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
