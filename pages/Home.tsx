import React from 'react';
import HeroSection from '../components/HeroSection';
import VentSection from '../components/VentSection';
import MachinesSection from '../components/MachinesSection';
import ImpactSection from '../components/ImpactSection';
import PartnersSection from '../components/PartnersSection';
import AppSection from '../components/AppSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main>
            <HeroSection />
            <VentSection />
            <MachinesSection />
            <ImpactSection />
            <PartnersSection />
            <AppSection />
            <ContactSection />
            <Footer />
        </main>
    );
};

export default Home;