import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import ImpactSection from '../components/ImpactSection';
import Footer from '../components/Footer';

const VisionPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Vision 2047 - Solwaste's Roadmap to Waste-Neutral India",
    "description": "Explore Solwaste's ambitious Vision 2047 roadmap. From decentralized home composting to biogas-as-a-service and circular cities powered by organic waste. Building India's zero-waste future.",
    "url": "https://solwaste.co/vision-2047",
    "mainEntity": {
      "@type": "Organization",
      "name": "Solwaste",
      "mission": "Building a waste-neutral India by 2047"
    }
  };

  return (
    <main className="bg-cream">
      <SEO 
        title="Vision 2047 | Solwaste's Roadmap to Waste-Neutral India"
        description="Discover Solwaste's three-phase vision to transform India into a waste-neutral nation by 2047. Phase 1: Decentralized composting. Phase 2: Biogas-as-a-Service. Phase 3: Circular cities powered by leftovers. Join the movement."
        keywords="Vision 2047, waste neutral India, circular economy, biogas infrastructure, sustainable cities India, zero waste India, waste management roadmap, future of waste management, Solwaste vision, waste to energy future"
        ogImage="https://solwaste.co/og-vision.png"
        schema={schema}
      />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-moss to-charcoal text-cream py-16 md:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-google-sans font-bold mb-6 leading-tight">
              Vision <span className="text-gold">2047</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-cream/80 font-light leading-relaxed mb-6">
              Building a Waste-Neutral India
            </p>
            <p className="text-base md:text-lg text-cream/70 max-w-2xl leading-relaxed">
              By India's centenary of independence, we envision a nation where organic waste isn't dumped—it's transformed. 
              A future where every home composts, every neighborhood powers itself, and cities run on their own leftovers.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <ImpactSection />

      {/* Call to Action */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-google-sans font-bold text-charcoal mb-6">
            Ready to be part of this vision?
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto mb-8">
            Whether you're a household, society, or institution—every step toward waste neutrality counts. 
            Start your journey with Solwaste today.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block px-8 py-4 bg-moss text-cream rounded-xl font-bold hover:bg-moss/90 transition-colors shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default VisionPage;
