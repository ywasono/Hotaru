import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import MenuSection from './components/MenuSection';
import LocationSection from './components/LocationSection';
import ReservationModal from './components/ReservationModal';
import { ActivePage } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBookingModal = () => setIsBookingOpen(true);
  const closeBookingModal = () => setIsBookingOpen(false);

  // Render proper section page
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomeSection
            setActivePage={setActivePage}
            openBookingModal={openBookingModal}
          />
        );
      case 'menu':
        return <MenuSection openBookingModal={openBookingModal} />;
      case 'location':
        return <LocationSection openBookingModal={openBookingModal} />;
      default:
        return (
          <HomeSection
            setActivePage={setActivePage}
            openBookingModal={openBookingModal}
          />
        );
    }
  };

  return (
    <div id="restaurant-app-root" className="min-h-screen bg-brand-offwhite flex flex-col justify-between text-brand-charcoal font-sans selection:bg-brand-green selection:text-white scroll-smooth pb-0">
      
      {/* Header element */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        openBookingModal={openBookingModal}
      />

      {/* Main interactive window wrapped in animators */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer layout */}
      <Footer setActivePage={setActivePage} />

      {/* Pop-up Reservation and Pre-order Modal */}
      <ReservationModal isOpen={isBookingOpen} onClose={closeBookingModal} />
      
    </div>
  );
}
