import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
}

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={`w-5 h-5 transition-transform duration-300 ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-ig-dark group-hover:text-ig-accent-teal transition-colors duration-200">
          {question}
        </h3>
        <ChevronDownIcon className={`text-ig-accent-teal flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <div className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
