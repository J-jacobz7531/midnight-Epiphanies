import React, { useState, useEffect } from 'react';
import Footer from './Footer';

interface Tab {
  id: string;
  title: string;
  heading: string;
  subheading?: string;
  items: { icon: string; text: string }[];
}

interface Slide {
  id: number;
  image: string;
  category: string;
  title: string;
  link: string;
}

interface FocusArea {
  icon: React.ReactNode;
  title: string;
}

const tabsData: Tab[] = [
  {
    id: 'guidance',
    title: 'Strategic Guidance',
    heading: 'Strategic Guidance for Impact Investors & Funders',
    items: [
      { icon: 'https://igravity.net/wp-content/uploads/2025/07/bullet-1.png', text: 'We support impact investors and development partners in building and executing impact investment strategies that align with their organizational missions. Our approach enables sustainable development and drives positive change in the communities we serve.' },
    ]
  },
  {
    id: 'design',
    title: 'Design & Implementation',
    heading: 'Design & Implementation of Financing Structures',
    subheading: 'We assess, design, structure, and implement innovative finance, including:',
    items: [
      { icon: 'https://igravity.net/wp-content/uploads/2025/07/bullet-2.png', text: 'Results-based finance mechanisms such as impact bonds, outcomes-based payments, and social impact incentives.' },
      { icon: 'https://igravity.net/wp-content/uploads/2025/07/bullet-2.png', text: 'Impact investment facilities and funds, offering products like loans and impact-linked loans.' },
    ]
  },
  {
    id: 'impact',
    title: 'Impact Advisory',
    heading: 'Impact Advisory',
    subheading: 'We help organizations define impact priorities and goals, and integrate impact throughout the investment process and governance models, including:',
    items: [
      { icon: 'https://igravity.net/wp-content/uploads/2025/07/bullet-3.png', text: 'We develop robust impact measurement frameworks, manage reporting, and conduct evaluation and verification processes to ensure that impact is effectively defined, measured, managed and reported.' },
      { icon: 'https://igravity.net/wp-content/uploads/2025/07/bullet-3.png', text: 'We provide impact TA to enterprises and funds.' },
      { icon: 'https://igravity.net/wp-content/uploads/2025/07/bullet-3.png', text: 'We act as impact managers or advisors for third-party funds.' },
    ]
  }
];

const slidesData: Slide[] = [
  { id: 1, image: 'https://igravity.net/wp-content/uploads/2023/07/9.webp', category: 'Case Studies', title: "Design of the Entrepeneur Support Organization's (ESOs) RBF pilot to enhance financial sustainability", link: '#' },
  { id: 2, image: 'https://igravity.net/wp-content/uploads/2023/07/3.webp', category: 'Case Studies', title: 'Structuring Study of a Blended Finance Facility for the Near East Foundation', link: '#' },
];

const focusAreas: FocusArea[] = [
    { icon: <div className="w-8 h-8 bg-ig-teal rounded-full flex items-center justify-center text-white text-sm font-bold">E</div>, title: 'Education & Skills Development' },
    { icon: <div className="w-8 h-8 bg-ig-teal rounded-full flex items-center justify-center text-white text-sm font-bold">F</div>, title: 'Financial Inclusion' },
    { icon: <div className="w-8 h-8 bg-ig-teal rounded-full flex items-center justify-center text-white text-sm font-bold">C</div>, title: 'Climate Change Mitigation & Adaptation' },
    { icon: <div className="w-8 h-8 bg-ig-teal rounded-full flex items-center justify-center text-white text-sm font-bold">M</div>, title: 'Migration & forced displacement' },
    { icon: <div className="w-8 h-8 bg-ig-teal rounded-full flex items-center justify-center text-white text-sm font-bold">H</div>, title: 'Affordable Housing' },
    { icon: <div className="w-8 h-8 bg-ig-teal rounded-full flex items-center justify-center text-white text-sm font-bold">S</div>, title: 'SME Finance' },
    { icon: <div className="w-8 h-8 bg-ig-teal rounded-full flex items-center justify-center text-white text-sm font-bold">A</div>, title: 'Sustainable Agriculture & Food Systems' }
];

const ProductsContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-ig-off-white text-ig-dark">
      {/* Hero Section */}
      <section className="relative bg-ig-dark text-ig-off-white pt-48 pb-80 lg:pt-56 lg:pb-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-left">
            <p className="font-sans text-lg md:text-xl text-ig-off-white mb-4">Advisory</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ig-teal font-light leading-tight">
              Strategic Guidance For Impact
            </h1>
            <p className="mt-8 text-lg md:text-xl max-w-xl text-ig-off-white font-light leading-relaxed">
              In a global environment, where already limited donor funding and aid is being cut, philanthropic organizations are looking at new approaches in development cooperation, with the aim to mobilize private capital for the SDGs and spend public funding more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="relative bg-ig-dark-gray z-20">
        <div className="container mx-auto px-6 lg:px-20 -translate-y-48">
          <div className="bg-ig-off-white p-8 md:p-12 lg:p-16">
            {/* Desktop Tabs */}
            <div className="hidden md:block">
              <div className="border-b border-gray-200 mb-8">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  {tabsData.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-lg relative transition-colors duration-300 ${activeTab === tab.id ? 'border-ig-teal text-ig-dark' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                      {tab.title}
                      <span className={`absolute bottom-[-1px] left-0 h-[2px] bg-ig-teal transition-transform duration-500 ease-out ${activeTab === tab.id ? 'scale-x-100' : 'scale-x-0'} origin-left`}></span>
                    </button>
                  ))}
                </nav>
              </div>
              <div>
                {tabsData.map(tab => (
                  <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-1/4">
                        <h3 className="font-serif text-3xl text-ig-dark leading-snug">{tab.heading}</h3>
                      </div>
                      <div className="lg:w-3/4 space-y-4">
                        {tab.subheading && <p className="text-gray-600 text-lg">{tab.subheading}</p>}
                        {tab.items.map((item, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <img src={item.icon} alt="" className="w-6 h-6 mt-1" />
                            <p className="text-base text-gray-700 font-light flex-1">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Mobile Accordion */}
            <div className="md:hidden space-y-8">
              {tabsData.map(tab => (
                <div key={tab.id} className="border-b border-gray-200 pb-6">
                  <h3 className="font-serif text-2xl text-ig-dark mb-4">{tab.heading}</h3>
                  <div className="space-y-4">
                    {tab.subheading && <p className="text-gray-600">{tab.subheading}</p>}
                    {tab.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <img src={item.icon} alt="" className="w-5 h-5 mt-1" />
                        <p className="text-sm text-gray-700 font-light flex-1">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="relative bg-ig-dark text-ig-off-white z-20 pt-0 pb-16 md:pb-24 -mt-48">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="font-serif text-5xl md:text-6xl mb-12">Focus Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-ig-teal flex-shrink-0">{area.icon}</div>
                <h4 className="text-lg font-medium">{area.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Focus Section */}
      <section className="bg-ig-dark text-ig-off-white py-16 md:py-24">
         <div className="container mx-auto px-6 lg:px-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/3 space-y-8">
                    <h2 className="font-serif text-5xl md:text-6xl">Geographic Focus</h2>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-ig-teal"></div>
                        <h6 className="text-lg">Sub-Saharan Africa</h6>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-ig-teal"></div>
                        <h6 className="text-lg">MENA</h6>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-ig-teal"></div>
                        <h6 className="text-lg">Latin America</h6>
                      </div>
                    </div>
                </div>
                <div className="lg:w-2/3">
                    <img src="https://igravity.net/wp-content/uploads/2025/08/map3.png" alt="World Map" className="w-full h-auto" />
                </div>
            </div>
         </div>
      </section>

      {/* Partnering Section */}
      <section className="bg-ig-off-white text-ig-dark py-24 md:py-40">
        <div className="container mx-auto px-6 lg:px-20">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-5xl mx-auto text-center">
            Partnering with leading investors, foundations, and development institutions to drive systemic change.
            </h2>
        </div>
      </section>

      {/* Collaborations Slider Section */}
      <section className="relative bg-ig-off-white z-30">
        <div className="container mx-auto px-6 lg:px-20 -translate-y-48">
          <div className="bg-ig-dark p-8 md:p-12 lg:p-16 text-ig-off-white">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">Snapshots Of Successful Collaborations</h2>
            <div className="relative h-[600px] overflow-hidden">
              {slidesData.map((slide, index) => (
                <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-3/4">
                    <p className="text-sm uppercase tracking-widest mb-2">{slide.category}</p>
                    <a href={slide.link} className="block font-serif text-2xl md:text-4xl hover:underline">{slide.title}</a>
                  </div>
                </div>
              ))}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button onClick={() => setCurrentSlide(prev => (prev === 0 ? slidesData.length - 1 : prev - 1))} className="w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-colors">&lt;</button>
                <button onClick={() => setCurrentSlide(prev => (prev === slidesData.length - 1 ? 0 : prev + 1))} className="w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-colors">&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA & Contact */}
       <section className="relative bg-ig-off-white z-30 -mt-48 pb-12">
        <div className="container mx-auto px-6 lg:px-20">
            <div className="relative bg-ig-dark text-ig-off-white p-8 md:p-12 lg:p-16 -translate-y-24">
                 <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                     <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl max-w-3xl leading-tight">See how our solutions and collaborations are driving impact. Explore our latest insights and success stories.</h3>
                     <a href="#" className="group flex-shrink-0 text-lg font-medium text-ig-off-white hover:text-ig-teal transition-colors duration-300 flex items-center gap-3">
                        Learn more
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                     </a>
                 </div>
            </div>

            <div className="relative bg-ig-off-white text-center p-8 -mt-24 md:-mt-40 z-10 mx-auto max-w-lg">
                <div className="flex flex-col items-center -translate-y-32">
                    <h4 className="font-serif text-4xl mb-6 text-ig-dark">Contact</h4>
                    <img src="https://igravity.net/wp-content/uploads/2025/09/Lucas.jpg" alt="Lucas Tschan" className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg mb-6" />
                    <h5 className="font-serif text-3xl text-ig-dark">Lucas Tschan</h5>
                    <p className="text-gray-500 mb-4">Head of Advisory</p>
                    <a href="mailto:lucas.tschan@igravity.net" className="text-ig-teal hover:underline">lucas.tschan@igravity.net</a>
                </div>
            </div>
        </div>
       </section>

       <Footer />
    </div>
  );
};

export default ProductsContent;
