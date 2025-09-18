import React from 'react';

const OurHistory: React.FC = () => {
  return (
    <div className="min-h-screen bg-ig-off-white text-ig-dark">
      {/* Page Header */}
      <div className="bg-ig-dark text-ig-off-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
              Our History
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-80 max-w-3xl mx-auto">
              A journey of transformation, innovation, and impact spanning decades of dedicated service
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Timeline Section */}
          <div className="space-y-16">
            
            {/* Foundation Era */}
            <div className="relative">
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-ig-teal rounded-full mt-2"></div>
                </div>
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-light mb-4 text-ig-dark">The Foundation Years</h2>
                    <p className="text-lg leading-relaxed mb-6 text-gray-700">
                      Our story began with a simple yet powerful vision: to create meaningful change through strategic investments 
                      and partnerships. Founded on principles of integrity, innovation, and impact, we set out to bridge the gap 
                      between capital and purpose.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                      In these early years, we established our core values and built the foundation for what would become 
                      a transformative approach to business and investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Era */}
            <div className="relative">
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-ig-teal rounded-full mt-2"></div>
                </div>
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-light mb-4 text-ig-dark">Expansion and Growth</h2>
                    <p className="text-lg leading-relaxed mb-6 text-gray-700">
                      As our reputation grew, so did our reach. We expanded our portfolio across diverse sectors, 
                      always maintaining our commitment to sustainable and responsible business practices. This period 
                      marked significant milestones in our journey toward becoming a recognized leader in our field.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Our team grew with exceptional talent, each member bringing unique expertise and shared passion 
                      for creating positive change through strategic business initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation Era */}
            <div className="relative">
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-ig-teal rounded-full mt-2"></div>
                </div>
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-light mb-4 text-ig-dark">Innovation and Transformation</h2>
                    <p className="text-lg leading-relaxed mb-6 text-gray-700">
                      Embracing technological advancement and innovative thinking, we transformed our approach to meet 
                      the evolving needs of our partners and stakeholders. This era was defined by breakthrough 
                      initiatives and pioneering solutions that set new industry standards.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                      We invested heavily in research and development, fostering a culture of continuous improvement 
                      and forward-thinking strategies that positioned us at the forefront of industry innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Era */}
            <div className="relative">
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-ig-teal rounded-full mt-2"></div>
                </div>
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-light mb-4 text-ig-dark">Today and Beyond</h2>
                    <p className="text-lg leading-relaxed mb-6 text-gray-700">
                      Today, we stand as a testament to the power of vision, dedication, and strategic thinking. 
                      Our history informs our future as we continue to evolve, adapt, and lead in an ever-changing 
                      global landscape.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Looking ahead, we remain committed to our founding principles while embracing new opportunities 
                      to create lasting impact and drive meaningful change across all our endeavors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Key Milestones */}
          <div className="mt-20 pt-16 border-t border-gray-200">
            <h2 className="text-4xl font-light mb-12 text-center text-ig-dark">Key Milestones</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-ig-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold text-lg">1</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-ig-dark">Foundation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Established with a clear mission to create positive impact through strategic business initiatives
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-ig-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold text-lg">2</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-ig-dark">First Major Partnership</h3>
                <p className="text-gray-600 leading-relaxed">
                  Secured our first significant partnership, marking the beginning of our growth trajectory
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-ig-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold text-lg">3</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-ig-dark">Global Expansion</h3>
                <p className="text-gray-600 leading-relaxed">
                  Extended our reach internationally, establishing presence in key global markets
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-ig-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold text-lg">4</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-ig-dark">Innovation Hub</h3>
                <p className="text-gray-600 leading-relaxed">
                  Launched our innovation center, fostering breakthrough solutions and technologies
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-ig-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold text-lg">5</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-ig-dark">Sustainability Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrated comprehensive sustainability practices across all our operations and investments
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-ig-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold text-lg">6</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-ig-dark">Industry Leadership</h3>
                <p className="text-gray-600 leading-relaxed">
                  Recognized as industry leaders, setting new standards for responsible business practices
                </p>
              </div>

            </div>
          </div>

          {/* Vision Statement */}
          <div className="mt-20 pt-16 border-t border-gray-200">
            <div className="text-center">
              <h2 className="text-4xl font-light mb-8 text-ig-dark">Our Continuing Journey</h2>
              <p className="text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
                Our history is not just a record of where we've been, but a foundation for where we're going. 
                Each chapter of our story builds upon the last, creating a legacy of innovation, integrity, 
                and impact that guides us toward an even brighter future.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurHistory;
