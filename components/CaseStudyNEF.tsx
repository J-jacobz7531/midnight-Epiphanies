import React, { useState } from 'react';

/** Small branded bullet-row */
const BulletPoint: React.FC<{ type: 1 | 2; children: React.ReactNode }> = ({ type, children }) => (
  <div className="flex items-start space-x-4">
    <img
      src={`https://igravity.net/wp-content/uploads/2025/07/bullet-${type}.png`}
      alt=""
      className="w-5 h-5 mt-1 flex-shrink-0"
    />
    <p className="flex-1 font-light" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {children}
    </p>
  </div>
);

/** Tabbed details rewritten for Ophel Holdings */
const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'challenge' | 'approach' | 'outcomes'>('challenge');

  const TabButton: React.FC<{ tabId: 'challenge' | 'approach' | 'outcomes'; children: React.ReactNode }> = ({
    tabId,
    children
  }) => (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`text-2xl md:text-3xl relative transition-colors duration-300 pb-2 ${
        activeTab === tabId ? 'text-[#222829]' : 'text-gray-400 hover:text-[#222829]'
      }`}
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-0.5 w-full transform transition-transform duration-500 ease-out ${
          activeTab === tabId ? 'scale-x-100' : 'scale-x-0'
        } origin-left bg-gradient-to-r from-[#84bfc7] to-[#faaf40]`}
      />
    </button>
  );

  const renderContent = () => {
    if (activeTab === 'challenge') {
      return (
        <div className="space-y-4">
          <BulletPoint type={1}>
            Fragmented smallholder value chains in East Africa—especially <strong>sesame and coffee</strong>—face low yields,
            <strong> 20–30% post-harvest losses</strong>, and price volatility driven by climate shocks and logistics gaps.
          </BulletPoint>
          <BulletPoint type={1}>
            Producers struggle to meet <strong>international quality and traceability</strong> (e.g., EUDR/deforestation-free, organic),
            limiting access to premium export markets.
          </BulletPoint>
          <BulletPoint type={1}>
            Affordable, patient capital is scarce. <strong>Working capital, storage finance, and risk-sharing</strong> instruments are needed
            to crowd-in commercial investors while protecting farmer livelihoods.
          </BulletPoint>
          <BulletPoint type={1}>
            Women and youth are underrepresented across trading, processing, and management roles—missing both <strong>inclusive jobs</strong>
            and productivity gains.
          </BulletPoint>
        </div>
      );
    }
    if (activeTab === 'approach') {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3
              className="text-3xl font-light leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Ophel’s integrated approach
            </h3>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <BulletPoint type={2}>
              <strong>Market & stakeholder mapping:</strong> Diagnose bottlenecks across inputs, aggregation, storage, and export; align
              cooperatives, off-takers, financiers, and public agencies.
            </BulletPoint>
            <BulletPoint type={2}>
              <strong>Blended finance design:</strong> Create a facility that combines concessional first-loss, guarantees, and revolving
              working-capital lines to de-risk <em>post-harvest and trade finance</em>.
            </BulletPoint>
            <BulletPoint type={2}>
              <strong>Climate-smart productivity:</strong> Support adoption of <em>improved seed</em> (e.g., Simsim 2/3 for sesame), good
              agronomic practices, IPM, and <em>farmer training</em> via cooperatives.
            </BulletPoint>
            <BulletPoint type={2}>
              <strong>Loss reduction & quality:</strong> Invest in <em>drying, cleaning, grading</em>, hermetic storage, and warehouse-receipt
              systems to cut losses and unlock collateralized finance.
            </BulletPoint>
            <BulletPoint type={2}>
              <strong>Traceability & compliance:</strong> Deploy digital lot-tracking and farm polygons to meet buyer due-diligence
              (deforestation-free, organic/Fairtrade pathways).
            </BulletPoint>
            <BulletPoint type={2}>
              <strong>Inclusive value creation:</strong> Gender-responsive recruitment, youth skilling, and leadership pipelines across
              aggregation, QA, and processing.
            </BulletPoint>
            <BulletPoint type={2}>
              <strong>Outcome measurement:</strong> Facility-level KPIs track yields, losses, farm-gate prices, jobs, women/youth
              participation, and export premiums.
            </BulletPoint>
          </div>
        </div>
      );
    }
    if (activeTab === 'outcomes') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BulletPoint type={2}>
            <strong>Targeted results (pilot horizon):</strong> yield uplift on sesame/coffee plots through climate-smart practices;{" "}
            <em>double-digit</em> reduction in post-harvest losses; improved <strong>farm-gate prices</strong> via quality premiums.
          </BulletPoint>
          <BulletPoint type={2}>
            <strong>Market access:</strong> increased share of certified/traceable lots meeting EU/US buyer specifications, with more stable
            forward contracts.
          </BulletPoint>
          <BulletPoint type={2}>
            <strong>Finance unlocked:</strong> de-risked working-capital flows for cooperatives and SMEs using warehouse receipts and purchase
            orders as collateral.
          </BulletPoint>
          <BulletPoint type={2}>
            <strong>Inclusion:</strong> higher participation of women and youth in aggregation, QA, and management roles across the chain.
          </BulletPoint>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="bg-[#141d21] py-10 md:py-14 relative z-[1]">
      <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-12">
        <div className="bg-[#f2f2f0] py-10 md:py-14 px-6 sm:px-8 md:px-16 -mt-10 md:-mt-14">
          <div className="flex flex-wrap gap-8 border-b border-gray-300 mb-8">
            <TabButton tabId="challenge">The Challenge</TabButton>
            <TabButton tabId="approach">Our Approach</TabButton>
            <TabButton tabId="outcomes">Outcomes & KPIs</TabButton>
          </div>
          <div>{renderContent()}</div>
        </div>
      </div>
    </section>
  );
};

