import { ArrowUpRight, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-4 w-full px-8 lg:px-16 py-3 z-50 flex items-center justify-between">
      {/* Replaced logo with Glassmorphism Circle */}
      <div className="flex items-center">
        <div className="w-12 h-12 liquid-glass rounded-full flex items-center justify-center border-2 border-[#A3E635]/20">
          <div className="w-4 h-4 bg-[#A3E635] rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex liquid-glass rounded-full px-2 py-2 items-center gap-1">
        {['Home', 'Services', 'Work', 'Process', 'Pricing'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="px-3 py-2 text-sm font-medium font-body text-white hover:text-[#A3E635] transition-colors">
            {item}
          </a>
        ))}
        <button className="bg-[#A3E635] text-[#020602] rounded-full px-3.5 py-1.5 text-sm font-semibold flex items-center gap-1 ml-2 hover:bg-white transition-colors">
          Get Started <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex items-center">
        <button className="text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
