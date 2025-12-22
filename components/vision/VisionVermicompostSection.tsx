import React from 'react';
import { TrendingDown, Clock, AlertTriangle, Bug, Wind } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const VisionVermicompostSection: React.FC = () => {
  const issues = [
    { text: "Cannot handle daily high-volume organic waste", icon: TrendingDown },
    { text: "Require constant manual monitoring and care", icon: Clock },
    { text: "Are highly sensitive to moisture, temperature, and contamination", icon: AlertTriangle },
    { text: "Become unhygienic if even slightly mismanaged", icon: Bug },
    { text: "Often turn into odour hotspots instead of solutions", icon: Wind }
  ];

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-cream font-sans">
            Why <span className="text-red-400">Vermicompost Pits</span> Don't Scale for Modern India
          </h2>
          <div className="mt-6 h-1 w-24 rounded bg-gold"></div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2} className="mb-12">
          <p className="text-lg sm:text-xl text-cream/90 leading-relaxed max-w-4xl">
            Vermicomposting is often romanticized as a universal solution. While it works for small households and controlled environments, it <span className="text-red-400 font-semibold">fails dramatically at scale</span>.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mb-8">
          <p className="text-xl text-cream/90 font-semibold mb-6">In large residential and institutional setups, vermicompost pits:</p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {issues.map((item, index) => (
            <AnimatedSection key={index} delay={0.4 + index * 0.1}>
              <div className="bg-red-900/10 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <item.icon className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-cream/90 leading-relaxed">{item.text}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
          <AnimatedSection delay={0.9}>
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 h-full flex items-center">
              <p className="text-cream/90 leading-relaxed">
                What starts as a <span className="text-gold font-semibold">green initiative</span> slowly becomes a <span className="text-red-400 font-semibold">health liability</span>.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={1} className="mt-12 text-center">
          <p className="text-lg sm:text-xl text-cream/70 italic">
            India's urban future cannot rely on fragile systems meant for smaller, simpler times.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VisionVermicompostSection;
