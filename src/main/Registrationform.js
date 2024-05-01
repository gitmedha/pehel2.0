import React, { useState } from 'react';
import TextField from './TextField';
import DateField from './DateField';
import CategoryField from './CategoryField';
import GenderField from './GenderField';
import MultiTextField from './MultiTextField';
import FamilyIncome from './FamiilyIncome';
import Program from './Programs';
import NumberField from './NumberField';
import axiosConfig from '../axios/axiosConfig';
import DonationForm from './DonationForm';



const RegistrationForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [iNGOId, setiNGOId] = useState('12');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const onButtonClicked =(e) =>{
    e.preventDefault();
    axiosConfig.post('/students/sendEmail', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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
      <div className='d-lg-flex justify-content-lg-center'>
        <GenderField nameOfLabel={"Gender"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <TextField value={inputValue} onChange={handleInputChange} nameOfLabel={"Address"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <MultiTextField value={inputValue} onChange={handleInputChange} nameOfFirstLabel={"Address Line 1"} nameOfSecondLabel= {"Address Line 2"}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <NumberField value={inputValue} onChange={handleInputChange} nameOfLabel={"Aadhaar Number"} isMandatory={false}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <FamilyIncome nameOfLabel={"Family's Annual Income"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <NumberField value={inputValue} onChange={handleInputChange} nameOfLabel={"Family Annual Income Amount"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <Program nameOfLabel={"Programs"} isMandatory={true}/>
      </div>
      <br></br>
      <DonationForm iNGOId ={iNGOId} />
      <button onClick={onButtonClicked}>Submit</button>
    </div>
  );
};

export default RegistrationForm;
