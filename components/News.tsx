import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Post } from '../types';
import Newsletter from './Newsletter';
import Footer from './Footer';

const postsData: Post[] = [
    { id: 1, categories: [{ name: "Impact Stories", tag: "impact-stories" }], title: "Impact of Coffee on Predominantly Coffee-Growing Communities in Uganda", imageUrl: "/Coffee1.jpeg", excerpt: "Exploring the multifaceted effects of coffee production on Uganda's rural communities, from economic empowerment to environmental sustainability challenges.", link: "/coffee-impact" },
    { id: 2, categories: [{ name: "Reports and Publications", tag: "reports-and-publications" }], title: "East Africa's Sesame Sector Faces Growth Amid Conflict and Production Hurdles", imageUrl: "/Sesame1.jpg", excerpt: "East Africa's sesame market is projected to reach USD 16.7 billion by 2033, driven by growing global demand for healthy food ingredients, yet production is increasingly hampered by conflict in key producing nations Ethiopia and Sudan.", link: "#" },
    { id: 3, categories: [{ name: "Impact Stories", tag: "impact-stories" }], title: "Sustainability and Resilience: East Africa's Coffee Value Chain at a Crossroads", imageUrl: "/Coffee2.jpeg", excerpt: "In the highlands of Kenya, Ethiopia, Uganda, and Tanzania, millions of smallholder coffee farmers are grappling with a perfect storm of climate change impacts and evolving market demands that threaten their livelihoods.", link: "#" },
    { id: 4, categories: [{ name: "News", tag: "news" }], title: "Madagascar's Vanilla Market: Cyclones, Oversupply, and Price Volatility Shake Global Trade", imageUrl: "/Vanilla1.jpg", excerpt: "Madagascar exported an unprecedented 2,400 metric tons of vanilla in the first half of 2024, yet prices have plummeted below USD 20 per kilogram following the cancellation of minimum export pricing.", link: "#" },
    { id: 5, categories: [{ name: "Reports and Publications", tag: "reports-and-publications" }], title: "East Africa's Maize Markets: Food Security at Stake Amid Changing Prices and Policy Shifts", imageUrl: "/Maize1.jpg", excerpt: "Maize prices across East Africa have surged 10% above 2020 levels, creating ripple effects through regional food systems where the staple grain feeds millions and underpins food security for vulnerable populations.", link: "#" },
    { id: 6, categories: [{ name: "Case Studies", tag: "case-studies" }], title: "West Africa's Cocoa Sector: Sustainability Initiatives Battle Deforestation and Value Chain Inequities", imageUrl: "/Cocoa1.jpg", excerpt: "In the cocoa plantations of Côte d'Ivoire and Ghana, where over 60% of the world's cocoa is produced, a sustainability revolution is taking shape as smallholder farmers confront the stark reality of their economic situation.", link: "#" },
    { id: 7, categories: [{ name: "Investments", tag: "investments" }], title: "Climate-Smart Agriculture: Investment Opportunities in East African Commodity Markets", imageUrl: "/farmers-working.jpg", excerpt: "New investment frameworks are emerging to support climate-resilient agricultural practices across East Africa's key commodity sectors, from coffee to sesame production.", link: "#" },
    { id: 8, categories: [{ name: "Reports and Publications", tag: "reports-and-publications" }], title: "Commodity Market Analysis 2024: Five Strategic Sectors Shaping African Agricultural Trade", imageUrl: "/plantation.jpeg", excerpt: "A comprehensive analysis of sesame, coffee, vanilla, maize, and cocoa markets reveals the complex interplay of market forces, policy interventions, and sustainability challenges shaping African agricultural trade.", link: "#" },
    { id: 9, categories: [{ name: "Impact Stories", tag: "impact-stories" }], title: "Smallholder Farmers Navigate Climate Change in Uganda's Coffee Highlands", imageUrl: "/Coffee3.jpeg", excerpt: "Coffee farmers in Uganda's Mount Elgon region are adapting traditional practices to cope with changing rainfall patterns and rising temperatures that threaten their livelihoods.", link: "#" },
    { id: 10, categories: [{ name: "News", tag: "news" }], title: "EU Launches €25 Million Sustainable Cocoa Initiative for West Africa", imageUrl: "/CocoaPlantation.jpg", excerpt: "The European Union's comprehensive approach to addressing deforestation, child labor, and economic inequality in West African cocoa production enters its implementation phase.", link: "#" },
    { id: 11, categories: [{ name: "Investments", tag: "investments" }], title: "Sesame Value Chain Development: Investment Opportunities in Conflict-Affected Regions", imageUrl: "/Sesame2.jpg", excerpt: "Despite security challenges in Ethiopia and Sudan, sesame's growing global market presents strategic investment opportunities for value chain development and farmer support programs.", link: "#" },
    { id: 12, categories: [{ name: "Case Studies", tag: "case-studies" }], title: "Madagascar Vanilla Cooperatives: Building Resilience Through Certification and Quality Standards", imageUrl: "/Vanilla.jpg", excerpt: "Farmer cooperatives in Madagascar's SAVA region are leveraging organic certification and quality improvements to navigate volatile vanilla markets and climate challenges.", link: "#" },
    { id: 13, categories: [{ name: "Reports and Publications", tag: "reports-and-publications" }], title: "Food Security and Trade Integration: Maize Markets Under the African Continental Free Trade Area", imageUrl: "/Maize2.jpg", excerpt: "Regional trade integration offers opportunities for stabilizing maize markets across East Africa, but implementation requires coordinated policies and infrastructure investments.", link: "#" },
    { id: 14, categories: [{ name: "Case Studies", tag: "case-studies" }], title: "Ophel Holdings: Building Climate-Smart Sesame & Coffee Value Chains in East Africa", imageUrl: "/Sesame1.jpg", excerpt: "Ophel Holdings is developing an integrated platform that aligns finance, technology, and agronomy to help smallholders and agri-SMEs consistently meet export-grade quality in sesame and coffee.", link: "#" },
    { id: 15, categories: [{ name: "Investments", tag: "investments" }], title: "Digital Agriculture Platforms Transform Commodity Trading in East Africa", imageUrl: "/Maize3.jpg", excerpt: "Mobile technology and digital payment systems are connecting smallholder farmers directly with global markets, reducing intermediaries and improving price discovery across commodity value chains.", link: "#" },
];

