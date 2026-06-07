import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

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
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 backdrop-blur-xl shadow-2xl shadow-primary-500/5 py-3 border-b border-primary-500/10'
          : 'bg-gradient-to-r from-dark-950/60 via-dark-900/40 to-dark-950/60 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container-max flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-amber-400 flex items-center justify-center font-heading font-bold text-white text-lg group-hover:scale-110 transition-transform duration-300">
            C
          </div>
          <span className="font-heading font-bold text-2xl text-white tracking-tight">
            Creayas
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-dark-300 hover:text-primary-400 font-medium text-sm tracking-wide transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onRequestCallback}
            className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            Request Callback
          </button>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden text-white p-2"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-dark-950/95 backdrop-blur-xl border-t border-dark-800/50 mt-3">
          <div className="container-max py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-dark-300 hover:text-primary-400 font-medium text-lg transition-colors duration-300 py-2"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                onRequestCallback();
                setIsMobileOpen(false);
              }}
              className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 mt-2 w-fit"
            >
              <Phone className="w-4 h-4" />
              Request Callback
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
