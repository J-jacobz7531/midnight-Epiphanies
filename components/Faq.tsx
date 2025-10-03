import React from 'react';
import FaqSection from './FaqSection';
import Footer from './Footer';
import SEOHead from './seo/SEOHead';
import { pageConfigs } from './seo/seoConfig';
import { StructuredData, createBreadcrumbSchema, createFAQSchema } from './seo/StructuredData';

const FaqHero: React.FC = () => {
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
          <p className="font-sans font-light text-ig-off-white">Frequently Asked Questions</p>
          <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-ig-accent-teal to-ig-accent-orange">
            Your questions answered—discover how we're transforming impact investing through sustainable agriculture and regenerative practices.
          </h1>
        </div>
      </div>
    </section>
  );
};

const Faq: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ophelholdings.org/' },
    { name: 'FAQ', url: 'https://ophelholdings.org/faq' }
  ];

  // Sample FAQ data for schema - you can expand this with actual FAQ content
  const faqData = [
    {
      question: "What is impact investing?",
      answer: "Impact investing is an investment approach that intentionally seeks to generate positive, measurable social and environmental impact alongside financial returns."
    },
    {
      question: "How does Ophel Holdings support sustainable finance?",
      answer: "We connect responsible finance with sustainable growth by providing advisory services, investment opportunities, and supporting climate-smart businesses across Africa."
    },
    {
      question: "What sectors does Ophel Holdings focus on?",
      answer: "We focus on sustainable agriculture, renewable energy, responsible sourcing, and other sectors that contribute to environmental and social impact."
    },
    {
      question: "How can I get involved with Ophel Holdings?",
      answer: "You can contact us through our website to discuss investment opportunities, partnerships, or advisory services related to impact investing and sustainable finance."
    }
  ];

  return (
    <div className="bg-ig-off-white text-ig-dark">
      <SEOHead {...pageConfigs.faq} />
      <StructuredData data={[
        createBreadcrumbSchema(breadcrumbs),
        createFAQSchema(faqData)
      ]} />
      
      <FaqHero />
      <main>
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
