import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function CtaFooter() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* CTA Section */}
      <div className="relative py-32 px-6 md:px-12 flex flex-col items-center justify-center text-center min-h-[600px]">
        {/* Background Video */}
        <video 
          className="autoPlay loop muted playsInline absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/cta-desktop.mp4"
          autoPlay loop muted playsInline
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-[#020602]/55 z-0" />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-[#020602] to-transparent z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#020602] to-transparent z-0" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading italic text-[#E0E7E0] mb-6"
          >
            Your next website starts here.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#E0E7E0]/60 font-body font-light text-base md:text-lg mb-10 max-w-lg"
          >
            Join the forward-thinking brands that have already made the leap. The future of web design is faster, smarter, and infinitely more beautiful.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-2 text-[#E0E7E0] hover:bg-[#E0E7E0]/10 transition-colors font-medium">
              Book a Call <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="bg-[#A3E635] text-[#020602] font-semibold rounded-full px-6 py-3 hover:bg-[#A3E635] transition-colors">
              View Pricing
            </button>
          </motion.div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 border-t border-[#E0E7E0]/5 bg-[#020602] py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[#E0E7E0]/40 text-sm font-body">
          <div>&copy; {new Date().getFullYear()} Studio AI. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#E0E7E0] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#E0E7E0] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#E0E7E0] transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
