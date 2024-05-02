import React, { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';

const CourseCompletionYear = ({ value, onSelection, nameOfLabel, isMandatory, nameOfSecondaryLabel }) => {
    const [courseCompletionYearList, setCourseCompletionYearList] = useState([]);

    useEffect(() => {
        axiosConfig.get('/api/picklist-field-configs?table=program_enrollments&field=year_of_completion')
        .then(response => {
            if(response && response.data){
                setCourseCompletionYearList(response.data[0].values)
            }
        })
        .catch(error => {
            console.error('Error fetching states:', error);
        });
    }, []);

    const handleCourseCompletionYearSelection =(e) =>{
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
                onChange={(e) => {handleCourseCompletionYearSelection(e)}}
            >
                <option value="">Select</option>
                {courseCompletionYearList.map((completionYear, index) => (
                    <option key={index} value={completionYear.value}>{completionYear.value}</option>
                ))}
            </select>
            <label className='fz-12 lato-light mb-1'>{nameOfSecondaryLabel}</label>
        </div>
    );
};

export default CourseCompletionYear;
