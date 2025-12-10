
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
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-cream mb-8 leading-tight drop-shadow-2xl">
            We don't just <br/> manage waste.
          </h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="text-xl md:text-2xl font-light text-gold tracking-[0.2em] uppercase"
          >
            We manage the future.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 animate-bounce text-cream/50"
        >
           <ArrowDown size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
