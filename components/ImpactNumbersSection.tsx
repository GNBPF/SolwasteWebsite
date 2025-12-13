import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, MapPin, Building2 } from 'lucide-react';

const ImpactNumbersSection = () => {
  const stats = [
    {
      icon: Building2,
      number: "500+",
      label: "Installations Across India",
      color: "gold"
    },
    {
      icon: TrendingUp,
      number: "300+",
      label: "Tons Organic Waste Processed Monthly",
      color: "moss"
    },
    {
      icon: MapPin,
      number: "100+",
      label: "Cities Served",
      color: "charcoal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string } } = {
      gold: { bg: 'bg-gold/10', text: 'text-gold' },
      moss: { bg: 'bg-moss/10', text: 'text-moss' },
      charcoal: { bg: 'bg-charcoal/10', text: 'text-charcoal' }
    };
    return colors[color] || colors.moss;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-moss to-charcoal text-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Our Impact</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-4 mb-6">
            Making a Real Difference
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-gold/50 transition-all"
            >
              <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-xl mb-6">
                <stat.icon size={36} className="text-gold" />
              </div>
              <div className="text-4xl md:text-5xl font-serif mb-3 text-gold">{stat.number}</div>
              <p className="text-cream/80 font-light leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbersSection;
