import React from 'react';
import { CloudWeatherIcon, EnvironmentalIcon, MoneyBagIcon } from './Icons';

interface ThemeCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    imageUrl: string;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ icon, title, description, imageUrl }) => (
    <div className="flex flex-col">
        <div className="mb-4">{icon}</div>
        <h4 className="font-serif text-2xl mb-4">{title}</h4>
        <p className="text-sm font-light leading-relaxed mb-6 flex-grow">{description}</p>
        <img src={imageUrl} alt={title} className="w-[150px] h-auto" />
    </div>
);

const ImpactThemesSection: React.FC = () => {
    const themes = [
        {
            icon: <CloudWeatherIcon />,
            title: "Nature & Climate Resilience",
            description: "Strengthening the resilience of natural ecosystems while advancing climate mitigation and adaptation. This theme promotes nature-based solutions, sustainable land use, and the protection of biodiversity to safeguard resources, support livelihoods, and help communities adapt to a changing climate.",
            imageUrl: "https://igravity.net/wp-content/uploads/2025/09/sdg1-2.png"
        },
        {
            icon: <EnvironmentalIcon />,
            title: "Livelihoods",
            description: "Expanding access to the foundations of human wellbeing — nutritious food, healthcare, education, and basic infrastructure — with a focus on underserved and rural communities. It recognizes that agriculture, health, and learning are interconnected and that strengthening them together enables stable and dignified lives.",
            imageUrl: "https://igravity.net/wp-content/uploads/2025/09/sdg2-2.png"
        },
        {
            icon: <MoneyBagIcon />,
            title: "Inclusive Economies",
            description: "Building local economic systems where everyone can access fair and meaningful employment, as well as opportunities for entrepreneurship. This theme focuses on removing structural barriers to capital, markets, skills, and networks, ensuring that the economic value created locally is broadly shared within the community.",
            imageUrl: "https://igravity.net/wp-content/uploads/2025/09/sdg23-2.png"
        }
    ];

    return (
        <section className="bg-ig-dark-gray text-ig-off-white p-8 md:p-[5%]">
            <div className="container mx-auto">
                <div className="max-w-4xl mb-12 lg:mb-24">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight font-light">
                        Our Key Impact Themes
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {themes.map((theme, index) => (
                        <ThemeCard key={index} {...theme} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactThemesSection;
