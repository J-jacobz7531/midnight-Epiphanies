import React, { useState } from 'react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
  delay?: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, delay = 0 }) => {
  return (
    <div className="group" style={{ animationDelay: `${delay}ms` }}>
      <div className="relative overflow-hidden mb-4">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 grayscale"
        />
      </div>
      <div className="text-center">
        <h3 className="font-serif text-xl font-medium text-brand-dark-tertiary">
          {member.name}
        </h3>
        <p className="text-sm text-brand-dark-secondary/80 mt-1">
          {member.title}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
