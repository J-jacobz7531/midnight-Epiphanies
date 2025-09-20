import React, { useState } from 'react';

const BulletPoint: React.FC<{ type: 1 | 2; children: React.ReactNode }> = ({ type, children }) => (
  <div className="flex items-start space-x-4">
    <img
      src={`https://igravity.net/wp-content/uploads/2025/07/bullet-${type}.png`}
      alt=""
      className="w-5 h-5 mt-1 flex-shrink-0"
    />
    <p className="flex-1 font-light" style={{ fontFamily: "'Poppins', sans-serif" }}>{children}</p>
  </div>
);

const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('why');

  const renderContent = () => {
    if (activeTab === 'why') {
      return (
        <div className="space-y-4">
          <BulletPoint type={1}>
            ESOs struggle with dependence on grants for their existence. This is problematic, as it often requires the ESO
            to structurally focus on fund-raising, where an absence of long-terms partnerships exists.
          </BulletPoint>
          <BulletPoint type={1}>
            Struggling with finding pre-proven pathways to financial sustainability, ESO face resource constraints, limiting
            them in their ability to experiment with different pathways/channels to find a more sustainable business model.
          </BulletPoint>
          <BulletPoint type={1}>
            In addition, the short-term existential pressure on raising funding coincides with the ESOs ability to offer
            quality programs for the startups and entrepreneurs that they support. This problem is doubled, where ESOs have
            the ambition of scaling the program, at times on the international level
          </BulletPoint>
          <BulletPoint type={1}>
            It would be good to collect here some statistics from reports (ideally coming from DGGF, Argidius, or other actors
            in the space for who this can be beneficial).
          </BulletPoint>
        </div>
      );
    }
    if (activeTab === 'tasks') {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-light leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              The degree of iGravity's support consisted of the following tasks
            </h3>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <BulletPoint type={2}>
              Preparation phase and ESO selection: Understanding ESOs challenges based on DGGF's past and current support for
              ESOs, gathered key data, and scoped the ESO ecosystem through interviews with ESOs and funders. Created
              archetypes of the ESOs to make an assessment of challenges based on the two key parameters the program aimed to
              address: financial sustainability and program quality.
            </BulletPoint>
            <BulletPoint type={2}>
              Design and test the RBF program. Based on the scoping phase, selected pilot accelerators, designed and
              structured the RBF instrument, built an operating model, trained partners, and executed the pilot with ongoing
              monitoring and reporting.
            </BulletPoint>
            <BulletPoint type={2}>
              Learning and dissemination. Consolidated insights from the pilot phase, engaged an alliance of stakeholders, and
              collaboratively devised a comprehensive scale-up plan for the refined RBF instrument, aimed at facilitating its
              effective and sustainable deployment at scale.
            </BulletPoint>
          </div>
        </div>
      );
    }
    return null;
  };

  const TabButton: React.FC<{ tabId: string; children: React.ReactNode }> = ({ tabId, children }) => (
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
      ></span>
    </button>
  );

  return (
    // FIXED: remove negative bottom margin + huge z-index; use normal padding and a small negative top margin on the card
    <section className="bg-[#141d21] py-10 md:py-14 relative z-[1]">
      <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-12">
        <div className="bg-[#f2f2f0] py-10 md:py-14 px-6 sm:px-8 md:px-16 -mt-10 md:-mt-14">
          <div className="flex space-x-8 border-b border-gray-300 mb-8">
            <TabButton tabId="why">Why it matters</TabButton>
            <TabButton tabId="tasks">iGravity's tasks</TabButton>
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
      <section className="bg-[#141d21] text-white pt-[calc(100vw*0.10)] pb-[calc(100vw*0.20)] relative z-[1]">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="lg:w-3/4 xl:w-2/3">
            <p className="text-[#f2f2f0] mb-4 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Advisory Case Studies
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light bg-gradient-to-r from-[#84bfc7] to-[#faaf40] text-transparent bg-clip-text"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Design of the Entrepeneur Support Organization's (ESOs) RBF pilot to enhance financial sustainability
            </h1>
          </div>
        </div>
      </section>

      {/* FIXED: no negative bottom margin on section; add mild vertical padding.
          Lift the white card with negative top margin instead. */}
      <section className="bg-[#313a3c] relative z-[3] py-8 md:py-10">
        <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-12">
          <div className="bg-[#f2f2f0] text-[#222829] p-8 sm:p-12 md:p-16 -mt-20 sm:-mt-24 md:-mt-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-5">
                <h3 className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Client
                </h3>
                <p className="text-lg font-light" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  The Dutch Good Growth Fund (Triple Jump)
                </p>
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Partners
                </h3>
                <p className="text-lg font-light" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Shona & Open Startup International.
                </p>
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Type of project
                </h3>
                <p className="text-lg font-light" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Design of a Results-Based Financing Pilot to incentive financial sustainability and program quality for
                  ESOs, Implement the pilot and run it for a year to assess the effectiveness of the program.
                </p>
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Sector
                </h3>
                <p className="text-lg font-light" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  SME and startups (sector agnostic, although the organizations that we are working with work primarily in
                  the agriculture sector and with startups focussing on deep-tech solutions).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIXED: use explicit top/bottom padding; no negative overlaps. */}
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
                <p
                  className="text-lg md:text-xl leading-relaxed font-light text-white"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  iGravity, together with the Dutch Good Growth Fund designed a state-of-the-art RBF program, whereby the goal
                  is to incentivize ESOs in enhancing their financial sustainability (i.e., by enhancing their cost control, or
                  diversifying their revenue streams away from grants, among others), as well as strengthening the quality of
                  the program the ESOs offering.
                </p>
                <p
                  className="text-lg md:text-xl leading-relaxed font-light text-white/90"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Leveraging the power of incentives, by tying a portion of the funding to pre-agreed results with the two
                  ESOs, this pilot aims to provide an alternative angle to the often grant-dependent ESO space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TabsSection />
    </div>
  );
};

export default CaseStudyESO;
