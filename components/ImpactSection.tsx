import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Factory, Building2, ArrowRight, Zap, Users, Box } from 'lucide-react';

// --- Configuration: Grounded in your Real Website Data ---
const MILESTONES = [
  { 
    id: "phase1",
    year: "PHASE 1", 
    label: "Early Adoption", 
    sub: "Compost in Every Home",
    desc: "The foundation. We invite early adopters to transform waste at the source. Installing decentralized units in homes and societies to stop landfill reliance.",
    tags: ["Invitation for Early Adopters", "Decentralized Units"],
    color: "text-gold",
    icon: Home
  },
  { 
    id: "phase2",
    year: "PHASE 2", 
    label: "Biogas-as-a-Service", 
    sub: "Modular Expansion for Cities",
    desc: "Moving beyond hardware. We build neighborhood grids where communities don't just dump waste—they trade it. A scalable, modular energy service.",
    tags: ["Biogas-as-a-Service", "Modular Infrastructure"],
    color: "text-orange-400",
    icon: Factory
  },
  { 
    id: "phase3",
    year: "VISION 2047", 
    label: "Circular Cities", 
    sub: "Powered by Leftovers",
    desc: "The ultimate goal. A futuristic India where entire skylines are powered by their own organic waste. A completely closed-loop, waste-neutral ecosystem.",
    tags: ["Circular Economy", "Futuristic Skyline"],
    color: "text-green-400",
    icon: Building2
  },
];

// --- Components ---

