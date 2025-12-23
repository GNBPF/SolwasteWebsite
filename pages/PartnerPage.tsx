import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const PartnerPage = () => {

  const schema = {
    
    "@type": "WebPage",
    "name": "Partner With Solwaste - Affiliation Program",
    "description": "Join Solwaste's partner network. Learn, represent, earn, and create impact in organic waste management.",
  };

  return (
    <main className="bg-cream">
      <SEO 
        title="Waste Management Partners India | Solwaste Affiliation Program"
        description="Become waste management distributor or affiliate in India. Super stockist opportunities for machines at Solwaste.co."
        keywords="waste management distributors India, super stockist waste machines, waste management affiliates, waste mgmt partners, Solwaste partner, waste management partner, sustainability partner, affiliation program, commission based, green business opportunity, environmental consulting"
        ogImage="https://solwaste.co/og-partner.png"
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
              Partner With Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-cream/90 font-light mb-6 max-w-3xl mx-auto">
              Help us bring real waste solutions to more people
            </p>
            <p className="text-sm md:text-base text-cream/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              We make composting machines. You know people who need them. 
              Let's work together.
            </p>
            <motion.a
              href="https://quark-cornflower-fe8.notion.site/2cc84662572280d786f1f62594f9327f?pvs=105"
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

      {/* Who Is This For (Restored to Original Design) */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-moss/10 to-gold/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-charcoal mb-4">
              Is This You?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              'Sustainability Enthusiasts',
              'Students',
              'Consultants',
              'Housing Society Connectors',
              'Sales Professionals',
              'Environmental Activists',
              'Freelancers',
              'Entrepreneurs'
            ].map((profile, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(44, 62, 44, 0.1)' }}
                className="px-5 py-2 bg-white rounded-full border-2 border-moss/20 text-charcoal text-sm font-medium hover:border-moss/40 transition-all cursor-pointer"
              >
                {profile}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Benefits – Full Screen Cinematic Section */}
<section className="relative min-h-screen w-full overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source
      src="/partnerBackground.mp4"
      type="video/mp4"
    />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/90" />

  {/* Content */}
  <div className="relative z-10 min-h-screen flex items-center">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16"
      >
        <span className="text-moss uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.35em] xl:tracking-[0.4em] text-[10px] sm:text-xs md:text-sm font-semibold">
          Partner Benefits
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold text-white mt-3 sm:mt-4 md:mt-5 leading-tight">
          A Partnership <br className="hidden sm:block" />
          That Actually Makes Sense
        </h2>

        <p className="text-white/70 mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          No fluff. No empty promises. Just a clean, scalable way to earn while
          contributing to real environmental impact.
        </p>
      </motion.div>

      {/* Benefits – Editorial Layout */}
      <div className="grid md:grid-cols-2 gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12 gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 max-w-5xl">
        {[
          {
            title: 'Zero inventory responsibility',
            desc: 'Manufacturing, logistics, installation, warranties — handled end to end by us.'
          },
          {
            title: 'Straightforward earnings',
            desc: 'Bring a deal. Close it. Get paid. Transparent commissions with no fine print.'
          },
          {
            title: 'Real sustainability exposure',
            desc: 'Understand how organic waste systems actually work, beyond surface-level claims.'
          },
          {
            title: 'Proven deployments',
            desc: 'Already active in housing societies, corporates, and institutions across cities.'
          },
          {
            title: 'Training & backup',
            desc: 'Structured onboarding, pitch support, demos, and technical assistance when needed.'
          },
          {
            title: 'Growth beyond referrals',
            desc: 'Top partners move into city ownership, strategic roles, and leadership tracks.'
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative pl-4 sm:pl-5 md:pl-6"
          >
            {/* Accent Line */}
            <span className="absolute left-0 top-1 h-full w-[1.5px] sm:w-[2px] bg-moss/60" />

            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-1.5 sm:mb-2 md:mb-2.5">
              {item.title}
            </h3>
            <p className="text-white/70 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
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
              What happens after you apply?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {[
                { step: '1', title: 'We review your application', desc: 'Usually takes us 48 hours max' },
                { step: '2', title: 'Quick call', desc: 'If it looks good, we\'ll schedule a chat' },
                { step: '3', title: 'Get started', desc: 'Training materials and everything you need to begin' }
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
                    <p className="text-charcoal/70">{item.desc}</p>
                  </motion.div>
                  {i < 2 && (
                    <ChevronRight size={32} className="text-moss/30 hidden md:block flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PartnerPage;
