import React from 'react';
import { useState } from 'react';
import Footer from './Footer';
import OffCanvasMenu from './OffCanvasMenu';
import TeamSection from './TeamSection';
import { teamData } from '../constants';

const PeopleHero: React.FC = () => {
  return (
    <div className="relative bg-ig-dark text-white pt-48 pb-24">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(https://picsum.photos/1600/900?grayscale)' }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl">
          <p className="font-sans text-ig-off-white text-lg md:text-xl">Our People</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mt-4 leading-tight bg-gradient-to-r from-ig-accent-teal to-ig-accent-orange bg-clip-text text-transparent">
            Discover the passionate individuals at iGravity who are committed to creating innovative financial solutions that make a real impact
          </h1>
        </div>
      </div>
    </div>
  );
};

const People: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative font-sans antialiased">
      <OffCanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <div className={`transition-transform duration-500 ${isMenuOpen ? 'translate-x-64' : ''}`}>
        <main>
          <PeopleHero />
          <div className="bg-ig-dark-2 text-ig-off-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-ig-off-white text-ig-text-dark rounded-tl-[40px] rounded-tr-[40px]">
              {teamData.map((category, index) => (
                <TeamSection 
                  key={index} 
                  title={category.title} 
                  members={category.members} 
                  isFirst={index === 0} 
                />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default People;
