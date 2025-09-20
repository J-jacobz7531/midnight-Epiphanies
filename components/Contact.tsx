import React from 'react';
import ContactHero from './ContactHero';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Contact: React.FC = () => {
  return (
    <div className="font-sans antialiased bg-[#F1F0EC]">
      <ContactHero />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
