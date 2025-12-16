
import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "Government of Kerala", logo: "/partnerLogo/kerela.png" },
  { name: "LuLu Group", logo: "/partnerLogo/mall.png" },
  { name: "ONGC", logo: "/partnerLogo/ongc.png" },
  { name: "Petronet LNG", logo: "/partnerLogo/petronet.png" }
];

const testimonials = [
  {
    quote: "Processing 100 kg daily, saving ₹15,000 monthly. Game-changer for our society.",
    name: "Rajesh Kumar",
    role: "Green Valley Apartments, Mumbai"
  },
  {
    quote: "Zero odour, minimal maintenance. Perfect for our resort's sustainability goals.",
    name: "Priya Malhotra",
    role: "Taj Resorts, Goa"
  },
  {
    quote: "IoT monitoring made compliance seamless across our 3 campuses.",
    name: "Amit Sharma",
    role: "Tech Corp India, Bangalore"
  },
  {
    quote: "Manages massive waste efficiently and educates our students too.",
    name: "Dr. Meera Reddy",
    role: "National University, Hyderabad"
  }
];

const PartnersSection = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  
  // Triple partners array for seamless infinite loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-moss/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
          >
              <span className="text-moss uppercase tracking-[0.3em] text-xs font-bold">Trusted By</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-google-sans font-bold mt-4 mb-4 text-charcoal">
                Our Clients and Partners
              </h2>
              <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
                Working with leading organizations across India to build a sustainable future
              </p>
          </motion.div>
          
          {/* Dual-Row Infinite Scrolling Marquee */}
          <div className="relative space-y-6">
              {/* Gradient Overlays for Premium Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              
              {/* Row 1: Left to Right */}
              <div className="overflow-hidden py-4">
                  <motion.div
                      className="flex gap-12 md:gap-16"
                      animate={{
                          x: [0, -1 * (partners.length * 260)],
                      }}
                      transition={{
                          x: {
                              duration: 30,
                              repeat: Infinity,
                              ease: "linear",
                          },
                      }}
                  >
                      {duplicatedPartners.map((partner, index) => (
                          <div
                              key={`row1-${partner.name}-${index}`}
                              className="flex flex-col items-center justify-center gap-3 min-w-[220px] group cursor-pointer"
                          >
                              <div className="relative w-full h-28 flex items-center justify-center p-4">
                                  <img
                                      src={partner.logo}
                                      alt={partner.name}
                                      className="max-h-20 max-w-[200px] object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110"
                                  />
                              </div>
                              <p className="text-xs font-semibold text-charcoal/40 group-hover:text-moss transition-colors duration-500 text-center tracking-wide">
                                  {partner.name}
                              </p>
                          </div>
                      ))}
                  </motion.div>
              </div>

              {/* Row 2: Testimonials - Right to Left */}
              <div className="overflow-hidden py-4">
                  <motion.div
                      className="flex gap-8"
                      animate={{
                          x: [-1 * (testimonials.length * 380), 0],
                      }}
                      transition={{
                          x: {
                              duration: 35,
                              repeat: Infinity,
                              ease: "linear",
                          },
                      }}
                  >
                      {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                          <div
                              key={`testimonial-${index}`}
                              className="relative min-w-[360px] p-5 bg-gradient-to-br from-white to-cream/50 rounded-xl border-l-4 border-moss/30 hover:border-gold transition-all hover:shadow-lg group cursor-pointer"
                          >
                              <p className="text-sm text-charcoal/80 leading-relaxed mb-3 italic">
                                  "{testimonial.quote}"
                              </p>
                              <div className="pt-2 border-t border-moss/10">
                                  <p className="font-bold text-charcoal text-sm">{testimonial.name}</p>
                                  <p className="text-xs text-charcoal/60 mt-1">{testimonial.role}</p>
                              </div>
                          </div>
                      ))}
                  </motion.div>
              </div>
          </div>
              
          <p className="text-sm text-charcoal/50 mt-10 text-center">
            Hotels • Builders • Institutions • Corporate Clients • Government Bodies
          </p>
      </div>
    </section>
  );
};

export default PartnersSection;
