import React from 'react';
import { motion } from 'framer-motion';
// NEW ICONS IMPORTED HERE
import { Scale, Landmark, IndianRupee, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComplianceSection = () => {
  const compliancePoints = [
    {
      icon: Scale, // Represents Law, Justice, and Rules
      text: "As per SWM Rules 2016, bulk waste generators must process organic waste on-site."
    },
    {
      icon: Landmark, // Represents Institutions, Campuses, and Large Societies
      text: "Housing societies, hotels, restaurants, campuses, and commercial complexes are liable for compliance."
    },
    {
      icon: IndianRupee, // Represents Fines & Financial Incentives (Localized)
      text: "Many states incentivise composting systems, while fines for non-compliance are increasing."
    },
    {
      icon: Recycle, // Represents Circular Economy
      text: "Composting aligns with Smart City, Clean India, and circular economy initiatives."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream to-moss/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Mandatory Compliance</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-google-sans font-bold mt-4 mb-6 text-charcoal">
            Government Rules Now Demand<br />On-Site Waste Processing
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {compliancePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-moss/10 hover:border-gold/30 transition-all group"
            >
              {/* Added 'group-hover' classes to make the icon pop on hover */}
              <div className="flex-shrink-0 p-3 bg-moss/10 rounded-lg group-hover:bg-moss/20 transition-colors">
                <point.icon size={24} className="text-moss group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-charcoal/80 leading-relaxed">{point.text}</p>
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
            to="/contact"
            className="inline-block px-8 py-3 bg-moss text-cream rounded-full font-semibold hover:bg-gold transition-colors shadow-lg"
          >
            Know Your Compliance Responsibilities
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ComplianceSection;