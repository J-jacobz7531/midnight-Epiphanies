import React, { useState } from 'react';

interface Card {
  src: string;
  title: string;
}

interface FocusCardsProps {
  cards: Card[];
}

const FocusCards: React.FC<FocusCardsProps> = ({ cards }) => {
  const [active, setActive] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActive(index);
  };

  const handleMouseLeave = () => {
    setActive(null);
  };

  return (
    <div 
      className="w-full h-[450px] flex items-center justify-center gap-4"
      onMouseLeave={handleMouseLeave}
      role="list"
      aria-label="Our Coffee Varieties"
    >
      {cards.map((card, index) => (
        <div
          key={card.title}
          onMouseEnter={() => handleMouseEnter(index)}
          className="relative h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out cursor-pointer"
          style={{
            flex: active === index ? '5' : '1',
            filter: active !== null && active !== index ? 'grayscale(1)' : 'none',
          }}
          role="listitem"
        >
          <img
            src={card.src}
            alt={card.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 
              className="text-white font-serif font-bold transition-all duration-500 whitespace-nowrap"
              style={{
                fontSize: active === index ? '2rem' : '1.25rem',
                opacity: active === index ? 1 : 0.7,
              }}
            >
              {card.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FocusCards;
