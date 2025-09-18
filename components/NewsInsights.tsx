
import React from 'react';
import { ArrowRightIcon } from './Icons';

interface Post {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    href: string;
}

const posts: Post[] = [
    {
        id: 1,
        title: 'Why Emerging Markets Private Debt Is Key to Resilient Impact Portfolios in 2025',
        category: 'Investments',
        imageUrl: 'https://igravity.net/wp-content/uploads/2025/09/EMPD-Artwork.png',
        href: '#'
    },
    {
        id: 2,
        title: 'Refugee Investment Facility (RIF): 2024 Impact Report',
        category: 'Reports and Publications',
        imageUrl: 'https://igravity.net/wp-content/uploads/2025/08/rif-wave-1-visual-scaled.webp',
        href: '#'
    },
    {
        id: 3,
        title: 'Balim Investments: 2024 Impact Report',
        category: 'Reports and Publications',
        imageUrl: 'https://igravity.net/wp-content/uploads/2025/08/balim-visual-final.webp',
        href: '#'
    }
];

const NewsCard: React.FC<{ post: Post }> = ({ post }) => (
    <div className="relative h-[40vh] min-h-[350px] w-full flex flex-col justify-end text-white overflow-hidden group cursor-pointer">
        <img src={post.imageUrl} alt={post.title} className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
        <div className="relative z-20 p-6">
            <a href="#" className="text-sm font-medium tracking-wide underline decoration-1 underline-offset-4 mb-2 inline-block">{post.category}</a>
            <h4 className="font-serif text-xl lg:text-2xl font-light leading-tight">
                <a href={post.href}>{post.title}</a>
            </h4>
        </div>
    </div>
);


const NewsInsights: React.FC = () => {
    return (
        <section className="bg-ig-dark-gray text-ig-off-white py-16 md:py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <h2 className="font-serif text-5xl md:text-6xl font-light mb-4 md:mb-0" style={{ lineHeight: '1.1' }}>
                        News & Insights
                    </h2>
                     <a href="#" className="inline-flex items-center font-sans font-medium text-sm text-ig-off-white group/link self-end md:self-center">
                        View all
                        <ArrowRightIcon className="ml-2 transition-transform duration-300 group-hover/link:translate-x-2" />
                    </a>
                </div>
                 <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                    {['Impact Stories', 'Investments', 'Reports and Publications'].map(filter => (
                        <button key={filter} className="font-sans font-medium text-sm text-ig-off-white/70 hover:text-ig-off-white underline decoration-1 underline-offset-4">
                            {filter}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                   {posts.map(post => <NewsCard key={post.id} post={post} />)}
                </div>
            </div>
        </section>
    );
};

export default NewsInsights;
