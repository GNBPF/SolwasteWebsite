import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SEO from '../components/SEO';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Solwaste Gallery - Our Work on Ground",
    "description": "Explore our waste collection operations and see our impact in action.",
    "url": "https://solwaste.co/gallery"
  };

  const images = [
    {
      src: "/gallery/img1.webp",
      alt: "Solwaste Waste Collection Operations",
      title: "Waste Collection Truck in Action"
    },
    {
      src: "/gallery/img2.webp",
      alt: "Solwaste Ground Operations",
      title: "On-Ground Collection"
    },
    {
      src: "/gallery/img3.webp",
      alt: "Solwaste Waste Management Truck",
      title: "Our Fleet"
    },
    {
      src: "/gallery/img4.webp",
      alt: "Solwaste Operations Team",
      title: "Team at Work"
    },
    {
      src: "/gallery/img5.webp",
      alt: "Solwaste Waste Collection Services",
      title: "Collection Services"
    }
  ];

  return (
    <main className="bg-cream">
      <SEO 
        title="Gallery | Solwaste - Our Work on Ground"
        description="See Solwaste's waste collection operations in action. Explore our fleet, team, and on-ground impact."
        keywords="Solwaste gallery, waste collection truck, waste management operations, ground work, waste collection services"
        ogImage="https://solwaste.co/og-gallery.png"
        schema={schema}
      />

      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-moss/20 via-gold/15 to-cream pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-moss uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[10px] sm:text-xs font-bold">
                Our Impact
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-charcoal leading-tight mt-3 sm:mt-4">
                Gallery
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
                Witness our waste collection operations on the ground. Real work, real impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white border-2 border-moss/10 hover:border-gold/50 transition-all duration-500 shadow-md hover:shadow-2xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <p className="text-white font-semibold text-sm sm:text-base md:text-lg">
                        {image.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tweet Section */}
      <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <img
              src="/tweet1.png"
              alt="Customer Tweet about Solwaste Installation"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-charcoal/50 hover:bg-charcoal p-2 rounded-full transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 to-transparent p-4 sm:p-6 rounded-b-lg">
                <p className="text-white font-semibold text-base sm:text-lg md:text-xl">
                  {images[selectedImage].title}
                </p>
                <p className="text-white/70 text-sm sm:text-base mt-1">
                  {selectedImage + 1} / {images.length}
                </p>
              </div>

              {/* Navigation Arrows */}
              {selectedImage > 0 && (
                <button
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-charcoal/50 hover:bg-charcoal text-white p-2 sm:p-3 rounded-full transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage - 1);
                  }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              {selectedImage < images.length - 1 && (
                <button
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-charcoal/50 hover:bg-charcoal text-white p-2 sm:p-3 rounded-full transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage + 1);
                  }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default GalleryPage;
