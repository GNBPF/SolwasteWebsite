import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Factory, Building2, ArrowRight, Zap, Users, Box } from 'lucide-react';

// --- Configuration: Vision 2047 Roadmap ---
const MILESTONES = [
  { 
    id: "phase1",
    year: "PHASE 1", 
    label: "Early Adoption", 
    sub: "Compost in Every Home",
    desc: "Target: 500+ Societies. Decentralized composters in residential complexes across Mumbai, Bangalore, and Delhi.",
    tags: ["Residential OWCs", "Housing Societies"],
    color: "text-gold",
    icon: Home
  },
  { 
    id: "phase2",
    year: "PHASE 2", 
    label: "Biogas-as-a-Service", 
    sub: "Neighborhoods Trading Waste for Energy",
    desc: "Community-scale biogas plants. Societies generate cooking gas and electricity from their own organic waste.",
    tags: ["Community Energy", "Circular Economy"],
    color: "text-terra",
    icon: Zap
  },
  { 
    id: "phase3",
    year: "PHASE 3", 
    label: "Circular Cities", 
    sub: "Powered by Leftovers",
    desc: "The ultimate goal. A futuristic India where entire skylines are powered by their own organic waste. A completely closed-loop, waste-neutral ecosystem.",
    tags: ["Circular Economy", "Futuristic Skyline"],
    color: "text-green-400",
    icon: Building2
  },
];

// --- Components ---

const MilestoneCard = ({ milestone, isActive, onClick }: any) => {
  const Icon = milestone.icon;
  
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative w-full text-left p-6 rounded-2xl border transition-all duration-500
        ${isActive 
          ? 'bg-white/10 border-gold shadow-[0_0_30px_rgba(212,175,55,0.3)]' 
          : 'bg-white/5 border-white/10 hover:border-white/20'
        }
      `}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
      layout
    >
      <motion.div 
        className="flex items-start gap-4"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: isActive ? 1 : 0.4 }}
      >
        <div className={`${milestone.color} mt-1`}>
          <Icon size={24} />
        </div>
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.3em] text-gold/60 mb-1">{milestone.year}</p>
          <h3 className={`text-xl font-serif mb-1 transition-colors ${isActive ? 'text-cream' : 'text-cream/60'}`}>
            {milestone.label}
          </h3>
          <p className={`text-sm font-light ${isActive ? 'text-gold' : 'text-gray-500'}`}>
            {milestone.sub}
          </p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-300 leading-relaxed mt-4 mb-3">
              {milestone.desc}
            </p>
            <div className="flex gap-2 flex-wrap">
              {milestone.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-xs text-gold">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const HolographicVisual = ({ activePhase }: { activePhase: string }) => {
  const renderVisual = () => {
    switch (activePhase) {
      case 'phase1':
        return (
          <motion.div
            key="phase1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Pulsating Home Icon */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute"
            >
              <Home size={120} className="text-gold/30" />
            </motion.div>
            
            {/* Floating particles around */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-gold rounded-full"
                initial={{ 
                  x: Math.cos(i * 45 * Math.PI / 180) * 100,
                  y: Math.sin(i * 45 * Math.PI / 180) * 100
                }}
                animate={{ 
                  y: [
                    Math.sin(i * 45 * Math.PI / 180) * 100,
                    Math.sin(i * 45 * Math.PI / 180) * 100 - 60,
                    Math.sin(i * 45 * Math.PI / 180) * 100
                  ],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        );
      
      case 'phase2':
        return (
          <motion.div
            key="phase2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Network Grid */}
            <svg className="w-full h-full opacity-30" viewBox="0 0 400 400">
              {/* Central Node */}
              <motion.circle
                cx="200"
                cy="200"
                r="15"
                fill="#D4AF37"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Connecting Lines & Nodes */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const x = 200 + Math.cos(angle * Math.PI / 180) * 120;
                const y = 200 + Math.sin(angle * Math.PI / 180) * 120;
                return (
                  <g key={i}>
                    <motion.line
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke="#D4AF37"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="10"
                      fill="#E07A5F"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    />
                  </g>
                );
              })}
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <Zap size={80} className="text-terra animate-pulse" />
            </div>
          </motion.div>
        );
      
      case 'phase3':
        return (
          <motion.div
            key="phase3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Skyline Silhouette */}
            <svg className="w-full h-2/3" viewBox="0 0 400 200">
              <motion.rect
                x="20"
                y="120"
                width="40"
                height="80"
                fill="#D4AF37"
                initial={{ height: 0 }}
                animate={{ height: 80 }}
                transition={{ duration: 0.6 }}
              />
              <motion.rect
                x="80"
                y="80"
                width="50"
                height="120"
                fill="#D4AF37"
                initial={{ height: 0 }}
                animate={{ height: 120 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
              <motion.rect
                x="150"
                y="60"
                width="60"
                height="140"
                fill="#D4AF37"
                initial={{ height: 0 }}
                animate={{ height: 140 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.rect
                x="230"
                y="90"
                width="45"
                height="110"
                fill="#D4AF37"
                initial={{ height: 0 }}
                animate={{ height: 110 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.rect
                x="295"
                y="100"
                width="50"
                height="100"
                fill="#D4AF37"
                initial={{ height: 0 }}
                animate={{ height: 100 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </svg>
            
            {/* Circular glow around city */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  'radial-gradient(circle, rgba(74,222,128,0.3) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(74,222,128,0.5) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(74,222,128,0.3) 0%, transparent 70%)',
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-charcoal to-moss/20 rounded-3xl border border-white/10 overflow-hidden">
      <AnimatePresence mode="wait">
        {renderVisual()}
      </AnimatePresence>
      
      {/* Year Label */}
      <div className="absolute bottom-8 right-8 text-right">
        <p className="text-6xl font-serif text-white/5 select-none">2047</p>
      </div>
    </div>
  );
};

// --- Main Component ---

const VisionMap = () => {
  const [activePhase, setActivePhase] = useState('phase1');

  return (
    <section className="py-24 bg-charcoal text-cream relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-moss/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">The Master Plan</span>
            <h2 className="text-4xl md:text-6xl font-serif mt-4 mb-6">Vision 2047</h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
              A Waste-Neutral, Energy-Positive India. Our roadmap to 2047: Compost in every home, Biogas in every neighborhood. Building circular cities powered by leftovers.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Milestone Cards */}
          <div className="space-y-4">
            {MILESTONES.map((milestone) => (
              <MilestoneCard
                key={milestone.id}
                milestone={milestone}
                isActive={activePhase === milestone.id}
                onClick={() => setActivePhase(milestone.id)}
              />
            ))}
          </div>

          {/* Right: Holographic Visual */}
          <div className="h-[500px] lg:h-[600px] sticky top-24">
            <HolographicVisual activePhase={activePhase} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMap;
