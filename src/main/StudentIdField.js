import React from 'react';
import { useState, useEffect } from 'react';
import axiosConfig from '../axios/axiosConfig';

const StudentIdField = ({onTextEntered, nameOfLabel, isMandatory, errorMessage, hasError}) => {

    const [studentId, setStudentId] = useState('');
    const [data, setData] = useState([]);

    const onTextChange = (e) => {
        setStudentId(e.target.value);
    }

    const onBlurHandler = () => {
        axiosConfig.get(`/api/students?student_id=${studentId}`)
        .then(response => {
            if (response) {
                onTextEntered(studentId,response.data);
            }
        })
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <div className="form-group py-2">
        <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
        <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>
        </label>
        <input
            type="text"
            className={hasError ? "form-control input-error" : "form-control"}
            onChange={onTextChange}
            onBlur={onBlurHandler}
        />
        {hasError ? <div className='error-message'> {errorMessage} </div> : <div></div>}
        </div>
    );
};

export default StudentIdField;
