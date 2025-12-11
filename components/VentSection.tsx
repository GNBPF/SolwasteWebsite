
import React, { useState, useRef, useEffect } from 'react';
import { Mic, Send, Sparkles, Loader2, RefreshCw, User, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateSolwasteSolution } from '../services/geminiService';
import { VentResponse } from '../types';

const VentSection: React.FC = () => {
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [solution, setSolution] = useState<VentResponse | null>(null);
  const [interimText, setInterimText] = useState('');
  
  // User details state
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  // Ref for speech recognition
  const recognitionRef = useRef<any>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<string>('');

  // Keep inputRef in sync with input state
  useEffect(() => {
    inputRef.current = input;
  }, [input]);

  useEffect(() => {
    // Check for browser support - works in Chrome, Edge, Safari
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = inputRef.current;
        
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }
        
        setInput(finalTranscript);
        setInterimText(interimTranscript);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsRecording(false);
        setInterimText('');
        if (event.error === 'not-allowed') {
          alert('Microphone access denied. Please allow microphone access in your browser settings.');
        }
      };
      
      recognitionRef.current.onend = () => {
        if (isRecording) {
          // Auto-restart if still recording (for continuous mode)
          try {
            recognitionRef.current?.start();
          } catch (e) {
            console.error('Failed to restart recognition:', e);
            setIsRecording(false);
          }
        }
      };
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
  }, [input, interimText]);

  const handleMicClick = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert('Voice input is not supported in your browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    if (isRecording) {
      try {
        recognitionRef.current?.stop();
        setIsRecording(false);
        setInterimText('');
      } catch (e) {
        console.error('Error stopping recognition:', e);
        setIsRecording(false);
      }
    } else {
      try {
        setInput('');
        setInterimText('');
        inputRef.current = '';
        recognitionRef.current?.start();
        setIsRecording(true);
      } catch (e) {
        console.error('Error starting recognition:', e);
        alert('Could not start voice input. Please check your microphone permissions.');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !userDetails.name.trim() || !userDetails.email.trim()) return;

    setIsProcessing(true);
    
    console.log('Submitting:', { ...userDetails, message: input });
    
    const result = await generateSolwasteSolution(input);
    setSolution(result);
    setIsProcessing(false);
  };

  const reset = () => {
    setSolution(null);
    setInput('');
    setUserDetails({ name: '', email: '', phone: '' });
  };
  
  // Check if form is valid
  const isFormValid = userDetails.name.trim() !== '' && 
                      userDetails.email.trim() !== '' && 
                      input.trim() !== '';

  return (
    <section id="vent" className="relative min-h-screen bg-charcoal text-cream flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/ventBackgroung.jpg" 
            alt="Waste Management Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/90" />
        </div>
        
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

              <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-sm p-6 md:p-10 rounded-3xl border border-white/10">
                
                {/* Contact Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Name */}
                  <div className="relative group">
                    <User size={18} className="absolute left-0 top-3 text-gray-500 group-focus-within:text-gold transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Your Name *"
                      value={userDetails.name}
                      onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                      disabled={isProcessing}
                      className="w-full bg-transparent border-b border-gray-600 py-2 pl-8 focus:outline-none focus:border-gold transition-colors text-cream placeholder-gray-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative group">
                    <Mail size={18} className="absolute left-0 top-3 text-gray-500 group-focus-within:text-gold transition-colors" />
                    <input 
                      type="email" 
                      placeholder="Email ID *"
                      value={userDetails.email}
                      onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                      disabled={isProcessing}
                      className="w-full bg-transparent border-b border-gray-600 py-2 pl-8 focus:outline-none focus:border-gold transition-colors text-cream placeholder-gray-500"
                    />
                  </div>

                  {/* Phone (Optional) */}
                  <div className="relative group md:col-span-2">
                    <Phone size={18} className="absolute left-0 top-3 text-gray-500 group-focus-within:text-gold transition-colors" />
                    <input 
                      type="tel" 
                      placeholder="Phone Number (Optional)"
                      value={userDetails.phone}
                      onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                      disabled={isProcessing}
                      className="w-full bg-transparent border-b border-gray-600 py-2 pl-8 focus:outline-none focus:border-gold transition-colors text-cream placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* Message Section */}
                <div className="relative mb-6">
                  <label className="text-xs uppercase tracking-wider text-gray-400 mb-3 block">Your Message *</label>
                  <div className={`relative border rounded-xl transition-all duration-300 ${isRecording ? 'border-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'border-gray-700 bg-black/20'}`}>
                    <div className="relative">
                      <textarea
                          ref={textareaRef}
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Type or click the mic to speak..."
                          className="w-full bg-transparent p-4 pr-16 focus:outline-none text-lg font-light min-h-[100px] resize-none rounded-xl text-cream placeholder-gray-600"
                          disabled={isProcessing}
                      />
                      
                      {/* Show real-time speech recognition text */}
                      {isRecording && (
                        <div className="absolute left-4 top-4 right-16 pointer-events-none text-lg font-light z-20 whitespace-pre-wrap break-words">
                          <span className="text-cream">{input}</span>
                          <span className="text-gold" style={{ textShadow: '0 0 10px rgba(212,175,55,0.5)' }}>{interimText}</span>
                        </div>
                      )}
                      
                      <button
                          type="button"
                          onClick={handleMicClick}
                          className={`absolute right-3 top-3 p-3 rounded-full transition-all duration-300 ${
                              isRecording 
                              ? 'bg-red-500 text-white animate-pulse' 
                              : 'text-gray-500 hover:text-gold hover:bg-white/5'
                          }`}
                          title={isRecording ? "Stop Recording" : "Start Voice Input"}
                      >
                          <Mic size={20} />
                      </button>
                      
                      {isRecording && (
                        <div className="absolute bottom-3 right-4 text-xs text-gold animate-pulse flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full inline-block"></span>
                          Recording...
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col items-center">
                    <button
                        type="submit"
                        disabled={!isFormValid || isProcessing}
                        className={`
                            group relative overflow-hidden rounded-full px-10 py-5 bg-gold text-charcoal font-bold text-sm tracking-[0.2em] uppercase transition-all
                            ${(!isFormValid || isProcessing) ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105'}
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
                    
                    {!isFormValid && (
                      <p className="text-center text-xs text-red-400 mt-4 font-medium">
                        ⚠️ Required: Name, Email, and Message
                      </p>
                    )}
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
