import React from 'react';
import AnimatedSection from './AnimatedSection';

const VisionInfrastructureSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-moss/5" id="infrastructure">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-cream font-sans">
            Segregation Is Not a Habit. <br/><span className="text-gold">It Is Infrastructure.</span>
          </h2>
          <div className="mt-6 h-1 w-24 rounded bg-gold"></div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2} className="mb-12">
          <p className="text-lg sm:text-xl text-cream/90 leading-relaxed max-w-4xl">
            For decades, we have been told to "segregate at source." Yet, segregation alone without systems is like good intention without execution.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mb-8">
          <p className="text-xl text-cream/90 font-semibold mb-6">In large residential societies, townships, campuses, hotels, institutions, and commercial complexes:</p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mb-12">
          <AnimatedSection delay={0.4}>
            <div className="rounded-2xl border border-moss/20 bg-charcoal p-6 hover:border-gold/50 transition-all duration-300">
              <div className="w-3 h-3 bg-gold rounded-full mb-3"></div>
              <p className="text-cream/90 leading-relaxed">Manual segregation <span className="font-semibold">fails due to scale</span></p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.5}>
            <div className="rounded-2xl border border-moss/20 bg-charcoal p-6 hover:border-gold/50 transition-all duration-300">
              <div className="w-3 h-3 bg-gold rounded-full mb-3"></div>
              <p className="text-cream/90 leading-relaxed">Human dependency leads to <span className="font-semibold">inconsistency</span></p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <div className="rounded-2xl border border-moss/20 bg-charcoal p-6 hover:border-gold/50 transition-all duration-300">
              <div className="w-3 h-3 bg-gold rounded-full mb-3"></div>
              <p className="text-cream/90 leading-relaxed">Centralized pits <span className="font-semibold">overflow</span></p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.7}>
            <div className="rounded-2xl border border-moss/20 bg-charcoal p-6 hover:border-gold/50 transition-all duration-300">
              <div className="w-3 h-3 bg-gold rounded-full mb-3"></div>
              <p className="text-cream/90 leading-relaxed">Open dumping invites <span className="font-semibold">pests and complaints</span></p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.8}>
            <div className="rounded-2xl border border-moss/20 bg-charcoal p-6 hover:border-gold/50 transition-all duration-300">
              <div className="w-3 h-3 bg-gold rounded-full mb-3"></div>
              <p className="text-cream/90 leading-relaxed">Good intentions collapse under <span className="font-semibold">bad systems</span></p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.9} className="text-center mt-8">
          <p className="text-xl sm:text-2xl text-cream/80 font-semibold italic">
            Good intentions collapse under bad systems.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VisionInfrastructureSection;
