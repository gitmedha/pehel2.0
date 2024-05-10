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
import DistrictField from './DistrictField';
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
  const [confirmedEmail, setConfirmedEmail] = useState('');
  const [courseLevel, setCourseLevel] = useState('');
  const [courseStudyYear, setCourseStudyYear] = useState('');
  const [courseCompletionYear, setcourseCompletionYear] = useState('');
  const [course, setCourse] = useState('');
  const [program, setProgram] = useState('');
  const [aboutUs, setAboutUs] = useState('');
  const [nameError, setNameError] = useState(false);
  const [parentNameError, setParentNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [dateOfBirthError, setDateOfBirthError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [selectedFamilyIncomeError, setSelectedFamilyIncomeError] = useState(false);
  const [familyIncomeError, setFamilyIncomeError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [confirmEmailError, setConfirmEmailError] = useState(false);
  const [institutionError, setInstitutionError] = useState(false);
  const [courseLevelError, setCourseLevelError] = useState(false);
  const [courseStudyYearError, setCourseStudyYearError] = useState(false);
  const [courseCompletionYearError, setcourseCompletionYearError] = useState(false);
  const [courseError, setCourseError] = useState(false);
  const [programError, setProgramError] = useState(false);
  const [aboutUsError, setAboutUsError] = useState(false);
  const [studentData, setStudentData] = useState({});
  const [stateList, setStateList] = useState([]);
  const [district, setDistrict] = useState('');

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
    let clubbedAddress;
    if(secondaryAddress !== ""){
    clubbedAddress = primaryAddress+ "," +secondaryAddress;
    } else {
      clubbedAddress = primaryAddress;
    }
    return clubbedAddress;
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

  const onSelectingState =(value, apiResponse) => {
    setStudentState(value);
    setStateList(apiResponse);
  }

  const onSelectingDistrict = (value) => {
    setDistrict(value);
  }

  const onValidateForm = () => {
    const fields = {
      name: { value: name, setError: setNameError },
      parentName: { value: parentName, setError: setParentNameError },
      address: { value: primaryAddress, setError: setAddressError },
      dateOfBirth: {value: dateOfBirth, setError: setDateOfBirthError},
      category: {value: category, setError: setCategoryError},
      gender: {value: gender, setError: setGenderError},
      state: {value: studentState, setError: setStateError },
      phoneNumber: {value: phoneNumber, setError: setPhoneNumberError},
      email: {value: email, setError: setEmailError},
      confirmedEmail: {value: confirmedEmail, setError: setConfirmEmailError},
      familyIncome: {value: familyIncome , setError: setFamilyIncomeError},
      selectedFamilyIncome: {value: selectedFamilyIncome, setError: setSelectedFamilyIncomeError},
      courseLevel: {value: courseLevel, setError: setCourseLevelError},
      courseCompletionYear: {value: courseCompletionYear, setError: setcourseCompletionYearError},
      courseStudyYear: {value: courseStudyYear, setError: setCourseStudyYearError},
      course: {value: course, setError: setCourseError},
      program: {value: program, setError: setProgramError},
      aboutUs: {value: aboutUs, setError: setAboutUsError}
    };

    let isValid = true;

    Object.keys(fields).forEach(fieldName => {
      const { value, setError } = fields[fieldName];
      if (value === "") {
        setError(true);
        isValid = false;
      } else {
        setError(false);
        isValid = true;
      }
    });
    return isValid;
  };

  const onButtonClicked = (e) => {
    e.preventDefault();
    if(onValidateForm() === true){
      creatStudents();
    }
  }

  const creatStudents = () =>{
    axiosConfig.post('/api/students/createFromWebhook', {
      "full_name": name,
      "parent_or_guardian_name": parentName,
      "date_of_birth": dateOfBirth,
      "pin_code": "122003",
      "category": category,
      "gender": gender,
      "income_level": selectedFamilyIncome,
      "family_annual_income": familyIncome,
      "institution_id": "118",
      "discount_code": null,
      "fee_transaction_id": "",
      "program_id": "23",
      "course_type": course,
      "course_level": courseLevel,
      "year_of_course_completion": courseCompletionYear,
      "course_year": courseStudyYear,
      "city": "Anantnag",
      "payuMoneyId": "",
      "phone": phoneNumber,
      "state": "Jammu & Kashmir",
      "amount": 0,
      "email": email,
      "address": onAddingAddress(),
      "aadhar_number": "",
      "area": null,
      "course_name_in_current_sis": "B.ED",
      "course_name_other": "",
      "how_did_you_hear_about_us": aboutUs,
      "how_did_you_hear_about_us_other": "",
      "alternate_mobile": ""
    })
    .then(function (response) {
      if (response && response.status === 200) {
        setStudentData(response && response.data);
      }
      if(Object.keys(studentData).length !==0){
        console.log("hello Jyoti!!!");
        // axiosConfig.post('/students/sendEmail',{
        //   "studentId" : studentData.student_id,
        //   "name" : name,
        //   "email": "jyoti.srivastava@coloredcow,in",
        //   "parentsName": parentName,
        //   "dateOfBirth": dateOfBirth,
        //   "educationalInstitution": "508",
        //   "course": course,
        //   "courseLevel": courseLevel,
        //   "yearOfStudy": courseStudyYear,
        //   "yearOfCompletion": courseCompletionYear,
        //   "courseName": "B.Com (Hons.)",
        //   "otherCourseName": ""
        // })
        // .then(function (secondResponse) {
        //   console.log(secondResponse);
        // })
        // .catch(function (secondError) {
        //   console.log(secondError);
        // });
      }
    })
    .catch(function (error) {
      console.log(error);
   });
  }

  return (
    <div className='p-5'>
      <h2 className='d-flex display-4 lato-regular'>SIGN UP</h2>
      <div>
        <div className='d-lg-flex justify-content-lg-center'>
          <TextField  onTextEntered={onNameEntered} nameOfLabel={"Name"} isMandatory={true} errorMessage ={"Please enter Name"} hasError = {nameError} />
        </div>
        <div className='d-lg-flex justify-content-lg-center'>
          <TextField  onTextEntered={onParentNameEntered} nameOfLabel={"Father's / Mother's Name"} isMandatory={true} errorMessage ={"Please enter Parent/Guardian's name"} hasError = {parentNameError}/>
        </div>
        <div className='d-lg-flex justify-content-lg-center'>
          <DateField onDateEntered={onDateOfBirthEntered} nameOfLabel={"Date of Birth"} isMandatory={true} errorMessage={"Please enter Address"} hasError = {dateOfBirthError}/>
        </div>
        <div className='d-lg-flex justify-content-lg-center'>
          <CategoryField onCategorySelect={onSelectingCategory} nameOfLabel={"Category"} isMandatory={true} errorMessage = {"Please select Category"} hasError = {categoryError}/>
        </div>
        <div className='d-lg-flex justify-content-lg-center'>
          <GenderField onGenderSelect={onSelectingGender} nameOfLabel={"Gender"} isMandatory={true} errorMessage = {"Please select Gender"} hasError = {genderError}/>
        </div>
        <div className='d-lg-flex justify-content-lg-center'>
          <TextField  onTextEntered={onAddingPrimaryAddress} nameOfLabel={"Address"} isMandatory={true} errorMessage={"Please enter address"} hasError={addressError}/>
        </div>
        <div className='d-lg-flex justify-content-lg-center'>
          <MultiTextField  onTextEntered={onAddingSecondaryAddress} nameOfFirstLabel={"Address Line 1"} nameOfSecondLabel= {"Address Line 2"}/>
        </div>
        <div className='d-lg-flex justify-content-lg-center phone-number'>
          <div className='px-2 educational-institution'>
            <StateField nameOfSecondaryLabel ={"State/Province/Region"} onStateSelected = {onSelectingState}/>
          </div>
          <div className='px-2 educational-institution'>
            <DistrictField nameOfSecondaryLabel={"City"} stateName ={studentState} stateList = {stateList} onDistrictSelected = {onSelectingDistrict}/>
          </div>
        </div>
        <br></br>
        <div className='d-lg-flex justify-content-lg-center'>
          <NumberField  onNumberChange={onAadharEntered} nameOfLabel={"Aadhaar Number"} isMandatory={false}/>
        </div>
        <div className='d-lg-flex justify-content-lg-center'>
          <FamilyIncome nameOfLabel={"Family's Annual Income"} isMandatory={true} onRangeSelect ={onSelectingFamilyIncome} hasError={selectedFamilyIncomeError} errorMessage={"Please select Family Income"} />
        </div>
        <div className='d-lg-flex justify-content-lg-center'>
          <NumberField  onNumberChange={onAddingFamilyIncome} nameOfLabel={"Family Annual Income Amount"} isMandatory={true} hasError= {familyIncomeError} errorMessage ={"Please enter Family Income"}/>
        </div>
        <div className='d-lg-flex justify-content-lg-center phone-number'>
          <div className='px-2'>
            <NumberField  onNumberChange={onPhoneNumberEntered} nameOfLabel={"Phone Number"} isMandatory={true} hasError= {phoneNumberError} errorMessage= {"Please enter Phone Number"}/>
          </div>
          <div className='px-2'>
            <NumberField  onNumberChange={onAlternatePhoneNumberEntered} nameOfLabel={"Alternate Phone Number"} isMandatory={false} />
          </div>
        </div>
        <div className='d-lg-flex justify-content-lg-center phone-number'>
          <div className='px-2'>
            <EmailField onTextEntered={onEnteringEmail} nameOfLabel={"Email"} isMandatory={true} hasError= {emailError} errorMessage ={"Please enter Email"}/>
          </div>
          <div className='px-2'>
            <EmailField onTextEntered={onEnteringConfirmationEmail} nameOfLabel={"Confirm Email"} isMandatory={false} hasError={confirmEmailError} errorMessage={"Please confirm email"}/>
          </div>
        </div>
        <div className='d-lg-flex justify-content-lg-center educational-institution'>
          <SelectField   nameOfLabel={"Educational Institution"} isMandatory={true}/>
        </div>
        <div className='d-lg-flex justify-content-lg-center phone-number'>
          <div className='px-2 educational-institution'>
            <CourseLevelField onSelection={onCourseLevelSelection} nameOfSecondaryLabel ={"Course Level"} hasError ={courseLevelError} errorMessage ={"Please enter Course Level"}/>
          </div>
          <div className='px-2 educational-institution'>
            <CourseStudyYear onSelection={onCourseYearSelection} nameOfSecondaryLabel={"Year of Study"} hasError ={courseStudyYearError} errorMessage ={"Please enter Year Of Study"}/>
          </div>
        </div>
        <div className='d-lg-flex justify-content-lg-center'>
          <CourseCompletionYear  onSelection={onCourseCompletionYearSelection} nameOfSecondaryLabel={"Year of Course Completion"} hasError= {courseCompletionYearError} errorMessage={"Please enter Course Completion Year"} />
        </div>
        <div className='d-lg-flex justify-content-lg-center '>
          <CourseName onSelection={onCourseNameSelection} nameOfLabel={"Course Name"} isMandatory={true} hasError={courseError} errorMessage={"Please enter Course"}/>
        </div>
        <div className='d-lg-flex justify-content-lg-center'>
          <Program onSelection={onProgramSelected} nameOfLabel={"What we offer"} nameOfSecondLabel={"Programs"} nameOfThirdLabel ={"WorkShop"} isMandatory={true} hasError={programError} errorMessage = {"Please select Program or Workshop"}/>
        </div>
        <div className='d-lg-flex justify-content-lg-center'>
          <div className='px-2 educational-institution'>
            <AboutUsField onAboutUsSelect={onAboutUsSelect} nameOfLabel ={"How did you hear about us?"} isMandatory={true} hasError={aboutUsError} errorMessage= {"Please enter this value"}/>
          </div>
        </div>
        <div className='d-lg-flex justify-content-lg-center'>
          <ConsentSection/>
        </div>
      </div>
      <br></br>
      {/* <DonationForm/> */}
      <div className='d-lg-flex justify-content-lg-center'>
      <button type="button" class="btn btn-warning submit-button" onClick={onButtonClicked}>Submit</button>
      </div>
    </div>
  );
};

export default RegistrationForm;
