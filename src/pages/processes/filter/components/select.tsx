import React, { useState } from 'react';

const Select: React.FC<any> = (props:any) => {
  const [selectedOption, setSelectedOption] = useState('');
  const {options,classNameoptions,className} = props

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className={className}>
      <label htmlFor="underline_select" className="sr-only">Underline select</label>
      <select 
        id="underline_select" 
        value={selectedOption}
        onChange={handleSelectChange}
        className="block py-1 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option value="" className={classNameoptions}>Search by Process Name</option>
        {options.map((option:any) => (
            <option value={option.value} className={classNameoptions}>
            {option.label}
            </option>
        ))}
      </select>
      <svg
        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#d1d5db"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </div>
  );
};

export default Select;