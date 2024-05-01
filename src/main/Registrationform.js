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
import EmailField from './EmailField';
import SelectField from './SelectField';

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
      <div className='d-lg-flex justify-content-lg-center phone-number'>
        <div className='px-2'>
          <NumberField value={inputValue} onChange={handleInputChange} nameOfLabel={"Phone Number"} isMandatory={true}/>
        </div>
        <div className='px-2'>
          <NumberField value={inputValue} onChange={handleInputChange} nameOfLabel={"Alternate Phone Number"} isMandatory={false}/>
        </div>
      </div>
      <div className='d-lg-flex justify-content-lg-center phone-number'>
        <div className='px-2'>
          <EmailField value={inputValue} onChange={handleInputChange} nameOfLabel={"Email"} isMandatory={true}/>
        </div>
        <div className='px-2'>
          <EmailField value={inputValue} onChange={handleInputChange} nameOfLabel={"Confirm Email"} isMandatory={false}/>
        </div>
      </div>
      <div className='d-lg-flex justify-content-lg-center educational-institution'>
        <SelectField value={inputValue} onChange={handleInputChange} nameOfLabel={"Educational Institution"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center phone-number'>
        <div className='px-2 educational-institution'>
          <SelectField nameOfSecondaryLabel ={"Course Level"}/>
        </div>
        <div className='px-2 educational-institution'>
          <SelectField nameOfSecondaryLabel={"Year of Study"}/>
        </div>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <SelectField value={inputValue} onChange={handleInputChange} nameOfSecondaryLabel={"Educational Institution"} />
      </div>

      <div className='d-lg-flex justify-content-lg-center '>
        <SelectField value={inputValue} onChange={handleInputChange} nameOfLabel={"Course Name"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <Program nameOfLabel={"What we offer"} nameOfSecondLabel={"Programs"} nameOfThirdLabel ={"WorkShop"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <div className='px-2 educational-institution'>
          <SelectField nameOfLabel ={"How did you hear about us?"} isMandatory={true}/>
        </div>
      </div>
      <br></br>
      {/* <DonationForm/> */}
      <button onClick={onButtonClicked}>Submit</button>
    </div>
  );
};

export default RegistrationForm;
