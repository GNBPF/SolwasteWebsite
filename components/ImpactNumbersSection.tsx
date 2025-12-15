import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { TrendingUp, MapPin, Building2 } from 'lucide-react';

/* ----------------------------------------
   Smooth Count Up Component (Production)
----------------------------------------- */
const CountUpNumber = ({ value }) => {
  const numericValue = parseInt(value.replace(/\D/g, ''), 10);
  const hasPlus = value.includes('+');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);

  // ✅ Smooth, stable spring (no jitter)
  const rounded = useSpring(count, {
    stiffness: 60,
    damping: 20,
    mass: 1,
    restDelta: 0.01
  });

  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      count.set(numericValue);
    }
  }, [isInView, numericValue, count]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="inline-block"
    >
      {displayValue}
      {hasPlus && '+'}
    </motion.span>
  );
};

/* ----------------------------------------
   Impact Numbers Section
----------------------------------------- */
const ImpactNumbersSection = () => {
  const stats = [
    {
      icon: Building2,
      number: '500+',
      label: 'Installations Across India',
      color: 'gold'
    },
    {
      icon: TrendingUp,
      number: '300+',
      label: 'Tons of Organic Waste Processed Monthly',
      color: 'moss'
    },
    {
      icon: MapPin,
      number: '100+',
      label: 'Cities Served',
      color: 'charcoal'
    }
  ];

  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-moss to-charcoal text-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">
            Our Impact
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif">
            Making a Real Difference
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/40 transition-all"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-xl mb-4">
                <stat.icon size={30} className="text-gold" />
              </div>

              {/* Animated Number */}
              <div className="text-4xl md:text-5xl font-serif text-gold mb-2">
                <CountUpNumber value={stat.number} />
              </div>

              {/* Label */}
              <p className="text-cream/80 text-sm md:text-base leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImpactNumbersSection;
