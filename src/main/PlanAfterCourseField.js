import React, { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';

const PlanAfterCourse = ({ value, onSelection, nameOfLabel, isMandatory, nameOfSecondaryLabel, hasError, errorMessage }) => {
    const [PlanAfterCourseList, setPlanAfterCourseList] = useState([]);

    useEffect(() => {
        axiosConfig.get('/api/picklist-field-configs?table=students&field=your_plan_after_your_current_course')
        .then(response => {
            if(response && response.data){
                setPlanAfterCourseList(response.data[0].values)
            }
        })
        .catch(error => {
            console.error('Error fetching states:', error);
        });
    }, []);

    const handlePlanAfterCourseSelected =(e) =>{
        onSelection(e.target.value);
    };

    return (
        <div className="form-group py-2">
            <label className='fz-16 lato-regular mb-1'>
                {nameOfLabel}
            </label>
            <select
                className={hasError === true ? "form-control input-error":"form-control"}
                aria-label="Default select example"
                // value={selectedState}
                onChange={(e) => {handlePlanAfterCourseSelected(e)}}
            >
                <option value="">Select</option>
                {PlanAfterCourseList.map((plan, index) => (
                    <option key={index} value={plan}>{plan}</option>
                ))}
            </select>
            <label className='fz-12 lato-light mb-1'>{nameOfSecondaryLabel}</label>
            <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>
            {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
        </div>
    );
};

export default PlanAfterCourse;
