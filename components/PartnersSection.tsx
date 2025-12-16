
import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "Government of Kerala", logo: "/partnerLogo/kerela.png" },
  { name: "LuLu Group", logo: "/partnerLogo/mall.png" },
  { name: "ONGC", logo: "/partnerLogo/ongc.png" },
  { name: "Petronet LNG", logo: "/partnerLogo/petronet.png" }
];

const PartnersSection = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  
  // Triple partners array for seamless infinite loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-moss/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
          >
              <span className="text-moss uppercase tracking-[0.3em] text-xs font-bold">Trusted By</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-google-sans font-bold mt-4 mb-4 text-charcoal">
                Our Clients and Partners
              </h2>
              <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
                Working with leading organizations across India to build a sustainable future
              </p>
          </motion.div>
          
          {/* Dual-Row Infinite Scrolling Marquee */}
          <div className="relative space-y-6">
              {/* Gradient Overlays for Premium Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              
              {/* Row 1: Left to Right */}
              <div className="overflow-hidden py-4">
                  <motion.div
                      className="flex gap-12 md:gap-16"
                      animate={{
                          x: isPaused ? undefined : [0, -1 * (partners.length * 260)],
                      }}
                      transition={{
                          x: {
                              duration: 25,
                              repeat: Infinity,
                              ease: "linear",
                          },
                      }}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                  >
                      {duplicatedPartners.map((partner, index) => (
                          <div
                              key={`row1-${partner.name}-${index}`}
                              className="flex flex-col items-center justify-center gap-3 min-w-[220px] group cursor-pointer"
                          >
                              <div className="relative w-full h-28 flex items-center justify-center bg-gradient-to-br from-cream/50 to-white rounded-2xl p-6 border border-moss/10 group-hover:border-gold/40 transition-all duration-500 group-hover:shadow-xl group-hover:scale-105 overflow-hidden">
                                  {/* Shimmer Effect */}
                                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                                  
                                  <img
                                      src={partner.logo}
                                      alt={partner.name}
                                      className="max-h-16 max-w-[180px] object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 relative z-10"
                                  />
                              </div>
                              <p className="text-xs font-semibold text-charcoal/50 group-hover:text-moss transition-colors text-center tracking-wide">
                                  {partner.name}
                              </p>
                          </div>
                      ))}
                  </motion.div>
              </div>

              {/* Row 2: Right to Left */}
              <div className="overflow-hidden py-4">
                  <motion.div
                      className="flex gap-12 md:gap-16"
                      animate={{
                          x: isPaused ? undefined : [-1 * (partners.length * 260), 0],
                      }}
                      transition={{
                          x: {
                              duration: 25,
                              repeat: Infinity,
                              ease: "linear",
                          },
                      }}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                  >
                      {duplicatedPartners.map((partner, index) => (
                          <div
                              key={`row2-${partner.name}-${index}`}
                              className="flex flex-col items-center justify-center gap-3 min-w-[220px] group cursor-pointer"
                          >
                              <div className="relative w-full h-28 flex items-center justify-center bg-gradient-to-br from-white to-cream/50 rounded-2xl p-6 border border-moss/10 group-hover:border-gold/40 transition-all duration-500 group-hover:shadow-xl group-hover:scale-105 overflow-hidden">
                                  {/* Shimmer Effect */}
                                  <div className="absolute inset-0 translate-x-full group-hover:-translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                                  
                                  <img
                                      src={partner.logo}
                                      alt={partner.name}
                                      className="max-h-16 max-w-[180px] object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 relative z-10"
                                  />
                              </div>
                              <p className="text-xs font-semibold text-charcoal/50 group-hover:text-moss transition-colors text-center tracking-wide">
                                  {partner.name}
                              </p>
                          </div>
                      ))}
                  </motion.div>
              </div>
          </div>
              
          <p className="text-sm text-charcoal/50 mt-10 text-center">
            Hotels • Builders • Institutions • Corporate Clients • Government Bodies
          </p>
      </div>
    </section>
  );
};

export default PartnersSection;
