import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTABannerSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-moss via-moss to-charcoal text-cream relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
            Ready to comply, reduce costs,<br />and go green?
          </h2>
          
          <p className="text-lg md:text-xl text-cream/90 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Let Solwaste design the right composting system for your needs. From consultation to installation, we're with you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-gold text-charcoal rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-2xl"
              >
                Request a Quote
                <ArrowRight size={20} />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/otc"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white/10 backdrop-blur-sm text-cream rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-colors"
              >
                Explore Solutions
              </Link>
            </motion.div>
          </div>

          <p className="text-sm text-cream/60 mt-8">
            Join 500+ organizations already making a difference
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABannerSection;
