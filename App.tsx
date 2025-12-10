import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import MachinesPage from './pages/MachinesPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="font-sans antialiased scroll-smooth selection:bg-gold selection:text-charcoal">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/machines" element={<MachinesPage />} />
      </Routes>
    </div>
  );
}