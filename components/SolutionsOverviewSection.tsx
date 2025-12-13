import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Factory, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionsOverviewSection = () => {
  const solutions = [
    {
      icon: Users,
      title: "Community Composting Machines",
      description: "Perfect for housing societies and residential complexes processing 50-500 kg/day"
    },
    {
      icon: Building2,
      title: "Corporate & Hotel Solutions",
      description: "Tailored systems for hotels, offices, and commercial establishments up to 1 ton/day"
    },
    {
      icon: Factory,
      title: "Industrial-Scale Systems",
      description: "Heavy-duty composters for large campuses, institutions, and facilities handling 2+ tons/day"
    },
    {
      icon: Zap,
      title: "Fully Electric & Low-Maintenance",
      description: "Automated, odour-free operation with minimal manpower and maximum efficiency"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <span className="text-moss uppercase tracking-[0.3em] text-xs font-bold">Our Solution</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-4 mb-6 text-charcoal">
            End-to-End Composting Systems<br />for Every Scale
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Solwaste provides automated, odour-free, energy-efficient composting machines engineered for reliable performance. Whether it's a 50 kg society or a 2-ton industrial setup, we enable smooth and compliant waste processing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-gradient-to-br from-cream to-moss/5 rounded-2xl border border-moss/10 hover:border-gold/30 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-4 bg-moss rounded-xl group-hover:bg-gold transition-colors">
                  <solution.icon size={28} className="text-cream" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-charcoal mb-2">{solution.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{solution.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/otc"
            className="inline-flex items-center gap-2 px-8 py-3 bg-charcoal text-cream rounded-full font-semibold hover:bg-moss transition-colors shadow-lg"
          >
            View All Solutions
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsOverviewSection;
