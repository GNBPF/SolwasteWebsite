import React from 'react';
import AnimatedSection from './AnimatedSection';

const VisionGentleSatireSection: React.FC = () => {
  const statements = [
    "We celebrate independence with flags, parades, and slogans.",
    "But if our garbage still travels kilometres to rot in landfills…",
    "If our societies still argue about smells every monsoon…",
    "If mosquitoes still thrive because food waste was \"someone else's problem\"…"
  ];

  return (
    <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charcoal to-moss/10">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-cream font-sans mb-6">
            Gentle Satire, <span className="text-gold">Hard Truth</span>
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 rounded bg-gold"></div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 max-w-4xl mx-auto">
          {statements.map((statement, index) => (
            <AnimatedSection key={index} delay={0.2 + index * 0.1}>
              <div className="bg-moss/10 border-l-4 border-cream/30 rounded-r-2xl p-6">
                <p className="text-xl text-cream/90 leading-relaxed">
                  {statement}
                </p>
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection delay={0.6} className="text-center mt-12">
            <p className="text-xl sm:text-2xl text-cream/80 font-bold leading-relaxed">
              Then we must ask—are we <span className="text-gold">independent</span>, or just <span className="text-red-400">outsourcing our mess</span>?
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default VisionGentleSatireSection;
