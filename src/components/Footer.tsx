import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const footerLinks = {
  'Company': ['About Us', 'Our Team', 'Careers', 'Blog'],
  'Services': ['Ad Films', 'Brand Films', 'Corporate Videos', 'Animation', 'Drone Videography'],
  'Resources': ['Case Studies', 'Showreel', 'Behind the Scenes', 'FAQ'],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-950 border-t border-dark-800/30">
      <div className="container-max section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-amber-400 flex items-center justify-center font-heading font-bold text-white text-lg">
                C
              </div>
              <span className="font-heading font-bold text-2xl text-white tracking-tight">Creayas</span>
            </div>
            <p className="text-dark-400 leading-relaxed mb-6 max-w-sm">
              We create cinematic visuals that tell your story. From commercials and corporate videos to social media content and documentaries -- we ensure cinematic quality in every frame.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-dark-400 hover:text-primary-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-dark-400 hover:text-primary-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@creayas.com</span>
              </div>
              <div className="flex items-start gap-3 text-dark-400">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">102, Business Center, Off Main Road, Andheri East, Mumbai - 400093</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-dark-400 hover:text-primary-400 text-sm transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            &copy; 2026 Creayas. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">Terms of Service</a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-dark-800/50 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
