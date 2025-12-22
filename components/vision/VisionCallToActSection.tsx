import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const VisionCallToActSection: React.FC = () => {
  const actions = [
    "Investing in robust waste systems today",
    "Treating organic waste as a resource, not a nuisance",
    "Choosing machines and infrastructure that scale with India's reality"
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-moss via-moss/80 to-charcoal overflow-hidden" id="act-now">
      <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cream/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream font-sans mb-6">
            The Call to Act—<span className="text-gold">Now, Not in 2047</span>
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 rounded bg-gold"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="text-center mb-12">
          <p className="text-xl sm:text-2xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
            Vision 2047 will not be achieved by intention alone.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mb-12">
          <p className="text-xl text-cream/90 font-semibold mb-6 text-center">It will be achieved by:</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {actions.map((action, index) => (
            <AnimatedSection key={index} delay={0.4 + index * 0.1} className="h-full">
              <div className="bg-cream/10 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 hover:bg-cream/20 hover:border-gold/60 transition-all duration-500 hover:scale-105 h-full flex items-center justify-center">
                <p className="text-cream text-lg font-semibold text-center">{action}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.7} className="text-center mb-12">
          <p className="text-xl sm:text-2xl text-cream/80 leading-relaxed max-w-4xl mx-auto">
            Because the future will not forgive us for the problems we had the technology to solve—<span className="text-gold font-semibold">but chose not to.</span>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.9} className="text-center mb-8">
          <p className="text-2xl sm:text-3xl text-gold/90 font-bold">
            A cleaner India is not a dream. It is a decision.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={1.0} className="text-center mb-12">
          <p className="text-xl sm:text-2xl text-cream/80 leading-relaxed">
            And that decision must begin <span className="text-gold font-bold">at the source</span>—<span className="text-gold font-bold">today</span>.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={1.1}>
          <div className="text-center">
            <Link 
              to="/#contact" 
              className="inline-block group"
            >
              <div className="bg-gold hover:bg-gold/90 text-charcoal rounded-2xl px-12 py-6 font-bold text-xl transition-all duration-500 shadow-2xl hover:shadow-gold/50 hover:scale-105">
                <span className="flex items-center gap-3">
                  Start Your Waste-Free Journey
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </div>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VisionCallToActSection;
