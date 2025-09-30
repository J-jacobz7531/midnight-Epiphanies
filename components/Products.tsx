import React, { useState, useEffect } from 'react';
import Footer from './Footer';

interface Tab {
  id: string;
  title: string;
  heading: string;
  subheading?: string;
  formats?: string[];
  useCases?: string[];
  whyOphel?: string[];
  assurance?: string[];
}

interface ProductCard {
  id: string;
  title: string;
  description: string;
  image: string;   // changed from icon to image to match the mock
}

interface ComplianceItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

/* ----------------------------- DATA (unchanged info, refined presentation) ----------------------------- */

const tabsData: Tab[] = [
  {
    id: 'coffee',
    title: 'Coffee',
    heading: 'Coffee — Specialty & RTD Supply',
    subheading:
      'Export focus on specialty grades and RTD inputs for Asia–Pacific, Eastern Europe, and the Middle East.',
    formats: [
      'Green beans (lot-level, fully traceable)',
      'Roasted (contract roasts: filter/espresso)',
      'Concentrates & extracts (for RTD partners)'
    ],
    useCases: ['Roasters', 'RTD & concentrates', 'Foodservice', 'Ingredient infusions'],
    whyOphel: [
      'Direct origin partnerships across East/West Africa with farm mapping and QC at mill/warehouse.',
      'Positioned for high-growth segments (Specialty CAGR ~10.4%; RTD CAGR ~7.2%).',
      'Offer organic/Fairtrade/Rainforest Alliance pathways and single-origin lines.',
      'Market access playbook for China/India/Eastern Europe and GCC café growth.',
      'Inventory and price-risk practices informed by harvest calendars and futures dynamics.'
    ],
    assurance: [
      'HACCP & ISO 22000-aligned partners',
      'FDA/EU import compliance',
      'Lot-level traceability & independent verification',
      'Deforestation due-diligence screening'
    ]
  },
  {
    id: 'cocoa',
    title: 'Cocoa',
    heading: 'Cocoa — Premium & Compliance-Ready',
    subheading:
      'Navigate structural price shifts with EUDR-ready traceability and premium couverture inputs.',
    formats: ['Beans', 'Liquor', 'Butter', 'Powder (natural/alkalized)', 'Nibs', 'Couverture'],
    useCases: ['Chocolate', 'Bakery', 'Ice cream', 'Beverages', 'Spreads', 'Nutrition'],
    whyOphel: [
      'Origin networks with polygon mapping where required; farm/coop traceability.',
      'Child Labour Monitoring & Remediation Systems (CLMRS) in priority origins.',
      'Fine-flavor & single-origin programs to capture premium demand.',
      'Structured export planning through seasonal supply and logistics modeling.'
    ],
    assurance: [
      'EUDR-ready documentation & risk assessment',
      'Third-party verification cadence',
      'Residue/contaminant controls & temperature/humidity warehousing standards'
    ]
  },
  {
    id: 'vanilla',
    title: 'Vanilla',
    heading: 'Vanilla — Single-Origin, Organic Options',
    subheading:
      'Serve food, beverage, and personal-care buyers with quality-controlled, origin-diversified supply.',
    formats: ['Grade-A pods', 'Single-origin extract', 'Vanilla paste', 'Powder', 'Sugars (B2B)'],
    useCases: ['Ice cream & gelato', 'Bakery', 'RTD & syrups', 'Culinary & flavor houses'],
    whyOphel: [
      'Origin diversification (Madagascar, Uganda, PNG, Indonesia) for resilience.',
      'Tight specs on moisture & vanillin; transparent COAs.',
      'Organic and natural positioning for premium segments (solid CAGR to 2030).'
    ],
    assurance: [
      'Batch traceability & COAs',
      'Organic & other premium certifications on request',
      'Audited processing partners and sealed, food-grade packaging'
    ]
  },
  {
    id: 'sesame',
    title: 'Sesame',
    heading: 'Sesame — Organic & Premium Grades',
    subheading:
      'Health-forward demand for organic white/black sesame, tahini, and premium oils in EU/Asia.',
    formats: ['Hulled/unhulled (white)', 'Black sesame', 'Stone-ground tahini', 'Black paste', 'Cold-pressed & toasted oils'],
    useCases: ['Bakery', 'Hummus & dressings', 'Pâtisserie', 'Asian desserts', 'Premium oils', 'Spice blends'],
    whyOphel: [
      'Allergen-controlled documentation and cleaning QA; tight specs by customer line.',
      'Single-origin opportunities (e.g., Humera-grade positioning).',
      'Traceability & pesticide/heavy-metal monitoring aligned to EU/US limits.'
    ],
    assurance: [
      'Supplier Code compliance & verified supply pathways',
      'Third-party testing for contaminants',
      'Organic certification options'
    ]
  },
  {
    id: 'maize',
    title: 'Maize',
    heading: 'Maize — Food & Feed Inputs',
    subheading:
      'Consistent specs for grits/flours/semolina with non-GMO and clean-label options.',
    formats: ['Grits', 'Semolina', 'Meal', 'Flours (particle-size specs)'],
    useCases: ['Snacks', 'Cereals', 'Bakery', 'Brewing adjuncts', 'Ingredient blends'],
    whyOphel: [
      'Food-safety rigor with validated mills and contaminant controls.',
      'Route-to-market into Asia–Pacific feed/food and regional African buyers.',
      'Options aligned to clean-label and non-GMO requirements.'
    ],
    assurance: [
      'HACCP/ISO 22000 partners',
      'Regulatory compliance documentation',
      'Origin traceability & storage/transport SOPs'
    ]
  }
];

