import React from 'react';
import type { CoffeeVariety } from '../types';
import CoffeeCard from './CoffeeCard';
import Header from './Header';
import Footer from './Footer';

const CoffeeHero: React.FC = () => {
  return (
    <section className="bg-ig-dark text-ig-off-white relative">
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
        style={{ backgroundImage: "url('/Coffee7.jpg')" }}
      />
      <div className="absolute inset-0 bg-black opacity-30" />

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-[10vw] lg:py-[calc(100vw*0.10)]">
        <div className="max-w-7xl mx-auto flex flex-col items-start space-y-4">
          <p className="font-sans font-light text-ig-off-white">Premium Coffee Collection</p>
          <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-ig-accent-teal to-ig-accent-orange">
            From bean to cup, we deliver exceptional coffee varieties that tell the story of sustainable farming and quality craftsmanship.
          </h1>
        </div>
      </div>
    </section>
  );
};

const coffeeData: CoffeeVariety[] = [
  { id: 1, name: 'Parchment Ordinary Arabica', type: 'Arabica', notes: 'Earthy, full-bodied, green grade', imageUrl: '/Prod/Parchment-ordinary-Arabica_.png' },
  { id: 2, name: 'Parchment Full Washed', type: 'Arabica', notes: 'Clean, bright, balanced body', imageUrl: '/Prod/Parchment-full-washed.png' },
  { id: 3, name: 'Robusta SC-1800', type: 'Robusta', notes: 'Earthy, full bodied, green grade', imageUrl: '/Prod/Robusta-SC-1800.png' },
  { id: 4, name: 'Robusta SC-1500', type: 'Robusta', notes: 'Smooth, medium body, nutty', imageUrl: '/Prod/Robusta-sc-1500.png' },
  { id: 5, name: 'Robusta SC-1200', type: 'Robusta', notes: 'Bold, strong flavor profile', imageUrl: '/Prod/Robusta-sc-1200.png' },
  { id: 6, name: 'Washed CPB', type: 'Arabica', notes: 'Bright acidity, floral notes', imageUrl: '/Prod/Washed-CPB.png' },
  { id: 7, name: 'Arabica Wugar', type: 'Arabica', notes: 'Earthy, full bodied, green notes', imageUrl: '/Prod/Arabica-wugar_.png' },
  { id: 8, name: 'Arabica Washed', type: 'Arabica', notes: 'Bold, strong, traditional', imageUrl: '/Prod/Arabica-washed.png' },
  { id: 9, name: 'Washed AA', type: 'Arabica', notes: 'High acidity, winey notes', imageUrl: '/Prod/washed-AA.png' },
  { id: 10, name: 'Arabica Ordinary', type: 'Arabica', notes: 'Rich flavor, chocolatey undertones', imageUrl: '/Prod/Arabica-Ordinary.png' },
];

const CoffeeGrid: React.FC = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#4a2c2a] tracking-tight">
            Explore Our
            <br />
            Exceptional Coffee Varieties
          </h1>
          <div className="w-32 h-1 bg-[#b48c5a] mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coffeeData.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Coffee: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CoffeeHero />
      <CoffeeGrid />
      <Footer />
    </div>
  );
};

export default Coffee;
