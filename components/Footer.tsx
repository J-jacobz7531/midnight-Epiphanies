
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ig-dark text-ig-off-white pt-24 md:pt-32 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-4">
            <img src="https://igravity.net/wp-content/uploads/2025/07/logo-footer.png" alt="iGravity Footer Logo" className="w-48 mb-6" />
            <p className="text-sm text-gray-400">Copyright 2025 iGravity. <a href="#" className="underline hover:text-white">Privacy Policy</a></p>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-2">Let's Connect!</h2>
            <p className="text-gray-300 font-light mb-6">Join our network of changemakers.</p>

            <div className="text-gray-300 font-light leading-relaxed mb-6">
              <p>For inquiries, collaborations, or more information, reach out to us:</p>
              <a href="mailto:impact@igravity.net" className="text-ig-accent-teal hover:text-white underline">impact@igravity.net</a>
              <p className="mt-2 text-sm">Zurich | Milan | Kampala | Nairobi | Bogotá</p>
            </div>
            
            <div>
              <a href="https://ch.linkedin.com/company/igravity" target="_blank" rel="noopener noreferrer" className="text-ig-accent-teal hover:text-white underline font-medium">LinkedIn</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
