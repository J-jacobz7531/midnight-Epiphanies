import React from 'react';

const ContactHero: React.FC = () => {
  return (
    <section className="bg-ig-dark text-ig-off-white relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(https://picsum.photos/1600/900?grayscale)' }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-[10vw] lg:py-[calc(100vw*0.10)]">
        <div className="max-w-7xl mx-auto flex flex-col items-start space-y-4">
          <p className="font-sans font-light text-ig-off-white">Contact</p>
          <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-ig-accent-teal to-ig-accent-orange">
            Connect with us to explore impactful investment opportunities.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
