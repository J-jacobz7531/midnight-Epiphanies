'use client'; // needed if you’re on Next.js App Router

import React, { useState, useEffect } from 'react';

const rotatingWords = [
  'design and manage impact investment mandates',
  'provide access to unique investment opportunities',
  'support high impact enterprises'
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % rotatingWords.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://igravity.net/wp-content/uploads/2025/08/hero-home.mp4"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />

      {/* Foreground */}
      <div className="relative z-20 text-center px-4 -mt-24">
        <div className="flex flex-wrap justify-center items-baseline gap-x-3">
          {/* Static “We” */}
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light shrink-0">
            We
          </h1>

          {/* Rotating word */}
          <div className="relative flex-1 min-w-[200px] text-left">
            <h1
              key={currentIndex} // remount triggers animation each change
              className="font-serif text-3xl md:text-5xl lg:text-6xl font-light
                         opacity-0 translate-y-2
                         transition-all duration-700 ease-out
                         [animation:fadeInUp_.6s_ease_forwards]"
            >
              {rotatingWords[currentIndex]}
            </h1>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(0.5rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
