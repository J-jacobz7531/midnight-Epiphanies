import React from 'react';
import { Helmet } from 'react-helmet-async';

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ophel Holdings",
  "url": "https://ophelholdings.org",
  "logo": "https://ophelholdings.org/logo.png",
  "description": "Ophel Holdings connects responsible finance with sustainable growth across Africa and beyond. Leading impact investing and sustainable finance solutions.",
  "foundingDate": "2020",
  "industry": "Financial Services",
  "sameAs": [
    "https://linkedin.com/company/ophelholdings",
    "https://twitter.com/ophelholdings"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+256-XXX-XXXXXX",
    "contactType": "Customer Service",
    "areaServed": ["UG", "KE", "TZ", "RW"],
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "UG",
    "addressRegion": "Central Region",
    "addressLocality": "Kampala"
  },
  "knowsAbout": [
    "Impact Investing",
    "Sustainable Finance",
    "ESG Investing",
    "Green Economy",
    "Climate Finance",
    "Responsible Sourcing"
  ]
};

// Financial Service Schema
export const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Ophel Holdings Impact Investment Services",
  "provider": {
    "@type": "Organization",
    "name": "Ophel Holdings"
  },
  "serviceType": "Impact Investment Advisory",
  "areaServed": {
    "@type": "Place",
    "name": "Africa"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Impact Investment Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sustainable Finance Advisory",
          "description": "Expert advisory services for sustainable finance and impact investing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ESG Investment Management",
          "description": "Environmental, Social, and Governance investment portfolio management"
        }
      }
    ]
  }
};

// Article Schema Generator
export const createArticleSchema = (article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image || "https://ophelholdings.org/og-banner.jpg",
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Organization",
    "name": article.author || "Ophel Holdings"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Ophel Holdings",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ophelholdings.org/logo.png"
    }
  },
  "url": article.url,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});

// FAQ Schema Generator
export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Breadcrumb Schema Generator
export const createBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

// Component to inject structured data
interface StructuredDataProps {
  data: object | object[];
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  const schemaData = Array.isArray(data) ? data : [data];
  
  return (
    <Helmet>
      {schemaData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
