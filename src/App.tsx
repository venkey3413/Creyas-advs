import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Industries from './components/Industries';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
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
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <CTA onRequestCallback={() => setShowCallback(true)} />
      <Footer />

      {/* Floating Callback Button */}
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
