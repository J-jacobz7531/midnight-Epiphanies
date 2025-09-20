
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { 
    name: 'Who We Are', 
    href: '#',
    subMenu: [
      { name: 'Our History', href: '/our-history' },
      { name: 'People', href: '/people' }
    ]
  },

  { name: 'What We Do', 
    href: '#',
    subMenu: [
      { name: 'Investments', href: '/investments' },
      { name: 'Products', href: '/products' }
    ] },

  { name: 'Impact', href: '/impact' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '#' },
];

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white opacity-75 hover:opacity-100 transition-opacity">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg className={`w-4 h-4 transition-transform duration-300 ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);


const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-ig-dark shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center h-24 md:h-32">
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <img className="h-12 md:h-16 w-auto" src="https://igravity.net/wp-content/uploads/2025/07/logo.png" alt="iGravity logo" />
                        </Link>
                    </div>

                    <nav className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            item.subMenu ? (
                                <div key={item.name} className="relative group">
                                    <a href={item.href} onClick={(e) => e.preventDefault()} className="text-white font-medium text-sm tracking-tight opacity-75 hover:opacity-100 transition-opacity uppercase font-sans flex items-center cursor-default" aria-haspopup="true">
                                        {item.name}
                                        <ChevronDownIcon className="ml-1.5 group-hover:rotate-180" />
                                    </a>
                                    <div className="absolute top-full left-0 mt-4 w-56 bg-ig-dark shadow-lg rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0" role="menu">
                                        {item.subMenu.map((subItem) => (
                                            subItem.href.startsWith('/') ? (
                                                <Link key={subItem.name} to={subItem.href} className="block w-full text-left px-4 py-2 text-sm text-white opacity-75 hover:opacity-100 hover:bg-ig-dark-gray transition-colors" role="menuitem">
                                                    {subItem.name}
                                                </Link>
                                            ) : (
                                                <a key={subItem.name} href={subItem.href} className="block w-full text-left px-4 py-2 text-sm text-white opacity-75 hover:opacity-100 hover:bg-ig-dark-gray transition-colors" role="menuitem">
                                                    {subItem.name}
                                                </a>
                                            )
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                item.href.startsWith('/') ? (
                                    <Link key={item.name} to={item.href} className="text-white font-medium text-sm tracking-tight opacity-75 hover:opacity-100 transition-opacity uppercase font-sans">
                                        {item.name}
                                    </Link>
                                ) : (
                                    <a key={item.name} href={item.href} className="text-white font-medium text-sm tracking-tight opacity-75 hover:opacity-100 transition-opacity uppercase font-sans">
                                        {item.name}
                                    </a>
                                )
                            )
                        ))}
                    </nav>
                    
                    <div className="hidden lg:block">
                        <a href="https://ch.linkedin.com/company/igravity" target="_blank" rel="noopener noreferrer">
                           <LinkedInIcon />
                        </a>
                    </div>

                    <div className="lg:hidden">
                        <button className="text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
