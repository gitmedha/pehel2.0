import React, { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';

const CourseStudyYear = ({ value, onSelection, nameOfLabel, isMandatory, nameOfSecondaryLabel, hasError, errorMessage }) => {
    const [courseStudyYearList, setcourseStudyYearList] = useState([]);

    useEffect(() => {
        axiosConfig.get('/api/picklist-field-configs?table=program_enrollments&field=current_course_year')
        .then(response => {
            if(response && response.data){
                setcourseStudyYearList(response.data[0].values)
            }
        })
        .catch(error => {
            console.error('Error fetching states:', error);
        });
    }, []);

    const handleCourseYearSelcted =(e) =>{
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
                // value={selectedState}
                onChange={(e) => {handleCourseYearSelcted(e)}}
            >
                <option value="">Select</option>
                {courseStudyYearList.map((courseYear, index) => (
                    <option key={index} value={courseYear.value}>{courseYear.value}</option>
                ))}
            </select>
            <label className='fz-12 lato-light mb-1'>{nameOfSecondaryLabel}</label>
            {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
        </div>
    );
};

export default CourseStudyYear;
