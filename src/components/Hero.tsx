import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import { Link } from 'react-router-dom';
const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary text-sm font-medium">
              PTITHCM Research Project
            </span>
          </div>

          <h1 className="text-5xl sm:text-5xl lg:text-9xl font-heading font-bold text-foreground mb-6 leading-tight">
            <span className="text-primary">TDETECTORS</span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/90 font-medium mb-4 max-w-7xl mx-auto">
            Phát triển Hệ thống Theo dõi và Tái định danh Phương tiện Đa camera
            (MC-MOT) với Tối ưu hóa Hiệu năng trên CPU
          </p>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Tìm hiểu cách chúng tôi đạt được hiệu năng thời gian thực trên CPU
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/demo">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group"
              >
                Xem Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/solution">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 hover:bg-primary/10"
              >
                Khám phá giải pháp
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
