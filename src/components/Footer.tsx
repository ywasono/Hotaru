import { RESTAURANT_INFO } from '../data';
import { ActivePage } from '../types';
import { Phone, MapPin, Clock, ArrowUp, Compass } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="restaurant-footer" className="bg-brand-cream text-brand-charcoal border-t border-brand-cream-dark">
      {/* Top Banner Contact Strip */}
      <div className="bg-white/80 border-b border-brand-cream-dark py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-brand-green/10 rounded-full border border-brand-green/20 text-brand-green">
              <Phone className="w-5 h-5" />
            </span>
            <div>
              <p className="text-xs text-brand-earth font-sans font-bold tracking-wide">QUESTIONS OR TAKEAWAY ORDERS?</p>
              <h4 className="text-lg font-bold text-brand-charcoal-dark">{RESTAURANT_INFO.phone.display}</h4>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              id="footer-call-action-btn"
              href={`tel:${RESTAURANT_INFO.phone.callable}`}
              className="bg-white hover:bg-brand-cream text-brand-green font-bold px-5 py-2.5 rounded-full text-sm transition-colors flex items-center gap-2 border border-brand-cream-dark shadow-sm"
            >
              Call to Book / Order
            </a>
            <a
              id="footer-directions-btn"
              href={RESTAURANT_INFO.links.googleMapsRedirect}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green hover:bg-brand-green-hover text-white font-bold px-5 py-2.5 rounded-full text-sm transition-colors flex items-center gap-2 shadow-sm"
            >
              <Compass className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Philosophy */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-brand-green tracking-tight">
                HOTARU
              </span>
              <span className="font-sans text-[10px] tracking-widest text-[#8a8a7a] font-bold uppercase mt-[-3px]">
                日本食堂・JAPANESE COMFORT FOOD
              </span>
            </div>
            <p className="text-[#555] text-sm leading-relaxed max-w-sm font-sans font-light">
              We focus on humble, honest, and traditional cooking. Creating a warm, unpretentious dining room where friends, couples, and families can gather over generous portions of fresh sushi and authentic rice bowls.
            </p>
            <div className="pt-2 text-brand-earth text-xs font-sans font-semibold">
              © {new Date().getFullYear()} Hotaru Restaurant. Adelaide, SA.
            </div>
          </div>

          {/* Structured Hours Display */}
          <div className="space-y-5">
            <h3 className="font-serif text-lg font-bold text-brand-charcoal-dark tracking-wide flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-green" />
              <span>Opening Hours</span>
            </h3>
            <div className="space-y-1 text-sm font-sans" id="footer-hours-list">
              {RESTAURANT_INFO.hours.map((term) => (
                <div
                  key={term.day}
                  className="flex justify-between items-center py-2 border-b border-brand-cream-dark/50"
                >
                  <span className={`font-semibold ${term.closed ? 'text-brand-earth' : 'text-brand-charcoal'}`}>
                    {term.day}
                  </span>
                  <span className={`text-[13px] font-semibold ${term.closed ? 'text-red-600' : 'text-brand-charcoal'}`}>
                    {term.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Info */}
          <div className="space-y-5">
            <h3 className="font-serif text-lg font-bold text-brand-charcoal-dark tracking-wide flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-green" />
              <span>Find Us on Gouger St</span>
            </h3>
            <p className="text-[#555] text-sm leading-relaxed font-sans font-light">
              {RESTAURANT_INFO.location.address}
            </p>
            <div className="pt-2 flex flex-col space-y-3">
              <button
                id="footer-nav-menu"
                onClick={() => handleNavClick('menu')}
                className="text-brand-green hover:text-brand-green-hover text-sm font-bold transition-colors text-left flex items-center gap-1.5 cursor-pointer"
              >
                <span>→ View Full Menu Specialties</span>
              </button>
              <button
                id="footer-nav-location"
                onClick={() => handleNavClick('location')}
                className="text-brand-green hover:text-brand-green-hover text-sm font-bold transition-colors text-left flex items-center gap-1.5 cursor-pointer"
              >
                <span>→ Interactive Map & Contact Details</span>
              </button>
            </div>

            {/* Back to Top */}
            <div className="pt-4">
              <button
                id="footer-back-to-top"
                onClick={scrollToTop}
                className="flex items-center gap-2 text-xs text-brand-earth hover:text-brand-green font-bold transition-colors uppercase tracking-wider font-sans cursor-pointer"
              >
                <ArrowUp className="w-4 h-4" />
                Back To Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
