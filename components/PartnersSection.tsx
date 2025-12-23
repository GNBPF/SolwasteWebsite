
import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "Government of Kerala", logo: "/partnerLogo/kerela.png" },
  { name: "LuLu Group", logo: "/partnerLogo/mall.png" },
  { name: "ONGC", logo: "/partnerLogo/ongc.png" },
  { name: "Petronet LNG", logo: "/partnerLogo/petronet.png" },
  { name: "Adani, Ports and Logistics", logo: "/partnerLogo/adani.png" },
  { name: "Aizwal Municipal Corporation, Mizoram", logo: "/partnerLogo/logo4.png" },
  { name: "Assam Pollution Control Board, Nagaon, Assam", logo: "/partnerLogo/logo5.png" },
  { name: "Defence colony, Shankar Vihar, New Delhi", logo: "/partnerLogo/logo6.png" },
  { name: "Department of Urban Development & Housing Ziro Valley, Arunachal Pradesh", logo: "/partnerLogo/logo7.png" },
  { name: "Kartarpur Land Port, Punjab", logo: "/partnerLogo/logo8.png" },
  { name: "Don Boscho University, Guwahati, Assam", logo: "/partnerLogo/logo9.png" },
  { name: "Ruby Clinic", logo: "/partnerLogo/logo10.png" },
  { name: "Guntur Municipal Corporation, Andhra Pradesh", logo: "/partnerLogo/logo11.png" },
  { name: "55 Engineer Regiment, Indian Army, Rajasthan", logo: "/partnerLogo/logo12.png" },
  { name: "Indira Gandhi Centre for Atomic Research, Kalpakkam, Tamil Nadu.", logo: "/partnerLogo/logo13.png" },
  { name: "IndLab Eeuipments Pvt. Ltd.", logo: "/partnerLogo/logo14.png" },
  { name: "Kakinada Municipal Corporation, Andhra Pradesh", logo: "/partnerLogo/logo15.png" },
  { name: "Numaligarh Refinery Limited, Assam", logo: "/partnerLogo/logo16.png" },
  { name: "Sam Foundation for Eco friendly Environmental, Chennai, TN", logo: "/partnerLogo/logo17.png" },
  { name: "Telangana Institute of Medical Science, Hyderabad", logo: "/partnerLogo/logo18.png" },
  { name: "Tirupati Municipal Corporation, Tirupati", logo: "/partnerLogo/logo19.png" },
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
  
  // Split partners into two rows: 11 and 10 logos
  const partnersRow1 = partners.slice(0, 11);
  const partnersRow2 = partners.slice(11, 21);
  
  // Triple each row for seamless infinite loop
  const duplicatedPartnersRow1 = [...partnersRow1, ...partnersRow1, ...partnersRow1];
  const duplicatedPartnersRow2 = [...partnersRow2, ...partnersRow2, ...partnersRow2];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white border-t border-moss/5 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-10 md:mb-12"
          >
              <span className="text-moss uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[10px] sm:text-xs font-bold">Trusted By</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold mt-3 sm:mt-4 mb-3 sm:mb-4 text-charcoal px-2">
                Our Clients and Partners
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-charcoal/70 mb-6 sm:mb-8 max-w-xl md:max-w-2xl mx-auto px-4">
                Working with leading organizations across India to build a sustainable future
              </p>
          </motion.div>
          
          {/* Three-Row Infinite Scrolling Marquee */}
          <div className="relative space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              {/* Gradient Overlays for Premium Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 lg:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 lg:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              
              {/* Row 1: Partners (11 logos) - Left to Right */}
              <div className="overflow-hidden py-2 sm:py-3 md:py-4">
                  <motion.div
                      className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20"
                      animate={{
                          x: [0, -1 * (partnersRow1.length * 300)],
                      }}
                      transition={{
                          x: {
                              duration: 60,
                              repeat: Infinity,
                              ease: "linear",
                          },
                      }}
                      whileHover={{
                          transition: {
                              duration: 100,
                          },
                      }}
                  >
                      {duplicatedPartnersRow1.map((partner, index) => {
                          // First 4 logos keep current size, others get larger
                          const logoIndex = index % partnersRow1.length;
                          const sizeClass = logoIndex < 4 
                              ? "max-h-20 sm:max-h-24 md:max-h-28 lg:max-h-32 max-w-[160px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[240px]" 
                              : "max-h-36 sm:max-h-44 md:max-h-52 lg:max-h-60 max-w-[240px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[380px]";
                          
                          return (
                              <div
                                  key={`row1-${partner.name}-${index}`}
                                  className="flex flex-col items-center justify-start min-w-[180px] sm:min-w-[200px] md:min-w-[240px] lg:min-w-[260px] group cursor-pointer"
                              >
                                  <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-40 flex items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6">
                                      <img
                                          src={partner.logo}
                                          alt={partner.name}
                                          className={`${sizeClass} object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110`}
                                      />
                                  </div>
                                  <span className="opacity-0 group-hover:opacity-100 text-xs sm:text-sm font-medium text-charcoal transition-opacity duration-300 mt-2 text-center px-2 h-6 flex items-center justify-center">
                                      {partner.name}
                                  </span>
                              </div>
                          );
                      })}
                  </motion.div>
              </div>

              {/* Row 2: Partners (10 logos) - Right to Left */}
              <div className="overflow-hidden py-2 sm:py-3 md:py-4">
                  <motion.div
                      className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20"
                      animate={{
                          x: [-1 * (partnersRow2.length * 300), 0],
                      }}
                      transition={{
                          x: {
                              duration: 55,
                              repeat: Infinity,
                              ease: "linear",
                          },
                      }}
                      whileHover={{
                          transition: {
                              duration: 95,
                          },
                      }}
                  >
                      {duplicatedPartnersRow2.map((partner, index) => {
                          // All logos in row 2 get larger size (they start from index 11 in original array)
                          const sizeClass = "max-h-36 sm:max-h-44 md:max-h-52 lg:max-h-60 max-w-[240px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[380px]";
                          
                          return (
                              <div
                                  key={`row2-${partner.name}-${index}`}
                                  className="flex flex-col items-center justify-start min-w-[180px] sm:min-w-[200px] md:min-w-[240px] lg:min-w-[260px] group cursor-pointer"
                              >
                                  <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-40 flex items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6">
                                      <img
                                          src={partner.logo}
                                          alt={partner.name}
                                          className={`${sizeClass} object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110`}
                                      />
                                  </div>
                                  <span className="opacity-0 group-hover:opacity-100 text-xs sm:text-sm font-medium text-charcoal transition-opacity duration-300 mt-2 text-center px-2 h-6 flex items-center justify-center">
                                      {partner.name}
                                  </span>
                              </div>
                          );
                      })}
                  </motion.div>
              </div>

              {/* Row 3: Testimonials - Left to Right */}
              <div className="overflow-hidden py-2 sm:py-3 md:py-4">
                  <motion.div
                      className="flex gap-4 sm:gap-6 md:gap-8"
                      animate={{
                          x: [0, -1 * (testimonials.length * 380)],
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
                              className="relative min-w-[280px] sm:min-w-[320px] md:min-w-[360px] p-4 sm:p-5 bg-gradient-to-br from-white to-cream/50 rounded-lg sm:rounded-xl border-l-4 border-moss/30 hover:border-gold transition-all hover:shadow-lg group cursor-pointer"
                          >
                              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-2 sm:mb-3 italic">
                                  "{testimonial.quote}"
                              </p>
                              <div className="pt-2 border-t border-moss/10">
                                  <p className="font-bold text-charcoal text-xs sm:text-sm">{testimonial.name}</p>
                                  <p className="text-[10px] sm:text-xs text-charcoal/60 mt-1">{testimonial.role}</p>
                              </div>
                          </div>
                      ))}
                  </motion.div>
              </div>
          </div>
              
          <p className="text-xs sm:text-sm text-charcoal/50 mt-6 sm:mt-8 md:mt-10 text-center px-4">
            Hotels • Builders • Institutions • Corporate Clients • Government Bodies
          </p>
      </div>
    </section>
  );
};

export default PartnersSection;
