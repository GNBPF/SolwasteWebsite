import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

// Lazy load all page components for optimal performance
const Home = lazy(() => import('./pages/Home'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const OTCPage = lazy(() => import('./pages/OTCPage'));
const BiogasPage = lazy(() => import('./pages/BiogasPage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const AppPage = lazy(() => import('./pages/AppPage'));
const VisionPage = lazy(() => import('./pages/VisionPage'));
const PartnerPage = lazy(() => import('./pages/PartnerPage'));
const CareerPage = lazy(() => import('./pages/CareerPage'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-charcoal">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
      <p className="mt-4 text-cream font-sans">Loading...</p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="font-sans antialiased scroll-smooth selection:bg-gold selection:text-charcoal">
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/otc" element={<OTCPage />} />
          <Route path="/biogas" element={<BiogasPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/vision-2047" element={<VisionPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/careers" element={<CareerPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}