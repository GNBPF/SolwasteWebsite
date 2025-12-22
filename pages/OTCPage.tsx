import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, Leaf, Zap, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const SolutionCard = ({ solution, index }: { solution: any, index: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % solution.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + solution.images.length) % solution.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 md:gap-10 lg:gap-16`}
    >
      {/* Image Slider */}
      <div className="w-full lg:w-1/2">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-moss/10 hover:border-gold/30 transition-all duration-500 group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={solution.images[currentImageIndex]}
              alt={`${solution.name} - Image ${currentImageIndex + 1}`}
              className="w-full h-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-moss/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-moss/80 hover:bg-moss text-cream p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-moss/80 hover:bg-moss text-cream p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {solution.images.map((_: any, i: number) => (
              <button
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  i === currentImageIndex ? 'bg-gold w-6 sm:w-8' : 'bg-cream/50 hover:bg-cream/80'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 px-2">
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-moss mb-2">
            {solution.name}
          </h3>
          <p className="text-gold text-xs md:text-sm uppercase tracking-widest font-bold">
            {solution.subtitle}
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          <div className="flex items-start gap-3">
            <Check size={20} className="text-gold mt-1 flex-shrink-0" />
            <div>
              <span className="font-semibold text-moss">Best For:</span>
              <span className="text-gray-700 ml-2">{solution.bestFor}</span>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Check size={20} className="text-gold mt-1 flex-shrink-0" />
            <div>
              <span className="font-semibold text-moss">Capacity:</span>
              <span className="text-gray-700 ml-2">{solution.capacity}</span>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Check size={20} className="text-gold mt-1 flex-shrink-0" />
            <div>
              <span className="font-semibold text-moss">Output:</span>
              <span className="text-gray-700 ml-2">{solution.output}</span>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Check size={20} className="text-gold mt-1 flex-shrink-0" />
            <div>
              <span className="font-semibold text-moss">Features:</span>
              <span className="text-gray-700 ml-2">{solution.features}</span>
            </div>
          </div>
        </div>

        <p className="text-lg md:text-xl font-sans italic text-moss/80 pl-6 border-l-4 border-gold">
          {solution.tagline}
        </p>
      </div>
    </motion.div>
  );
};

const OTCPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Organic Trash Composter (OTC)",
    "description": "Automated composting machine that converts organic waste into nutrient-rich compost in 24-48 hours. German engineering for Indian applications.",
    "brand": {
      "@type": "Brand",
      "name": "Solwaste"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    }
  };
  const solutions = [
    {
      name: 'CyberSoil™',
      subtitle: 'Home Composter',
      images: ['/machines/CyberSoil.webp', '/machines/CyberSoil1.webp'],
      bestFor: 'Apartments, Villas, Small Offices',
      capacity: '2-10 kg/day',
      output: 'Ready compost in 24 hours.',
      features: 'Wifi-enabled, odor-free, IoT monitoring',
      tagline: '"kitchen platform\'s new best friend."'
    },
    {
      name: 'EcoLoop™',
      subtitle: 'Community Composter',
      images: ['/machines/EcoLoop.png', '/machines/EcoLoop1.png', '/machines/EcoLoop2.png'],
      bestFor: 'Housing societies, Small Communities, Hospitals, Hotels, Canteens',
      capacity: '50-1000 kg/day',
      output: 'Nutrient-rich compost for community gardens',
      features: 'Modular design, zero-maintenance filter system',
      tagline: '"Because neighborhoods should grow together."'
    },
    {
      name: 'CompoGen™',
      subtitle: 'Industrial Composter',
      images: ['/machines/CompoGen.webp', '/machines/CompoGen1.webp', '/machines/CompoGen2.webp'],
      bestFor: 'Malls, Hotels, Institutions, Large Campuses',
      capacity: '1.5 ton onwards.',
      output: 'Large-scale compost production with real-time IoT dashboards, energy-efficient processing',
      features: 'Advanced automation, monitoring dashboards',
      tagline: '"Built for scale. Built for change."'
    }
  ];

  const specifications = [
    { spec: 'Mini (Domestic)', users: 'Small Cities, Individuals', setupTime: '1 - 2 Hours', outputPotential: '8 - 10 kg compost/day' },
    { spec: 'Standard (Societies)', users: 'Hostels, Restaurants', setupTime: '2 - 3 Hours', outputPotential: '18 - 20 kg compost/day' },
    { spec: 'Community (Integrated)', users: 'Apartments, Resorts, Canteens', setupTime: '4 - 6 Hours', outputPotential: '35 - 40 kg compost/day' },
    { spec: 'Industrial (Biodigester)', users: 'Factories, Institutions', setupTime: '1 Working Day', outputPotential: '80 - 100 kg compost/day' }
  ];

  return (
    <div className="bg-cream text-moss">
      <SEO 
        title="OTC Composting Machine India | Solwaste"
        description="One-time composting machines for organic waste India. Fast biowaste disposal with German-engineered OTC by Solwaste.co. Zero landfill."
        keywords="OTC machine, composting machine India, organic waste compost, organic waste converter, organic waste management India, OTC machine price, organic trash composter India, automated composting machine, residential composter, society composting solution, industrial composter, waste to compost machine, CyberSoil, EcoLoop, CompoGen"
        ogImage="https://solwaste.co/og-otc.png"
        schema={schema}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-12 md:pb-0">
        <div className="absolute inset-0 opacity-70">
          <img 
            src="/ourSolutionsBg.webp" 
            alt="OTC Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-sans font-bold mb-4 md:mb-6 text-cream leading-tight px-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Our Organic Trash<br />Composters
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Solution Lines */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-center mb-12 md:mb-16 lg:mb-20 text-moss"
          >
            Solution Lines
          </motion.h2>

          <div className="space-y-16 md:space-y-24 lg:space-y-32">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>



      {/* Specifications Table */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-cream to-moss/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-center mb-8 md:mb-12 lg:mb-16 text-moss"
          >
            Specifications
          </motion.h2>

          <div className="max-w-6xl mx-auto overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle px-4 sm:px-0">
              <table className="w-full min-w-[640px] bg-white/70 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <thead>
                  <tr className="bg-moss text-cream">
                    <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left font-sans font-medium text-sm md:text-base lg:text-lg">Specs</th>
                    <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left font-sans font-medium text-sm md:text-base lg:text-lg">Users</th>
                    <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left font-sans font-medium text-sm md:text-base lg:text-lg">Setup Time</th>
                    <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left font-sans font-medium text-sm md:text-base lg:text-lg">Output Potential</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-moss/10 hover:bg-gold/5 transition-colors"
                  >
                    <td className="px-3 sm:px-4 md:px-6 py-3 md:py-5 font-semibold text-moss text-xs sm:text-sm md:text-base">{row.spec}</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 md:py-5 text-gray-700 text-xs sm:text-sm md:text-base">{row.users}</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 md:py-5 text-gray-700 text-xs sm:text-sm md:text-base">{row.setupTime}</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 md:py-5 text-gray-700 text-xs sm:text-sm md:text-base">{row.outputPotential}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            </div>
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
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-center mb-10 md:mb-16"
          >
            Why Choose Our Composters?
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { icon: Leaf, title: 'Zero Waste', desc: '85-90% volume reduction with nutrient-rich output' },
              { icon: Zap, title: 'Fast Processing', desc: 'Ready compost in 7-10 days with automated systems' },
              { icon: Shield, title: 'Built to Last', desc: 'Stainless steel 304 construction, German precision' }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-gold/50 transition-all"
              >
                <benefit.icon size={48} className="mx-auto mb-4 text-gold" />
                <h3 className="text-xl font-sans font-medium mb-3">{benefit.title}</h3>
                <p className="text-cream/80 font-light">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OTCPage;
