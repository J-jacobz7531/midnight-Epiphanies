
import React from 'react';
import { ArrowRightIcon } from './Icons';

const RealChange: React.FC = () => {
    return (
        <section className="bg-ig-dark text-ig-off-white pt-16 md:pt-24 pb-48 md:pb-64">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                     <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light max-w-4xl mx-auto" style={{ lineHeight: '1.2' }}>
                        Real change happens when finance meets purpose
                    </h2>
                </div>
                
                <div className="relative h-[60vh] min-h-[450px] w-full flex flex-col justify-center items-center text-center text-white overflow-hidden p-8">
                    <img 
                        src="https://igravity.net/wp-content/uploads/2023/07/9.webp" 
                        alt="Case Study" 
                        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
                    <div className="relative z-20">
                        <a href="#" className="font-sans text-sm font-medium tracking-wide uppercase mb-4 inline-block">Case Studies</a>
                        <h3 className="font-serif text-3xl md:text-4xl font-light max-w-2xl mx-auto leading-tight mb-8">
                            <a href="#">
                                Design of the Entrepeneur Support Organization’s (ESOs) RBF pilot to enhance financial sustainability
                            </a>
                        </h3>
                         <button className="bg-ig-accent-teal text-ig-dark font-sans font-medium text-sm py-3 px-6 inline-flex items-center transition-opacity hover:opacity-90">
                            Read Article <ArrowRightIcon className="ml-2 w-4 h-4" />
                         </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RealChange;
