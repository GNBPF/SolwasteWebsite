import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionsOverviewSection = () => {
  const solutions = [
    {
      title: 'Community Composting',
      description:
        'Designed for housing societies and residential communities managing 50–500 kg of wet waste daily.',
      image:"/solutions/communityComposting.png"
    },
    {
      title: 'Corporate and Hotel Systems',
      description:
        'Tailored composting solutions for offices, hotels, and commercial establishments processing up to 1 ton/day.',
      image:"/solutions/hotelSystem.png"
    },
    {
      title: 'Industrial-Scale Composting',
      description:
        'Heavy-duty systems built for institutions, campuses, and facilities handling 2+ tons of organic waste.',
      image:"/solutions/industrialComposting.png"
    },
    {
      title: 'Electric and Automated',
      description:
        'Fully electric, odour-free machines with automated operation and minimal maintenance requirements.',
      image:"/solutions/electricAutomated.png"
    }
  ];

  return (
    <section className="py-14 md:py-18 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-10"
        >
          <span className="text-moss uppercase tracking-[0.3em] text-xs font-semibold">
            Our Solutions
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-charcoal leading-tight">
            Composting Systems for<br />Every Operational Scale
          </h2>

          <p className="mt-4 text-base md:text-lg text-charcoal/70 leading-relaxed">
            Automated, energy-efficient composting systems built for reliable,
            compliant waste processing at every scale.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group relative h-[320px] rounded-xl overflow-hidden border border-moss/10 shadow-sm hover:shadow-xl transition-all"
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${solution.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/50 to-transparent" />

              {/* Text */}
              <div className="relative h-full p-4 flex flex-col justify-end">
                <h3 className="text-lg font-sans font-medium text-cream mb-2">
                  {solution.title}
                </h3>

                <p className="text-sm text-cream/80 leading-snug">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-charcoal text-cream font-semibold shadow-md hover:bg-moss transition-colors"
          >
            View All Solutions
            <ArrowRight size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default SolutionsOverviewSection;
