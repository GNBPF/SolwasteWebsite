import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { AlertTriangle, TrendingDown, Droplet, Wind, Bug, Clock, Shield, Leaf, CheckCircle2, Trash2, Package, MapPin, Truck, Hand, Activity, Zap, BarChart3, Sprout, DollarSign, Heart, CloudRain, X } from 'lucide-react';
import SEO from '../components/SEO';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';

const VisionPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Vision 2047 - Are We Really Free If Our Waste Still Owns Us?",
    "description": "By 2047, India will mark 100 years of Independence. But can a nation truly call itself free if its waste continues to choke its land, poison its water, and silently compromise the health of its children?",
    "url": "https://solwaste.co/vision-2047",
    "mainEntity": {
      "@type": "Organization",
      "name": "Solwaste",
      "mission": "Building a waste-free India by 2047"
    }
  };

  // Animated section component
  const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <main className="bg-charcoal">
      <SEO 
        title="Vision 2047 | Are We Really Free If Our Waste Still Owns Us?"
        description="By 2047, India will mark 100 years of Independence. But can a nation truly call itself free if its waste continues to choke its land, poison its water, and silently compromise the health of its children?"
        keywords="Vision 2047, waste free India, waste management crisis, organic waste solutions, India independence, sustainable India, waste infrastructure, public health India, composting machines, zero waste 2047"
        ogImage="https://solwaste.co/og-vision.png"
        schema={schema}
      />

      <Navbar />

      {/* Hero Section */}
      <header className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/80 to-charcoal z-10"></div>
          <img 
            alt="Waste Crisis Background" 
            className="h-full w-full object-cover grayscale opacity-60" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj1PmBFa8JWyhXLUcWJg07LPrbGbjDkDLkH0fGvoxEqQZTD1B2BCqQzA4uJt3YdUbzO_hMQJgvExD7rmppx5RmxMIuH1bkcX4H4LKO6VmLHrfZgk9jkdEF-ldMdnt3yr8-6CPtddI8HETM_7C4r8odvQ3LF-rwEZO1ZLh6bAcLQi1spRr_JILcwJdZL9PNDRLkbmdw_MI4PixZezLBS3qdIzNpfazASiBlaRy8A0onsqcyelCDbWr5Rd79hsejKPp82U2_ySQbz3E"
          />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-6 sm:gap-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-cream font-google-sans text-center px-4"
          >
            Are We Really Free If Our <span className="text-gold">Waste</span> Still Owns Us?
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-3xl text-base sm:text-lg md:text-xl text-cream/80 leading-relaxed text-center px-4 space-y-4"
          >
            <p>In 2047, India will mark <span className="text-gold font-semibold">100 years of Independence</span>.</p>
            <p>A century of freedom. A century of progress. A century of promise.</p>
            <p>But here's an uncomfortable question we must ask ourselves—<span className="text-cream font-semibold">can a nation truly call itself free if its waste continues to choke its land, poison its water, and silently compromise the health of its children?</span></p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
          >
            <button 
              onClick={() => {
                const element = document.getElementById('crisis');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex h-12 sm:h-14 items-center justify-center rounded-xl bg-gold px-6 sm:px-8 text-sm sm:text-base font-bold text-charcoal transition-all hover:scale-105 hover:bg-gold/90 shadow-lg cursor-pointer" 
            >
              Explore the Crisis
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('solution');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex h-12 sm:h-14 items-center justify-center rounded-xl border-2 border-moss bg-moss/20 px-6 sm:px-8 text-sm sm:text-base font-bold text-cream hover:bg-moss/30 transition-colors backdrop-blur-sm cursor-pointer" 
            >
              See the Solution
            </button>
          </motion.div>
        </div>
      </header>

      {/* Waste Mirror Statement */}
      <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-charcoal to-moss/10">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cream leading-relaxed font-light">
              Waste is not a side issue anymore.{' '}
              <span className="font-bold text-gold">It is a mirror.</span>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-cream/70 mt-6 leading-relaxed">
              It reflects how we live, how we consume, and how responsibly we think about tomorrow.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section: The Invisible Crisis */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-charcoal border-t border-moss/20" id="crisis">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-cream font-google-sans">
              The Invisible Crisis We Step Over Every Day
            </h2>
            <div className="mt-6 h-1 w-24 rounded bg-gold"></div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="mb-12">
            <p className="text-lg sm:text-xl text-cream/90 leading-relaxed max-w-4xl">
              India generates millions of tonnes of waste every year, and nearly <span className="text-gold font-semibold">50–60%</span> of it is organic food waste—vegetable peels, leftovers, spoiled food, garden waste. This waste is not inert. It is alive. It decomposes, ferments, leaks, attracts vectors, and releases gases.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mb-8">
            <p className="text-xl sm:text-2xl text-cream/90 font-semibold mb-6">When left unattended or mixed with dry waste:</p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection delay={0.4}>
              <div className="group relative flex flex-col gap-4 rounded-2xl border border-moss/20 bg-moss/5 p-6 sm:p-8 transition-all duration-500 hover:border-gold/50 hover:bg-moss/10 hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <Bug className="w-7 h-7" />
                </div>
                <p className="text-cream/90 leading-relaxed">
                  It becomes a <span className="text-cream font-semibold">breeding ground for mosquitoes and flies</span>
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <div className="group relative flex flex-col gap-4 rounded-2xl border border-moss/20 bg-moss/5 p-6 sm:p-8 transition-all duration-500 hover:border-gold/50 hover:bg-moss/10 hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <Wind className="w-7 h-7" />
                </div>
                <p className="text-cream/90 leading-relaxed">
                  It releases <span className="text-cream font-semibold">methane</span>, a greenhouse gas far more potent than CO₂
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <div className="group relative flex flex-col gap-4 rounded-2xl border border-moss/20 bg-moss/5 p-6 sm:p-8 transition-all duration-500 hover:border-gold/50 hover:bg-moss/10 hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <Droplet className="w-7 h-7" />
                </div>
                <p className="text-cream/90 leading-relaxed">
                  It contaminates <span className="text-cream font-semibold">soil and groundwater</span> through leachate
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.7}>
              <div className="group relative flex flex-col gap-4 rounded-2xl border border-moss/20 bg-moss/5 p-6 sm:p-8 transition-all duration-500 hover:border-gold/50 hover:bg-moss/10 hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <AlertTriangle className="w-7 h-7" />
                </div>
                <p className="text-cream/90 leading-relaxed">
                  It creates persistent <span className="text-cream font-semibold">foul odours</span>, making living spaces unhealthy
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.8} className="mt-12 text-center">
            <p className="text-xl sm:text-2xl md:text-3xl text-gold font-bold italic">
              The tragedy? Most of this damage is completely avoidable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section: Infrastructure */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-moss/5" id="infrastructure">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-cream font-google-sans">
              Segregation Is Not a Habit. <br/><span className="text-gold">It Is Infrastructure.</span>
            </h2>
            <div className="mt-6 h-1 w-24 rounded bg-gold"></div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="mb-12">
            <p className="text-lg sm:text-xl text-cream/90 leading-relaxed max-w-4xl">
              For decades, we have been told to "segregate at source." Yet, segregation alone without systems is like good intention without execution.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mb-8">
            <p className="text-xl text-cream/90 font-semibold mb-6">In large residential societies, townships, campuses, hotels, institutions, and commercial complexes:</p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mb-12">
            <AnimatedSection delay={0.4}>
              <div className="rounded-2xl border border-moss/20 bg-charcoal p-6 hover:border-gold/50 transition-all duration-300">
                <div className="w-3 h-3 bg-gold rounded-full mb-3"></div>
                <p className="text-cream/90 leading-relaxed">Manual segregation <span className="font-semibold">fails due to scale</span></p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <div className="rounded-2xl border border-moss/20 bg-charcoal p-6 hover:border-gold/50 transition-all duration-300">
                <div className="w-3 h-3 bg-gold rounded-full mb-3"></div>
                <p className="text-cream/90 leading-relaxed">Human dependency leads to <span className="font-semibold">inconsistency</span></p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <div className="rounded-2xl border border-moss/20 bg-charcoal p-6 hover:border-gold/50 transition-all duration-300">
                <div className="w-3 h-3 bg-gold rounded-full mb-3"></div>
                <p className="text-cream/90 leading-relaxed">Centralized pits <span className="font-semibold">overflow</span></p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.7}>
              <div className="rounded-2xl border border-moss/20 bg-charcoal p-6 hover:border-gold/50 transition-all duration-300">
                <div className="w-3 h-3 bg-gold rounded-full mb-3"></div>
                <p className="text-cream/90 leading-relaxed">Open dumping invites <span className="font-semibold">pests and complaints</span></p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.8}>
              <div className="rounded-2xl border border-moss/20 bg-charcoal p-6 hover:border-gold/50 transition-all duration-300">
                <div className="w-3 h-3 bg-gold rounded-full mb-3"></div>
                <p className="text-cream/90 leading-relaxed">Good intentions collapse under <span className="font-semibold">bad systems</span></p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.9} className="text-center mt-8">
            <p className="text-xl sm:text-2xl text-cream/80 font-semibold italic">
              Good intentions collapse under bad systems.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section: Why Vermicompost Pits Don't Scale */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-cream font-google-sans">
              Why <span className="text-red-400">Vermicompost Pits</span> Don't Scale for Modern India
            </h2>
            <div className="mt-6 h-1 w-24 rounded bg-gold"></div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="mb-12">
            <p className="text-lg sm:text-xl text-cream/90 leading-relaxed max-w-4xl">
              Vermicomposting is often romanticized as a universal solution. While it works for small households and controlled environments, it <span className="text-red-400 font-semibold">fails dramatically at scale</span>.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mb-8">
            <p className="text-xl text-cream/90 font-semibold mb-6">In large residential and institutional setups, vermicompost pits:</p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { text: "Cannot handle daily high-volume organic waste", icon: TrendingDown },
              { text: "Require constant manual monitoring and care", icon: Clock },
              { text: "Are highly sensitive to moisture, temperature, and contamination", icon: AlertTriangle },
              { text: "Become unhygienic if even slightly mismanaged", icon: Bug },
              { text: "Often turn into odour hotspots instead of solutions", icon: Wind }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={0.4 + index * 0.1}>
                <div className="bg-red-900/10 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <item.icon className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    <p className="text-cream/90 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            <AnimatedSection delay={0.9}>
              <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 h-full flex items-center">
                <p className="text-cream/90 leading-relaxed">
                  What starts as a <span className="text-gold font-semibold">green initiative</span> slowly becomes a <span className="text-red-400 font-semibold">health liability</span>.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={1} className="mt-12 text-center">
            <p className="text-lg sm:text-xl text-cream/70 italic">
              India's urban future cannot rely on fragile systems meant for smaller, simpler times.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section: Solution (The Case for Machines) */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-moss/5 border-y border-moss/20" id="solution">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
            <AnimatedSection className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-moss/30">
                <img 
                  alt="Machine Based Composting" 
                  className="w-full h-auto object-cover opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBubkVEBN9OenhLfNEQkREweG2TmriMrq-d117-KQViN8uq16DPEpYtgkBeYGBcP5c6m1UMRWPGqX2B-EV7MvlZgiON3ecZQPC1A7h-710RzwcHQ8gUCcQvfc3ogY2xSJykkbvRmtm9Poh-H7SBVCCW-j31YRLNuPdaX4OSdPlPo4TdIGm-f3CVUaSFS4S2lxSUM6PiMUy4eqgPYvEpXpEDvrHCsUypb2ZCVlCXeo_6aQaLy33rkM42RsGCtPnhvwM77IGUcLY48_Y"
                />
                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay"></div>
              </div>
            </AnimatedSection>
            <div className="lg:w-1/2 flex flex-col gap-4">
              <AnimatedSection delay={0.2}>
                <h2 className="text-2xl sm:text-3xl font-bold text-cream font-google-sans leading-tight">
                  The Case for Robust, <br/>
                  <span className="text-gold">Machine-Based Composting Systems</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="text-base sm:text-lg text-cream/90 leading-relaxed">
                  Modern organic waste composting machines are not luxuries. <span className="text-gold font-semibold">They are essential urban infrastructure.</span>
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <p className="text-base text-cream/90 font-semibold mb-2">These systems:</p>
              </AnimatedSection>
              <div className="space-y-2">
                {[
                  "Process food waste on-site, daily, and hygienically",
                  "Eliminate foul smells and pest breeding",
                  "Reduce waste volume by up to 90%",
                  "Convert waste into safe, usable compost within hours or days",
                  "Minimise human handling and health risks"
                ].map((text, index) => (
                  <AnimatedSection key={index} delay={0.5 + index * 0.1}>
                    <div className="flex items-start gap-3 rounded-lg bg-charcoal p-3 border border-moss/30 hover:border-gold/50 transition-all duration-300">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <p className="text-cream/90 text-sm sm:text-base">{text}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              <AnimatedSection delay={1}>
                <p className="text-sm sm:text-base text-cream/80 leading-relaxed mt-3">
                  Most importantly, they <span className="font-semibold text-gold">close the waste loop at the source</span>—before garbage trucks, landfills, and open dumps ever come into the picture.
                </p>
              </AnimatedSection>
            </div>
          </div>
          <AnimatedSection delay={1.1} className="mt-8">
            <p className="text-lg sm:text-xl text-gold/90 font-bold text-center">
              This is not just waste management. This is risk management for public health.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section: What Are We Losing */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-charcoal" id="impact">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cream font-google-sans mb-6">
              What Are We Really <span className="text-red-400">Losing</span> by Doing Nothing?
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-24 rounded bg-gold"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="mb-12">
            <p className="text-lg sm:text-xl text-cream/90 leading-relaxed max-w-4xl mx-auto text-center">
              When organic waste is ignored or mishandled, we lose:
            </p>
          </AnimatedSection>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              { loss: "Public health", to: "preventable diseases", color: "red" },
              { loss: "Children's safety", to: "vector-borne infections", color: "orange" },
              { loss: "Urban livability", to: "smells and filth", color: "yellow" },
              { loss: "Environmental capital", to: "landfills and emissions", color: "green" },
              { loss: "Soil fertility", to: "by discarding what could regenerate it", color: "blue" }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={0.3 + index * 0.1}>
                <div className={`bg-${item.color}-900/10 border-l-4 border-${item.color}-500 rounded-r-2xl p-6 hover:bg-${item.color}-900/20 transition-all duration-300`}>
                  <p className="text-lg sm:text-xl text-cream">
                    <span className="font-bold">{item.loss}</span>{' '}
                    <span className="text-cream/60">to</span>{' '}
                    <span className="text-cream/90">{item.to}</span>
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.9} className="mt-12">
            <p className="text-xl sm:text-2xl text-cream/80 font-semibold leading-relaxed text-center">
              And perhaps most dangerously—<span className="text-red-400">we lose time.</span> Time that our children will not get back.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision 2047: A Cleaner Definition of Freedom */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-charcoal via-moss/20 to-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-moss/10" />
        
        <div className="relative z-10 mx-auto max-w-6xl">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cream font-google-sans mb-6">
              <span className="text-cream">Vision 2047:</span>{' '}
              <span className="bg-gradient-to-r from-gold via-yellow-500 to-gold bg-clip-text text-transparent">
                A Cleaner Definition of Freedom
              </span>
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-24 rounded bg-gold"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="text-center mb-12">
            <p className="text-xl sm:text-2xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
              By 2047, India does not need more speeches about cleanliness.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mb-12">
            <p className="text-xl text-cream/90 font-semibold mb-6 text-center">India needs:</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              "Waste-free residential ecosystems",
              "Zero-organic-waste-to-landfill policies",
              "Mandatory on-site composting for bulk generators",
              "Cities designed for prevention, not reaction"
            ].map((need, index) => (
              <AnimatedSection key={index} delay={0.4 + index * 0.1}>
                <div className="bg-gradient-to-br from-moss/40 to-moss/20 border border-gold/30 rounded-2xl p-6 hover:border-gold/60 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="w-8 h-8 text-gold flex-shrink-0" />
                    <p className="text-cream text-lg font-semibold">{need}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.8} className="text-center">
            <p className="text-xl sm:text-2xl text-cream/80 leading-relaxed max-w-4xl mx-auto">
              True freedom is not just political. True freedom is the ability to <span className="text-blue-400 font-semibold">breathe clean air</span>,{' '}
              <span className="text-cyan-400 font-semibold">drink uncontaminated water</span>, and let{' '}
              <span className="text-green-400 font-semibold">children play</span> without invisible health threats lurking in waste corners.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gentle Satire, Hard Truth */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charcoal to-moss/10">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-cream font-google-sans mb-6">
              Gentle Satire, <span className="text-gold">Hard Truth</span>
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-24 rounded bg-gold"></div>
            </div>
          </AnimatedSection>

          <div className="space-y-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="bg-moss/10 border-l-4 border-cream/30 rounded-r-2xl p-6">
                <p className="text-xl text-cream/90 leading-relaxed">
                  We celebrate independence with flags, parades, and slogans.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-moss/10 border-l-4 border-cream/30 rounded-r-2xl p-6">
                <p className="text-xl text-cream/90 leading-relaxed">
                  But if our garbage still travels kilometres to rot in landfills…
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-moss/10 border-l-4 border-cream/30 rounded-r-2xl p-6">
                <p className="text-xl text-cream/90 leading-relaxed">
                  If our societies still argue about smells every monsoon…
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-moss/10 border-l-4 border-cream/30 rounded-r-2xl p-6">
                <p className="text-xl text-cream/90 leading-relaxed">
                  If mosquitoes still thrive because food waste was "someone else's problem"…
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6} className="text-center mt-12">
              <p className="text-xl sm:text-2xl text-cream/80 font-bold leading-relaxed">
                Then we must ask—are we <span className="text-gold">independent</span>, or just <span className="text-red-400">outsourcing our mess</span>?
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Call to Act */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-moss via-moss/80 to-charcoal overflow-hidden" id="act-now">
        <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent" />
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cream/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream font-google-sans mb-6">
              The Call to Act—<span className="text-gold">Now, Not in 2047</span>
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-24 rounded bg-gold"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="text-center mb-12">
            <p className="text-xl sm:text-2xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
              Vision 2047 will not be achieved by intention alone.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mb-12">
            <p className="text-xl text-cream/90 font-semibold mb-6 text-center">It will be achieved by:</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              "Investing in robust waste systems today",
              "Treating organic waste as a resource, not a nuisance",
              "Choosing machines and infrastructure that scale with India's reality"
            ].map((action, index) => (
              <AnimatedSection key={index} delay={0.4 + index * 0.1} className="h-full">
                <div className="bg-cream/10 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 hover:bg-cream/20 hover:border-gold/60 transition-all duration-500 hover:scale-105 h-full flex items-center justify-center">
                  <p className="text-cream text-lg font-semibold text-center">{action}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.7} className="text-center mb-12">
            <p className="text-xl sm:text-2xl text-cream/80 leading-relaxed max-w-4xl mx-auto">
              Because the future will not forgive us for the problems we had the technology to solve—<span className="text-gold font-semibold">but chose not to.</span>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.9} className="text-center mb-8">
            <p className="text-2xl sm:text-3xl text-gold/90 font-bold">
              A cleaner India is not a dream. It is a decision.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={1.0} className="text-center mb-12">
            <p className="text-xl sm:text-2xl text-cream/80 leading-relaxed">
              And that decision must begin <span className="text-gold font-bold">at the source</span>—<span className="text-gold font-bold">today</span>.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={1.1}>
            <div className="text-center">
              <Link 
                to="/#contact" 
                className="inline-block group"
              >
                <div className="bg-gold hover:bg-gold/90 text-charcoal rounded-2xl px-12 py-6 font-bold text-xl transition-all duration-500 shadow-2xl hover:shadow-gold/50 hover:scale-105">
                  <span className="flex items-center gap-3">
                    Start Your Waste-Free Journey
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </div>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default VisionPage;