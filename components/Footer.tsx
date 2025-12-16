import React from 'react';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gold text-charcoal py-10 md:py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Contact Information */}
          <div>
            <div className="mb-4 md:mb-6">
              <p className="font-medium mb-1 text-sm md:text-base">123-456-789</p>
              <p className="font-medium mb-1 text-sm md:text-base">hello@solwaste.co</p>
              <p className="text-xs md:text-sm leading-relaxed">
                Worli, 1st floor, 264-265, Dr. Annie Besant Road,<br />
                Worli, Mumbai, MH 400025
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <a href="https://www.instagram.com/solwaste/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                <Instagram size={20} className="md:w-6 md:h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61584401441321" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
                <Facebook size={20} className="md:w-6 md:h-6" />
              </a>
              <a href="https://x.com/SolwasteCo" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="Twitter">
                <XIcon />
              </a>
              <a href="https://www.linkedin.com/company/solwaste/about/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
                <Linkedin size={20} className="md:w-6 md:h-6" />
              </a>
              <a href="https://www.youtube.com/@Solwaste" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="YouTube">
                <Youtube size={20} className="md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base">
              <li>
                <Link 
                  to="/vision-2047" 
                  className="inline-flex items-center gap-2 group hover:underline transition-all font-semibold relative"
                >
                  <span className="relative">
                    Vision 2047
                  </span>
                  <svg 
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline transition-all">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline transition-all">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base">
              <li>
                <Link to="/" className="hover:underline transition-all">
                  Testimonials and Insights
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline transition-all">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:underline transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base">
              <li>
                <Link to="/" className="hover:underline transition-all">
                  Press and Media
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:underline transition-all">
                  Partner with us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline transition-all">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="pt-6 md:pt-8 border-t border-charcoal/20 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm">
          <div className="flex gap-6 md:gap-8">
            <Link to="/" className="hover:underline transition-all">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:underline transition-all">
              Accessibility Statement
            </Link>
          </div>
          <p className="opacity-70">
            © {new Date().getFullYear()} Solwaste. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
