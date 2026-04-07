import { useState, useEffect } from 'react';
import { ArrowUpRight, Feather, Sparkles, Waves, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurText } from './components/BlurText';
import { VideoBackground } from './components/VideoBackground';
import { LoadingScreen } from './components/LoadingScreen';
import { Marquee } from './components/Marquee';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Strictly detect mobile operating systems regardless of "Desktop Mode" browser requests
    const checkMobile = () => {
      const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
      return /android/i.test(ua) || /iPad|iPhone|iPod/.test(ua);
    };
    setIsMobile(checkMobile());
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <main 
        className="bg-background overflow-visible min-h-screen text-foreground font-body transition-colors duration-700"
        style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.5s ease-out, background-color 0.7s, color 0.7s" }}
      >
      
      {/* Cinematic Film Grain Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.04] mix-blend-overlay" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      ></div>

      {/* SECTION 1 — NAVBAR (fixed) */}
      <nav className="fixed top-6 left-0 right-0 z-50 px-6 md:px-12 flex items-center justify-between pointer-events-none">
        <div className="flex items-center pointer-events-auto">
          <motion.div 
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(232, 228, 223, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center backdrop-blur-md border border-foreground/10 text-foreground font-heading italic text-3xl font-light cursor-pointer transition-colors shadow-[0_0_15px_rgba(0,0,0,0.1)]"
          >
            α
          </motion.div>
        </div>
        
        <div className="hidden md:flex border border-foreground/20 bg-background/40 backdrop-blur-md rounded-full px-8 py-3 items-center gap-10 pointer-events-auto shadow-[0_0_20px_rgba(0,0,0,0.1)]">
          {['Story', 'The Craft', 'Elements', 'Reviews', 'Connect'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors tracking-wide">
              {item}
            </a>
          ))}
        </div>

        <div className="pointer-events-auto flex items-center gap-3">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background font-body rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 hover:bg-foreground/90 transition-colors shadow-[0_0_20px_rgba(232,228,223,0.1)]"
          >
            Begin <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>
      </nav>

      {/* SECTION 2 — HERO */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-start pt-[12svh] md:pt-[15svh] items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          {isMobile ? (
            <VideoBackground 
              src="/herovideo.mp4"
              poster="/bookbg.jpg"
              className="opacity-100 pointer-events-none select-none bg-[#0A1008]"
              videoClassName="object-cover object-[center_60%] pointer-events-none select-none"
            />
          ) : (
            <VideoBackground 
              src="/herovideodesk.mp4"
              poster="/herodesk.jpg"
              className="opacity-100 pointer-events-none select-none bg-[#0A1008]"
              videoClassName="object-cover object-[center_60%] pointer-events-none select-none"
            />
          )}
          {/* Extremely subtle darkening only for readability, removed heavy transitions */}
          <div className="absolute inset-0 bg-black/5 z-[1]" />
        </div>

        {/* Top Content (Above Book) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative z-10 w-full flex justify-center px-4 mb-[15vh]"
        >
          <div className="transparent-glass rounded-full p-1 pr-4 flex items-center gap-3 mb-2">
            <span className="bg-[#E8E4DF] text-[#0A1008] text-[10px] sm:text-xs font-medium px-3 py-1 rounded-full">New</span>
            <span className="text-xs sm:text-sm text-[#E8E4DF]/90">Unfolding the future of digital design.</span>
          </div>
        </motion.div>

        {/* Center Content (Between Branch and Book) */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto gap-4 md:gap-5 w-full">
          <BlurText 
            text="Your Story, Beautifully Told." 
            className="text-[2.75rem] md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-2px] md:tracking-[-4px]" 
          />

          <motion.p 
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs md:text-sm font-light text-white/80 max-w-[16rem] md:max-w-2xl mb-2"
          >
            Digital experiences rooted in strategy and elevated by AI. We craft websites that breathe, flow, and captivate your audience.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 mt-2"
          >
            <button className="transparent-glass rounded-full px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm font-medium flex items-center gap-2 text-[#E8E4DF] transition-colors hover:bg-white/5">
              Begin Your Chapter <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[10svh] bg-gradient-to-b from-transparent via-[#0A1008]/80 to-[#0A1008] z-[5] pointer-events-none"></div>
      </section>

      {/* SECTION 3 — PARTNERS BAR */}
      <section id="story" className="relative z-10 bg-background pb-16 pt-0 flex flex-col items-center w-full transition-colors duration-700 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="transparent-glass rounded-full px-4 py-1.5 text-xs font-medium text-[#E8E4DF] mb-6"
        >
          Digital narratives crafted for
        </motion.div>
        <div className="w-full relative py-4">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <Marquee speed={40} className="opacity-70">
            {['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma', 'OpenAI', 'Anthropic', 'Ramp'].map((partner, i) => (
              <span 
                key={`${partner}-${i}`} 
                className="text-xl md:text-3xl font-heading italic text-[#E8E4DF] tracking-tight mx-4 md:mx-8"
              >
                {partner}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* SECTION 4 — START SECTION ("The Process") */}
      <section className="relative w-full min-h-[700px] py-32 px-6 md:px-16 lg:px-24 flex items-center justify-center bg-background">
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
          <div className="transparent-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body inline-block mb-4">
            The Process
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-6">
            Plant the seed. We'll grow the vision.
          </h2>
          <p className="text-foreground/60 font-body font-light text-base md:text-lg mb-10">
            Share your story. Our AI handles the invisible heavy lifting—wireframes, design, and code. Watch your brand bloom in days, not quarters.
          </p>
          <button className="transparent-glass rounded-full px-8 py-4 text-sm font-medium flex items-center gap-2 hover:bg-foreground/5 transition-colors">
            Start Weaving <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* SECTION 4.5 — PHILOSOPHY */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-background overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-7xl font-heading italic text-foreground tracking-tight leading-[1] mb-8"
          >
            "Good design is obvious. <br/>Great design is transparent."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground/60 font-body font-light text-base md:text-xl max-w-3xl"
          >
            We believe that the best websites don't feel like websites at all. They feel like environments.
            By harnessing the processing power of artificial intelligence, we eliminate the friction of traditional web development, leaving only pure, unadulterated storytelling.
          </motion.p>
        </div>
      </section>

      {/* SECTION 5 — FEATURES CHESS */}
      <section className="py-32 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="transparent-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body inline-block mb-4">
            The Craft
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9]">
            Where intelligence meets art.
          </h2>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-6">
              Rooted in strategy. Designed to bloom.
            </h3>
            <p className="text-foreground/60 font-body font-light text-base md:text-lg mb-8">
              Every pixel is intentional. Our AI studies the landscape of top sites, then organically builds yours to naturally captivate and convert.
            </p>
            <button className="transparent-glass rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 hover:bg-foreground/5 transition-colors">
              Learn more <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-2xl overflow-hidden aspect-video bg-foreground/5 flex items-center justify-center"
          >
            {/* Placeholder for GIF */}
            <div className="w-32 h-32 rounded-full bg-foreground/10 blur-2xl animate-pulse" />
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 glass-card rounded-2xl overflow-hidden aspect-video bg-foreground/5 flex items-center justify-center"
          >
             {/* Placeholder for GIF */}
             <div className="w-full h-full bg-gradient-to-br from-foreground/5 to-transparent" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-3xl md:text-4xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-6">
              A living ecosystem that grows with you.
            </h3>
            <p className="text-foreground/60 font-body font-light text-base md:text-lg mb-8">
              Your site is never static. AI quietly monitors how visitors flow through your story, adapting and optimizing in real-time. Natural evolution, no manual updates.
            </p>
            <button className="transparent-glass rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 hover:bg-foreground/5 transition-colors">
              See how it works <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — FEATURES GRID */}
      <section id="elements" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="transparent-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body inline-block mb-4">
            The Elements
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9]">
            Craftsmanship in every detail.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Feather, title: "Days, Not Months", desc: "From blank page to a living breathing site at a pace that redefines fast." },
            { icon: Sparkles, title: "Obsessively Crafted", desc: "Every word considered. Every pixel refined to feel entirely human." },
            { icon: Waves, title: "Natural Flow", desc: "Layouts informed by organic user behavior. Decisions backed by silent performance data." },
            { icon: Shield, title: "Secure & Rooted", desc: "Enterprise-grade stability anchoring your digital presence." }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 flex flex-col items-start text-left"
            >
              <div className="transparent-glass rounded-full w-10 h-10 flex items-center justify-center mb-6">
                <feature.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-lg font-heading italic text-foreground mb-2">{feature.title}</h3>
              <p className="text-foreground/60 font-body font-light text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 7 — STATS */}
      <section className="relative w-full py-32 px-6 md:px-16 lg:px-24 bg-background">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto glass-card rounded-3xl p-12 md:p-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "200+", label: "Sites launched" },
            { value: "98%", label: "Client satisfaction" },
            { value: "3.2x", label: "More conversions" },
            { value: "5 days", label: "Average delivery" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground mb-2">{stat.value}</div>
              <div className="text-foreground/60 font-body font-light text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 8 — TESTIMONIALS */}
      <section id="reviews" className="py-32 w-full mx-auto overflow-hidden">
        <div className="flex flex-col items-center text-center mb-16 px-6 md:px-16 lg:px-24">
          <div className="transparent-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body inline-block mb-4">
            The Reviews
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9]">
            Read their chapters.
          </h2>
        </div>

        <div className="w-full relative py-8">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <Marquee speed={30}>
            {[
              { quote: "They didn't just match our vision—they elevated it entirely. The AI worked like invisible magic, but the result feels remarkably human.", name: "Sarah Chen", role: "CEO, Luminary" },
              { quote: "Conversions up 4x in the first month. The performance optimizations happened automatically. Truly game-changing.", name: "Marcus Webb", role: "Head of Growth, Arcline" },
              { quote: "They didn't just design our site, they captured our brand's soul. The fluid, organic aesthetics are simply breathtaking.", name: "Elena Voss", role: "Brand Director, Helix" },
              { quote: "We asked for a website and got a digital masterpiece. The process was seamless, and the results are undeniable.", name: "David Kim", role: "Founder, Zenith" },
              { quote: "Every pixel breathes life. It's rare to find an agency that understands both cutting-edge AI and raw emotional storytelling.", name: "Chloe Dupont", role: "Creative Lead, Aethel" },
              { quote: "From the incredibly swift delivery to the stunning final aesthetic, they rewrote the rules of what we thought was possible.", name: "James Holden", role: "Partner, Nexus" },
              { quote: "A poetic approach to code. The liquid glass interfaces they built for us feel like holding a living digital object.", name: "Aisha Patel", role: "VP Marketing, Sova" }
            ].map((test, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 flex flex-col h-[280px] w-[320px] md:w-[400px] mx-4 md:mx-6 whitespace-normal">
                <p className="text-foreground/80 font-body font-light text-sm md:text-base italic mb-8 flex-grow">"{test.quote}"</p>
                <div>
                  <div className="text-foreground font-body font-medium text-sm md:text-base">{test.name}</div>
                  <div className="text-foreground/50 font-body font-light text-xs md:text-sm">{test.role}</div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* SECTION 9 — CTA FOOTER */}
      <section id="connect" className="relative w-full pt-32 pb-8 px-6 md:px-16 lg:px-24 flex flex-col items-center text-center bg-background">
        <div className="relative z-10 flex flex-col items-center flex-grow w-full max-w-4xl pt-16 pb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-8">
            Ready to write your next chapter?
          </h2>
          <p className="text-foreground/60 font-body font-light text-lg md:text-xl mb-12 max-w-xl">
            Book a free strategy session. See how beautiful AI-driven design can be.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="transparent-glass rounded-full px-8 py-4 text-sm font-medium flex items-center gap-2 hover:bg-foreground/5 transition-colors">
              Book a Call <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="bg-foreground text-background font-body rounded-full px-8 py-4 text-sm font-medium flex items-center gap-2 hover:bg-foreground/90 transition-colors">
              Explore Packages
            </button>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl border-t border-foreground/10 pt-8 mt-auto flex flex-col md:flex-row items-center justify-between gap-4 text-foreground/40 text-xs font-light">
          <div>© 2026 Studio. All rights reserved. Developed by F12x (rajdeep.0.21)</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground/80 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground/80 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground/80 transition-colors">Contact</a>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}

export default App;

