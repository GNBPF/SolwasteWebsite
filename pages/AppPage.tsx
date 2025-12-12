import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Apple, PlayCircle, Smartphone, Users, Leaf, TrendingUp, Home as HomeIcon, Building2, Globe, ChevronDown, ChevronUp, Heart, Sprout, Zap, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AppPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is the Solwaste app completely free?",
      answer: "Yes, the app is 100% free to download and use. No hidden charges, no in-app purchases. Our mission is to empower every Indian household and community to start their sustainability journey."
    },
    {
      question: "Can my parents and grandparents use it easily?",
      answer: "Absolutely. We've designed the app with simplicity in mind. Large buttons, clear icons, Hindi language support, and voice-guided tips make it accessible for everyone—from tech-savvy youth to seniors."
    },
    {
      question: "Will the app show data from Solwaste machines in my society?",
      answer: "Yes! If your society has a Solwaste OTC or Biogas unit installed, the app will display real-time impact data—compost generated, CO₂ saved, and more. This feature is currently rolling out to partner communities."
    },
    {
      question: "Can societies contact Solwaste directly through the app?",
      answer: "Yes. The Solwaste Tab includes a simple query form where RWAs, offices, or individuals can submit their waste management challenges. Our team will reach out within 48 hours with tailored solutions."
    },
    {
      question: "Do I need to have a Solwaste machine to use the app?",
      answer: "Not at all. The app is designed for everyone—whether you're just starting your green journey at home, part of a society exploring solutions, or already using our machines. Start small, grow together."
    },
    {
      question: "Is my data safe and private?",
      answer: "100%. We take data privacy seriously. Your personal information is encrypted and never shared with third parties. We collect only what's necessary to provide you with a personalized experience."
    }
  ];

  return (
    <div className="bg-cream text-charcoal">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/ventBackgroung.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/95 to-cream" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-moss/20 rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
              }}
              animate={{ 
                y: [null, Math.random() * -200],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-charcoal/60 hover:text-moss transition-colors mb-6 text-xs md:text-sm uppercase tracking-wider">
              <ArrowLeft size={14} /> Back to Home
            </Link>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-moss/10 text-moss rounded-full text-xs font-bold uppercase tracking-wider border border-moss/20">
                Launching Soon in Mumbai
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-charcoal leading-tight">
              Meet the Solwaste App
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-charcoal/70 max-w-3xl mx-auto font-light leading-relaxed mb-8">
              Small daily habits. Big environmental impact.
            </p>
            
            <p className="text-base sm:text-lg text-charcoal/60 max-w-2xl mx-auto leading-relaxed mb-12">
              Transform your home, your society, and your city—one green step at a time. Track your eco-habits, join community circles, and be part of India's zero-waste movement.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-charcoal text-cream rounded-full font-bold text-sm tracking-wide hover:bg-moss transition-colors shadow-lg"
              >
                <Apple size={24} />
                <div className="text-left">
                  <div className="text-[10px] opacity-70">Download on the</div>
                  <div className="text-base">App Store</div>
                </div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-charcoal text-cream rounded-full font-bold text-sm tracking-wide hover:bg-moss transition-colors shadow-lg"
              >
                <PlayCircle size={24} />
                <div className="text-left">
                  <div className="text-[10px] opacity-70">Get it on</div>
                  <div className="text-base">Google Play</div>
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* App Mockups */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center items-center gap-4 md:gap-8 max-w-5xl mx-auto"
          >
            {/* Placeholder for app screen 1 */}
            <motion.div 
              className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-charcoal/10"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full aspect-[9/19] bg-gradient-to-br from-moss/20 to-moss/5 flex items-center justify-center">
                <div className="text-center p-6">
                  <HomeIcon size={48} className="mx-auto mb-4 text-moss/40" />
                  <p className="text-xs text-charcoal/40">Home Tab<br/>Coming Soon</p>
                </div>
              </div>
            </motion.div>
            
            {/* Placeholder for app screen 2 */}
            <motion.div 
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-charcoal/10 z-10"
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full aspect-[9/19] bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                <div className="text-center p-6">
                  <Users size={56} className="mx-auto mb-4 text-gold/50" />
                  <p className="text-xs text-charcoal/40">Circles Tab<br/>Coming Soon</p>
                </div>
              </div>
            </motion.div>
            
            {/* Placeholder for app screen 3 */}
            <motion.div 
              className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-charcoal/10"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full aspect-[9/19] bg-gradient-to-br from-charcoal/20 to-charcoal/5 flex items-center justify-center">
                <div className="text-center p-6">
                  <Leaf size={48} className="mx-auto mb-4 text-charcoal/30" />
                  <p className="text-xs text-charcoal/40">Solwaste Tab<br/>Coming Soon</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About the App */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-moss uppercase tracking-[0.3em] text-xs font-bold">Why This App?</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-4 mb-6 text-charcoal">
              Because change begins at home.
            </h2>
            <p className="text-lg md:text-xl text-charcoal/70 font-light leading-relaxed mb-8">
              We built this app to empower every Indian household to take small, meaningful steps toward sustainability. Before machines arrive in your society, before policies change in your city—it starts with you, in your kitchen, with your family.
            </p>
            <p className="text-base md:text-lg text-charcoal/60 leading-relaxed">
              The Solwaste App is not just another tracking tool. It's a movement. A daily reminder that your banana peel matters. Your neighbor's compost matters. Your society's biogas matters. Together, we're building a zero-waste India—one habit at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature 1: Home Tab */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-moss/5 to-moss/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 bg-moss/10 px-4 py-2 rounded-full mb-6">
                <HomeIcon size={16} className="text-moss" />
                <span className="text-moss text-xs font-bold uppercase tracking-wider">Home Tab</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 text-charcoal">
                Start from your home
              </h2>
              
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Build eco-friendly habits one day at a time. Track your green steps, learn ancient Indian waste wisdom, check your personal Soil Score, and create beautiful shareable story cards to inspire your friends and family.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Sprout size={24} className="text-moss" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Daily Green Steps</h4>
                    <p className="text-charcoal/60 text-sm">Simple eco-habits designed for real Indian homes—composting tips, water conservation, energy saving.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Heart size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Ghar Ke Nuskhe</h4>
                    <p className="text-charcoal/60 text-sm">Ancient Indian wisdom meets modern sustainability—banana peels to fertilizer, eggshells for plants.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Share2 size={24} className="text-charcoal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Shareable Story Cards</h4>
                    <p className="text-charcoal/60 text-sm">Beautiful visuals showing your impact—perfect for Instagram, WhatsApp, and inspiring your circle.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="w-[280px] md:w-[320px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-moss/20">
                <div className="w-full aspect-[9/19] bg-gradient-to-br from-moss/20 to-moss/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <HomeIcon size={64} className="mx-auto mb-4 text-moss/40" />
                    <p className="text-sm text-charcoal/50">Home Tab Preview<br/>Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 2: Circles Tab */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-6">
                <Users size={16} className="text-gold" />
                <span className="text-gold text-xs font-bold uppercase tracking-wider">Circles Tab</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 text-charcoal">
                Grow together as a community
              </h2>
              
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Join your society, office, or campus circle. See how your building compares, track collective impact, and celebrate progress together. This is where individual habits become community movements.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cream rounded-lg shadow-sm">
                    <Building2 size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Society & Office Circles</h4>
                    <p className="text-charcoal/60 text-sm">Join your building's circle, see who's active, and track estimated waste diverted from landfills.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cream rounded-lg shadow-sm">
                    <TrendingUp size={24} className="text-moss" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Impact Tracking</h4>
                    <p className="text-charcoal/60 text-sm">Watch your community's collective impact grow—compost generated, CO₂ saved, trees equivalent planted.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cream rounded-lg shadow-sm">
                    <Zap size={24} className="text-charcoal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Preparing for Real Systems</h4>
                    <p className="text-charcoal/60 text-sm">Before Solwaste machines arrive, your community is already engaged, informed, and ready to scale impact.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="w-[280px] md:w-[320px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-gold/20">
                <div className="w-full aspect-[9/19] bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users size={64} className="mx-auto mb-4 text-gold/50" />
                    <p className="text-sm text-charcoal/50">Circles Tab Preview<br/>Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 3: Solwaste Tab */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-charcoal/5 to-charcoal/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 bg-charcoal/10 px-4 py-2 rounded-full mb-6">
                <Leaf size={16} className="text-charcoal" />
                <span className="text-charcoal text-xs font-bold uppercase tracking-wider">Solwaste Tab</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 text-charcoal">
                Solutions that build a greener future
              </h2>
              
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Explore our OTC and Biogas systems, read real case studies from Mumbai societies, and submit your community's waste challenge. Our team is ready to help you scale from habits to infrastructure.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Smartphone size={24} className="text-charcoal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Product Showcase</h4>
                    <p className="text-charcoal/60 text-sm">Browse our OTC composters and Biogas systems—see specs, pricing, and installation timelines.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Building2 size={24} className="text-moss" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Real Case Studies</h4>
                    <p className="text-charcoal/60 text-sm">Learn from societies that went waste-neutral—their journey, impact data, and lessons learned.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Download size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Submit Your Query</h4>
                    <p className="text-charcoal/60 text-sm">Tell us about your society's waste issue. We'll contact you within 48 hours with a tailored solution.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="w-[280px] md:w-[320px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-charcoal/20">
                <div className="w-full aspect-[9/19] bg-gradient-to-br from-charcoal/20 to-charcoal/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Leaf size={64} className="mx-auto mb-4 text-charcoal/30" />
                    <p className="text-sm text-charcoal/50">Solwaste Tab Preview<br/>Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Storytelling: Home to World */}
      <section className="py-20 md:py-32 bg-moss text-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6">
              Change begins small. But change spreads.
            </h2>
            <p className="text-lg md:text-xl text-cream/80 max-w-3xl mx-auto font-light">
              Your daily habit ripples outward—from your kitchen to your building, your locality, your city, and beyond.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              { icon: HomeIcon, label: "Your Home", desc: "Kitchen waste becomes compost" },
              { icon: Building2, label: "Your Society", desc: "Buildings compete, neighborhoods transform" },
              { icon: Users, label: "Your Locality", desc: "Streets cleaner, landfills lighter" },
              { icon: Globe, label: "Your City", desc: "Mumbai leads India's zero-waste movement" },
              { icon: Leaf, label: "The Nation", desc: "Vision 2047: A waste-neutral India" },
              { icon: TrendingUp, label: "The World", desc: "India shows the planet how it's done" }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 mb-8 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-gold/30 transition-all"
              >
                <div className="p-4 bg-gold/20 rounded-full">
                  <step.icon size={32} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{step.label}</h4>
                  <p className="text-cream/70 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-moss uppercase tracking-[0.3em] text-xs font-bold">Early Voices</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-4 mb-6 text-charcoal">
              What people are saying
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Finally, an app that doesn't make sustainability feel like homework. My mother-in-law uses it daily.",
                name: "Priya S.",
                role: "Early Beta User, Andheri"
              },
              {
                quote: "Our RWA was skeptical about waste segregation. This app got everyone on board in 2 weeks. Game changer.",
                name: "Rajesh M.",
                role: "Society Secretary, Powai"
              },
              {
                quote: "The Ghar Ke Nuskhe section is gold. I'm teaching my kids ancient Indian wisdom through modern tech.",
                name: "Sneha K.",
                role: "Homemaker & Mother, Bandra"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cream p-8 rounded-2xl shadow-sm border border-charcoal/5"
              >
                <p className="text-charcoal/70 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-charcoal/50">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-moss to-charcoal text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
              Ready to start your green journey?
            </h2>
            <p className="text-lg md:text-xl text-cream/80 mb-12 font-light">
              Download the Solwaste App and join thousands of Indians making a difference—one habit at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-cream text-charcoal rounded-full font-bold text-sm tracking-wide hover:bg-gold transition-colors shadow-lg"
              >
                <Apple size={24} />
                <div className="text-left">
                  <div className="text-[10px] opacity-70">Download on the</div>
                  <div className="text-base">App Store</div>
                </div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-cream text-charcoal rounded-full font-bold text-sm tracking-wide hover:bg-gold transition-colors shadow-lg"
              >
                <PlayCircle size={24} />
                <div className="text-left">
                  <div className="text-[10px] opacity-70">Get it on</div>
                  <div className="text-base">Google Play</div>
                </div>
              </motion.button>
            </div>

            <p className="text-sm text-cream/60">
              Available soon on iOS and Android • Free forever • No ads
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-moss uppercase tracking-[0.3em] text-xs font-bold">Questions?</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-4 mb-6 text-charcoal">
              Everything you need to know
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl shadow-sm border border-charcoal/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-charcoal/5 transition-colors"
                >
                  <span className="font-bold text-charcoal pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp size={20} className="text-moss flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-charcoal/40 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppPage;
