
import React, { useState, useRef, useEffect } from 'react';
import { Mic, Send, Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateSolwasteSolution } from '../services/geminiService';
import { VentResponse } from '../types';

const VentSection: React.FC = () => {
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [solution, setSolution] = useState<VentResponse | null>(null);
  
  // Ref for speech recognition
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Basic check for browser support
    if ('webkitSpeechRecognition' in window) {
      // @ts-ignore
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event: any) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
             if (event.results[i].isFinal) {
               finalTranscript += event.results[i][0].transcript;
             }
        }
        if (finalTranscript) {
             setInput(finalTranscript);
             setIsRecording(false);
        }
      };

      recognitionRef.current.onerror = () => {
        setIsRecording(false);
      };
      
      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }
  }, []);

  const handleMicClick = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
    } else {
      setInput('');
      recognitionRef.current?.start();
      setIsRecording(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsProcessing(true);
    // Simulate "particle implosion" delay for effect
    await new Promise(r => setTimeout(r, 2000));
    
    const result = await generateSolwasteSolution(input);
    setSolution(result);
    setIsProcessing(false);
  };

  const reset = () => {
    setSolution(null);
    setInput('');
  };

  return (
    <section id="vent" className="relative min-h-screen bg-charcoal text-cream flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
        {/* Background Particles (Simulated) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            {[...Array(25)].map((_, i) => (
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

      <div className="max-w-3xl w-full relative z-10">
        <AnimatePresence mode="wait">
          {!solution ? (
            <motion.div
              key="input-mode"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-6xl font-serif mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cream via-white to-gray-400">
                The Pulse of the City
              </h2>
              <p className="text-xl md:text-2xl font-light mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed">
                Your city. Your building. Your home.<br/>
                What’s the waste problem keeping you up?
              </p>

              <form onSubmit={handleSubmit} className="relative w-full max-w-xl mx-auto">
                <div className="relative group">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="e.g. Garbage pileup in sector 5..."
                        className="w-full bg-transparent border-b-2 border-gray-700 text-xl md:text-2xl py-4 pr-12 focus:outline-none focus:border-gold transition-colors font-light text-cream placeholder-gray-600 font-serif"
                        disabled={isProcessing}
                    />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4">
                        <button
                            type="button"
                            onClick={handleMicClick}
                            className={`p-3 rounded-full transition-all duration-300 ${
                                isRecording 
                                ? 'bg-red-500 text-white animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]' 
                                : 'text-gray-500 hover:text-gold hover:bg-white/5'
                            }`}
                            title="Voice Input"
                        >
                            <Mic size={24} />
                        </button>
                    </div>
                </div>

                <div className="mt-16 flex justify-center">
                    <button
                        type="submit"
                        disabled={!input || isProcessing}
                        className={`
                            group relative overflow-hidden rounded-full px-10 py-5 bg-gold text-charcoal font-bold text-sm tracking-[0.2em] uppercase transition-all
                            ${(!input || isProcessing) ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105'}
                        `}
                    >
                        {isProcessing ? (
                            <span className="flex items-center gap-3">
                                <Loader2 className="animate-spin" size={20} />
                                PROCESSING WASTE...
                            </span>
                        ) : (
                            <span className="flex items-center gap-3">
                                THROW YOUR HEART OUT <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        )}
                    </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="solution-mode"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 12 }}
                className="w-24 h-24 bg-gold rounded-full mx-auto mb-10 flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.4)]"
              >
                <Sparkles size={48} className="text-charcoal" />
              </motion.div>

              <h3 className="text-gold text-xs tracking-[0.4em] uppercase mb-6 font-bold">Solwaste Solution Generated</h3>
              
              <h2 className="text-4xl md:text-6xl font-serif mb-8 text-cream drop-shadow-lg leading-tight">
                {solution.solution}
              </h2>
              
              <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed">
                {solution.technicalSpec}
              </p>

              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-8 w-full max-w-xs border border-white/10 hover:border-gold/30 transition-colors"
                  >
                    <p className="text-[10px] text-gold uppercase tracking-widest mb-2 font-bold">Estimated Deploy Time</p>
                    <p className="text-3xl font-serif text-white">48 Hours</p>
                  </motion.div>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-8 w-full max-w-xs border border-white/10 hover:border-gold/30 transition-colors"
                  >
                    <p className="text-[10px] text-gold uppercase tracking-widest mb-2 font-bold">Impact</p>
                    <p className="text-3xl font-serif text-white">Zero Landfill</p>
                  </motion.div>
              </div>

              <button 
                onClick={reset}
                className="mt-16 text-gray-500 hover:text-gold flex items-center gap-2 mx-auto text-xs uppercase tracking-widest transition-colors"
              >
                <RefreshCw size={14} /> Submit Another Issue
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VentSection;
