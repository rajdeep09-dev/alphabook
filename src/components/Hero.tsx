import { ArrowUpRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlurText } from './BlurText';

export function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-center">
      {/* Background Video */}
      <video 
        className="autoPlay loop muted playsInline absolute inset-0 w-full h-full object-cover md:object-cover object-[center_20%] z-0"
        src="/herobgdesktop.mp4"
        autoPlay loop muted playsInline
      />
      
      {/* Bottom gradient for smooth transition to the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-[25vh] bg-gradient-to-b from-transparent to-[#020602] z-10 pointer-events-none" />

      {/* Content Layout - Centered directly in the heart shape */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-4xl mx-auto" style={{ marginTop: '-5vh' }}>
        <div className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-3 mb-6 shadow-xl">
          <span className="bg-[#A3E635] text-[#020602] text-xs font-semibold px-3 py-1 rounded-full">New</span>
          <span className="text-sm text-[#E0E7E0]/90 pr-3 drop-shadow-md">Introducing AI-powered web design.</span>
        </div>

        <BlurText 
          text="The Website Your Brand Deserves" 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading italic premium-text-gradient leading-[0.85] tracking-[-2px] md:tracking-[-3px] drop-shadow-2xl" 
        />

        <motion.p 
          initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-sm md:text-base text-[#E0E7E0]/90 font-body font-medium leading-snug mt-6 max-w-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts. This is web design, wildly reimagined.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <button className="liquid-glass rounded-full px-6 py-3 flex items-center gap-2 text-[#E0E7E0] hover:bg-white/5 transition-colors shadow-lg border border-[#A3E635]/20">
            Get Started <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="liquid-glass rounded-full text-[#E0E7E0] font-body text-sm flex items-center gap-2 px-6 py-3 hover:bg-white/5 transition-colors shadow-lg border border-[#A3E635]/20">
            Watch the Film <Play className="w-4 h-4 fill-current" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
