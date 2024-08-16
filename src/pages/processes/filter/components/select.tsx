import React, { useState } from 'react';

const Select: React.FC<any> = (props:any) => {
  const [selectedOption, setSelectedOption] = useState('');
  const {options,classNameoptions,className, onChange,id} = props

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    console.log("This is value from select", value)
    setSelectedOption(value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={className}>
      <label className="sr-only">Underline select</label>
      <select
        id={id}
        value={selectedOption}
        onChange={handleSelectChange}
        className="py-1 px-5 w-full font-normal text-gray-100 bg-transparent border-b border-gray-500 appearance-none "
      >
        <option value=""  className={classNameoptions}>Search by Process Name</option>
        {options.map((option:any) => (
            <option value={typeof option.value === 'object' ? JSON.stringify(option.value) : option.value} className={classNameoptions}>
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