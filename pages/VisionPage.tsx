import React from 'react';
import SEO from '../components/SEO';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import VisionHeroSection from '../components/vision/VisionHeroSection';
import VisionWasteMirrorSection from '../components/vision/VisionWasteMirrorSection';
import VisionInvisibleCrisisSection from '../components/vision/VisionInvisibleCrisisSection';
import VisionInfrastructureSection from '../components/vision/VisionInfrastructureSection';
import VisionVermicompostSection from '../components/vision/VisionVermicompostSection';
import VisionSolutionSection from '../components/vision/VisionSolutionSection';
import VisionWhatWeLosingSection from '../components/vision/VisionWhatWeLosingSection';
import Vision2047Section from '../components/vision/Vision2047Section';
import VisionGentleSatireSection from '../components/vision/VisionGentleSatireSection';
import VisionCallToActSection from '../components/vision/VisionCallToActSection';

const VisionPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Vision 2047 - Are We Really Free If Our Waste Still Owns Us?",
    "description": "By 2047, India will mark 100 years of Independence. But can a nation truly call itself free if its waste continues to choke its land, poison its water, and silently compromise the health of its children?",
    "url": "https://solwaste.co/vision-2047",
    "mainEntity": {
      "@type": "Organization",
      "name": "Solwaste",
      "mission": "Building a waste-free India by 2047"
    }
  };

  return (
    <main className="bg-charcoal">
      <SEO 
        title="Vision 2047 | Are We Really Free If Our Waste Still Owns Us?"
        description="By 2047, India will mark 100 years of Independence. But can a nation truly call itself free if its waste continues to choke its land, poison its water, and silently compromise the health of its children?"
        keywords="Vision 2047, waste free India, waste management crisis, organic waste solutions, India independence, sustainable India, waste infrastructure, public health India, composting machines, zero waste 2047"
        ogImage="https://solwaste.co/og-vision.png"
        schema={schema}
      />

      <Navbar />

      <VisionHeroSection />
      
      <VisionWasteMirrorSection />
      
      <VisionInvisibleCrisisSection />
      
      <VisionInfrastructureSection />
      
      <VisionVermicompostSection />
      
      <VisionSolutionSection />
      
      <VisionWhatWeLosingSection />
      
      <Vision2047Section />
      
      <VisionGentleSatireSection />
      
      <VisionCallToActSection />

      <Footer />
    </main>
  );
};

export default VisionPage;
