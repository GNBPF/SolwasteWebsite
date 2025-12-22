import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import VentSection from '../components/VentSection';
import ComplianceSection from '../components/ComplianceSection';
import SolutionsOverviewSection from '../components/SolutionsOverviewSection';
import BenefitsSection from '../components/BenefitsSection';
import ImpactNumbersSection from '../components/ImpactNumbersSection';
import PartnersSection from '../components/PartnersSection';
import CTABannerSection from '../components/CTABannerSection';
import Footer from '../components/Footer';

const Home = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Solwaste - Organic Waste Management Solutions India",
        "description": "Leading provider of organic waste composting machines and biogas plants in India. 500+ installations, zero landfill solutions for societies, offices, and institutions.",
        "url": "https://solwaste.co/",
        "mainEntity": {
            "@type": "Service",
            "name": "Organic Waste Management",
            "provider": {
                "@type": "Organization",
                "name": "Solwaste"
            },
            "serviceType": "Waste Management",
            "areaServed": "India",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Waste Management Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Product",
                            "name": "Organic Trash Composter (OTC)",
                            "description": "Automated composting machine for organic waste"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Product",
                            "name": "Biogas Plant",
                            "description": "Convert organic waste to biogas energy"
                        }
                    }
                ]
            }
        }
    };

    return (
        <main>
            <SEO 
                title="Solwaste | Waste Management India"
                description="Leading waste management in India. Biowaste, organic waste disposal & sustainable solutions by Solwaste.co. 500+ installations. Get quote today."
                keywords="waste management, waste management India, biowaste management, organic waste solutions, waste disposal India, garbage disposal, organic waste management India, composting machine, biogas plant, OTC machine, waste to compost, organic waste converter, sustainable waste management, zero waste solutions, Mumbai waste management, residential composting, commercial composting, biogas energy, waste to energy India"
                ogImage="https://solwaste.co/og-home.png"
                schema={schema}
            />
            <HeroSection />
            <VentSection />
            <ComplianceSection />
            <SolutionsOverviewSection />
            <BenefitsSection />
            <ImpactNumbersSection />
            <PartnersSection />
            <CTABannerSection />
            <Footer />
        </main>
    );
};

export default Home;