const filters = [
    { name: "All", tag: "all" },
    { name: "Case Studies", tag: "case-studies" },
    { name: "Events", tag: "events" },
    { name: "Impact Stories", tag: "impact-stories" },
    { name: "Investments", tag: "investments" },
    { name: "News", tag: "news" },
    { name: "Reports and Publications", tag: "reports-and-publications" },
];

const PostCard: React.FC<{ post: Post; onPostClick: (post: Post) => void }> = ({ post, onPostClick }) => {
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Handle navigation to coffee impact article
    if (post.id === 1) {
      navigate('/coffee-impact');
      return;
    }
    // Handle clicks for posts with IDs 2-15
    if (post.id >= 2 && post.id <= 15) {
      onPostClick(post);
    } else {
      // For other posts, you could handle differently or show a message
      console.log('Post details not available yet');
    }
  };

  return (
    <a href={post.link} onClick={handleClick} className="group block cursor-pointer">
      <div className="overflow-hidden">
        <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="pt-4">
        <p className="text-sm font-medium text-gray-500 mb-2">
          {post.categories.map((cat, index) => (
            <span key={cat.tag} className="underline hover:text-gray-900">
              {cat.name}{index < post.categories.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
        <h4 className="font-serif text-xl lg:text-2xl font-light leading-tight text-gray-800 group-hover:underline mb-2">{post.title}</h4>
        <p className="text-base font-light text-gray-600">{post.excerpt}</p>
      </div>
    </a>
  );
};

const NewsSection: React.FC<{ onPostClick: (post: Post) => void }> = ({ onPostClick }) => {
    const [activeFilter, setActiveFilter] = useState<string>('all');

    const filteredPosts = activeFilter === 'all'
        ? postsData
        : postsData.filter(post => post.categories.some(cat => cat.tag === activeFilter));

  return (
    <section className="bg-[#F2F2F0] text-[#2C3133] py-16 md:py-24 px-4 sm:px-6 lg:px-0 mx-auto transform -translate-y-20 md:-translate-y-32 z-10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 'calc(100% - 14%)' }}>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8">
            <h4 className="text-xl font-medium text-gray-800">Filter</h4>
            {filters.map(filter => (
                <button
                    key={filter.tag}
                    onClick={() => setActiveFilter(filter.tag)}
                    className={`text-lg font-medium pb-1 transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#84BFC7] after:to-[#FAAF40] after:transition-transform after:duration-300 after:ease-out
                        ${activeFilter === filter.tag ? 'text-gray-900 after:scale-x-100' : 'text-gray-500 hover:text-gray-900 after:scale-x-0'}`}
                >
                    {filter.name}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredPosts.map(post => (
                <PostCard key={post.id} post={post} onPostClick={onPostClick} />
            ))}
        </div>
      </div>
    </section>
  );
};

const News: React.FC<{ onPostClick?: (post: Post) => void }> = ({ onPostClick = () => {} }) => {
  return (
    <div className="bg-ig-off-white min-h-screen">
      {/* Header Section */}
      <section className="bg-ig-dark text-ig-off-white pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light mb-6" style={{ lineHeight: '0.9' }}>
              News & Insights
            </h1>
            <p className="text-xl md:text-2xl text-ig-off-white/80 font-light leading-relaxed">
              Stay informed with the latest developments in impact investing, 
              sustainable finance, and our ongoing mission to create positive change.
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <NewsSection onPostClick={onPostClick} />

      {/* Newsletter Section */}
      <Newsletter />
      
      {/* Footer
      <Footer /> */}
    </div>
  );
};

export default News;
