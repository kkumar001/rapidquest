import React, { useState } from 'react';

const Select = ({label, value}) => {
  const [selectedOption, setSelectedOption] = useState(value);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="tailwind-select" className="text-xs font-semibold">
        {label}
      </label>
      <select
        id="tailwind-select"
        value={selectedOption}
        onChange={handleSelectChange}
        className="h-8 w-auto px-4 rounded-2xl text-xs font-medium text-slate-500"
      >
        <option value="option1">Under 30</option>
        <option value="option2">K 20 - K 30</option>
        <option value="option3">Male</option>
      </select>
    </div>
  );
};

export default Select;
