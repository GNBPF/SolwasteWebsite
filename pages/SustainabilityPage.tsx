import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const SustainabilityPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Environmental & Sustainability Commitment - Solwaste",
    "description": "At Solwaste Innovations Private Limited, sustainability is not an add-on — it is the foundation of our purpose, our technology, and our operations.",
    "url": "https://solwaste.co/sustainability",
    "mainEntity": {
      "@type": "Organization",
      "name": "Solwaste Innovations Private Limited",
      "description": "Committed to advancing responsible waste management, environmental protection, and resource efficiency through innovation, integrity, and measurable impact."
    }
  };

  const sections = [
    {
      id: 1,
      title: "Our Sustainability Vision",
      content: [
        "We envision a future where waste is treated as a valuable resource, not a liability. Our goal is to enable cleaner cities, healthier communities, and resilient ecosystems by deploying smart, scalable, and environmentally responsible waste-management solutions.",
        "Solwaste aligns its sustainability efforts with globally recognised environmental principles and national sustainability priorities, while maintaining a practical, outcome-driven approach."
      ]
    },
    {
      id: 2,
      title: "Environmental Responsibility in Our Solutions",
      content: [
        "Our products and services are designed to:"
      ],
      list: [
        "Reduce the environmental impact of organic and solid waste",
        "Minimise landfill dependency and uncontrolled dumping",
        "Lower greenhouse gas emissions associated with traditional waste handling",
        "Promote circular-economy principles through recovery, reuse, and resource efficiency",
        "Enable decentralised, on-site waste processing wherever feasible"
      ],
      footer: "We continuously evaluate the environmental footprint of our technologies and seek opportunities to improve efficiency, durability, and performance."
    },
    {
      id: 3,
      title: "Compliance & Regulatory Responsibility",
      content: [
        "Solwaste is committed to complying with all applicable environmental, health, and safety laws and regulations in the jurisdictions where we operate, including those related to:"
      ],
      list: [
        "Waste management and environmental protection",
        "Air, water, and soil safety",
        "Occupational health and safety",
        "Local, state, national, and international regulatory standards"
      ],
      footer: "Where regulations evolve, we proactively adapt our practices to meet or exceed compliance requirements."
    },
    {
      id: 4,
      title: "Responsible Operations",
      content: [
        "Within our own operations, we strive to reduce environmental impact by:"
      ],
      list: [
        "Optimising energy and water usage in offices and facilities",
        "Encouraging responsible waste segregation and recycling practices internally",
        "Reducing paper use through digital workflows",
        "Promoting sustainable procurement and supplier practices",
        "Implementing health, safety, and environmental controls at operational sites"
      ],
      footer: "Environmental performance is considered an integral part of operational excellence."
    },
    {
      id: 5,
      title: "Supply Chain & Partner Expectations",
      content: [
        "We work with suppliers, vendors, contractors, and partners who share our commitment to ethical conduct and environmental responsibility.",
        "Where practical, we encourage our partners to:"
      ],
      list: [
        "Adopt environmentally responsible manufacturing and sourcing practices",
        "Comply with applicable environmental laws and standards",
        "Minimise waste, emissions, and resource consumption",
        "Support transparency and accountability in sustainability practices"
      ]
    },
    {
      id: 6,
      title: "Innovation, Research & Continuous Improvement",
      content: [
        "Innovation is central to our sustainability mission. Solwaste invests in research, development, and continuous improvement to:"
      ],
      list: [
        "Enhance the environmental performance of our solutions",
        "Incorporate emerging technologies and best practices",
        "Adapt solutions to diverse geographic, climatic, and operational conditions",
        "Support long-term environmental and economic viability"
      ],
      footer: "We believe sustainability must be measurable, scalable, and practical."
    },
    {
      id: 7,
      title: "Community & Stakeholder Engagement",
      content: [
        "Sustainable waste management requires collaboration. Solwaste engages with:"
      ],
      list: [
        "Local communities and residential societies",
        "Commercial and institutional clients",
        "Municipal bodies and public authorities",
        "Industry stakeholders and sustainability networks"
      ],
      footer: "We support awareness, education, and responsible behaviour related to waste reduction, segregation, and environmental stewardship."
    },
    {
      id: 8,
      title: "Transparency & Accountability",
      content: [
        "We are committed to transparent communication regarding our sustainability approach and performance. Where appropriate, we track and evaluate environmental metrics related to our operations and solutions.",
        "We recognise that sustainability is an ongoing journey and remain accountable for continuous progress."
      ]
    },
    {
      id: 9,
      title: "Review & Continuous Commitment",
      content: [
        "This Environmental & Sustainability Commitment is reviewed periodically to reflect changes in business operations, technology, and regulatory expectations.",
        "By integrating environmental responsibility into every level of our organisation, Solwaste aims to deliver meaningful, long-term impact for people, communities, and the planet."
      ]
    }
  ];

  return (
    <main className="bg-white">
      <SEO 
        title="Environmental & Sustainability Commitment | Solwaste"
        description="At Solwaste Innovations Private Limited, sustainability is not an add-on — it is the foundation of our purpose, our technology, and our operations. Learn about our environmental commitment."
        keywords="sustainability, environmental commitment, waste management, circular economy, responsible operations, green technology, environmental protection, resource efficiency"
        ogImage="https://solwaste.co/og-sustainability.png"
        schema={schema}
      />

      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-moss to-moss/90 text-white pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/public/texture.png')] opacity-5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4 sm:mb-6"
            >
              <span className="text-gold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-bold">
                Our Commitment
              </span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Environmental & Sustainability Commitment
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
              At <strong>Solwaste Innovations Private Limited</strong>, sustainability is not an add-on — it is the foundation of our purpose, our technology, and our operations. We are committed to advancing responsible waste management, environmental protection, and resource efficiency through innovation, integrity, and measurable impact.
            </p>

            <p className="text-xs sm:text-sm text-white/70 italic">
              Last Updated: 12 December 2025
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-white/5 rounded-full blur-3xl"></div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-base sm:text-lg md:text-xl text-charcoal/80 leading-relaxed text-center">
              This Environmental & Sustainability Commitment outlines how we integrate environmental responsibility into our products, services, operations, partnerships, and decision-making processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      {sections.map((section, index) => (
        <section 
          key={section.id}
          className={`py-12 sm:py-16 md:py-20 lg:py-24 ${
            index % 2 === 0 ? 'bg-white' : 'bg-cream/20'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-moss text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl">
                  {section.id}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mt-1 sm:mt-2">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-5 md:space-y-6 pl-0 sm:pl-16 md:pl-20">
                {section.content.map((paragraph, idx) => (
                  <p key={idx} className="text-sm sm:text-base md:text-lg text-charcoal/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {section.list && (
                  <ul className="space-y-2 sm:space-y-3 md:space-y-4 mt-4 sm:mt-5 md:mt-6">
                    {section.list.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="flex items-start gap-3 sm:gap-4"
                      >
                        <div className="flex-shrink-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-moss rounded-full mt-2"></div>
                        <span className="text-sm sm:text-base md:text-lg text-charcoal/80 leading-relaxed">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                {section.footer && (
                  <p className="text-sm sm:text-base md:text-lg text-charcoal/80 leading-relaxed mt-4 sm:mt-5 md:mt-6 italic border-l-4 border-gold pl-4 sm:pl-5 md:pl-6">
                    {section.footer}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-charcoal to-charcoal/95 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-moss rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Get in Touch
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8">
                For questions or information regarding this Environmental & Sustainability Commitment, please contact:
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-gold mb-4 sm:mb-6">
                Solwaste Innovations Private Limited
              </h3>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-white/90">
                <p className="leading-relaxed">
                  1st Floor, 264–265, Dr. Annie Besant Road,<br />
                  Worli, Mumbai, Maharashtra – 400025, India
                </p>
                
                <div className="pt-4 sm:pt-6 border-t border-white/10 space-y-2 sm:space-y-3">
                  <p>
                    <strong className="text-gold">Email:</strong>{' '}
                    <a href="mailto:privacy@solwaste.co" className="hover:text-gold transition-colors underline">
                      privacy@solwaste.co
                    </a>
                  </p>
                  <p>
                    <strong className="text-gold">Phone:</strong>{' '}
                    <a href="tel:+919429691308" className="hover:text-gold transition-colors">
                      +919429691308
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SustainabilityPage;
