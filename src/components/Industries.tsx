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
    <section id="industries" className="relative py-10 md:py-14 px-4 md:px-8 lg:px-12 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #f8fafc 50%, #fef9f0 100%)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-amber-50/30" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(249,115,22,0.5) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative container-max">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-8 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <p className="text-primary-400 font-semibold text-sm tracking-wider uppercase mb-3">Sectors We Serve</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Industries We <span className="shimmer-text">Excel In</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Whether it's a high-energy TVC or a nuanced corporate film, we deliver stunning visual narratives across every sector.
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-6">
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
      className={`group flex flex-col items-center text-center p-5 md:p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10 cursor-pointer ${
        isVisible ? 'animate-on-scroll-scale visible' : 'animate-on-scroll-scale'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-3 group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300">
        <industry.icon className="w-7 h-7 text-primary-400 group-hover:text-primary-300 transition-colors" />
      </div>
      <p className="text-gray-600 group-hover:text-gray-900 font-medium text-sm transition-colors duration-300">
        {industry.name}
      </p>
    </div>
  );
}
