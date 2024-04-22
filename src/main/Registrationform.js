import React, { useState } from 'react';
import TextField from './TextField';
import DateField from './DateField';
import CategoryField from './CategoryField';


const RegistrationForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='p-5'>
      <h2 className='d-flex display-4 lato-regular'>SIGN UP</h2>
      <div className='d-lg-flex justify-content-lg-center'>
        <TextField value={inputValue} onChange={handleInputChange} nameOfLabel={"Name"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <TextField value={inputValue} onChange={handleInputChange} nameOfLabel={"Father's / Mother's Name"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <DateField nameOfLabel={"Date of Birth"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <CategoryField nameOfLabel={"Category"} isMandatory={true}/>
      </div>
    </div>
  );
};

export default RegistrationForm;
