import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Pages
import { Home } from './pages/Home';
import { Care } from './pages/Care';
import { ServiceDetail } from './pages/ServiceDetail';
import { About } from './pages/About';
import { Doctors } from './pages/Doctors';
import { Clinic } from './pages/Clinic';
import { Contact } from './pages/Contact';
import { Appointment } from './pages/Appointment';

// Scroll To Top on route change helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FAF7F2] text-[#2B2A26]">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/care" element={<Care />} />
            <Route path="/care/:slug" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/clinic" element={<Clinic />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <FloatingWhatsApp />
        <Footer />
        <StickyMobileCTA />
      </div>
    </Router>
  );
};

export default App;
