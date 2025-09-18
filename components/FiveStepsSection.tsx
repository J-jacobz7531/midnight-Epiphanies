import React from 'react';
import Accordion from './Accordion';

const FiveStepsSection: React.FC = () => {
    const accordionItems = [
        {
            title: "1. Inputs",
            content: ". Capital (different instruments)\n. Technical and thematic expertise\n. Innovation skills and pioneering spirit\n. Impact Measurement & Management\n. Network & partners"
        },
        {
            title: "2. Activities",
            content: ". Invest and advise for positive impact\n. Design and manage innovative solutions\n. Conduct and support on research, feasibility studies, evaluations to improve donors/investors capacity and skills\n. Design and promote Public-Private Partnerships\n. Promote Knowledge sharing\n. Provide Technical Assistance to SMEs\n. Develop Impact Measurement & Management systems and frameworks"
        },
        {
            title: "3. Outputs",
            content: ". Enhanced access to capital and skills for SMEs and low-income communities\n. Eased access to unique impact investing opportunities for investors\n. Improved donor/investors technical capacity, knowledge and tools\n. Increased blended capital\n. Increased awareness & knowledge\n. Improved IMM & financial systems for supported SMEs\n. Tailored investment solutions"
        },
        {
            title: "4. Outcomes",
            content: ". Increased capital and solutions mobilized for sustainable development\n. Increased alignment of financial returns with social & environmental goals\n. Enhanced capacity for sustainable growth and access to finance (SMEs)\n. Fostered innovation and knowledge sharing across finance and development systems"
        },
        {
            title: "5. Impact",
            content: ". Transformation of the financial system to foster a world that is both equitable and sustainable (with a focus on mobilizing capital to drive impactful change)\n. Promotion of innovative-finance solutions\n. Empowerment of communities and stakeholders through sustainable growth"
        }
    ];

    return (
        <section className="grid lg:grid-cols-2">
            <div className="relative min-h-[500px] lg:min-h-screen flex items-center justify-center p-8 text-center text-white">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="https://igravity.net/wp-content/uploads/2025/08/6.mp4"
                ></video>
                <div className="absolute inset-0 bg-ig-dark opacity-80 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-ig-teal to-ig-teal opacity-50 z-10"></div>
                <div className="relative z-20 p-[8%]">
                    <h3 className="font-serif text-4xl lg:text-5xl font-light">
                        Our theory of change consists of five essential steps:
                    </h3>
                </div>
            </div>
            <div className="bg-ig-dark text-ig-off-white p-8 lg:p-[8%] flex items-center">
                <Accordion items={accordionItems} />
            </div>
        </section>
    );
};

export default FiveStepsSection;
