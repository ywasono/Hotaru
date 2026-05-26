import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data';
import { X, Calendar, Clock, Users, Phone, Notebook, Check, ShoppingBag } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    notes: '',
    type: 'dine-in', // dine-in or takeaway
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      guests: '2',
      date: '',
      time: '',
      notes: '',
      type: 'dine-in',
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      id="reservation-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/80 backdrop-blur-sm transition-all"
    >
      <div
        id="reservation-modal-card"
        className="w-full max-w-lg bg-white border border-brand-cream-dark rounded-3xl overflow-hidden shadow-2xl relative animate-fade-in-up"
      >
        {/* Header decoration */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-green" />

        {/* Close Button */}
        <button
          id="modal-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-brand-earth hover:text-brand-green rounded-full hover:bg-brand-cream transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Title and Info */}
            <div className="p-6 pb-4 border-b border-brand-cream-dark">
              <span className="text-xs uppercase tracking-widest text-[#8a8a7a] font-bold font-sans">
                RESERVE A TABLE OR PRE-ORDER
              </span>
              <h3 className="font-serif text-2xl font-bold text-brand-charcoal-dark mt-1">
                Join Us at Hotaru
              </h3>
              <p className="text-[#555] text-sm mt-1 leading-relaxed">
                Enjoy generous portions of authentic Japanese comfort food. Fill out the form below, or call us directly to book instantly.
              </p>

              {/* Instant Call Banner */}
              <div className="mt-4 bg-brand-cream p-4 rounded-xl border border-brand-cream-dark flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-green/10 text-brand-green rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-earth font-bold font-sans">FOR INSTANT BOOKINGS / TAKEAWAY</p>
                    <a
                      href={`tel:${RESTAURANT_INFO.phone.callable}`}
                      className="text-brand-green font-bold hover:underline"
                    >
                      {RESTAURANT_INFO.phone.display}
                    </a>
                  </div>
                </div>
                <a
                  id="modal-quick-call"
                  href={`tel:${RESTAURANT_INFO.phone.callable}`}
                  className="bg-brand-green hover:bg-brand-green-hover text-white font-semibold px-4 py-1.5 rounded-lg text-xs transition-colors shadow-sm"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4" id="modal-booking-form">
              {/* Selector for Dine-in vs Takeaway */}
              <div className="grid grid-cols-2 gap-2 bg-brand-cream p-1.5 rounded-2xl border border-brand-cream-dark">
                <button
                  type="button"
                  id="selector-dine-in"
                  onClick={() => setFormData({ ...formData, type: 'dine-in' })}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    formData.type === 'dine-in'
                      ? 'bg-brand-green text-white shadow-sm'
                      : 'text-brand-earth hover:text-brand-green'
                  }`}
                >
                  <Notebook className="w-4 h-4" />
                  Table Booking
                </button>
                <button
                  type="button"
                  id="selector-takeaway"
                  onClick={() => setFormData({ ...formData, type: 'takeaway' })}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    formData.type === 'takeaway'
                      ? 'bg-brand-green text-white shadow-sm'
                      : 'text-brand-earth hover:text-brand-green'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Pre-Order Takeaway
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="booking-name" className="block text-xs font-bold text-brand-earth uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="booking-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full bg-brand-cream text-brand-charcoal-dark rounded-xl border border-brand-cream-dark px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-green transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="booking-phone" className="block text-xs font-bold text-brand-earth uppercase tracking-wider mb-1.5">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    id="booking-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +61 400 123 456"
                    className="w-full bg-brand-cream text-brand-charcoal-dark rounded-xl border border-brand-cream-dark px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-green transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Date */}
                <div>
                  <label htmlFor="booking-date" className="block text-xs font-bold text-brand-earth uppercase tracking-wider mb-1.5">
                    Choose Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-brand-green" />
                    <input
                      type="date"
                      id="booking-date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-brand-cream text-brand-charcoal-dark rounded-xl border border-brand-cream-dark pl-9 pr-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-green transition-colors"
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label htmlFor="booking-time" className="block text-xs font-bold text-brand-earth uppercase tracking-wider mb-1.5">
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3.5 w-4 h-4 text-brand-green" />
                    <input
                      type="time"
                      id="booking-time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-brand-cream text-brand-charcoal-dark rounded-xl border border-brand-cream-dark pl-9 pr-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-green transition-colors"
                    />
                  </div>
                </div>

                {/* Number of Guests (Only show if Dine-in) */}
                <div>
                  <label htmlFor="booking-guests" className="block text-xs font-bold text-brand-earth uppercase tracking-wider mb-1.5">
                    {formData.type === 'dine-in' ? 'Table Guests *' : 'Portions *'}
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3.5 w-4 h-4 text-brand-green" />
                    <select
                      id="booking-guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-brand-cream text-brand-charcoal-dark rounded-xl border border-brand-cream-dark pl-9 pr-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-green transition-colors appearance-none font-sans"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6">6 People</option>
                      <option value="7">7+ People</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Notes / Menu selections */}
              <div>
                <label htmlFor="booking-notes" className="block text-xs font-bold text-brand-earth uppercase tracking-wider mb-1.5">
                  {formData.type === 'dine-in' ? 'Special Requests / Dietary Requirements' : 'List Menu Items (e.g. Sushi Platter, Chicken Katsu Curry)'}
                </label>
                <textarea
                  id="booking-notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={formData.type === 'dine-in' ? 'Let us know if it is a special occasion or if you have any allergies.' : 'Enter items to pre-order and their quantities...'}
                  className="w-full bg-brand-cream text-brand-charcoal-dark rounded-2xl border border-brand-cream-dark px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-green transition-colors resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  id="btn-cancel-modal"
                  onClick={onClose}
                  className="w-1/3 bg-brand-cream hover:bg-brand-cream-dark text-brand-charcoal font-bold py-3 rounded-full text-sm transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  id="btn-submit-booking"
                  disabled={isSubmitting}
                  className="w-2/3 bg-brand-green hover:bg-brand-green-hover disabled:opacity-50 text-white font-bold py-3 rounded-full text-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer animate-pulse"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : formData.type === 'dine-in' ? (
                    'Confirm Table Booking'
                  ) : (
                    'Send Takeaway Pre-Order'
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="p-8 text-center space-y-5 animate-fade-in" id="booking-success-view">
            <div className="w-16 h-16 bg-emerald-100 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-brand-charcoal-dark">
                {formData.type === 'dine-in' ? 'Table Reservation Received!' : 'Takeaway Request Received!'}
              </h3>
              <p className="text-[#555] text-sm mt-2 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-brand-green font-bold">{formData.name}</strong>. We have allocated a spot for you on{' '}
                <strong className="text-brand-green font-bold">{formData.date}</strong> at <strong className="text-brand-green font-bold">{formData.time}</strong>.
              </p>
              <p className="text-brand-earth text-xs mt-3">
                We will send you a text confirmation on <strong className="text-brand-charcoal-dark">{formData.phone}</strong> shortly.
              </p>
            </div>

            {/* Support message */}
            <div className="bg-brand-cream p-4 rounded-xl border border-brand-cream-dark max-w-sm mx-auto text-xs text-[#555] leading-relaxed">
              Need to cancel or change details? Give our unpretentious dining room team a call directly at{' '}
              <a href={`tel:${RESTAURANT_INFO.phone.callable}`} className="text-brand-green font-bold hover:underline">
                {RESTAURANT_INFO.phone.display}
              </a>.
            </div>

            <div className="pt-2">
              <button
                id="btn-success-close"
                onClick={handleReset}
                className="bg-brand-green hover:bg-brand-green-hover text-white font-bold px-8 py-2.5 rounded-full text-sm transition-colors shadow-md cursor-pointer"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
