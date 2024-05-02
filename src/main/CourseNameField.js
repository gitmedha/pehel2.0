import React, { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';

const CourseName = ({ value, onSelection, nameOfLabel, isMandatory, nameOfSecondaryLabel }) => {
    const [CourseNameList, setCourseNameList] = useState([]);

    useEffect(() => {
        axiosConfig.get('/api/picklist-field-configs?table=program_enrollments&field=course')
        .then(response => {
            if(response && response.data){
                setCourseNameList(response.data[0].values)
            }
        })
        .catch(error => {
            console.error('Error fetching states:', error);
        });
    }, []);

    const handleCourseNameSelection =(e) =>{
        onSelection(e.target.value);
    };

    return (
        <div className="form-group py-2">
            <label className='fz-16 lato-regular mb-1'>
                {nameOfLabel}
                <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>
            </label>
            <select
                className="form-control"
                aria-label="Default select example"
                // value={selectedState}
                onChange={(e) => {handleCourseNameSelection(e)}}
            >
                <option value="">Select</option>
                {CourseNameList.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                ))}
            </select>
            <label className='fz-12 lato-light mb-1'>{nameOfSecondaryLabel}</label>
        </div>
    );
};

export default CourseName;
