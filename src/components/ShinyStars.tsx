import { useMemo } from "react";
import "./ShinyStars.css";

export function ShinyStars() {
  const motes = useMemo(() => {
    // A clean, modest amount of motes to look minimal but alive
    return Array.from({ length: 30 }).map((_, i) => {
      // Very small, subtle particles
      const size = 1 + Math.random() * 2; 
      const left = Math.random() * 100;
      // Slow, elegant falling speeds
      const animationDuration = 20 + Math.random() * 30; 
      // Fills the screen immediately
      const animationDelay = Math.random() * 40; 
      // Faint opacity, just enough to catch the eye
      const opacity = 0.1 + Math.random() * 0.2; 
      
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