import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavItem {
  name: string;
  href: string;
  subMenu?: { name: string; href: string }[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const SmartNavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ href, children, className, onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname === href) {
      window.location.reload();
    } else {
      navigate(href);
    }
    
    onClick?.();
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navItems }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Mobile Menu */}
      <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-ig-dark z-50 transform transition-transform duration-300 ease-in-out lg:hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-ig-dark-gray">
            <img 
              src="/OphelHoldings.png" 
              alt="Ophel Holdings" 
              className="h-8 w-auto"
            />
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="px-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.subMenu ? (
                    <div>
                      <button
                        onClick={() => toggleExpanded(item.name)}
                        className="flex items-center justify-between w-full text-left py-3 px-4 text-white hover:bg-ig-dark-gray rounded-lg transition-colors"
                      >
                        <span className="font-medium">{item.name}</span>
                        <svg 
                          className={`w-4 h-4 transition-transform ${expandedItems.includes(item.name) ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {expandedItems.includes(item.name) && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.subMenu.map((subItem) => (
                            subItem.href.startsWith('/') ? (
                              <SmartNavLink
                                key={subItem.name}
                                href={subItem.href}
                                onClick={onClose}
                                className="block py-2 px-4 text-gray-300 hover:text-white hover:bg-ig-dark-gray rounded-lg transition-colors"
                              >
                                {subItem.name}
                              </SmartNavLink>
                            ) : (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                onClick={onClose}
                                className="block py-2 px-4 text-gray-300 hover:text-white hover:bg-ig-dark-gray rounded-lg transition-colors"
                              >
                                {subItem.name}
                              </a>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    item.href.startsWith('/') ? (
                      <SmartNavLink
                        key={item.name}
                        href={item.href}
                        onClick={onClose}
                        className="block py-3 px-4 text-white hover:bg-ig-dark-gray rounded-lg transition-colors font-medium"
                      >
                        {item.name}
                      </SmartNavLink>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={onClose}
                        className="block py-3 px-4 text-white hover:bg-ig-dark-gray rounded-lg transition-colors font-medium"
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-ig-dark-gray">
            <a 
              href="https://www.linkedin.com/in/jordan-muhwezi-8aaa5637a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3 px-4 bg-ig-dark-gray hover:bg-gray-600 rounded-lg transition-colors text-white"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
