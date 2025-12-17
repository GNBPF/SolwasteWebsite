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
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-3xl text-base sm:text-lg md:text-xl text-cream/80 leading-relaxed text-center px-4"
          >
            India's waste crisis isn't just about garbage. It's about a future we can't afford to lose. It's time to rethink organic waste management for Vision 2047.
          </motion.p>
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

      {/* Section: The Invisible Crisis */}
      <section className="relative py-20 lg:py-32 px-4 lg:px-40 bg-charcoal border-t border-moss/20" id="crisis">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-cream lg:text-4xl lg:text-5xl font-google-sans">
              The Invisible Crisis We Step Over Every Day
            </h2>
            <div className="mt-4 h-1 w-24 rounded bg-gold"></div>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3">
            <AnimatedSection delay={0.2}>
              <div className="group relative flex flex-col gap-4 rounded-2xl border border-moss/20 bg-moss/5 p-8 transition-all duration-500 hover:border-gold/50 hover:bg-moss/10 hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <Trash2 className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-medium text-cream/60">Daily Waste Generation</p>
                  <p className="mt-2 text-4xl font-bold text-cream">1.5 Lakh <span className="text-xl text-cream/60">MT</span></p>
                  <p className="mt-2 text-sm text-gold font-medium flex items-center gap-1">
                    <TrendingDown className="w-4 h-4" /> +5% annually
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="group relative flex flex-col gap-4 rounded-2xl border border-moss/20 bg-moss/5 p-8 transition-all duration-500 hover:border-gold/50 hover:bg-moss/10 hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <Package className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-medium text-cream/60">Organic Composition</p>
                  <p className="mt-2 text-4xl font-bold text-cream">60-70%</p>
                  <p className="mt-2 text-sm text-gold font-medium flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" /> Critical Load
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="group relative flex flex-col gap-4 rounded-2xl border border-moss/20 bg-moss/5 p-8 transition-all duration-500 hover:border-gold/50 hover:bg-moss/10 hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-medium text-cream/60">Landfills Overflowing</p>
                  <p className="mt-2 text-4xl font-bold text-cream">3,000+</p>
                  <p className="mt-2 text-sm text-red-400 font-medium flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" /> Environmental Hazard
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section: Infrastructure */}
      <section className="relative py-20 px-4 lg:px-40 bg-moss/5" id="infrastructure">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col justify-center gap-6">
              <AnimatedSection>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-cream lg:text-5xl font-google-sans">
                  Segregation Is Not a Habit. <br/><span className="text-gold">It Is Infrastructure.</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="text-lg text-cream/80 leading-relaxed">
                  We blame citizens for not segregating, but we lack the systemic infrastructure to process segregated waste efficiently at scale. Without the right machinery, segregation is just a delay before mixing.
                </p>
              </AnimatedSection>
              <div className="grid gap-4">
                <AnimatedSection delay={0.3}>
                  <div className="flex items-start gap-4 rounded-xl bg-charcoal p-6 border border-moss/30 hover:border-gold/50 transition-all duration-300">
                    <Truck className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-cream">Broken Supply Chains</h3>
                      <p className="text-sm text-cream/70">Waste is often mixed during transport, completely negating household segregation efforts.</p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <div className="flex items-start gap-4 rounded-xl bg-charcoal p-6 border border-moss/30 hover:border-gold/50 transition-all duration-300">
                    <Hand className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-cream">Manual Limitations</h3>
                      <p className="text-sm text-cream/70">Human-dependent segregation is dangerously slow, inefficient, and error-prone.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
            <AnimatedSection delay={0.2}>
              <div className="relative min-h-[400px] overflow-hidden rounded-2xl border border-moss/30 bg-charcoal">
                <img 
                  alt="Infrastructure Failure" 
                  className="absolute inset-0 h-full w-full object-cover opacity-60" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP4pDsfud5LZYl4PeBBVO4qKvfH6J95qllGWPKwg1Jt-_J-RHpNIhNWnO4-S5uTJH7B4WP4kC9BTMm917mtzzRqdvUUgAmtHTff7U6_wz0D61o48rchQe6KI-cIpMuKSkqH_nCpx4iVFiqpK9JAb189zHDtEGKGa0gScXupJuf024Damm26d8mv4M2huWAgcvqIJMv37SthWSXE_9VhuC_rz5BdtpOxlMWwcZJ7_gtuqEFNoJbVCaBo28Y5gjLffin3I9bjDHaCIM"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 max-w-xs">
                  <div className="flex items-center gap-2 text-red-400 mb-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase">Health Hazard</span>
                  </div>
                  <p className="text-cream font-medium">Manual handling exposes millions of sanitation workers to toxic pathogens daily.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section: Comparison (The Pivot) */}
      <section className="py-20 lg:py-32 px-4 lg:px-40 bg-charcoal" id="comparison">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold text-sm font-bold uppercase tracking-wider">The Reality Check</span>
            <h2 className="mt-3 text-3xl font-bold text-cream lg:text-4xl lg:text-5xl font-google-sans">Why Ancient Methods Fail Modern Cities</h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Old Way */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col rounded-2xl border border-red-900/30 bg-red-950/10 p-8 lg:p-10 relative overflow-hidden h-full">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-red-400 mb-6">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">Traditional Approach</span>
                  </div>
                  <h3 className="text-2xl font-bold text-cream mb-2">Vermicompost Pits</h3>
                  <p className="text-cream/60 mb-8">Good for farms, disastrous for megacities.</p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-cream/80">
                      <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Takes 45-60 days</strong> to process one batch.</span>
                    </li>
                    <li className="flex items-start gap-3 text-cream/80">
                      <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span>Requires <strong>massive land area</strong> unavailable in urban centers.</span>
                    </li>
                    <li className="flex items-start gap-3 text-cream/80">
                      <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span>Produces methane and odors, leading to <strong>NIMBY protests</strong>.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
            {/* New Way */}
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col rounded-2xl border border-gold/40 bg-gradient-to-b from-gold/5 to-transparent p-8 lg:p-10 relative overflow-hidden shadow-[0_0_50px_-12px_rgba(212,175,55,0.2)] h-full">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-gold mb-6">
                    <Zap className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">The Future (Vision 2047)</span>
                  </div>
                  <h3 className="text-2xl font-bold text-cream mb-2">Machine-Based Systems</h3>
                  <p className="text-cream/70 mb-8">Scalable, efficient, and built for density.</p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-cream">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span>Process waste in <strong>24-48 hours</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3 text-cream">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span><strong>Compact footprint</strong> fits in basements of apartment complexes.</span>
                    </li>
                    <li className="flex items-start gap-3 text-cream">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span><strong>Odorless & Automated</strong>, creating usable compost instantly.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section: Solution (The Case for Machines) */}
      <section className="py-20 px-4 lg:px-40 bg-moss/5 border-y border-moss/20" id="solution">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
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
            <div className="lg:w-1/2 flex flex-col gap-8">
              <AnimatedSection delay={0.2}>
                <h2 className="text-3xl font-bold text-cream lg:text-4xl font-google-sans">
                  The Case for Robust, <br/>
                  <span className="text-gold">Machine-Based Composting Systems</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="text-cream/80 text-lg">
                  To meet the demands of 2047, we cannot rely on nature alone. We must accelerate it. Automated composting machines mimic the natural process but speed it up using controlled heat and airflow.
                </p>
              </AnimatedSection>
              <div className="space-y-6">
                <AnimatedSection delay={0.4}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 size-12 rounded-full bg-charcoal border border-moss/30 flex items-center justify-center text-gold">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-cream font-bold text-lg">Speed & Volume</h4>
                      <p className="text-sm text-cream/70">Handle tons of waste daily without waiting months for decomposition.</p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.5}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 size-12 rounded-full bg-charcoal border border-moss/30 flex items-center justify-center text-gold">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-cream font-bold text-lg">Data-Driven Management</h4>
                      <p className="text-sm text-cream/70">Smart sensors track waste intake, processing status, and output quality in real-time.</p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.6}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 size-12 rounded-full bg-charcoal border border-moss/30 flex items-center justify-center text-gold">
                      <Sprout className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-cream font-bold text-lg">Circular Economy</h4>
                      <p className="text-sm text-cream/70">Turns a liability (trash) into an asset (fertilizer) directly at the source.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Impact */}
      <section className="py-20 lg:py-32 px-4 lg:px-40 bg-charcoal" id="impact">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-cream lg:text-4xl lg:text-5xl mb-16 font-google-sans">What Are We Really Losing by Doing Nothing?</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <AnimatedSection delay={0.2}>
              <div className="bg-moss/5 rounded-2xl p-8 border-l-4 border-red-500 shadow-lg hover:scale-105 transition-all duration-300">
                <div className="mb-4 text-red-500">
                  <DollarSign className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-cream mb-2">Economic Hemorrhage</h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Billions spent annually on transporting water-heavy organic waste to landfills, only to spend billions more treating the resulting diseases.
                </p>
              </div>
            </AnimatedSection>
            {/* Card 2 */}
            <AnimatedSection delay={0.3}>
              <div className="bg-moss/5 rounded-2xl p-8 border-l-4 border-orange-500 shadow-lg hover:scale-105 transition-all duration-300">
                <div className="mb-4 text-orange-500">
                  <Heart className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-cream mb-2">Public Health Crisis</h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Rotting garbage breeds vectors for dengue, malaria, and typhoid. The "invisible" cost is paid in crowded hospital wards.
                </p>
              </div>
            </AnimatedSection>
            {/* Card 3 */}
            <AnimatedSection delay={0.4}>
              <div className="bg-moss/5 rounded-2xl p-8 border-l-4 border-yellow-500 shadow-lg hover:scale-105 transition-all duration-300">
                <div className="mb-4 text-yellow-500">
                  <CloudRain className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-cream mb-2">Climate Ticking Bomb</h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Landfills are the third-largest source of human-related methane emissions. We are cooking our own planet.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-4 lg:px-40 bg-gradient-to-b from-charcoal via-moss/10 to-charcoal overflow-hidden" id="act-now">
        {/* Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-charcoal to-charcoal pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-black text-cream mb-6 tracking-tight font-google-sans">
              Vision 2047: <br/>
              <span className="text-gold">A Cleaner Definition of Freedom</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-cream/80 mb-10 leading-relaxed">
              True independence is not just political. It is the freedom from filth, disease, and inefficiency. 
              By adopting modern technology today, we secure a pristine, healthy India for the centennial of our independence.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="bg-moss/10 backdrop-blur-md border border-moss/30 p-8 rounded-2xl max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-cream mb-4">The Call to Act—Now, Not in 2047</h3>
              <p className="text-sm text-cream/70 mb-6">Join the coalition of citizens demanding smart waste infrastructure in their municipalities.</p>
              <Link 
                to="/#contact"
                className="inline-block w-full sm:w-auto bg-gold hover:bg-gold/90 text-charcoal font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                Get Started with Solwaste
              </Link>
              <p className="mt-4 text-xs text-cream/50">Join thousands making waste-free communities a reality.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default VisionPage;