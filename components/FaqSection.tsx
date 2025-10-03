import React from 'react';
import FaqItem from './FaqItem';

const faqData = [
    {
      question: "Do you ship internationally?",
      answer: (
        <p>
          Yes. We proudly deliver premium coffee to clients around the world. Our
          logistics team ensures every shipment meets international quality and
          documentation standards for smooth and timely delivery.
        </p>
      ),
    },
    {
      question: "Can you provide me with information on shipping costs?",
      answer: (
        <p>
          Shipping costs depend on your destination, order volume, and preferred
          shipping method. Our team will prepare a detailed quotation tailored to
          your needs. Please{" "}
          <a href="#" className="text-[#c7a17a] hover:underline">
            contact us
          </a>{" "}
          for an accurate estimate.
        </p>
      ),
    },
    {
      question: "It’s my first time importing coffee — can you assist?",
      answer: (
        <p>
          Absolutely. Our export specialists will guide you through every stage
          of the import process — from selecting the right beans and completing
          paperwork, to shipping and customs clearance — ensuring a seamless
          first-time experience.
        </p>
      ),
    },
    {
      question: "What are your coffee prices?",
      answer: (
        <p>
          Prices fluctuate based on international market trends, harvest seasons,
          and coffee grade. We offer transparent pricing and can share the latest
          market updates upon request.{" "}
          <a href="#" className="text-[#c7a17a] hover:underline">
            Contact our sales team
          </a>{" "}
          for current rates.
        </p>
      ),
    },
    {
      question: "What is your shipping schedule?",
      answer: (
        <p>
          Our logistics network operates seven days a week. Once your order is
          confirmed, we’ll coordinate the most efficient dispatch schedule and
          provide you with real-time tracking updates.
        </p>
      ),
    },
    {
      question: "What shipping options do I have?",
      answer: (
        <p>
          We offer all major Incoterm options — including EXW, FOB, CIF, and DDP —
          to suit your preferred logistics and trade requirements. Please{" "}
          <a href="#" className="text-[#c7a17a] hover:underline">
            contact our logistics team
          </a>{" "}
          to discuss the best option for your destination.
        </p>
      ),
    },
    {
      question: "Which countries do you ship to?",
      answer: (
        <p>
          We currently ship to over 40 countries across Africa, Europe, Asia, and
          the Americas. Our global logistics partners ensure reliable delivery no
          matter your location.
        </p>
      ),
    },
    {
      question: "Why choose Robusta or Arabica coffee?",
      answer: (
        <p>
          Each variety offers unique characteristics.{" "}
          <strong>Arabica</strong> delivers a smooth, aromatic, and naturally
          sweet cup — ideal for specialty coffee.{" "}
          <strong>Robusta</strong> is bolder, with a rich crema and higher
          caffeine content. Many blends combine both for balanced flavor and
          body, depending on your preference or market demand.
        </p>
      ),
    },
    {
      question: "What is the minimum order quantity?",
      answer: (
        <p>
          We cater to both small and large buyers. However, smaller shipments may
          not always be cost-effective due to international freight and customs
          charges. For the best shipping efficiency,{" "}
          <a href="#" className="text-[#c7a17a] hover:underline">
            speak with our export advisor
          </a>{" "}
          to determine the most practical order volume.
        </p>
      ),
    },
    {
      question: "How long is the lead time before my order is shipped?",
      answer: (
        <p>
          Once your order and deposit are confirmed, processing and preparation
          typically take between <strong>10 to 25 days</strong>. We’ll keep you
          updated on production and logistics every step of the way.
        </p>
      ),
    },
    {
      question: "How do I place my order?",
      answer: (
        <p>
          Placing an order is simple. You can request a quotation, review product
          samples, and confirm your purchase with our export team. For a step-by-step
          guide,{" "}
          <a href="#" className="text-[#c7a17a] hover:underline">
            click here
          </a>{" "}
          or reach out directly for personalized support.
        </p>
      ),
    },
  ];
  

const FaqSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ig-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our investment approach, impact methodology, and partnership opportunities.
          </p>
        </div>
        
        <div className="space-y-0">
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
