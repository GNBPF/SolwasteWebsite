import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import VentSection from '../components/VentSection';
import ComplianceSection from '../components/ComplianceSection';
import SolutionsOverviewSection from '../components/SolutionsOverviewSection';
import BenefitsSection from '../components/BenefitsSection';
import ImpactNumbersSection from '../components/ImpactNumbersSection';
import ImpactSection from '../components/ImpactSection';
import TestimonialsSection from '../components/TestimonialsSection';
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
                title="Solwaste | Organic Waste to Compost & Biogas - India's #1 Solution"
                description="Transform organic waste into compost & clean energy with Solwaste. German-engineered OTC machines & biogas plants. 500+ installations across India. Zero landfill guarantee. Get a quote today!"
                keywords="organic waste management India, composting machine, biogas plant, OTC machine, waste to compost, organic waste converter, sustainable waste management, zero waste solutions, Mumbai waste management, residential composting, commercial composting, biogas energy, waste to energy India"
                ogImage="https://solwaste.co/og-home.png"
                schema={schema}
            />
            <HeroSection />
            <VentSection />
            <ComplianceSection />
            <SolutionsOverviewSection />
            <BenefitsSection />
            <ImpactNumbersSection />
            <ImpactSection />
            <TestimonialsSection />
            <PartnersSection />
            <CTABannerSection />
            <Footer />
        </main>
    );
};

export default Home;