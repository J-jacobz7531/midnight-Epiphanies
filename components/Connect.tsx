
import React from 'react';

const Connect: React.FC = () => {
    return (
        <section className="bg-transparent -mt-32 md:-mt-48 relative z-20">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="bg-ig-dark-gray text-ig-off-white p-8 md:p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight">
                                See how our work is driving impact. Explore our latest case studies and success stories.
                            </h2>
                        </div>
                        <div className="text-right">
                            <a href="#" className="inline-flex items-center font-sans font-medium text-sm text-ig-off-white group/link">
                                Learn more
                                <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2" aria-hidden="true" width="20px" height="25px" viewBox="0 0 50 80" xmlSpace="preserve">
                                    <polyline stroke="currentColor" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" points="0, 0 45, 40 0, 80" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
