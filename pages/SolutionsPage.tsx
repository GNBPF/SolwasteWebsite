import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Settings, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProductScene from '../components/ThreeScene';
import Footer from '../components/Footer';

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
        <h4 className="flex items-center gap-2 font-sans font-medium text-lg mb-4 text-moss">
            <Settings size={18} className="text-gold" />
            Technical Specifications
        </h4>
        <div className="space-y-1">
            {specs.map((s, i) => <SpecRow key={i} {...s} />)}
        </div>
    </div>
);

const SolutionsPage = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Solwaste Solutions - OTC & Biogas Systems",
        "description": "Explore Solwaste's comprehensive range of organic waste management solutions including composting machines and biogas plants.",
        "url": "https://solwaste.co/solutions"
    };

    return (
        <div className="bg-cream text-moss">
            <SEO 
                title="Waste Disposal Solutions India | Solwaste"
                description="Organic waste, garbage disposal & biowaste machines India. Composting, biogas & OTC solutions by Solwaste. Sustainable waste management."
                keywords="waste disposal solutions, waste disposal India, organic waste machines, biowaste solutions, garbage disposal systems India, OTC machine, organic trash composter, biogas plant India, composting solutions, waste management systems, residential composting machine, commercial biogas plant, automated composting, biogas energy generation"
                ogImage="https://solwaste.co/og-solutions.png"
                schema={schema}
            />
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-12">
                <div 
                    className="absolute inset-0 opacity-70"
                >
                    <img 
                        src="/solwasteCoolBg.webp" 
                        alt="Solutions Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-moss/30 to-moss/20" />
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold mb-6 text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                            Our Solutions
                        </h1>
                        
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                            Engineering Nature. German precision mechanisms<br className="hidden sm:block"/> meeting the organic soul of India.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Solutions Content */}
            <section className="py-16 md:py-24 bg-cream">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Machine 1: Organic Trash Composter */}
                    <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-32">
                        <div className="w-full lg:w-1/2 relative flex-shrink-0">
                            <div className="relative w-full aspect-[3/4] sm:aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl bg-white/30 border border-moss/10">
                                <div className="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-white/20">
                                    <span className="text-[10px] uppercase tracking-widest text-moss font-bold flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        Live Model
                                    </span>
                                </div>
                                <ProductScene type="composter" />
                            </div>
                        </div>
                        <motion.div 
                            className="w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6 lg:pl-4"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-gold uppercase tracking-[0.2em] font-semibold text-xs inline-block">The Flagship</span>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold leading-tight">Organic Trash Composter</h3>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
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
                                    to="/otc" 
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-moss text-cream rounded-full hover:bg-gold hover:text-charcoal transition-all font-medium uppercase text-xs tracking-widest"
                                >
                                    View Full Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Machine 2: Fahaka */}
                    <div className="flex flex-col lg:flex-row-reverse items-start gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-32">
                        <div className="w-full lg:w-1/2 relative flex-shrink-0">
                            <div className="relative w-full aspect-[3/4] sm:aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl bg-white/30 border border-moss/10">
                                <img 
                                    src="/machines/fahaka.webp" 
                                    alt="Fahaka Machine"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <motion.div 
                            className="w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6 lg:text-right lg:pr-4"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-gold uppercase tracking-[0.2em] font-semibold text-xs inline-block">Innovation</span>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold leading-tight">Fahaka</h3>
                            
                            <div className="pt-6 flex gap-4 lg:justify-end">
                                <Link 
                                    to="/fahaka"
                                    className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-moss text-moss rounded-full hover:bg-moss hover:text-cream transition-all font-medium uppercase text-xs tracking-widest"
                                >
                                    Learn More <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Machine 3: Biogas Plant */}
                    <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16">
                        <div className="w-full lg:w-1/2 relative flex-shrink-0">
                            <div className="relative w-full aspect-[3/4] sm:aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl bg-white/30 border border-moss/10">
                                <ProductScene type="biogas" />
                            </div>
                        </div>
                        <motion.div 
                            className="w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6 lg:text-right lg:pr-4"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-terra uppercase tracking-[0.2em] font-semibold text-xs inline-block">Energy Independence</span>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold leading-tight">The Biogas Nexus</h3>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                                Turn liability into utility. Our compact biogas plants convert wet waste into methane-rich gas for cooking and heating—right where you need it.
                            </p>
                            
                            <div className="flex gap-4 flex-wrap lg:justify-end">
                                <span className="px-3 py-1 bg-terra/5 rounded-full text-xs font-medium uppercase tracking-wider text-terra">Anaerobic Digestion</span>
                                <span className="px-3 py-1 bg-terra/5 rounded-full text-xs font-medium uppercase tracking-wider text-terra">Methane Production</span>
                                <span className="px-3 py-1 bg-terra/5 rounded-full text-xs font-medium uppercase tracking-wider text-terra">Zero Emissions</span>
                            </div>

                            <div className="pt-6 flex gap-4 lg:justify-end">
                                <Link 
                                    to="/biogas"
                                    className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-moss text-moss rounded-full hover:bg-moss hover:text-cream transition-all font-medium uppercase text-xs tracking-widest"
                                >
                                    Learn More <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SolutionsPage;
