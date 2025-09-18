import React from 'react';
import AboutSection from './AboutSection';
import FiveStepsSection from './FiveStepsSection';
import ImpactThemesSection from './ImpactThemesSection';
import LeveragingSection from './LeveragingSection';

const ImpactHero: React.FC = () => {
  return (
    <div className="relative bg-ig-dark text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      <div className="relative container mx-auto px-4 md:px-12 z-20">
        <div className="flex flex-col min-h-screen justify-center pt-32 pb-16 lg:pt-0 lg:pb-0" style={{minHeight: '80vh'}}>
            <div className="max-w-4xl">
                <p className="text-ig-off-white mb-4 text-lg">Impact Strategy</p>
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight font-light">
                    <span className="bg-gradient-to-r from-ig-teal to-ig-teal bg-clip-text text-transparent">
                        Real impact doesn't happen by chance, it takes a clear vision, deliberate action, and a shared roadmap for change.
                    </span>
                </h1>
            </div>
        </div>
      </div>
    </div>
  );
};

const Impact: React.FC = () => {
  return (
    <div className="bg-ig-off-white text-ig-dark">
      <ImpactHero />
      <main>
        <AboutSection />
        <FiveStepsSection />
        <ImpactThemesSection />
        <LeveragingSection />
      </main>
    </div>
  );
};

export default Impact;
