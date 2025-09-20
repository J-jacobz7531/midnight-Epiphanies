import React, { useState } from 'react';
import ContactHero from './ContactHero';
import ContactSection from './ContactSection';
import Footer from './Footer';
import OffCanvasMenu from './OffCanvasMenu';

const Contact: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative font-sans antialiased">
      <OffCanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <div className={`transition-transform duration-500 ${isMenuOpen ? 'translate-x-64' : ''}`}>
        <main>
          <ContactHero />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
