import React from 'react';
import { TeamMember } from '../types';
import TeamMemberCard from './TeamMemberCard';

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
  isFirst?: boolean;
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, members, isFirst = false }) => {
  return (
    <section className={isFirst ? `pb-16` : `py-16`}>
      <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-dark-tertiary mb-12">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
        {members.map((member, index) => (
          <TeamMemberCard key={member.name} member={member} delay={index * 100} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
