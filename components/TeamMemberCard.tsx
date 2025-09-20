import React, { useState } from 'react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
  delay?: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="nectar-team-member group relative"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-white shadow-lg">
        <div className="aspect-[4/5] relative">
          <img
            src={member.imageUrl}
            alt={member.name}
            className="w-full h-full object-cover transition-all duration-500 ease-out"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              filter: isHovered ? 'brightness(0.8)' : 'brightness(1)'
            }}
          />
          
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500"
            style={{
              opacity: isHovered ? 1 : 0
            }}
          />
          
          {/* Bio Content Overlay */}
          {member.bio && (
            <div 
              className="absolute inset-0 flex items-end p-6 transition-all duration-500"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="text-white">
                <p className="text-sm leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Content Below Image */}
      <div className="pt-6 pb-2 text-center">
        <h3 
          className="font-serif text-xl font-light mb-2 transition-colors duration-300"
          style={{
            color: isHovered ? '#84bfc7' : '#141d21'
          }}
        >
          {member.name}
        </h3>
        <p className="text-sm font-medium text-ig-text-dark/70 uppercase tracking-wide">
          {member.title}
        </p>
      </div>
      
      {/* Subtle bottom border accent */}
      <div 
        className="absolute bottom-0 left-1/2 h-0.5 bg-ig-accent-teal transition-all duration-500"
        style={{
          width: isHovered ? '60px' : '0px',
          transform: 'translateX(-50%)'
        }}
      />
    </div>
  );
};

export default TeamMemberCard;
