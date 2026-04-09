import { motion } from 'framer-motion';

const steps = [
  {
    num: "1",
    title: "Discover",
    desc: "You share your vision, goals, and brand. We listen deeply."
  },
  {
    num: "2",
    title: "Design",
    desc: "Our AI drafts wireframes and visuals. You approve in hours."
  },
  {
    num: "3",
    title: "Build",
    desc: "Experts refine and ship a pixel-perfect site at speed."
  },
  {
    num: "4",
    title: "Optimise",
    desc: "Live analytics drive continuous improvement. No extra cost."
  }
];

export function ProcessSection() {
  return (
    <section className="bg-[#020602] py-24 px-6 md:px-12 lg:px-24 overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="liquid-glass rounded-full px-4 py-1.5 inline-block mb-4 text-sm font-body text-[#E0E7E0]/90">
            Our Process
          </div>
          <h2 className="text-3xl md:text-5xl font-heading italic text-[#E0E7E0]">
            Four steps to your perfect site.
          </h2>
        </div>

        <div className="relative">
          {/* Desktop Connector Line */}
          <div className="hidden lg:block absolute top-[40%] left-0 right-0 border-t border-[#A3E635]/20 z-0 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="liquid-glass rounded-2xl p-6 relative overflow-hidden h-full min-h-[200px]"
              >
                {/* Background Number */}
                <div className="absolute -right-4 -bottom-8 text-8xl font-heading italic text-[#A3E635]/10 select-none">
                  {step.num}
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-heading italic text-[#E0E7E0] text-2xl mb-3">{step.title}</h3>
                  <p className="text-[#E0E7E0]/65 font-body font-light text-sm pr-4">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
