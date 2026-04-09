import { motion } from 'framer-motion';

export function GlowOrb() {
  return (
    <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#A3E635]/10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse" />
  );
}

export function FloatingLeaf() {
  return (
    <motion.div 
      className="absolute top-20 left-10 text-[#34D399]/20 animate-float pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L18.32,6.84C17.65,7.21 17.33,7.5 17,8Z" />
      </svg>
    </motion.div>
  );
}
