import { useCounter, useScrollAnimation } from '../hooks/useAnimations';
import { Award, FolderOpen, Users, Lightbulb, Globe, Film } from 'lucide-react';

const stats = [
  { icon: Award, value: 13, suffix: '+', label: 'Years Experience', color: 'from-primary-500 to-amber-400' },
  { icon: FolderOpen, value: 1000, suffix: '+', label: 'Projects', color: 'from-accent-500 to-emerald-400' },
  { icon: Users, value: 600, suffix: '+', label: 'Happy Clients', color: 'from-sky-500 to-cyan-400' },
  { icon: Lightbulb, value: 70, suffix: '+', label: 'Creative Minds', color: 'from-rose-500 to-pink-400' },
  { icon: Globe, value: 12, suffix: '', label: 'Countries & Counting', color: 'from-violet-500 to-purple-400' },
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
      className={`group relative bg-dark-900/50 border border-dark-800/50 rounded-2xl p-6 md:p-8 text-center hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/5 ${
        isVisible ? 'animate-on-scroll-scale visible' : 'animate-on-scroll-scale'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <stat.icon className="w-7 h-7 text-white" />
      </div>
      <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
        {count}{stat.suffix}
      </div>
      <p className="text-dark-400 font-medium">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="stats" className="relative bg-dark-950 section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/90 to-dark-900/50" />
      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative container-max">
        <div className={`text-center mb-16 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose <span className="gradient-text">Creayas</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Results don't lie. Our track record speaks volumes about the craft, dedication, and impact we bring to every production.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
