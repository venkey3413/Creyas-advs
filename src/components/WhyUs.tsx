import { useScrollAnimation } from '../hooks/useAnimations';
import { Shield, Zap, Clock, Award, Heart, Target } from 'lucide-react';

const reasons = [
  { icon: Shield, title: 'End-to-End Production', desc: 'From concept to final cut, we handle every step of your video production journey.' },
  { icon: Zap, title: 'Lightning Fast Delivery', desc: 'Stringent deadlines? No problem. We deliver quality content on time, every time.' },
  { icon: Clock, title: '13+ Years of Excellence', desc: 'Over a decade of crafting compelling stories for brands across the globe.' },
  { icon: Award, title: 'Award-Winning Team', desc: 'Our creative minds have been recognized for excellence in ad film production.' },
  { icon: Heart, title: 'Client-First Approach', desc: 'Your vision is our priority. We go above and beyond to exceed expectations.' },
  { icon: Target, title: 'Result-Driven Content', desc: 'Every frame is crafted to captivate your audience and drive measurable results.' },
];

export default function WhyUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative bg-dark-900 section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950/80 to-dark-900/50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-3xl" />

      <div className="relative container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={ref as React.RefObject<HTMLDivElement>}>
            <div className={`${isVisible ? 'animate-on-scroll-left visible' : 'animate-on-scroll-left'}`}>
              <p className="text-primary-400 font-semibold text-sm tracking-wider uppercase mb-3">Why Us</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Because We Go <span className="gradient-text">Above & Beyond</span>
              </h2>
              <p className="text-dark-400 text-lg leading-relaxed mb-8">
                We don't just produce videos -- we engineer visual experiences that move people.
                Every project is a fresh canvas, every deadline is sacred, and every client becomes a long-term partner.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video mb-8">
              <img
                src="https://images.pexels.com/photos/2873485/pexels-photo-2873485.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Behind the scenes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-500/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-2xl shadow-primary-500/30">
                  <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <ReasonCard key={reason.title} reason={reason} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group bg-dark-900/50 border border-dark-800/50 rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? 'animate-on-scroll-right visible' : 'animate-on-scroll-right'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
        <reason.icon className="w-6 h-6 text-primary-400" />
      </div>
      <h3 className="font-heading font-bold text-white text-lg mb-2">{reason.title}</h3>
      <p className="text-dark-400 text-sm leading-relaxed">{reason.desc}</p>
    </div>
  );
}
