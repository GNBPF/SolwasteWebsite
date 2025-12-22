import React from 'react';
import { motion } from 'framer-motion';

interface AppDownloadCTAProps {
  onNotifyClick: () => void;
}

const AppDownloadCTA: React.FC<AppDownloadCTAProps> = ({ onNotifyClick }) => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-moss to-charcoal text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-6">
            Ready to start your green journey?
          </h2>
          <p className="text-lg md:text-xl text-cream/80 mb-12 font-light">
            Download the Solwaste App and join thousands of Indians making a difference—one habit at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
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

          <p className="text-sm text-cream/60">
            Available in India on iOS and Android • Free forever • No ads
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDownloadCTA;
