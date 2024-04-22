import React, { useState } from 'react';
import TextField from './TextField';

const RegistrationForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2 className='d-flex'>Input Text Field Example</h2>
      <TextField value={inputValue} onChange={handleInputChange}/>
      <p>Input value: {inputValue}</p>
    </div>
  );
};

export default RegistrationForm;
