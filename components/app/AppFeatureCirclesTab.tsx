import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, TrendingUp, Zap } from 'lucide-react';

const AppFeatureCirclesTab: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-6">
              <Users size={16} className="text-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-wider">Circles Tab</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold mb-6 text-charcoal">
              Grow together as a community
            </h2>
            
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              Join your society, office, or campus circle. See how your building compares, track collective impact, and celebrate progress together. This is where individual habits become community movements.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cream rounded-lg shadow-sm">
                  <Building2 size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Society and Office Circles</h4>
                  <p className="text-charcoal/60 text-sm">Join your building's circle, see who's active, and track estimated waste diverted from landfills.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cream rounded-lg shadow-sm">
                  <TrendingUp size={24} className="text-moss" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Impact Tracking</h4>
                  <p className="text-charcoal/60 text-sm">Watch your community's collective impact grow—compost generated, CO₂ saved, trees equivalent planted.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cream rounded-lg shadow-sm">
                  <Zap size={24} className="text-charcoal" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Preparing for Real Systems</h4>
                  <p className="text-charcoal/60 text-sm">Before Solwaste machines arrive, your community is already engaged, informed, and ready to scale impact.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-[280px] md:w-[320px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-moss/20">
              <img 
                src="/screen5.png" 
                alt="Solwaste App Circles Tab Preview" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatureCirclesTab;
