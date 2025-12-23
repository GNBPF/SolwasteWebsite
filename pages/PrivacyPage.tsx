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
            className="max-w-6xl mx-auto text-center"
          >
            <p className="text-base sm:text-lg md:text-xl text-charcoal/80 leading-relaxed">
              This Policy applies globally to all users, customers, partners, vendors, employees, and visitors, with specific compliance to applicable Indian laws and internationally accepted data-protection principles.
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
                  {/* Company Info */}
                  {section.info && (
                    <div className="space-y-2">
                      {section.info.map((item, idx) => (
                        <p key={idx}>
                          <strong>{item.label}:</strong>{' '}
                          {item.link ? (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-moss hover:underline">
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Content Paragraphs */}
                  {section.content && section.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}

                  {/* Detailed List with Titles */}
                  {section.list && (
                    <ul className="list-disc pl-6 sm:pl-8 space-y-3 mt-4">
                      {section.list.map((item, idx) => (
                        <li key={idx}>
                          <strong>{item.title}:</strong> {item.desc}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Simple List */}
                  {section.simpleList && (
                    <ul className="list-disc pl-6 sm:pl-8 space-y-2 mt-4">
                      {section.simpleList.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.footer && (
                    <p className="mt-4 italic">{section.footer}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Section 11 - Contact */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mb-4 sm:mb-6">
                11. Contact – Data Protection Officer
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-charcoal/80 leading-relaxed">
                <p>For privacy-related questions, requests, or concerns, please contact:</p>
                <div className="space-y-2">
                  <p className="font-semibold">Data Protection Officer</p>
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
                    <a href="tel:+917400383866" className="text-moss hover:underline">
                      +91-7400383866
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </main>
  );
};

export default PrivacyPage;
