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
        <div className="flex h-full w-full">
            <div className="flex w-full flex-row justify-evenly bg-black">
                {processSteps.map(({ step, description }, index) => (
                    <div
                        key={step}
                        className="flex flex-col place-items-end items-center justify-center object-center"
                        onMouseEnter={() => setHoveredStep(index)} // Set the hovered step index
                        onMouseLeave={() => setHoveredStep(null)} // Reset when not hovered
                    >
                        <div className="rounded-full bg-white p-8" />
                        <span>{step}</span>
                        {/* Show the description only for the hovered step */}
                        {hoveredStep === index ? <p>{description}</p> : null}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Diagram;
