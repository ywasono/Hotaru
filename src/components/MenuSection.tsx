import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuItem } from '../types';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data';
import { Sparkles, Heart, Search, HelpCircle, Phone, Compass, ShoppingBag } from 'lucide-react';

interface MenuSectionProps {
  openBookingModal: () => void;
}

export default function MenuSection({ openBookingModal }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'sushi-sashimi' | 'rice-meals' | 'appetizers-sides'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { label: 'All Dishes', value: 'all' as const },
    { label: 'Sushi & Sashimi', value: 'sushi-sashimi' as const, desc: 'Fresh local nigiri, thick raw sashimi, & shared rolls' },
    { label: 'Hearty Rice Meals', value: 'rice-meals' as const, desc: 'Satisfying donburi bowls, comfort curries, & rich bento boxes' },
    { label: 'Appetizers & Sides', value: 'appetizers-sides' as const, desc: 'Gyoza, crunchy tempura, & warm starters to share' },
  ];

  // Filtering logic
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (item.jpName && item.jpName.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="menu-section" className="bg-brand-offwhite text-brand-charcoal min-h-screen pt-24 pb-20">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.2em] text-brand-earth font-bold font-sans">
          TRADITIONAL JAPANESE COMFORT FLAVORS
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-charcoal-dark tracking-tight">
          Our Humble Dining Menu
        </h1>
        <p className="text-[#555] text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-sans">
          We pride ourselves on using incredibly fresh ingredients sourced daily. Every item in our kitchen is prepared using authentic recipes and served in ample, satisfyingly generous portions.
        </p>
        <div className="w-12 h-1 bg-brand-green rounded mx-auto" />
      </section>

      {/* 2. Interactive Filters and Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-brand-cream p-5 rounded-3xl border border-brand-cream-dark shadow-sm">
          {/* Category Selectors */}
          <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto" id="menu-category-tabs">
            {categories.map((cat) => (
              <button
                key={cat.value}
                id={`tab-${cat.value}`}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-brand-green text-white font-bold shadow-md shadow-brand-green/20 scale-[1.02]'
                    : 'bg-white hover:bg-brand-cream text-brand-earth hover:text-brand-green border border-brand-cream-dark'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-brand-green" />
            <input
              type="text"
              id="menu-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Sushi, Katsu)..."
              className="w-full bg-white text-brand-charcoal-dark rounded-full border border-brand-cream-dark pl-11 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Selected Category description */}
        {selectedCategory !== 'all' && (
          <div className="text-center md:text-left mt-4 text-xs font-sans font-bold text-brand-earth uppercase tracking-widest pl-2 animate-fade-in">
            Category Focus: {categories.find((c) => c.value === selectedCategory)?.desc}
          </div>
        )}
      </section>

      {/* 3. Menu Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="menu-items-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                id={`menu-item-card-${item.id}`}
                className="bg-white rounded-3xl overflow-hidden border border-brand-cream-dark flex flex-col justify-between hover:border-brand-green/25 hover:bg-brand-cream/5 transition-all duration-300 shadow-md group relative"
              >
                {/* Popular badge */}
                {item.isPopular && (
                  <span className="absolute top-3 left-3 bg-brand-green text-white text-[9px] font-bold uppercase tracking-widest font-sans py-1.5 px-3 rounded-full z-15 shadow-sm border border-brand-green-hover flex items-center gap-1 cursor-default">
                    <Sparkles className="w-2.5 h-2.5" /> Popular Choice
                  </span>
                )}

                {/* Optional Image */}
                {item.image && (
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                )}

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    {/* Header: Name and Price */}
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-serif text-[17px] font-bold text-brand-charcoal-dark group-hover:text-brand-green transition-colors tracking-tight">
                        {item.name}
                      </h3>
                      <span className="font-sans text-brand-green font-bold text-sm bg-brand-cream border border-brand-cream-dark px-3 py-1 rounded-full whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>

                    {/* Japanese name block */}
                    {item.jpName && (
                      <p className="text-brand-green/80 font-mono text-[11px] font-semibold tracking-widest pt-0.5">
                        {item.jpName}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-[#555] text-xs sm:text-sm leading-relaxed font-sans font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer metadata */}
                  <div className="space-y-2 pt-4 border-t border-brand-cream">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-brand-cream text-brand-earth text-[9px] font-bold font-sans px-2.5 py-1 rounded-full uppercase border border-brand-cream-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Generous portions highlights */}
                    <span className="text-[10px] text-brand-green font-semibold font-sans flex items-center gap-1 select-none">
                      <Heart className="w-3 h-3 fill-brand-green/5 text-brand-green" /> Ample & generous serving size
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty search state */
          <div className="text-center py-16 space-y-4 max-w-sm mx-auto" id="menu-empty-state">
            <div className="w-12 h-12 bg-brand-cream rounded-full border border-brand-cream-dark flex items-center justify-center text-brand-green mx-auto">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-brand-charcoal-dark">No Dishes Found</h3>
              <p className="text-xs text-brand-earth mt-1 leading-relaxed">
                We couldn't find any dishes matching "{searchQuery}". Try searching for other terms or checking alternative tabs.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-white hover:bg-brand-cream text-brand-green border border-brand-cream-dark px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* 4. Dine-in or takeaway CTA strip */}
      <section className="max-w-4xl mx-auto px-4 mt-20">
        <div className="bg-brand-cream border border-brand-cream-dark p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#8a8a7a] font-sans">
              ORDER OR BOOK AT HOTARU
            </span>
            <h3 className="font-serif text-2xl font-bold text-brand-charcoal-dark">
              Ready to Order Takeaway or Grab a Cozy Table?
            </h3>
            <p className="text-[#555] text-xs sm:text-sm font-sans max-w-md leading-relaxed">
              Call us directly at <span className="text-brand-charcoal font-semibold">{RESTAURANT_INFO.phone.display}</span> to place instant takeaway pick-ups or secure a table reservation tonight.
            </p>
          </div>

           <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              id="menu-dial-btn"
              href={`tel:${RESTAURANT_INFO.phone.callable}`}
              className="w-full sm:w-auto bg-brand-green hover:bg-brand-green-hover text-white font-bold px-8 py-4 rounded-full text-xs sm:text-sm transition-all text-center flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us Direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
