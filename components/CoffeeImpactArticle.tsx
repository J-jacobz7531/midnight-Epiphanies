import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const CoffeeImpactArticle: React.FC = () => {
  return (
    <div className="bg-[#F2F2F0] min-h-screen">
      {/* Header Section */}
      <section className="bg-[#0f1619] text-white pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="mb-4">
              <span className="text-sm font-medium text-[#cfd6d4] uppercase tracking-wide">
                Impact Stories • Coffee
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              Impact of Coffee on Predominantly Coffee-Growing Communities in Uganda
            </h1>
            <p className="text-xl md:text-2xl text-[#cfd6d4] font-light leading-relaxed">
              Exploring the multifaceted effects of coffee production on Uganda's rural communities, 
              from economic empowerment to environmental sustainability challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative">
        <div className="container mx-auto px-6 lg:px-12 -mt-8">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="/Coffee1.jpeg" 
              alt="Coffee farming in Uganda" 
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Economic Impact Section */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-light text-[#2C3133] mb-6">
                  Economic Impact and Livelihoods
                </h2>
                <div className="text-[#2C3133] leading-relaxed space-y-4">
                  <p>
                    Coffee is a cornerstone of Uganda's economy and the primary livelihood for millions of its citizens. 
                    As the second-largest coffee producer in Africa and the eighth-largest globally, coffee is Uganda's 
                    top export, generating nearly $1 billion in revenue in 2023 and contributing to nearly 20% of the 
                    country's total export revenue. The industry supports over 1.8 million households, with coffee income 
                    often accounting for up to 50% of a household's annual revenue, despite it representing only about 20% 
                    of a farm's total crops.
                  </p>
                  <p>
                    However, the economic picture for farmers is complex and often challenging. A 2024 report by the social 
                    impact firm 60 Decibels revealed significant financial strain among Ugandan coffee farmers. Over one-third 
                    reported no profit in the previous year, and 21% reported financial losses. Additionally, 46% were unable 
                    to save any money, and 22% managed to save only occasionally. These findings highlight the vulnerability 
                    of smallholder farmers to price fluctuations and the high costs of production.
                  </p>
                </div>
              </div>

              {/* Social Impact Section */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-light text-[#2C3133] mb-6">
                  Social and Community Development
                </h2>
                <div className="text-[#2C3133] leading-relaxed space-y-4">
                  <p>
                    The coffee sector has a profound impact on the social fabric of Ugandan communities. It provides 
                    employment and supports education, but also faces challenges such as child labor and gender inequality.
                  </p>
                  
                  <div className="bg-white rounded-lg p-6 my-8">
                    <h3 className="font-serif text-2xl font-light text-[#2C3133] mb-4">
                      Empowerment of Women
                    </h3>
                    <p className="mb-4">
                      Women play a crucial role in coffee production, contributing up to 70% of the labor, but they often 
                      lack ownership of land and access to financial resources. Projects like the one led by Endiro Coffee 
                      in Bududa have empowered women by forming cooperatives, allowing them to gain financial independence 
                      and reduce their dependence on male relatives.
                    </p>
                    <p>
                      The Futureproof Coffee Uganda project also focuses on gender equality, providing women with training 
                      and income-generating opportunities like beekeeping.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 my-8">
                    <h3 className="font-serif text-2xl font-light text-[#2C3133] mb-4">
                      Child Labor and Education
                    </h3>
                    <p className="mb-4">
                      Poverty and the need for farm labor have led to high rates of child labor in coffee-growing regions. 
                      In the Rwenzori and Masaka districts, a significant number of children are engaged in labor and are 
                      not attending school.
                    </p>
                    <p>
                      Addressing this issue requires a multi-faceted approach, including poverty alleviation, improving 
                      access to education, and changing cultural norms around child labor.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 my-8">
                    <h3 className="font-serif text-2xl font-light text-[#2C3133] mb-4">
                      Community Projects
                    </h3>
                    <p className="mb-4">
                      NGOs, government agencies, and private companies are collaborating on various initiatives to improve 
                      community livelihoods. The World Wildlife Fund (WWF) and the European Union have partnered to build 
                      farmers' capacity in modern agricultural practices, which not only boosts yields but also encourages 
                      sustainable land use.
                    </p>
                    <p>
                      Nespresso's AAA Sustainable Quality Program also works with farmers in the Rwenzoris to improve 
                      farming practices and coffee quality, resulting in higher market prices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Environmental Impact Section */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-light text-[#2C3133] mb-6">
                  Environmental Impact and Climate Change
                </h2>
                <div className="text-[#2C3133] leading-relaxed space-y-4">
                  <p>
                    The environmental impact of coffee production in Uganda is a double-edged sword. While the sector 
                    contributes to deforestation and soil degradation, many farmers and organizations are adopting 
                    sustainable practices to mitigate these effects.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-white rounded-lg p-6">
                      <h3 className="font-serif text-xl font-light text-[#2C3133] mb-4">
                        Deforestation and Biodiversity
                      </h3>
                      <p>
                        Coffee production has been linked to deforestation, particularly as farmers clear land for 
                        sun-grown coffee to increase yields. However, many Ugandan farms are smallholder operations 
                        that use agroforestry, integrating coffee trees with shade trees and other crops, which helps 
                        preserve biodiversity and protect soil health.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6">
                      <h3 className="font-serif text-xl font-light text-[#2C3133] mb-4">
                        Climate-Smart Agriculture
                      </h3>
                      <p>
                        To combat the adverse effects of climate change, such as prolonged dry seasons and increased 
                        pests and diseases, farmers are adopting climate-smart agricultural techniques. These include 
                        water conservation, soil erosion control, and the use of resilient coffee varieties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenges Section */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-light text-[#2C3133] mb-6">
                  Challenges and the Path Forward
                </h2>
                <div className="text-[#2C3133] leading-relaxed space-y-4">
                  <p>
                    Despite its economic importance, the Ugandan coffee sector faces several significant challenges 
                    that threaten the livelihoods of farmers and the sustainability of the industry.
                  </p>

                  <div className="bg-[#2C3133] text-white rounded-lg p-8 my-8">
                    <h3 className="font-serif text-2xl font-light mb-6">Key Challenges</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Financial Struggles</h4>
                        <p className="text-sm text-white/80">
                          Many farmers operate on very thin margins. Over one-third reported no profit, 
                          and 21% reported losses in the previous year.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Market Access</h4>
                        <p className="text-sm text-white/80">
                          Poor infrastructure makes it difficult to transport coffee from fields to 
                          processing centers, especially during rainy season.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Technical Support</h4>
                        <p className="text-sm text-white/80">
                          Fewer than one-fifth of Ugandan farmers have access to reliable agricultural 
                          extension services.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    The Ugandan government, through the Uganda Coffee Development Authority (UCDA), is working to 
                    address these challenges. The UCDA provides farmers with high-quality seedlings, training, and 
                    support services to enhance productivity and quality. The government has also launched a 15-year 
                    Coffee Roadmap program with the goal of increasing production to 20 million bags by 2030 and 
                    tripling the income for producers.
                  </p>
                </div>
              </div>

              {/* Impact Summary Table */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-light text-[#2C3133] mb-6">
                  Key Impacts Summary
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
                    <thead className="bg-[#2C3133] text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-medium">Aspect</th>
                        <th className="px-6 py-4 text-left font-medium">Positive Impacts</th>
                        <th className="px-6 py-4 text-left font-medium">Negative Impacts</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 font-medium text-[#2C3133]">Economic</td>
                        <td className="px-6 py-4 text-sm text-[#2C3133]">
                          Provides primary income for 1.8M+ households. Top export crop supporting national economy.
                        </td>
                        <td className="px-6 py-4 text-sm text-[#2C3133]">
                          Many farmers report no profit or losses. Low access to credit and insurance.
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-medium text-[#2C3133]">Social</td>
                        <td className="px-6 py-4 text-sm text-[#2C3133]">
                          Empowers women through cooperatives. Supports community development projects.
                        </td>
                        <td className="px-6 py-4 text-sm text-[#2C3133]">
                          High rates of child labor. Women lack land ownership and decision-making power.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-[#2C3133]">Environmental</td>
                        <td className="px-6 py-4 text-sm text-[#2C3133]">
                          Agroforestry promotes biodiversity. Research into climate-resilient varieties.
                        </td>
                        <td className="px-6 py-4 text-sm text-[#2C3133]">
                          Contributes to deforestation. Vulnerable to climate change impacts.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-light text-[#2C3133] mb-6">
                  Conclusion
                </h2>
                <div className="bg-[#cbb67c]/10 rounded-lg p-8">
                  <p className="text-[#2C3133] leading-relaxed text-lg">
                    The impact of coffee on predominantly coffee-growing communities in Uganda is multifaceted. 
                    While it is a vital economic engine that provides livelihoods for millions, the sector faces 
                    significant challenges, including financial instability, environmental threats, and social issues 
                    like child labor and gender inequality. The path forward involves a combination of government support, 
                    private sector investment, and community-driven initiatives focused on sustainability, climate 
                    resilience, and social empowerment. By addressing these challenges, Uganda can continue to thrive 
                    as a major coffee producer while ensuring a better future for its farmers and their communities.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="bg-[#2C3133] text-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
              Explore More Impact Stories
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Discover how we're creating positive change across different sectors and communities.
            </p>
            <Link 
              to="/news" 
              className="inline-flex items-center px-8 py-3 bg-[#cbb67c] text-[#2C3133] font-medium rounded-lg hover:bg-[#e0cda0] transition-colors"
            >
              View All Stories
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoffeeImpactArticle;
