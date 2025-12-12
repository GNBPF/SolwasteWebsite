import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Flame, Droplets, TrendingUp, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const BiogasPage = () => {
  const solutions = [
    {
      name: 'CyberFlame™',
      subtitle: 'Domestic Biogas',
      image: '/biogas1.avif',
      bestFor: 'Societies, restaurants, institutions',
      output: '5-50 kg LPG-equivalent/day',
      features: 'IoT-based gas monitoring, solar-compatible systems',
      tagline: '"Gas bills? What are those?"'
    },
    {
      name: 'LoopGas™',
      subtitle: 'Community Biogas',
      image: '/biogas2.avif',
      bestFor: 'Cities, industries, food processing units',
      output: '1-20 tons waste/day = scalable biogas & power',
      features: 'Advanced anaerobic digesters, cloud monitoring, zero methane leakage',
      tagline: '"Mega cities deserve mega clean energy."'
    },
    {
      name: 'MethaGen™',
      subtitle: 'Industrial Biogas',
      image: '/biogas3.avif',
      bestFor: 'Large-scale industrial operations',
      modular: 'Add or remove units as your needs grow',
      sustainable: 'Designed to meet SDG 7, 11, 12, and 13',
      economical: 'ROI in under 18 months',
      features: 'Zero-maintenance design'
    }
  ];

  return (
    <div className="bg-charcoal text-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-12 md:pb-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/OrganicWasteComposter1.jpeg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
        
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0.2
              }}
              animate={{ 
                y: [null, Math.random() * -100],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-cream/70 hover:text-gold transition-colors mb-6 md:mb-8 text-xs md:text-sm uppercase tracking-wider">
              <ArrowLeft size={14} className="md:w-4 md:h-4" /> Back to Home
            </Link>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-8 md:mb-12 lg:mb-16 text-gold leading-[1.1] px-2 antialiased" style={{ 
              textShadow: '0 2px 30px rgba(212, 175, 55, 0.4)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}>
              Biogas Technology
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cream/80 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Our machines aren't just metal boxes –<br className="hidden sm:block"/>
              <span className="sm:hidden"> </span>they're ecosystems in disguise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Lines */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-charcoal to-moss/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-20 text-cream"
          >
            Biogas Solutions
          </motion.h2>

          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/20 hover:border-gold/50 transition-all duration-500 group">
                    <img 
                      src={solution.image} 
                      alt={solution.name}
                      className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-serif text-cream mb-2">
                      {solution.name}
                    </h3>
                    <p className="text-gold text-sm uppercase tracking-widest font-bold">
                      {solution.subtitle}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {solution.bestFor && (
                      <div className="flex items-start gap-3">
                        <Check size={20} className="text-gold mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-cream">Best For:</span>
                          <span className="text-cream/80 ml-2">{solution.bestFor}</span>
                        </div>
                      </div>
                    )}
                    
                    {solution.output && (
                      <div className="flex items-start gap-3">
                        <Check size={20} className="text-gold mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-cream">Output:</span>
                          <span className="text-cream/80 ml-2">{solution.output}</span>
                        </div>
                      </div>
                    )}
                    
                    {solution.features && (
                      <div className="flex items-start gap-3">
                        <Check size={20} className="text-gold mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-cream">Features:</span>
                          <span className="text-cream/80 ml-2">{solution.features}</span>
                        </div>
                      </div>
                    )}

                    {solution.modular && (
                      <div className="flex items-start gap-3">
                        <Check size={20} className="text-gold mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-cream">Modular:</span>
                          <span className="text-cream/80 ml-2">{solution.modular}</span>
                        </div>
                      </div>
                    )}

                    {solution.sustainable && (
                      <div className="flex items-start gap-3">
                        <Check size={20} className="text-gold mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-cream">Sustainable:</span>
                          <span className="text-cream/80 ml-2">{solution.sustainable}</span>
                        </div>
                      </div>
                    )}

                    {solution.economical && (
                      <div className="flex items-start gap-3">
                        <Check size={20} className="text-gold mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-cream">Economical:</span>
                          <span className="text-cream/80 ml-2">{solution.economical}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {solution.tagline && (
                    <p className="text-lg md:text-xl font-serif italic text-gold/90 pl-6 border-l-4 border-gold">
                      {solution.tagline}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-moss text-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-10 md:mb-16"
          >
            Why Biogas Technology?
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              { icon: Flame, title: 'Clean Energy', desc: 'Generate biogas for cooking & heating, reducing LPG dependency' },
              { icon: Droplets, title: 'Zero Emissions', desc: 'Anaerobic digestion with zero methane leakage to atmosphere' },
              { icon: TrendingUp, title: 'Fast ROI', desc: 'Return on investment in under 18 months with energy savings' },
              { icon: Recycle, title: 'Circular Economy', desc: 'Convert waste to energy, fertilizer, and revenue streams' }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-5 sm:p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 hover:border-gold/50 transition-all"
              >
                <benefit.icon size={40} className="sm:w-12 sm:h-12 mx-auto mb-3 md:mb-4 text-gold" />
                <h3 className="text-lg sm:text-xl font-serif mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-cream/80 font-light text-xs sm:text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BiogasPage;
