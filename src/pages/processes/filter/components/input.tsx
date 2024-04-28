import React, { useState } from 'react';

const Input: React.FC<any> = (props:any) => {
    const [inputValue, setInputValue] = useState('');


  const handleInputChange = (e:any) => {
    setInputValue(e.target.value);
  };

  return (
    <div >
      <label htmlFor="underline_select" className="sr-only">Underline select</label>
      <input 
        id="underline_select" 
        value={inputValue}
        onChange={handleInputChange}
        className="block py-1 px-0 w-full text-sm text-gray-500 bg-neutral-700 border border-gray-600 appearance-none dark:text-gray-400 dark:border-gray-400 focus:outline-none focus:ring-0 focus:border-2 focus:border-white peer shadow-md"
        placeholder={props.placeholder}
>
      </input>
    </div>
  );
};

export default Input;