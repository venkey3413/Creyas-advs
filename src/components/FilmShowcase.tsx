import { useState, useRef } from 'react';
import { Play, X } from 'lucide-react';

const films = [
  { video: 'https://player.vimeo.com/video/1164617713', thumb: 'https://vumbnail.com/1164617713.jpg' },
  { video: 'https://player.vimeo.com/video/1164612885', thumb: 'https://vumbnail.com/1164612885.jpg' },
  { video: 'https://player.vimeo.com/video/1164613270', thumb: 'https://vumbnail.com/1164613270.jpg' },
  { video: 'https://player.vimeo.com/video/1164612938', thumb: 'https://vumbnail.com/1164612938.jpg' },
  { video: 'https://player.vimeo.com/video/1164617508', thumb: 'https://vumbnail.com/1164617508.jpg' },
  { video: 'https://player.vimeo.com/video/1164613076', thumb: 'https://vumbnail.com/1164613076.jpg' },
  { video: 'https://player.vimeo.com/video/1164617688', thumb: 'https://vumbnail.com/1164617688.jpg' },
  { video: 'https://player.vimeo.com/video/1164613140', thumb: 'https://vumbnail.com/1164613140.jpg' },
  { video: 'https://player.vimeo.com/video/1164613194', thumb: 'https://vumbnail.com/1164613194.jpg' },
  { video: 'https://player.vimeo.com/video/1164612983', thumb: 'https://vumbnail.com/1164612983.jpg' },
  // Duplicate for seamless marquee loop
  { video: 'https://player.vimeo.com/video/1164617713', thumb: 'https://vumbnail.com/1164617713.jpg' },
  { video: 'https://player.vimeo.com/video/1164612885', thumb: 'https://vumbnail.com/1164612885.jpg' },
  { video: 'https://player.vimeo.com/video/1164613270', thumb: 'https://vumbnail.com/1164613270.jpg' },
  { video: 'https://player.vimeo.com/video/1164612938', thumb: 'https://vumbnail.com/1164612938.jpg' },
  { video: 'https://player.vimeo.com/video/1164617508', thumb: 'https://vumbnail.com/1164617508.jpg' },
  { video: 'https://player.vimeo.com/video/1164613076', thumb: 'https://vumbnail.com/1164613076.jpg' },
  { video: 'https://player.vimeo.com/video/1164617688', thumb: 'https://vumbnail.com/1164617688.jpg' },
  { video: 'https://player.vimeo.com/video/1164613140', thumb: 'https://vumbnail.com/1164613140.jpg' },
  { video: 'https://player.vimeo.com/video/1164613194', thumb: 'https://vumbnail.com/1164613194.jpg' },
  { video: 'https://player.vimeo.com/video/1164612983', thumb: 'https://vumbnail.com/1164612983.jpg' },
];

export default function FilmShowcase() {
  const [modalSrc, setModalSrc] = useState('');
  const stripRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const openModal = (url: string) => setModalSrc(url + '?autoplay=1');
  const closeModal = () => setModalSrc('');

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollLeft.current = stripRef.current?.scrollLeft || 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !stripRef.current) return;
    e.preventDefault();
    stripRef.current.scrollLeft = scrollLeft.current - (e.pageX - startX.current) * 2;
  };
  const stopDrag = () => { isDragging.current = false; };

  return (
    <>
      <section
        id="portfolio"
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 48%, #EDF6FD 48%, #F5FAFF 100%)' }}
      >
        {/* Rotating film reel background - reduced to 50% */}
        <div
          className="absolute opacity-[0.04] pointer-events-none"
          style={{
            width: '420px',
            height: '420px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundImage: "url('/images/film-reel.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'reelRotate 50s linear infinite',
          }}
        />

        {/* Soft orange glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '500px',
            height: '500px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(245,158,11,0.15), transparent 70%)',
          }}
        />

        {/* Section heading - on dark background */}
        <div className="text-center pt-14 md:pt-16 pb-10 md:pb-14 px-4">
          <p className="font-semibold text-sm tracking-wider uppercase mb-3" style={{ color: '#F59E0B' }}>Portfolio</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-white">
            Our <span style={{ color: '#F59E0B' }}>Work</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">Movies &amp; Advertisement</p>
        </div>

        {/* Film strip - light blue background area */}
        <div className="overflow-hidden relative pb-14 md:pb-16">
          <div
            ref={stripRef}
            className="flex gap-4 w-max cursor-grab active:cursor-grabbing"
            style={{ animation: 'marquee 35s linear infinite' }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseLeave={stopDrag}
            onMouseUp={stopDrag}
          >
            {films.map((film, i) => (
              <div
                key={i}
                onClick={() => openModal(film.video)}
                className="relative flex-shrink-0 group"
                style={{
                  width: '210px',
                  height: '120px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '4px solid #D9E6F3',
                  boxShadow: '0 8px 30px rgba(15,23,42,0.08)',
                  background: '#FFFFFF',
                  cursor: 'pointer',
                }}
              >
                {/* Film holes top */}
                <div className="absolute top-0 left-0 w-full h-3 z-10"
                  style={{ background: 'repeating-linear-gradient(90deg, transparent 0 12px, #BFD2E8 12px 26px)' }} />
                {/* Film holes bottom */}
                <div className="absolute bottom-0 left-0 w-full h-3 z-10"
                  style={{ background: 'repeating-linear-gradient(90deg, transparent 0 12px, #BFD2E8 12px 26px)' }} />

                <img
                  src={film.thumb}
                  alt={`Film ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Play button */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 z-20"
                  style={{ background: '#f59e0b', boxShadow: '0 0 20px rgba(245,158,11,0.8)' }}
                >
                  <Play className="w-3 h-3 text-white ml-0.5" fill="currentColor" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {modalSrc && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.9)' }}
          onClick={closeModal}
        >
          <div
            className="relative w-[80%] max-w-[1200px]"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
            >
              <X className="w-10 h-10" />
            </button>
            <iframe
              src={modalSrc}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full border-none rounded-xl"
              style={{ height: '70vh' }}
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes reelRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </>
  );
}
