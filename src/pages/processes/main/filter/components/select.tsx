import React, { useEffect, useState } from 'react';

const Select: React.FC<any> = (props:any) => {
  
  const {options,classNameoptions,className, onSelect,id,Placeholder,value, disabled} = props
  const [showSelect, setshowSelect] = useState(false);
  const [optionsValue, setOptionsValue] = useState(options);
  // const [value, setValue] = useState(options);

  const handleOnSelect = (e: any) => {
    if (!disabled) {
      onSelect(e);
      setshowSelect(false);
    }
  }

  useEffect(() => {
    setOptionsValue(options)
  }, [options])
  let renderOptions = null;
  if (optionsValue.length > 0) {
    renderOptions = optionsValue.map((option:any, index:number) => {

      const optionValue = typeof option.value === 'object' ? JSON.stringify(option.value) : option.value;
      
      return (
        <div
          key={index}
          onClick={handleOnSelect}
          id={id}
          data-key={optionValue} // Add data-key attribute
          className={classNameoptions}
          >
        {option.label}
        </div>
    )
    })
  }



  const handleChange = (e: any) => {
    if (disabled) return;

    let newOptions = []
    if (e.target.value === '') {
      setOptionsValue(options)
      return
    }

    optionsValue.map((option:any) => {
      if (option.label.toLowerCase().includes(e.target.value.toLowerCase())) {
        newOptions.push(option)
      }
    })
    setOptionsValue(newOptions)
    // setValue(e.target.value);
    // const value = e.target.value;
    // console.log("This is value from select", value)
    // setSelectedOption(value);
    // if (onChange) {
    //   onChange(e);
    // }
  };

  const handleOnFocus = (e: any) => {
    if (!disabled) {
      setshowSelect(true);
    }
  }

  function handleSelectbutton(show:boolean) {
    if (!disabled) {
      setshowSelect(!show);
    }
  }

  // const handleOnBlur = (e: any) => {
  //   setshowSelect(false)
  // }

  return (
    <div >
      <label className="sr-only">Underline select</label>
      <div className='flex'>
      
      {showSelect ? <input
        disabled={disabled}
        placeholder={(value != '') ? value : Placeholder}
        onChange={handleChange}
        // onClick={handleSelectChange}
        onFocus={handleOnFocus}
        // onBlur={handleOnBlur}
        className={className}
      >
      </input> :
      <div  onClick={handleOnFocus} className={className}>{(value != '') ? value : Placeholder}</div>}

      <svg
        className={`absolute mt-1 h-5 w-12 ml-60 `}
        fill="none"
        viewBox="0 0 24 24"
        stroke="#d1d5db"
        onClick={() => handleSelectbutton(showSelect)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>


      </div>
      <div className='z-50 w-72 shadow-md shadow-neutral-950 absolute'>
      {showSelect ? renderOptions : null}
      </div>
    </div>
  );
};

export default Select;