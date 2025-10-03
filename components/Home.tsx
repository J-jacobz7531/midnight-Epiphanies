import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import WhatWeDo from './WhatWeDo';
import NewsInsights from './NewsInsights';
import RealChange from './RealChange';
import Connect from './Connect';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <div className="relative z-10">
        <WhatWeDo />
        <NewsInsights />
        {/* <RealChange /> */}
        <Connect />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
