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
    <div 
      className="absolute inset-0 bg-black opacity-30 z-0"
    ></div>
    <div className="relative z-10 w-full max-w-7xl px-8 lg:px-[5%]">
      <div className="w-full text-left">
        <p className="text-[#f2f2f0] font-['Poppins'] font-light">Our Mission</p>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-['Cormorant_Garamond'] font-light text-transparent bg-clip-text bg-gradient-to-r from-[#84bfc7] to-[#faaf40] leading-tight">
          By supporting high-impact enterprises and providing investors with access to unique opportunities, we bridge capital and purpose to create lasting change.
        </h3>
      </div>
    </div>
  </section>
);

const StorySection: React.FC = () => (
  <section className="relative z-10 bg-[#F2F2F0] w-full py-20"> {/* Adjusted padding */}
    <div className="max-w-[1200px] mx-auto px-6 lg:px-8"> {/* Adjusted max-width */}
      <div className="flex flex-wrap lg:flex-nowrap items-start gap-12"> {/* Adjusted gap */}
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <h1 className="text-[#313a3c] font-['Cormorant_Garamond'] text-[5.5vh] leading-[1.1]">Our Story</h1> {/* Adjusted font size */}
        </div>
        <div className="w-full lg:w-2/4 text-base font-light leading-relaxed text-[#141d21]"> {/* Adjusted width */}
          <p className="mb-4">iGravity was born on March 15, 2017, out of a bold vision to rethink how impact investing works. Our founder, Patrick, recognized the need to challenge the status quo, where too often, promising ideas stayed siloed, partnerships felt transactional, and the true potential for impact remained untapped.</p>
          <p className="mb-4">He believed there was a better way. A way where collaboration between the financial community and philanthropic organizations wasn't just a buzzword, but a core principle. Where capital, expertise, and purpose could come together to drive real, measurable change. From that belief, iGravity took shape—not just as a company, but as a movement.</p>
          <p className="mb-4">Even our name reflects that ambition: a gravitational pull toward impact.</p>
          <p>Patrick's vision remains our compass—to help build a financial system that values impact as much as returns. One where capital flows with intention, empowering high-impact enterprises in emerging markets and beyond.</p>
        </div>
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-end mt-8 lg:mt-0"> {/* Adjusted width */}
          <img
            src="https://igravity.net/wp-content/uploads/2025/08/GRVTY-094-1-e1756971346550-245x300.webp"
            alt="Founder Patrick"
            className="w-[245px] h-auto rounded-md shadow-lg" // Added rounded corners and shadow
          />
        </div>
      </div>
    </div>
  </section>
);

const ValuesSection: React.FC = () => (
  <section className="relative z-20 text-[#f2f2f0] lg:-mt-[200px] bg-[#313A3C]">
    <div className="max-w-7xl mx-auto lg:py-[5%] py-12 px-8 lg:px-[10%]">
      <div className="grid md:grid-cols-3 gap-12 text-left">
        <div className="flex flex-col">
          <div className="mb-4"><VisionIcon /></div>
          <h4 className="font-['Poppins'] font-medium text-lg mb-2">Vision</h4>
          <p className="font-['Poppins'] font-extralight text-base leading-relaxed">A future where finance and entrepreneurship fuel sustainable and equitable progress.</p>
        </div>
        <div className="flex flex-col">
          <div className="mb-4"><PurposeIcon /></div>
          <h4 className="font-['Poppins'] font-medium text-lg mb-2">Purpose</h4>
          <p className="font-['Poppins'] font-extralight text-base leading-relaxed">To design and manage innovative finance facilities that bridge the gap between capital and impact. </p>
        </div>
        <div className="flex flex-col">
          <div className="mb-4"><StrategyIcon /></div>
          <h4 className="font-['Poppins'] font-medium text-lg mb-2">Strategy</h4>
          <p className="font-['Poppins'] font-extralight text-base leading-relaxed">We advise entrepreneurs and organizations on sustainable business models and impact measurement. </p>
        </div>
      </div>
    </div>
  </section>
);

const SloganSection: React.FC = () => (
    <section className="relative z-20 bg-[#313A3C] lg:-mt-[200px] overflow-hidden">
        <div className="w-full max-w-7xl mx-auto py-12 lg:py-20 px-8 lg:px-[10%]">
            <h2 className="text-[#F2F2F0] font-['Cormorant_Garamond'] font-light text-[5vw] leading-[1.1] max-w-4xl" style={{ fontSize: 'min(90px, 5vw)'}}>
                We don't just allocate capital, we make it work for people and the planet.
            </h2>
        </div>
    </section>
);

export default OurHistory;
