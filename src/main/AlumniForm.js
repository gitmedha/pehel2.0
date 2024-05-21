import { useState, useEffect } from "react";
import TextField from "./TextField";
import StudentIdField from "./StudentIdField";
import DateField from "./DateField";
import GenderField from "./GenderField";
import ConsentSection from "./ConsentSection";
import InstitutionField from "./InstitutionField";
import CourseField from "./Course";
import CourseLevelField from "./CourseLevelField";
import CourseStudyYear from "./YearOfStudyField";
import CourseCompletionYear from "./YearOfCompletionField";
import PlanAfterCourse from "./PlanAfterCourseField";
import CourseName from "./CourseNameField";
import Program from "./Programs";
import DonationForm from "./DonationForm";
import axiosConfig from "../axios/axiosConfig";

const AlumniForm =() =>{

const [studentId, setStudentId] = useState('');
const [studentIdError, setStudentIdError] = useState(false);
const [studentData, setStudentData] = useState([])
const [studentName, setStudentName] = useState('');
const [parentName, setParentName] = useState('');
const [dateOfBirth, setDateOfBirth] = useState('');
const [gender, setGender] = useState('');
const [collegeName, setCollegeName] = useState('');
const [collegeId, setCollegeId] = useState('');
const [courseType, setCourseType] = useState('');
const [courseLevel, setCourseLevel] = useState('');
const [planAfterCourse, setPlanAfterCourse] = useState('');
const [courseCompletionYear, setcourseCompletionYear] = useState('');
const [courseStudyYear, setCourseStudyYear] = useState('');
const [course, setCourse] = useState('');
const [otherCourse, setOtherCourse] = useState('');
const [program, setProgram] = useState('');
const [programId, setProgramId] = useState('');
const [paymentMappingList, setPaymentMappingList] = useState([]);
const [institutionError, setInstitutionError] =useState(false);
const [courseTypeError, setCourseTypeError] = useState(false);
const [courseLevelError, setCourseLevelError] = useState(false);
const [courseStudyYearError, setCourseStudyYearError] = useState(false);
const [courseCompletionYearError, setcourseCompletionYearError] = useState(false);
const [courseError, setCourseError] = useState(false);
const [otherCourseError, setOtherCourseError] = useState(false);
const [programError, setProgramError] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);

const onEnteringStudentId =(value, data) =>{
  setStudentId(value);
  studentInformation(data)
}
const studentInformation =(data) =>{
  if(data && data[0]){
    setStudentName(data[0].full_name);
    setParentName(data[0].name_of_parent_or_guardian);
    setDateOfBirth(data[0].date_of_birth);
    setGender(data[0].gender);
  }
}

const onSelectionInstitution =(value, label) =>{
  setCollegeName(label);
  setCollegeId(value);
}

