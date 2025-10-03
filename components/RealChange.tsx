
import React from 'react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "James Israel Mayanja",
    position: "Founder & CEO",
    image: "/Founder James Israel Mayanja.png",
    bio: "Visionary leader driving sustainable impact investment across Africa"
  },
  {
    id: 2,
    name: "Jordan Muhwezi",
    position: "Co-Founder & COO",
    image: "/Founder Jordan Muhwezi.png",
    bio: "Operations expert focused on scaling agricultural value chains"
  },
  {
    id: 3,
    name: "Edwin Sabitti",
    position: "Founder & CTO",
    image: "/Founder Edwin Sabitti.jpg",
    bio: "Technology innovator building digital solutions for farmers"
  },
  {
    id: 4,
    name: "Joshua Mugagga",
    position: "Head of Operations",
    image: "/Operations Joshua Mugagga.jpg",
    bio: "Field operations specialist ensuring quality and sustainability"
  },
  {
    id: 5,
    name: "Dionisio Chavito Massanga",
    position: "Regional Director",
    image: "/Dionisio Chavito Massanga.jpg",
    bio: "Regional expansion leader connecting communities across borders"
  },
  {
    id: 6,
    name: "Victor Starr Kramer",
    position: "Strategic Advisor",
    image: "/Victor Starr Kramer.jpeg",
    bio: "Investment strategist with deep expertise in impact finance"
  }
];

const OurTeam: React.FC = () => {
    return (
        <section className="bg-ig-dark text-ig-off-white py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-12 md:mb-16">
                     <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light max-w-4xl mx-auto" style={{ lineHeight: '1.2' }}>
                        Meet Our Team
                    </h2>
                    <p className="text-gray-300 mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto">
                        Passionate leaders driving sustainable change across Africa's agricultural landscape
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="group relative bg-ig-dark-gray rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                            <div className="aspect-w-3 aspect-h-4 relative">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-64 sm:h-72 md:h-80 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            </div>
                            
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                <h3 className="font-serif text-lg sm:text-xl font-semibold text-white mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-ig-accent-teal text-sm sm:text-base font-medium mb-2">
                                    {member.position}
                                </p>
                                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed opacity-90">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 md:mt-16">
                    <p className="text-gray-400 text-sm sm:text-base">
                        Brisbane | Kampala | Luanda
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
