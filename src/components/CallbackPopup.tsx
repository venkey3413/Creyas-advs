import { useState, useEffect } from 'react';
import { X, Phone, User, Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function CallbackPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dark-950/80 backdrop-blur-md"
        onClick={onClose}
        style={{ animation: 'fadeInUp 0.3s ease-out forwards', opacity: 0.8 }}
      />

      {/* Popup */}
      <div
        className="relative w-full max-w-md bg-dark-900 border border-dark-700/50 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden"
        style={{ animation: 'scaleIn 0.4s ease-out forwards' }}
      >
        {/* Header Gradient */}
        <div className="relative bg-gradient-to-r from-primary-500 to-amber-500 px-6 py-5">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-xl">Request a Callback</h3>
              <p className="text-white/80 text-sm">Our team will get back to you!</p>
            </div>
          </div>

          {/* Avatar Row (K21 style) */}
          <div className="flex items-center mt-3 -space-x-2">
            {['A', 'R', 'S'].map((initial, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center text-white text-xs font-bold"
                style={{
                  background: ['#f97316', '#10b981', '#3b82f6'][i],
                  zIndex: 3 - i,
                }}
              >
                {initial}
              </div>
            ))}
            <span className="ml-3 text-white/70 text-xs">3 experts available now</span>
          </div>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="p-8 text-center" style={{ animation: 'scaleIn 0.3s ease-out forwards' }}>
            <CheckCircle className="w-16 h-16 text-accent-400 mx-auto mb-4" />
            <h4 className="font-heading font-bold text-white text-xl mb-2">Thank You!</h4>
            <p className="text-dark-400">We'll call you back within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-xl pl-11 pr-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-xl pl-11 pr-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-xl pl-11 pr-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-dark-500" />
              <textarea
                placeholder="Tell us about your project"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-xl pl-11 pr-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-500 to-amber-500 hover:from-primary-600 hover:to-amber-600 text-white py-3.5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Request Callback
            </button>

            <p className="text-dark-500 text-xs text-center">
              By submitting, you agree to receive communications from Creayas.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
