import React from 'react';
import type { CoffeeVariety } from '../types';

interface CoffeeCardProps {
  coffee: CoffeeVariety;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col items-center text-center">
      <img 
        src={coffee.imageUrl} 
        alt={coffee.name} 
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="font-bold text-lg text-stone-800">{coffee.name}</h3>
      <p className="text-sm text-gray-500 mb-2">({coffee.type})</p>
      <p className="text-sm text-gray-600 flex-grow mb-4">{coffee.notes}</p>
      <button className="mt-auto bg-[#b48c5a] text-white font-bold px-8 py-2 rounded-md hover:bg-[#a37d4f] transition-colors duration-300">
        Make Inquiries
      </button>
    </div>
  );
};

export default CoffeeCard;
