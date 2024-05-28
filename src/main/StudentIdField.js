import React, { useState, useEffect } from 'react';
import axiosConfig from '../axios/axiosConfig';

const StudentIdField = ({ onTextEntered, nameOfLabel, isMandatory, errorMessage, hasError }) => {
    const [studentId, setStudentId] = useState('');
    const [isInvalidStudentId, setIsInvalidStudentId] = useState(false);

    const onTextChange = (e) => {
        const value = e.target.value;
        if (value.length <= 9) {
            setStudentId(value);
        }
    }

    const onBlurHandler = () => {
        if (!studentId) {
            console.error('Student ID is missing');
            return;
        }

        axiosConfig.get(`/api/students?student_id=${studentId}`)
            .then(response => {
                if (response) {
                    const data = response.data;
                    if (Array.isArray(data) && data.length === 0) {
                        setIsInvalidStudentId(true);
                    } else {
                        onTextEntered(studentId, data);
                    }
                }
            })
            .catch(error => {
                console.error('An error occurred while fetching student data:', error);
            });
    };


    return (
        <div className="form-group py-2">
            <label className='fz-16 lato-regular mb-1'>
                {nameOfLabel}
                <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>
            </label>
            <input
                type="text"
                className={hasError ? "form-control input-error" : "form-control"}
                value={studentId}
                onChange={onTextChange}
                onBlur={onBlurHandler}
                maxLength="9"
            />
            {hasError || isInvalidStudentId ? <div className='error-message'> {errorMessage} </div> : <div></div>}
        </div>
    );
};

export default StudentIdField;
