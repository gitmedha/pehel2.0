import { useState, useEffect } from "react";
import TextField from "./TextField";
import StudentIdField from "./StudentIdField";
import DateField from "./DateField";
import GenderField from "./GenderField";

const AlumniForm =() =>{

const [studentId, setStudentId] = useState('');
const [studentIdError, setStudentIdError] = useState(false);
const [studentData, setStudentData] = useState([])
const [studentName, setStudentName] = useState('');
const [parentName, setParentName] = useState('');
const [dateOfBirth, setDateOfBirth] = useState('');
const [gender, setGender] = useState('')

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

console.log(studentName, "students");

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
        </div>
    </div>
)
}

export default AlumniForm;