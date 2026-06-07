import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

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
    <section id="home" className="relative flex items-center overflow-hidden bg-dark-950 pt-16 pb-8 md:pt-24 md:pb-10">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float delay-300" />
      </div>

      <div className="relative container-max w-full px-3 md:px-8 lg:px-12">
        <div className="flex flex-row items-center gap-3 md:gap-10">

          {/* Left — 40% */}
          <div className="w-[42%] space-y-2 md:space-y-5">
            <div className="inline-flex items-center gap-1 md:gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-2 py-1 md:px-4 md:py-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-primary-400 text-[8px] md:text-xs font-medium tracking-wide leading-tight">
                Cinematic Video Production Studio
              </span>
            </div>

            <h1 className="font-heading text-[13px] sm:text-lg md:text-3xl lg:text-4xl font-bold text-white leading-[1.2]">
              We Create{' '}
              <span className="gradient-text">Cinematic</span>
              <br />
              Visuals That Tell
              <br />
              <span className="text-dark-300">Your Story</span>
            </h1>

            <div className="flex flex-wrap gap-1 md:gap-2">
              {heroTags.map((tag, i) => (
                <span
                  key={tag}
                  className={`px-1.5 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-xs font-semibold border transition-all duration-400 ${
                    i === tagIndex && !isTransitioning
                      ? 'bg-primary-500/20 border-primary-500/40 text-primary-300 scale-105'
                      : 'bg-dark-800/40 border-dark-700/40 text-dark-400'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-dark-300 text-[9px] md:text-sm leading-relaxed hidden sm:block">
              High-quality video production for agencies, businesses & creatives.
              We transform concepts into cinematic experiences that speak louder than words.
            </p>

            <a
              href="#stats"
              className="inline-flex items-center gap-1 md:gap-2 bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 md:px-6 md:py-3 rounded-full font-semibold text-[9px] md:text-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25"
            >
              See Our Work
              <ArrowRight className="w-2.5 h-2.5 md:w-4 md:h-4" />
            </a>
          </div>

          {/* Right — 58% video */}
          <div className="w-[58%]">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/10 border border-white/10" style={{ aspectRatio: '16/9' }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                src="https://res.cloudinary.com/dqdclezfo/video/upload/final_hero_section_video_3_fpux98.mp4"
              />
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>
          </div>

        </div>

        <div className="flex justify-center mt-4 md:mt-8">
          <a href="#stats" className="text-dark-500 hover:text-primary-400 transition-colors animate-bounce-subtle">
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
