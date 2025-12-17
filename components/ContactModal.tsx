import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full max-w-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute -top-4 -right-4 z-10 p-2 bg-gold rounded-full hover:bg-cream transition-colors shadow-lg"
                  aria-label="Close modal"
                >
                  <X size={20} className="text-charcoal" />
                </button>

                {/* Form Container */}
                <div className="bg-charcoal border-2 border-gold/30 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="text-center mb-8">
                      <span className="text-gold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs font-bold">
                        The Legacy
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold my-4 text-cream leading-tight">
                        For The Visionaries.
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg font-light text-gray-400 px-4">
                        You aren't buying a machine; you are investing in a legacy.
                      </p>
                    </div>

                    <form className="space-y-5 sm:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-wider text-gray-500">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full bg-transparent border-b border-gray-700 py-2 md:py-3 focus:outline-none focus:border-gold transition-colors text-sm sm:text-base text-cream"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-wider text-gray-500">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full bg-transparent border-b border-gray-700 py-2 md:py-3 focus:outline-none focus:border-gold transition-colors text-sm sm:text-base text-cream"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500">
                          I represent *
                        </label>
                        <select
                          required
                          className="w-full bg-charcoal border-b border-gray-700 py-2 md:py-3 focus:outline-none focus:border-gold transition-colors text-cream/90 text-sm sm:text-base appearance-none cursor-pointer"
                        >
                          <option value="">Select an option</option>
                          <option value="vc">Venture Capital / Investor</option>
                          <option value="society">Housing Society Chairman</option>
                          <option value="corporate">Corporate CSR</option>
                          <option value="government">Government Body</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full bg-transparent border-b border-gray-700 py-2 md:py-3 focus:outline-none focus:border-gold transition-colors text-sm sm:text-base text-cream"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="w-full bg-transparent border-b border-gray-700 py-2 md:py-3 focus:outline-none focus:border-gold transition-colors text-sm sm:text-base text-cream"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500">
                          Message (Optional)
                        </label>
                        <textarea
                          rows={3}
                          className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-gold transition-colors text-sm sm:text-base text-cream resize-none"
                          placeholder="Tell us about your waste management needs..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-6 py-3 md:py-4 bg-gold text-charcoal font-bold tracking-[0.15em] md:tracking-[0.2em] hover:bg-cream transition-all uppercase text-xs md:text-sm rounded-full shadow-lg"
                      >
                        Request Private Demo
                      </motion.button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
