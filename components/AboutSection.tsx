import React, { useState } from 'react';

const TheoryOfChangeContent = () => (
    <div className="animate-fadeIn">
        <p className="text-base font-light leading-relaxed">
            In impact investing, a Theory of Change (ToC) isn't just a framework, it's a roadmap, and a shared vision of how we bring about meaningful change. At its core, a ToC seeks to outline the intricate steps, outcomes, and ultimate impacts an organization aspires to achieve. For iGravity, the ToC is the lens through which we connect purpose with action, ensuring that each initiative, each investment, and each partnership advances a sustainable future.
        </p>
    </div>
);

const WhyItMattersContent = () => (
    <div className="animate-fadeIn">
        <p className="text-base font-light leading-relaxed">
            At iGravity, the importance of a ToC goes beyond just a blueprint; it's foundational to our philosophy and reflects our commitment to impact. With the expanding scope of our work, our ToC not only guides us internally but also allows us to communicate our mission with clarity to clients, partners, and stakeholders. By defining the steps from input to impact, our ToC unifies our diverse activities, from advisory to direct investments, showing how each action converges to drive both social and environmental change.
        </p>
    </div>
);

const UpdatedTheoryContent = () => (
     <div className="animate-fadeIn">
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
                 <h2 className="font-serif text-4xl lg:text-4xl font-light leading-tight text-ig-dark">Our Updated Theory of Change: From Inputs to Impact</h2>
            </div>
            <div className="lg:w-2/3">
                <p className="text-base font-light leading-relaxed mb-6">Our refreshed ToC reflects a nuanced understanding of how finance can shape the future. It begins with Inputs—capital, expertise, innovation skills, and impact measurement. These inputs fuel our Activities: providing investment advisory, consulting, implementation services, direct investments, and strategic communication. From these, Outputs are generated, such as expanded financial solutions, enhanced capacity for sustainable growth, and increased awareness around impact investing.</p>
                <img src="https://igravity.net/wp-content/uploads/2025/07/arrow-hero.png" alt="arrow" className="w-3 h-auto ml-auto" />
            </div>
        </div>
    </div>
);

const AboutSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { title: "Understanding the Theory of Change", content: <TheoryOfChangeContent /> },
        { title: "Why Theory of Change Matters for iGravity", content: <WhyItMattersContent /> }
    ];

    return (
        <section className="bg-ig-dark-gray">
            {/* Desktop Tabs */}
            <div className="hidden md:block bg-ig-off-white p-[5%]">
                <div className="flex border-b border-gray-200 mb-8">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`py-4 px-6 text-left text-sm font-medium focus:outline-none transition-colors duration-300 relative ${activeTab === index ? 'text-ig-dark' : 'text-gray-500 hover:text-ig-dark'}` }
                        >
                            {tab.title}
                            {activeTab === index && <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-gradient-to-r from-ig-teal to-ig-teal"></span>}
                        </button>
                    ))}
                </div>
                <div>{tabs[activeTab].content}</div>
            </div>
            
            {/* Mobile Stacked */}
            <div className="md:hidden bg-ig-off-white p-8 space-y-12">
                <div>
                     <h2 className="font-serif text-3xl font-light leading-tight text-ig-dark mb-4">Understanding the Theory of Change</h2>
                     <TheoryOfChangeContent />
                </div>
                 <div>
                     <h2 className="font-serif text-3xl font-light leading-tight text-ig-dark mb-4">Why Theory of Change Matters for iGravity</h2>
                     <WhyItMattersContent />
                </div>
            </div>

            <div className="bg-white p-[5%]">
                 <UpdatedTheoryContent />
            </div>
        </section>
    );
};

export default AboutSection;
