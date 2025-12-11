import React, { useState, useRef, useEffect } from 'react';
import { Mic, Send, Sparkles, X, User, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Configuration & Styles ---
const COLORS = {
  bg: '#0a1f14',
  gold: '#D4AF37',
  text: '#fdfbf7',
  error: '#ef4444'
};

const TheVent = () => {
  // --- State Management ---
  // We keep message separate to handle the complex speech logic easier
  const [message, setMessage] = useState(''); 
  const [interimText, setInterimText] = useState(''); // Shows text *while* speaking
  
  // User details
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [isRecording, setIsRecording] = useState(false);
  const [phase, setPhase] = useState<'input' | 'imploding' | 'solution'>('input');
  
  // Particles for background
  const [particles, setParticles] = useState<any[]>([]);

  const recognitionRef = useRef<any>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // --- 1. Initialize Background Particles (Client Side) ---
  useEffect(() => {
    setParticles([...Array(30)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: Math.random() * 0.5,
      duration: 5 + Math.random() * 5
    })));
  }, []);

  // --- 2. Speech Recognition Logic ---
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Browser compatibility check
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      console.warn('Speech recognition not supported in this browser');
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = 'en-US';

    recognitionRef.current.onresult = (event: any) => {
      let interimTranscript = '';
      let finalTranscript = '';
      
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        } else {
          interimTranscript += transcript;
        }
      }
      
      if (finalTranscript) {
        setMessage(prev => prev + finalTranscript);
      }
      setInterimText(interimTranscript);
    };

    recognitionRef.current.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsRecording(false);
      setInterimText('');
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          // Already stopped
        }
      }
    };
    
    recognitionRef.current.onend = () => {
      setIsRecording(false);
      setInterimText('');
    };

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          // Already stopped
        }
      }
    };
  }, []);

  // --- Helper Functions ---
  
  const startRecording = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not available in your browser. Please use Chrome or Edge.');
      return;
    }
    
    setInterimText('');
    try {
      recognitionRef.current.start();
      setIsRecording(true);
    } catch (e: any) {
      console.error('Failed to start recording:', e);
      alert('Could not start microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (!recognitionRef.current) return;
    
    try {
      recognitionRef.current.stop();
    } catch (e) {
      // Already stopped
    }
    setIsRecording(false);
    setInterimText('');
  };

  const toggleMic = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  // Validation Check
  const isValid = userDetails.name.trim() !== '' && 
                  userDetails.email.trim() !== '' && 
                  (message.trim() !== '' || interimText !== '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    // Stop mic if running
    if (isRecording) stopRecording();

    console.log("Submitting:", { ...userDetails, message });

    // Start Animation
    setPhase('imploding');
    setTimeout(() => {
      setPhase('solution');
    }, 2000);
  };

  const reset = () => {
    setMessage('');
    setUserDetails({ name: '', email: '', phone: '' });
    setPhase('input');
  };

  // --- Render ---
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-12 overflow-hidden"
             style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      
      {/* Background Gradient */}
      <div className="absolute inset-0" 
           style={{ background: `linear-gradient(to bottom, ${COLORS.bg}, rgba(74, 93, 35, 0.2), ${COLORS.bg})` }} />
      
      {/* Background Particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{ x: p.x, y: p.y, scale: p.scale }}
            animate={{ y: [null, Math.random() * -100], opacity: [0, 0.8, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
            style={{ width: 3, height: 3, backgroundColor: COLORS.gold }}
          />
        ))}
      </div>

      <div className="max-w-3xl w-full relative z-10">
        <AnimatePresence mode="wait">
          
          {/* --- PHASE 1: INPUT FORM --- */}
          {phase === 'input' && (
            <motion.div
              key="input-phase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                Vent Your Waste Woes
              </h1>

              <form onSubmit={handleSubmit} className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl">
                
                {/* 1. Contact Details (The "Must Haves") */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Name */}
                  <div className="relative group">
                    <User size={18} className="absolute left-0 top-3 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Your Name *"
                      value={userDetails.name}
                      onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                      className="w-full bg-transparent border-b border-gray-600 py-2 pl-8 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative group">
                    <Mail size={18} className="absolute left-0 top-3 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors" />
                    <input 
                      type="email" 
                      placeholder="Email ID *"
                      value={userDetails.email}
                      onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                      className="w-full bg-transparent border-b border-gray-600 py-2 pl-8 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  {/* Phone (Optional) */}
                  <div className="relative group md:col-span-2">
                    <Phone size={18} className="absolute left-0 top-3 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors" />
                    <input 
                      type="tel" 
                      placeholder="Phone Number (Optional)"
                      value={userDetails.phone}
                      onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                      className="w-full bg-transparent border-b border-gray-600 py-2 pl-8 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                {/* 2. Message Area + Voice Input */}
                <div className="relative mb-8">
                  <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">Your Message *</label>
                  <div className={`relative border rounded-xl transition-all duration-300 ${isRecording ? 'border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'border-gray-700 bg-black/20'}`}>
                    
                    <div className="relative">
                      <textarea
                        ref={textareaRef}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type here or click the mic to speak..."
                        className="w-full bg-transparent p-4 pr-16 focus:outline-none text-lg font-light min-h-[120px] resize-none rounded-xl relative z-10"
                        style={{ color: COLORS.text }}
                      />
                      
                      {/* Show real-time speech recognition text */}
                      {isRecording && (
                        <div className="absolute left-4 top-4 right-16 pointer-events-none text-lg font-light z-20 whitespace-pre-wrap break-words">
                          <span style={{ color: COLORS.text }}>{message}</span>
                          <span style={{ color: COLORS.gold, textShadow: '0 0 10px rgba(212,175,55,0.5)' }}>{interimText}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Mic Button Inside Text Area */}
                    <button
                      type="button"
                      onClick={toggleMic}
                      className={`absolute right-3 top-3 p-3 rounded-full transition-all duration-300 ${
                        isRecording 
                        ? 'bg-red-500 text-white animate-pulse' 
                        : 'text-gray-400 hover:text-[#D4AF37] hover:bg-white/5'
                      }`}
                    >
                      <Mic size={20} />
                    </button>
                    
                    {/* Recording Indicator */}
                    {isRecording && (
                      <div className="absolute bottom-3 right-4 text-xs text-[#D4AF37] animate-pulse flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full inline-block"></span>
                        Recording...
                      </div>
                    )}
                  </div>
                </div>

                {/* 3. Submit Button */}
                <div className="flex justify-center">
                  <motion.button
                    type="submit"
                    disabled={!isValid}
                    className="w-full md:w-auto px-12 py-4 rounded-full font-bold text-sm tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3"
                    style={{ 
                      backgroundColor: isValid ? COLORS.gold : '#374151',
                      color: isValid ? COLORS.bg : '#9ca3af',
                      cursor: isValid ? 'pointer' : 'not-allowed',
                      opacity: isValid ? 1 : 0.7
                    }}
                    whileHover={isValid ? { scale: 1.02 } : {}}
                    whileTap={isValid ? { scale: 0.98 } : {}}
                  >
                    Send to The Void <Send size={16} />
                  </motion.button>
                </div>
                
                {!isValid && (
                  <p className="text-center text-xs text-red-400 mt-4 font-medium">
                    ⚠️ Required: Name, Email, and Message
                  </p>
                )}

              </form>
            </motion.div>
          )}

          {/* --- PHASE 2: IMPLOSION ANIMATION --- */}
          {phase === 'imploding' && (
            <motion.div
              key="imploding-phase"
              className="flex items-center justify-center min-h-[400px]"
            >
              <div className="relative w-64 h-64">
                {[...Array(40)].map((_, i) => {
                  const angle = (i / 40) * 360 * (Math.PI / 180);
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{ left: '50%', top: '50%', backgroundColor: COLORS.gold }}
                      initial={{ x: Math.cos(angle) * 150, y: Math.sin(angle) * 150, opacity: 1, scale: 1 }}
                      animate={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                      transition={{ duration: 1.5, delay: i * 0.01, ease: "easeInOut" }}
                    />
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* --- PHASE 3: SOLUTION REVEAL --- */}
          {phase === 'solution' && (
            <motion.div
              key="solution-phase"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center max-w-2xl"
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center"
                   style={{ backgroundColor: COLORS.gold, boxShadow: `0 0 40px ${COLORS.gold}60` }}>
                <Sparkles size={48} style={{ color: COLORS.bg }} />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ color: COLORS.gold }}>
                Problem Received.
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Thanks, {userDetails.name}. We have analyzed your request.<br/>
                We will contact you at <span className="text-white border-b border-white/20">{userDetails.email}</span> with a solution.
              </p>
              
              <button 
                onClick={reset}
                className="text-gray-500 hover:text-[#D4AF37] text-sm uppercase tracking-widest flex items-center gap-2 mx-auto"
              >
                <X size={16} /> Submit Another
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
};

export default TheVent;