import { useState } from 'react';
import { useScrollAnimation, useWordReveal, splitWords } from '../hooks/useAnimations';
import { Play, ExternalLink } from 'lucide-react';

const categories = ['All', 'Ad Films', 'Brand Films', 'Corporate', 'Explainer', 'Product', 'Animation'];

const projects = [
  { title: 'iwuman', category: 'Ad Films', type: 'Ad Film', img: 'https://images.pexels.com/photos/5867743/pexels-photo-5867743.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Nilkamal Homes', category: 'Brand Films', type: 'Short Form Content', img: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Futuready Media', category: 'Corporate', type: 'Social Impact AV', img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Tic-Tac-Toe', category: 'Brand Films', type: 'Brand Film', img: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Entropik', category: 'Corporate', type: 'Corporate Video', img: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Mentco', category: 'Corporate', type: 'Corporate Video', img: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Zero B', category: 'Product', type: 'Product Video', img: 'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'India Glycol', category: 'Explainer', type: 'Explainer Video', img: 'https://images.pexels.com/photos/3735633/pexels-photo-3735633.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Idex Corp', category: 'Animation', type: '3D Product Video', img: 'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Tata AIG', category: 'Ad Films', type: 'Testimonial', img: 'https://images.pexels.com/photos/6613419/pexels-photo-6613419.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'D&B Research', category: 'Corporate', type: 'Video Podcast', img: 'https://images.pexels.com/photos/4060887/pexels-photo-4060887.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'ICARDA', category: 'Explainer', type: 'Success Story Video', img: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isVisible } = useScrollAnimation();
  const { ref: headingRef, isVisible: headingVisible } = useWordReveal();

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative bg-dark-900 section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950/50 to-dark-900" />

      <div className="relative container-max">
        <div className="text-center mb-12">
          <p ref={ref as React.RefObject<HTMLDivElement>} className={`label-pop text-primary-400 font-semibold text-sm tracking-wider uppercase mb-3 inline-block ${isVisible ? 'visible' : ''}`}>Portfolio</p>
          <h2 ref={headingRef as React.RefObject<HTMLDivElement>} className={`word-reveal font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 ${headingVisible ? 'visible' : ''}`}>
            {splitWords('Our')} <span className="shimmer-text">{splitWords('Work', 100)}</span>
          </h2>
          <p className={`slide-up text-dark-400 text-lg max-w-2xl mx-auto ${headingVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            Every frame tells a story. Browse our latest work and see how we blend strategy with stunning visual storytelling.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-dark-800/50 text-dark-400 hover:text-white hover:bg-dark-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary-500/10 ${
        isVisible ? 'animate-on-scroll-scale visible' : 'animate-on-scroll-scale'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="aspect-[4/3] relative">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-500/90 flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500">
              <Play className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
              <ExternalLink className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-primary-400 text-xs font-semibold tracking-wider uppercase mb-1">{project.type}</p>
          <h3 className="font-heading font-bold text-white text-xl">{project.title}</h3>
        </div>
      </div>
    </div>
  );
}
