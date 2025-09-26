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
  const [activeTab, setActiveTab] = useState('challenge');

  const renderContent = () => {
    if (activeTab === 'challenge') {
      return (
        <div className="space-y-4">
          <BulletPoint type={1}>
            The Near East Foundation (NEF) needed to design a blended finance facility that could effectively combine public and private funding sources to maximize impact in underserved communities.
          </BulletPoint>
          <BulletPoint type={1}>
            Traditional funding mechanisms were insufficient to address the scale and complexity of development challenges in the regions where NEF operates.
          </BulletPoint>
          <BulletPoint type={1}>
            There was a need for innovative financial structures that could attract commercial investors while maintaining focus on social and environmental outcomes.
          </BulletPoint>
          <BulletPoint type={1}>
            Risk mitigation strategies were essential to make investments attractive to private sector participants while ensuring sustainable development impact.
          </BulletPoint>
        </div>
      );
    }
    if (activeTab === 'approach') {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-light leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Our comprehensive approach included the following components
            </h3>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <BulletPoint type={2}>
              Market Analysis and Stakeholder Mapping: Conducted extensive research to understand the investment landscape, identify key stakeholders, and assess market opportunities in target regions.
            </BulletPoint>
            <BulletPoint type={2}>
              Financial Structure Design: Developed innovative blended finance mechanisms that optimize the risk-return profile for different investor types while maximizing development impact.
            </BulletPoint>
            <BulletPoint type={2}>
              Implementation Framework: Created detailed operational guidelines, governance structures, and impact measurement systems to ensure effective facility management and accountability.
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
    <section className="bg-[#141d21] py-10 md:py-14 relative z-[1]">
      <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-12">
        <div className="bg-[#f2f2f0] py-10 md:py-14 px-6 sm:px-8 md:px-16 -mt-10 md:-mt-14">
          <div className="flex space-x-8 border-b border-gray-300 mb-8">
            <TabButton tabId="challenge">The Challenge</TabButton>
            <TabButton tabId="approach">Our Approach</TabButton>
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
              Structuring Study of a Blended Finance Facility for the Near East Foundation
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-[#313a3c] relative z-[3] py-8 md:py-10">
        <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-12">
          <div className="bg-[#f2f2f0] text-[#222829] p-8 sm:p-12 md:p-16 -mt-20 sm:-mt-24 md:-mt-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-5">
                <h3 className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Client
                </h3>
                <p className="text-lg font-light" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Near East Foundation (NEF)
                </p>
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Focus Areas
                </h3>
                <p className="text-lg font-light" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Blended Finance, Impact Investment, Development Finance
                </p>
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Type of project
                </h3>
                <p className="text-lg font-light" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Comprehensive structuring study for a blended finance facility, including market analysis, financial modeling, and implementation framework design.
                </p>
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Geographic Scope
                </h3>
                <p className="text-lg font-light" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Middle East and North Africa (MENA) region, with focus on countries where NEF has established operations and partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  iGravity supports the Near East Foundation in designing and setting up of a blended finance facility that combines public and private capital to address critical development challenges in the MENA region.
                </p>
                <p
                  className="text-lg md:text-xl leading-relaxed font-light text-white/90"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  The facility is designed to leverage concessional funding to de-risk private investments, creating sustainable financing mechanisms that can scale impact while generating appropriate returns for commercial investors.
                </p>
                <p
                  className="text-lg md:text-xl leading-relaxed font-light text-white/90"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Our comprehensive approach includes market analysis, financial structure design, risk assessment, and implementation planning to ensure the facility's long-term success and sustainability.
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

export default CaseStudyNEF;
