import React, { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';

const CourseField = ({ value, onChange, nameOfLabel, isMandatory,nameOfSecondaryLabel, hasError, onSelection, errorMessage  }) => {
    const [courseList, setCourseList] = useState([]);
    const [courseType, setCourseType] = useState('');

    useEffect(() => {
        axiosConfig.get('/api/picklist-field-configs?table=program_enrollments&field=course_type')
        .then(response => {
            if(response && response.data){
                setCourseList(response.data[0].values)
            }
        })
        .catch(error => {
            console.error('Error fetching states:', error);
        });
    }, []);

    const handleCourseSelection =(e) =>{
        setCourseType(e.target.value);
        onSelection(e.target.value);
    };

  return (
    <div className="form-group py-2">
    <label className='fz-16 lato-regular mb-1'>
        {nameOfLabel}
        <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>
    </label>
    <select
        className={hasError === true ? "form-control input-error":"form-control"}
        aria-label="Default select example"
        value={courseType}
        onChange={(e) => {handleCourseSelection(e)}}
    >
        <option value="">Select</option>
        {courseList.map((course, index) => (
            <option key={index} value={course.value}>{course.value}</option>
        ))}
    </select>
    {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
</div>
  );
};

export default CourseField;
