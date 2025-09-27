
import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <section className="bg-ig-off-white text-ig-dark-gray py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center">
                    <div className="md:col-span-1">
                        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ig-dark" style={{ lineHeight: '1.1' }}>
                            About Ophel
                        </h2>
                    </div>
                    <div className="md:col-span-2">
                    <p className="font-sans text-lg md:text-xl font-extralight leading-relaxed mb-8 text-ig-dark-gray">
                        We are a global leader in natural food and beverage ingredients, sourcing from 
                        over 300 farmers and operating in 5 countries impacting more than 500 families. 
                        Our portfolio spans cocoa, coffee, sesame, vanilla, and maize, with 10+ manufacturing 
                        facilities worldwide. Beyond business, we are pioneers at heart— 
                        committed to making sustainability real for our customers by empowering farmers, 
                        building thriving communities, driving climate action, and regenerating the living world. 
                        </p>
                        <div className="overflow-hidden">
                            <img 
                                src="/farmers-working.jpg" 
                                alt="Farmers working with grain harvest in Africa" 
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
