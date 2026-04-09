import { Marquee } from './Marquee';

const testimonials = [
  {
    quote: "They didn't just match our vision—they elevated it entirely. The AI worked like invisible magic, but the result feels remarkably human.",
    name: "Sarah Chen",
    role: "CEO, Luminary"
  },
  {
    quote: "Conversions up 4x in the first month. The performance optimizations happened automatically. Truly game-changing.",
    name: "Marcus Webb",
    role: "Head of Growth, Arcline"
  },
  {
    quote: "They didn't just design our site, they captured our brand's soul. The fluid, organic aesthetics are simply breathtaking.",
    name: "Elena Voss",
    role: "Brand Director, Helix"
  },
  {
    quote: "The speed is incomprehensible. What took our last agency three months was finished in four days. And the quality is vastly superior.",
    name: "Sarah J.",
    role: "CMO, TechFlow"
  },
  {
    quote: "We were skeptical about 'AI-powered' design. Then we saw the results. It's not about replacing humans; it's about giving brilliant designers superpowers.",
    name: "David M.",
    role: "Founder, Vertex"
  },
  {
    quote: "Our conversion rate jumped 40% in the first week. The attention to typography, spacing, and interaction design is simply world-class.",
    name: "Elena R.",
    role: "VP Marketing, Nova"
  },
  {
    quote: "A poetic approach to code. The liquid glass interfaces they built for us feel like holding a living digital object.",
    name: "Aisha Patel",
    role: "VP Marketing, Sova"
  }
];

export function Testimonials() {
  return (
    <section className="bg-[#050a06] py-32 overflow-hidden w-full relative">
      <div className="relative z-10 flex flex-col items-center text-center mb-16 px-6 md:px-16 lg:px-24">
        <div className="liquid-glass rounded-full px-4 py-1.5 inline-block mb-4 text-sm font-body text-[#E0E7E0]/90">
          What They Say
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading italic text-[#E0E7E0] tracking-tight">
          Don't take our word for it.
        </h2>
      </div>

      <div className="w-full relative py-8">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050a06] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050a06] to-transparent z-10 pointer-events-none" />
        <Marquee speed={40}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="liquid-glass rounded-2xl p-8 relative flex flex-col h-[280px] w-[320px] md:w-[400px] mx-4 md:mx-6 whitespace-normal text-[#E0E7E0]"
            >
              <div className="text-[#A3E635] text-5xl font-heading absolute top-6 left-6 leading-none">
                "
              </div>
              <p className="text-[#E0E7E0]/75 font-body font-light text-sm md:text-base italic mt-8 mb-6 leading-relaxed flex-grow">
                {t.quote}
              </p>
              <div>
                <div className="text-[#E0E7E0] font-medium font-body text-sm md:text-base">{t.name}</div>
                <div className="text-[#E0E7E0]/50 font-body font-light text-xs md:text-sm mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
