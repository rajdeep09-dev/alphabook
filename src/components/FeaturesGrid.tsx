import { motion } from 'framer-motion';
import { Zap, Palette, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Unmatched Speed",
    description: "Launch in days, not months. Our AI pipeline accelerates the tedious parts of development."
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Bespoke Design",
    description: "No generic templates. Every pixel is crafted to reflect your unique brand identity."
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Built to Convert",
    description: "Data-driven layouts designed to guide users seamlessly from discovery to action."
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Rock Solid",
    description: "Enterprise-grade security and reliability built into the foundation of your site."
  }
];

export function FeaturesGrid() {
  return (
    <section className="bg-[#050a06] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="liquid-glass rounded-full px-4 py-1.5 inline-block mb-4 text-sm font-body text-[#E0E7E0]/90">
            Why Us
          </div>
          <h2 className="text-3xl md:text-5xl font-heading italic text-[#E0E7E0]">
            The difference is everything.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="liquid-glass rounded-2xl p-6 flex flex-col items-start gap-4"
            >
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center text-[#A3E635]">
                {feature.icon}
              </div>
              <h3 className="font-heading italic text-[#E0E7E0] text-xl">{feature.title}</h3>
              <p className="text-[#E0E7E0]/65 font-body font-light text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
