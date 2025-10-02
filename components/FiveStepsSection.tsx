import React from 'react';
import Accordion from './Accordion';

const FiveStepsSection: React.FC = () => {
  const accordionItems = [
    {
      title: "1. Inputs",
      content: [
        " Patient & working capital (direct trade, pre-harvest, offtake)",
        " Farmer partnerships & local implementing partners/NGOs",
        " Agronomy, QA, and data science expertise",
        " Traceability stack (Farmer Info System, GPS/polygon mapping, Track & Trace)",
        " Standards & verification (independent third-party audits, OPSource tiers)",
        " Innovation capability (product development, low-carbon processes)",
        " Access to inputs for farmers (improved varieties, tools, credit)"
      ].join("\n")
    },
    {
      title: "2. Activities",
      content: [
        " Source responsibly across cocoa, coffee, sesame, vanilla & maize (direct & indirect chains)",
        " Train farmers on GAP, post-harvest quality, diversification & regenerative practices",
        " Roll out CLMRS in cocoa; run child-safe spaces & remediation with communities",
        " Map farms, assess risks (deforestation, human rights) and ensure EUDR readiness",
        " Measure footprints (28+ metrics), model reductions with the Carbon Scenario Planner",
        " Invest in energy efficiency/renewables at facilities; improve circularity",
        " Co-create programs with customers (origin upgrades, living income, landscape projects)",
        " Build on-shore value add (roast/extract/grind/blend/package) and technical specs for B2B"
      ].join("\n")
    },
    {
      title: "3. Outputs",
      content: [
        " Traceable, spec’d lots and verified data for customers (OPSource dashboards)",
        " Increased farmer access to inputs/finance; improved yields, quality & consistency",
        " CLMRS cases identified with remediation actions underway",
        " Hectares under regenerative agriculture; beneficial trees distributed",
        " Deforestation risk maps & due-diligence packs (EUDR-ready)",
        " Low-carbon roadmaps and product footprints per ingredient/category",
        " Allergen-controlled documentation (e.g., sesame) and food-safety assurance"
      ].join("\n")
    },
    {
      title: "4. Outcomes",
      content: [
        " Higher, more stable farmer incomes; progress toward living income targets",
        " Stronger community well-being (nutrition, education, VSLAs, youth/women support)",
        " Reduced Scope 1–2 emissions and lower Scope 3 intensity across key chains",
        " Deforestation-free direct supply chains; resilient, compliant sourcing",
        " Premium, differentiated products with credible origin stories and specs",
        " Deeper customer partnerships and faster innovation cycles"
      ].join("\n")
    },
    {
      title: "5. Impact",
      content: [
        " Farmers prosper, communities thrive, climate action accelerates, nature flourishes",
        " 300+ farmers across 5 countries; 500+ families impacted; 1,000 ha regenerative agriculture (target)",
        " Verifiable, low-carbon ingredients at scale for global food systems",
        " A supply-chain model that makes sustainability real — transparent, inclusive, and nature-positive"
      ].join("\n")
    }
  ];

  return (
    <section className="grid lg:grid-cols-2">
      {/* Left: Video + Heading */}
      <div className="relative min-h-[500px] lg:min-h-screen flex items-center justify-center p-8 text-center text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://igravity.net/wp-content/uploads/2025/08/6.mp4"
        />
        <div className="absolute inset-0 bg-ig-dark opacity-80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-ig-teal to-ig-teal opacity-50 z-10" />
        <div className="relative z-20 p-[8%]">
          <h3 className="font-serif text-4xl lg:text-5xl font-light">
            How Ophel Creates Value: five steps from input to impact
          </h3>
          <p className="mt-4 text-sm opacity-90">
            Grounded in supply-chain excellence and four pillars — Prosperous Farmers, Thriving Communities,
            Climate Action, and Regenerating the Living World.
          </p>
        </div>
      </div>

      {/* Right: Accordion */}
      <div className="bg-ig-dark text-ig-off-white p-8 lg:p-[8%] flex items-center">
        <Accordion items={accordionItems} />
      </div>
    </section>
  );
};

export default FiveStepsSection;
