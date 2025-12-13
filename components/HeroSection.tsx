
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { SectionId } from '../types';

const HeroSection = () => {
  return (
    <section id={SectionId.HERO} className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Simulated Video Background with Ken Burns Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img 
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2400&auto=format&fit=crop" 
          alt="Indian Urban Nature" 
          className="w-full h-full object-cover opacity-60"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-moss/60 via-moss/40 to-charcoal/90" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-cream mb-4 sm:mb-6 md:mb-8 leading-tight drop-shadow-2xl px-4">
            India’s Organic Waste Crisis Needs Smarter Solutions
          </h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gold tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase px-4"
          >
            Urban societies, hotels, corporates, and institutions generate tons of daily food waste most of it ends up in landfills, causing methane emissions, odour, pests, and rising disposal costs.
          </motion.p>
        </motion.div>

        <motion.button
          onClick={() => {
            const ventSection = document.getElementById('vent');
            ventSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 sm:bottom-10 md:bottom-12 animate-bounce text-cream/50 cursor-pointer hover:text-gold transition-colors"
          aria-label="Scroll to next section"
        >
           <ArrowDown size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
