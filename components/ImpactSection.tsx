import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Wind } from "lucide-react";
import { SectionId } from "../types";

const SparkIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
      stroke="#D4AF37"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const initialStats = [
  { label: "Waste Saved", value: 12455, unit: "kg", icon: <Leaf className="text-moss" /> },
  { label: "CO₂ Prevented", value: 8326, unit: "kg", icon: <Wind className="text-blue-500" /> },
  { label: "Energy Gen.", value: 456, unit: "kWh", icon: <SparkIcon /> }
];

const StatCard = ({ stat }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
    <div className="flex justify-between items-start mb-4">
      <span className="opacity-60 text-xs uppercase tracking-widest group-hover:text-gold transition-colors">
        {stat.label}
      </span>
      {stat.icon}
    </div>
    <div className="text-4xl lg:text-5xl font-serif font-bold tabular-nums">
      {stat.value.toLocaleString()}{" "}
      <span className="text-lg font-sans font-normal opacity-50">{stat.unit}</span>
    </div>
  </div>
);

const ImpactSection = () => {
  const { scrollYProgress } = useScroll();
  const mapScale = useTransform(scrollYProgress, [0.5, 0.9], [0.95, 1.03]);

  const [stats, setStats] = useState(initialStats);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev =>
        prev.map(s => ({
          ...s,
          value: s.value + Math.floor(Math.random() * 3)
        }))
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id={SectionId.IMPACT} className="py-24 bg-moss text-cream relative overflow-hidden">
      {/* BG gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/20 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-2">Vision 2047</h2>
            <p className="text-gold font-light tracking-wide">By the time India turns 100, we aim for zero waste.</p>
          </div>

          <div className="hidden md:block text-right">
            <p className="text-xs opacity-60 tracking-widest mb-2">LIVE NETWORK STATUS</p>
            <div className="flex items-center justify-end gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]" />
              <span className="font-mono text-sm">ONLINE</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} />
          ))}
        </div>

        {/* India Map */}
        <div className="relative h-[480px] w-full bg-charcoal/30 rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center">

          <motion.div style={{ scale: mapScale }} className="w-full h-full flex items-center justify-center">

            <svg
              viewBox="0 0 700 850"
              className="h-[85%] opacity-90 drop-shadow-2xl"
              fill="none"
              strokeWidth="8"
              stroke="#D4AF37"
            >
              {/* INDIA MAP — accurate outline */}
              <path
                d="
                  M441 50 L460 80 L480 110 L470 140 L490 170 L520 190 L530 220 L540 260 
                  L560 300 L580 330 L600 360 L590 390 L610 420 L640 450 L650 480 L630 510 
                  L610 540 L600 580 L590 620 L560 650 L520 680 L480 700 L440 720 L400 740 
                  L360 760 L320 770 L280 780 L240 770 L200 750 L170 720 L150 690 L140 650 
                  L130 610 L120 570 L110 530 L120 490 L140 460 L160 430 L170 390 L160 350 
                  L150 310 L140 270 L150 240 L160 200 L170 160 L200 130 L240 110 L280 90 
                  L320 70 L360 60 L400 55 Z
                "
                stroke="#D4AF37"
                fill="none"
              />

              {/* Green radiating pulses */}
              {[
                { cx: 360, cy: 420 },
                { cx: 300, cy: 300 },
                { cx: 420, cy: 600 }
              ].map((p, i) => (
                <motion.circle
                  key={i}
                  cx={p.cx}
                  cy={p.cy}
                  r="0"
                  fill="#4ade80"
                  initial={{ opacity: 0, r: 0 }}
                  whileInView={{ opacity: 0.12, r: 220 }}
                  transition={{ duration: 4 + i, delay: i * 0.5 }}
                />
              ))}

              {/* City nodes */}
              <circle cx="340" cy="260" r="10" fill="#D4AF37" className="animate-pulse" />
              <circle cx="300" cy="480" r="10" fill="#D4AF37" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
              <circle cx="420" cy="580" r="10" fill="#D4AF37" className="animate-pulse" style={{ animationDelay: "0.8s" }} />
              <circle cx="500" cy="350" r="10" fill="#D4AF37" className="animate-pulse" style={{ animationDelay: "1.2s" }} />

            </svg>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h1 className="text-4xl md:text-6xl font-serif text-white/5 tracking-[1em] font-bold">INDIA 2047</h1>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
