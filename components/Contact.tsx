import React from 'react';
import ContactHero from './ContactHero';
import ContactSection from './ContactSection';
import Footer from './Footer';
import SEOHead from './seo/SEOHead';
import { pageConfigs } from './seo/seoConfig';
import { StructuredData, createBreadcrumbSchema } from './seo/StructuredData';

const Contact: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ophelholdings.org/' },
    { name: 'Contact', url: 'https://ophelholdings.org/contact' }
  ];

  return (
    <div className="font-sans antialiased bg-[#F1F0EC]">
      <SEOHead {...pageConfigs.contact} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      
      <ContactHero />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
