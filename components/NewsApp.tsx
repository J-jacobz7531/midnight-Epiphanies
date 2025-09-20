import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import News from './News';
import PostPage from './PostPage';
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
    <div className="bg-[#f2f2f0] text-[#141d21]">
      <Header />
      <main id="ajax-content-wrap">
        {selectedPost ? (
          <div>
            <div className="container mx-auto px-6 xl:px-12 py-4">
              <button
                onClick={handleBackToNews}
                className="flex items-center text-[#84bfc7] hover:text-[#faaf40] transition-colors duration-300 mb-6"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to News
              </button>
            </div>
            <PostPage post={selectedPost} />
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
