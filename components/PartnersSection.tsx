
import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "Government of Kerala", logo: "/kerela.png" },
  { name: "LuLu Group", logo: "/mall.png" },
  { name: "ONGC", logo: "/ongc.png" },
  { name: "Petronet LNG", logo: "/petronet.png" }
];

const PartnersSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-moss/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
          >
              <span className="text-moss uppercase tracking-[0.3em] text-xs font-bold">Trusted By</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-4 mb-4 text-charcoal">
                Our Clients & Partners
              </h2>
              <p className="text-lg text-charcoal/70 mb-12 max-w-2xl mx-auto">
                Working with leading organizations across India to build a sustainable future
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20">
                  {partners.map((p, i) => (
                      <motion.div 
                          key={p.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.15 }}
                          viewport={{ once: true }}
                          className="group relative"
                      >
                          <img 
                              src={p.logo} 
                              alt={p.name} 
                              className="h-16 md:h-20 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110" 
                          />
                      </motion.div>
                  ))}
              </div>
              
              <p className="text-sm text-charcoal/50 mt-10">
                Hotels • Builders • Institutions • Corporate Clients • Government Bodies
              </p>
          </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
