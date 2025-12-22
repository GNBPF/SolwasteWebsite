import React from 'react';
import { motion } from 'framer-motion';

const VisionHeroSection: React.FC = () => {
  return (
    <header className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/80 to-charcoal z-10"></div>
        <img 
          alt="Waste Crisis Background" 
          className="h-full w-full object-cover grayscale opacity-60" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj1PmBFa8JWyhXLUcWJg07LPrbGbjDkDLkH0fGvoxEqQZTD1B2BCqQzA4uJt3YdUbzO_hMQJgvExD7rmppx5RmxMIuH1bkcX4H4LKO6VmLHrfZgk9jkdEF-ldMdnt3yr8-6CPtddI8HETM_7C4r8odvQ3LF-rwEZO1ZLh6bAcLQi1spRr_JILcwJdZL9PNDRLkbmdw_MI4PixZezLBS3qdIzNpfazASiBlaRy8A0onsqcyelCDbWr5Rd79hsejKPp82U2_ySQbz3E"
        />
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-6 sm:gap-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-cream font-sans text-center px-4"
        >
          Are We Really Free If Our <span className="text-gold">Waste</span> Still Owns Us?
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-3xl text-base sm:text-lg md:text-xl text-cream/80 leading-relaxed text-center px-4 space-y-4"
        >
          <p>In 2047, India will mark <span className="text-gold font-semibold">100 years of Independence</span>.</p>
          <p>A century of freedom. A century of progress. A century of promise.</p>
          <p>But here's an uncomfortable question we must ask ourselves—<span className="text-cream font-semibold">can a nation truly call itself free if its waste continues to choke its land, poison its water, and silently compromise the health of its children?</span></p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
        >
          <button 
            onClick={() => {
              const element = document.getElementById('crisis');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex h-12 sm:h-14 items-center justify-center rounded-xl bg-gold px-6 sm:px-8 text-sm sm:text-base font-bold text-charcoal transition-all hover:scale-105 hover:bg-gold/90 shadow-lg cursor-pointer" 
          >
            Explore the Crisis
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById('solution');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex h-12 sm:h-14 items-center justify-center rounded-xl border-2 border-moss bg-moss/20 px-6 sm:px-8 text-sm sm:text-base font-bold text-cream hover:bg-moss/30 transition-colors backdrop-blur-sm cursor-pointer" 
          >
            See the Solution
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default VisionHeroSection;
