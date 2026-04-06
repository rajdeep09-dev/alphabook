import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../lib/utils';

export function BlurText({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10px 0px" });
  const words = text.split(' ');

  return (
    <div ref={ref} className={cn("flex flex-wrap justify-center", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={isInView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.35,
            delay: delay + i * 0.1,
            ease: "easeOut"
          }}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}