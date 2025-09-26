import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import News from './News';
import PostPage from './PostPage';
import CaseStudyESO from './CaseStudyESO';
import CaseStudyNEF from './CaseStudyNEF';
import type { Post } from '../types';

const NewsApp: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleBackToNews = () => {
    setSelectedPost(null);
  };

  return (
    <div className="bg-ig-off-white text-[#141d21]">
      <Header />
      <main id="ajax-content-wrap">
        {selectedPost ? (
          <div className="bg-ig-off-white min-h-screen">
            {selectedPost.id === 13 ? (
              // Case Study ESO page - uses its own header structure
              <div>
                <div className="absolute top-20 left-6 lg:left-12 z-50">
                  <button
                    onClick={handleBackToNews}
                    className="flex items-center text-[#84bfc7] hover:text-[#faaf40] transition-colors duration-300 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to News
                  </button>
                </div>
                <CaseStudyESO />
              </div>
            ) : selectedPost.id === 14 ? (
              // Case Study NEF page - uses its own header structure
              <div>
                <div className="absolute top-20 left-6 lg:left-12 z-50">
                  <button
                    onClick={handleBackToNews}
                    className="flex items-center text-[#84bfc7] hover:text-[#faaf40] transition-colors duration-300 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to News
                  </button>
                </div>
                <CaseStudyNEF />
              </div>
            ) : (
              // Regular post pages with consistent header
              <div>
                {/* Header Section - consistent with News page */}
                <section className="bg-ig-dark text-ig-off-white pt-32 pb-16">
                  <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl">
                      <button
                        onClick={handleBackToNews}
                        className="flex items-center text-[#84bfc7] hover:text-[#faaf40] transition-colors duration-300 mb-6"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to News
                      </button>
                      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6" style={{ lineHeight: '0.9' }}>
                        {selectedPost.title}
                      </h1>
                      <p className="text-lg md:text-xl text-ig-off-white/80 font-light leading-relaxed">
                        {selectedPost.excerpt}
                      </p>
                    </div>
                  </div>
                </section>
                <PostPage post={selectedPost} />
              </div>
            )}
          </div>
        ) : (
          <News onPostClick={handlePostClick} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default NewsApp;
