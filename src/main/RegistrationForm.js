import React, { useState, useEffect } from 'react';
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
import ConsentSection from './ConsentSection';
import StateField from './StateField';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [parentName, setParentName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [category, setCategory] =useState('');
  const [gender, setGender] = useState('');
  const [primaryAddress, setPrimaryAddress] = useState('');
  const [secondaryAddress, setSecondaryAddress] =useState('');
  const [address, setAddress] = useState('');
  const [studentState, setStudentState] = useState('');

  const onNameEntered = (value) => {
    setName(value);
  };

  const onParentNameEntered =(value) =>{
    setParentName(value);
  }

  const onDateOfBirthEntered =(value) =>{
    setDateOfBirth(value);
  }

  const onSelectingCategory =(value) =>{
    setCategory(value);
  }

  const onSelectingGender =(value) =>{
    setGender(value);
  }

  const onAddingPrimaryAddress =(value) => {
    setPrimaryAddress(value);
  }

  const onAddingSecondaryAddress =(value) => {
    setSecondaryAddress(value);
  }

  const onAddingAddress = () => {
    let clubbedAddress = primaryAddress+ "," +secondaryAddress;
    setAddress(clubbedAddress);
  }




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
        <TextField  onTextEntered={onNameEntered} nameOfLabel={"Name"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <TextField  onTextEntered={onParentNameEntered} nameOfLabel={"Father's / Mother's Name"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <DateField onDateEntered={onDateOfBirthEntered} nameOfLabel={"Date of Birth"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <CategoryField onCategorySelect={onSelectingCategory} nameOfLabel={"Category"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <GenderField onGenderSelect={onSelectingGender} nameOfLabel={"Gender"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <TextField  onTextEntered={onAddingPrimaryAddress} nameOfLabel={"Address"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <MultiTextField  onTextEntered={onAddingSecondaryAddress} nameOfFirstLabel={"Address Line 1"} nameOfSecondLabel= {"Address Line 2"}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center phone-number'>
        <div className='px-2 educational-institution'>
          <StateField nameOfSecondaryLabel ={"State/Province/Region"}/>
        </div>
        <div className='px-2 educational-institution'>
          <SelectField nameOfSecondaryLabel={"City"}/>
        </div>
      </div>
      <br></br>
      <div className='d-lg-flex justify-content-lg-center'>
        <NumberField  onChange={onNameEntered} nameOfLabel={"Aadhaar Number"} isMandatory={false}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <FamilyIncome nameOfLabel={"Family's Annual Income"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <NumberField  onChange={onNameEntered} nameOfLabel={"Family Annual Income Amount"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center phone-number'>
        <div className='px-2'>
          <NumberField  onChange={onNameEntered} nameOfLabel={"Phone Number"} isMandatory={true}/>
        </div>
        <div className='px-2'>
          <NumberField  onChange={onNameEntered} nameOfLabel={"Alternate Phone Number"} isMandatory={false}/>
        </div>
      </div>
      <div className='d-lg-flex justify-content-lg-center phone-number'>
        <div className='px-2'>
          <EmailField   nameOfLabel={"Email"} isMandatory={true}/>
        </div>
        <div className='px-2'>
          <EmailField   nameOfLabel={"Confirm Email"} isMandatory={false}/>
        </div>
      </div>
      <div className='d-lg-flex justify-content-lg-center educational-institution'>
        <SelectField   nameOfLabel={"Educational Institution"} isMandatory={true}/>
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
        <SelectField   nameOfSecondaryLabel={"Educational Institution"} />
      </div>
      <div className='d-lg-flex justify-content-lg-center '>
        <SelectField   nameOfLabel={"Course Name"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <Program nameOfLabel={"What we offer"} nameOfSecondLabel={"Programs"} nameOfThirdLabel ={"WorkShop"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <div className='px-2 educational-institution'>
          <SelectField nameOfLabel ={"How did you hear about us?"} isMandatory={true}/>
        </div>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <ConsentSection/>
      </div>
      <br></br>
      {/* <DonationForm/> */}
      <button onClick={onButtonClicked}>Submit</button>
    </div>
  );
};

export default RegistrationForm;
