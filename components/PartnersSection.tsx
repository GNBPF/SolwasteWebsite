
import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "Government of Kerala", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Government_of_Kerala_Logo.svg/800px-Government_of_Kerala_Logo.svg.png" },
  { name: "LuLu Group", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/LuLu_Group_International_Logo.svg/800px-LuLu_Group_International_Logo.svg.png" },
  { name: "ONGC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/ONGC_Logo.svg/800px-ONGC_Logo.svg.png" },
  { name: "Petronet LNG", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Petronet_LNG_Logo.svg/800px-Petronet_LNG_Logo.svg.png" }
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
