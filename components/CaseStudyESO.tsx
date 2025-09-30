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

/** Tabbed details rewritten for Ophel Holdings with Maize focus */
const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'why' | 'approach' | 'impact'>('why');

  const TabButton: React.FC<{ tabId: 'why' | 'approach' | 'impact'; children: React.ReactNode }> = ({
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
    if (activeTab === 'why') {
      return (
        <div className="space-y-4">
          <BulletPoint type={1}>
            <strong>Maize underpins food security</strong> for 300M+ Africans and fuels feed, milling, and bioenergy value chains—yet
            climate shocks and market volatility threaten reliability and affordability.
          </BulletPoint>
          <BulletPoint type={1}>
            Africa produced <strong>~90M MT</strong> of maize recently, with demand rising on the back of population growth, urbanization, and
            industrial use. Infrastructure gaps and post-harvest losses (up to <strong>~25%</strong> in places) erode incomes.
          </BulletPoint>
          <BulletPoint type={1}>
            <strong>Climate risk</strong>—droughts, erratic rainfall, and pests (e.g., FAW)—is projected to depress yields; some regions face
            double-digit declines without adaptation.
          </BulletPoint>
          <BulletPoint type={1}>
            Barriers to <strong>technology adoption</strong> (certified seed, storage, mechanization), high working-capital needs, and limited
            extension services slow productivity—especially for women and youth.
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
              <strong>Market & stakeholder mapping:</strong> Diagnose bottlenecks across inputs, aggregation, drying, storage, transport,
              and offtake; align cooperatives, processors, buyers, lenders, and public agencies.
            </BulletPoint>
            <BulletPoint type={2}>
              <strong>Blended finance & risk-sharing:</strong> Design first-loss/guarantee layers and revolving working-capital lines to
              unlock input credit, aggregation finance, and pay-on-delivery contracts.
            </BulletPoint>
            <BulletPoint type={2}>
              <strong>Climate-smart productivity:</strong> Scale improved/hybrid varieties, GAP, and IPM; expand access to extension and
              weather/market advisory; promote soil health and water-efficient practices.
            </BulletPoint>
            <BulletPoint type={2}>
              <strong>Loss reduction & quality:</strong> Invest in village dryers, cleaners, grading, hermetic storage, and
              warehouse-receipt systems to cut losses and collateralize inventory.
            </BulletPoint>
            <BulletPoint type={2}>
              <strong>Traceability & compliance:</strong> Deploy digital batch/lot tracking and quality logs to meet buyer specs and
              premium markets.
            </BulletPoint>
            <BulletPoint type={2}>
              <strong>Inclusive value creation:</strong> Gender-responsive recruitment and youth skilling across aggregation, QA, and
              processing; tailored financial products for women-led enterprises.
            </BulletPoint>
          </div>
        </div>
      );
    }
    if (activeTab === 'impact') {
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BulletPoint type={2}>
              <strong>Productivity & resilience:</strong> higher yields via improved seed and agronomy; reduced climate exposure with
              better on-farm practices and storage.
            </BulletPoint>
            <BulletPoint type={2}>
              <strong>Post-harvest loss reduction:</strong> target <em>&ge;10–15%</em> effective loss vs. baseline up to ~25% through drying,
              cleaning, and hermetic storage.
            </BulletPoint>
            <BulletPoint type={2}>
              <strong>Income & price stabilization:</strong> better grades and traceability raise farm-gate prices; forward and floor-price
              contracts reduce volatility.
            </BulletPoint>
            <BulletPoint type={2}>
              <strong>Inclusion & jobs:</strong> increased participation of women and youth in aggregation/QA roles and SME leadership.
            </BulletPoint>
          </div>

          {/* Inline data visual */}
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <img
              src="https://quickchart.io/chart?width=800&height=420&c=%7B%22type%22%3A%22bar%22%2C%22data%22%3A%7B%22labels%22%3A%5B%22Nigeria%22%2C%22South%20Africa%22%2C%22Zambia%22%2C%22Uganda%22%2C%22Ghana%22%2C%22Angola%22%2C%22Ethiopia%22%2C%22Malawi%22%2C%22Tanzania%22%2C%22Cameroon%22%5D%2C%22datasets%22%3A%5B%7B%22label%22%3A%22Maize%20Production%20(2025)%22%2C%22data%22%3A%5B16.3%2C15.8%2C4.9%2C4.1%2C5.3%2C4.4%2C3.4%2C3.6%2C2.6%2C2.2%5D%7D%5D%7D%2C%22options%22%3A%7B%22plugins%22%3A%7B%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22Top%20Maize%20Producers%20in%20Africa%20(2025)%22%7D%7D%2C%22scales%22%3A%7B%22y%22%3A%7B%22beginAtZero%22%3Atrue%7D%7D%7D%7D"
              alt="Top maize producers in Africa (2025)"
              className="w-full h-auto"
            />
            <p className="mt-2 text-xs text-gray-500">
              Chart data source: public compilations on top African maize producers (2025).
            </p>
          </div>
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
            <TabButton tabId="why">Why it matters</TabButton>
            <TabButton tabId="approach">Ophel’s approach</TabButton>
            <TabButton tabId="impact">Community impact & KPIs</TabButton>
          </div>
          <div>{renderContent()}</div>
        </div>
      </div>
    </section>
  );
};

const CaseStudyESO: React.FC = () => {
  return (
    <div className="bg-[#f2f2f0]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* HERO */}
      <section className="bg-[#141d21] text-white pt-[calc(100vw*0.10)] pb-[calc(100vw*0.20)] relative z-[1]">
        <div className="absolute inset-0 bg-[url('/Maize1.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="lg:w-3/4 xl:w-2/3">
            <p className="text-[#f2f2f0] mb-4 font-medium">Investment & Advisory Case Studies</p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light bg-gradient-to-r from-[#84bfc7] to-[#faaf40] text-transparent bg-clip-text"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Ophel Holdings: Climate-Smart Maize Value Chains for Community Impact
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
                  Maize Value Chains · Blended Finance · Post-Harvest & Storage · Digital Traceability · Inclusive Jobs
                </p>
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Type of Project
                </h3>
                <p className="text-lg font-light">
                  Design and pilot of a blended-finance & technical-assistance platform to scale climate-smart maize across priority geographies.
                </p>
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Geographic Scope
                </h3>
                <p className="text-lg font-light">
                  East & Southern Africa (e.g., Uganda, Kenya, Tanzania, Zambia) with pathways to scale across the continent.
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
                  Ophel Holdings is aligning <strong>finance, technology, and agronomy</strong> to help smallholders and agri-SMEs deliver
                  consistent, traceable <em>export- and processor-grade</em> maize while improving food security locally.
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-light text-white/90">
                  The platform blends <strong>first-loss and guarantees</strong> with revolving working-capital lines for inputs and aggregation,
                  and co-invests in <em>drying, cleaning, grading, and hermetic storage</em>. Warehouse-receipt systems unlock liquidity and
                  reduce post-harvest losses.
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-light text-white/90">
                  On the farm, Ophel scales <strong>improved seed</strong>, <strong>GAP/IPM</strong>, and advisory; at market, we deploy{" "}
                  <strong>digital traceability</strong> to meet buyer specifications and access premiums. Gender-responsive hiring and youth
                  skilling are embedded across aggregation and QA.
                </p>
              </div>
            </div>
          </div>

          {/* Optional data card under description */}
          <div className="mt-12 rounded-lg bg-white/5 p-6 ring-1 ring-white/10">
            <p className="text-sm text-white/80 mb-4">Context snapshot</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <img
                src="https://quickchart.io/chart?width=800&height=420&c=%7B%22type%22%3A%22bar%22%2C%22data%22%3A%7B%22labels%22%3A%5B%22Nigeria%22%2C%22South%20Africa%22%2C%22Zambia%22%2C%22Uganda%22%2C%22Ghana%22%2C%22Angola%22%2C%22Ethiopia%22%2C%22Malawi%22%2C%22Tanzania%22%2C%22Cameroon%22%5D%2C%22datasets%22%3A%5B%7B%22label%22%3A%22Maize%20Production%20(2025)%22%2C%22data%22%3A%5B16.3%2C15.8%2C4.9%2C4.1%2C5.3%2C4.4%2C3.4%2C3.6%2C2.6%2C2.2%5D%7D%5D%7D%2C%22options%22%3A%7B%22plugins%22%3A%7B%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22Top%20Maize%20Producers%20in%20Africa%20(2025)%22%7D%7D%2C%22scales%22%3A%7B%22y%22%3A%7B%22beginAtZero%22%3Atrue%7D%7D%7D%7D"
                alt="Top maize producers in Africa (2025)"
                className="w-full h-auto rounded-md bg-white"
              />
              <div className="text-sm text-white/90 space-y-2">
                <p>
                  Maize is a <strong>cornerstone commodity</strong> for African diets and industry. The case for targeted investment is
                  compelling: rising demand, climate pressure, and infrastructure gaps create both risk and opportunity.
                </p>
                <p>
                  Ophel’s model focuses on <strong>bankable upgrades</strong>—loss reduction, quality improvement, and traceability—paired with
                  risk-sharing finance that crowds in private capital.
                </p>
                <p className="text-white/60">Illustrative data sources: regional production rankings and market monitors.</p>
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

export default CaseStudyESO;
