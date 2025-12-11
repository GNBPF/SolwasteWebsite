import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import MachinesPage from './pages/MachinesPage';
import OTCPage from './pages/OTCPage';
import BiogasPage from './pages/BiogasPage';
import ShopPage from './pages/ShopPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="font-sans antialiased scroll-smooth selection:bg-gold selection:text-charcoal">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/machines" element={<MachinesPage />} />
        <Route path="/otc" element={<OTCPage />} />
        <Route path="/biogas" element={<BiogasPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}