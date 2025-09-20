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
      <h2 className="font-serif text-4xl md:text-5xl font-light text-ig-text-dark mb-12 max-w-lg">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {members.map((member, index) => (
          <TeamMemberCard key={member.name} member={member} delay={index * 100} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