const CaseStudyNEF: React.FC = () => {
  return (
    <div className="bg-[#f2f2f0]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* HERO */}
      <section className="bg-[#141d21] text-white pt-[calc(100vw*0.10)] pb-[calc(100vw*0.20)] relative z-[1]">
        <div className="absolute inset-0 bg-[url('/Sesame1.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="lg:w-3/4 xl:w-2/3">
            <p className="text-[#f2f2f0] mb-4 font-medium">Investment & Advisory Case Studies</p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light bg-gradient-to-r from-[#84bfc7] to-[#faaf40] text-transparent bg-clip-text"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Ophel Holdings: Building Climate-Smart Sesame & Coffee Value Chains in East Africa
            </h1>
          </div>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="bg-[#313a3c] relative z-[3] py-8 md:py-10">
        <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-12">
          <div className="bg-[#f2f2f0] text-[#222829] p-8 sm:p-12 md:p-16 -mt-20 sm:-mt-24 md:-mt-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-5">
                <h3 className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Lead
                </h3>
                <p className="text-lg font-light">Ophel Holdings</p>
              </div>

              <div className="space-y-5">
                <h3 className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Focus Areas
                </h3>
                <p className="text-lg font-light">
                  Agriculture & Value Chains · Blended Finance · Post-Harvest Infrastructure · Digital Traceability · Inclusive Jobs
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Type of Project
                </h3>
                <p className="text-lg font-light">
                  Design and pilot of a blended finance & technical assistance platform to scale <em>climate-smart sesame and coffee</em>
                  across East Africa.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Geographic Scope
                </h3>
                <p className="text-lg font-light">
                  East Africa (Uganda, Kenya, Tanzania, Ethiopia) with initial pilots in Northern Uganda and Kenya’s highlands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT DESCRIPTION */}
      <section className="bg-[#313a3c] text-white pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-28 relative z-[2]">
        <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-1">
              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 lg:mb-0"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Project description
              </h3>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed font-light text-white">
                  Ophel Holdings is developing an integrated platform that aligns <strong>finance, technology, and agronomy</strong> to help
                  smallholders and agri-SMEs consistently meet export-grade quality in <em>sesame and coffee</em>.
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-light text-white/90">
                  The model blends <strong>first-loss capital, guarantees, and revolving working-capital lines</strong> with investments in
                  <em> drying, cleaning, grading,</em> and <em>hermetic storage</em>. Warehouse-receipt systems improve liquidity and reduce
                  post-harvest losses.
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-light text-white/90">
                  On the farm, Ophel backs <strong>climate-smart practices</strong> (e.g., improved sesame varieties like Simsim 2/3, GAP, and
                  IPM) and deploys <strong>digital traceability</strong> to support deforestation-free/organic pathways and unlock <em>premium
                  markets</em>. The platform embeds <strong>gender-responsive</strong> hiring and youth skilling across aggregation and QA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <TabsSection />
    </div>
  );
};

export default CaseStudyNEF;
