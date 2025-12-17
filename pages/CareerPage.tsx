import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const CareerPage = () => {

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Join Solwaste - Careers, Internships & Volunteering",
    "description": "Work with Solwaste. Jobs, internships, and volunteer opportunities in sustainability and waste management.",
  };

  return (
    <main className="bg-cream">
      <SEO 
        title="Careers at Solwaste | Jobs, Internships & Volunteering"
        description="Join Solwaste's mission to redesign how cities think about waste. Opportunities in sustainability, operations, tech, design, and more."
        keywords="Solwaste careers, sustainability jobs, environmental jobs, climate action, internships, volunteering, green jobs"
        ogImage="https://solwaste.co/og-careers.png"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-moss via-moss/95 to-charcoal py-12 md:py-16">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-4 text-cream leading-tight">
              Join Solwaste!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-cream/90 font-light mb-6 max-w-3xl mx-auto">
              Careers | Internships | Volunteering
            </p>
            <p className="text-sm md:text-base text-cream/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              We're not just managing waste. We're redesigning how cities think about it.<br/>
              If sustainability excites you, climate action matters to you, and you want real-world exposure (not just certificates), you're in the right place.
            </p>
            <motion.a
              href="https://quark-cornflower-fe8.notion.site/2cc84662572280318ff3ff2d5f2f0fee?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gold text-charcoal rounded-xl font-bold hover:bg-gold/90 transition-colors shadow-lg inline-flex items-center gap-2"
            >
              Apply Now <ChevronRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-moss/10 to-gold/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-charcoal mb-4">
              Open Roles
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              'Sustainability Research',
              'Operations',
              'Sales & Partnerships',
              'Marketing & Content',
              'Design',
              'Technology',
              'Data & Impact',
              'Community Engagement',
              'Business Development'
            ].map((role, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(44, 62, 44, 0.1)' }}
                className="px-5 py-2 bg-white rounded-full border-2 border-moss/20 text-charcoal text-sm font-medium hover:border-moss/40 transition-all cursor-pointer"
              >
                {role}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us – Cinematic Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/partnerBackground.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/90" />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-14"
            >
              <span className="text-moss uppercase tracking-[0.4em] text-xs font-semibold">
                Why Join Us
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white mt-4 leading-tight">
                Work That Actually<br className="hidden sm:block" />
                Matters
              </h2>

              <p className="text-white/70 mt-5 text-base sm:text-lg">
                No greenwashing. No vanity projects. Just real impact, real learning, and work you can be proud of.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-y-10 gap-x-16 max-w-5xl">
              {[
                {
                  title: 'Real projects, real impact',
                  desc: 'Work on live deployments with cities, corporates, and communities - not just PowerPoint decks.'
                },
                {
                  title: 'Learn by doing',
                  desc: 'Hands-on exposure to waste management, sustainability consulting, and climate solutions.'
                },
                {
                  title: 'Ownership from day one',
                  desc: 'You own your work. No micromanagement. Just clear goals and the freedom to execute.'
                },
                {
                  title: 'Build your portfolio',
                  desc: 'Whether it\'s case studies, campaigns, or field reports - leave with work you can showcase.'
                },
                {
                  title: 'Cross-functional learning',
                  desc: 'Collaborate across teams - operations, tech, sales, design. See how everything connects.'
                },
                {
                  title: 'Growth mindset culture',
                  desc: 'We value hustle, curiosity, and grit. Top performers move fast here.'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative pl-6"
                >
                  <span className="absolute left-0 top-1 h-full w-[2px] bg-moss/60" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-charcoal mb-3">
              What Happens Next?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {[
                { step: '1', title: 'We review on a rolling basis', desc: 'Applications are evaluated as they come in' },
                { step: '2', title: 'Shortlisted candidates get contacted', desc: 'Via email or WhatsApp — usually within a week' },
                { step: '3', title: 'No spam, just real conversations', desc: 'If we reach out, it means we see potential' }
              ].map((item, i) => (
                <React.Fragment key={i}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex flex-col items-center text-center flex-1"
                  >
                    <div className="w-16 h-16 rounded-full bg-moss text-cream flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                      {item.step}
                    </div>
                    <h4 className="text-xl font-bold text-charcoal mb-2">{item.title}</h4>
                    <p className="text-charcoal/70 text-sm">{item.desc}</p>
                  </motion.div>
                  {i < 2 && (
                    <ChevronRight size={32} className="text-moss/30 hidden md:block flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg font-medium text-charcoal">
              Let's build a cleaner future — together ♻️
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CareerPage;
