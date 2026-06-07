import { useScrollAnimation } from '../hooks/useAnimations';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTA({ onRequestCallback }: { onRequestCallback: () => void }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="relative section-padding overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0a00 0%, #0f172a 50%, #0f0a00 100%)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/8 via-transparent to-amber-500/8" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative container-max text-center">
        <div className={`max-w-3xl mx-auto ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <p className="text-primary-400 font-semibold text-sm tracking-wider uppercase mb-4">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Let's Create Something <span className="shimmer-text">Cinematic Together</span>
          </h2>
          <p className="text-dark-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            At Creayas, we believe every brand has a story worth telling. Driven by creativity, precision, and purpose, we deliver visual content that helps brands grow and stand out. Let's collaborate and create something unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <button
              onClick={onRequestCallback}
              className="group flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Request Callback
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="mailto:hello@creayas.com"
              className="flex items-center gap-2 border-2 border-dark-700 hover:border-primary-500/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
