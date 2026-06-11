import { useScrollAnimation } from '../hooks/useAnimations';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTA({ onRequestCallback }: { onRequestCallback: () => void }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0a00 0%, #0f172a 50%, #0f0a00 100%)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/8 via-transparent to-amber-500/8" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className={`relative container-max flex flex-col md:flex-row items-stretch min-h-[400px] ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>

        {/* Left — image */}
        <div className="w-full md:w-[45%] min-h-[250px] md:min-h-full">
          <img
            src="/Get in touch bg.jpg"
            alt="Get in touch"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right — content */}
        <div className="w-full md:w-[55%] flex flex-col justify-center px-6 md:px-12 py-12 md:py-16">
          <p className="text-primary-400 font-semibold text-sm tracking-wider uppercase mb-4">Get In Touch</p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            Let's Create Something <span className="shimmer-text">Cinematic Together</span>
          </h2>
          <p className="text-dark-300 text-base md:text-lg mb-8 leading-relaxed">
            Every brand has a story waiting to be told. At Creayas, we transform ideas into cinematic experiences that inspire, engage, and leave a lasting impact. From concept to final cut, we bring your vision to life with creativity, precision, and purpose.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <button
              onClick={onRequestCallback}
              className="group flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-1"
            >
              <Phone className="w-4 h-4" />
              Request Callback
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="mailto:hello@creayas.com"
              className="flex items-center gap-2 border-2 border-dark-700 hover:border-primary-500/50 text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:-translate-y-1"
            >
              Email Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
