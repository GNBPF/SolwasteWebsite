import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const SitemapPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sitemap - Solwaste",
    "description": "Complete site navigation and directory of all pages on Solwaste website.",
    "url": "https://solwaste.co/sitemap"
  };

  const sitemapSections = [
    {
      title: "Products & Solutions",
      links: [
        { name: "All Solutions", path: "/solutions" },
        { name: "Organic Waste Converters (OWC)", path: "/otc" },
        { name: "Shop Products", path: "/shop" },
        { name: "Solwaste App", path: "/app" }
      ]
    },
    {
      title: "About Solwaste",
      links: [
        { name: "Vision 2047", path: "/vision-2047" },
        { name: "Environmental & Sustainability Commitment", path: "/sustainability" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "Partner with Us", path: "/partner" },
        { name: "Careers", path: "/careers" }
      ]
    },
    {
      title: "Resources & Support",
      links: [
        { name: "Contact Us", path: "/#contact" },
        { name: "Privacy & Data Protection Policy", path: "/privacy-policy" },
        { name: "Accessibility Statement", path: "/accessibility" }
      ]
    },
    {
      title: "Connect With Us",
      links: [
        { name: "Instagram", path: "https://www.instagram.com/solwaste/", external: true },
        { name: "Facebook", path: "https://www.facebook.com/profile.php?id=61584401441321", external: true },
        { name: "Twitter / X", path: "https://x.com/SolwasteCo", external: true },
        { name: "LinkedIn", path: "https://www.linkedin.com/company/solwaste/about/", external: true },
        { name: "YouTube", path: "https://www.youtube.com/@Solwaste", external: true }
      ]
    }
  ];

  return (
    <main className="bg-white">
      <SEO 
        title="Sitemap | Solwaste"
        description="Complete site navigation and directory of all pages on Solwaste website. Find all our products, solutions, resources, and contact information."
        keywords="sitemap, site navigation, website map, page directory, Solwaste pages"
        ogImage="https://solwaste.co/og-sitemap.png"
        schema={schema}
      />

      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-moss/50 via-gold/35 to-cream/60 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-charcoal leading-tight drop-shadow-sm">
              Sitemap
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/90 leading-relaxed">
              Navigate through all pages and resources on our website
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
              {sitemapSections.map((section, index) => (
                <div key={index} className="space-y-4 sm:space-y-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-charcoal border-b-2 border-moss pb-2 sm:pb-3">
                    {section.title}
                  </h2>
                  <ul className="space-y-2 sm:space-y-3">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        {link.external ? (
                          <a
                            href={link.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-base text-charcoal hover:text-moss hover:underline transition-colors inline-flex items-center gap-2"
                          >
                            {link.name}
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : (
                          <Link
                            to={link.path}
                            className="text-sm sm:text-base text-charcoal hover:text-moss hover:underline transition-colors block"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16 border-t border-charcoal/10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3 sm:mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-2 text-sm sm:text-base text-charcoal/80">
                    <p>
                      <strong>Phone:</strong>{' '}
                      <a href="tel:+919429691308" className="hover:text-moss transition-colors">
                        +919429691308
                      </a>
                    </p>
                    <p>
                      <strong>Email:</strong>{' '}
                      <a href="mailto:hello@solwaste.co" className="hover:text-moss transition-colors">
                        hello@solwaste.co
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3 sm:mb-4">
                    Our Office
                  </h3>
                  <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                    Solwaste Innovations Private Limited<br />
                    1st Floor, 264–265, Dr. Annie Besant Road,<br />
                    Worli, Mumbai, Maharashtra – 400025, India
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3 sm:mb-4">
                    Quick Links
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li>
                      <Link to="/" className="text-charcoal/80 hover:text-moss hover:underline transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/#contact" className="text-charcoal/80 hover:text-moss hover:underline transition-colors">
                        Get a Quote
                      </Link>
                    </li>
                    <li>
                      <Link to="/partner" className="text-charcoal/80 hover:text-moss hover:underline transition-colors">
                        Become a Partner
                      </Link>
                    </li>
                    <li>
                      <Link to="/careers" className="text-charcoal/80 hover:text-moss hover:underline transition-colors">
                        Join Our Team
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Back to Top */}
            <div className="mt-12 sm:mt-16 text-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-moss hover:text-moss/80 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SitemapPage;
