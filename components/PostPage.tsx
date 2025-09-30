import React from 'react';
import type { Post } from '../types';

interface PostPageProps {
  post: Post;
}

const MetaRow: React.FC<{
  category: string;
  published: string;
  sourceLabel?: string;
  sourceHref?: string;
  tags?: string[];
}> = ({ category, published, sourceHref, sourceLabel, tags = [] }) => (
  <div className="mt-6 flex flex-col gap-3 text-xl text-gray-600">
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center rounded-full bg-[#e9f6f7] px-3 py-1 text-[#247b86] font-medium">
        {category}
      </span>
      <span className="text-gray-500 text-xl">Published: {published}</span>
      {sourceHref && sourceLabel && (
        <a
          href={sourceHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#84bfc7] underline font-semibold text-xl"
        >
          Source: {sourceLabel}
        </a>
      )}
    </div>
    {tags.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-[#84bfc7] text-lg">#{t}</span>
        ))}
      </div>
    )}
  </div>
);

const HeadingBlock: React.FC<{ overline?: string; title: string; subtitle?: string }> = ({
  overline,
  title,
  subtitle
}) => (
  <div className="mb-6">
    {overline && <p className="uppercase tracking-wide text-lg text-[#247b86] mb-1">{overline}</p>}
    <h1
      className="text-6xl md:text-8xl font-light mb-2 text-[#141d21]"
      // Headings → IrvinHeadingPro stack
      style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      {title}
    </h1>
    {subtitle && (
      <p
        className="text-2xl text-gray-600"
        // Body/subtitle → Graphik stack
        style={{ fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
      >
        {subtitle}
      </p>
    )}
  </div>
);

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  // Dynamic content based on post ID
  const getPostContent = (postId: number) => {
    switch (postId) {
      // 1) Sesame — Reports & Publications
      case 1:
        return {
          content: (
            <div
              className="prose prose-2xl max-w-none text-[#141d21] font-light space-y-6"
              // Body copy → Graphik stack
              style={{ fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              <HeadingBlock
                overline="Commodity Market Analysis 2024"
                title="East Africa's Sesame Sector Faces Growth Amid Conflict and Production Hurdles"
                subtitle="Reports and Publications – Sesame"
              />

              <p>
                East Africa's sesame market is projected to reach <strong>USD 16.7 billion by 2033</strong>, driven by
                growing global demand for healthy food ingredients, yet production is increasingly hampered by conflict in
                key producing nations Ethiopia and Sudan. The global sesame market, valued at <strong>over USD 7.68 billion in 2024</strong> with annual production surpassing <strong>7 million metric tons</strong>, faces significant supply chain disruptions reshaping local agricultural economies across the Horn of Africa.{` `}
                <a className="text-[#84bfc7] underline" href="https://www.marketgrowthreports.com/market-reports/sesame-seeds-market-111157" target="_blank" rel="noopener noreferrer">Marketgrowthreports</a>
              </p>

              <p>
                The sesame seeds market is growing at a forecasted <strong>CAGR of 3.9% through 2033</strong>. India, Sudan,
                Myanmar, and Tanzania collectively contribute over half of global output, with India at ~<strong>1.2 million
                metric tons</strong> annually. But in East Africa, political instability has created a "conflict economy"
                around sesame revenues, constraining supply and adding price volatility.{` `}
                <a className="text-[#84bfc7] underline" href="https://www.marketgrowthreports.com/market-reports/sesame-seeds-market-111157" target="_blank" rel="noopener noreferrer">Marketgrowthreports</a>
              </p>

              <h2
                className="text-4xl font-normal"
                // Section headings → IrvinHeadingPro stack
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Regional Production Challenges
              </h2>
              <p>
                In Ethiopia and Sudan, competition to control sesame revenues has reshaped local markets and undermined
                long-term planning and investment.
              </p>
              <blockquote className="border-l-4 border-[#84bfc7] pl-6 italic text-gray-700">
                "The sesame sector in East Africa is caught between tremendous market opportunity and severe production
                challenges... conflict in major producing areas is constraining supply and creating price volatility."
                <footer className="text-xl text-gray-600 mt-2">— Dr. James Mwangi, Agricultural Economist</footer>
              </blockquote>

              <p>
                Roughly <strong>3.5 million metric tons</strong> of sesame seeds were processed for edible oil in 2024, underlining
                its culinary and industrial roles.{` `}
                <a className="text-[#84bfc7] underline" href="https://www.marketgrowthreports.com/market-reports/sesame-seeds-market-111157" target="_blank" rel="noopener noreferrer">Marketgrowthreports</a>
              </p>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Innovation and Market Differentiation
              </h2>
              <p>
                Adoption of improved seed varieties, irrigation, and post-harvest handling is rising. <strong>White sesame</strong>
                dominates (&gt;60% of consumption), while <strong>black sesame</strong> demand grew <strong>22% YoY</strong>. Organic and non-GMO
                sesame has expanded, with certified organic output surpassing <strong>250,000 MT</strong>.{` `}
                <a className="text-[#84bfc7] underline" href="https://www.researchandmarkets.com/report/africa-sesame-seed-market?srsltid=AfmBOopksk_9XpINv4PxoF-f7NfDAHiFdo2eWZbsIUyDqqZ7O_60Fn3V" target="_blank" rel="noopener noreferrer">Researchandmarkets</a>{' '}
                |{' '}
                <a className="text-[#84bfc7] underline" href="https://www.marketgrowthreports.com/market-reports/sesame-seeds-market-111157" target="_blank" rel="noopener noreferrer">Marketgrowthreports</a>
              </p>

              <blockquote className="border-l-4 border-[#84bfc7] pl-6 italic text-gray-700">
                "We see tremendous demand for organic sesame, especially from Europe and North America. The challenge is consistent
                quality and supply amid security issues and limited inputs."
                <footer className="text-xl text-gray-600 mt-2">— Sarah Alemayehu, Ethiopia</footer>
              </blockquote>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Trade Dynamics and Market Access
              </h2>
              <p>
                Global trade reached ~<strong>1.1 million MT</strong> in 2024. East African exporters must meet strict quality and
                reliability to access high-value markets. AfCFTA could expand access if production, processing, and logistics
                constraints are addressed.{` `}
                <a className="text-[#84bfc7] underline" href="https://www.marketgrowthreports.com/market-reports/sesame-seeds-market-111157" target="_blank" rel="noopener noreferrer">Marketgrowthreports</a>
              </p>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Climate, Policy, and Investment
              </h2>
              <p>
                Climate variability adds risk, though sesame’s drought tolerance makes it attractive in semi-arid areas. Targeted
                investments in peace-building, infrastructure, and value addition (processing + certification) are pivotal to unlock
                growth.
              </p>

              <MetaRow
                category="Reports and Publications – Sesame"
                published="December 30, 2024"
                sourceLabel="Market Research Reports"
                sourceHref="https://www.marketgrowthreports.com/market-reports/sesame-seeds-market-111157"
                tags={['Sesame', 'EastAfrica', 'Trade', 'AfCFTA', 'Organic']}
              />
            </div>
          ),
        };

      // 2) Sesame — Reports & Publications (alt)
      case 2:
        return {
          content: (
            <div
              className="prose prose-2xl max-w-none text-[#141d21] font-light space-y-6"
              style={{ fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              <HeadingBlock
                overline="Commodity Market Analysis 2024"
                title="East Africa's Sesame Sector Faces Growth Amid Conflict and Production Hurdles"
                subtitle="Reports and Publications – Sesame"
              />

              <p>
                East Africa's sesame market is projected to reach <strong>USD 16.7 billion by 2033</strong>, driven by
                growing global demand for healthy food ingredients, yet production is increasingly hampered by conflict in key
                producing nations Ethiopia and Sudan.{` `}
                <a className="text-[#84bfc7] underline" href="https://www.worldbank.org/en/topic/agriculture/brief/food-security-update" target="_blank" rel="noopener noreferrer">World Bank – Food Security Update</a>
              </p>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Production Challenges & Conflict Impact
              </h2>
              <p>
                Ethiopia and Sudan account for over <strong>60% of global sesame production</strong>, but ongoing conflicts have
                disrupted farming operations, displaced agricultural communities, and damaged critical infrastructure. Production
                in Sudan has declined by an estimated <strong>25-30%</strong> since 2021.
              </p>
              <blockquote className="border-l-4 border-[#84bfc7] pl-6 italic text-gray-700">
                "We cannot reach our fields safely, and even when we can, getting seeds and equipment is nearly impossible."
                <footer className="text-xl text-gray-600 mt-2">— Ahmed Hassan, Sesame Farmer, Sudan</footer>
              </blockquote>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Global Market Dynamics
              </h2>
              <p>
                Rising health consciousness has boosted demand for sesame oil, tahini, and hulled sesame in North America, Europe,
                and Asia. Japan and China remain the largest importers, with prices reaching <strong>USD 2,200-2,800 per MT</strong>
                for premium grades. However, supply chain disruptions have created significant price volatility.
              </p>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Opportunities & Value Addition
              </h2>
              <p>
                Despite challenges, opportunities exist for value chain development through processing facilities, organic
                certification, and direct trade relationships. Countries like Tanzania and Kenya are expanding production
                to fill supply gaps, while investment in conflict-resilient farming practices shows promise.
              </p>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                AfCFTA & Regional Integration
              </h2>
              <p>
                The African Continental Free Trade Area offers potential for intra-African sesame trade, reducing dependence
                on volatile export markets. Regional processing hubs could capture more value locally while building resilience
                against external shocks.
              </p>

              <MetaRow
                category="Reports and Publications – Sesame"
                published="December 30, 2024"
                sourceLabel="East Africa Trade & Agriculture Monitor"
                sourceHref="https://www.worldbank.org/en/topic/agriculture/brief/food-security-update"
                tags={['Sesame', 'EastAfrica', 'Conflict', 'Trade', 'ValueChain']}
              />
            </div>
          ),
        };

      // 3) Coffee — Impact Stories
      case 3:
        return {
          content: (
            <div
              className="prose prose-2xl max-w-none text-[#141d21] font-light space-y-6"
              style={{ fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              <HeadingBlock
                overline="Commodity Market Analysis 2024"
                title="Sustainability and Resilience: East Africa's Coffee Value Chain at a Crossroads"
                subtitle="Impact Stories – Coffee"
              />

              <p>
                In Kenya, Ethiopia, Uganda, and Tanzania, smallholder coffee farmers face intensifying climate pressures just as EUDR
                compliance and G7-backed sustainability funds seek to transform the value chain. Coffee is vital to rural livelihoods,
                yet yields are declining while requirements for traceability and deforestation-free sourcing increase.{` `}
                <a className="text-[#84bfc7] underline" href="https://ecdpm.org/work/how-build-resilient-and-sustainable-coffee-value-chain-africa" target="_blank" rel="noopener noreferrer">ECDPM</a>
              </p>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Climate Pressures Mount
              </h2>
              <p>
                Production has risen in parts of Africa, but yields have fallen—pushing expansion into forests, eroding biodiversity and
                soils. Suitable areas in East Africa could shrink by up to <strong>50% by 2050</strong> without adaptation.
              </p>
              <blockquote className="border-l-4 border-[#84bfc7] pl-6 italic text-gray-700">
                "Seasons are unpredictable... some years too much rain during harvest, other years too little during flowering."
                <footer className="text-xl text-gray-600 mt-2">— Maria Nyongo, Kenya</footer>
              </blockquote>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                International Response & Policy
              </h2>
              <p>
                In 2024, the G7 identified coffee as strategic and announced a <strong>Global Coffee Sustainability & Resilience Fund</strong>.
                Meanwhile, the EU's Deforestation Regulation (EUDR) requires <strong>traceable, deforestation-free</strong> imports.{` `}
                <a className="text-[#84bfc7] underline" href="https://ecdpm.org/work/how-build-resilient-and-sustainable-coffee-value-chain-africa" target="_blank" rel="noopener noreferrer">ECDPM</a>
              </p>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                AfCFTA & Green Value Chains
              </h2>
              <p>
                Kenya piloted a <strong>Green Supplement</strong> to its AfCFTA strategy (Dec 2024) to align trade with environmental goals,
                emphasizing green finance, certification, and resilient infrastructure.{` `}
                <a className="text-[#84bfc7] underline" href="https://www.uneca.org/stories/kenya%E2%80%99s-green-supplement-focusing-on-tea-and-coffee-value-chains" target="_blank" rel="noopener noreferrer">UNECA</a>
              </p>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Technology & Farmer-Centered Solutions
              </h2>
              <p>
                Precision tools, drought-resistant varieties, and improved wet-mill processing are scaling via public-private programs. Wet
                mills act as hubs for TA, certification, and direct trade.{` `}
                <a className="text-[#84bfc7] underline" href="https://www.sustainability.nespresso.com/communities/our-journey-in-africa" target="_blank" rel="noopener noreferrer">Nespresso</a>
              </p>
              <blockquote className="border-l-4 border-[#84bfc7] pl-6 italic text-gray-700">
                "Certification opens premium markets, but farmers need training and infrastructure to comply."
                <footer className="text-xl text-gray-600 mt-2">— Samuel Mutinda, Embu, Kenya</footer>
              </blockquote>

              <MetaRow
                category="Impact Stories – Coffee"
                published="December 30, 2024"
                sourceLabel="ECDPM"
                sourceHref="https://ecdpm.org/work/how-build-resilient-and-sustainable-coffee-value-chain-africa"
                tags={['Coffee', 'EUDR', 'G7', 'AfCFTA', 'Sustainability']}
              />
            </div>
          ),
        };

      // 5) Maize — Reports & Publications
      case 5:
        return {
          content: (
            <div
              className="prose prose-2xl max-w-none text-[#141d21] font-light space-y-6"
              style={{ fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              <HeadingBlock
                overline="Commodity Market Analysis 2024"
                title="East Africa's Maize Markets: Food Security at Stake Amid Changing Prices and Policy Shifts"
                subtitle="Reports and Publications – Maize"
              />

              <p>
                Maize prices across East Africa are ~<strong>10% above 2020</strong>, stressing food systems that serve millions. The region
                produces ~<strong>45 million MT</strong> annually, but climate variability and policy inconsistency drive instability.{` `}
                <a className="text-[#84bfc7] underline" href="https://www.worldbank.org/en/topic/agriculture/brief/food-security-update" target="_blank" rel="noopener noreferrer">World Bank – Food Security Update</a>
              </p>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Regional Price Dynamics & Food Security
              </h2>
              <p>
                Uganda typically records the lowest prices, while others face higher costs that weigh on households (low-income families may
                spend up to <strong>70%</strong> of income on food). Urban consumers are hit hardest; rural effects are mixed.
              </p>
              <blockquote className="border-l-4 border-[#84bfc7] pl-6 italic text-gray-700">
                "Price volatility undermines planning for farmers and budgets for families."
                <footer className="text-xl text-gray-600 mt-2">— Dr. Catherine Mwangi, EADB</footer>
              </blockquote>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Climate, Policy & Technology
              </h2>
              <p>
                Rain-fed systems remain vulnerable to droughts/floods. Policy responses include grain reserves, trade controls, and subsidies.
                AfCFTA offers efficiency gains if standards and borders integrate effectively. Drought-tolerant seed, precision ag, storage,
                and mobile market tools can lift productivity and stabilize prices.
              </p>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Storage & Post-Harvest
              </h2>
              <p>
                Post-harvest losses of <strong>20–30%</strong> persist. Warehouse receipts, exchanges, and better storage could expand effective
                supply quickly and cheaply.
              </p>

              <MetaRow
                category="Reports and Publications – Maize"
                published="December 30, 2024"
                sourceLabel="Food Security Monitoring Unit"
                sourceHref="https://www.worldbank.org/en/topic/agriculture/brief/food-security-update"
                tags={['Maize', 'FoodSecurity', 'AfCFTA', 'PostHarvest', 'Climate']}
              />
            </div>
          ),
        };

      // 6) Cocoa — Case Studies
      case 6:
        return {
          content: (
            <div
              className="prose prose-2xl max-w-none text-[#141d21] font-light space-y-6"
              style={{ fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              <HeadingBlock
                overline="Commodity Market Analysis 2024"
                title="West Africa's Cocoa Sector: Sustainability Initiatives Battle Deforestation and Value Chain Inequities"
                subtitle="Case Studies – Cocoa"
              />

              <p>
                In Côte d’Ivoire and Ghana (&gt;<strong>60%</strong> of global cocoa), a sustainability push aims to reverse deforestation
                (cocoa accounts for <strong>~37%</strong> of Ivorian forest loss) and lift farmer incomes (often <strong>&lt;6%</strong> of a bar’s final value). The EU’s
                <strong> €25m Sustainable Cocoa Initiative</strong> (launched 2020; reinforced 2024) coordinates governments and private sector.{` `}
                <a className="text-[#84bfc7] underline" href="https://international-partnerships.ec.europa.eu/policies/programming/programmes/sustainable-cocoa-initiative_en" target="_blank" rel="noopener noreferrer">EU – Sustainable Cocoa Initiative</a>
              </p>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Certification & Cooperatives
              </h2>
              <p>
                Evidence from 1,700+ producers shows <strong>joint participation in certification + cooperatives</strong> delivers the strongest
                sustainability outcomes (agroforestry, soil, IPM, sanitation). Context matters: Côte d’Ivoire benefits most from combined
                approaches; in Ghana, certification alone shows significant positive effects.{` `}
                <a className="text-[#84bfc7] underline" href="https://www.sciencedirect.com/science/article/pii/S0921800924001083" target="_blank" rel="noopener noreferrer">ScienceDirect</a>
              </p>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Agroforestry & Climate
              </h2>
              <p>
                Transitioning from low-shade systems to agroforestry restores biodiversity and resilience while diversifying farmer income
                (fruit/timber/medicinals). Scaling requires TA, finance, and markets for diversified outputs.
              </p>

              <h2
                className="text-4xl font-normal"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Investment & Scaling
              </h2>
              <p>
                Italy’s MAECI (Piano Mattei) supports Alliance Bioversity-CIAT programs in Côte d’Ivoire/Guinea to crowd-in finance, expand
                market access, and reduce deforestation/child labor.{` `}
                <a className="text-[#84bfc7] underline" href="https://alliancebioversityciat.org/stories/paving-way-sustainable-cocoa-value-chains-west-africa" target="_blank" rel="noopener noreferrer">Alliance Bioversity & CIAT</a>
              </p>

              <MetaRow
                category="Case Studies – Cocoa"
                published="December 30, 2024"
                sourceLabel="EU Development Cooperation"
                sourceHref="https://international-partnerships.ec.europa.eu/policies/programming/programmes/sustainable-cocoa-initiative_en"
                tags={['Cocoa', 'Deforestation', 'Certification', 'EU', 'Agroforestry']}
              />
            </div>
          ),
        };

      default:
        return {
          content: (
            <div
              className="prose prose-2xl max-w-none text-[#141d21] font-light space-y-6"
              style={{ fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              <p
                className="text-4xl font-semibold"
                style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                {post.title}
              </p>
              <p>{post.excerpt}</p>
              <p>This is a detailed view of the selected post. Content is loaded based on the post data.</p>
              <p className="text-gray-500">#ImpactInvestment #SustainableDevelopment</p>
            </div>
          ),
        };
    }
  };

  const postContent = getPostContent(post.id);

  return (
    <div className="single-post">
      {/* Hero Image Section */}
      <div className="py-8 md:py-12">
        <div className="container mx-auto px-6 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 xl:px-12 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {postContent.content}

          {/* About Section */}
          <div className="mt-12 pt-8 border-t border-gray-200"
               style={{ fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            <p
              className="font-semibold text-4xl mb-4"
              style={{ fontFamily: 'IrvinHeadingPro, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              About Ophel Holdings
            </p>
            <p>
              Ophel Holdings is a diversified investment and development company dedicated to building sustainable
              businesses across Africa. We focus on strategic sectors such as agriculture, renewable energy,
              real estate, and technology—driving inclusive growth and long-term value creation.
            </p>
            <p className="mt-4">
              Through strategic partnerships, innovation, and responsible leadership, Ophel Holdings supports
              enterprises that empower communities and contribute to regional economic transformation.
            </p>
            <p className="mt-4">
              <a href="#" className="text-[#84bfc7] underline font-semibold">Learn more about our initiatives</a>
            </p>
            <p>
              <a href="#" className="text-[#84bfc7] underline font-semibold">Follow us on LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
