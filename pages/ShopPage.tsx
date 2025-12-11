import React from 'react';
import { motion } from 'framer-motion';
import { Store, ArrowLeft, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const ShopPage = () => {
  return (
    <div className="bg-cream text-moss min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-moss/60 hover:text-gold transition-colors mb-8 text-xs md:text-sm uppercase tracking-wider">
              <ArrowLeft size={14} className="md:w-4 md:h-4" /> Back to Home
            </Link>

            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 15, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full" />
                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-gold to-moss rounded-full flex items-center justify-center shadow-2xl">
                  <Store size={48} className="text-cream md:w-16 md:h-16" />
                </div>
              </div>
            </motion.div>
            
            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-moss leading-tight"
            >
              Shop
            </motion.h1>
            
            {/* Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="inline-block"
            >
              <span className="px-6 py-3 bg-gold/10 border-2 border-gold rounded-full text-gold font-bold text-sm md:text-base uppercase tracking-widest">
                Coming Soon
              </span>
            </motion.div>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed px-4"
            >
              We're crafting something special for you.<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Get ready to shop sustainable solutions.
            </motion.p>

            {/* Notify Me Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="pt-8 max-w-md mx-auto"
            >
              <p className="text-sm uppercase tracking-wider text-gold font-semibold mb-4">
                Get Notified When We Launch
              </p>
              <form className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="relative flex-1">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-5 py-3 md:py-4 rounded-full border-2 border-moss/20 focus:border-gold focus:outline-none bg-white text-moss placeholder-moss/40 transition-colors"
                  />
                </div>
                <button 
                  type="submit"
                  className="px-6 md:px-8 py-3 md:py-4 bg-moss text-cream rounded-full font-bold hover:bg-gold hover:text-moss transition-all uppercase text-xs md:text-sm tracking-widest flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Bell size={16} />
                  Notify Me
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3 px-2">
                Be the first to know when we launch our sustainable product line.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="grid sm:grid-cols-3 gap-6 md:gap-8 pt-12 md:pt-16 max-w-3xl mx-auto"
            >
              {[
                { title: 'Eco-Friendly Products', desc: 'Sustainable materials' },
                { title: 'Expert Curated', desc: 'Quality guaranteed' },
                { title: 'Fast Delivery', desc: 'Direct to your door' }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-moss/10 hover:border-gold/30 transition-all"
                >
                  <h3 className="font-serif text-lg md:text-xl text-moss mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopPage;
