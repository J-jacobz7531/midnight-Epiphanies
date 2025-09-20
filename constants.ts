import { TeamMember } from './types';

export const teamData = [
  {
    title: "Leadership Team",
    members: [
      {
        name: "Sarah Johnson",
        title: "Chief Executive Officer",
        imageUrl: "https://picsum.photos/300/400?random=1",
        bio: "Sarah brings over 15 years of experience in impact investing and sustainable finance."
      },
      {
        name: "Michael Chen",
        title: "Chief Investment Officer",
        imageUrl: "https://picsum.photos/300/400?random=2",
        bio: "Michael leads our investment strategy with a focus on measurable social and environmental impact."
      },
      {
        name: "Emma Rodriguez",
        title: "Chief Financial Officer",
        imageUrl: "https://picsum.photos/300/400?random=3",
        bio: "Emma oversees financial operations and ensures transparency in our impact reporting."
      }
    ] as TeamMember[]
  },
  {
    title: "Investment Team",
    members: [
      {
        name: "David Kim",
        title: "Senior Investment Manager",
        imageUrl: "https://picsum.photos/300/400?random=4",
        bio: "David specializes in identifying and evaluating high-impact investment opportunities."
      },
      {
        name: "Lisa Thompson",
        title: "Investment Analyst",
        imageUrl: "https://picsum.photos/300/400?random=5",
        bio: "Lisa conducts thorough due diligence on potential investments and portfolio companies."
      },
      {
        name: "James Wilson",
        title: "Portfolio Manager",
        imageUrl: "https://picsum.photos/300/400?random=6",
        bio: "James manages our portfolio companies and supports their growth and impact initiatives."
      }
    ] as TeamMember[]
  },
  {
    title: "Operations Team",
    members: [
      {
        name: "Anna Martinez",
        title: "Head of Operations",
        imageUrl: "https://picsum.photos/300/400?random=7",
        bio: "Anna ensures smooth operations and implements best practices across all departments."
      },
      {
        name: "Robert Taylor",
        title: "Impact Measurement Specialist",
        imageUrl: "https://picsum.photos/300/400?random=8",
        bio: "Robert develops and monitors impact metrics to measure our social and environmental outcomes."
      }
    ] as TeamMember[]
  }
];
