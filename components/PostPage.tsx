import React from 'react';
import type { Post } from '../types';

interface PostPageProps {
  post: Post;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  // Dynamic content based on post ID
  const getPostContent = (postId: number) => {
    switch (postId) {
      case 1:
        return {
          content: (
            <div className="prose prose-lg max-w-none text-[#141d21] font-light space-y-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <p className="font-semibold text-lg">
                Why Emerging Markets Private Debt Is Key to Resilient Impact Portfolios in 2025
              </p>
              <p>
                The year 2024 served as a powerful reminder: the global financial landscape is in constant flux, shaped by geopolitical tensions, climate challenges, and evolving market dynamics.
              </p>
              <p>
                As we enter 2025, impact investors are seeking strategies that not only generate positive social and environmental outcomes but also provide portfolio resilience in an uncertain world.
              </p>
              <p className="font-semibold text-lg">
                The Case for Emerging Markets Private Debt
              </p>
              <p>
                Emerging markets private debt offers a compelling proposition for impact investors looking to diversify their portfolios while maintaining strong risk-adjusted returns.
              </p>
              <p>
                Unlike traditional equity investments, private debt provides more predictable cash flows and downside protection, making it an attractive option during volatile market conditions.
              </p>
              <p className="text-gray-500">
                #ImpactInvestment #EmergingMarkets #PrivateDebt #PortfolioResilience
              </p>
            </div>
          )
        };
      
      case 2:
        return {
          content: (
            <div className="prose prose-lg max-w-none text-[#141d21] font-light space-y-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <p className="font-semibold text-lg">
                Refugee Investment Facility (RIF): 2024 Impact Report
              </p>
              <p>
                Both businesses and financial communities have long overlooked refugees - not for lack of potential, but due to systemic barriers and misconceptions about their economic contributions.
              </p>
              <p>
                The Refugee Investment Facility (RIF) was designed to change this narrative by providing targeted financing and technical assistance to businesses that create meaningful employment opportunities for refugees.
              </p>
              <p className="font-semibold text-lg">
                2024 Achievements
              </p>
              <p>
                Throughout 2024, RIF has supported multiple enterprises across Jordan, Uganda, and other key markets, creating over 500 direct jobs for refugees and host community members.
              </p>
              <p>
                Our portfolio companies have demonstrated remarkable resilience and growth, proving that refugee inclusion is not just a social imperative but a business opportunity.
              </p>
              <p className="text-gray-500">
                #RefugeeInclusion #ImpactReport #SustainableDevelopment #RIF
              </p>
            </div>
          )
        };

      case 3:
        return {
          content: (
            <div className="prose prose-lg max-w-none text-[#141d21] font-light space-y-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <p className="font-semibold text-lg">
                Balim Investments: 2024 Impact Report
              </p>
              <p>
                In rural Africa, a large number of enterprises operate under challenging conditions while transforming lives, creating jobs, and building resilient communities.
              </p>
              <p>
                Balim Investments has been at the forefront of supporting these enterprises, providing not just capital but also technical assistance and market access.
              </p>
              <p className="font-semibold text-lg">
                Key Impact Metrics
              </p>
              <p>
                Our 2024 portfolio has reached over 10,000 smallholder farmers across Uganda, Kenya, and Rwanda, improving agricultural productivity and income levels.
              </p>
              <p>
                Through our investments, we've facilitated access to premium markets for over 2,500 coffee farmers, resulting in a 35% increase in average farm-gate prices.
              </p>
              <p className="text-gray-500">
                #BalimInvestments #RuralDevelopment #AgricultureFinance #ImpactReport
              </p>
            </div>
          )
        };

      case 4:
        return {
          content: (
            <div className="prose prose-lg max-w-none text-[#141d21] font-light space-y-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <p className="font-semibold text-lg">
                iGravity Investment Solutions: 2024 Financial and Impact Performance Report
              </p>
              <p>
                We're thrilled to share our iGravity Investment Solutions: 2024 Financial and Impact Performance Report – a deep dive into how our investment strategies are delivering both financial returns and meaningful social impact.
              </p>
              <p className="font-semibold text-lg">
                Financial Performance Highlights
              </p>
              <p>
                Our diversified portfolio achieved a net IRR of 12.3% in 2024, outperforming traditional emerging market benchmarks while maintaining our commitment to impact.
              </p>
              <p>
                Risk-adjusted returns remained strong across all asset classes, with our private debt portfolio showing particular resilience during market volatility.
              </p>
              <p className="font-semibold text-lg">
                Impact Performance
              </p>
              <p>
                Beyond financial metrics, our investments have created over 2,000 direct jobs and reached more than 50,000 beneficiaries across our target markets.
              </p>
              <p className="text-gray-500">
                #PerformanceReport #ImpactInvestment #FinancialReturns #SocialImpact
              </p>
            </div>
          )
        };

      case 5:
        return {
          content: (
            <div className="prose prose-lg max-w-none text-[#141d21] font-light space-y-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <p className="font-semibold text-lg">
                Ali Dates Joins the RIF Portfolio: Scaling Impact in Jordan's Agriculture Sector
              </p>
              <p>
                The <a href="#" className="text-[#84bfc7] underline">Refugee Investment Facility (RIF)</a> is excited to welcome Ali Dates to its growing portfolio of impact-driven enterprises.
              </p>
              <p className="font-semibold text-lg">
                Ali Dates: Investing in Growth &amp; Employment
              </p>
              <img src="https://igravity.net/gestionesito/ddcrm-uploads/immaginisito/Ali%20Dates%201.png" alt="Ali Dates packaging" className="w-full h-auto rounded-md" />
              <p>
                In Jordan's Jordan Valley, Ali Dates has built a reputation for producing premium Medjool dates while maintaining a strong social mission.
              </p>
              <p>
                Founded in 2014 by Ali El-Kouz, Ali Dates prioritizes ethical employment, ensuring that refugees and vulnerable host community members have access to fair working conditions and sustainable livelihoods.
              </p>
              <p className="font-semibold text-lg">
                Scaling with RIF: A Murabaha-Compliant Loan for Growth
              </p>
              <img src="https://igravity.net/gestionesito/ddcrm-uploads/immaginisito/Ali%20Dates%202.png" alt="Workers at Ali Dates" className="w-full h-auto rounded-md" />
              <p>
                In early 2025, the <span className="font-semibold">Refugee Investment Facility (RIF)</span> provided a Murabaha Shariah-compliant loan to Ali Dates, allowing the company to expand its operations into sorting services.
              </p>
              <p>With this financing, Ali Dates will:</p>
              <ul className="list-none pl-0">
                  <li>– Upgrade production capacity – purchasing an automated date-sorting machine to improve efficiency.</li>
                  <li>– Double seasonal employment – increasing from 25 to up to 60 workers, most of whom are refugees.</li>
                  <li>– Extend seasonal contracts – adding 3–4 more months of employment per season.</li>
              </ul>
              <p className="text-gray-500">
                #ImpactInvestment #RefugeeInclusion #SustainableAgriculture #JordanValley
              </p>
            </div>
          )
        };

      case 6:
        return {
          content: (
            <div className="prose prose-lg max-w-none text-[#141d21] font-light space-y-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <p className="font-semibold text-lg">
                Strengthening Uganda's Coffee Sector with Balim Investments
              </p>
              <p>
                Across Uganda's Mount Elgon region, smallholder farmers cultivate some of the world's finest Arabica coffee under dense forest canopies, creating a sustainable agricultural ecosystem that benefits both farmers and the environment.
              </p>
              <p className="font-semibold text-lg">
                The Challenge: Market Access and Fair Pricing
              </p>
              <p>
                Despite producing high-quality coffee, many smallholder farmers in the region struggle with limited market access and volatile pricing that often leaves them below the poverty line.
              </p>
              <p>
                Traditional supply chains often involve multiple intermediaries, each taking a margin that reduces the final price received by farmers.
              </p>
              <p className="font-semibold text-lg">
                Balim's Solution: Direct Market Access
              </p>
              <p>
                Through our partnership with local cooperatives, Balim Investments has established direct trade relationships that eliminate unnecessary intermediaries and ensure farmers receive fair prices for their premium coffee.
              </p>
              <p>
                Our investment has enabled the construction of modern processing facilities and the implementation of quality control systems that meet international standards.
              </p>
              <p className="font-semibold text-lg">
                Impact Achieved
              </p>
              <p>
                Since our investment, participating farmers have seen an average 40% increase in their income, with over 1,200 farming families now benefiting from improved market access.
              </p>
              <p className="text-gray-500">
                #CoffeeInvestment #SustainableAgriculture #Uganda #FairTrade
              </p>
            </div>
          )
        };

      case 7:
        return {
          content: (
            <div className="prose prose-lg max-w-none text-[#141d21] font-light space-y-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <p className="font-semibold text-lg">
                Expanding Access to Maternal Healthcare in Kenya
              </p>
              <p>
                Sub-Saharan Africa faces some of the most severe health challenges globally, particularly in maternal and child health, where access to quality healthcare remains limited in rural and underserved communities.
              </p>
              <p className="font-semibold text-lg">
                The Healthcare Gap
              </p>
              <p>
                In Kenya, maternal mortality rates remain unacceptably high, particularly in rural areas where healthcare facilities are scarce and transportation to medical centers can take hours.
              </p>
              <p>
                Many women give birth without skilled medical assistance, leading to preventable complications and deaths.
              </p>
              <p className="font-semibold text-lg">
                Jacaranda Health: A Technology-Enabled Solution
              </p>
              <p>
                Our investment in Jacaranda Health supports their mission to make quality maternal healthcare accessible and affordable through innovative technology and service delivery models.
              </p>
              <p>
                Jacaranda operates a network of maternal health clinics that combine high-quality medical care with digital health solutions to reach more women in need.
              </p>
              <p className="font-semibold text-lg">
                Scaling Impact
              </p>
              <p>
                With our support, Jacaranda Health has expanded its network to serve over 15,000 mothers annually, with plans to reach 50,000 mothers by 2026.
              </p>
              <p>
                The organization has achieved a 95% client satisfaction rate and significantly reduced maternal complications through early intervention and quality care.
              </p>
              <p className="text-gray-500">
                #MaternalHealth #HealthcareAccess #Kenya #DigitalHealth
              </p>
            </div>
          )
        };

      case 8:
        return {
          content: (
            <div className="prose prose-lg max-w-none text-[#141d21] font-light space-y-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <p className="font-semibold text-lg">
                Selected as a SIFI Innovator: Advancing Impact Finance for Global Goals
              </p>
              <p>
                iGravity and Helvetas are proud to be among the five impactful initiatives chosen in the third funding cycle of the Swiss Finance Institute (SIFI) Innovation Program.
              </p>
              <p className="font-semibold text-lg">
                The SIFI Innovation Program
              </p>
              <p>
                The SIFI Innovation Program supports groundbreaking financial innovations that address global challenges and contribute to sustainable development goals.
              </p>
              <p>
                This prestigious program brings together leading financial institutions, technology companies, and impact organizations to develop scalable solutions for pressing global issues.
              </p>
              <p className="font-semibold text-lg">
                Our Innovation: Blended Finance for Rural Development
              </p>
              <p>
                Our selected project focuses on developing innovative blended finance mechanisms that can unlock private capital for rural development initiatives in emerging markets.
              </p>
              <p>
                By combining public and private funding sources, we aim to create sustainable financing models that can scale impact while generating appropriate returns for investors.
              </p>
              <p className="font-semibold text-lg">
                Expected Impact
              </p>
              <p>
                Through this initiative, we expect to mobilize over $50 million in additional private capital for rural development projects across Africa and Asia.
              </p>
              <p>
                The program will directly benefit over 100,000 rural households through improved access to financial services, agricultural inputs, and market opportunities.
              </p>
              <p className="text-gray-500">
                #SIFIInnovator #BlendedFinance #RuralDevelopment #Innovation
              </p>
            </div>
          )
        };

      case 9:
        return {
          content: (
            <div className="prose prose-lg max-w-none text-[#141d21] font-light space-y-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <p className="font-semibold text-lg">
                Balim Investments Partners with Flow Uganda to Expand Financial Inclusion in Rural Areas
              </p>
              <p>
                Flow Uganda, a leading fintech empowering mobile money agents across the country, is the latest impactful addition to our growing portfolio of investments that are transforming financial access in underserved communities.
              </p>
              <p className="font-semibold text-lg">
                The Financial Inclusion Challenge
              </p>
              <p>
                Despite significant progress in mobile money adoption across East Africa, many rural communities still lack reliable access to financial services.
              </p>
              <p>
                Traditional banking infrastructure remains limited in remote areas, leaving millions of people without access to basic financial services like savings, credit, and insurance.
              </p>
              <p className="font-semibold text-lg">
                Flow Uganda's Solution
              </p>
              <p>
                Flow Uganda operates a network of trained mobile money agents who provide essential financial services directly to rural communities.
              </p>
              <p>
                Their platform enables agents to offer a comprehensive suite of services including money transfers, bill payments, savings products, and micro-loans.
              </p>
              <p className="font-semibold text-lg">
                Partnership Impact
              </p>
              <p>
                Through our partnership, Flow Uganda has expanded its agent network by 300%, now serving over 50,000 customers across rural Uganda.
              </p>
              <p>
                The platform has facilitated over $10 million in transactions, providing previously unbanked communities with access to formal financial services.
              </p>
              <p>
                Our investment has also enabled Flow Uganda to develop new products specifically designed for rural customers, including agricultural insurance and crop financing.
              </p>
              <p className="text-gray-500">
                #FinancialInclusion #Fintech #Uganda #MobileMoney
              </p>
            </div>
          )
        };

      case 10:
        return {
          content: (
            <div className="prose prose-lg max-w-none text-[#141d21] font-light space-y-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <p className="font-semibold text-lg">
                Reimagining Impact: iGravity's New Theory of Change
              </p>
              <p>
                In impact investing, a Theory of Change (ToC) isn't just a framework—it's a roadmap that guides every investment decision and measures every outcome against our mission to create positive change.
              </p>
              <p className="font-semibold text-lg">
                Why Update Our Theory of Change?
              </p>
              <p>
                As the impact investing landscape evolves and our understanding of systemic change deepens, we recognized the need to refine our approach to better reflect our learnings and ambitions.
              </p>
              <p>
                Our updated Theory of Change incorporates insights from five years of impact investing, feedback from our portfolio companies, and emerging best practices in the field.
              </p>
              <p className="font-semibold text-lg">
                Key Elements of Our New Framework
              </p>
              <p>
                Our refreshed Theory of Change focuses on three core pillars: <strong>Systemic Impact</strong>, <strong>Financial Sustainability</strong>, and <strong>Stakeholder Engagement</strong>.
              </p>
              <p>
                <strong>Systemic Impact:</strong> We target investments that address root causes of social and environmental challenges, not just symptoms.
              </p>
              <p>
                <strong>Financial Sustainability:</strong> We ensure our portfolio companies can achieve long-term viability while maintaining their social mission.
              </p>
              <p>
                <strong>Stakeholder Engagement:</strong> We actively involve beneficiaries, local communities, and other stakeholders in our investment process.
              </p>
              <p className="font-semibold text-lg">
                Measuring What Matters
              </p>
              <p>
                Our new framework introduces more sophisticated impact measurement tools that capture both quantitative outcomes and qualitative changes in the communities we serve.
              </p>
              <p>
                We're moving beyond simple output metrics to focus on long-term outcomes and systemic change indicators.
              </p>
              <p className="text-gray-500">
                #TheoryOfChange #ImpactMeasurement #SystemicChange #ImpactInvesting
              </p>
            </div>
          )
        };

      case 11:
        return {
          content: (
            <div className="prose prose-lg max-w-none text-[#141d21] font-light space-y-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <p className="font-semibold text-lg">
                Latimpacto in Medellín Colombia 1st – 3rd September
              </p>
              <p>
                Join us at Latimpacto 2025, Latin America's premier impact investing conference, taking place in the vibrant city of Medellín, Colombia from September 1st to 3rd.
              </p>
              <p className="font-semibold text-lg">
                Why Latimpacto Matters
              </p>
              <p>
                Latimpacto brings together the most influential voices in Latin American impact investing, from fund managers and institutional investors to social entrepreneurs and policy makers.
              </p>
              <p>
                The conference provides a unique platform to explore the latest trends, share best practices, and forge partnerships that can accelerate positive change across the region.
              </p>
              <p className="font-semibold text-lg">
                iGravity's Participation
              </p>
              <p>
                Our team will be presenting on "Scaling Impact Through Blended Finance: Lessons from East Africa" on September 2nd at 2:00 PM.
              </p>
              <p>
                We'll share insights from our work with the Refugee Investment Facility and discuss how blended finance mechanisms can be adapted for Latin American markets.
              </p>
              <p className="font-semibold text-lg">
                Key Sessions to Attend
              </p>
              <p>
                Don't miss the opening keynote on "The Future of Impact Investing in Latin America" and the panel discussion on "Climate Finance: Opportunities and Challenges."
              </p>
              <p>
                The conference will also feature a startup pitch competition showcasing the most promising impact ventures from across the region.
              </p>
              <p className="font-semibold text-lg">
                Connect with Us
              </p>
              <p>
                If you're attending Latimpacto, we'd love to connect! Reach out to schedule a meeting to discuss potential partnerships and investment opportunities.
              </p>
              <p className="text-gray-500">
                #Latimpacto2025 #ImpactInvesting #LatinAmerica #Medellín
              </p>
            </div>
          )
        };

      case 12:
        return {
          content: (
            <div className="prose prose-lg max-w-none text-[#141d21] font-light space-y-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <p className="font-semibold text-lg">
                Building Bridges 2025 in Geneva 30 Sept – 2 Oct
              </p>
              <p>
                Building Bridges is Switzerland's flagship sustainable finance event, bringing together global leaders to discuss the future of sustainable investing and its role in addressing global challenges.
              </p>
              <p className="font-semibold text-lg">
                Event Highlights
              </p>
              <p>
                This year's conference focuses on "Accelerating the Transition: Finance for a Sustainable Future" with sessions covering climate finance, impact measurement, and regulatory developments.
              </p>
              <p>
                The event attracts over 1,500 participants from around the world, including pension funds, asset managers, banks, and impact investors.
              </p>
              <p className="font-semibold text-lg">
                iGravity's Session: Costs and Opportunities of Real Impact
              </p>
              <p>
                On September 30th, our CEO will participate in a panel discussion titled "Costs and Opportunities of Real Impact: What It Takes for Impact-First Investments to Deliver."
              </p>
              <p>
                The session will explore the trade-offs between financial returns and impact outcomes, sharing practical insights from our portfolio experience.
              </p>
              <p>
                We'll discuss how impact-first investors can maintain high impact standards while achieving sustainable financial performance.
              </p>
              <p className="font-semibold text-lg">
                Key Topics
              </p>
              <p>
                The panel will cover impact measurement methodologies, the role of blended finance in scaling impact, and strategies for engaging institutional investors in impact-first opportunities.
              </p>
              <p>
                We'll also share case studies from our work in emerging markets, highlighting both successes and lessons learned.
              </p>
              <p className="font-semibold text-lg">
                Networking Opportunities
              </p>
              <p>
                Building Bridges offers excellent networking opportunities with leading figures in sustainable finance. We'll be hosting a reception on October 1st for interested investors and partners.
              </p>
              <p className="text-gray-500">
                #BuildingBridges2025 #SustainableFinance #Geneva #ImpactFirst
              </p>
            </div>
          )
        };

      default:
        return {
          content: (
            <div className="prose prose-lg max-w-none text-[#141d21] font-light space-y-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <p className="font-semibold text-lg">
                {post.title}
              </p>
              <p>
                {post.excerpt}
              </p>
              <p>
                This is a detailed view of the selected post. Content would be dynamically loaded based on the post data.
              </p>
              <p className="text-gray-500">
                #ImpactInvestment #SustainableDevelopment
              </p>
            </div>
          )
        };
    }
  };

  const postContent = getPostContent(post.id);

  return (
    <div className="single-post">
      <div className="bg-[#141d21] text-white">
        <div className="container mx-auto px-6 xl:px-12 py-[5vw]">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight bg-gradient-to-r from-[#84bfc7] to-[#faaf40] text-transparent bg-clip-text">
              {post.title}
            </h3>
          </div>
        </div>
      </div>

      <div className="py-[2vw]">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-auto"
        />
      </div>

      <div className="container mx-auto px-6 xl:px-12 py-[3vw]">
        <div className="max-w-3xl mx-auto">
          {postContent.content}
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="font-semibold text-lg mb-4">About iGravity</p>
            <p>
              iGravity is a leading impact investment firm focused on creating positive social and environmental outcomes while delivering strong financial returns. 
              We work with innovative enterprises across emerging markets to scale their impact and reach.
            </p>
            <p className="mt-4">
              <a href="#" className="text-[#84bfc7] underline font-semibold">Learn more about our work</a>
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
