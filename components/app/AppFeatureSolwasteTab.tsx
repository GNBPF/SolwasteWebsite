import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Smartphone, Building2, Download } from 'lucide-react';

const AppFeatureSolwasteTab: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-charcoal/5 to-charcoal/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 bg-charcoal/10 px-4 py-2 rounded-full mb-6">
              <Leaf size={16} className="text-charcoal" />
              <span className="text-charcoal text-xs font-bold uppercase tracking-wider">Solwaste Tab</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold mb-6 text-charcoal">
              Solutions that build a greener future
            </h2>
            
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              Explore our OTC and Biogas systems, read real case studies from Mumbai societies, and submit your community's waste challenge. Our team is ready to help you scale from habits to infrastructure.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Smartphone size={24} className="text-charcoal" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Product Showcase</h4>
                  <p className="text-charcoal/60 text-sm">Browse our OTC composters and Biogas systems—see specs, pricing, and installation timelines.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Building2 size={24} className="text-moss" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Real Case Studies</h4>
                  <p className="text-charcoal/60 text-sm">Learn from societies that went waste-neutral—their journey, impact data, and lessons learned.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Download size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Submit Your Query</h4>
                  <p className="text-charcoal/60 text-sm">Tell us about your society's waste issue. We'll contact you within 48 hours with a tailored solution.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-[280px] md:w-[320px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-moss/20">
              <img 
                src="/screen4.png" 
                alt="Solwaste App Solwaste Tab Preview" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatureSolwasteTab;
