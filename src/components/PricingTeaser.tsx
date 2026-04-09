import { motion } from 'framer-motion';

const plans = [
  {
    name: "Starter",
    price: "₹29,999",
    desc: "Landing page, mobile-optimised, 3-day delivery",
    featured: false
  },
  {
    name: "Growth",
    price: "₹59,999",
    desc: "Full site, AI optimisation, integrations, 5-day delivery",
    featured: true
  },
  {
    name: "Scale",
    price: "₹99,999",
    desc: "Custom portal, automation, dedicated support, ongoing retainer",
    featured: false
  }
];

export function PricingTeaser() {
  return (
    <section className="bg-[#020602] py-24 px-6 md:px-12 lg:px-24" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="liquid-glass rounded-full px-4 py-1.5 inline-block mb-4 text-sm font-body text-[#E0E7E0]/90">
            Pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-heading italic text-[#E0E7E0]">
            Simple. Transparent. Yours.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`
                rounded-2xl p-8 flex flex-col items-center text-center
                ${plan.featured ? 'liquid-glass-strong scale-100 md:scale-105 border border-[#A3E635]/30 py-12 z-10' : 'liquid-glass z-0'}
              `}
            >
              <h3 className="font-heading italic text-[#E0E7E0] text-2xl mb-2">{plan.name}</h3>
              <div className="text-4xl font-heading italic text-[#A3E635] mb-4">{plan.price}</div>
              <p className="text-[#E0E7E0]/60 font-body font-light text-sm mb-8 flex-1">
                {plan.desc}
              </p>
              
              <button 
                className={`
                  w-full rounded-full py-3 text-sm transition-colors
                  ${plan.featured ? 'bg-[#A3E635] text-[#020602] font-semibold hover:bg-[#A3E635]' : 'liquid-glass-strong text-[#E0E7E0] hover:bg-[#E0E7E0]/10'}
                `}
              >
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
