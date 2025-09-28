import React from 'react';
import Footer from './Footer';

/* =========================
   Hero
   ========================= */
   const InvestmentsHero: React.FC = () => {
    return (
      <header className="bg-[#0f1619] text-white pt-44 pb-56 lg:pt-48 lg:pb-64">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Headline */}
            <div className="lg:w-4/12">
              <p className="font-sans text-sm tracking-wide text-[#cfd6d4] mb-3">Investments</p>
              <h1 className="font-serif text-[40px] leading-[1.1] sm:text-[52px] lg:text-[64px] text-[#e9eceb]">
                Deploying <span className="text-[#cbb67c]">Capital</span><br />
                Where It <span className="text-[#e0cda0]">Matters</span> <span className="text-[#f0b85e]">Most</span>
              </h1>
            </div>
  
            {/* Sub copy */}
            <div className="lg:w-8/12 flex items-start">
              <p className="font-sans text-[15px] leading-7 text-[#cfd6d4]">
                As a FINMA-licensed portfolio manager, iGravity manages private debt portfolios in
                emerging markets, channelling capital to high-impact enterprises that drive social and
                environmental progress within their communities. This includes direct debt mandates to
                local SMEs, as well as more liquid portfolios with allocations to funds and private
                notes, guided by clearly defined impact lenses. Each strategy targets competitive
                financial returns alongside meaningful impact outcomes, often with capital protection
                features via blended finance structures.
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  };

/* =========================
   Data
   ========================= */
interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

const directInvestments: PortfolioItem[] = [
  {
    id: 1,
    title: 'Refugee Investment Facility (RIF)',
    imageUrl: 'https://igravity.net/wp-content/uploads/2025/08/IMG_8528.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Impact-Linked Finance Fund',
    imageUrl: 'https://igravity.net/wp-content/uploads/2025/08/IMG_8529.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Balim Investments',
    imageUrl:
      'https://igravity.net/wp-content/uploads/2025/08/pexels-caleb-ishaya-313370124-30898071.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'SECO Startup Fund',
    imageUrl: 'https://igravity.net/wp-content/uploads/2025/08/IMG_8525.jpg',
    link: '#',
  },
];

const multiManagerPortfolios = [
  {
    title: 'Emerging Market Impact Debt Strategy',
    description:
      'The iGravity Emerging Impact Debt Opportunities is an actively managed portfolio of impact investments, diversified across emerging market countries and various impact themes. It focuses on private credit opportunities that drive sustainable economic growth by strengthening local economies and promoting job creation.',
    imageUrl: 'https://igravity.net/wp-content/uploads/2023/07/17.webp',
  },
  {
    title: 'Impact Yield Strategy',
    description:
      'The iGravity Impact Yield Certificate is a fixed income portfolio of impact investments diversified across geographies and impact themes, with a focus on emerging markets. The iGravity Impact Yield predominantly invests in listed social and green bonds and diversified fixed income notes, with an actively managed satellite allocation to funds and trusts.',
    imageUrl: 'https://igravity.net/wp-content/uploads/2023/07/3.webp',
  },
];

const greenRiceBond = {
  title: 'Green Rice Bond',
  description:
    "iGravity and Helvetas have joined forces to develop the world's first Green Rice Bond, a pioneering financial market instrument designed to mobilize investment capital and provide essential financing to stakeholders in the rice production value chain across Sub-Saharan Africa. The bond aims to raise USD 50 million and will provide indirect financing through local micro- and SME finance institutions, benefiting key actors throughout the rice production chain.",
  imageUrl: 'https://igravity.net/wp-content/uploads/2025/08/greenricebond2.jpg',
};

/* =========================
   Cards
   ========================= */
const PortfolioCard: React.FC<PortfolioItem> = ({ title, imageUrl, link }) => (
  <a href={link} className="relative block overflow-hidden group">
    {/* image */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-hidden
    />
    {/* dark veil */}
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
    {/* title */}
    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
      <h4 className="font-sans text-white text-lg md:text-2xl font-medium leading-tight">
        {title}
      </h4>
    </div>
    {/* aspect control */}
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
   Sections
   ========================= */
const InvestmentsSection: React.FC = () => {
  return (
    <>
      {/* Section 1: Direct Investments (matches screenshot) */}
      <section className="bg-[#f2f2f0]">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="bg-[#2c3133] text-white rounded-xl px-6 sm:px-8 lg:px-10 py-10 lg:py-14 mt-[-180px]">
            <h2 className="font-serif text-4xl md:text-6xl !leading-tight mb-8 md:mb-10">
              Direct Investment Mandates
            </h2>

            {/* tight 2x2 grid with 1px gutter on a dark backing */}
            <div className="bg-[#3a3f41] grid grid-cols-1 md:grid-cols-2 gap-px rounded-lg overflow-hidden">
              {directInvestments.map((item) => (
                <PortfolioCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Multi Manager Portfolios */}
      <section className="bg-[#f2f2f0]">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="bg-[#141d21] text-white rounded-xl px-6 sm:px-8 lg:px-10 py-10 lg:py-14 mt-8">
            <h2 className="font-serif text-4xl md:text-6xl !leading-tight mb-8">
              Multi Manager Portfolios
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
              {multiManagerPortfolios.map((item, i) => (
                <LargeArticleCard key={i} {...item} />
              ))}
            </div>

            <div className="grid">
              <LargeArticleCard {...greenRiceBond} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Quote */}
      <section className="bg-[#f2f2f0]">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="bg-[#141d21] text-white rounded-xl px-6 sm:px-8 lg:px-10 py-16 lg:py-24 mt-8">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-6xl !leading-tight text-[#f2f2f0]">
                Investments that fuel innovation, empower communities, and tackle global challenges.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Contact */}
      <section className="bg-[#f2f2f0]">
        <div className="container mx-auto px-6 sm:px-10 py-16">
          <div className="max-w-md mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl !leading-tight text-gray-800 mb-4">
              Contact
            </h2>
            <img
              src="/Victor Starr Kramer.jpeg"
              alt="Victor Starr Kramer"
              className="w-36 h-36 md:w-48 md:h-48 rounded-full mx-auto mb-6 object-cover"
            />
            <h6 className="font-sans text-xl font-medium text-gray-800">Victor Starr Kramer</h6>
            <p className="text-gray-600 mb-4">Head of Investments</p>
            <a
              href="mailto:vstarrkr@gmail.com"
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
const Investments: React.FC = () => {
  return (
    <div className="bg-[#f2f2f0] text-[#141d21]">
      <InvestmentsHero />
      <main>
        <InvestmentsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Investments;
