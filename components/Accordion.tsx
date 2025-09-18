import React, { useState } from 'react';
import { PlusIcon } from './Icons';

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-8"
      >
        <h3 className="font-serif text-2xl md:text-3xl lg:text-5xl font-light text-white">
          {title}
        </h3>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}` }>
          <PlusIcon />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-base font-light whitespace-pre-line text-white/80">
          {content}
        </p>
      </div>
    </div>
  );
};

interface AccordionProps {
    items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    return (
        <div className="w-full">
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
}

export default Accordion;
