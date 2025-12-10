
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Leaf, Smartphone, Menu } from 'lucide-react';
import { SectionId } from '../types';

const AppFeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="bg-white p-3 rounded-full h-fit shadow-sm border border-gray-100">{icon}</div>
        <div>
            <h4 className="font-bold text-lg font-serif">{title}</h4>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    </div>
);

const AppSection = () => {
    return (
        <section id={SectionId.APP} className="py-24 bg-cream text-charcoal">
             <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <motion.div 
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif mb-6">Gamify the Green.</h2>
                        <p className="text-xl font-light mb-8 text-gray-600">
                            Waste management shouldn't be a chore. It should be a sport. Compete with neighbors, earn Carbon Coins, and redeem them for organic produce.
                        </p>
                        
                        <div className="space-y-6">
                            <AppFeatureCard 
                                icon={<Trophy size={24} className="text-gold" />}
                                title="Society Leaderboard"
                                description="See how your building ranks against the one next door."
                            />
                            <AppFeatureCard 
                                icon={<Leaf size={24} className="text-moss" />}
                                title="Ghar Ke Nuskhe"
                                description="Ancient Indian wisdom meets modern tips. Banana peels to fertilizer in 3 swipes."
                            />
                        </div>

                        <button className="mt-10 px-8 py-4 bg-charcoal text-cream rounded-full font-semibold hover:bg-gold hover:text-charcoal transition-colors tracking-wide text-sm uppercase">
                            Join Beta Waitlist
                        </button>
                    </motion.div>

                    <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
                        <motion.div 
                            className="relative w-[300px] h-[600px] bg-charcoal rounded-[3rem] p-4 border-8 border-gray-800 shadow-2xl"
                            initial={{ rotateY: -15, rotateZ: 5 }}
                            whileInView={{ rotateY: 0, rotateZ: 0 }}
                            transition={{ duration: 1.5, type: "spring" }}
                        >
                             <div className="w-full h-full bg-cream rounded-[2.2rem] overflow-hidden relative flex flex-col">
                                 {/* Fake App UI */}
                                 <div className="bg-moss text-cream p-6 pb-8 rounded-b-3xl shadow-lg relative z-10">
                                     <div className="flex justify-between items-center mb-6">
                                         <Menu size={20} />
                                         <span className="font-serif italic">Solwaste</span>
                                         <div className="w-8 h-8 bg-gold rounded-full border-2 border-white/20" />
                                     </div>
                                     <h3 className="text-2xl font-serif">Hello, Priya</h3>
                                     <p className="text-xs opacity-70 mb-6">Gold Tier Member</p>
                                     <div className="flex gap-4">
                                         <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg flex-1 text-center border border-white/10">
                                             <div className="text-lg font-bold text-gold">1,240</div>
                                             <div className="text-[9px] tracking-widest opacity-80">COINS</div>
                                         </div>
                                         <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg flex-1 text-center border border-white/10">
                                             <div className="text-lg font-bold text-green-400">12kg</div>
                                             <div className="text-[9px] tracking-widest opacity-80">SAVED</div>
                                         </div>
                                     </div>
                                 </div>
                                 
                                 <div className="p-4 space-y-4 flex-1 bg-gray-50 overflow-hidden">
                                     <motion.div 
                                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                                        initial={{ x: 50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                     >
                                         <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Daily Tip</p>
                                         <p className="font-serif text-moss text-sm">Don't throw tea bags! They are perfect for rose plants.</p>
                                     </motion.div>
                                     
                                     <motion.div 
                                        className="bg-gradient-to-br from-gold/20 to-white p-4 rounded-xl shadow-sm border border-gold/30"
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.7 }}
                                     >
                                         <div className="flex justify-between items-center mb-2">
                                            <p className="text-[10px] text-gold uppercase font-bold tracking-wider">Weekly Challenge</p>
                                            <Trophy size={14} className="text-gold" />
                                         </div>
                                         <p className="font-medium text-sm text-charcoal mb-3">Segregate 5kg this week.</p>
                                         <div className="w-full bg-white h-1.5 rounded-full overflow-hidden">
                                             <div className="w-[70%] bg-gold h-full rounded-full" />
                                         </div>
                                     </motion.div>
                                 </div>
                                 
                                 {/* Bottom Nav */}
                                 <div className="bg-white p-5 flex justify-around border-t border-gray-100">
                                     <Smartphone size={20} className="text-moss" />
                                     <Trophy size={20} className="text-gray-300" />
                                     <Leaf size={20} className="text-gray-300" />
                                 </div>
                             </div>
                        </motion.div>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default AppSection;
