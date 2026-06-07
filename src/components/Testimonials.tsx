import { useState } from 'react';
import { useScrollAnimation, useWordReveal, splitWords } from '../hooks/useAnimations';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Peenal',
    role: 'Marketing Manager',
    text: 'Working with Creayas was simply wonderful. Everything was well planned, from the planning stages to the implementation. Each team executed its tasks flawlessly, and the communication was excellent. They gave their finest ideas at every turn, and the result was a fantastic video showcasing our brand.',
    rating: 5,
  },
  {
    name: 'Kartik',
    role: 'Chief Growth Officer',
    text: 'We recently collaborated with Creayas for a video for our company and they did a fabulous job! Everything was conducted timely and in an orderly manner, right from the setup to the post-production. It was a great experience working with them as they helped us achieve our vision with their expertise.',
    rating: 5,
  },
  {
    name: 'Yannick Brewart',
    role: 'Asst. Marketing Manager',
    text: 'Great turnaround from Creayas, considering the stringent deadlines! The team delivered exceptional quality under pressure and exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Siddhant Bhandhari',
    role: 'Analyst',
    text: 'Thank you to the entire Creayas team for conducting the shoot for us. The costumes, the stylist, the makeup and everything was great! We hope to work with them again for our portfolio companies as well.',
    rating: 5,
  },
  {
    name: 'Madhava Sripada',
    role: 'Deputy Manager (Sales)',
    text: 'The team is professional, courteous, and easy to work with. Please feel free to give out my name as a reference, I will happily give you the highest recommendation. I look forward to working with you again soon.',
    rating: 5,
  },
  {
    name: 'Rovina Adenwalla',
    role: 'Corporate Communications',
    text: 'It was a dream working with Creayas. They always seemed to be three steps ahead of me, with patience, diligence and excellent punctuality. One of the best product videos that I have created ever.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();
  const { ref: headingRef, isVisible: headingVisible } = useWordReveal();

  const itemsPerPage = typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const next = () => setCurrent((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0));

  return (
    <section id="about" className="relative bg-dark-950 section-padding overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />

      <div className="relative container-max">
        <div className="mb-16" />

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${current * (100 / itemsPerPage)}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className={`w-full ${itemsPerPage === 3 ? 'md:w-1/3' : ''} flex-shrink-0`}>
                  <div className="bg-dark-900/50 border border-dark-800/50 rounded-2xl p-6 md:p-8 h-full hover:border-primary-500/20 transition-all duration-300">
                    <Quote className="w-10 h-10 text-primary-500/20 mb-4" />
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <Star key={si} className="w-4 h-4 text-amber-400" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-dark-300 leading-relaxed mb-6 text-sm md:text-base">"{t.text}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-dark-800/50">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-amber-400 flex items-center justify-center text-white font-bold text-sm">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{t.name}</p>
                        <p className="text-dark-500 text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-10 h-10 rounded-full border border-dark-700 flex items-center justify-center text-dark-400 hover:text-white hover:border-primary-500 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-primary-500 w-6' : 'bg-dark-700 hover:bg-dark-600'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="w-10 h-10 rounded-full border border-dark-700 flex items-center justify-center text-dark-400 hover:text-white hover:border-primary-500 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
