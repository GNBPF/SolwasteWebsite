import React from 'react';
import AnimatedSection from './AnimatedSection';

const VisionWhatWeLosingSection: React.FC = () => {
  const losses = [
    { loss: "Public health", to: "preventable diseases", color: "red" },
    { loss: "Children's safety", to: "vector-borne infections", color: "orange" },
    { loss: "Urban livability", to: "smells and filth", color: "yellow" },
    { loss: "Environmental capital", to: "landfills and emissions", color: "green" },
    { loss: "Soil fertility", to: "by discarding what could regenerate it", color: "blue" }
  ];

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-charcoal" id="impact">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cream font-sans mb-6">
            What Are We Really <span className="text-red-400">Losing</span> by Doing Nothing?
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 rounded bg-gold"></div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2} className="mb-12">
          <p className="text-lg sm:text-xl text-cream/90 leading-relaxed max-w-4xl mx-auto text-center">
            When organic waste is ignored or mishandled, we lose:
          </p>
        </AnimatedSection>

        <div className="space-y-6 max-w-4xl mx-auto">
          {losses.map((item, index) => (
            <AnimatedSection key={index} delay={0.3 + index * 0.1}>
              <div className={`bg-${item.color}-900/10 border-l-4 border-${item.color}-500 rounded-r-2xl p-6 hover:bg-${item.color}-900/20 transition-all duration-300`}>
                <p className="text-lg sm:text-xl text-cream">
                  <span className="font-bold">{item.loss}</span>{' '}
                  <span className="text-cream/60">to</span>{' '}
                  <span className="text-cream/90">{item.to}</span>
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.9} className="mt-12">
          <p className="text-xl sm:text-2xl text-cream/80 font-semibold leading-relaxed text-center">
            And perhaps most dangerously—<span className="text-red-400">we lose time.</span> Time that our children will not get back.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VisionWhatWeLosingSection;
