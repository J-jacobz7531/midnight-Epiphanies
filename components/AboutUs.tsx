
import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <section className="bg-ig-off-white text-ig-dark-gray py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center">
                    <div className="md:col-span-1">
                        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ig-dark" style={{ lineHeight: '1.1' }}>
                            About Us
                        </h2>
                    </div>
                    <div className="md:col-span-2">
                        <p className="font-sans text-lg md:text-xl font-extralight leading-relaxed mb-8 text-ig-dark-gray">
                            We are a dedicated impact investment management and advisory firm, committed to building and managing financial solutions that create tangible impact for philanthropic partners and institutional investors.
                        </p>
                        <div className="overflow-hidden">
                            <img 
                                src="https://igravity.net/wp-content/uploads/2025/08/GRVTY-199-1.webp" 
                                alt="Team collaborating" 
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
