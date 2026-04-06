import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ["Design", "Create", "Inspire"];

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);

  // Keep ref up to date
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Word cycling logic (0 -> 1 -> 2)
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => {
        if (prev < words.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 1100); // Slightly slower for a more poetic feel

    return () => clearInterval(interval);
  }, []);

  // Counter logic (0 -> 100 over 3.3s to match the slower word cycle)
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      const currentProgress = Math.min((elapsed / 3300) * 100, 100);
      setProgress(currentProgress);

      if (currentProgress < 100) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // When 100% is reached, wait 600ms then call onComplete for a gentle pause
        setTimeout(() => {
          onCompleteRef.current();
        }, 600);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground"
      exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Element 1: Label */}
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-12 text-xs md:text-sm text-foreground/50 uppercase tracking-[0.3em]"
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Alpha Studio
      </motion.div>

      {/* Element 2: Rotating Words */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="text-4xl md:text-6xl lg:text-7xl font-heading italic text-foreground/90"
            initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -15, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Element 3: Counter */}
      <motion.div
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-6xl md:text-8xl lg:text-9xl font-heading text-foreground/90 tabular-nums"
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {Math.round(progress).toString().padStart(3, '0')}
      </motion.div>

      {/* Element 4: Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground/10">
        <motion.div
          className="h-full origin-left"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(232, 228, 223, 0.8) 100%)",
            boxShadow: "0 0 10px rgba(232, 228, 223, 0.4)",
            scaleX: progress / 100
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}