import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

interface AppNotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppNotifyModal: React.FC<AppNotifyModalProps> = ({ isOpen, onClose }) => {
  const [notifyEmail, setNotifyEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail) {
      console.log('Notify email:', notifyEmail);
      setEmailSubmitted(true);
      setTimeout(() => {
        onClose();
        setEmailSubmitted(false);
        setNotifyEmail('');
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-cream rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-charcoal/10 hover:bg-charcoal/20 transition-colors z-10"
        >
          <span className="text-charcoal text-xl leading-none">&times;</span>
        </button>

        <div className="p-6 sm:p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-4">
              <Smartphone size={16} className="text-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-wider">Coming Soon</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-charcoal mb-4">
              App in Development
            </h3>
            <p className="text-charcoal/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              The Solwaste App is currently under development. Take a look at what we're building and get notified when it goes live!
            </p>
          </div>

          {/* Screenshots Preview */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-charcoal mb-4 text-center">Preview Our Features</h4>
            <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6">
              <div className="w-[100px] sm:w-[130px] md:w-[160px] rounded-xl overflow-hidden shadow-lg border-2 border-charcoal/10">
                <img src="/screen1.png" alt="App Screen 1" className="w-full h-auto" />
              </div>
              <div className="w-[110px] sm:w-[140px] md:w-[180px] rounded-xl overflow-hidden shadow-xl border-2 border-charcoal/10">
                <img src="/screen2.png" alt="App Screen 2" className="w-full h-auto" />
              </div>
              <div className="w-[100px] sm:w-[130px] md:w-[160px] rounded-xl overflow-hidden shadow-lg border-2 border-charcoal/10">
                <img src="/screen3.png" alt="App Screen 3" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="bg-white rounded-xl p-6 mb-8">
            <h4 className="text-lg font-bold text-charcoal mb-4">What You'll Get:</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-moss text-xl">✓</span>
                <span className="text-charcoal/70">Track daily green habits and build sustainable routines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-moss text-xl">✓</span>
                <span className="text-charcoal/70">Join your society circle and monitor collective impact</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-moss text-xl">✓</span>
                <span className="text-charcoal/70">Learn ancient Indian waste wisdom (Ghar Ke Nuskhe)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-moss text-xl">✓</span>
                <span className="text-charcoal/70">View real-time data from Solwaste machines in your area</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-moss text-xl">✓</span>
                <span className="text-charcoal/70">Share beautiful impact stories on social media</span>
              </li>
            </ul>
          </div>

          {/* Email Form */}
          {!emailSubmitted ? (
            <form onSubmit={handleNotifySubmit} className="max-w-md mx-auto">
              <label className="block text-sm font-bold text-charcoal mb-2">
                Get notified when we launch:
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 border-2 border-moss/30 rounded-xl focus:outline-none focus:border-moss transition-colors bg-white text-charcoal"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-3 bg-moss text-cream rounded-xl font-bold hover:bg-moss/90 transition-colors shadow-lg"
                >
                  Get Notified
                </motion.button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-moss/10 px-6 py-3 rounded-xl">
                <span className="text-moss text-2xl">✓</span>
                <span className="text-moss font-bold">Thank you! We'll notify you soon.</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AppNotifyModal;
