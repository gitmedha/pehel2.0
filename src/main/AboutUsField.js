import React, { useState, useEffect } from 'react';
import axiosConfig from '../axios/axiosConfig';

const AboutUsField = ({ value, onAboutUsSelect, nameOfLabel, isMandatory, hasError, errorMessage }) => {

    const [aboutUsData, setaboutUsData] = useState([]);

    useEffect(() => {
        axiosConfig.get('/api/picklist-field-configs?table=students&field=how_did_you_hear_about_us')
        .then(response => {
            if(response){
            setaboutUsData(response.data[0].values);
            }
        })
    }, []);

    const onAboutUsChange =(event)=>{
       onAboutUsSelect(event.target.value);
    }

    return (
    <div className="form-group py-2">
        <label className='fz-16 lato-regular mb-1'>
            {nameOfLabel}
            <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>
        </label>
        <select
            className={hasError === true ? "form-control input-error" : "form-control"}
            aria-label="Default select example"
            // value={selectedState}
            onChange={(e) => {onAboutUsChange(e)}}
        >
            <option value="">Select</option>
            {aboutUsData.map((course, index) => (
                <option key={index} value={course.value}>{course.value}</option>
            ))}
        </select>
        {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
    </div>
    );
};

export default AboutUsField;
