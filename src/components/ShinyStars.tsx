import { useMemo } from "react";
import "./ShinyStars.css";

export function ShinyStars() {
  const motes = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => {
      // Very small, subtle glowing particles
      const size = 1 + Math.random() * 4; 
      const left = Math.random() * 100;
      // Slow, elegant falling speeds
      const animationDuration = 20 + Math.random() * 20; 
      // Negative delay means the animation is already running (fills the screen on load)
      const animationDelay = Math.random() * 40; 
      // Very faint opacity (overlay material)
      const opacity = 0.15 + Math.random() * 0.35; 
      
      const swayType = Math.floor(Math.random() * 3) + 1;
      
      return {
        id: i,
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `-${animationDelay}s`,
        opacity,
        animationName: `fall-mote-${swayType}`,
      };
    });
  }, []);

  return (
    <div className="materials-container">
      {motes.map((mote) => (
        <div 
          key={mote.id} 
          className="mote"
          style={{
            width: mote.width,
            height: mote.height,
            left: mote.left,
            animationDuration: mote.animationDuration,
            animationDelay: mote.animationDelay,
            animationName: mote.animationName,
            "--mote-opacity": mote.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}