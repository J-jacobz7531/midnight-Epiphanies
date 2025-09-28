import React from 'react';
import Footer from './Footer';
import { VisionIcon, PurposeIcon, StrategyIcon } from './Icons';

const OurHistory: React.FC = () => {
  return (
    <div className="bg-[#313A3C] font-['Poppins']">
      <main>
        <HeroSection />
        <StorySection />
        <ValuesSection />
        <SloganSection />
      </main>
      <Footer />
    </div>
  );
};

const HeroSection: React.FC = () => (
  <section 
    className="relative top-0 left-0 w-full h-screen min-h-[700px] flex items-center justify-center text-white bg-[#141d21] pt-24" 
    style={{ 
      paddingTop: 'calc(100vw * 0.10)', 
      paddingBottom: 'calc(100vw * 0.20)', 
    }}
  >
    <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    <div className="relative z-10 w-full max-w-7xl px-8 lg:px-[5%]">
      <div className="w-full text-left space-y-8">
        <div>
          <p className="text-[#f2f2f0] font-['Poppins'] font-light text-lg mb-4">Our Mission</p>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-['Cormorant_Garamond'] font-light text-transparent bg-clip-text bg-gradient-to-r from-[#84bfc7] to-[#faaf40] leading-tight mb-8">
            By connecting responsible sourcing with innovation, we bridge purpose and performance — turning sustainable supply chains into engines of prosperity and regeneration.
          </h3>
        </div>
        
        <div className="max-w-4xl space-y-6">
          <p className="text-[#f2f2f0] font-['Poppins'] font-light text-lg leading-relaxed opacity-90">
            We believe that every ingredient tells a story — of the soil it grew in, the hands that nurtured it, and the communities that depend on it. Our mission extends beyond traditional sourcing to create a regenerative ecosystem where environmental stewardship, social equity, and economic prosperity converge.
          </p>
          
          <p className="text-[#f2f2f0] font-['Poppins'] font-light text-lg leading-relaxed opacity-90">
            Through cutting-edge technology, transparent partnerships, and unwavering commitment to sustainability, we're not just transforming supply chains — we're cultivating a future where business success amplifies positive impact for farmers, communities, and our planet.
          </p>
          
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-[#84bfc7] to-[#faaf40] rounded-full"></div>
              <span className="text-[#f2f2f0] font-['Poppins'] font-light text-sm">Regenerative Agriculture</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-[#84bfc7] to-[#faaf40] rounded-full"></div>
              <span className="text-[#f2f2f0] font-['Poppins'] font-light text-sm">Community Empowerment</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-[#84bfc7] to-[#faaf40] rounded-full"></div>
              <span className="text-[#f2f2f0] font-['Poppins'] font-light text-sm">Climate Action</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StorySection: React.FC = () => (
  <section className="relative z-10 bg-[#F2F2F0] w-full py-24 lg:py-32">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
        <div className="w-full lg:w-1/4">
          <h1 className="text-[#313a3c] font-['Cormorant_Garamond'] text-6xl lg:text-7xl leading-[0.9] font-light">
            Our Story
          </h1>
        </div>

        <div className="w-full lg:w-2/3 text-lg font-light leading-relaxed text-[#141d21] space-y-6">
          <p>Ophel Holdings was born from a simple yet profound idea — that sustainability should not remain an aspiration, but become a lived reality across every link of the food chain. Our founders saw a world where millions of smallholder farmers labored at the heart of global markets, yet reaped only a fraction of their value.</p>
          <p>They saw communities full of promise but limited by unequal access, and ecosystems straining under unsustainable production. They believed there had to be a better way — one that bridges business success with shared prosperity and planetary regeneration. That conviction became our foundation.</p>
          <p>From the start, we've prioritized sustainability, working to create measurable impact for both people and the planet. Our efforts include building transparent supply chains, supporting farmers, and investing in innovation to deliver products with a reduced environmental footprint.</p>
          <p>Even our name carries that belief — a promise to nurture growth, resilience, and opportunity.</p>
          <p>Today, Ophel stands as more than a company. It is a movement to reimagine how food systems work — where farmers prosper, communities thrive, climate action accelerates, and nature flourishes.</p>
        </div>

        <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
          {/* Avoid spaces in filenames — use /founder-jordan.jpg in /public */}
          <img
            src="/Founder Jordan.JPG"
            alt="Founder portrait"
            className="w-full max-w-[280px] h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
);

const ValuesSection: React.FC = () => (
  <section className="relative z-20 isolate text-[#f2f2f0] bg-[#313A3C] pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 lg:pb-24">
    <div className="max-w-7xl mx-auto px-8 lg:px-[15%]">
      <div className="grid md:grid-cols-3 gap-10 text-left">
        <div className="flex flex-col">
          <div className="mb-6"><VisionIcon /></div>
          <h4 className="font-medium text-xl mb-4 text-[#f2f2f0]">Vision</h4>
          <p className="font-extralight text-base leading-relaxed text-[#f2f2f0]">
            A future where sustainable sourcing drives prosperity, equity, and regeneration across global food systems.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="mb-6"><PurposeIcon /></div>
          <h4 className="font-medium text-xl mb-4 text-[#f2f2f0]">Purpose</h4>
          <p className="font-extralight text-base leading-relaxed text-[#f2f2f0]">
            To transform natural ingredient supply chains through innovation, traceability, and measurable sustainability.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="mb-6"><StrategyIcon /></div>
          <h4 className="font-medium text-xl mb-4 text-[#f2f2f0]">Strategy</h4>
          <p className="font-extralight text-base leading-relaxed text-[#f2f2f0]">
            We partner with farmers, invest in regenerative practices, and deliver verified low-carbon ingredients.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SloganSection: React.FC = () => (
  // removed negative top margin to prevent overlap; keep stacking below Values
  <section className="relative z-10 bg-[#313A3C]">
    <div className="w-full max-w-7xl mx-auto py-12 lg:py-20 px-8 lg:px-[10%]">
      <h2
        className="text-[#F2F2F0] font-['Cormorant_Garamond'] font-light leading-[1.1] max-w-4xl"
        style={{ fontSize: 'min(90px, 5vw)' }}
      >
        We don't just allocate capital, we make it work for people and the planet.
      </h2>
    </div>
  </section>
);

export default OurHistory;
