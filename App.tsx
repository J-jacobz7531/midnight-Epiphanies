
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Home from './components/Home';
import OurHistory from './components/OurHistory';
import NewsApp from './components/NewsApp';
import Impact from './components/Impact';
import Investments from './components/Investments';
import Products from './components/Products';
import People from './components/People';
import Contact from './components/Contact';
import CoffeeImpactArticle from './components/CoffeeImpactArticle';
import Coffee from './components/Coffee';
import Faq from './components/Faq';
import WhatsAppWidget from './components/WhatsAppWidget';
import { StructuredData, organizationSchema } from './components/seo/StructuredData';
import SEOSetup from './components/seo/SEOSetup';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="bg-ig-dark-gray font-sans text-ig-off-white antialiased">
          {/* SEO Setup - Analytics, Search Console, Validation */}
          <SEOSetup 
            googleAnalyticsId="G-XXXXXXXXXX" 
            searchConsoleCode="YOUR-SEARCH-CONSOLE-CODE"
            enableValidator={true}
          />
          
          {/* Global Organization Schema */}
          <StructuredData data={organizationSchema} />
          
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-history" element={<OurHistory />} />
            <Route path="/news" element={<NewsApp />} />
            <Route path="/coffee-impact" element={<CoffeeImpactArticle />} />
            <Route path="/coffee" element={<Coffee />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/products" element={<Products />} />
            <Route path="/people" element={<People />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
          <WhatsAppWidget />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
