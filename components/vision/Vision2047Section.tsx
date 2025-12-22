import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Vision2047Section: React.FC = () => {
  const needs = [
    "Waste-free residential ecosystems",
    "Zero-organic-waste-to-landfill policies",
    "Mandatory on-site composting for bulk generators",
    "Cities designed for prevention, not reaction"
  ];

  return (
    <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-charcoal via-moss/20 to-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-moss/10" />
      
      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cream font-sans mb-6">
            <span className="text-cream">Vision 2047:</span>{' '}
            <span className="bg-gradient-to-r from-gold via-yellow-500 to-gold bg-clip-text text-transparent">
              A Cleaner Definition of Freedom
            </span>
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 rounded bg-gold"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="text-center mb-12">
          <p className="text-xl sm:text-2xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
            By 2047, India does not need more speeches about cleanliness.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mb-12">
          <p className="text-xl text-cream/90 font-semibold mb-6 text-center">India needs:</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {needs.map((need, index) => (
            <AnimatedSection key={index} delay={0.4 + index * 0.1}>
              <div className="bg-gradient-to-br from-moss/40 to-moss/20 border border-gold/30 rounded-2xl p-6 hover:border-gold/60 transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-8 h-8 text-gold flex-shrink-0" />
                  <p className="text-cream text-lg font-semibold">{need}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.8} className="text-center">
          <p className="text-xl sm:text-2xl text-cream/80 leading-relaxed max-w-4xl mx-auto">
            True freedom is not just political. True freedom is the ability to <span className="text-blue-400 font-semibold">breathe clean air</span>,{' '}
            <span className="text-cyan-400 font-semibold">drink uncontaminated water</span>, and let{' '}
            <span className="text-green-400 font-semibold">children play</span> without invisible health threats lurking in waste corners.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Vision2047Section;
