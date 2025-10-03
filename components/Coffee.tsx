import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { CoffeeVariety } from '../types';
import CoffeeFocusCards from './CoffeeFocusCards';
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
  { id: 10, name: 'Arabica Ordinary', type: 'Arabica', notes: 'Rich flavor, chocolatey undertones', imageUrl: '/Prod/Arabica-Ordinary1.png' },
];

const CoffeeGrid: React.FC = () => {
  return (
    <section id="coffee-varieties" className="py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#4a2c2a] tracking-tight">
            Explore Our
            <br />
            Exceptional Coffee Varieties
          </h1>
          <div className="w-32 h-1 bg-[#b48c5a] mx-auto mt-6"></div>
        </div>
        
        <CoffeeFocusCards coffeeData={coffeeData} />
      </div>
    </section>
  );
};

const CoffeeInfoSection: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreVarieties = () => {
    // Scroll to top of coffee varieties section
    const coffeeGrid = document.querySelector('#coffee-varieties');
    if (coffeeGrid) {
      coffeeGrid.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTalkToUs = () => {
    navigate('/contact');
  };

  return (
    <section className="bg-white min-h-screen flex items-center justify-center font-sans text-black py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-8">
        
        {/* Left Section */}
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            ARABICA VS ROBUSTA
          </h1>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            There are two main varieties of coffee beans in the world: Coffee Arabica, and Coffee Robusta. More than three-quarters of beans that are sold in the world today are Coffee Arabica, while the remaining are Coffee Robusta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button 
              onClick={handleExploreVarieties}
              className="bg-black text-white font-semibold py-3 px-8 rounded-xl hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
            >
              Explore Varieties
            </button>
            <button 
              onClick={handleTalkToUs}
              className="bg-white text-black border border-gray-300 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Talk to us
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative lg:pl-16">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-repeat-y bg-[length:1px_8px]" style={{backgroundImage: 'linear-gradient(to bottom, #d1d5db 50%, transparent 50%)'}}></div>
          <div className="flex flex-col gap-12">
            
            {/* Arabica Section */}
            <div>
              <h2 className="text-xl font-semibold text-black mb-3">ARABICA COFFEE BEANS</h2>
              <p className="text-gray-600 leading-relaxed">
                The Arabica coffee bean is the most popular type of coffee which is considered of a higher quality, hence the baptism of gourmet coffee. It has a half the amount of caffeine as Robusta and a more pleasing taste and a smoother aromatic property with a sweeter and more complex flavour than Robusta.
              </p>
            </div>
            
            {/* Robusta Section */}
            <div>
              <h2 className="text-xl font-semibold text-black mb-3">ROBUSTA COFFEE BEANS</h2>
              <p className="text-gray-600 leading-relaxed">
                Robusta coffee beans are of a lower grade than Arabica making them cheaper. They are typically grown at lower elevations. They are easier to grow and maintain: more disease resistant, easier to tend to on the farm and have higher yield.
              </p>
            </div>

          </div>
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
      <CoffeeInfoSection />
      <Footer />
    </div>
  );
};

export default Coffee;
