import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const PrivacyPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy & Data Protection Policy - Solwaste",
    "description": "Solwaste Innovations Private Limited is committed to protecting the privacy, confidentiality, and security of personal and business information entrusted to us.",
    "url": "https://solwaste.co/privacy-policy",
    "mainEntity": {
      "@type": "Organization",
      "name": "Solwaste Innovations Private Limited",
      "description": "Committed to protecting privacy and data security."
    }
  };

  const sections = [
    {
      id: 1,
      title: "Company Information",
      info: [
        { label: "Legal Entity", value: "Solwaste Innovations Private Limited" },
        { label: "Registered Office", value: "1st Floor, 264–265, Dr. Annie Besant Road, Worli, Mumbai, Maharashtra – 400025, India" },
        { label: "Website", value: "www.solwaste.co", link: "https://www.solwaste.co" },
        { label: "Mobile Application", value: "Solwaste" }
      ]
    },
    {
      id: 2,
      title: "Information We Collect",
      content: [
        "We may collect and process the following categories of information depending on your interaction with us:"
      ],
      list: [
        { 
          title: "Personal Identification Data", 
          desc: "Name, contact number, email address, postal address, date of birth (where required)." 
        },
        { 
          title: "Customer & Business Information", 
          desc: "Company name, designation, business contact details." 
        },
        { 
          title: "Payment & Financial Information", 
          desc: "Transaction data processed through secure payment gateways such as Razorpay." 
        },
        { 
          title: "Know Your Customer (KYC) Data", 
          desc: "Government-issued identification where legally or contractually required." 
        },
        { 
          title: "Employee Information", 
          desc: "Aadhaar, PAN, employment records, payroll, and statutory compliance data." 
        },
        { 
          title: "Vendor Information", 
          desc: "GST details, bank account information, contractual documents." 
        },
        { 
          title: "Technical & Usage Data", 
          desc: "IP address, device identifiers, browser type, operating system, access logs." 
        },
        { 
          title: "Location Data", 
          desc: "Site-visit locations, operational tracking where relevant." 
        },
        { 
          title: "CCTV Footage", 
          desc: "Visual recordings captured at Solwaste premises for safety and security purposes." 
        }
      ]
    },
    {
      id: 3,
      title: "How We Use Information",
      content: [
        "Your information is used for legitimate business purposes, including but not limited to:"
      ],
      simpleList: [
        "Providing and managing our services and solutions",
        "Processing transactions and payments",
        "Customer support, communication, and relationship management",
        "Legal, regulatory, tax, and compliance obligations",
        "Recruitment, employment, and workforce management",
        "Operational security, fraud prevention, and risk management",
        "Business analytics, performance monitoring, and service improvement"
      ]
    },
    {
      id: 4,
      title: "Cookies, Analytics & Tracking Technologies",
      content: [
        "We use cookies and similar technologies to enhance user experience, analyze traffic, and improve our digital services. These may include:"
      ],
      simpleList: [
        "Google Analytics",
        "Meta (Facebook / Instagram) Pixel",
        "WhatsApp Business API",
        "Customer Relationship Management tools such as Salesforce"
      ],
      footer: "You may control or disable cookies through your browser settings; however, certain features of our services may be limited as a result."
    },
    {
      id: 5,
      title: "Data Sharing & Disclosure",
      content: [
        "Solwaste does not sell or rent personal data. We may share information only under the following circumstances:"
      ],
      simpleList: [
        "With trusted service providers and technology partners under strict confidentiality obligations",
        "With payment processors for transaction fulfillment",
        "With regulatory, legal, or governmental authorities when required by law",
        "During mergers, acquisitions, restructuring, or asset transfers",
        "To protect the rights, safety, or property of Solwaste, users, or the public"
      ]
    },
    {
      id: 6,
      title: "Data Storage, Security & Retention",
      content: [
        "We implement appropriate technical, administrative, and physical safeguards to protect personal data against unauthorized access, loss, misuse, or disclosure.",
        "Data may be stored within India or in other jurisdictions depending on operational requirements. We retain data only for as long as necessary to fulfill business, legal, or contractual obligations."
      ]
    },
    {
      id: 7,
      title: "International Data Transfers",
      content: [
        "As a globally oriented organization, your information may be transferred across borders. Such transfers are conducted in compliance with applicable data-protection laws and with adequate safeguards in place."
      ]
    },
    {
      id: 8,
      title: "Your Rights",
      content: [
        "Subject to applicable laws, you may have the right to:"
      ],
      simpleList: [
        "Access your personal data",
        "Request correction or updates",
        "Request deletion or restriction of processing",
        "Withdraw consent where processing is consent-based",
        "Opt out of non-essential communications"
      ],
      footer: "Requests can be submitted using the contact details provided below."
    },
    {
      id: 9,
      title: "Minors",
      content: [
        "Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from minors."
      ]
    },
    {
      id: 10,
      title: "Policy Updates",
      content: [
        "We may update this Policy periodically to reflect changes in legal requirements or business practices. Continued use of our services constitutes acceptance of the updated Policy."
      ]
    }
  ];

  return (
    <main className="bg-white">
      <SEO 
        title="Privacy & Data Protection Policy | Solwaste"
        description="Solwaste Innovations Private Limited is committed to protecting the privacy, confidentiality, and security of personal and business information entrusted to us."
        keywords="privacy policy, data protection, GDPR, personal data, data security, privacy rights, data collection, information security"
        ogImage="https://solwaste.co/og-privacy.png"
        schema={schema}
      />

      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gold to-gold/90 text-charcoal pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-32 overflow-hidden">
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
              <span className="text-moss uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-bold">
                Your Privacy Matters
              </span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Privacy & Data Protection Policy
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-charcoal/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
              <strong>Solwaste Innovations Private Limited</strong> is committed to protecting the privacy, confidentiality, and security of personal and business information entrusted to us. This Policy explains how we collect, use, store, process, disclose, and safeguard information when you interact with our services.
            </p>

            <p className="text-xs sm:text-sm text-charcoal/70 italic">
              Last Updated: 12 December 2025
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-moss/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-charcoal/5 rounded-full blur-3xl"></div>
      </section>

      {/* Scope Notice */}
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
              This Policy applies globally to all users, customers, partners, vendors, employees, and visitors, with specific compliance to applicable Indian laws and internationally accepted data-protection principles.
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
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gold text-charcoal rounded-full flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl border-2 border-charcoal/10">
                  {section.id}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mt-1 sm:mt-2">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-5 md:space-y-6 pl-0 sm:pl-16 md:pl-20">
                {/* Company Info Grid */}
                {section.info && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                    {section.info.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="p-4 sm:p-5 bg-cream/50 rounded-lg sm:rounded-xl border-l-4 border-moss"
                      >
                        <p className="text-xs sm:text-sm font-bold text-moss mb-1 sm:mb-2 uppercase tracking-wide">
                          {item.label}
                        </p>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm sm:text-base md:text-lg text-charcoal font-medium hover:text-moss transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm sm:text-base md:text-lg text-charcoal leading-relaxed">
                            {item.value}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Content Paragraphs */}
                {section.content && section.content.map((paragraph, idx) => (
                  <p key={idx} className="text-sm sm:text-base md:text-lg text-charcoal/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {/* Detailed List with Titles */}
                {section.list && (
                  <div className="space-y-4 sm:space-y-5 md:space-y-6 mt-4 sm:mt-5 md:mt-6">
                    {section.list.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08, duration: 0.5 }}
                        className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg border border-charcoal/5 hover:border-moss/20 transition-all"
                      >
                        <div className="flex-shrink-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gold rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-sm sm:text-base md:text-lg font-bold text-charcoal mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm md:text-base text-charcoal/70 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Simple List */}
                {section.simpleList && (
                  <ul className="space-y-2 sm:space-y-3 md:space-y-4 mt-4 sm:mt-5 md:mt-6">
                    {section.simpleList.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08, duration: 0.5 }}
                        className="flex items-start gap-3 sm:gap-4"
                      >
                        <div className="flex-shrink-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gold rounded-full mt-2"></div>
                        <span className="text-sm sm:text-base md:text-lg text-charcoal/80 leading-relaxed">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                {section.footer && (
                  <p className="text-sm sm:text-base md:text-lg text-charcoal/80 leading-relaxed mt-4 sm:mt-5 md:mt-6 italic border-l-4 border-moss pl-4 sm:pl-5 md:pl-6 bg-cream/30 py-3 sm:py-4 rounded">
                    {section.footer}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Contact Section - Data Protection Officer */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-moss to-moss/95 text-white">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">11</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Contact – Data Protection Officer
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
                For privacy-related questions, requests, or concerns, please contact:
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-gold mb-4 sm:mb-6">
                Data Protection Officer
              </h3>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-white/90">
                <p className="font-semibold">Solwaste Innovations Private Limited</p>
                <p className="leading-relaxed">
                  1st Floor, 264–265, Dr. Annie Besant Road,<br />
                  Worli, Mumbai, Maharashtra – 400025, India
                </p>
                
                <div className="pt-4 sm:pt-6 border-t border-white/20 space-y-2 sm:space-y-3">
                  <p>
                    <strong className="text-gold">Email:</strong>{' '}
                    <a href="mailto:privacy@solwaste.co" className="hover:text-gold transition-colors underline">
                      privacy@solwaste.co
                    </a>
                  </p>
                  <p>
                    <strong className="text-gold">Phone:</strong>{' '}
                    <a href="tel:+917400383866" className="hover:text-gold transition-colors">
                      +91-7400383866
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

export default PrivacyPage;
