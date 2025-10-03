import React from 'react';
import FaqSection from './FaqSection';
import Footer from './Footer';

const FaqHero: React.FC = () => {
  return (
    <section className="bg-ig-dark text-ig-off-white relative">
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
        style={{ backgroundImage: "url('/CocoaPlantation.jpg')" }}
      />
      <div className="absolute inset-0 bg-black opacity-30" />

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-[10vw] lg:py-[calc(100vw*0.10)]">
        <div className="max-w-7xl mx-auto flex flex-col items-start space-y-4">
          <p className="font-sans font-light text-ig-off-white">Frequently Asked Questions</p>
          <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-ig-accent-teal to-ig-accent-orange">
            Your questions answered—discover how we're transforming impact investing through sustainable agriculture and regenerative practices.
          </h1>
        </div>
      </div>
    </section>
  );
};

const Faq: React.FC = () => {
  return (
    <div className="bg-ig-off-white text-ig-dark">
      <FaqHero />
      <main>
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