// Tile images to mirror the mock layout (replace with your actual assets if needed)
const productCards: ProductCard[] = [
  {
    id: 'coffee',
    title: 'Coffee',
    description:
      'Specialty lots, certified options, and RTD inputs for high-growth markets in APAC, Eastern Europe, and the Middle East.',
    image: '/Coffee2.jpeg'
  },
  {
    id: 'vanilla',
    title: 'Vanilla',
    description:
      'Single-origin and organic programs with tight moisture/vanillin specs for food and flavor houses.',
    image: '/Vanilla.jpg'
  },
  {
    id: 'sesame',
    title: 'Sesame',
    description:
      'Organic white/black sesame, tahini and premium oils with allergen-controlled documentation.',
    image: '/Sesame2.jpg'
  },
  {
    id: 'cocoa',
    title: 'Cocoa',
    description:
      'EUDR-ready supply with CLMRS coverage and premium couverture inputs for chocolate and frozen desserts.',
    image: '/CocoaPlantation.jpg'
  },
  {
    id: 'maize',
    title: 'Maize',
    description:
      'Grits, semolina, meal and flours with strict QA; clean-label and non-GMO options available.',
    image: '/Maize2.jpg'
  }
];

const IconMagnifier = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23C16 6.01 13.31 3.32 10 3.32S4 6.01 4 9.5 6.69 15.68 10 15.68c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l4.25 4.25c.41.41 1.09.41 1.5 0 .41-.41.41-1.09 0-1.5L15.5 14ZM10 14c-2.48 0-4.5-2.02-4.5-4.5S7.52 5 10 5s4.5 2.02 4.5 4.5S12.48 14 10 14Z"/>
  </svg>
);

const IconClipboard = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="currentColor" d="M16 2H8c-1.1 0-2 .9-2 2H4a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2c0-1.1-.9-2-2-2Zm2 18H4V6h2v2h8V6h2v14ZM8 4h6v2H8V4Z"/>
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="currentColor" d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z"/>
  </svg>
);

const IconChart = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="currentColor" d="M5 9h3v10H5V9Zm5-4h3v14h-3V5Zm5 8h3v6h-3v-6Z"/>
  </svg>
);

const complianceItems: ComplianceItem[] = [
  {
    title: 'Traceability & EUDR',
    description:
      'Farm/coop registration, GPS/polygon mapping where applicable, and risk assessments to support EUDR and customer due-diligence.',
    icon: <IconMagnifier />
  },
  {
    title: 'Food Safety Systems',
    description:
      'HACCP and ISO 22000-aligned partners; FDA/EU import compliance; validated cleaning, storage, and transport SOPs.',
    icon: <IconShield />
  },
  {
    title: 'Premium Certifications',
    description:
      'Organic, Fairtrade, and Rainforest Alliance options to access premium segments and meet buyer specifications.',
    icon: <IconClipboard />
  },
  {
    title: 'Data & Insights',
    description:
      'Digital footprints (energy, logistics, land-use), batch-level documentation, and scenario planning for decarbonization.',
    icon: <IconChart />
  }
];

/* ----------------------------- COMPONENT ----------------------------- */

const ProductsContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  // Smooth scroll to details when a product tile is clicked
  const goToDetails = (tabId: string) => {
    setActiveTab(tabId);
    const el = document.getElementById('details');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-ig-off-white text-ig-dark">
      {/* HERO — blurred image, big serif headline, gold CTA */}
      <section className="relative bg-ig-dark text-ig-off-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
          style={{ backgroundImage: "url('/Coffee2.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-6 lg:px-20 py-24 lg:py-28">
          <div className="max-w-4xl">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight font-light">
              Premium Global Sourcing for Coffee, Cocoa, Vanilla, Sesame &amp; Maize
            </h1>
            <p className="mt-5 max-w-2xl text-ig-off-white/90 font-light">
              Natural, traceable, low-carbon ingredients with verified impact—backed by compliance,
              certifications, and export execution into APAC, Eastern Europe, the Middle East, and beyond.
            </p>
            <a
              href="/contact?topic=exports"
              className="inline-flex items-center mt-8 px-5 py-3 rounded-md font-medium bg-[#FAAF40] text-ig-dark hover:brightness-95 transition"
            >
              Explore our Export Team
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCT TILES — image cards with gold “Learn more” */}
      <section className="bg-[#F2F2F0] py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="font-serif text-2xl md:text-3xl text-ig-dark mb-6">Coffee &amp; Food Inputs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCards.map((p) => (
              <div key={p.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <div className="h-56 w-full overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-2xl mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.description}</p>
                  <button
                    onClick={() => goToDetails(p.id)}
                    className="inline-flex items-center text-sm font-medium px-4 py-2 rounded bg-[#FAAF40] text-ig-dark hover:brightness-95 transition"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT — dark cards with small icons */}
      <section className="bg-ig-dark text-ig-off-white py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="font-serif text-3xl md:text-4xl mb-8">Our Commitment: Food Safety Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceItems.map((item, idx) => (
              <div key={idx} className="bg-[#0f1518] rounded-lg p-6 border border-white/5">
                <div className="flex items-start gap-4">
                  <div className="text-ig-off-white/80">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                    <p className="text-ig-off-white/75 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIG GOLD CTA — matches the mock’s band */}
      <section className="bg-[#FAAF40] text-ig-dark py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight">
            Ready, partner?<br className="hidden md:block" />
            Let’s plan the next export season.
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-ig-dark/80">
            From certification roadmaps to logistics and hedging, we align supply, compliance, and demand—so you can
            scale confidently into premium markets.
          </p>
          <a
            href="/contact?topic=exports"
            className="inline-flex items-center mt-8 px-6 py-3 rounded-md font-medium bg-ig-dark text-ig-off-white hover:brightness-110 transition"
          >
            Talk to our Export Team
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>

      {/* DETAILS & SPECS — keep ALL the information (tabs) */}
      <section id="details" className="relative bg-ig-dark-gray">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="bg-ig-off-white p-8 md:p-12 lg:p-16">
            {/* Tabs header */}
            <div className="border-b border-gray-200 mb-8 overflow-x-auto">
              <nav className="-mb-px flex space-x-8 min-w-max" aria-label="Tabs">
                {tabsData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-lg relative transition-colors duration-300 ${
                      activeTab === tab.id
                        ? 'border-ig-teal text-ig-dark'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.title}
                    <span
                      className={`absolute bottom-[-1px] left-0 h-[2px] bg-ig-teal transition-transform duration-500 ease-out ${
                        activeTab === tab.id ? 'scale-x-100' : 'scale-x-0'
                      } origin-left`}
                    />
                  </button>
                ))}
              </nav>
            </div>

            {/* Tabs content */}
            <div>
              {tabsData.map((tab) => (
                <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-serif text-4xl text-ig-dark">{tab.heading}</h3>
                      {tab.subheading && <p className="mt-2 text-gray-600 max-w-3xl">{tab.subheading}</p>}
                    </div>

                    {tab.formats && (
                      <div>
                        <h4 className="font-medium text-lg text-ig-dark mb-3">Export formats:</h4>
                        <div className="flex flex-wrap gap-2">
                          {tab.formats.map((format, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                              {format}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {tab.useCases && (
                      <div>
                        <h4 className="font-medium text-lg text-ig-dark mb-3">Use cases:</h4>
                        <p className="text-gray-600">{tab.useCases.join(', ')}</p>
                      </div>
                    )}

                    {tab.whyOphel && (
                      <div>
                        <h4 className="font-medium text-lg text-ig-dark mb-3">Why Ophel Holdings:</h4>
                        <ul className="space-y-2">
                          {tab.whyOphel.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="text-ig-teal mt-1">•</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {tab.assurance && (
                      <div>
                        <h4 className="font-medium text-lg text-ig-dark mb-3">Assurance &amp; compliance:</h4>
                        <p className="text-gray-600">{tab.assurance.join('; ')}.</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsContent;
