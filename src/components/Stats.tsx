import { useCounter, useScrollAnimation } from '../hooks/useAnimations';
import { Award, FolderOpen, Users, Lightbulb, Film } from 'lucide-react';

const stats = [
  { icon: Award, value: 13, suffix: '+', label: 'Years Experience', color: 'from-primary-500 to-amber-400' },
  { icon: FolderOpen, value: 1000, suffix: '+', label: 'Projects', color: 'from-accent-500 to-emerald-400' },
  { icon: Users, value: 600, suffix: '+', label: 'Happy Clients', color: 'from-sky-500 to-cyan-400' },
  { icon: Lightbulb, value: 70, suffix: '+', label: 'Creative Minds', color: 'from-rose-500 to-pink-400' },
  { icon: Film, value: 500, suffix: '+', label: 'Ad Films Created', color: 'from-amber-500 to-yellow-400' },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { count, ref } = useCounter(stat.value, 2000);
  const { ref: animRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={(node) => {
        (animRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }}
      className={`group relative bg-white border border-gray-200 rounded-xl p-1.5 md:p-6 text-center hover:border-primary-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10 ${
        isVisible ? 'animate-on-scroll-scale visible' : 'animate-on-scroll-scale'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`w-5 h-5 md:w-10 md:h-10 mx-auto mb-1 md:mb-3 rounded-lg md:rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <stat.icon className="w-2.5 h-2.5 md:w-5 md:h-5 text-white" />
      </div>
      <div className="font-heading text-sm md:text-4xl font-bold text-gray-900 leading-tight">
        {count}{stat.suffix}
      </div>
      <p className="text-gray-500 text-[8px] md:text-sm font-medium leading-tight">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="stats" className="relative py-4 md:py-14 px-3 md:px-8 lg:px-12 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #fef3c7 100%)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-transparent to-amber-50/30" />
      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative container-max">
        <div className={`text-center mb-3 md:mb-8 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <h2 className="font-heading text-base md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 md:mb-2">
            Why Choose <span className="shimmer-text">Creayas</span>
          </h2>
          <p className="text-gray-500 text-[10px] md:text-base max-w-2xl mx-auto hidden md:block">
            Results don't lie. Our track record speaks volumes about the craft, dedication, and impact we bring to every production.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-1.5 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
