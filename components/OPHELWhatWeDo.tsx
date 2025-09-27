import React from 'react';
import { ArrowRightIcon } from './Icons';
import { ophelData } from '../data/ophel-data';

const ServiceCard: React.FC<{ 
  service: string; 
  data: any; 
  videoSrc: string; 
  href: string;
  gradient: string;
}> = ({ service, data, videoSrc, href, gradient }) => {
    return (
        <div className="relative h-[70vh] min-h-[500px] w-full flex flex-col justify-end p-8 text-white overflow-hidden group">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                src={videoSrc}
            />
            <div className={`absolute top-0 left-0 w-full h-full ${gradient} z-10`}></div>
            <div className="relative z-20">
                <h3 className="font-serif text-4xl lg:text-5xl font-light mb-4">{service}</h3>
                <p className="font-sans text-sm lg:text-base font-light leading-relaxed mb-4 max-w-md text-gray-200">
                    {data.target_user}
                </p>
                <div className="mb-6">
                    <ul className="space-y-2 text-sm">
                        {(data.capabilities || data.adds_to_OPSourceV || []).slice(0, 3).map((capability: string, index: number) => (
                            <li key={index} className="flex items-start space-x-2">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-gray-200">{capability}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <a href={href} className="inline-flex items-center font-sans font-medium text-sm text-white group/link">
                    Learn more
                    <ArrowRightIcon className="ml-2 transition-transform duration-300 group-hover/link:translate-x-2" />
                </a>
            </div>
        </div>
    );
};

const SupplyChainSection: React.FC = () => {
    const { traceability, verification } = ophelData.supply_chain_excellence;
    
    return (
        <div className="bg-green-900 text-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
                        Supply Chain Excellence
                    </h2>
                    <p className="text-lg text-green-100 max-w-3xl mx-auto">
                        Our foundation built on transparency, traceability, and verified impact across global supply chains
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-green-200">Global Traceability</h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-green-800 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-green-200">{traceability.country_coverage.cocoa_origins}</div>
                                <div className="text-sm text-green-300">Cocoa Origins</div>
                            </div>
                            <div className="bg-green-800 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-green-200">{traceability.country_coverage.coffee_origins}</div>
                                <div className="text-sm text-green-300">Coffee Origins</div>
                            </div>
                            <div className="bg-green-800 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-green-200">{traceability.country_coverage.nuts_origins}</div>
                                <div className="text-sm text-green-300">Nuts Origins</div>
                            </div>
                            <div className="bg-green-800 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-green-200">{traceability.country_coverage.spices_origins}</div>
                                <div className="text-sm text-green-300">Spices Origins</div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-green-200">Verification & Compliance</h3>
                        <div className="space-y-4">
                            <div className="bg-green-800 rounded-lg p-4">
                                <div className="text-lg font-semibold text-green-200 mb-2">
                                    {verification.supplier_coverage_percent_2023_direct}%
                                </div>
                                <div className="text-sm text-green-300">Direct supplier coverage (2023)</div>
                            </div>
                            <div className="bg-green-800 rounded-lg p-4">
                                <div className="text-sm font-medium text-green-200 mb-2">
                                    {verification.protocol}
                                </div>
                                <div className="text-xs text-green-300">{verification.audits}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const OPHELWhatWeDo: React.FC = () => {
    const customerOfferings = ophelData.customer_offerings;
    
    return (
        <section className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 lg:px-12 text-center py-16">
                <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-4" style={{ lineHeight: '1.1' }}>
                    What We Do
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    We provide comprehensive sustainability solutions across the supply chain, 
                    from traceability and verification to impact measurement and reporting.
                </p>
            </div>
            
            <div className="grid md:grid-cols-3">
                <ServiceCard 
                    service="OPSourceV"
                    data={customerOfferings.OPSourceV}
                    videoSrc="https://igravity.net/wp-content/uploads/2025/08/investments-video.mp4"
                    href="/products"
                    gradient="bg-gradient-to-t from-blue-900/90 via-blue-800/60 to-transparent"
                />
                <ServiceCard 
                    service="OPSource+"
                    data={customerOfferings["OPSource+"]}
                    videoSrc="https://igravity.net/wp-content/uploads/2025/08/advisory.mp4"
                    href="/products"
                    gradient="bg-gradient-to-t from-green-900/90 via-green-800/60 to-transparent"
                />
                <ServiceCard 
                    service="OPSource"
                    data={customerOfferings.OPSource}
                    videoSrc="https://igravity.net/wp-content/uploads/2025/08/hero-home.mp4"
                    href="/products"
                    gradient="bg-gradient-to-t from-purple-900/90 via-purple-800/60 to-transparent"
                />
            </div>
            
            <SupplyChainSection />
        </section>
    );
};

export default OPHELWhatWeDo;
