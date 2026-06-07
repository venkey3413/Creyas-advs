import { useScrollAnimation, useWordReveal, splitWords } from '../hooks/useAnimations';
import {
  Film, Camera, Video, Presentation, Palette, Mic2,
  BookOpen, MessageSquareQuote, Plane, PartyPopper,
  Package, Share2, Smartphone, Box, Sparkles
} from 'lucide-react';

const services = [
  { icon: Film, title: 'Ad Films & Commercials', desc: 'Commercial films that grab attention in seconds and stay in the audience\'s memory.' },
  { icon: Package, title: 'Product Videos', desc: 'Showcasing your product with cinematic visuals that drive buying decisions.' },
  { icon: Video, title: 'Corporate & Brand Stories', desc: 'Business storytelling that connects emotionally and strengthens brand identity.' },
  { icon: Share2, title: 'Social Media Videos', desc: 'Promotion-ready content crafted for Instagram, Facebook, YouTube & shorts.' },
  { icon: PartyPopper, title: 'Event & Interview Films', desc: 'Capturing real moments, emotions, and conversations with cinematic precision.' },
  { icon: Presentation, title: 'Explainer Videos', desc: 'Explainer videos designed to educate, build trust, and drive faster conversions.' },
  { icon: Mic2, title: 'Video Podcast', desc: 'High-quality podcast filming with clear audio, studio lighting, and cinematic visuals.' },
  { icon: BookOpen, title: 'Documentary Films', desc: 'Real stories captured with honesty, depth, and cinematic storytelling.' },
  { icon: MessageSquareQuote, title: 'Testimonial Videos', desc: 'Real voices and real experiences captured to boost brand credibility.' },
  { icon: Plane, title: 'Drone Videography', desc: 'Aerial visuals that reveal scale, beauty, and perspective no ground camera can capture.' },
  { icon: Smartphone, title: 'Photoshoots', desc: 'Professional photography that blends creativity, precision, and brand storytelling.' },
  { icon: Camera, title: 'Editing & Color Grading', desc: 'From basic cleanup to cinematic grading — we shape visuals to look world-class.' },
  { icon: Sparkles, title: 'Educational & Training', desc: 'Educational videos designed to teach faster, smarter, and more visually.' },
  { icon: Palette, title: '2D/3D Animation', desc: 'Visual storytelling powered by dynamic 2D/3D animation and motion graphics.' },
  { icon: Box, title: 'Food & Hospitality', desc: 'Delicious visuals that make your dishes irresistible and your brand unforgettable.' },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="relative section-padding overflow-hidden" style={{ backgroundImage: "url('/Discover Our Expertise bg photo.jfif')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute inset-0 bg-dark-950/70" />

      <div className="relative container-max">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-16 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <p className="text-primary-400 font-semibold text-sm tracking-wider uppercase mb-3">Our Craft</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Discover Our <span className="shimmer-text">Expertise</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Explore our specialized video production services designed to elevate your brand.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative rounded-2xl bg-dark-900/50 border border-dark-800/50 hover:border-primary-500/30 cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary-500/10 p-3 md:p-6 ${
        isVisible ? 'animate-on-scroll-scale visible' : 'animate-on-scroll-scale'
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="w-7 h-7 md:w-10 md:h-10 rounded-xl bg-primary-500/20 border border-primary-500/20 flex items-center justify-center mb-2 md:mb-4 group-hover:bg-primary-500/40 transition-colors duration-300">
        <service.icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary-400" />
      </div>
      <h3 className="font-heading font-bold text-white text-[10px] md:text-lg mb-1 md:mb-2 leading-tight">{service.title}</h3>
      <p className="text-dark-400 text-[8px] md:text-sm leading-relaxed hidden md:block">{service.desc}</p>
    </div>
  );
}
