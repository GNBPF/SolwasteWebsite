import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Leaf, Settings } from 'lucide-react';

const BenefitsSection = () => {
  const benefitCategories = [
    {
      icon: Shield,
      title: "Government Benefits",
      color: "gold",
      benefits: [
        "Compliance with SWM 2016",
        "Avoid penalties and fines",
        "Eligible for certain municipal incentives (varies by state)",
        "Supports ESG and CSR reporting requirements",
        "Aligns with Smart City guidelines"
      ]
    },
    {
      icon: Users,
      title: "Individual / Community Benefits",
      color: "moss",
      benefits: [
        "Cleaner society premises",
        "No dependence on external waste contractors",
        "Lower monthly waste disposal expenses",
        "Generates usable compost for gardens",
        "Eliminates odour, pests, and overflowing bins"
      ]
    },
    {
      icon: Leaf,
      title: "Environmental Benefits",
      color: "green-600",
      benefits: [
        "70–90% waste diversion from landfills",
        "Lower methane emissions",
        "Reduces carbon footprint",
        "Supports circular economy by turning waste into resource",
        "Conserves soil quality using organic compost"
      ]
    },
    {
      icon: Settings,
      title: "Operational Benefits",
      color: "charcoal",
      benefits: [
        "Automated, low manpower",
        "24/7 service support",
        "Fast processing cycle",
        "Long machine life & low maintenance"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      gold: { bg: 'bg-gold/10', text: 'text-gold', border: 'border-gold/30' },
      moss: { bg: 'bg-moss/10', text: 'text-moss', border: 'border-moss/30' },
      'green-600': { bg: 'bg-green-600/10', text: 'text-green-600', border: 'border-green-600/30' },
      charcoal: { bg: 'bg-charcoal/10', text: 'text-charcoal', border: 'border-charcoal/30' }
    };
    return colors[color] || colors.moss;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-moss/5 to-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-moss uppercase tracking-[0.3em] text-xs font-bold">Why Choose Solwaste</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-4 mb-6 text-charcoal">
            Benefits Across Every Level
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefitCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`p-8 bg-white rounded-2xl shadow-lg border-2 ${colors.border} hover:shadow-2xl transition-all`}
              >
                <div className={`inline-flex items-center justify-center p-4 ${colors.bg} rounded-xl mb-6`}>
                  <category.icon size={32} className={colors.text} />
                </div>
                <h3 className={`text-2xl font-serif mb-6 ${colors.text}`}>{category.title}</h3>
                <ul className="space-y-3">
                  {category.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.bg} flex-shrink-0`} />
                      <span className="text-charcoal/80 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
