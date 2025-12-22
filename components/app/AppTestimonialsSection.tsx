import React from 'react';
import { motion } from 'framer-motion';

const AppTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Finally, an app that doesn't make sustainability feel like homework. My mother-in-law uses it daily.",
      name: "Priya S.",
      role: "Early Beta User, Andheri"
    },
    {
      quote: "Our RWA was skeptical about waste segregation. This app got everyone on board in 2 weeks. Game changer.",
      name: "Rajesh M.",
      role: "Society Secretary, Powai"
    },
    {
      quote: "The Ghar Ke Nuskhe section is gold. I'm teaching my kids ancient Indian wisdom through modern tech.",
      name: "Sneha K.",
      role: "Homemaker and Mother, Bandra"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-moss uppercase tracking-[0.3em] text-xs font-bold">Early Voices</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold mt-4 mb-6 text-charcoal">
            What people are saying
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-cream p-8 rounded-2xl shadow-sm border border-charcoal/5"
            >
              <p className="text-charcoal/70 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-charcoal">{testimonial.name}</p>
                <p className="text-sm text-charcoal/50">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppTestimonialsSection;
