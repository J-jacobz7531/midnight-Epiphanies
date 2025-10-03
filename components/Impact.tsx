import React from 'react';
import AboutSection from './AboutSection';
import FiveStepsSection from './FiveStepsSection';
import ImpactThemesSection from './ImpactThemesSection';
import LeveragingSection from './LeveragingSection';
import Footer from './Footer';
import SEOHead from './seo/SEOHead';
import { pageConfigs } from './seo/seoConfig';
import { StructuredData, createBreadcrumbSchema } from './seo/StructuredData';

const ImpactHero: React.FC = () => {
  return (
    <section className="bg-ig-dark text-ig-off-white relative">
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
        style={{ backgroundImage: "url('/CocoaPlantation.jpg')" }}
      />
      <div className="absolute inset-0 bg-black opacity-30" />

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-[10vw] lg:py-[calc(100vw*0.10)]">
        <div className="max-w-7xl mx-auto flex flex-col items-start space-y-4">
          <p className="font-sans font-light text-ig-off-white">Impact Strategy</p>
          <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-ig-accent-teal to-ig-accent-orange">
            Real impact doesn’t happen by chance—it takes a clear vision, deliberate action, and a shared roadmap for change.
          </h1>
        </div>
      </div>
    </section>
  );
};

const Impact: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ophelholdings.org/' },
    { name: 'Impact', url: 'https://ophelholdings.org/impact' }
  ];

  return (
    <div className="bg-ig-off-white text-ig-dark">
      <SEOHead {...pageConfigs.impact} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      
      <ImpactHero />
      <main>
        <AboutSection />
        <FiveStepsSection />
        <ImpactThemesSection />
        <LeveragingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
