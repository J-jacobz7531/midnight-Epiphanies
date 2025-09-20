import React from 'react';

interface OffCanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const OffCanvasMenu: React.FC<OffCanvasMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`fixed inset-0 bg-black bg-opacity-60 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose}></div>
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-ig-dark text-ig-light-gray shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="p-2 text-white">
            <span className="sr-only">Close menu</span>
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-6 space-y-4 font-sans text-xl">
          <a href="#" className="py-2 hover:text-white transition-colors">Who We Are</a>
          <a href="#" className="py-2 hover:text-white transition-colors">What We Do</a>
          <a href="#" className="py-2 hover:text-white transition-colors">Impact</a>
          <a href="#" className="py-2 hover:text-white transition-colors">News</a>
          <a href="#" className="py-2 hover:text-white transition-colors">Contact</a>
          <a href="#" className="py-2 hover:text-white transition-colors">Careers</a>
          <a href="https://ch.linkedin.com/company/igravity" target="_blank" rel="noopener noreferrer" className="py-2 text-ig-off-white/75 hover:text-white transition-colors pt-8">
            <svg className="w-7 h-7 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
            LinkedIn
          </a>
        </nav>
      </div>
    </>
  );
};

export default OffCanvasMenu;
