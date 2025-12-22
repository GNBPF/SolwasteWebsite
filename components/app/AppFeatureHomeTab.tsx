import React from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, Sprout, Heart, Share2 } from 'lucide-react';

const AppFeatureHomeTab: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-moss/5 to-moss/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 bg-moss/10 px-4 py-2 rounded-full mb-6">
              <HomeIcon size={16} className="text-moss" />
              <span className="text-moss text-xs font-bold uppercase tracking-wider">Home Tab</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold mb-6 text-charcoal">
              Start from your home
            </h2>
            
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              Build eco-friendly habits one day at a time. Track your green steps, learn ancient Indian waste wisdom, check your personal Soil Score, and create beautiful shareable story cards to inspire your friends and family.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Sprout size={24} className="text-moss" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Daily Green Steps</h4>
                  <p className="text-charcoal/60 text-sm">Simple eco-habits designed for real Indian homes—composting tips, water conservation, energy saving.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Heart size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Ghar Ke Nuskhe</h4>
                  <p className="text-charcoal/60 text-sm">Ancient Indian wisdom meets modern sustainability—banana peels to fertilizer, eggshells for plants.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Share2 size={24} className="text-charcoal" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Shareable Story Cards</h4>
                  <p className="text-charcoal/60 text-sm">Beautiful visuals showing your impact—perfect for Instagram, WhatsApp, and inspiring your circle.</p>
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
                alt="Solwaste App Home Tab Preview" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatureHomeTab;
