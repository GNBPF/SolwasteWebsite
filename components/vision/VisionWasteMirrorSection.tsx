import React from 'react';
import AnimatedSection from './AnimatedSection';

const VisionWasteMirrorSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-charcoal to-moss/10">
      <div className="container mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cream leading-relaxed font-light">
            Waste is not a side issue anymore.{' '}
            <span className="font-bold text-gold">It is a mirror.</span>
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-cream/70 mt-6 leading-relaxed">
            It reflects how we live, how we consume, and how responsibly we think about tomorrow.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VisionWasteMirrorSection;
