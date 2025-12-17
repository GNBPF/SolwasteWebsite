import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import SolutionsPage from './pages/SolutionsPage';
import OTCPage from './pages/OTCPage';
import BiogasPage from './pages/BiogasPage';
import ShopPage from './pages/ShopPage';
import AppPage from './pages/AppPage';
import VisionPage from './pages/VisionPage';
import PartnerPage from './pages/PartnerPage';
import CareerPage from './pages/CareerPage';
import ScrollToTop from './components/ScrollToTop';

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
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/vision-2047" element={<VisionPage />} />
        <Route path="/partner" element={<PartnerPage />} />          <Route path="/careers" element={<CareerPage />} />      </Routes>
    </div>
  );
}