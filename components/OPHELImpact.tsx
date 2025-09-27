import React, { useState } from 'react';
import { ophelData, getStrategyPillars } from '../data/ophel-data';

const PillarCard: React.FC<{ pillar: any; index: number }> = ({ pillar, index }) => {
    const [activeView, setActiveView] = useState<'current' | '2025' | '2030'>('current');
    
    const colors = [
        'from-green-500 to-green-600',
        'from-blue-500 to-blue-600', 
        'from-purple-500 to-purple-600',
        'from-orange-500 to-orange-600'
    ];
    
    const bgColors = [
        'bg-green-50 border-green-200',
        'bg-blue-50 border-blue-200',
        'bg-purple-50 border-purple-200', 
        'bg-orange-50 border-orange-200'
    ];
    
    const textColors = [
        'text-green-700',
        'text-blue-700',
        'text-purple-700',
        'text-orange-700'
    ];

    return (
        <div className={`rounded-xl border-2 ${bgColors[index]} p-6 h-full`}>
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${colors[index]} flex items-center justify-center mb-4`}>
                <span className="text-white font-bold text-lg">{index + 1}</span>
            </div>
            
            <h3 className={`text-xl font-bold ${textColors[index]} mb-4`}>
                {pillar.title}
            </h3>
            
            {pillar.data.targets && (
                <div className="mb-6">
                    <div className="flex space-x-2 mb-4">
                        {['current', '2025', '2030'].map((view) => (
                            <button
                                key={view}
                                onClick={() => setActiveView(view as any)}
                                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                                    activeView === view 
                                        ? `bg-gradient-to-r ${colors[index]} text-white` 
                                        : `${textColors[index]} bg-white border`
                                }`}
                            >
                                {view === 'current' ? 'Current' : view}
                            </button>
                        ))}
                    </div>
                    
                    <div className="space-y-3">
                        {activeView === 'current' && pillar.data.targets.current_status && (
                            <div>
                                {Object.entries(pillar.data.targets.current_status).map(([key, value], i) => (
                                    <div key={i} className="flex justify-between items-center py-1">
                                        <span className="text-sm text-gray-600 capitalize">
                                            {key.replace(/_/g, ' ')}
                                        </span>
                                        <span className={`font-semibold ${textColors[index]}`}>
                                            {typeof value === 'number' ? value.toLocaleString() : String(value)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {activeView === '2025' && pillar.data.targets['2025'] && (
                            <div>
                                {Object.entries(pillar.data.targets['2025']).map(([key, value], i) => (
                                    <div key={i} className="flex justify-between items-center py-1">
                                        <span className="text-sm text-gray-600 capitalize">
                                            {key.replace(/_/g, ' ')}
                                        </span>
                                        <span className={`font-semibold ${textColors[index]}`}>
                                            {typeof value === 'number' ? value.toLocaleString() : String(value)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {activeView === '2030' && pillar.data.targets['2030'] && (
                            <div>
                                {Object.entries(pillar.data.targets['2030']).map(([key, value], i) => (
                                    <div key={i} className="flex justify-between items-center py-1">
                                        <span className="text-sm text-gray-600 capitalize">
                                            {key.replace(/_/g, ' ')}
                                        </span>
                                        <span className={`font-semibold ${textColors[index]}`}>
                                            {typeof value === 'number' ? value.toLocaleString() : String(value)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
            
            {pillar.title === 'Prosperous farmers' && pillar.data.support_mechanisms && (
                <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Training & Skills</h4>
                    <div className="space-y-1">
                        {pillar.data.support_mechanisms.training_and_skills.slice(0, 3).map((skill: string, i: number) => (
                            <div key={i} className="text-xs text-gray-600 flex items-start space-x-2">
                                <span className={`w-1.5 h-1.5 rounded-full ${colors[index].includes('green') ? 'bg-green-400' : 'bg-blue-400'} mt-1.5 flex-shrink-0`}></span>
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            {pillar.title === 'Thriving communities' && pillar.data.focus_areas && (
                <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Focus Areas</h4>
                    <div className="space-y-1">
                        {pillar.data.focus_areas.slice(0, 3).map((area: string, i: number) => (
                            <div key={i} className="text-xs text-gray-600 flex items-start space-x-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
                                <span>{area.split('(')[0].trim()}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const ClimateActionSection: React.FC = () => {
    const climateData = ophelData.pillars['Climate action'];
    
    return (
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Climate Action Goals</h2>
                    <p className="text-green-100 text-lg max-w-2xl mx-auto">
                        Our commitment to reducing emissions and implementing climate-smart agriculture
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <h3 className="text-2xl font-bold mb-4">Emission Reduction Goals</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span>Scope 1 & 2 Emissions</span>
                                <span className="text-2xl font-bold">{climateData.goals.scope1_2_reduction_percent_min}%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Scope 3 Emissions</span>
                                <span className="text-2xl font-bold">{climateData.goals.scope3_reduction_percent_min}%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <h3 className="text-2xl font-bold mb-4">Key Actions</h3>
                        <div className="space-y-3">
                            {climateData.actions.slice(0, 3).map((action, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-green-300 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-sm">{action}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const OPHELImpact: React.FC = () => {
    const pillars = getStrategyPillars();
    
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-700 to-blue-700 text-white py-20">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Our Impact Strategy
                    </h1>
                    <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                        {ophelData.strategy.objective}
                    </p>
                    <div className="text-lg">
                        <span className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                            Foundation: <strong>{ophelData.strategy.foundation}</strong>
                        </span>
                    </div>
                </div>
            </div>
            
            {/* Four Pillars */}
            <div className="py-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Four Strategic Pillars
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our comprehensive approach to creating sustainable impact across communities, 
                            environment, and supply chains.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((pillar, index) => (
                            <PillarCard key={index} pillar={pillar} index={index} />
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Climate Action Special Section */}
            <ClimateActionSection />
            
            {/* Uganda Commitment */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">
                            Our Commitment to Uganda
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            {ophelData.uganda_commitment.approach}
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                            {ophelData.uganda_commitment.themes.map((theme, index) => (
                                <div key={index} className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold">{index + 1}</span>
                                    </div>
                                    <p className="text-green-800 font-medium">{theme}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OPHELImpact;
