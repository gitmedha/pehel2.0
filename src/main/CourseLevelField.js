import React, { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';

const CourseLevelField = ({ value, onSelection, nameOfLabel, isMandatory, nameOfSecondaryLabel, hasError, errorMessage  }) => {
    const [courseLevelList, setCourseLevelList] = useState([]);

    useEffect(() => {
        axiosConfig.get('/api/picklist-field-configs?table=program_enrollments&field=course_level')
        .then(response => {
            if(response && response.data){
                setCourseLevelList(response.data[0].values)
            }
        })
        .catch(error => {
            console.error('Error fetching states:', error);
        });
    }, []);

    const handleCourseLevelChange =(e) =>{
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
                onChange={(e) => {handleCourseLevelChange(e)}}
            >
                <option value="">Select</option>
                {courseLevelList.map((courseLevel, index) => (
                    <option key={index} value={courseLevel.value}>{courseLevel.value}</option>
                ))}
            </select>
            <label className='fz-12 lato-light mb-1'>{nameOfSecondaryLabel}</label>
            {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
        </div>
    );
};

export default CourseLevelField;
