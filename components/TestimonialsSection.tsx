import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Solwaste's composting system has completely transformed our waste management. We're now processing 100 kg daily, saving ₹15,000 monthly, and our residents are thrilled with the compost for our gardens.",
      name: "Rajesh Kumar",
      role: "Secretary, Green Valley Apartments",
      location: "Mumbai",
      type: "Housing Society"
    },
    {
      quote: "The machine handles our kitchen waste effortlessly. Zero odour, minimal maintenance, and we've significantly cut down disposal costs. A true game-changer for our sustainability goals.",
      name: "Priya Malhotra",
      role: "Operations Manager, Taj Resorts",
      location: "Goa",
      type: "Hotel/Resort"
    },
    {
      quote: "We installed Solwaste's industrial unit across our 3 campuses. The IoT monitoring and automated processing have made compliance seamless while supporting our CSR initiatives.",
      name: "Amit Sharma",
      role: "Facility Head, Tech Corp India",
      location: "Bangalore",
      type: "Corporate Campus"
    },
    {
      quote: "Our university generates massive organic waste daily. Solwaste's solution not only manages it efficiently but also provides compost for our botanical gardens. It's an educational tool for students too.",
      name: "Dr. Meera Reddy",
      role: "Dean of Operations, National University",
      location: "Hyderabad",
      type: "University"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-moss uppercase tracking-[0.3em] text-xs font-bold">Client Stories</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-4 mb-6 text-charcoal">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 bg-white rounded-2xl shadow-lg border border-moss/10 hover:border-gold/30 hover:shadow-xl transition-all"
            >
              <div className="absolute top-6 right-6 text-gold/20">
                <Quote size={48} />
              </div>
              
              <div className="relative">
                <span className="inline-block px-3 py-1 bg-moss/10 text-moss text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  {testimonial.type}
                </span>
                
                <p className="text-charcoal/80 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="pt-4 border-t border-moss/10">
                  <p className="font-bold text-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-charcoal/60">{testimonial.role}</p>
                  <p className="text-xs text-charcoal/50 mt-1">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
