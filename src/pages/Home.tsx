import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProblemSection from '@/components/ProblemSection';
import ChallengesSection from '@/components/ChallengesSection';
import SolutionSection from '@/components/SolutionSection';
import TechnologySection from '@/components/TechnologySection';
import ResultsSection from '@/components/ResultsSection';
import DemoSection from '@/components/DemoSection';
import TeamSection from '@/components/TeamSection';
import FutureSection from '@/components/FutureSection';
import ContactSection from '@/components/ContactSection';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <ProblemSection />
      <ChallengesSection />
      <SolutionSection />
      <TechnologySection />
      <ResultsSection />
      <DemoSection />
      <TeamSection />
      <FutureSection />
      <ContactSection />

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-primary rounded-2xl p-12 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
              Sẵn sàng khám phá?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Tìm hiểu cách chúng tôi đạt được hiệu năng thời gian thực trên CPU
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/solution">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Xem giải pháp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href="https://github.com/tdetectors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-200 text-slate-900 hover:bg-red-500 dark:border-white/30 dark:text-white dark:hover:bg-white/10"
                >
                  GitHub Repository
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
