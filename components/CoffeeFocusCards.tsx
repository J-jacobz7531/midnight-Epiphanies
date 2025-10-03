import React from 'react';
import { useNavigate } from 'react-router-dom';
import FocusCards from './ui/focus-cards';
import type { CoffeeVariety } from '../types';

interface CoffeeFocusCardsProps {
  coffeeData: CoffeeVariety[];
}

const CoffeeFocusCards: React.FC<CoffeeFocusCardsProps> = ({ coffeeData }) => {
  const navigate = useNavigate();

  // Transform coffee data to match FocusCards format
  const cards = coffeeData.map((coffee) => ({
    title: coffee.name,
    src: coffee.imageUrl,
  }));

  const handleCardClick = () => {
    navigate('/contact');
  };

  return (
    <div className="w-full" onClick={handleCardClick}>
      <FocusCards cards={cards} />
    </div>
  );
};

export default CoffeeFocusCards;
