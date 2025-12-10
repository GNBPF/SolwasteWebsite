
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Wind } from 'lucide-react';
import { SectionId, ImpactStat } from '../types';

const SparkIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const initialStats = [
  { label: "Waste Saved", value: 12450, unit: "kg", icon: <Leaf className="text-moss" /> },
  { label: "CO₂ Prevented", value: 8320, unit: "kg", icon: <Wind className="text-blue-500" /> },
  { label: "Energy Gen.", value: 450, unit: "kWh", icon: <SparkIcon /> } 
];

const StatCard = ({ stat }: { stat: any }) => (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
        <div className="flex justify-between items-start mb-4">
            <span className="opacity-60 text-xs uppercase tracking-widest group-hover:text-gold transition-colors">{stat.label}</span>
            {stat.icon}
        </div>
        <div className="text-4xl lg:text-5xl font-serif font-bold tabular-nums">
            {stat.value.toLocaleString()} <span className="text-lg font-sans font-normal opacity-50">{stat.unit}</span>
        </div>
    </div>
);

const ImpactSection = () => {
    const { scrollYProgress } = useScroll();
    const mapScale = useTransform(scrollYProgress, [0.5, 0.9], [0.95, 1.05]);
    
    // Simulate live data ticking
    const [stats, setStats] = useState(initialStats);

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => prev.map(s => ({...s, value: s.value + Math.floor(Math.random() * 3)})));
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id={SectionId.IMPACT} className="py-24 bg-moss text-cream relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/20 pb-8">
                     <div>
                        <h2 className="text-4xl md:text-6xl font-serif mb-2">Vision 2047</h2>
                        <p className="text-gold font-light tracking-wide">By the time India turns 100, we aim for zero waste.</p>
                     </div>
                     <div className="text-right hidden md:block">
                        <p className="text-xs opacity-60 tracking-widest mb-2">LIVE NETWORK STATUS</p>
                        <div className="flex items-center justify-end gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"/>
                            <span className="font-mono text-sm">ONLINE</span>
                        </div>
                     </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {stats.map((stat, idx) => (
                        <StatCard key={idx} stat={stat} />
                    ))}
                </div>

                {/* Abstract Map Visualization */}
                <div className="relative h-[500px] w-full bg-charcoal/30 rounded-3xl overflow-hidden flex items-center justify-center border border-white/5 shadow-2xl">
                    <motion.div style={{ scale: mapScale }} className="relative w-full h-full flex items-center justify-center opacity-90">
                         {/* Abstract Geometric Map of India */}
                        <svg viewBox="0 0 100 120" className="h-[80%] drop-shadow-2xl">
                            {/* Base Map Shape */}
                            <path d="M50 10 L70 25 L85 50 L65 105 L40 105 L20 60 L30 25 Z" fill="#1f2d1f" stroke="#D4AF37" strokeWidth="0.2" />
                            
                            {/* Cities / Hubs */}
                            <circle cx="30" cy="35" r="1.5" fill="#D4AF37" className="animate-pulse" /> {/* Delhi-ish */}
                            <circle cx="25" cy="65" r="1.5" fill="#D4AF37" className="animate-pulse" style={{animationDelay: '0.3s'}} /> {/* Mumbai-ish */}
                            <circle cx="65" cy="85" r="1.5" fill="#D4AF37" className="animate-pulse" style={{animationDelay: '0.7s'}} /> {/* Bangalore-ish */}
                            <circle cx="75" cy="45" r="1.5" fill="#D4AF37" className="animate-pulse" style={{animationDelay: '1.2s'}} /> {/* Kolkata-ish */}
                            
                            {/* Spreading Green Zones - Vision 2047 */}
                            <motion.circle cx="25" cy="65" r="0" fill="#4ade80" 
                                initial={{ r: 0, opacity: 0 }} 
                                whileInView={{ r: 25, opacity: 0.15 }} 
                                transition={{ duration: 3, ease: "easeOut" }} 
                            />
                            <motion.circle cx="30" cy="35" r="0" fill="#4ade80" 
                                initial={{ r: 0, opacity: 0 }} 
                                whileInView={{ r: 20, opacity: 0.15 }} 
                                transition={{ duration: 3.5, ease: "easeOut", delay: 0.5 }} 
                            />
                             <motion.circle cx="65" cy="85" r="0" fill="#4ade80" 
                                initial={{ r: 0, opacity: 0 }} 
                                whileInView={{ r: 30, opacity: 0.15 }} 
                                transition={{ duration: 4, ease: "easeOut", delay: 1 }} 
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <h3 className="text-4xl md:text-6xl font-serif text-white/5 select-none tracking-[1em] font-bold">INDIA 2047</h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
