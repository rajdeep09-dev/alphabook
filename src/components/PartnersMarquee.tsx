import { Marquee } from './Marquee';

export function PartnersMarquee() {
  return (
    <section className="relative z-20 bg-[#020602] pb-16 pt-8 flex flex-col items-center w-full overflow-hidden">
      <div className="liquid-glass rounded-full px-4 py-1.5 text-xs font-medium text-[#E0E7E0]/90 mb-8">
        Trusted by industry leaders
      </div>
      <div className="w-full relative py-4">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020602] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#020602] to-transparent z-10 pointer-events-none" />
        <Marquee speed={40} className="opacity-70">
          {['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma', 'OpenAI', 'Anthropic', 'Ramp'].map((partner, i) => (
            <span 
              key={`${partner}-${i}`} 
              className="text-xl md:text-3xl font-heading italic text-[#E0E7E0] tracking-tight mx-4 md:mx-8"
            >
              {partner}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
