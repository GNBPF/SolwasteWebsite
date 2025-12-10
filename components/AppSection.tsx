
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
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-6">Gamify the Green.</h2>
                        <p className="text-base sm:text-lg md:text-xl font-light mb-6 md:mb-8 text-gray-600">
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

                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <motion.div 
                            className="relative flex gap-4 md:gap-6 items-center justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Screen 2 - Left (slightly behind) */}
                            <motion.div 
                                className="relative w-[140px] sm:w-[160px] md:w-[180px] rounded-[1.5rem] overflow-hidden shadow-2xl border-[3px] border-gray-800"
                                initial={{ x: -20, opacity: 0.7, scale: 0.9 }}
                                whileInView={{ x: 0, opacity: 1, scale: 0.95 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <img 
                                    src="/screen2.png" 
                                    alt="Solwaste App Screen 2" 
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>

                            {/* Screen 1 - Center (main focus) */}
                            <motion.div 
                                className="relative w-[180px] sm:w-[200px] md:w-[220px] rounded-[2rem] overflow-hidden shadow-2xl border-[3px] border-gray-800 z-10"
                                initial={{ y: 20, opacity: 0, scale: 0.95 }}
                                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                <img 
                                    src="/screen1.png" 
                                    alt="Solwaste App Screen 1" 
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>

                            {/* Screen 3 - Right (slightly behind) */}
                            <motion.div 
                                className="relative w-[140px] sm:w-[160px] md:w-[180px] rounded-[1.5rem] overflow-hidden shadow-2xl border-[3px] border-gray-800"
                                initial={{ x: 20, opacity: 0.7, scale: 0.9 }}
                                whileInView={{ x: 0, opacity: 1, scale: 0.95 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <img 
                                    src="/screen3.png" 
                                    alt="Solwaste App Screen 3" 
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default AppSection;
