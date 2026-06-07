import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';

const categories = ['All', 'Ad Films', 'Brand Films', 'Corporate', 'Explainer', 'Product', 'Animation'];

const projects = [
  { title: 'iwuman', category: 'Ad Films', type: 'Ad Film' },
  { title: 'Nilkamal Homes', category: 'Brand Films', type: 'Short Form Content' },
  { title: 'Futuready Media', category: 'Corporate', type: 'Social Impact AV' },
  { title: 'Tic-Tac-Toe', category: 'Brand Films', type: 'Brand Film' },
  { title: 'Entropik', category: 'Corporate', type: 'Corporate Video' },
  { title: 'Mentco', category: 'Corporate', type: 'Corporate Video' },
  { title: 'Zero B', category: 'Product', type: 'Product Video' },
  { title: 'India Glycol', category: 'Explainer', type: 'Explainer Video' },
  { title: 'Idex Corp', category: 'Animation', type: '3D Product Video' },
  { title: 'Tata AIG', category: 'Ad Films', type: 'Testimonial' },
  { title: 'D&B Research', category: 'Corporate', type: 'Video Podcast' },
  { title: 'ICARDA', category: 'Explainer', type: 'Success Story Video' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isVisible } = useScrollAnimation();

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative section-padding overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0f172a 40%, #0d1117 100%)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/10 via-transparent to-cyan-900/10" />

      <div className="relative container-max">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-12 ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <p className="text-primary-400 font-semibold text-sm tracking-wider uppercase mb-3">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="shimmer-text">Work</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
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
      className={`group relative rounded-2xl bg-dark-900/50 border border-dark-800/50 hover:border-primary-500/30 cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary-500/10 p-6 ${
        isVisible ? 'animate-on-scroll-scale visible' : 'animate-on-scroll-scale'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <p className="text-primary-400 text-xs font-semibold tracking-wider uppercase mb-2">{project.type}</p>
      <h3 className="font-heading font-bold text-white text-xl">{project.title}</h3>
    </div>
  );
}
