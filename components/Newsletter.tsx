import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-[#F2F2F0] text-[#2C3133] py-16 md:py-24 px-4 sm:px-6 lg:px-0 mx-auto relative z-10 transform -translate-y-64 md:-translate-y-96">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 'calc(100% - 14%)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#313A3C]">
              Subscribe to our newsletter for updates, insights, and opportunities
            </h2>
          </div>
          <div className="w-full">
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email here" 
                className="flex-grow px-4 py-3 bg-white border border-gray-300 text-base font-light focus:ring-2 focus:ring-[#84BFC7] focus:border-transparent outline-none"
              />
              <button 
                type="submit" 
                className="px-8 py-3 bg-[#222829] text-[#F2F2F0] text-base font-medium border-2 border-[#84BFC7] hover:bg-opacity-90 transition-colors"
              >
                Get news
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
