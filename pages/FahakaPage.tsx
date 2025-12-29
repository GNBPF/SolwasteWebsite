import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const FahakaPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Fahaka - Solwaste",
    "description": "Fahaka waste management solution by Solwaste",
    "brand": {
      "@type": "Brand",
      "name": "Solwaste"
    }
  };

  return (
    <main className="bg-cream">
      <SEO 
        title="Fahaka | Solwaste Solutions"
        description="Discover Fahaka, an innovative waste management solution by Solwaste."
        keywords="Fahaka, waste management, Solwaste, organic waste, sustainability"
        ogImage="https://solwaste.co/og-fahaka.png"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-12 md:pb-0">
        <div className="absolute inset-0 opacity-70">
          <img 
            src="/machines/fahakaBg.png" 
            alt="Fahaka Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-moss/30 to-moss/20" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs sm:text-sm font-bold inline-block mb-4">
              Innovation
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-sans font-bold mb-4 md:mb-6 text-white leading-tight px-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Fahaka
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section - Placeholder */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-sm border border-moss/10 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-charcoal mb-4">
                Content Coming Soon
              </h2>
              <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed">
                Detailed information about Fahaka will be added here.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Machine Image - Full Width */}
      <section className="w-full bg-cream pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <img 
              src="/machines/fahaka1.webp" 
              alt="Fahaka Machine"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FahakaPage;
