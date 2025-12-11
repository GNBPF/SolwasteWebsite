import React, { useState, useRef, useEffect } from 'react';
import { Mic, Send, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TheVent = () => {
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [phase, setPhase] = useState<'input' | 'imploding' | 'solution' | 'capture'>('input');
  const [formData, setFormData] = useState({ name: '', phone: '', society: '' });
  
  const recognitionRef = useRef<any>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Speech Recognition Setup
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        let finalTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript + ' ';
          }
        }
        
        if (finalTranscript) {
          setInput(prev => prev + finalTranscript);
        }
      };

      recognitionRef.current.onerror = () => setIsRecording(false);
      recognitionRef.current.onend = () => setIsRecording(false);
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [input]);

  const handleMicClick = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
    } else {
      recognitionRef.current?.start();
      setIsRecording(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Start particle implosion animation
    setPhase('imploding');
    
    // After 2 seconds, show the solution
    setTimeout(() => {
      setPhase('solution');
    }, 2000);
  };

  const handleContinueToForm = () => {
    setPhase('capture');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    // Reset
    setInput('');
    setFormData({ name: '', phone: '', society: '' });
    setPhase('input');
  };

  const reset = () => {
    setInput('');
    setPhase('input');
  };

  return (
    <section className="relative min-h-screen bg-[#0a1f14] text-[#fdfbf7] flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      {/* Deep Moss Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f14] via-moss/30 to-[#0a1f14]" />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gold rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              scale: Math.random() * 0.5 
            }}
            animate={{ 
              y: [null, Math.random() * -100],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: 3, height: 3 }}
          />
        ))}
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <AnimatePresence mode="wait">
          {phase === 'input' && (
            <motion.div
              key="input-phase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-serif mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#fdfbf7] via-white to-gray-300">
                Vent Your Waste Woes
              </h1>
              <p className="text-xl md:text-2xl font-light mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed">
                Your society. Your neighborhood. Your problem.<br/>
                Tell us what's rotting. We'll tell you what machine fixes it.
              </p>

              <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
                <div className="relative group">
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g., My society smells like last week's regrets..."
                    className="w-full bg-transparent border-b-2 border-gray-700 text-xl md:text-2xl py-4 pr-20 focus:outline-none focus:border-[#D4AF37] transition-colors font-light text-[#fdfbf7] placeholder-gray-600 font-serif resize-none overflow-hidden min-h-[80px] max-h-[300px]"
                    rows={1}
                  />
                  
                  <div className="absolute right-0 top-4 flex items-center gap-4">
                    <motion.button
                      type="button"
                      onClick={handleMicClick}
                      className={`p-3 rounded-full transition-all duration-300 ${
                        isRecording 
                        ? 'bg-red-500 text-white animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.6)]' 
                        : 'text-gray-500 hover:text-[#D4AF37] hover:bg-white/5'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mic size={24} />
                    </motion.button>
                  </div>
                </div>

                {isRecording && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-[#D4AF37] text-sm mt-4"
                  >
                    🎤 Listening... Speak your waste problems
                  </motion.p>
                )}

                <div className="mt-12 flex justify-center">
                  <motion.button
                    type="submit"
                    disabled={!input.trim()}
                    className={`
                      group relative overflow-hidden rounded-full px-12 py-5 bg-[#D4AF37] text-[#0a1f14] font-bold text-sm tracking-[0.2em] uppercase transition-all
                      ${!input.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:scale-105'}
                    `}
                    whileHover={{ scale: input.trim() ? 1.05 : 1 }}
                    whileTap={{ scale: input.trim() ? 0.95 : 1 }}
                  >
                    <span className="flex items-center gap-3">
                      Submit Your Problem <Send size={16} />
                    </span>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}

          {phase === 'imploding' && (
            <motion.div
              key="imploding-phase"
              className="text-center flex flex-col items-center justify-center min-h-[400px]"
            >
              {/* Particle Implosion Animation */}
              <div className="relative w-full h-64">
                {[...Array(40)].map((_, i) => {
                  const angle = (i / 40) * 360 * (Math.PI / 180);
                  const radius = 150;
                  const startX = Math.cos(angle) * radius;
                  const startY = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-[#D4AF37] rounded-full"
                      style={{ left: '50%', top: '50%' }}
                      initial={{ x: startX, y: startY, opacity: 1, scale: 1 }}
                      animate={{ 
                        x: 0, 
                        y: 0, 
                        opacity: 0,
                        scale: 0
                      }}
                      transition={{ 
                        duration: 1.5,
                        delay: i * 0.02,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}
              </div>
              
              <motion.p
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl text-gray-400 font-light"
              >
                {input}
              </motion.p>
            </motion.div>
          )}

          {phase === 'solution' && (
            <motion.div
              key="solution-phase"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 15, delay: 0.2 }}
                className="w-28 h-28 bg-[#D4AF37] rounded-full mx-auto mb-10 flex items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.5)]"
              >
                <Sparkles size={56} className="text-[#0a1f14]" />
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-serif mb-8 text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                We have a machine for that.
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl font-light text-gray-300 max-w-2xl mx-auto mb-12"
              >
                German precision meets Indian problems. Let's get your society started.
              </motion.p>

              <motion.button
                onClick={handleContinueToForm}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="px-12 py-5 bg-[#D4AF37] text-[#0a1f14] rounded-full font-bold text-sm tracking-[0.2em] uppercase hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Solution
              </motion.button>

              <button 
                onClick={reset}
                className="mt-8 text-gray-500 hover:text-[#D4AF37] text-xs uppercase tracking-widest transition-colors flex items-center gap-2 mx-auto"
              >
                <X size={14} /> Try Another Problem
              </button>
            </motion.div>
          )}

          {phase === 'capture' && (
            <motion.div
              key="capture-phase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl mx-auto"
            >
              <h3 className="text-3xl md:text-4xl font-serif text-center mb-8 text-[#D4AF37]">
                Let's Make It Happen
              </h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-500">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors text-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-500">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors text-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-500">Society / Organization</label>
                  <input 
                    type="text" 
                    required
                    value={formData.society}
                    onChange={(e) => setFormData({...formData, society: e.target.value})}
                    className="w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors text-lg"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full mt-8 py-4 bg-[#D4AF37] text-[#0a1f14] font-bold tracking-[0.2em] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all uppercase text-sm rounded-lg"
                >
                  Get Private Demo
                </button>
              </form>

              <button 
                onClick={reset}
                className="mt-6 text-gray-500 hover:text-[#D4AF37] text-xs uppercase tracking-widest transition-colors flex items-center gap-2 mx-auto"
              >
                <X size={14} /> Start Over
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TheVent;
