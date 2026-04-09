import { motion } from 'framer-motion';

const stats = [
  { value: "2.5x", label: "Faster Delivery" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "$50M+", label: "Client Revenue Generated" },
  { value: "24/7", label: "AI-Powered Support" }
];

export function Stats() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Video (B&W) */}
      <video 
        className="autoPlay loop muted playsInline absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'saturate(0)' }}
        src="/videos/stats-desktop.mp4"
        autoPlay loop muted playsInline
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#020602]/60 z-0" />
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-[#020602] to-transparent z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#020602] to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass rounded-3xl p-12 md:p-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center gap-2">
                <div className="text-5xl md:text-6xl font-heading italic text-[#A3E635]">
                  {stat.value}
                </div>
                <div className="text-[#E0E7E0]/55 font-body font-light text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
