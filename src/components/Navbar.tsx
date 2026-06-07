import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onRequestCallback }: { onRequestCallback: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-lg border-b border-gray-200 py-1.5 md:py-3'
          : 'bg-white/95 backdrop-blur-sm py-2 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 md:px-8 flex items-center justify-between gap-1 md:gap-4">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-1 md:gap-2 shrink-0">
          <div className="w-6 h-6 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-primary-500 to-amber-400 flex items-center justify-center font-heading font-bold text-white text-xs md:text-lg">
            C
          </div>
          <span className="font-heading font-bold text-sm md:text-2xl text-gray-900 tracking-tight">
            Creayas
          </span>
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-1 md:gap-8 overflow-x-auto scrollbar-hide">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-primary-500 font-medium text-[9px] md:text-sm tracking-wide transition-colors duration-300 whitespace-nowrap relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onRequestCallback}
          className="shrink-0 flex items-center gap-1 bg-primary-500 hover:bg-primary-600 text-white px-2 py-1 md:px-5 md:py-2.5 rounded-full font-semibold text-[8px] md:text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 whitespace-nowrap"
        >
          <Phone className="w-2.5 h-2.5 md:w-4 md:h-4" />
          <span className="hidden xs:inline">Request Callback</span>
          <span className="xs:hidden">Call</span>
        </button>

      </div>
    </nav>
  );
}
