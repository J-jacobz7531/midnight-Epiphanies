import React from 'react';
import Footer from './Footer';

/* =========================
   Hero (Products)
   ========================= */
const ProductsHero: React.FC = () => {
  return (
    <header className="bg-[#0f1619] text-white pt-44 pb-56 lg:pt-48 lg:pb-64">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Headline */}
          <div className="lg:w-4/12">
            <p className="font-sans text-sm tracking-wide text-[#cfd6d4] mb-3">Products</p>
            <h1 className="font-serif text-[40px] leading-[1.1] sm:text-[52px] lg:text-[64px] text-[#e9eceb]">
              Ingredients that <span className="text-[#cbb67c]">Perform</span><br />
              — and <span className="text-[#e0cda0]">Sustain</span>
            </h1>
          </div>

          {/* Sub copy */}
          <div className="lg:w-8/12 flex items-start">
            <p className="font-sans text-[15px] leading-7 text-[#cfd6d4]">
              Natural, traceable, low-carbon ingredients with verified impact across cocoa, coffee,
              sesame, vanilla, and maize. We combine direct farmer partnerships, regenerative
              practices, and third-party verification to deliver the quality your products demand —
              and the transparency your customers expect.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

/* =========================
   Shared Cards (reuse your look)
   ========================= */
const TileCard: React.FC<{ title: string; imageUrl: string; href?: string; subtitle?: string }> = ({
  title,
  imageUrl,
  href = '#',
  subtitle,
}) => (
  <a href={href} className="relative block overflow-hidden group">
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-hidden
    />
    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/60 transition-colors duration-300" />
    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
      <h4 className="font-sans text-white text-lg md:text-2xl font-medium leading-tight">
        {title}
      </h4>
      {subtitle && (
        <p className="mt-1 text-sm text-white/80 max-w-[40ch]">{subtitle}</p>
      )}
    </div>
    <div className="aspect-video md:aspect-[4/3]" />
  </a>
);

const LargeArticleCard: React.FC<{ title: string; description: string; imageUrl: string }> = ({
  title,
  description,
  imageUrl,
}) => (
  <div
    className="relative text-white min-h-[500px] lg:min-h-[600px] flex flex-col justify-end p-8 bg-cover bg-center rounded-lg overflow-hidden"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-[#141d21] via-[#141d21]/70 to-transparent" />
    <div className="relative z-10">
      <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl !leading-tight mb-4">{title}</h3>
      <p className="font-light text-base leading-relaxed">{description}</p>
    </div>
  </div>
);

/* =========================
   Data (uses your existing images as placeholders)
   ========================= */
const productTiles = [
  {
    id: 'cocoa',
    title: 'Cocoa',
    subtitle: 'Liquor • Butter • Powder • Nibs • Couverture',
    imageUrl: '/Cocoa1.jpg',
  },
  {
    id: 'coffee',
    title: 'Coffee',
    subtitle: 'Green lots & custom roasts • RTD partner supply',
    imageUrl: '/Coffee1.jpeg',
  },
  {
    id: 'sesame',
    title: 'Sesame',
    subtitle: 'Hulled/Unhulled • Black sesame • Tahini • Oils',
    imageUrl: '/Sesame1.jpg',
  },
  {
    id: 'vanilla',
    title: 'Vanilla',
    subtitle: 'Pods • Single-origin extract • Paste • Powder',
    imageUrl: '/Vanilla.jpg',
  },
  {
    id: 'maize',
    title: 'Maize',
    subtitle: 'Grits • Semolina • Meal • Flours',
    imageUrl: '/Maize1.jpg',
  },
];

const productDetails = {
  cocoa: {
    title: 'Cocoa',
    bullets: {
      formats: ['Liquor', 'Butter', 'Powder (natural/alkalized)', 'Nibs', 'Couverture'],
      useCases: ['Chocolate', 'Bakery', 'Beverages', 'Ice cream', 'Spreads', 'Nutrition'],
      why: [
        'Traceability to farm groups/estates; polygon mapping where applicable',
        'Child Labour Monitoring & Remediation Systems (CLMRS) in cocoa origins',
        'Fine-flavor and single-origin options across multiple origins',
        'Verified carbon footprints and scenario planning available',
      ],
      assurance: ['Third-party verification', 'EUDR-ready traceability'],
    },
    image: '/Cocoa1.jpg',
  },
  coffee: {
    title: 'Coffee',
    bullets: {
      formats: ['Lot-level green beans', 'Custom roasts (espresso/filter)', 'Concentrates for RTD (on request)'],
      useCases: ['Roasters', 'RTD brands', 'Foodservice', 'Ingredient infusions'],
      why: [
        'Direct farmer engagement and farm mapping for key origins',
        'Digital footprint metrics across 28+ indicators (farm to factory)',
        'Carbon Scenario Planner to co-design reduction pathways',
      ],
      assurance: ['Independent verification cadence', 'Deforestation risk monitoring'],
    },
    image: '/Coffee1.jpeg',
  },
  sesame: {
    title: 'Sesame',
    bullets: {
      formats: ['Hulled/Unhulled white', 'Black sesame', 'Stone-ground tahini', 'Black sesame paste', 'Cold-pressed & toasted oils'],
      useCases: ['Bakery', 'Hummus & dressings', 'Pâtisserie', 'Asian desserts', 'Premium oils', 'Spice blends'],
      why: [
        'Tight specs and cleaning protocols; allergen-controlled documentation for B2B',
        'Single-origin narratives (e.g., Humera-grade positioning)',
      ],
      assurance: ['Supplier Code compliance', 'Contaminant & heavy-metal controls'],
    },
    image: '/Sesame2.jpg',
  },
  vanilla: {
    title: 'Vanilla',
    bullets: {
      formats: ['Grade-A pods', 'Single-origin extract', 'Vanilla paste', 'Powder', 'Vanilla sugar (D2C)'],
      useCases: ['Ice cream & gelato', 'Bakery', 'RTD beverages', 'Culinary'],
      why: [
        'Origin diversification (Madagascar, PNG, Indonesia, Uganda) for stability',
        'Moisture & vanillin spec transparency; single-origin flavor profiles',
      ],
      assurance: ['Batch-level traceability', 'Third-party verification of sustainability claims (where applicable)'],
    },
    image: '/Vanilla.jpg',
  },
  maize: {
    title: 'Maize',
    bullets: {
      formats: ['Grits', 'Semolina', 'Meal', 'Flours'],
      useCases: ['Snacks', 'Cereal', 'Bakery', 'Brewing adjuncts'],
      why: [
        'Quality & food-safety rigor; contaminant and residue controls',
        'Particle-size options for novel/clean-label formulations',
      ],
      assurance: ['Regulatory compliance support', 'Origin traceability'],
    },
    image: '/Maize1.jpg',
  },
};

const assuranceBullets = [
  'Farm registration, GPS mapping, and Track & Trace for key origins',
  'Independent third-party audits (OPSource tiers)',
  'EUDR readiness, human-rights due diligence, and CLMRS in cocoa',
  'Digital footprints (28+ metrics), sequestration monitoring, and scenario planning',
];

const impactStats = [
  { label: 'Farmers in network', value: '0.4M+' },
  { label: 'Countries', value: '~50' },
  { label: 'Farmers in sustainability programs', value: '10,000+' },
  { label: 'Scope 1–2 reduction target', value: '>50%' },
  { label: 'Scope 3 reduction target', value: '>30%' },
  { label: 'Regenerative agriculture goal', value: '10,000 ha' },
  { label: 'Trees distributed goal', value: '2M' },
];

/* =========================
   Sections
   ========================= */
const ProductsSection: React.FC = () => {
  return (
    <>
      {/* Section 1: Category Grid */}
      <section className="bg-[#f2f2f0]">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="bg-[#2c3133] text-white rounded-xl px-6 sm:px-8 lg:px-10 py-10 lg:py-14 mt-[-180px]">
            <h2 className="font-serif text-4xl md:text-6xl !leading-tight mb-8 md:mb-10">
              Ingredient Portfolio
            </h2>

            <div className="bg-[#3a3f41] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px rounded-lg overflow-hidden">
              {productTiles.map((t) => (
                <TileCard
                  key={t.id}
                  title={t.title}
                  subtitle={t.subtitle}
                  imageUrl={t.imageUrl}
                  href={`#${t.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Detail Blocks */}
      <section className="bg-[#f2f2f0]">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="bg-[#141d21] text-white rounded-xl px-6 sm:px-8 lg:px-10 py-10 lg:py-14 mt-8 space-y-12">
            <h2 className="font-serif text-4xl md:text-6xl !leading-tight mb-2">
              Product Details
            </h2>

            {Object.entries(productDetails).map(([key, item]) => (
              <section id={key} key={key} className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <LargeArticleCard
                  title={item.title}
                  description={`${item.bullets.formats.join(' • ')}.`}
                  imageUrl={item.image}
                />
                <div className="relative z-10 p-2">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="uppercase tracking-wide text-xs text-[#a7b3b0]">Use cases</h4>
                      <ul className="mt-2 list-disc list-inside text-[#cfd6d4]">
                        {item.bullets.useCases.map((u) => <li key={u}>{u}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="uppercase tracking-wide text-xs text-[#a7b3b0]">Why Ophel</h4>
                      <ul className="mt-2 list-disc list-inside text-[#cfd6d4]">
                        {item.bullets.why.map((w) => <li key={w}>{w}</li>)}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 text-xs text-[#a7b3b0]">
                    Assurance: {item.bullets.assurance.join(' • ')}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Regenerative Agriculture */}
      <section className="bg-[#f2f2f0]">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="bg-[#141d21] text-white rounded-xl overflow-hidden mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div
                className="relative min-h-[400px] lg:min-h-[500px] bg-cover bg-center"
                style={{ backgroundImage: 'url(/CocoaPlantation.jpg)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#141d21]/30" />
              </div>
              
              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl !leading-tight mb-6">
                  Regenerative Agriculture
                </h3>
                <p className="text-[#cfd6d4] text-lg leading-relaxed mb-6">
                  We partner directly with farmers to implement regenerative practices that restore soil health, 
                  increase biodiversity, and sequester carbon — creating ingredients that perform better for your 
                  products and the planet.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#cbb67c] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-[#cfd6d4]">Direct farmer partnerships across 50+ countries</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#cbb67c] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-[#cfd6d4]">10,000+ farmers in sustainability programs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#cbb67c] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-[#cfd6d4]">Goal: 10,000 hectares under regenerative agriculture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Compliance & Assurance */}
      <section className="bg-[#f2f2f0]">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="bg-[#141d21] text-white rounded-xl px-6 sm:px-8 lg:px-10 py-12 mt-8">
            <h3 className="font-serif text-3xl md:text-5xl !leading-tight mb-6">Compliance & Assurance</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-[#cfd6d4]">
              {assuranceBullets.map((b) => (
                <li key={b} className="list-disc list-inside">{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Impact Stats */}
      <section className="bg-[#f2f2f0]">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="bg-[#141d21] text-white rounded-xl px-6 sm:px-8 lg:px-10 py-12 mt-8">
            <h3 className="font-serif text-3xl md:text-5xl !leading-tight mb-8">Impact Snapshot</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
              {impactStats.map((s) => (
                <div key={s.label} className="border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-serif">{s.value}</div>
                  <div className="text-xs text-[#a7b3b0] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Contact */}
      <section className="bg-[#f2f2f0]">
        <div className="container mx-auto px-6 sm:px-10 py-16">
          <div className="max-w-md mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl !leading-tight text-gray-800 mb-4">
              Request Specs & Samples
            </h2>
            <img
              src="/Victor Starr Kramer.jpeg"
              alt="Victor Starr Kramer"
              className="w-36 h-36 md:w-48 md:h-48 rounded-full mx-auto mb-6 object-cover"
            />
            <h6 className="font-sans text-xl font-medium text-gray-800">Victor Starr Kramer</h6>
            <p className="text-gray-600 mb-4">Head of Ingredients</p>
            <a
              href="mailto:vstarrkr@gmail.com?subject=Product%20Specs%20Request"
              className="text-gray-800 hover:text-gray-500 underline"
            >
              vstarrkr@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

/* =========================
   Page
   ========================= */
const Products: React.FC = () => {
  return (
    <div className="bg-[#f2f2f0] text-[#141d21]">
      <ProductsHero />
      <main>
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
