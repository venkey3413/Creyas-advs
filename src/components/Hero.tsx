import { useEffect, useState } from 'react';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';

const heroTags = ['Ad Films', 'Corporate Videos', 'Brand Stories', 'Product Videos'];

export default function Hero() {
  const [tagIndex, setTagIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setTagIndex((prev) => (prev + 1) % heroTags.length);
        setIsTransitioning(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-dark-950">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 scale-110">
          <iframe
            src="https://www.youtube.com/embed/3gKp3qLvsZ0?autoplay=1&mute=1&loop=1&playlist=3gKp3qLvsZ0&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] min-w-[100vw] min-h-[56.25vw] pointer-events-none"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Creayas Showreel Background"
          />
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-dark-950/60" />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-dark-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/40" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Accent glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float delay-300" />
      </div>

      <div className="relative container-max w-full section-padding pt-32">
        <div className="max-w-3xl">
          {/* Content */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-primary-400 text-sm font-medium tracking-wide">
                  Cinematic Video Production Studio
                </span>
              </div>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] animate-fade-in-up delay-100">
              We Create{' '}
              <span className="gradient-text">Cinematic</span>
              <br />
              Visuals That Tell
              <br />
              <span className="text-dark-300">Your Story</span>
            </h1>

            <div className="flex flex-wrap gap-3 animate-fade-in-up delay-150">
              {heroTags.map((tag, i) => (
                <span
                  key={tag}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold border backdrop-blur-sm transition-all duration-400 ${
                    i === tagIndex && !isTransitioning
                      ? 'bg-primary-500/20 border-primary-500/40 text-primary-300 scale-105'
                      : 'bg-dark-800/40 border-dark-700/40 text-dark-400'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-dark-300 text-lg md:text-xl leading-relaxed max-w-xl animate-fade-in-up delay-200">
              High-quality video production for agencies, businesses & creatives.
              We transform concepts into cinematic experiences that speak louder than words.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a
                href="#work"
                className="group flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-1"
              >
                See Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#showreel"
                className="group flex items-center gap-3 border-2 border-white/20 hover:border-primary-500/50 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              >
                <span className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                  <Play className="w-4 h-4 text-primary-400 group-hover:text-white transition-colors" fill="currentColor" />
                </span>
                Watch Showreel
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <a href="#stats" className="text-dark-500 hover:text-primary-400 transition-colors">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
