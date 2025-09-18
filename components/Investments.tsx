import React from 'react';
import Footer from './Footer';

const InvestmentsHero: React.FC = () => {
  return (
    <div className="bg-[#141d21] text-white pt-48 pb-60 lg:pt-56 lg:pb-80">
      <div className="container mx-auto px-6 sm:px-10">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:w-1/2">
            <p className="font-sans text-[#f2f2f0] mb-4 text-lg">Investments</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl !leading-tight text-[#f2f2f0]">
              Deploying Capital Where It Matters Most
            </h2>
          </div>
          <div className="lg:w-1/2 flex items-end">
            <p className="font-sans text-[#f2f2f0] text-base leading-relaxed font-light">
              As a FINMA-licensed portfolio manager, iGravity manages private debt portfolios in emerging markets, channelling capital to high-impact enterprises that drive social and environmental progress within their communities. This includes direct debt mandates making loans to local SMEs, as well as more liquid portfolios with allocations to funds and private notes, all guided by clearly defined impact lenses. Each strategy targets competitive financial returns alongside meaningful impact outcomes. Often, we embed capital protection features through blended finance structures, offering tranches tailored to the diverse risk-return and impact preferences of investors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

const directInvestments: PortfolioItem[] = [
  { id: 1, title: 'Refugee Investment Facility (RIF)', imageUrl: 'https://igravity.net/wp-content/uploads/2025/08/IMG_8528.jpg', link: '#' },
  { id: 2, title: 'Impact-Linked Finance Fund', imageUrl: 'https://igravity.net/wp-content/uploads/2025/08/IMG_8529.jpg', link: '#' },
  { id: 3, title: 'Balim Investments', imageUrl: 'https://igravity.net/wp-content/uploads/2025/08/pexels-caleb-ishaya-313370124-30898071.jpg', link: '#' },
  { id: 4, title: 'SECO Startup Fund', imageUrl: 'https://igravity.net/wp-content/uploads/2025/08/IMG_8525.jpg', link: '#' },
];

const multiManagerPortfolios = [
  {
    title: 'Emerging Market Impact Debt Strategy',
    description: 'The iGravity Emerging Impact Debt Opportunities is an actively managed portfolio of impact investments, diversified across emerging market countries and various impact themes. It focuses on private credit opportunities that drive sustainable economic growth by strengthening local economies and promoting job creation.',
    imageUrl: 'https://igravity.net/wp-content/uploads/2023/07/17.webp',
  },
  {
    title: 'Impact Yield Strategy',
    description: 'The iGravity Impact Yield Certificate is a fixed income portfolio of impact investments diversified across geographies and impact themes, with a focus on emerging markets. The iGravity Impact Yield predominantly invests in listed social and green bonds and diversified fixed income notes, with an actively managed satellite allocation to funds and trusts.',
    imageUrl: 'https://igravity.net/wp-content/uploads/2023/07/3.webp',
  },
];

const greenRiceBond = {
    title: 'Green Rice Bond',
    description: 'iGravity and Helvetas have joined forces to develop the world\'s first Green Rice Bond, a pioneering financial market instrument designed to mobilize investment capital and provide essential financing to stakeholders in the rice production value chain across Sub-Saharan Africa. The bond aims to raise USD 50 million and will provide indirect financing through local micro- and SME finance institutions, benefiting key actors throughout the rice production chain.',
    imageUrl: 'https://igravity.net/wp-content/uploads/2025/08/greenricebond2.jpg'
};

const PortfolioCard: React.FC<PortfolioItem> = ({ title, imageUrl, link }) => (
  <a href={link} className="block relative aspect-video lg:aspect-[4/3] overflow-hidden group">
    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105" style={{ backgroundImage: `url(${imageUrl})`  }}></div>
    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300"></div>
    <div className="absolute bottom-0 left-0 p-6 md:p-8">
      <h4 className="font-sans text-white text-xl md:text-2xl font-medium leading-tight">{title}</h4>
    </div>
  </a>
);

const LargeArticleCard: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => (
    <div className="relative text-white min-h-[500px] lg:min-h-[600px] flex flex-col justify-end p-8 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})`  }}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141d21] via-[#141d21]/70 to-transparent"></div>
        <div className="relative z-10">
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl !leading-tight mb-4">{title}</h3>
            <p className="font-light text-base leading-relaxed">{description}</p>
        </div>
    </div>
);

const InvestmentsSection: React.FC = () => {
  return (
    <>
      {/* Section 1: Direct Investments */}
      <div className="relative z-10 bg-[#f2f2f0] pb-10">
        <div className="container mx-auto px-6 sm:px-10 -mt-[250px] bg-[#2c3133] text-white p-8 md:p-12 lg:p-16">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl !leading-tight mb-8">Direct Investment Mandates</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-700">
            {directInvestments.map(item => (
              <PortfolioCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Multi Manager Portfolios */}
      <div className="relative z-20 bg-[#f2f2f0]">
        <div className="container mx-auto px-6 sm:px-10 -mt-[530px] bg-[#141d21] text-white p-8 md:p-12 lg:p-16">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl !leading-tight mb-8">Multi Manager Portfolios</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
            {multiManagerPortfolios.map((item, index) => (
              <LargeArticleCard key={index} {...item} />
            ))}
          </div>
          <div className="grid">
              <LargeArticleCard {...greenRiceBond} />
          </div>
        </div>
      </div>
      
      {/* Section 3: Quote */}
      <div className="relative z-30 bg-[#f2f2f0]">
        <div className="container mx-auto px-6 sm:px-10 -mt-[460px] bg-[#141d21] text-white py-24 md:py-32 lg:py-48">
             <div className="max-w-5xl mx-auto">
                 <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-center !leading-tight text-[#f2f2f0]">
                    Investments that fuel innovation, empower communities, and tackle global challenges.
                </h2>
            </div>
        </div>
      </div>

       {/* Section 4: Contact Card */}
      <div className="relative z-40 bg-[#f2f2f0]">
          <div className="container mx-auto px-6 sm:px-10 -mt-[260px] text-white py-16">
            <div className="max-w-md mx-auto text-center">
                 <h2 className="font-serif text-3xl md:text-4xl !leading-tight text-gray-800 mb-4">Contact</h2>
                 <img src="https://igravity.net/wp-content/uploads/2025/09/Frederic-Berney.jpg" alt="Frederic Berney" className="w-36 h-36 md:w-48 md:h-48 rounded-full mx-auto mb-6 object-cover"/>
                 <h6 className="font-sans text-xl font-medium text-gray-800">Frederic Berney</h6>
                 <p className="text-gray-600 mb-4">Co-Head Investments</p>
                 <a href="mailto:frederic.berney@igravity.net" className="text-gray-800 hover:text-gray-500 underline">
                    frederic.berney@igravity.net
                 </a>
            </div>
          </div>
      </div>
    </>
  );
};

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
