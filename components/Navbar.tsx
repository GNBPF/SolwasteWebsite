import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleSectionClick = (sectionId: string) => {
    if (isHome) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/');
      // Wait for navigation and DOM to be ready
      const scrollToSection = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Retry if element not found yet
          setTimeout(scrollToSection, 50);
        }
      };
      setTimeout(scrollToSection, 100);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-moss/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 relative z-50 group cursor-pointer">
             <img src={"/logo.png"} alt="Solwaste Logo" className="h-10 w-auto object-contain group-hover:scale-110 transition-transform" />
             <div className="flex flex-col leading-tight">
               <span className="text-cream font-bold text-xl tracking-wider group-hover:text-gold transition-colors">SOLWASTE</span>
               <span className="text-cream/70 text-[10px] font-light tracking-wide">Nothing Wasted. Ever.</span>
             </div>
          </a>
          
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/otc" className="text-xs uppercase tracking-widest text-cream/80 hover:text-gold transition-colors font-medium">
                 OTC
            </Link>
            <Link to="/biogas" className="text-xs uppercase tracking-widest text-cream/80 hover:text-gold transition-colors font-medium">
                 Biogas
            </Link>
            <button onClick={() => handleSectionClick('impact')} className="text-xs uppercase tracking-widest text-cream/80 hover:text-gold transition-colors font-medium">
                 Impact
            </button>
            <Link to="/app" className="text-xs uppercase tracking-widest text-cream/80 hover:text-gold transition-colors font-medium">
                 App
            </Link>
            <Link to="/shop" className="text-xs uppercase tracking-widest text-cream/80 hover:text-gold transition-colors font-medium">
                 Shop
            </Link>
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
             <button onClick={(e) => { setIsOpen(false); handleLogoClick(e); }} className="text-cream text-3xl font-serif hover:text-gold transition-colors">
                 Home
             </button>
             <Link to="/otc" onClick={() => setIsOpen(false)} className="text-cream text-3xl font-serif hover:text-gold transition-colors">
                 OTC
             </Link>
             <Link to="/biogas" onClick={() => setIsOpen(false)} className="text-cream text-3xl font-serif hover:text-gold transition-colors">
                 Biogas
             </Link>
             <button onClick={() => { setIsOpen(false); handleSectionClick('impact'); }} className="text-cream text-3xl font-serif hover:text-gold transition-colors">
                 Impact
             </button>
             <Link to="/app" onClick={() => setIsOpen(false)} className="text-cream text-3xl font-serif hover:text-gold transition-colors">
                 App
             </Link>
             <Link to="/shop" onClick={() => setIsOpen(false)} className="text-cream text-3xl font-serif hover:text-gold transition-colors">
                 Shop
             </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};