const MilestoneCard = ({ data, isActive, onClick }) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl cursor-pointer overflow-hidden group transition-colors duration-500 border
        ${isActive ? "z-10 border-gold/50" : "z-0 border-white/5 hover:border-white/10 hover:bg-white/5"}
      `}
      initial={false}
    >
      {/* 1. The Sliding Glow Background */}
      {isActive && (
        <motion.div
          layoutId="activeCardGlow"
          className="absolute inset-0 bg-[#0f2e1f] shadow-[0_0_40px_rgba(212,175,55,0.15)] rounded-2xl"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
             <div className={`p-2 rounded-lg border ${isActive ? "bg-black/40 border-gold/30" : "bg-white/5 border-white/10"}`}>
                <data.icon size={20} className={isActive ? data.color : "text-white/50"} />
             </div>
             <span className={`text-sm font-mono tracking-widest uppercase ${isActive ? "text-white/60" : "text-white/20"}`}>
                {data.year}
             </span>
          </div>
        </div>

        <motion.h3 
          className={`text-xl sm:text-2xl md:text-3xl font-google-sans font-bold mb-1 ${isActive ? "text-white" : "text-white/60"}`}
          layout
        >
          {data.label}
        </motion.h3>
        
        <motion.div className={`text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 md:mb-4 ${data.color}`}>
            {data.sub}
        </motion.div>

        {/* Text Reveal Animation */}
        <div className="relative overflow-hidden">
             <motion.p 
               className="text-white/70 text-sm leading-relaxed mb-6 max-w-md"
               animate={{ 
                 opacity: isActive ? 1 : 0.4,
                 height: isActive ? "auto" : "0px",
                 marginBottom: isActive ? "24px" : "0px"
               }}
             >
               {data.desc}
             </motion.p>
        </div>

        {/* Tags / Pills from your screenshot */}
        <motion.div 
           className="flex flex-wrap gap-2 mt-auto"
           animate={{ opacity: isActive ? 1 : 0 }}
        >
           {data.tags.map((tag, i) => (
               <span key={i} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wide text-white/60">
                   {tag}
               </span>
           ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const HolographicVisual = ({ activeId }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
        {/* Base Grid */}
        <div className="absolute inset-0 opacity-20"
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />

        <AnimatePresence mode="wait">
            
            {/* Phase 1: The Home Unit */}
            {activeId === "phase1" && (
                <motion.div
                    key="anim1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.2, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative flex flex-col items-center"
                >
                    <div className="w-40 h-56 border-2 border-gold/40 rounded-xl relative flex items-center justify-center bg-[#0f2e1f]/50 backdrop-blur-sm">
                        <Home size={48} className="text-gold" />
                        {/* Organic Particles rising */}
                        {[...Array(5)].map((_, i) => (
                           <motion.div 
                              key={i}
                              className="absolute w-1 h-1 bg-gold rounded-full"
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: -60, opacity: [0, 1, 0] }}
                              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                           />
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <div className="text-gold font-mono text-xs mb-1">UNIT STATUS</div>
                        <div className="text-white text-lg font-bold">DECENTRALIZED</div>
                    </div>
                </motion.div>
            )}

            {/* Phase 2: The Connected Grid (Biogas-as-a-Service) */}
            {activeId === "phase2" && (
                <motion.div
                    key="anim2"
                    className="relative w-full h-full flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Central Plant */}
                    <div className="absolute z-10 w-24 h-24 bg-orange-500/10 rounded-full border border-orange-500/50 flex items-center justify-center">
                        <Factory size={32} className="text-orange-500" />
                    </div>
                    
                    {/* Rotating Connection Lines */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-[140px] h-[1px] bg-gradient-to-r from-orange-500/50 to-transparent origin-left left-1/2 top-1/2"
                            style={{ rotate: deg }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <motion.div 
                                className="w-2 h-2 bg-orange-400 rounded-full absolute right-0 -top-1"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                            />
                        </motion.div>
                    ))}
                     <div className="absolute bottom-12 text-center">
                        <div className="text-orange-400 font-mono text-xs mb-1">SERVICE LAYER</div>
                        <div className="text-white text-lg font-bold">INTERCONNECTED</div>
                    </div>
                </motion.div>
            )}

            {/* Phase 3: The Futuristic Skyline */}
            {activeId === "phase3" && (
                <motion.div
                    key="anim3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="relative w-full px-12 flex flex-col items-center"
                >
                    {/* Skyline SVG Silhouette */}
                    <div className="flex items-end gap-2 opacity-80">
                        <motion.div initial={{ height: 0 }} animate={{ height: 60 }} className="w-8 bg-green-500/20 border-t border-x border-green-500/50 rounded-t-sm" />
                        <motion.div initial={{ height: 0 }} animate={{ height: 100 }} className="w-12 bg-green-500/20 border-t border-x border-green-500/50 rounded-t-sm" />
                        <motion.div initial={{ height: 0 }} animate={{ height: 40 }} className="w-8 bg-green-500/20 border-t border-x border-green-500/50 rounded-t-sm" />
                        <motion.div initial={{ height: 0 }} animate={{ height: 80 }} className="w-10 bg-green-500/20 border-t border-x border-green-500/50 rounded-t-sm" />
                    </div>
                    
                    {/* Energy Flow Underneath */}
                    <div className="w-full h-[1px] bg-green-500 mt-1 relative overflow-hidden">
                        <motion.div 
                           className="absolute inset-0 bg-white blur-sm"
                           animate={{ x: ["-100%", "100%"] }}
                           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                    
                    <div className="mt-8 text-center">
                        <div className="text-green-400 font-mono text-xs mb-1">VISION 2047</div>
                        <div className="text-white text-lg font-bold">WASTE NEUTRAL</div>
                    </div>
                </motion.div>
            )}

        </AnimatePresence>
    </div>
  );
};

// --- Main Layout ---

const ImpactVision2047 = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="impact" className="bg-[#0a1f14] py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
                 <span className="text-gold font-mono text-xs tracking-widest uppercase">The Roadmap</span>
                 <h2 className="text-4xl md:text-5xl font-google-sans font-bold text-white mt-2">Vision <span className="text-green-400">2047</span></h2>
            </div>
            <div className="text-right hidden md:block">
                 <div className="text-white/40 text-sm">Building the infrastructure for</div>
                 <div className="text-white font-bold">A Waste-Neutral India</div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left: The Timeline Cards */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-4">
                {MILESTONES.map((item, idx) => (
                    <MilestoneCard 
                        key={item.id} 
                        data={item} 
                        isActive={idx === activeIdx} 
                        onClick={() => setActiveIdx(idx)} 
                    />
                ))}
            </div>

            {/* Right: The Hologram Visualization */}
            <div className="lg:col-span-7 h-[400px] lg:h-[500px] bg-black/20 rounded-3xl border border-white/5 backdrop-blur-sm relative overflow-hidden flex items-center justify-center shadow-2xl">
                <HolographicVisual activeId={MILESTONES[activeIdx].id} />
                
                {/* Status Indicator */}
                <div className="absolute top-6 right-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Live Vision Render</span>
                </div>
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default ImpactVision2047;