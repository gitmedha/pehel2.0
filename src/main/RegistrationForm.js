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
import CourseLevelField from './CourseLevelField';
import CourseStudyYear from './YearOfStudyField';
import CourseCompletionYear from './YearOfCompletionField';
import CourseName from './CourseNameField';
import AboutUsField from './AboutUsField';

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
  const [aadharNumber, setAadharNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [alternatePhoneNumber, setAlternatePhoneNumber] = useState('');
  const [familyIncome, setFamilyIncome] = useState('');
  const [selectedFamilyIncome, setSelectedFamilyIncome] = useState('');
  const [email, setEmail] = useState('');
  const [confimedEmail, setConfirmedEmail] = useState('');
  const [courseLevel, setCourseLevel] = useState('');
  const [courseStudyYear, setCourseStudyYear] = useState('');
  const [courseCompletionYear, setcourseCompletionYear] = useState('');
  const [course, setCourse] = useState('');
  const [program, setProgram] = useState('');
  const [aboutUs, setAboutUs] = useState('');
  const [error, setError] = useState(false)

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

  const onAadharEntered =(value) =>{
    setAadharNumber(value);
  }

  const onPhoneNumberEntered =(value) => {
    setPhoneNumber(value);
  }

  const onAlternatePhoneNumberEntered =(value) => {
    setAlternatePhoneNumber(value);
  }

  const onAddingFamilyIncome = (value) => {
    setFamilyIncome(value);
  }

  const onSelectingFamilyIncome = (value) =>{
    setSelectedFamilyIncome(value);
  }

  const onEnteringEmail = (value) => {
    setEmail(value);
  }

  const onEnteringConfirmationEmail = (value) => {
    setConfirmedEmail(value);
  }

  const onCourseLevelSelection =(value) => {
    setCourseLevel(value);
  }

  const onCourseYearSelection =(value) => {
    setCourseStudyYear(value);
  }

  const onCourseCompletionYearSelection =(value) => {
    setcourseCompletionYear(value);
  }

  const onCourseNameSelection =(value) => {
    setCourse(value);
  }

  const onProgramSelected = (value) => {
    setProgram(value);
  }

  const onAboutUsSelect =(value) =>{
    setAboutUs(value);
  }

  const onValidateForm = () =>{
    if (name === ""){
      console.log("hello");
    }
  }

  const onButtonClicked = (e) => {
    e.preventDefault();
    onValidateForm();
    if(error === false) {
    axiosConfig.post('/api/students/createFromWebhook', {
        "full_name": "Jyoti",
        "parent_or_guardian_name": "rashmi",
        "date_of_birth": "2003-7-14",
        "pin_code": "122003",
        "category": "GEN",
        "gender": "Female",
        "income_level": "Less than INR 25k",
        "family_annual_income": "15000",
        "institution_id": "118",
        "discount_code": null,
        "fee_transaction_id": "",
        "program_id": "23",
        "course_type": "Engineering/Technical",
        "course_level": "Doctorate",
        "year_of_course_completion": "2022",
        "course_year": "Third",
        "city": "Anantnag",
        "payuMoneyId": "",
        "phone": "8765432104",
        "state": "Jammu & Kashmir",
        "amount": 0,
        "email": "srivastavajyoti510@gmail.com",
        "address": "Gurgaon ",
        "aadhar_number": "",
        "area": null,
        "course_name_in_current_sis": "B.ED",
        "course_name_other": "",
        "how_did_you_hear_about_us": "Campus / Teachers",
        "how_did_you_hear_about_us_other": "",
        "alternate_mobile": ""
      })
      .then(function (response) {
        console.log(response);
        if (response && response.status === 200) {
          // axiosConfig.post('/students/sendEmail')
          //   .then(function (secondResponse) {
          //     console.log(secondResponse);
          //   })
          //   .catch(function (secondError) {
          //     console.log(secondError);
          //   });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }


  return (
    <div className='p-5'>
      <h2 className='d-flex display-4 lato-regular'>SIGN UP</h2>
      <div className='d-lg-flex justify-content-lg-center'>
        <TextField  onTextEntered={onNameEntered} nameOfLabel={"Name"} isMandatory={true} error={error} />
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
        <NumberField  onNumberChange={onAadharEntered} nameOfLabel={"Aadhaar Number"} isMandatory={false}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <FamilyIncome nameOfLabel={"Family's Annual Income"} isMandatory={true} onRangeSelect ={onSelectingFamilyIncome} />
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <NumberField  onNumberChange={onAddingFamilyIncome} nameOfLabel={"Family Annual Income Amount"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center phone-number'>
        <div className='px-2'>
          <NumberField  onNumberChange={onPhoneNumberEntered} nameOfLabel={"Phone Number"} isMandatory={true}/>
        </div>
        <div className='px-2'>
          <NumberField  onNumberChange={onAlternatePhoneNumberEntered} nameOfLabel={"Alternate Phone Number"} isMandatory={false}/>
        </div>
      </div>
      <div className='d-lg-flex justify-content-lg-center phone-number'>
        <div className='px-2'>
          <EmailField onTextEntered={onEnteringEmail} nameOfLabel={"Email"} isMandatory={true}/>
        </div>
        <div className='px-2'>
          <EmailField onTextEntered={onEnteringConfirmationEmail} nameOfLabel={"Confirm Email"} isMandatory={false}/>
        </div>
      </div>
      <div className='d-lg-flex justify-content-lg-center educational-institution'>
        <SelectField   nameOfLabel={"Educational Institution"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center phone-number'>
        <div className='px-2 educational-institution'>
          <CourseLevelField onSelection={onCourseLevelSelection} nameOfSecondaryLabel ={"Course Level"}/>
        </div>
        <div className='px-2 educational-institution'>
          <CourseStudyYear onSelection={onCourseYearSelection} nameOfSecondaryLabel={"Year of Study"}/>
        </div>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <CourseCompletionYear  onSelection={onCourseCompletionYearSelection} nameOfSecondaryLabel={"Year of Course Completion"} />
      </div>
      <div className='d-lg-flex justify-content-lg-center '>
        <CourseName onSelection={onCourseNameSelection} nameOfLabel={"Course Name"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <Program onSelection={onProgramSelected} nameOfLabel={"What we offer"} nameOfSecondLabel={"Programs"} nameOfThirdLabel ={"WorkShop"} isMandatory={true}/>
      </div>
      <div className='d-lg-flex justify-content-lg-center'>
        <div className='px-2 educational-institution'>
          <AboutUsField onAboutUsSelect={onAboutUsSelect} nameOfLabel ={"How did you hear about us?"} isMandatory={true}/>
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
