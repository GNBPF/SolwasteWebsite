import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const AccessibilityPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Accessibility Statement - Solwaste",
    "description": "Solwaste Innovations Private Limited is committed to ensuring digital accessibility for people of all abilities.",
    "url": "https://solwaste.co/accessibility",
    "mainEntity": {
      "@type": "Organization",
      "name": "Solwaste Innovations Private Limited",
      "description": "Committed to ensuring digital accessibility for people of all abilities."
    }
  };

  const sections = [
    {
      id: 1,
      title: "Our Commitment to Accessibility",
      content: [
        "We believe accessibility is an essential part of inclusion, sustainability, and responsible innovation. Solwaste strives to ensure that individuals with disabilities — including visual, auditory, motor, cognitive, and neurological impairments — can access our digital platforms with ease and dignity.",
        "Our approach to accessibility is guided by internationally recognised standards and best practices."
      ]
    },
    {
      id: 2,
      title: "Accessibility Standards",
      content: [
        "We aim to conform, wherever reasonably possible, to the following accessibility standards:"
      ],
      list: [
        "Web Content Accessibility Guidelines (WCAG) 2.1 – Level AA",
        "Principles of Perceivable, Operable, Understandable, and Robust (POUR)",
        "Relevant accessibility guidance under applicable Indian and international laws"
      ],
      footer: "While we strive for full compliance, some content or features may not yet be fully accessible due to technical limitations or legacy design constraints."
    },
    {
      id: 3,
      title: "Accessibility Features",
      content: [
        "Our digital platforms are designed with accessibility in mind and may include the following features:"
      ],
      list: [
        "Clear and consistent navigation structure",
        "Readable fonts with adequate contrast ratios",
        "Responsive design for different devices and screen sizes",
        "Compatibility with common screen readers and assistive technologies",
        "Keyboard navigability for core functions",
        "Descriptive text for links and important interface elements"
      ]
    },
    {
      id: 4,
      title: "Ongoing Efforts & Improvements",
      content: [
        "Accessibility is an ongoing process. We regularly review our website and application to identify and address accessibility gaps. Our teams consider accessibility during design, development, content creation, and platform updates.",
        "Where third-party tools or platforms are used (such as analytics, payment gateways, or embedded services), we encourage vendors to meet accessibility standards; however, we may have limited control over their accessibility features."
      ]
    },
    {
      id: 5,
      title: "Known Limitations",
      content: [
        "Despite our best efforts, some areas of our digital platforms may not yet be fully accessible. This may include:"
      ],
      list: [
        "Older content or documents not originally designed with accessibility standards",
        "Third-party integrations beyond our direct control",
        "Certain multimedia content lacking captions or transcripts"
      ],
      footer: "We are actively working to address these limitations wherever feasible."
    },
    {
      id: 6,
      title: "Feedback & Assistance",
      content: [
        "We welcome feedback on the accessibility of our digital platforms. If you experience any difficulty accessing content, using features, or navigating our website or mobile app, please let us know.",
        "You may contact us for accessibility support or to report an issue:"
      ]
    },
    {
      id: 7,
      title: "Policy Review & Updates",
      content: [
        "This Accessibility Statement may be updated periodically to reflect improvements, changes in standards, or regulatory requirements. We encourage users to review this page regularly.",
        "Continued use of our digital platforms constitutes acceptance of this Accessibility Statement."
      ]
    }
  ];

  return (
    <main className="bg-white">
      <SEO 
        title="Accessibility Statement | Solwaste"
        description="Solwaste Innovations Private Limited is committed to ensuring digital accessibility for people of all abilities. Learn about our accessibility commitment and features."
        keywords="accessibility, digital accessibility, WCAG, inclusive design, assistive technology, accessibility standards, web accessibility, accessible website"
        ogImage="https://solwaste.co/og-accessibility.png"
        schema={schema}
      />

      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal to-charcoal/95 text-white pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-32 overflow-hidden">
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
                Inclusion & Access
              </span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Accessibility Statement
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
              <strong>Solwaste Innovations Private Limited</strong> is committed to ensuring digital accessibility for people of all abilities. We continuously work to improve the accessibility and usability of our website, mobile application, and digital services, so that everyone can access information, products, and services without barriers.
            </p>

            <p className="text-xs sm:text-sm text-white/70 italic">
              Last Updated: 12 December 2025
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-moss/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gold/10 rounded-full blur-3xl"></div>
      </section>

      {/* Platform Info */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-base sm:text-lg md:text-xl text-charcoal/80 leading-relaxed">
              This Accessibility Statement applies to our website{' '}
              <a 
                href="https://www.solwaste.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-moss font-semibold hover:underline"
              >
                www.solwaste.co
              </a>
              {' '}and our mobile application <strong>Solwaste</strong>.
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
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-charcoal text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl">
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
                        <div className="flex-shrink-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-charcoal rounded-full mt-2"></div>
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

                {/* Contact Info for Section 6 */}
                {section.id === 6 && (
                  <div className="mt-6 sm:mt-8 p-6 sm:p-8 bg-cream/50 rounded-xl sm:rounded-2xl border-l-4 border-charcoal">
                    <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-4">
                      Accessibility & Data Protection Officer
                    </h3>
                    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-charcoal/80">
                      <p className="font-semibold">Solwaste Innovations Private Limited</p>
                      <p className="leading-relaxed">
                        1st Floor, 264–265, Dr. Annie Besant Road,<br />
                        Worli, Mumbai, Maharashtra – 400025, India
                      </p>
                      <div className="pt-3 sm:pt-4 space-y-2">
                        <p>
                          <strong className="text-charcoal">Email:</strong>{' '}
                          <a href="mailto:privacy@solwaste.co" className="text-moss hover:underline font-medium">
                            privacy@solwaste.co
                          </a>
                        </p>
                        <p>
                          <strong className="text-charcoal">Phone:</strong>{' '}
                          <a href="tel:+917400383866" className="text-moss hover:underline font-medium">
                            +91-7400383866
                          </a>
                        </p>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-charcoal/70 mt-4 sm:mt-6 leading-relaxed">
                      We aim to respond to accessibility-related requests within a reasonable timeframe and will make reasonable efforts to provide information in an accessible format upon request.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-moss to-moss/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Help Us Improve
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                Your feedback helps us create a more accessible experience for everyone. If you encounter any accessibility barriers, please don't hesitate to reach out.
              </p>
            </div>

            <motion.a
              href="mailto:privacy@solwaste.co"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gold text-charcoal px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-gold/90 transition-all shadow-lg"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Report an Accessibility Issue
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AccessibilityPage;