const onSelectionCourseType  =(value) =>{
  setCourseType(value);
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

const onSelectionPlanAfterCourse = (value) => {
  setPlanAfterCourse(value);
}

const onCourseNameSelection =(value) => {
  setCourse(value);
}

const onOtherCourseNameEntered = (value) => {
  setOtherCourse(value);
};

const onProgramSelected = (value,id) => {
  setProgram(value);
  setProgramId(id)
}

useEffect( () =>{
  axiosConfig.post('/api/institutions/paymentRequired').then(
    response =>{
      if(response && response.data){
        setPaymentMappingList(response.data);
      }
    })
    .catch(error => {
      console.error('Error fetching states:', error);
    });
},[]);

const isPaymentRequired = () =>{
  let isPaid;
  let paymentList = paymentMappingList;
  const filteredList = paymentList.filter(item => {
    return item.institution_name === collegeName && item.program_name === programId;
  });
  isPaid = filteredList &&  filteredList[0] && filteredList[0].payment;
  return isPaid;
}

const onValidateForm = () => {
  const fields = {
    courseLevel: { value: courseLevel, setError: setCourseLevelError },
    courseCompletionYear: { value: courseCompletionYear, setError: setcourseCompletionYearError },
    courseStudyYear: { value: courseStudyYear, setError: setCourseStudyYearError },
    course: { value: course, setError: setCourseError },
    program: { value: program, setError: setProgramError },
    courseType: { value: courseType, setError: setCourseTypeError },
    institution: { value: collegeName, setError: setInstitutionError },
    ...(course === 'other' && { otherCourse: { value: otherCourse, setError: setOtherCourseError } }),
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

const createStudents = () => {
  axiosConfig.post('/api/program-enrollments/createFromWebhook', {
    "student_id" : studentId,
    "institution_id" : collegeId,
    "program_id" : program,
    "course_type" : courseType,
    "course_level" : courseLevel,
    "year_of_course_completion" : courseCompletionYear,
    "course_year" : courseStudyYear,
    "course_name_in_current_sis" : course,
    "course_name_other" : otherCourse,
    "amount" : 0,
  })
  .then(function (response) {
    if (response && response.status === 200) {
      const studentInfo = response.data;
      axiosConfig.post('/api/students/sendEmail', {
        "studentId": studentInfo.student_id,
        "name": studentName,
        "email": email,
        "parentsName": parentName,
        "dateOfBirth": dateOfBirth,
        "educationalInstitution": collegeName,
        "course": course,
        "courseLevel": courseLevel,
        "yearOfStudy": courseStudyYear,
        "yearOfCompletion": courseCompletionYear,
        "courseName": courseType,
        "otherCourseName": otherCourse,
        "program": programId
      })
      .then(function (secondResponse) {
        if (secondResponse && secondResponse.status === 200) {
          setName('');
          setParentName('');
          setDateOfBirth('');
          setGender('');
          setCollegeName('');
          setCourse('');
          setCourseLevel('');
          setCourseStudyYear('');
          setcourseCompletionYear('');
          setPlanAfterCourse('');
          setCourseType('');
          setProgram('');
          {(isModalOpen === false || isPaymentRequired === false) &&
          navigate('/thankyou', {
            state: {
              name: studentInfo.full_name,
              id: studentInfo.student_id,
              email: studentInfo.email
            },
          });
          }
        }
      })
      .catch(function (secondError) {
        console.log(secondError);
      });
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}

const onClickOfDonateButton =(e) =>{
  e.preventDefault();
  if(onValidateForm() === true){
    setIsModalOpen(true);
    if(isModalOpen === true){
      createStudents();
    }
  }
}

const onButtonClicked = (e) => {
  e.preventDefault();
  if(onValidateForm() === true ){
    showToastMessage();
    createStudents();
  }
}
return(
    <div className='p-5'>
        <h2 className='d-flex display-4 lato-regular'>SIGN UP</h2>
        <div>
          <div className='d-lg-flex justify-content-lg-center'>
            <StudentIdField onTextEntered={onEnteringStudentId} nameOfLabel={"Student Id"} isMandatory={true} errorMessage ={"Please enter StudentId"} hasError = {studentIdError} />
          </div>
          <div className='d-lg-flex justify-content-lg-center'>
            <TextField nameOfLabel={"Name"} value ={studentName} isMandatory={true} isDisabled ={true}/>
          </div>
          <div className='d-lg-flex justify-content-lg-center'>
            <TextField nameOfLabel={"Parent/Guardian's Name"} value ={parentName} isMandatory={true} isDisabled ={true}/>
          </div>
          <div className='d-lg-flex justify-content-lg-center'>
            <DateField nameOfLabel={"Date of Birth"} isMandatory={true} value={dateOfBirth} isDisabled={true}/>
          </div>
          <div className='d-lg-flex justify-content-lg-center'>
          <GenderField nameOfLabel={"Gender"} isMandatory={true} isDisabled ={true} value={gender}/>
          </div>
          <div className='d-lg-flex justify-content-lg-center educational-institution'>
            <InstitutionField   nameOfLabel={"Educational Institution"} isMandatory={true} onSelection={onSelectionInstitution} hasError={institutionError} errorMessage={"Please enter Educational Institution"}/>
          </div>
          <div className='d-lg-flex justify-content-lg-center educational-institution'>
            <CourseField   nameOfLabel={"Course"} onSelection={onSelectionCourseType} isMandatory={true} hasError ={courseTypeError} errorMessage ={"Please enter Course"}/>
          </div>
          <div className='d-lg-flex justify-content-lg-center phone-number'>
            <div className='px-2 educational-institution'>
              <CourseLevelField onSelection={onCourseLevelSelection} nameOfSecondaryLabel ={"Course Level"} hasError ={courseLevelError} errorMessage ={"Please enter Course Level"}/>
            </div>
            <div className='px-2 educational-institution'>
              <CourseStudyYear onSelection={onCourseYearSelection} nameOfSecondaryLabel={"Year of Study"} hasError ={courseStudyYearError} errorMessage ={"Please enter Year Of Study"}/>
            </div>
          </div>
          <div className="d-lg-flex justify-content-lg-center phone-number">
            <div className='px-2 educational-institution'>
              <CourseCompletionYear  onSelection={onCourseCompletionYearSelection} nameOfSecondaryLabel={"Year of Course Completion"} hasError= {courseCompletionYearError} errorMessage={"Please enter Course Completion Year"} />
            </div>
            <div className='px-2 educational-institution'>
              <PlanAfterCourse  onSelection={onSelectionPlanAfterCourse} nameOfSecondaryLabel={"Plan After Course Completion"} hasError= {courseCompletionYearError} errorMessage={"Please enter Plan After Course"} />
            </div>
          </div>
          <div className='d-lg-flex justify-content-lg-center '>
            <CourseName onSelection={onCourseNameSelection} nameOfLabel={"Course Name"} isMandatory={true} hasError={courseError} errorMessage={"Please enter Course Name"}/>
          </div>
          {
            course === "Other" && <div className='d-lg-flex justify-content-lg-center'><TextField onTextEntered={onOtherCourseNameEntered} nameOfLabel={"Specify Course Name"} isMandatory={true} errorMessage ={"Please enter other course name"} hasError = {otherCourseError} /></div>
          }
          <div className='d-lg-flex justify-content-lg-center'>
            <Program onSelection={onProgramSelected} nameOfLabel={"What we offer"} nameOfSecondLabel={"Programs"} nameOfThirdLabel ={"WorkShop"} isMandatory={true} hasError={programError} errorMessage = {"Please select Program or Workshop"}/>
          </div>
          <div className='d-lg-flex justify-content-lg-center'>
            <ConsentSection/>
          </div>
        </div>
      <br></br>
      {isModalOpen && <DonationForm isOpen = {isModalOpen}/>}
      {isPaymentRequired() === true ?
        <div className='d-lg-flex justify-content-lg-center'>
        <button type="button" class="btn btn-warning submit-button" onClick={onClickOfDonateButton}>Donate</button>
        </div>
          :
        <div className='d-lg-flex justify-content-lg-center'>
        <button type="button" class="btn btn-warning submit-button" onClick={onButtonClicked}>Submit</button>
        </div>
      }
    </div>
)
}

export default AlumniForm;