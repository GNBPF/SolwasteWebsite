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
    <footer className="bg-gold text-charcoal py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Information */}
          <div>
            <div className="mb-6">
              <p className="font-medium mb-1">123-456-789</p>
              <p className="font-medium mb-1">hello@solwaste.co</p>
              <p className="text-sm leading-relaxed">
                Worli, 1st floor, 264-265, Dr. Annie Besant Road,<br />
                Worli, Mumbai, MH 400025
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <XIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Linkedin size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link to="/#impact" className="hover:underline transition-all">
                  Vision 2047
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
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline transition-all">
                  Testimonials & Insights
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
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline transition-all">
                  Press & Media
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
        <div className="pt-8 border-t border-charcoal/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-8">
            <Link to="/" className="text-sm hover:underline transition-all">
              Privacy Policy
            </Link>
            <Link to="/" className="text-sm hover:underline transition-all">
              Accessibility Statement
            </Link>
          </div>
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Solwaste. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
