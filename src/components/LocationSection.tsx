import { RESTAURANT_INFO } from '../data';
import { Phone, MapPin, Clock, Compass, Car, Train, CornerDownRight } from 'lucide-react';

interface LocationSectionProps {
  openBookingModal: () => void;
}

export default function LocationSection({ openBookingModal }: LocationSectionProps) {
  // Simple helper to find if we are currently closed or open based on Adelaide time (local 2026-05-26, it is Tuesday)
  // Let's list travel details
  const transitInfo = [
    {
      icon: <Car className="w-5 h-5 text-brand-green" />,
      title: 'Parking & Access',
      desc: 'Ample street parking is available directly along Gouger street (metered during select daytime slots). Alternatively, the Adelaide Central Market Car Park is just a brief 4-minute walk away.',
    },
    {
      icon: <Train className="w-5 h-5 text-brand-green" />,
      title: 'Public Transit',
      desc: 'Conveniently accessible via the Free City Tram — exit at Victoria Square / Tarntanyangga station and take a short, beautiful 5-minute stroll west down Gouger Street.',
    },
  ];

  return (
    <div id="location-section" className="bg-brand-offwhite text-brand-charcoal min-h-screen pt-24 pb-20">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center space-y-4">
        <span className="text-xs uppercase tracking-widest text-brand-earth font-bold font-sans">
          EASY TO FIND & COZY TO DINE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-charcoal-dark tracking-tight">
          Hours & Location
        </h1>
        <p className="text-[#555] text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-sans">
          Located in Adelaide’s legendary culinary strip. Step off busy Gouger Street into our welcoming, dimly lit dining room to relax and refuel.
        </p>
        <div className="w-12 h-1 bg-brand-green rounded mx-auto" />
      </section>

      {/* 2. Map and Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Map Panel (7 cols on large desktop) */}
          <div className="lg:col-span-7 bg-brand-cream p-3 rounded-2xl border border-brand-cream-dark shadow-md overflow-hidden group">
            <div className="h-[300px] sm:h-[420px] md:h-[480px] rounded-xl overflow-hidden relative">
              <iframe
                id="google-maps-frame"
                src={RESTAURANT_INFO.links.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Trigger Map"
                className="w-full h-full animate-fade-in"
              />
            </div>
            
            <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white rounded-xl mt-3 border border-brand-cream-dark shadow-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-green shrink-0" />
                <span className="text-brand-charcoal text-xs sm:text-sm font-sans pt-0.5">
                  {RESTAURANT_INFO.location.address}
                </span>
              </div>
              <a
                id="maps-redirect-btn"
                href={RESTAURANT_INFO.links.googleMapsRedirect}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-brand-cream text-brand-green border border-brand-cream-dark text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shrink-0 shadow-sm"
              >
                <Compass className="w-4 h-4" />
                Open Google Maps
              </a>
            </div>
          </div>

          {/* Column 2: Hours & Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Structured Hours Card */}
            <div className="bg-white p-6 rounded-2xl border border-brand-cream-dark shadow-sm space-y-4">
              <h3 className="font-serif text-lg font-bold text-brand-charcoal-dark flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-green" />
                <span>Opening Hours</span>
              </h3>
              <p className="text-brand-earth text-xs italic font-sans animate-pulse">
                * Note: Our kitchen takes last orders 30 minutes before closing time.
              </p>
              
              <div className="space-y-2 pt-2 divide-y divide-brand-cream">
                {RESTAURANT_INFO.hours.map((val) => (
                  <div key={val.day} className="flex justify-between items-center py-2.5 first:pt-0">
                    <span className={`text-sm font-semibold font-sans ${val.closed ? 'text-brand-earth' : 'text-brand-charcoal'}`}>
                      {val.day}
                    </span>
                    <span className={`text-[13px] text-right font-semibold font-sans ${val.closed ? 'text-red-500' : 'text-brand-charcoal-dark'}`}>
                      {val.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Booking & Takeaway Contacts Card */}
            <div className="bg-brand-cream p-6 rounded-2xl border border-brand-cream-dark shadow-sm space-y-4">
              <h3 className="font-serif text-lg font-bold text-brand-charcoal-dark flex items-center gap-2">
                <Phone className="w-5 h-5 text-brand-green" />
                <span>Call to Order & Book</span>
              </h3>
              
              <p className="text-[#555] text-xs sm:text-sm leading-relaxed font-sans font-light">
                For table reservations, large party bookings, or placing takeaway pre-orders, tap the button below to dial our team directly or submit a digital deposit form.
              </p>

              <div className="pt-2">
                <a
                  id="location-call-now-btn"
                  href={`tel:${RESTAURANT_INFO.phone.callable}`}
                  className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold py-3.5 px-4 rounded-full text-xs sm:text-sm text-center transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now ({RESTAURANT_INFO.phone.display})</span>
                </a>
              </div>

              {/* Takeaway details notice */}
              <div className="p-4 bg-white rounded-2xl border border-brand-cream-dark flex gap-2 text-xs text-brand-charcoal mt-2 shadow-sm">
                <span className="text-brand-green select-none font-bold">●</span>
                <p className="text-brand-earth font-sans">
                  <strong>Takeaway pick-up policy:</strong> Pre-ordered takeaway can be collected at our host desk. Give us 15-20 minutes after calling and we'll have your food packed hot.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Transit Directions Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 animate-fade-in">
        <div className="bg-brand-cream border border-brand-cream-dark rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <h3 className="font-serif text-xl font-bold text-brand-charcoal-dark text-center sm:text-left">
            Getting to Hotaru Japanese Restaurant
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transitInfo.map((info, idx) => (
              <div key={idx} className="space-y-2 flex gap-4 items-start">
                <div className="p-3 bg-white text-brand-green rounded-2xl border border-brand-cream-dark shrink-0 shadow-sm">
                  {info.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-sm text-brand-charcoal-dark">{info.title}</h4>
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed font-sans">{info.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Surrounding attractions */}
          <div className="border-t border-brand-cream-dark pt-6 flex items-center gap-2 text-xs text-brand-earth justify-center">
            <CornerDownRight className="w-4 h-4 text-brand-green" />
            <span>Right opposite the Adelaide Central Market & Gouger Street Food Square entrance</span>
          </div>
        </div>
      </section>

    </div>
  );
}
