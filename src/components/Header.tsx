import { useState, useEffect } from 'react';
import { ActivePage } from '../types';
import { RESTAURANT_INFO } from '../data';
import { Phone, Menu, X, BookOpen, Clock, MapPin } from 'lucide-react';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  openBookingModal: () => void;
}

export default function Header({ activePage, setActivePage, openBookingModal }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: 'home' as ActivePage },
    { label: 'Our Menu', value: 'menu' as ActivePage },
    { label: 'Location & Hours', value: 'location' as ActivePage },
  ];

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="restaurant-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isMobileMenuOpen
          ? 'bg-white shadow-sm border-b border-brand-cream-dark py-3'
          : isScrolled
          ? 'bg-brand-offwhite/95 backdrop-blur-md shadow-sm border-b border-brand-cream-dark py-3'
          : 'bg-brand-offwhite/70 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            id="header-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left group"
          >
            <div>
              <span className="font-serif text-2xl font-bold text-brand-green tracking-tight group-hover:text-brand-green-hover transition-colors">
                HOTARU
              </span>
              <span className="block font-sans text-[10px] tracking-widest text-brand-earth font-semibold text-center mt-[-4px]">
                日本食堂・ADELAIDE
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.value}
                id={`nav-item-${item.value}`}
                onClick={() => handleNavClick(item.value)}
                className={`text-sm font-medium tracking-widest uppercase transition-colors relative py-1 ${
                  activePage === item.value
                    ? 'text-brand-green font-bold'
                    : 'text-brand-earth hover:text-brand-green'
                }`}
              >
                {item.label}
                {activePage === item.value && (
                  <span
                    id={`active-indicator-${item.value}`}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-green rounded-full"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action Button CTA - Call */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              id="header-phone-link"
              href={`tel:${RESTAURANT_INFO.phone.callable}`}
              className="flex items-center gap-2 text-brand-charcoal hover:text-brand-green text-sm font-medium transition-colors border border-brand-cream-dark rounded-full px-4 py-2 hover:bg-brand-cream"
            >
              <Phone className="w-4 h-4 text-brand-green" />
              <span>{RESTAURANT_INFO.phone.display}</span>
            </a>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              id="header-phone-mobile"
              href={`tel:${RESTAURANT_INFO.phone.callable}`}
              className="p-2 text-brand-charcoal hover:text-brand-green border border-brand-cream-dark rounded-full bg-brand-cream"
            >
              <Phone className="w-5 h-5 text-brand-green" />
            </a>
            <button
              id="header-mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-brand-charcoal hover:text-brand-green focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden fixed inset-0 top-[60px] bg-white z-50 animate-fade-in border-t border-brand-cream-dark overflow-y-auto"
        >
          <div className="p-6 space-y-6 flex flex-col h-full justify-between pb-24">
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  id={`mobile-nav-item-${item.value}`}
                  onClick={() => handleNavClick(item.value)}
                  className={`block w-full text-left py-3 text-sm uppercase tracking-wider font-semibold border-b border-brand-cream ${
                    activePage === item.value
                      ? 'text-brand-green pl-2 border-l-2 border-brand-green'
                      : 'text-brand-earth pl-0'
                  } transition-all`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="space-y-4 bg-brand-cream p-5 rounded-2xl border border-brand-cream-dark shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-brand-charcoal text-sm">Our Location</h4>
                  <p className="text-xs text-brand-earth mt-1">{RESTAURANT_INFO.location.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Clock className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-brand-charcoal text-sm">Opening Hours</h4>
                  <p className="text-xs text-brand-earth mt-1">Tue – Sat: 11:30 AM – 3:00 PM</p>
                  <p className="text-xs text-brand-earth">Tue – Thu, Sat – Sun: 5:30 PM – 10:00 PM</p>
                  <p className="text-xs text-brand-earth">Fri: 5:30 PM – 10:30 PM (Mon Closed)</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      )}
    </header>
  );
}
