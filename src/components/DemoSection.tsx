import { Card } from '@/components/ui/card';
import { Play } from 'lucide-react';

const DemoSection = () => {
  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Xem Hệ thống Hoạt động</span>
          </h2>
        </div>

        {/* YouTube Video Embed */}
        <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 mb-12 animate-fade-in-up">
          <div className="relative aspect-video bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/AktD6WMdBYs?autoplay=1&mute=1"
              title="Tdetectors Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Card>
      </div>
      <div className="max-w-7xl mx-auto mt-8 animate-fade-in-up">
        <div className="flex justify-center">
          <a
            href="/demo"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Xem chi tiết demo"
          >
            <Play className="w-4 h-4" />
            Xem chi tiết
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
