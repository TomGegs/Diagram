import { useState } from 'react';

const Diagram = () => {
    const processSteps = [
        {
            step: 'Register',
            description:
                'The need is registered by authorised representatives from our network of organisations.',
        },
        {
            step: 'Publish',
            description:
                'The need (item) is published to Recoveres global platform. Generous donors can navigate the published needs and select the most relevant to them.',
        },
        {
            step: 'Fund',
            description: 'The need is selected for funding by the donor',
        },
        {
            step: 'Purchase',
            description:
                'Recovere source the item from our network of local businesses.',
        },
        {
            step: 'Receive',
            description:
                'The recipient receives the exact need they requested.',
        },
    ];
    const [hoveredStep, setHoveredStep] = useState<null | number>(null);

    return (
        <div className="flex  w-full">
            <div className="flex w-full flex-row justify-evenly  gap-4 bg-white">
                {processSteps.map(({ step, description }, index) => (
                    <div
                        key={step}
                        className="from-[#1F408E] to-[#04143C] flex max-h-fit min-h-48 flex-col items-center gap-2 rounded-xl border bg-gradient-to-br from-50% to-100% p-8"
                        onMouseEnter={() => setHoveredStep(index)} // Set the hovered step index
                        onMouseLeave={() => setHoveredStep(null)} // Reset when not hovered
                    >
                        <div className=""></div>
                        <p className="text-left text-2xl font-semibold text-white  ">
                            {step}
                        </p>
                        {/* Show the description only for the hovered step */}
                        <p
                            className={` flex max-w-sm text-left font-thin text-white transition-all duration-500 ${hoveredStep === index ? 'opacity-100' : 'opacity-50'} `}
                        >
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Diagram;
