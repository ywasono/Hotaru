import { motion } from 'motion/react';
import { ActivePage, MenuItem } from '../types';
import { RESTAURANT_INFO, REVIEWS, MENU_ITEMS } from '../data';
import { Phone, ArrowRight, Star, Heart, Award, Sparkles, AlertCircle } from 'lucide-react';

interface HomeSectionProps {
  setActivePage: (page: ActivePage) => void;
  openBookingModal: () => void;
}

export default function HomeSection({ setActivePage, openBookingModal }: HomeSectionProps) {
  // Pull a few main popular items for the sneak peek
  const featuredItems = MENU_ITEMS.filter((item) => item.isPopular);

  return (
    <div id="home-section" className="space-y-24 bg-brand-offwhite text-brand-charcoal pb-16">
      {/* 1. Hero Section */}
      <section id="hero-banner" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Warm visual background with organic glow overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-offwhite via-brand-offwhite/50 to-brand-offwhite/80 z-10" />
          <img
            src="/src/assets/images/hotaru_hero_interior_1779779318779.png"
            alt="Hotaru Cozy Dining Room Adelaide"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60 scale-102 transform transition-transform duration-10000"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Tagline emblem */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-semibold uppercase tracking-widest font-sans">
              <Sparkles className="w-3.5 h-3.5" /> GOUGER STREET, ADELAIDE
            </span>

            {/* Headline and Subhead */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-charcoal-dark leading-[1.15] max-w-4xl mx-auto tracking-tight">
              Authentic Japanese Comfort Food <br />
              <span className="italic text-brand-green font-normal">in the Heart of Adelaide.</span>
            </h1>

            <p className="font-sans text-brand-charcoal/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              Welcome to Hotaru, where traditional sushi, generous rice meals, and a warm, relaxed dining experience await you on Gouger Street.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="hero-view-menu-btn"
                onClick={() => {
                  setActivePage('menu');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-brand-green hover:bg-brand-green-hover text-white font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-green/10 group cursor-pointer"
              >
                <span>View Menu Specialties</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                id="hero-call-btn"
                href={`tel:${RESTAURANT_INFO.phone.callable}`}
                className="w-full sm:w-auto bg-transparent border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call to Order & Book</span>
              </a>
            </div>

            {/* Instant contact summary in hero */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-2 text-xs uppercase tracking-wider font-semibold text-brand-earth">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                Open Tuesday – Sunday
              </span>
              <span className="hidden sm:inline text-brand-cream-dark">|</span>
              <a href={`tel:${RESTAURANT_INFO.phone.callable}`} className="hover:text-brand-green transition-colors flex items-center gap-1">
                <Phone className="w-3 h-3" /> +61 8 8410 2838
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom fading curtain */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-offwhite to-transparent z-10" />
      </section>

      {/* 2. Our Story / philosophy block */}
      <section id="our-story" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text and philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-earth font-bold font-sans">
              THE HONEST COOKING PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal-dark tracking-tight leading-tight">
              Unpretentious Cooking, <br />
              <span className="italic text-brand-green font-normal">Warm Spaces, Generous Portions.</span>
            </h2>
            <div className="w-16 h-1 bg-brand-green rounded" />

            <p className="text-[#555] font-sans text-base leading-relaxed">
              At Hotaru, we believe food should bring immediate comfort and genuine joy. Our unpretentious and cozy dining room on Gouger Street has been designed to let the honesty of our ingredients shine. We source premium, fresh Tasmanian salmon, high-grade ocean sashimi, and authentic traditional pantry staples to bring you the rich flavors of traditional Japanese cuisine.
            </p>

            <p className="text-[#777] font-sans text-sm sm:text-base leading-relaxed">
              Whether you are catching up with friends over our beautifully assembled sharing platters, refueling with an expansive katsu curry, or unwinding with a comforting bowl of warm egg-topped donburi, you can expect satisfying portion sizes and welcoming service every single time. Here, we skip the complicated dining pretenses to focus on simple, masterfully executed meals and a relaxed parlor environment.
            </p>

            {/* Small stats badges */}
            <div className="pt-3 grid grid-cols-3 gap-4">
              <div className="p-4 bg-brand-cream rounded-2xl border border-brand-cream-dark text-center">
                <span className="text-brand-green text-xl font-bold font-serif block">100%</span>
                <span className="text-[10px] text-brand-earth uppercase tracking-widest block font-sans font-bold">Traditional</span>
              </div>
              <div className="p-4 bg-brand-cream rounded-2xl border border-brand-cream-dark text-center">
                <span className="text-brand-green text-xl font-bold font-serif block">Fresh</span>
                <span className="text-[10px] text-brand-earth uppercase tracking-widest block font-sans font-bold">Sashimi Daily</span>
              </div>
              <div className="p-4 bg-brand-cream rounded-2xl border border-brand-cream-dark text-center">
                <span className="text-brand-green text-xl font-bold font-serif block">Ample</span>
                <span className="text-[10px] text-brand-earth uppercase tracking-widest block font-sans font-bold">Serving Sizes</span>
              </div>
            </div>
          </div>

          {/* Side card detail */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl shadow-xl space-y-4 relative overflow-hidden border border-brand-cream-dark group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl" />
              <div className="flex gap-2 text-brand-green text-xs font-sans font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>LOCAL FAVORITE SPECIALIST</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-charcoal-dark">
                A Gouger Street Landmark
              </h3>
              <p className="text-[#555] text-xs sm:text-sm leading-relaxed font-sans">
                Located in Adelaide’s premier food corridor, we run a small, intimate kitchen focusing strictly on the classic dishes Japanese locals depend on for comfort. No shortcuts, just large plates and authentic taste.
              </p>

              {/* Mini quick detail */}
              <div className="space-y-2 pt-4 border-t border-brand-cream-dark text-xs text-brand-earth font-sans">
                <div className="flex justify-between">
                  <span>Takeaway Service:</span>
                  <span className="text-brand-green font-semibold">Available during open hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Table Reservations:</span>
                  <span className="text-brand-green font-semibold">Strongly recommended</span>
                </div>
                <div className="flex justify-between">
                  <span>Contact Number:</span>
                  <span className="text-brand-charcoal-dark font-bold">{RESTAURANT_INFO.phone.display}</span>
                </div>
              </div>

              <button
                id="story-menu-nav-btn"
                onClick={() => setActivePage('menu')}
                className="w-full bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                <span>View Detailed Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Dishes section */}
      <section id="featured-dishes" className="bg-brand-cream py-20 border-y border-brand-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-brand-earth font-bold font-sans">
              HIGHLY RECOMMENDED BY REGULARS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal-dark tracking-tight">
              Reviewers’ Favorite Handcrafted Dishes
            </h2>
            <p className="text-[#555] text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
              With a strong focus on ample portions and beautiful, direct plating, these are the signature meals our Adelaide regulars order time and again.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                id={`featured-card-${item.id}`}
                className="bg-white rounded-3xl overflow-hidden border border-brand-cream-dark hover:border-brand-green/20 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                {/* Image panel */}
                <div className="h-64 overflow-hidden relative">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-brand-cream flex items-center justify-center text-brand-earth font-mono text-sm">
                      [ Beautiful Dish Image ]
                    </div>
                  )}
                  {/* Category tag */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-brand-green text-[10px] font-bold uppercase tracking-widest font-sans py-1.5 px-3.5 rounded-full shadow-sm border border-brand-cream-dark">
                    {item.category === 'sushi-sashimi' ? 'Sushi Platter' : 'Hearty Rice Meal'}
                  </span>
                  {/* Price */}
                  <span className="absolute bottom-4 right-4 bg-brand-green text-white text-sm font-bold font-sans py-1.5 px-4 rounded-full shadow-md">
                    {item.price}
                  </span>
                </div>

                {/* Details layout */}
                <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-serif text-xl font-bold text-brand-charcoal-dark group-hover:text-brand-green transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    {item.jpName && (
                      <p className="text-xs text-brand-green/80 font-mono tracking-wider font-semibold">{item.jpName}</p>
                    )}
                    <p className="text-[#555] text-xs sm:text-sm leading-relaxed font-sans font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights and footer */}
                  <div className="space-y-3 pt-4 border-t border-brand-cream">
                    <div className="flex flex-wrap gap-1.55">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-brand-cream text-brand-earth text-[10px] font-semibold font-sans px-2.5 py-1 rounded-full border border-brand-cream-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-brand-green font-semibold">
                      <Heart className="w-3.5 h-3.5 text-brand-green fill-brand-green/10" />
                      <span>Regulars love the generous size & presentation</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <button
              id="featured-all-menu-btn"
              onClick={() => {
                setActivePage('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 border-2 border-brand-green text-brand-green rounded-full font-bold hover:bg-brand-green hover:text-white transition-colors cursor-pointer"
            >
              <span>Explore Our Full Menu Specialties</span>
              <ArrowRight className="w-4 h-4 text-brand-green transition-transform group-hover:translate-x-1 outline-none inline-block ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Testimonials / Reviews block */}
      <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section title */}
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-brand-earth font-bold font-sans">
              REAL REVIEWS FROM ADELAIDE FOODIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal-dark tracking-tight">
              Loved for Our Authentic Spirit, Hearty Serves
            </h2>
            <p className="text-[#555] text-sm max-w-md mx-auto font-sans leading-relaxed">
              We focus on honest feedback, local ingredients, and solid, satisfying serves. Here is what guests write on social portals.
            </p>
          </div>

          {/* Testimonial grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                id={`review-card-${review.id}`}
                className="bg-white p-8 rounded-3xl border border-brand-cream-dark flex flex-col justify-between hover:border-brand-green/20 transition-colors shadow-sm"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-brand-green">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-brand-green text-brand-green" />
                    ))}
                  </div>

                  <p className="text-[#444] text-xs sm:text-sm leading-relaxed font-sans italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-cream flex items-center justify-between">
                  <div>
                    <h4 className="font-sans font-bold text-xs text-brand-charcoal-dark">
                      {review.author}
                    </h4>
                    <span className="text-[10px] text-brand-earth block">{review.date}</span>
                  </div>

                  <span className="text-[10px] uppercase font-sans font-bold tracking-wider text-brand-green bg-brand-green/5 px-2.5 py-1 rounded-full border border-brand-green/20">
                    {review.source}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Clean footnote regarding portions */}
          <div className="max-w-2xl mx-auto flex items-center gap-3 bg-brand-cream p-5 rounded-2xl border border-brand-cream-dark text-xs text-brand-charcoal leading-relaxed">
            <AlertCircle className="w-5 h-5 text-brand-green shrink-0 animate-pulse" />
            <p>
              <strong>Portion Policy:</strong> Every dish at Hotaru is constructed to Japanese home style comfort requirements. Our rice bowls (donburi) and bento boxes are formulated as large servings to guarantee a perfectly filling dining experience. No customer goes home hungry!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
