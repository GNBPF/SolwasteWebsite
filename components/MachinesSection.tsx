import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductScene from './ThreeScene';
import { SectionId } from '../types';

interface SpecProps {
    label: string;
    value: string;
}

const SpecRow = ({ label, value }: SpecProps) => (
    <div className="flex justify-between border-b border-moss/10 py-2 text-sm">
        <span className="opacity-60 font-light uppercase tracking-wider text-xs">{label}</span>
        <span className="font-medium">{value}</span>
    </div>
);

const SpecSheet = ({ title, specs }: { title: string, specs: SpecProps[] }) => (
    <div className="bg-white/50 backdrop-blur-sm border border-moss/10 rounded-xl p-6 mt-6">
        <h4 className="flex items-center gap-2 font-serif text-lg mb-4 text-moss">
            <Settings size={18} className="text-gold" />
            Technical Specifications
        </h4>
        <div className="space-y-1">
            {specs.map((s, i) => <SpecRow key={i} {...s} />)}
        </div>
    </div>
);

const MachinesSection = () => {
    return (
        <section id={SectionId.MACHINES} className="py-24 bg-cream text-moss overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-24 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif mb-4">Engineering Nature</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto font-light text-lg">German precision mechanisms meeting the organic soul of India.</p>
                    </motion.div>
                </div>

                {/* Machine 1: Organic Trash Composter */}
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-32">
                    <div className="w-full lg:w-1/2 h-[600px] relative">
                        <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-white/20">
                            <span className="text-[10px] uppercase tracking-widest text-moss font-bold flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Live Model
                            </span>
                        </div>
                        <ProductScene type="composter" />
                    </div>
                    <motion.div 
                        className="w-full lg:w-1/2 space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold uppercase tracking-[0.2em] font-semibold text-xs">The Flagship</span>
                        <h3 className="text-4xl md:text-5xl font-serif">Organic Trash Composter</h3>
                        <p className="text-lg text-gray-700 leading-relaxed font-light">
                            A fully automatic, decentralized organic waste converter. It utilizes high-temperature microorganisms to breakdown food waste into nutrient-rich soil supplements in just 24 hours.
                        </p>
                        
                        <div className="flex gap-4 flex-wrap">
                            <span className="px-3 py-1 bg-moss/5 rounded-full text-xs font-medium uppercase tracking-wider text-moss">Aerobic Digestion</span>
                            <span className="px-3 py-1 bg-moss/5 rounded-full text-xs font-medium uppercase tracking-wider text-moss">Heater System</span>
                            <span className="px-3 py-1 bg-moss/5 rounded-full text-xs font-medium uppercase tracking-wider text-moss">PLC Control</span>
                        </div>

                        <SpecSheet 
                            title="Composter Specs"
                            specs={[
                                { label: "Processing Time", value: "24 Hours" },
                                { label: "Volume Reduction", value: "85-90%" },
                                { label: "Body Material", value: "Stainless Steel 304" },
                                { label: "Operation", value: "Fully Automatic / Sensor Based" },
                                { label: "Output", value: "Nitrogen-Rich Compost" }
                            ]}
                        />

                        <div className="pt-6 flex gap-4">
                             <Link 
                                to="/machines" 
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-moss text-cream rounded-full hover:bg-gold hover:text-charcoal transition-all font-medium uppercase text-xs tracking-widest"
                            >
                                View Full Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                 {/* Machine 2: Biogas Plant */}
                 <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    <div className="w-full lg:w-1/2 h-[500px]">
                        <ProductScene type="biogas" />
                    </div>
                    <motion.div 
                        className="w-full lg:w-1/2 space-y-6 lg:text-right"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-terra uppercase tracking-[0.2em] font-semibold text-xs">Energy Independence</span>
                        <h3 className="text-4xl md:text-5xl font-serif">The Biogas Nexus</h3>
                        <p className="text-lg text-gray-700 leading-relaxed font-light">
                            Turn liability into utility. Our compact biogas plants convert wet waste into methane-rich gas.
                        </p>
                        <div className="pt-6 flex gap-4 lg:justify-end">
                             <Link 
                                to="/machines"
                                className="group inline-flex items-center gap-2 px-8 py-4 border border-moss text-moss rounded-full hover:bg-moss hover:text-cream transition-all font-medium uppercase text-xs tracking-widest"
                             >
                                Learn More <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MachinesSection;