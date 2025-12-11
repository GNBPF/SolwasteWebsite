import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Leaf, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const OTCPage = () => {
  const solutions = [
    {
      name: 'CyberSoil™',
      subtitle: 'Home Composter',
      image: '/OrganicWasteComposter.jpeg',
      bestFor: 'Apartments, villas, small offices',
      capacity: '2-10 kg/day',
      output: 'Ready compost in 7-10 days',
      features: 'Wifi-enabled, odor-free, IoT monitoring',
      tagline: '"Your balcony\'s new best friend."'
    },
    {
      name: 'EcoLoop™',
      subtitle: 'Community Composter',
      image: '/OrganicWasteComposter1.jpeg',
      bestFor: 'Housing societies, small communities',
      capacity: '50-200 kg/day',
      output: 'Nutrient-rich compost for community gardens',
      features: 'Modular design, zero-maintenance filter system',
      tagline: '"Because neighborhoods should grow together."'
    },
    {
      name: 'CompoGen™',
      subtitle: 'Industrial Composter',
      image: '/OrganicWasteComposter.jpeg',
      bestFor: 'Malls, hotels, institutions, large campuses',
      capacity: '500 kg-5 ton/day',
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url(/OrganicWasteComposter.jpeg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-moss/80 via-moss/60 to-cream" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-cream/80 hover:text-gold transition-colors mb-8 text-sm uppercase tracking-wider">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 text-cream">
              Our Organic Trash<br />Composters
            </h1>
            
            <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto font-light">
              Not all waste is equal. Not all machines should be either.<br/>
              That's why our solutions are like Lego – Plug, Play, Scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Lines */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-20 text-moss"
          >
            Solution Lines
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
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-moss/10 hover:border-gold/30 transition-all duration-500 group">
                    <img 
                      src={solution.image} 
                      alt={solution.name}
                      className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-moss/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-serif text-moss mb-2">
                      {solution.name}
                    </h3>
                    <p className="text-gold text-sm uppercase tracking-widest font-bold">
                      {solution.subtitle}
                    </p>
                  </div>

                  <div className="space-y-4">
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

                  <p className="text-lg md:text-xl font-serif italic text-moss/80 pl-6 border-l-4 border-gold">
                    {solution.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-cream to-moss/5">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-16 text-moss"
          >
            Specifications
          </motion.h2>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
              <thead>
                <tr className="bg-moss text-cream">
                  <th className="px-6 py-4 text-left font-serif text-lg">Specs</th>
                  <th className="px-6 py-4 text-left font-serif text-lg">Users</th>
                  <th className="px-6 py-4 text-left font-serif text-lg">Setup Time</th>
                  <th className="px-6 py-4 text-left font-serif text-lg">Output Potential</th>
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
                    <td className="px-6 py-5 font-semibold text-moss">{row.spec}</td>
                    <td className="px-6 py-5 text-gray-700">{row.users}</td>
                    <td className="px-6 py-5 text-gray-700">{row.setupTime}</td>
                    <td className="px-6 py-5 text-gray-700">{row.outputPotential}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Food Waste Visual Section */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/OrganicWasteComposter1.jpeg"
              alt="Organic Waste Processing"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 md:py-32 bg-moss text-cream">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-center mb-16"
          >
            Why Choose Our Composters?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                <h3 className="text-xl font-serif mb-3">{benefit.title}</h3>
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
