import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import SolutionsPage from './pages/SolutionsPage';
import OTCPage from './pages/OTCPage';
import BiogasPage from './pages/BiogasPage';
import FahakaPage from './pages/FahakaPage';
import ShopPage from './pages/ShopPage';
import AppPage from './pages/AppPage';
import VisionPage from './pages/VisionPage';
import PartnerPage from './pages/PartnerPage';
import CareerPage from './pages/CareerPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import GalleryPage from './pages/GalleryPage';
import PressMediaPage from './pages/PressMediaPage';
import SustainabilityPage from './pages/SustainabilityPage';
import AccessibilityPage from './pages/AccessibilityPage';
import PrivacyPage from './pages/PrivacyPage';
import SitemapPage from './pages/SitemapPage';

export default function App() {
  return (
    <div className="font-sans antialiased scroll-smooth selection:bg-gold selection:text-charcoal">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/otc" element={<OTCPage />} />
        <Route path="/biogas" element={<BiogasPage />} />
        <Route path="/fahaka" element={<FahakaPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/vision-2047" element={<VisionPage />} />
        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/press-media" element={<PressMediaPage />} />
        <Route path="/sustainability" element={<SustainabilityPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/sitemap" element={<SitemapPage />} />
      </Routes>
    </div>
  );
}