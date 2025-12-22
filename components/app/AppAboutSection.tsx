import React from 'react';
import { motion } from 'framer-motion';

const AppAboutSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-moss uppercase tracking-[0.3em] text-xs font-bold">Why This App?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold mt-4 mb-6 text-charcoal">
            Because change begins at home.
          </h2>
          <p className="text-lg md:text-xl text-charcoal/70 font-light leading-relaxed mb-8">
            We built this app to empower every Indian household to take small, meaningful steps toward sustainability. Before machines arrive in your society, before policies change in your city—it starts with you, in your kitchen, with your family.
          </p>
          <p className="text-base md:text-lg text-charcoal/60 leading-relaxed">
            The Solwaste App is not just another tracking tool. It's a movement. A daily reminder that your banana peel matters. Your neighbor's compost matters. Your society's biogas matters. Together, we're building a zero-waste India—one habit at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AppAboutSection;
