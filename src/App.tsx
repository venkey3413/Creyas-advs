import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyUs from './components/WhyUs';
import FilmShowcase from './components/FilmShowcase';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CallbackPopup from './components/CallbackPopup';
import { Phone } from 'lucide-react';

function App() {
  const [showCallback, setShowCallback] = useState(false);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    // Auto popup after 15 seconds (K21 style)
    const timer = setTimeout(() => {
      setShowCallback(true);
    }, 15000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar onRequestCallback={() => setShowCallback(true)} />
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <FilmShowcase />
      <CTA onRequestCallback={() => setShowCallback(true)} />
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-24 right-6 z-50 w-14 h-14 flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe5d] rounded-full shadow-2xl shadow-green-500/30 transition-all duration-500 hover:-translate-y-1 ${
          showFloatingBtn ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.473 2.027 7.774L0 32l8.437-2.01A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.771-1.854l-.486-.29-5.007 1.194 1.234-4.868-.317-.5A13.226 13.226 0 012.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.27-9.775c-.398-.199-2.354-1.162-2.718-1.294-.365-.133-.63-.199-.896.199-.265.398-1.029 1.294-1.261 1.56-.232.265-.465.298-.863.1-.398-.2-1.681-.62-3.203-1.98-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.698.2-.232.265-.398.398-.663.133-.265.066-.498-.033-.697-.1-.199-.896-2.161-1.228-2.96-.323-.777-.651-.672-.896-.684l-.763-.013c-.265 0-.696.1-.1060.498-.365.398-1.394 1.362-1.394 3.322s1.427 3.854 1.626 4.12c.2.265 2.808 4.287 6.803 5.015.951.163 1.693.26 2.271.333.954.12 1.823.103 2.51-.061.766-.18 2.354-.963 2.686-1.893.332-.93.332-1.727.232-1.893-.099-.166-.364-.265-.763-.464z" />
        </svg>
      </a>

      {/* WhatsApp Floating Button */}
      <div className={`fixed bottom-24 right-6 z-50 flex flex-col items-end gap-2 transition-all duration-500 ${
          showFloatingBtn ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
        <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">Get in touch with us</span>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe5d] rounded-full shadow-2xl shadow-green-500/30 transition-all duration-300 hover:-translate-y-1"
        >
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.473 2.027 7.774L0 32l8.437-2.01A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.771-1.854l-.486-.29-5.007 1.194 1.234-4.868-.317-.5A13.226 13.226 0 012.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.27-9.775c-.398-.199-2.354-1.162-2.718-1.294-.365-.133-.63-.199-.896.199-.265.398-1.029 1.294-1.261 1.56-.232.265-.465.298-.863.1-.398-.2-1.681-.62-3.203-1.98-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.698.2-.232.265-.398.398-.663.133-.265.066-.498-.033-.697-.1-.199-.896-2.161-1.228-2.96-.323-.777-.651-.672-.896-.684l-.763-.013c-.265 0-.696.1-.1060.498-.365.398-1.394 1.362-1.394 3.322s1.427 3.854 1.626 4.12c.2.265 2.808 4.287 6.803 5.015.951.163 1.693.26 2.271.333.954.12 1.823.103 2.51-.061.766-.18 2.354-.963 2.686-1.893.332-.93.332-1.727.232-1.893-.099-.166-.364-.265-.763-.464z" />
          </svg>
        </a>
      </div>
      <button
        onClick={() => setShowCallback(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-5 py-3 rounded-full shadow-2xl shadow-primary-500/30 transition-all duration-500 hover:shadow-primary-500/40 hover:-translate-y-1 ${
          showFloatingBtn ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="font-semibold text-sm hidden sm:inline">Request Callback</span>
      </button>

      {/* Callback Popup */}
      <CallbackPopup isOpen={showCallback} onClose={() => setShowCallback(false)} />
    </div>
  );
}

export default App;
