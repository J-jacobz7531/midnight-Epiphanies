import React from 'react';
import ContactQuickSend from './ContactQuickSend';

const ContactSection: React.FC = () => {
  return (
    <div className="bg-ig-dark text-ig-off-white pt-24 md:pt-32 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-4">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-2">Get in Touch</h2>
            <p className="text-gray-300 font-light mb-6">Ready to make an impact? We'd love to hear from you.</p>
            
            <div className="text-gray-300 font-light leading-relaxed mb-6">
              <p>For inquiries, collaborations, or more information, reach out to us: info@ophelholdings.org</p>
              <p className="mt-2 text-sm">Brisbane | Kampala | Luanda</p>
            </div>
            
            <div>
              <a href="https://ch.linkedin.com/company/ophelholdings" target="_blank" rel="noopener noreferrer" className="text-ig-accent-teal hover:text-white underline font-medium">LinkedIn</a>
            </div>
          </div>

          {/* NEW: Quick send form with provider picker on send */}
          <div className="md:col-span-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <ContactQuickSend />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
