import React from 'react';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const benefitCategories = [
    {
      title: 'Government and Compliance Benefits',
      accent: 'gold',
      benefits: [
        'Compliance with SWM Rules, 2016',
        'Avoidance of penalties and legal notices',
        'Eligibility for select municipal incentives (state-specific)',
        'Supports ESG and CSR reporting frameworks',
        'Alignment with Smart City and urban sustainability goals'
      ]
    },
    {
      title: 'Community and Society Benefits',
      accent: 'moss',
      benefits: [
        'Cleaner and more hygienic premises',
        'Reduced dependency on external waste contractors',
        'Lower recurring waste management expenses',
        'Usable compost for landscaping and gardens',
        'No odour, pests, or overflowing waste bins'
      ]
    },
    {
      title: 'Environmental Impact',
      accent: 'green',
      benefits: [
        '70–90% reduction of waste sent to landfills',
        'Significant reduction in methane emissions',
        'Lower overall carbon footprint',
        'Encourages circular economy practices',
        'Improves soil health through organic compost'
      ]
    },
    {
      title: 'Operational Advantages',
      accent: 'charcoal',
      benefits: [
        'Automated operation with minimal manpower',
        'Quick processing cycles',
        '24/7 service and technical support',
        'Long machine life with low maintenance needs'
      ]
    }
  ];

  const accentStyles = {
    gold: 'border-gold text-gold bg-gold/5',
    moss: 'border-moss text-moss bg-moss/5',
    green: 'border-green-600 text-green-600 bg-green-600/5',
    charcoal: 'border-charcoal text-charcoal bg-charcoal/5'
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-moss/5 to-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <span className="text-moss uppercase tracking-[0.3em] text-xs font-semibold">
            Why Solwaste
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-google-sans font-bold text-charcoal">
            Benefits That Scale Across Stakeholders
          </h2>
        </motion.div>

        {/* Benefit Blocks */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {benefitCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`p-7 rounded-2xl border-l-4 bg-white shadow-sm hover:shadow-lg transition-all ${
                accentStyles[category.accent]
              }`}
            >
              <h3 className="text-xl md:text-2xl font-google-sans font-medium mb-5">
                {category.title}
              </h3>

              <ul className="space-y-2">
                {category.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                    <span className="text-charcoal/80 leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
