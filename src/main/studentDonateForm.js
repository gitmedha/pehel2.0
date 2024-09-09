import { useState, useEffect } from "react";
import TextField from "./TextField";
import StudentIdField from "./StudentIdField";
import DateField from "./DateField";
import GenderField from "./GenderField";
import DonationForm from "./DonationForm";
import axiosConfig from "../axios/axiosConfig";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./Loader";

const StudentDonateForm = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState('');
  const [studentIdError, setStudentIdError] = useState(false);
  // const [studentData, setStudentData] = useState([])
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('');
  const [programId, setProgramId] = useState('');
  const [paymentMappingList, setPaymentMappingList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stuId, setStuId] = useState('')

  const onEnteringStudentId = (value, data) => {
    setStuId(value)
    setStudentId(data[0]?.id);
    studentInformation(data)
  }

  const studentInformation = (data) => {
    if (data && data[0]) {
      setStuId(data[0]?.student_id)
      setStudentName(data[0]?.full_name);
      setParentName(data[0]?.name_of_parent_or_guardian);
      setDateOfBirth(data[0]?.date_of_birth);
      setGender(data[0]?.gender);
      setEmail(data[0]?.email);
    }
  }


  useEffect(() => {
    axiosConfig.post('/api/institutions/paymentRequired').then(
      response => {
        if (response && response.data) {
          setPaymentMappingList(response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching states:', error);
      });
  }, []);

  const isPaymentRequired = () => {
    let isPaid;
    let paymentList = paymentMappingList;
    const filteredList = paymentList.filter(item => {
      return item.program_name === programId;
    });
    isPaid = filteredList && filteredList[0] && filteredList[0].payment;
    return isPaid;
  }

  const onValidateForm = () => {
    const fields = {
      studentId: { value: studentId, setError: setStudentIdError },
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
    let student_id = studentId;
    student_id = +student_id
    axiosConfig.post('/api/program-enrollments/createFromWebhook', {
      "student_id": student_id,
      "program_id": +program,
      "amount": 0,
    })
      .then(function (response) {
        if (response && response.status === 200) {
          const studentInfo = response.data;
          axiosConfig.post('/api/students/sendEmail', {
            "studentId": stuId,
            "name": studentName,
            "email": email,
            "parentsName": parentName,
            "dateOfBirth": dateOfBirth,
            "program": programId
          })
            .then(function (secondResponse) {
              if (secondResponse && secondResponse.status === 200) {
                {
                  (isModalOpen === false || isPaymentRequired() === false) &&
                    navigate('/thankyou', {
                      state: {
                        name: studentName,
                        id: stuId,
                        email: email
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

  const onClickOfDonateButton = (e) => {
    e.preventDefault();
    if (onValidateForm() === true) {
      setIsModalOpen(true);
      let isThankYou = false;
      if (window.location.href.includes('thankyou')) {
        isThankYou = true;
        if (isThankYou === true) {
          createStudents();
        }
      }
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='p-5 container'>
      <h2 className='d-flex display-4 lato-regular'>SIGN UP</h2>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12">
          <StudentIdField onTextEntered={onEnteringStudentId} nameOfLabel={"Student Id"} isMandatory={true} errorMessage={"Please enter valid StudentId"} hasError={studentIdError} />
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <TextField nameOfLabel={"Name"} value={studentName} isDisabled={true} isOldStudent={true} />
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <DateField nameOfLabel={"Date of Birth"} value={dateOfBirth} isDisabled={true} />
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <GenderField nameOfLabel={"Gender"} isDisabled={true} value={gender} />
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <TextField nameOfLabel={"Parent/Guardian's Name"} value={parentName} isDisabled={true} isOldStudent={true} />
        </div>
      </div>
      <br></br>
      {isModalOpen && <DonationForm student_id={stuId} isOpen={isModalOpen} onClose={handleCloseModal} />}

      <div className="d-flex justify-content-center">
        <button className="btn btn-warning submit-button" onClick={onClickOfDonateButton} >Donate</button>
      </div>

      {loading === true &&
        <Loader />
      }
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default StudentDonateForm;