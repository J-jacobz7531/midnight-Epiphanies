import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import WhatWeDo from './WhatWeDo';
import NewsInsights from './NewsInsights';
import RealChange from './RealChange';
import Connect from './Connect';
import Footer from './Footer';
import SEOHead from './seo/SEOHead';
import { pageConfigs } from './seo/seoConfig';
import { StructuredData, financialServiceSchema, createBreadcrumbSchema } from './seo/StructuredData';

const Home: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ophelholdings.org/' }
  ];

  return (
    <main>
      <SEOHead {...pageConfigs.home} />
      <StructuredData data={[
        financialServiceSchema,
        createBreadcrumbSchema(breadcrumbs)
      ]} />
      
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
