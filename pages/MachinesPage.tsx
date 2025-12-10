import React from 'react';
import { motion } from 'framer-motion';
import { Check, Download, Zap, Shield, Activity, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductScene from '../components/ThreeScene';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Feature = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="flex gap-4 items-start">
        <div className="bg-moss/5 p-3 rounded-lg text-moss">{icon}</div>
        <div>
            <h4 className="font-bold text-moss">{title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
        </div>
    </div>
);

const MachinesPage = () => {
  return (
    <div className="bg-cream pt-24 min-h-screen">
        <div className="container mx-auto px-6 py-8">
            <Link to="/" className="inline-flex items-center gap-2 text-moss hover:text-gold transition-colors mb-8 text-xs uppercase tracking-widest font-bold">
                <ArrowLeft size={16} /> Back to Home
            </Link>
        </div>

        {/* Product 1: The Composter */}
        <section className="container mx-auto px-6 mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-4">
                    <div className="h-[400px] bg-gradient-to-br from-gray-100 to-white rounded-3xl overflow-hidden shadow-lg border border-white">
                        <img src="/OrganicWasteComposter.jpeg" alt="Organic Waste Composter" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-[300px] bg-gradient-to-br from-gray-100 to-white rounded-3xl overflow-hidden shadow-lg border border-white">
                        <img src="/OrganicWasteComposter1.jpeg" alt="Organic Waste Composter Detail" className="w-full h-full object-cover" />
                    </div>
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-gold font-bold tracking-widest text-xs uppercase">Series X</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-moss mt-2 mb-6">The Reclaimer.</h1>
                    <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                        The fully automatic Organic Waste Converter (OWC) engineered for zero-touch operation. Designed for residential societies and corporate parks, it transforms 100% of wet waste into FCO-compliant manure.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <Feature 
                            icon={<Zap size={20} />} 
                            title="24-Hour Cycle" 
                            desc="Rapid thermophilic digestion reduces volume by 90% overnight." 
                        />
                        <Feature 
                            icon={<Shield size={20} />} 
                            title="SS 304 Build" 
                            desc="Industrial grade stainless steel for 15+ year operational life." 
                        />
                        <Feature 
                            icon={<Activity size={20} />} 
                            title="Odour Control" 
                            desc="Multi-stage filtration ensures emission-free operation." 
                        />
                        <Feature 
                            icon={<Check size={20} />} 
                            title="PLC Automation" 
                            desc="One-touch operation with smart load sensing." 
                        />
                    </div>

                    <div className="flex gap-4">
                        <button className="bg-moss text-cream px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-gold hover:text-charcoal transition-colors">
                            Request Quotation
                        </button>
                        <button className="border border-moss text-moss px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-moss hover:text-cream transition-colors flex items-center gap-2">
                            Download Specs <Download size={16} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Technical Specs Table */}
        <section className="bg-white py-24 border-y border-moss/5">
            <div className="container mx-auto px-6 max-w-4xl">
                <h3 className="text-3xl font-serif text-center mb-12">Technical Specifications</h3>
                <div className="overflow-hidden rounded-xl border border-moss/10">
                    <table className="w-full text-left">
                        <tbody className="divide-y divide-moss/10">
                            {[
                                ["Model", "SW-X 50", "SW-X 100", "SW-X 500"],
                                ["Capacity (Kg/Day)", "50", "100", "500"],
                                ["Dimensions (ft)", "4 x 3 x 4", "6 x 4 x 5", "10 x 5 x 6"],
                                ["Power (kW)", "2.5", "4.0", "8.5"],
                                ["Material", "SS 304", "SS 304", "SS 304"],
                                ["Operation", "Fully Automatic", "Fully Automatic", "Fully Automatic"]
                            ].map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-moss/5" : "bg-white"}>
                                    <td className="p-4 font-bold text-moss text-sm uppercase tracking-wide">{row[0]}</td>
                                    <td className="p-4 text-gray-600">{row[1]}</td>
                                    <td className="p-4 text-gray-600">{row[2]}</td>
                                    <td className="p-4 text-gray-600">{row[3]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/* Product 2: Biogas */}
        <section className="container mx-auto px-6 py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                    className="lg:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-terra font-bold tracking-widest text-xs uppercase">Series Bio</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-moss mt-2 mb-6">The Generator.</h1>
                    <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                        A decentralized biogas plant that converts kitchen waste into cooking gas and liquid fertilizer. No civil work required—plug and play.
                    </p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <Feature 
                            icon={<Zap size={20} />} 
                            title="High Yield" 
                            desc="1kg waste = 0.1m³ biogas (approx 2 hrs burner time)." 
                        />
                        <Feature 
                            icon={<Shield size={20} />} 
                            title="FRP Material" 
                            desc="Corrosion-resistant Fibre Reinforced Polymer body." 
                        />
                    </div>
                     <button className="bg-terra text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-moss transition-colors">
                            Enquire for Biogas
                    </button>
                </motion.div>
                <div className="h-[500px] lg:order-2 rounded-3xl overflow-hidden">
                    <ProductScene type="biogas" />
                </div>
            </div>
        </section>

        <ContactSection />
        <Footer />
    </div>
  );
};

export default MachinesPage;