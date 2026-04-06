import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export function Marquee({ children, direction = "left", speed = 40, className }: MarqueeProps) {
  return (
    <div className={cn("flex w-full overflow-hidden whitespace-nowrap", className)}>
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-6 md:gap-8 px-3 md:px-4"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-6 md:gap-8 px-3 md:px-4"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
