import React from 'react';
import { AlertTriangle, Droplet, Wind, Bug } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const VisionInvisibleCrisisSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-charcoal border-t border-moss/20" id="crisis">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-cream font-sans">
            The Invisible Crisis We Step Over Every Day
          </h2>
          <div className="mt-6 h-1 w-24 rounded bg-gold"></div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2} className="mb-12">
          <p className="text-lg sm:text-xl text-cream/90 leading-relaxed max-w-4xl">
            India generates millions of tonnes of waste every year, and nearly <span className="text-gold font-semibold">50–60%</span> of it is organic food waste—vegetable peels, leftovers, spoiled food, garden waste. This waste is not inert. It is alive. It decomposes, ferments, leaks, attracts vectors, and releases gases.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mb-8">
          <p className="text-xl sm:text-2xl text-cream/90 font-semibold mb-6">When left unattended or mixed with dry waste:</p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <AnimatedSection delay={0.4}>
            <div className="group relative flex flex-col gap-4 rounded-2xl border border-moss/20 bg-moss/5 p-6 sm:p-8 transition-all duration-500 hover:border-gold/50 hover:bg-moss/10 hover:scale-105">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
                <Bug className="w-7 h-7" />
              </div>
              <p className="text-cream/90 leading-relaxed">
                It becomes a <span className="text-cream font-semibold">breeding ground for mosquitoes and flies</span>
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.5}>
            <div className="group relative flex flex-col gap-4 rounded-2xl border border-moss/20 bg-moss/5 p-6 sm:p-8 transition-all duration-500 hover:border-gold/50 hover:bg-moss/10 hover:scale-105">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
                <Wind className="w-7 h-7" />
              </div>
              <p className="text-cream/90 leading-relaxed">
                It releases <span className="text-cream font-semibold">methane</span>, a greenhouse gas far more potent than CO₂
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <div className="group relative flex flex-col gap-4 rounded-2xl border border-moss/20 bg-moss/5 p-6 sm:p-8 transition-all duration-500 hover:border-gold/50 hover:bg-moss/10 hover:scale-105">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
                <Droplet className="w-7 h-7" />
              </div>
              <p className="text-cream/90 leading-relaxed">
                It contaminates <span className="text-cream font-semibold">soil and groundwater</span> through leachate
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.7}>
            <div className="group relative flex flex-col gap-4 rounded-2xl border border-moss/20 bg-moss/5 p-6 sm:p-8 transition-all duration-500 hover:border-gold/50 hover:bg-moss/10 hover:scale-105">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <p className="text-cream/90 leading-relaxed">
                It creates persistent <span className="text-cream font-semibold">foul odours</span>, making living spaces unhealthy
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.8} className="mt-12 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl text-gold font-bold italic">
            The tragedy? Most of this damage is completely avoidable.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VisionInvisibleCrisisSection;
