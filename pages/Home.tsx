import React from 'react';
import HeroSection from '../components/HeroSection';
import VentSection from '../components/VentSection';
import ComplianceSection from '../components/ComplianceSection';
import SolutionsOverviewSection from '../components/SolutionsOverviewSection';
import MachinesSection from '../components/MachinesSection';
import BenefitsSection from '../components/BenefitsSection';
import ImpactNumbersSection from '../components/ImpactNumbersSection';
import ImpactSection from '../components/ImpactSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PartnersSection from '../components/PartnersSection';
import AppSection from '../components/AppSection';
import CTABannerSection from '../components/CTABannerSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main>
            <HeroSection />
            <VentSection />
            <ComplianceSection />
            <SolutionsOverviewSection />
            <BenefitsSection />
            <ImpactNumbersSection />
            <ImpactSection />
            <TestimonialsSection />
            <PartnersSection />
            <AppSection />
            <CTABannerSection />
            <ContactSection />
            <Footer />
        </main>
    );
};

export default Home;