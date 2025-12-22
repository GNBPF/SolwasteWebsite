import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AppHeroSectionProps {
  onNotifyClick: () => void;
}

const AppHeroSection: React.FC<AppHeroSectionProps> = ({ onNotifyClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-12">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(/ventBackgroung.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/95 to-cream" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-moss/20 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
            }}
            animate={{ 
              y: [null, Math.random() * -200],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-charcoal/60 hover:text-moss transition-colors mb-6 text-xs md:text-sm uppercase tracking-wider">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold mb-6 text-charcoal leading-tight">
            Meet the Solwaste App
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-charcoal/70 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Small daily habits. Big environmental impact.
          </p>
          
          <p className="text-base sm:text-lg text-charcoal/60 max-w-2xl mx-auto leading-relaxed mb-12">
            Transform your home, your society, and your city—one green step at a time. Track your eco-habits, join community circles, and be part of India's zero-waste movement.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNotifyClick}
              className="focus:outline-none"
            >
              <img 
                src="/appStoreDownload.png" 
                alt="Download on App Store" 
                className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto"
              />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNotifyClick}
              className="focus:outline-none"
            >
              <img 
                src="/playStoreDownload.png" 
                alt="Get it on Google Play" 
                className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto"
              />
            </motion.button>
          </div>
        </motion.div>

        {/* App Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center items-center gap-4 md:gap-8 max-w-5xl mx-auto"
        >
          {/* App screen 1 */}
          <motion.div 
            className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-charcoal/10"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src="/screen1.png" 
              alt="Solwaste App Home Tab" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
          
          {/* App screen 2 - Center/Featured */}
          <motion.div 
            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-charcoal/10 z-10"
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src="/screen2.png" 
              alt="Solwaste App Circles Tab" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
          
          {/* App screen 3 */}
          <motion.div 
            className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-charcoal/10"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src="/screen3.png" 
              alt="Solwaste App Features" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppHeroSection;
