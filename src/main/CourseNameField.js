import React, { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';
import Select from 'react-select'

const CourseName = ({ courseNameListOption,value, onSelection, nameOfLabel, isMandatory, nameOfSecondaryLabel, hasError, errorMessage }) => {
    const [CourseNameList, setCourseNameList] = useState(courseNameListOption);

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
        onSelection(e.value);
    };
    return (
        <div className="form-group py-2">
            <label className='fz-16 lato-regular mb-1'>
                {nameOfLabel}
                <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>
            </label>
            <Select
                className={hasError === true ? "input-error institution-select-field":"institution-select-field"}
                aria-label="Default select example"
                // value={selectedState}
                onChange={(e) => handleCourseNameSelection(e)}
                options={CourseNameList?.map(course => ({ value: course, label: course }))}
            />
            {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
        </div>
    );
};

export default CourseName;
