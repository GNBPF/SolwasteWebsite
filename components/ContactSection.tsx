
import React from 'react';
import { SectionId } from '../types';

const ContactSection = () => {
    return (
        <section id={SectionId.CONTACT} className="py-24 bg-charcoal text-cream">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">The Legacy</span>
                <h2 className="text-4xl md:text-6xl font-serif my-8 text-cream">For The Visionaries.</h2>
                <p className="text-xl font-light text-gray-400 mb-16">
                    You aren't buying a machine; you are investing in a legacy.
                </p>

                <form className="space-y-6 md:space-y-8 text-left max-w-xl mx-auto bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-gray-500">First Name</label>
                            <input type="text" className="w-full bg-transparent border-b border-gray-700 py-2 md:py-3 focus:outline-none focus:border-gold transition-colors text-base md:text-lg" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-gray-500">Last Name</label>
                            <input type="text" className="w-full bg-transparent border-b border-gray-700 py-2 md:py-3 focus:outline-none focus:border-gold transition-colors text-base md:text-lg" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500">I represent</label>
                        <select className="w-full bg-transparent border-b border-gray-700 py-2 md:py-3 focus:outline-none focus:border-gold transition-colors text-cream/80 text-base md:text-lg appearance-none">
                            <option className="bg-charcoal">Venture Capital / Investor</option>
                            <option className="bg-charcoal">Housing Society Chairman</option>
                            <option className="bg-charcoal">Corporate CSR</option>
                            <option className="bg-charcoal">Government Body</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                         <label className="text-xs uppercase tracking-wider text-gray-500">Email</label>
                         <input type="email" className="w-full bg-transparent border-b border-gray-700 py-2 md:py-3 focus:outline-none focus:border-gold transition-colors text-base md:text-lg" />
                    </div>

                    <button type="submit" className="w-full mt-6 md:mt-8 py-3 md:py-4 bg-gold text-charcoal font-bold tracking-[0.15em] md:tracking-[0.2em] hover:bg-white transition-all uppercase text-xs md:text-sm rounded-lg">
                        Request Private Demo
                    </button>
                </form>

                <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
                    <p>© 2024 Solwaste Technologies.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gold transition-colors">Instagram</a>
                        <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-gold transition-colors">Twitter</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
