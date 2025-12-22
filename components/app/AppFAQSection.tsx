import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AppFAQSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is the Solwaste app completely free?",
      answer: "Yes, the app is 100% free to download and use. No hidden charges, no in-app purchases. Our mission is to empower every Indian household and community to start their sustainability journey."
    },
    {
      question: "Can my parents and grandparents use it easily?",
      answer: "Absolutely. We've designed the app with simplicity in mind. Large buttons, clear icons, Hindi language support, and voice-guided tips make it accessible for everyone—from tech-savvy youth to seniors."
    },
    {
      question: "Will the app show data from Solwaste machines in my society?",
      answer: "Yes! If your society has a Solwaste OTC or Biogas unit installed, the app will display real-time impact data—compost generated, CO₂ saved, and more. This feature is currently rolling out to partner communities."
    },
    {
      question: "Can societies contact Solwaste directly through the app?",
      answer: "Yes. The Solwaste Tab includes a simple query form where RWAs, offices, or individuals can submit their waste management challenges. Our team will reach out within 48 hours with tailored solutions."
    },
    {
      question: "Do I need to have a Solwaste machine to use the app?",
      answer: "Not at all. The app is designed for everyone—whether you're just starting your green journey at home, part of a society exploring solutions, or already using our machines. Start small, grow together."
    },
    {
      question: "Is my data safe and private?",
      answer: "100%. We take data privacy seriously. Your personal information is encrypted and never shared with third parties. We collect only what's necessary to provide you with a personalized experience."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-moss uppercase tracking-[0.3em] text-xs font-bold">Questions?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold mt-4 mb-6 text-charcoal">
            Everything you need to know
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl shadow-sm border border-charcoal/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-charcoal/5 transition-colors"
              >
                <span className="font-bold text-charcoal pr-4">{faq.question}</span>
                {openFaq === i ? (
                  <ChevronUp size={20} className="text-moss flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-charcoal/40 flex-shrink-0" />
                )}
              </button>
              
              {openFaq === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-5"
                >
                  <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppFAQSection;
