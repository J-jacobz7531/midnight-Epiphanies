
import React, { useState, useEffect } from 'react';

const rotatingWords = [
    'design and manage impact investment mandates',
    'provide access to unique investment opportunities',
    'support high impact enterprises'
];

const Hero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % rotatingWords.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="https://igravity.net/wp-content/uploads/2025/08/hero-home.mp4"
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10"></div>
            
            <div className="relative z-20 text-center px-4 -mt-24">
                <div className="flex flex-col md:flex-row justify-center items-center gap-x-6">
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-ig-off-white">We</h1>
                    <div className="relative h-20 md:h-28 lg:h-36 overflow-hidden w-full md:w-auto text-left">
                        {rotatingWords.map((word, index) => (
                            <h1
                                key={index}
                                className={`font-serif text-4xl md:text-6xl lg:text-7xl font-light absolute w-full max-w-xl transition-all duration-1000 ease-in-out ${
                                    index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                                }`}
                                style={{ transitionDelay: index === currentIndex ? '300ms' : '0ms' }}
                            >
                                {word}
                            </h1>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
