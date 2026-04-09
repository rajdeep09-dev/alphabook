import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnersMarquee } from './components/PartnersMarquee';
import { StartSection } from './components/StartSection';
import { FeaturesChess } from './components/FeaturesChess';
import { FeaturesGrid } from './components/FeaturesGrid';
import { ProcessSection } from './components/ProcessSection';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { PricingTeaser } from './components/PricingTeaser';
import { CtaFooter } from './components/CtaFooter';
import { GlowOrb, FloatingLeaf } from './components/Effects';
import { LoadingScreen } from './components/LoadingScreen';
import { ShinyStars } from './components/ShinyStars';
import './components/ShinyStars.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-[#020602] min-h-screen text-[#FFFFFF] font-body selection:bg-[#A3E635] selection:text-[#020602] overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ShinyStars />
      </div>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative z-10">
          <GlowOrb />
          <FloatingLeaf />
          <Navbar />
          <Hero />
          <PartnersMarquee />
          <StartSection />
          <FeaturesChess />
          <FeaturesGrid />
          <ProcessSection />
          <Stats />
          <Testimonials />
          <PricingTeaser />
          <CtaFooter />
        </div>
      )}
    </div>
  );
}

export default App;
