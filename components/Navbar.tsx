import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-moss/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 relative z-50 group">
             <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
               <span className="font-serif font-bold text-moss">S</span>
             </div>
             <span className="text-xl font-serif tracking-widest font-bold text-cream">SOLWASTE</span>
          </Link>
          
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/machines" className="text-xs uppercase tracking-widest text-cream/80 hover:text-gold transition-colors font-medium">
                 Machines
            </Link>
            {isHome ? (
                <>
                <a href="#impact" className="text-xs uppercase tracking-widest text-cream/80 hover:text-gold transition-colors font-medium">Impact</a>
                <a href="#app" className="text-xs uppercase tracking-widest text-cream/80 hover:text-gold transition-colors font-medium">App</a>
                </>
            ) : (
                <Link to="/" className="text-xs uppercase tracking-widest text-cream/80 hover:text-gold transition-colors font-medium">
                    Vision 2047
                </Link>
            )}
            <a href="#contact" className="px-6 py-2 border border-gold text-gold rounded-full hover:bg-gold hover:text-moss transition-all text-xs uppercase tracking-widest font-bold">
              Partner
            </a>
          </div>

          <button className="md:hidden text-cream relative z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-moss z-40 flex flex-col items-center justify-center gap-8"
          >
             <Link to="/machines" onClick={() => setIsOpen(false)} className="text-cream text-3xl font-serif hover:text-gold transition-colors">
                 Machines
             </Link>
             <Link to="/" onClick={() => setIsOpen(false)} className="text-cream text-3xl font-serif hover:text-gold transition-colors">
                 Home
             </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};