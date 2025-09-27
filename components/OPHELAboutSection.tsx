import React, { useState } from 'react';
import { ophelData, getStrategyPillars } from '../data/ophel-data';

const StrategyFoundationContent = () => (
    <div className="animate-fadeIn">
        <p className="text-base font-light leading-relaxed mb-6">
            Our strategy is built on a foundation of <strong>supply chain excellence</strong>. We believe that sustainable transformation 
            begins with transparent, traceable, and responsible sourcing practices that benefit all stakeholders in our value chain.
        </p>
        <p className="text-base font-light leading-relaxed">
            Through our comprehensive approach, we {ophelData.strategy.objective.toLowerCase()}, creating 
            measurable value for farmers, communities, customers, and the environment.
        </p>
    </div>
);

const StrategyPillarsContent = () => {
    const pillars = getStrategyPillars();
    
    return (
        <div className="animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-8">
                {pillars.map((pillar, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold text-green-700 mb-4">{pillar.title}</h3>
                        <div className="space-y-3">
                            {pillar.title === 'Prosperous farmers' && 'targets' in pillar.data && (
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Current Status:</p>
                                    <ul className="text-sm space-y-1">
                                        <li>• {(pillar.data as any).targets.current_status.livelihoods_households_in_pilots} households in pilots</li>
                                        <li>• {(pillar.data as any).targets.current_status.women_farmers_supported} women farmers supported</li>
                                        <li>• {(pillar.data as any).targets.current_status.youth_supported} youth supported</li>
                                    </ul>
                                </div>
                            )}
                            {pillar.title === 'Thriving communities' && 'focus_areas' in pillar.data && (
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Focus Areas:</p>
                                    <ul className="text-sm space-y-1">
                                        {((pillar.data as any).focus_areas as string[]).slice(0, 3).map((area: string, i: number) => (
                                            <li key={i}>• {area.split('(')[0].trim()}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {pillar.title === 'Climate action' && 'goals' in pillar.data && (
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Reduction Goals:</p>
                                    <ul className="text-sm space-y-1">
                                        <li>• {(pillar.data as any).goals.scope1_2_reduction_percent_min}% reduction in Scope 1 & 2 emissions</li>
                                        <li>• {(pillar.data as any).goals.scope3_reduction_percent_min}% reduction in Scope 3 emissions</li>
                                    </ul>
                                </div>
                            )}
                            {pillar.title === 'Regenerating the living world' && 'targets' in pillar.data && (
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Current Progress:</p>
                                    <ul className="text-sm space-y-1">
                                        <li>• {((pillar.data as any).targets.current_status.regenerative_agriculture_hectares).toLocaleString()} hectares under regenerative agriculture</li>
                                        <li>• {((pillar.data as any).targets.current_status.native_trees_distributed_cumulative).toLocaleString()} native trees distributed</li>
                                        <li>• {(pillar.data as any).targets.current_status.living_landscape_partnerships} living landscape partnership</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const UgandaCommitmentContent = () => (
    <div className="animate-fadeIn">
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
                <h2 className="font-serif text-4xl lg:text-4xl font-light leading-tight text-gray-900">
                    Our Commitment to Uganda
                </h2>
            </div>
            <div className="lg:w-2/3">
                <p className="text-base font-light leading-relaxed mb-6">
                    {ophelData.uganda_commitment.approach}. Our focus in Uganda centers on three key themes:
                </p>
                <div className="space-y-4">
                    {ophelData.uganda_commitment.themes.map((theme, index) => (
                        <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-base font-light">{theme}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const OPHELAboutSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { title: "Our Strategy Foundation", content: <StrategyFoundationContent /> },
        { title: "Four Strategic Pillars", content: <StrategyPillarsContent /> }
    ];

    return (
        <section className="bg-gray-50">
            {/* Desktop Tabs */}
            <div className="hidden md:block bg-white p-[5%]">
                <div className="flex border-b border-gray-200 mb-8">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`py-4 px-6 text-left text-sm font-medium focus:outline-none transition-colors duration-300 relative ${activeTab === index ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}` }
                        >
                            {tab.title}
                            {activeTab === index && <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-gradient-to-r from-green-500 to-green-600"></span>}
                        </button>
                    ))}
                </div>
                <div>{tabs[activeTab].content}</div>
            </div>
            
            {/* Mobile Stacked */}
            <div className="md:hidden bg-white p-8 space-y-12">
                <div>
                     <h2 className="font-serif text-3xl font-light leading-tight text-gray-900 mb-4">Our Strategy Foundation</h2>
                     <StrategyFoundationContent />
                </div>
                 <div>
                     <h2 className="font-serif text-3xl font-light leading-tight text-gray-900 mb-4">Four Strategic Pillars</h2>
                     <StrategyPillarsContent />
                </div>
            </div>

            <div className="bg-green-50 p-[5%]">
                 <UgandaCommitmentContent />
            </div>
        </section>
    );
};

export default OPHELAboutSection;
