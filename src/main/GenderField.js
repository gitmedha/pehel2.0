import React, { useState, useEffect } from 'react';
import axiosConfig from '../axios/axiosConfig';

const GenderField = ({ value, onGenderSelect, nameOfLabel, isMandatory, hasError, errorMessage }) => {

    const [genderData, setGenderData] = useState([]);

    useEffect(() => {
        axiosConfig.get('/api/picklist-field-configs?table=students&field=gender')
        .then(response => {
            if(response){
            setGenderData(response.data[0].values);
            }
        })
    }, []);

    const onGenderChange =(event)=>{
       onGenderSelect(event.target.value);
    }

    return (
        <div className="form-group py-2 category-fields">
            <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
            <span className='mandatory-class'>{isMandatory? "*": ""}</span>
            </label>
            <div className='mt-1'>
                {genderData.map(gender => (
                    <div key={gender.key} className="form-check form-check-inline">
                        <input
                            className="form-check-input gender-field"
                            type="radio"
                            name="gender"
                            id={`inlineRadio${gender.key}`}
                            value={gender.value}
                            onChange={(e) => {onGenderChange(e)}}
                        />
                        <label className="form-check-label" htmlFor={`inlineRadio${gender.key}`}>
                            {gender.value}
                        </label>
                    </div>
                ))}
            </div>
            {hasError === true ? <div className='error-message mt-1'> {errorMessage} </div>:<div></div>}
        </div>
    );
};

export default GenderField;
