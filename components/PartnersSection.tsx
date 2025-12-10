
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
    <section className="py-24 bg-cream border-t border-moss/5">
      <div className="container mx-auto px-6 text-center">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
          >
              <p className="text-xs uppercase tracking-[0.4em] text-moss/50 mb-16 font-bold">Strategic Alliances</p>
              <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-32">
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
                              className="h-20 md:h-24 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hover:scale-105" 
                          />
                      </motion.div>
                  ))}
              </div>
          </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
