import React, { useState } from 'react';
import type { Post } from '../types';
import Newsletter from './Newsletter';
import Footer from './Footer';

const postsData: Post[] = [
    { id: 1, categories: [{ name: "Investments", tag: "investments" }], title: "Why Emerging Markets Private Debt Is Key to Resilient Impact Portfolios in 2025", imageUrl: "https://igravity.net/wp-content/uploads/2025/09/EMPD-Artwork.png", excerpt: "The year 2024 served as a powerful reminder: the global financial landscape is in constant…", link: "#" },
    { id: 2, categories: [{ name: "Reports and Publications", tag: "reports-and-publications" }], title: "Refugee Investment Facility (RIF): 2024 Impact Report", imageUrl: "https://igravity.net/wp-content/uploads/2025/08/rif-wave-1-visual-scaled.webp", excerpt: "Both businesses and financial communities have long overlooked refugees - not for lack of potential,…", link: "#" },
    { id: 3, categories: [{ name: "Reports and Publications", tag: "reports-and-publications" }], title: "Balim Investments: 2024 Impact Report", imageUrl: "https://igravity.net/wp-content/uploads/2025/08/balim-visual-final.webp", excerpt: "In rural Africa, a large number of enterprises operate under challenging conditions while transforming lives,…", link: "#" },
    { id: 4, categories: [{ name: "Reports and Publications", tag: "reports-and-publications" }], title: "iGravity Investment Solutions: 2024 Financial and Impact Performance Report", imageUrl: "https://igravity.net/wp-content/uploads/2025/08/report-blog-visual.webp", excerpt: "We're thrilled to share our iGravity Investment Solutions: 2024 Financial and Impact Performance Report – a deep…", link: "#" },
    { id: 5, categories: [{ name: "Investments", tag: "investments" }], title: "Scaling Impact in Jordan's Agricultural Sector Through the Refugee Investment Facility", imageUrl: "https://igravity.net/wp-content/uploads/2025/08/ali-dates-1.webp", excerpt: "The Refugee Investment Facility (RIF) supports private sector-led solutions in forced displacement situations by providing technical assistance…", link: "#" },
    { id: 6, categories: [{ name: "Investments", tag: "investments" }], title: "Strengthening Uganda's Coffee Sector with Balim Investments", imageUrl: "https://igravity.net/wp-content/uploads/2025/08/mount-elgon-3.webp", excerpt: "Across Uganda's Mount Elgon region, smallholder farmers cultivate some of the world's finest Arabica coffee under dense…", link: "#" },
    { id: 7, categories: [{ name: "Investments", tag: "investments" }], title: "Expanding Access to Maternal Healthcare in Kenya", imageUrl: "https://igravity.net/wp-content/uploads/2025/08/jacaranda-sign-website.webp", excerpt: "Sub-Saharan Africa faces some of the most severe health challenges globally, particularly in maternal and…", link: "#" },
    { id: 8, categories: [{ name: "News", tag: "news" }], title: "Selected as a SIFI Innovator: Advancing Impact Finance for Global Goals", imageUrl: "https://igravity.net/wp-content/uploads/2025/08/img2.webp", excerpt: "iGravity and Helvetas are proud to be among the five impactful initiatives chosen in the third funding cycle…", link: "#" },
    { id: 9, categories: [{ name: "Impact Stories", tag: "impact-stories" }, { name: "Investments", tag: "investments" }], title: "Balim Investments Partners with Flow Uganda to Expand Financial Inclusion in Rural Areas", imageUrl: "https://igravity.net/wp-content/uploads/2025/08/pexels-kindelmedia-6775117.jpg", excerpt: "Flow Uganda, a leading fintech empowering mobile money agents across the country, is the latest impactful…", link: "#" },
    { id: 10, categories: [{ name: "Impact Stories", tag: "impact-stories" }, { name: "News", tag: "news" }], title: "Reimagining Impact: iGravity's New Theory of Change", imageUrl: "https://igravity.net/wp-content/uploads/2025/08/pexels-gabby-k-9487229.jpg", excerpt: "In impact investing, a Theory of Change (ToC) isn't just a framework—it's a roadmap, and…", link: "#" },
    { id: 11, categories: [{ name: "Events", tag: "events" }], title: "Latimpacto in Medellín Colombia 1st – 3rd Sept", imageUrl: "https://igravity.net/wp-content/uploads/2025/08/pexels-daniel-morales-2147564134-29745520.jpg", excerpt: "1st - 3rd September", link: "#" },
    { id: 12, categories: [{ name: "Events", tag: "events" }], title: "Building Bridges 2025 in Geneva 30 Sept – 2 Oct", imageUrl: "https://igravity.net/wp-content/uploads/2025/08/pexels-shottrotter-695342.jpg", excerpt: "Sep 30: Costs and Opportunities of Real Impact: What It Takes for Impact-First Investments to…", link: "#" },
    { id: 13, categories: [{ name: "Case Studies", tag: "case-studies" }], title: "Design of the Entrepeneur Support Organization's (ESOs) RBF pilot to enhance financial sustainability", imageUrl: "https://igravity.net/wp-content/uploads/2023/07/9.webp", excerpt: "iGravity, together with the Dutch Good Growth Fund designed a state-of-the-art RBF program, whereby the…", link: "#" },
    { id: 14, categories: [{ name: "Case Studies", tag: "case-studies" }], title: "Structuring Study of a Blended Finance Facility for the Near East Foundation", imageUrl: "https://igravity.net/wp-content/uploads/2023/07/3.webp", excerpt: "iGravity supports the Near East Foundation in designing and setting up of a blended finance…", link: "#" },
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
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Handle clicks for posts with IDs 1-12, 13 (ESO case study), and 14 (NEF case study)
    if ((post.id >= 1 && post.id <= 12) || post.id === 13 || post.id === 14) {
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
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default News;
