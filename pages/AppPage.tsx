import React, { useState } from 'react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import AppHeroSection from '../components/app/AppHeroSection';
import AppAboutSection from '../components/app/AppAboutSection';
import AppFeatureHomeTab from '../components/app/AppFeatureHomeTab';
import AppFeatureCirclesTab from '../components/app/AppFeatureCirclesTab';
import AppFeatureSolwasteTab from '../components/app/AppFeatureSolwasteTab';
import AppTestimonialsSection from '../components/app/AppTestimonialsSection';
import AppDownloadCTA from '../components/app/AppDownloadCTA';
import AppFAQSection from '../components/app/AppFAQSection';
import AppNotifyModal from '../components/app/AppNotifyModal';

const AppPage = () => {
  const [showNotifyModal, setShowNotifyModal] = useState(false);

  const schema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Solwaste App",
    "description": "Track your green habits, join community circles, and learn sustainable waste management practices.",
    "operatingSystem": "iOS, Android",
    "applicationCategory": "LifestyleApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "author": {
      "@type": "Organization",
      "name": "Solwaste"
    }
  };
  
  const seoContent = (
    <SEO 
      title="Solwaste App | Waste Management App India"
      description="Mobile app for waste management, composting tracking & biogas monitoring India. Join Solwaste waitlist. Smart waste solutions."
      keywords="waste management app India, composting app, biogas app, waste tracking app, organic waste app India, Solwaste app, waste management app India, green habits tracker, community composting app, sustainability app, eco-friendly lifestyle app, waste tracking app, environmental app India"
      ogImage="https://solwaste.co/og-app.png"
      schema={schema}
    />
  );

  return (
    <div className="bg-cream text-charcoal">
      {seoContent}
      
      <AppHeroSection onNotifyClick={() => setShowNotifyModal(true)} />
      
      <AppAboutSection />
      
      <AppFeatureHomeTab />
      
      <AppFeatureCirclesTab />
      
      <AppFeatureSolwasteTab />
      
      <AppTestimonialsSection />
      
      <AppDownloadCTA onNotifyClick={() => setShowNotifyModal(true)} />
      
      <AppFAQSection />

      <Footer />

      <AppNotifyModal 
        isOpen={showNotifyModal} 
        onClose={() => setShowNotifyModal(false)} 
      />
    </div>
  );
};

export default AppPage;
