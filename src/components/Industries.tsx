import { useScrollAnimation } from '../hooks/useAnimations';
import {
  Landmark, HeartPulse, UtensilsCrossed, Truck, Factory,
  Building2, ShoppingBag, Sparkle, Shirt, Globe,
  GraduationCap, Cpu, Home, LandPlot, Star
} from 'lucide-react';

const industries = [
  { icon: Landmark, name: 'BFSI' },
  { icon: HeartPulse, name: 'Healthcare & Pharma' },
  { icon: UtensilsCrossed, name: 'Food & Beverages' },
  { icon: Truck, name: 'Logistics & Supply Chain' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: Building2, name: 'Architecture & Interior' },
  { icon: ShoppingBag, name: 'Consumer' },
  { icon: Sparkle, name: 'Beauty & Personal Care' },
  { icon: Shirt, name: 'Lifestyle & Fashion' },
  { icon: Globe, name: 'Conglomerates' },
  { icon: GraduationCap, name: 'Training & Education' },
  { icon: Cpu, name: 'IT & SaaS' },
  { icon: Home, name: 'Real Estate' },
  { icon: LandPlot, name: 'NGO & Government' },
  { icon: Star, name: 'Notable Personalities' },
];

export default function Industries() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="industries"
      className="relative py-10 md:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/cinematic-industries-bg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ECF5FC',
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(236,245,252,0.92), rgba(230,241,250,0.95))',
          backdropFilter: 'blur(2px)',
        }}
      />

      <div className="relative z-10 container-max px-4 md:px-8 lg:px-12">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-8 md:mb-12 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}
        >
          <span
            className="block text-center font-bold tracking-[2px] mb-3 md:mb-4 text-xs md:text-sm"
            style={{ color: '#F59E0B' }}
          >
            SECTORS WE SERVE
          </span>
          <h2
            className="font-heading font-extrabold text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-5"
            style={{ color: '#07142C' }}
          >
            Industries We{' '}
            <span style={{ color: '#F59E0B' }}>Excel In</span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-center text-sm md:text-lg leading-relaxed"
            style={{ color: '#4B5563' }}
          >
            Whether it's a high-energy TVC or a nuanced corporate film,
            we deliver stunning visual narratives across every sector.
          </p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-5">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.name} industry={industry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group flex flex-col items-center text-center p-2 md:p-6 cursor-pointer ${
        isVisible ? 'animate-on-scroll-scale visible' : 'animate-on-scroll-scale'
      }`}
      style={{
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.5)',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        transition: 'all 0.4s ease',
        transitionDelay: `${index * 50}ms`,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
      }}
    >
      <div
        className="w-8 h-8 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-1 md:mb-3 transition-all duration-300"
        style={{ background: 'rgba(245,158,11,0.1)' }}
      >
        <industry.icon className="w-4 h-4 md:w-6 md:h-6" style={{ color: '#F59E0B' }} />
      </div>
      <p
        className="font-semibold text-[9px] md:text-sm leading-tight transition-colors duration-300 group-hover:text-amber-500"
        style={{ color: '#07142C' }}
      >
        {industry.name}
      </p>
    </div>
  );
}
