import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function StartSection() {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center py-24 overflow-hidden">
      {/* Background Video */}
      <video 
        className="autoPlay loop muted playsInline absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/start-desktop.mp4"
        autoPlay loop muted playsInline
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#020602]/40 z-0" />
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-[#020602] to-transparent z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#050a06] to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass rounded-full px-4 py-1.5 mb-6 text-sm font-body text-[#E0E7E0]/90"
        >
          How It Works
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-heading italic text-[#E0E7E0] mb-6"
        >
          You dream it. We ship it.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#E0E7E0]/60 font-body font-light text-base md:text-lg mb-8"
        >
          We blend the speed of artificial intelligence with the precision of master craftsmen. 
          The result? Bespoke digital experiences that perform as beautifully as they look.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-2 text-[#E0E7E0] hover:bg-[#E0E7E0]/10 transition-colors font-medium"
        >
          Get Started <ArrowUpRight className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}
