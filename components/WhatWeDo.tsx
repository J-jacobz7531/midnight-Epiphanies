
import React from 'react';
import { ArrowRightIcon } from './Icons';

const WhatWeDoCard: React.FC<{ videoSrc: string; title: string; description: string; href: string }> = ({ videoSrc, title, description, href }) => {
    return (
        <div className="relative h-[70vh] min-h-[500px] w-full flex flex-col justify-end p-8 text-white overflow-hidden group">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                src={videoSrc}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-ig-dark via-ig-dark/60 to-transparent z-10"></div>
            <div className="relative z-20">
                <h3 className="font-serif text-5xl lg:text-6xl font-light mb-4">{title}</h3>
                <p className="font-sans text-base lg:text-lg font-extralight leading-relaxed mb-6 max-w-md">
                    {description}
                </p>
                <a href={href} className="inline-flex items-center font-sans font-medium text-sm text-ig-off-white group/link">
                    Learn more
                    <ArrowRightIcon className="ml-2 transition-transform duration-300 group-hover/link:translate-x-2" />
                </a>
            </div>
        </div>
    );
};

const WhatWeDo: React.FC = () => {
    return (
        <section className="bg-ig-dark text-ig-off-white py-16 md:py-24">
            <div className="container mx-auto px-6 lg:px-12 text-center mb-12">
                <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light" style={{ lineHeight: '1.1' }}>
                    What We Do
                </h2>
            </div>
            <div className="flex flex-col md:flex-row">
                <WhatWeDoCard 
                    videoSrc="https://igravity.net/wp-content/uploads/2025/08/investments-video.mp4"
                    title="Investments"
                    description="We manage private debt portfolios in emerging markets, deploying capital to local businesses that drive positive social and/or environmental outcomes."
                    href="#"
                />
                <WhatWeDoCard 
                    videoSrc="https://igravity.net/wp-content/uploads/2025/08/advisory.mp4"
                    title="Advisory"
                    description="We work with development partners in the exploration, design, implementation, and evaluation of innovative finance structures and impact management systems."
                    href="#"
                />
            </div>
        </section>
    );
};

export default WhatWeDo;
