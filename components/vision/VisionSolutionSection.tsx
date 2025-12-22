import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const VisionSolutionSection: React.FC = () => {
  const benefits = [
    "Process food waste on-site, daily, and hygienically",
    "Eliminate foul smells and pest breeding",
    "Reduce waste volume by up to 90%",
    "Convert waste into safe, usable compost within hours or days",
    "Minimise human handling and health risks"
  ];

  return (
    <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-moss/5 border-y border-moss/20" id="solution">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          <AnimatedSection className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-moss/30">
              <img 
                alt="Machine Based Composting" 
                className="w-full h-auto object-cover opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBubkVEBN9OenhLfNEQkREweG2TmriMrq-d117-KQViN8uq16DPEpYtgkBeYGBcP5c6m1UMRWPGqX2B-EV7MvlZgiON3ecZQPC1A7h-710RzwcHQ8gUCcQvfc3ogY2xSJykkbvRmtm9Poh-H7SBVCCW-j31YRLNuPdaX4OSdPlPo4TdIGm-f3CVUaSFS4S2lxSUM6PiMUy4eqgPYvEpXpEDvrHCsUypb2ZCVlCXeo_6aQaLy33rkM42RsGCtPnhvwM77IGUcLY48_Y"
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay"></div>
            </div>
          </AnimatedSection>
          <div className="lg:w-1/2 flex flex-col gap-4">
            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl sm:text-3xl font-bold text-cream font-sans leading-tight">
                The Case for Robust, <br/>
                <span className="text-gold">Machine-Based Composting Systems</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="text-base sm:text-lg text-cream/90 leading-relaxed">
                Modern organic waste composting machines are not luxuries. <span className="text-gold font-semibold">They are essential urban infrastructure.</span>
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <p className="text-base text-cream/90 font-semibold mb-2">These systems:</p>
            </AnimatedSection>
            <div className="space-y-2">
              {benefits.map((text, index) => (
                <AnimatedSection key={index} delay={0.5 + index * 0.1}>
                  <div className="flex items-start gap-3 rounded-lg bg-charcoal p-3 border border-moss/30 hover:border-gold/50 transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-cream/90 text-sm sm:text-base">{text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={1}>
              <p className="text-sm sm:text-base text-cream/80 leading-relaxed mt-3">
                Most importantly, they <span className="font-semibold text-gold">close the waste loop at the source</span>—before garbage trucks, landfills, and open dumps ever come into the picture.
              </p>
            </AnimatedSection>
          </div>
        </div>
        <AnimatedSection delay={1.1} className="mt-8">
          <p className="text-lg sm:text-xl text-gold/90 font-bold text-center">
            This is not just waste management. This is risk management for public health.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VisionSolutionSection;
