import { useScrollAnimation } from '../hooks/useAnimations';
import {
  Film, Camera, Video, Presentation, Palette, Mic2,
  BookOpen, MessageSquareQuote, Plane, PartyPopper,
  Package, Share2, Smartphone, Box, Sparkles
} from 'lucide-react';

const services = [
  { icon: Film, title: 'Ad Films & Commercials', desc: 'Commercial films that grab attention in seconds and stay in the audience\'s memory.', img: 'https://images.pexels.com/photos/2873485/pexels-photo-2873485.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: Package, title: 'Product Videos', desc: 'Showcasing your product with cinematic visuals that drive buying decisions.', img: 'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: Video, title: 'Corporate & Brand Stories', desc: 'Business storytelling that connects emotionally and strengthens brand identity.', img: 'https://images.pexels.com/photos/3130207/pexels-photo-3130207.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: Share2, title: 'Social Media Videos', desc: 'Promotion-ready content crafted for Instagram, Facebook, YouTube & shorts.', img: 'https://images.pexels.com/photos/2673505/pexels-photo-2673505.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: PartyPopper, title: 'Event & Interview Films', desc: 'Capturing real moments, emotions, and conversations with cinematic precision.', img: 'https://images.pexels.com/photos/1540596/pexels-photo-1540596.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: Presentation, title: 'Explainer Videos', desc: 'Explainer videos designed to educate, build trust, and drive faster conversions.', img: 'https://images.pexels.com/photos/705414/pexels-photo-705414.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: Mic2, title: 'Video Podcast', desc: 'High-quality podcast filming with clear audio, studio lighting, and cinematic visuals.', img: 'https://images.pexels.com/photos/4060887/pexels-photo-4060887.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: BookOpen, title: 'Documentary Films', desc: 'Real stories captured with honesty, depth, and cinematic storytelling.', img: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: MessageSquareQuote, title: 'Testimonial Videos', desc: 'Real voices and real experiences captured to boost brand credibility.', img: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: Plane, title: 'Drone Videography', desc: 'Aerial visuals that reveal scale, beauty, and perspective no ground camera can capture.', img: 'https://images.pexels.com/photos/461960/pexels-photo-461960.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: Smartphone, title: 'Photoshoots', desc: 'Professional photography that blends creativity, precision, and brand storytelling.', img: 'https://images.pexels.com/photos/1253482/pexels-photo-1253482.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: Camera, title: 'Editing & Color Grading', desc: 'From basic cleanup to cinematic grading — we shape visuals to look world-class.', img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: Sparkles, title: 'Educational & Training', desc: 'Educational videos designed to teach faster, smarter, and more visually.', img: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: Palette, title: '2D/3D Animation', desc: 'Visual storytelling powered by dynamic 2D/3D animation and motion graphics.', img: 'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: Box, title: 'Food & Hospitality', desc: 'Delicious visuals that make your dishes irresistible and your brand unforgettable.', img: 'https://images.pexels.com/photos/3735633/pexels-photo-3735633.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="relative bg-dark-900 section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-950/80 to-dark-900" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative container-max">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-16 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <p className="text-primary-400 font-semibold text-sm tracking-wider uppercase mb-3">Our Craft</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Discover Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Explore our specialized video production services designed to elevate your brand.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
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
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary-500/10 ${
        isVisible ? 'animate-on-scroll-scale visible' : 'animate-on-scroll-scale'
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="aspect-[4/5] relative">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent" />
        <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-500" />

        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
          <div className="w-10 h-10 rounded-xl bg-primary-500/20 backdrop-blur-sm border border-primary-500/20 flex items-center justify-center mb-3 group-hover:bg-primary-500/40 transition-colors duration-300">
            <service.icon className="w-5 h-5 text-primary-400" />
          </div>
          <h3 className="font-heading font-bold text-white text-base md:text-lg mb-1">{service.title}</h3>
          <p className="text-dark-300 text-xs md:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-20 overflow-hidden">
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
