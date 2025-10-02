import React from 'react';

const Footer: React.FC = () => {
  const emailAddress = "info@ophelholdings.org"; // <--- This is your desired email
  const emailSubject = "Inquiry from Ophel Holdings Website";
  const outlookWebMailLink = `https://outlook.live.com/mail/0/deeplink/compose?to=${emailAddress}&subject=${encodeURIComponent(emailSubject)}`;

  return (
    <footer className="bg-ig-dark text-ig-off-white pt-24 md:pt-32 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-4">
            <img src="/OphelHoldings.png" alt="Ophel Holdings Logo" className="w-96 mb-6" />
            <p className="text-sm text-gray-400">Copyright 2025 Ophel Holdings. <a href="#" className="underline hover:text-white">Privacy Policy</a></p>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-2">Let's Connect!</h2>
            <p className="text-gray-300 font-light mb-6">Join our network of gamechangers.</p>

            <div className="text-gray-300 font-light leading-relaxed mb-6">
              <p>For inquiries, collaborations, or more information, reach out to us:</p>
              {/* This link uses info@ophelholdings.org */}
              <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`} 
                 className="text-ig-accent-teal hover:text-white underline mr-4">
                Email Us (Preferred client)
              </a>
              {/* This link also uses info@ophelholdings.org */}
              <a href={outlookWebMailLink} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-ig-accent-teal hover:text-white underline">
                info@ophelholdings.org
              </a>
              <p className="mt-2 text-sm">Brisbane | Kampala | Luanda </p>
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