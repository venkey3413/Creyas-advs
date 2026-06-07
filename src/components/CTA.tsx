import { useScrollAnimation, useWordReveal, splitWords } from '../hooks/useAnimations';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTA({ onRequestCallback }: { onRequestCallback: () => void }) {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: headingRef, isVisible: headingVisible } = useWordReveal();

  return (
    <section id="contact" className="relative bg-dark-950 section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-amber-500/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />

      <div className="relative container-max text-center">
        <div className="max-w-3xl mx-auto">
          <p ref={ref as React.RefObject<HTMLDivElement>} className={`label-pop text-primary-400 font-semibold text-sm tracking-wider uppercase mb-4 inline-block ${isVisible ? 'visible' : ''}`}>Get In Touch</p>
          <h2 ref={headingRef as React.RefObject<HTMLDivElement>} className={`word-reveal font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight ${headingVisible ? 'visible' : ''}`}>
            {splitWords("Let's Create Something")} <span className="shimmer-text">{splitWords('Cinematic Together', 400)}</span>
          </h2>
          <p className={`slide-up text-dark-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed ${headingVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
            At Creayas, we believe every brand has a story worth telling. Driven by creativity, precision, and purpose, we deliver visual content that helps brands grow and stand out. Let's collaborate and create something unforgettable.
          </p>

          <div className={`slide-up flex flex-wrap items-center justify-center gap-4 ${headingVisible ? 'visible' : ''}`} style={{ transitionDelay: '800ms' }}>
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
