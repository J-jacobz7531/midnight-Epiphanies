import React from 'react';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import { teamData } from '@/constants';

// A new, cleaner Hero component defined directly within People.tsx for simplicity
const PeopleHero: React.FC = () => {
  return (
    <section className="bg-brand-light py-24 sm:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="font-sans text-brand-dark-secondary">Our People</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mt-4 !leading-extra-tight text-brand-dark-tertiary">
          Meet the passionate people at Ophel Holdings who are driving sustainable sourcing, empowering farmers, and shaping food systems that truly make a difference.
          </h1>
        </div>
      </div>
    </section>
  );
};

const People: React.FC = () => {
  return (
    <div className="font-sans antialiased bg-brand-light">
      <main>
        <PeopleHero />
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
          {teamData.map((category, index) => (
            <TeamSection 
              key={index} 
              title={category.title} 
              members={category.members} 
              isFirst={index === 0} 
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default People;