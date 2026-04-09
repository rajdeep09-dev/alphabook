import { motion } from 'framer-motion';

export function FeaturesChess() {
  return (
    <section className="bg-[#050a06] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="liquid-glass rounded-full px-4 py-1.5 inline-block mb-4 text-sm font-body text-[#E0E7E0]/90">
            Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-heading italic text-[#E0E7E0]">
            Pro features. Zero complexity.
          </h2>
        </div>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-heading italic text-[#E0E7E0]">Lightning Fast Delivery</h3>
            <p className="text-[#E0E7E0]/65 font-body font-light leading-relaxed">
              Traditional agencies take months. Our AI-augmented workflow compresses development time from weeks to mere days, without ever sacrificing quality or attention to detail.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="liquid-glass rounded-2xl p-4 overflow-hidden">
              <img src="/src/assets/feature-1.gif" alt="Speed workflow" className="w-full h-auto rounded-xl" />
            </div>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-heading italic text-[#E0E7E0]">Pixel-Perfect Engineering</h3>
            <p className="text-[#E0E7E0]/65 font-body font-light leading-relaxed">
              We write clean, semantic, and highly optimized code. Every animation is buttery smooth, every transition is flawless, and the performance scores will make your competitors weep.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="liquid-glass rounded-2xl p-4 overflow-hidden">
              <img src="/src/assets/feature-2.gif" alt="Engineering" className="w-full h-auto rounded-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
