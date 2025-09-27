import React from 'react';
import { getOrganizationStats } from '../data/ophel-data';

const StatsSection: React.FC = () => {
  const stats = getOrganizationStats();

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Global Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As a global leader in naturally good food & beverage ingredients and solutions, 
            we're committed to making sustainability real through data, traceability, and verified impact.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600 leading-tight">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-md">
            <div className="flex space-x-2">
              {['cocoa', 'coffee', 'sesame', 'vanilla', 'maize'].map((item, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-3">Our portfolio of naturally good ingredients</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
