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
            className="max-w-6xl mx-auto text-center"
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
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {sections.map((section) => (
              <div key={section.id} className="mb-12 sm:mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mb-4 sm:mb-6">
                  {section.id}. {section.title}
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-charcoal/80 leading-relaxed">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}

                  {section.list && (
                    <ul className="list-disc pl-6 sm:pl-8 space-y-2 mt-4">
                      {section.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.footer && (
                    <p className="mt-4 italic">{section.footer}</p>
                  )}

                  {/* Contact Info for Section 6 */}
                  {section.id === 6 && (
                    <div className="mt-6">
                      <p className="font-semibold mb-2">Accessibility & Data Protection Officer</p>
                      <p>Solwaste Innovations Private Limited</p>
                      <p>1st Floor, 264–265, Dr. Annie Besant Road, Worli, Mumbai, Maharashtra – 400025, India</p>
                      <p className="mt-3">
                        <strong>Email:</strong>{' '}
                        <a href="mailto:privacy@solwaste.co" className="text-moss hover:underline">
                          privacy@solwaste.co
                        </a>
                      </p>
                      <p>
                        <strong>Phone:</strong>{' '}
                        <a href="tel:+919429691308" className="text-moss hover:underline">
                          +919429691308
                        </a>
                      </p>
                      <p className="mt-4">
                        We aim to respond to accessibility-related requests within a reasonable timeframe and will make reasonable efforts to provide information in an accessible format upon request.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </main>
  );
};

export default AccessibilityPage;
