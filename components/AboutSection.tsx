import React, { useState } from 'react';

const TheoryOfChangeContent = () => (
  <div className="animate-fadeIn">
    <p className="text-base font-light leading-relaxed">
      At <strong>Ophel Holdings</strong>, the Theory of Change (ToC) is more than a slide—it’s our
      operating model for how we build and scale resilient businesses in Africa. It maps the causal
      path from what we put in—<em>patient capital, operating expertise, and local partnerships</em>—to
      what we ultimately care about: <em>jobs and incomes, climate resilience, and inclusive growth</em>.
      The ToC keeps our teams aligned across agriculture, renewable energy, real estate, and
      technology so each decision advances measurable, long-term value for communities and
      investors.
    </p>
  </div>
);

const WhyItMattersContent = () => (
  <div className="animate-fadeIn">
    <p className="text-base font-light leading-relaxed">
      For Ophel, the ToC is how strategy meets execution. We use it to <em>select deals</em>,
      design <em>value-creation plans</em>, structure <em>blended and flexible capital</em>, and monitor
      <em> real-economy outcomes</em>. It gives our operating partners, portfolio leadership, and
      co-investors a shared language for risk, performance, and impact—so we can move faster on
      opportunities, course-correct earlier, and communicate results transparently to stakeholders.
    </p>
  </div>
);

const UpdatedTheoryContent = () => (
  <div className="animate-fadeIn">
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/3">
        <h2 className="font-serif text-4xl lg:text-4xl font-light leading-tight text-ig-dark">
          Ophel’s Theory of Change: From Inputs to Impact
        </h2>
      </div>

      <div className="lg:w-2/3 space-y-6">
        <p className="text-base font-light leading-relaxed">
          Our refreshed ToC reflects how Ophel allocates capital and capabilities to unlock growth
          in underserved markets.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-ig-dark mb-2">Inputs</h3>
            <ul className="list-disc pl-5 text-sm leading-relaxed">
              <li>Patient capital (equity, quasi-equity, catalytic debt)</li>
              <li>Operating expertise &amp; technical assistance</li>
              <li>Local partnerships &amp; market access</li>
              <li>Risk, governance &amp; compliance infrastructure</li>
              <li>Impact measurement &amp; data systems</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-ig-dark mb-2">Activities</h3>
            <ul className="list-disc pl-5 text-sm leading-relaxed">
              <li>Invest &amp; co-develop in agriculture, energy, real estate, tech</li>
              <li>Venture building and value-chain enablement (last-mile, logistics)</li>
              <li>Advisory &amp; capability building for portfolio teams</li>
              <li>Climate-smart practices &amp; digital transformation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-ig-dark mb-2">Outputs</h3>
            <ul className="list-disc pl-5 text-sm leading-relaxed">
              <li>Enterprises financed and assets built</li>
              <li>Smallholders and SMEs integrated into supply chains</li>
              <li>Clean-energy connections &amp; productive-use deployments</li>
              <li>Affordable, quality real-assets delivered</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-ig-dark mb-2">Outcomes</h3>
            <ul className="list-disc pl-5 text-sm leading-relaxed">
              <li>Quality jobs &amp; higher, more stable incomes</li>
              <li>Improved yields, reduced post-harvest loss, better market prices</li>
              <li>Lower energy cost &amp; reliability for households and businesses</li>
              <li>Enhanced resilience for women and youth in local economies</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-ig-dark mb-2">Impact</h3>
          <p className="text-sm leading-relaxed">
            Inclusive regional growth, climate resilience and emissions avoidance, stronger local
            value capture, and investable track records that crowd in long-term capital.
          </p>
        </div>

        {/* Simple inline arrow accent (keeps design without relying on external asset) */}
        <div className="flex justify-end">
          <svg
            aria-hidden="true"
            viewBox="0 0 120 12"
            className="w-28 h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="ophel-grad" x1="0" x2="1">
                <stop offset="0%" stopColor="#84BFC7" />
                <stop offset="100%" stopColor="#84BFC7" />
              </linearGradient>
            </defs>
            <path d="M0 6 H108" stroke="url(#ophel-grad)" strokeWidth="2" />
            <path d="M108 1 L120 6 L108 11 Z" fill="#84BFC7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'Understanding Ophel’s Theory of Change', content: <TheoryOfChangeContent /> },
    { title: 'Why the ToC Matters for Ophel', content: <WhyItMattersContent /> },
  ];

  return (
    <section className="bg-ig-dark-gray">
      {/* Desktop Tabs */}
      <div className="hidden md:block bg-ig-off-white p-[5%]">
        <div className="flex border-b border-gray-200 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={tab.title}
              onClick={() => setActiveTab(index)}
              className={`py-4 px-6 text-left text-sm font-medium focus:outline-none transition-colors duration-300 relative ${
                activeTab === index ? 'text-ig-dark' : 'text-gray-500 hover:text-ig-dark'
              }`}
            >
              {tab.title}
              {activeTab === index && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-gradient-to-r from-ig-teal to-ig-teal" />
              )}
            </button>
          ))}
        </div>
        <div>{tabs[activeTab].content}</div>
      </div>

      {/* Mobile Stacked */}
      <div className="md:hidden bg-ig-off-white p-8 space-y-12">
        <div>
          <h2 className="font-serif text-3xl font-light leading-tight text-ig-dark mb-4">
            Understanding Ophel’s Theory of Change
          </h2>
          <TheoryOfChangeContent />
        </div>
        <div>
          <h2 className="font-serif text-3xl font-light leading-tight text-ig-dark mb-4">
            Why the ToC Matters for Ophel
          </h2>
          <WhyItMattersContent />
        </div>
      </div>

      {/* Inputs → Impact */}
      <div className="bg-white p-[5%]">
        <UpdatedTheoryContent />
      </div>
    </section>
  );
};

export default AboutSection;
