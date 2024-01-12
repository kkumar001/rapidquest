import React, { useState } from 'react';

const Slider = ({percentage, text}) => {
    const [value, setValue] = useState(percentage);

    const calculateGradient = () => {
        const percent = (value / 100) * 100;
        return `linear-gradient(90deg, #8aacf9 ${percent}%, #ecf0f1 ${percent}%)`;
    };

    return (
        <div className="flex flex-col gap-3 md:px-0 px-10 md:mt-0 mt-5">
            <label htmlFor="tailwind-slider" className="text-xs font-medium">
                {text}
            </label>
            <div className='flex justify-between items-center gap-3'>
                <input
                    type="range"
                    id="tailwind-slider"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="h-1 md:w-44 w-64 bg-gray-300 rounded-full focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    style={{ background: calculateGradient() }}
                />
                <span className="text-xs font-medium">
                    {text === 'Employee Contribution' ? `${value}%` : value}
                </span>
            </div>
        </div>
    );
};

export default Slider;
