import React, { useState, useEffect } from 'react';
import axiosConfig from '../axios/axiosConfig';

const GenderField = ({ value, onGenderSelect, nameOfLabel, isMandatory, hasError, errorMessage, isDisabled }) => {
    const [genderData, setGenderData] = useState([]);

    useEffect(() => {
        axiosConfig.get('/api/picklist-field-configs?table=students&field=gender')
            .then(response => {
                if(response && response.data && response.data.length > 0) {
                    setGenderData(response.data[0].values);
                }
            })
            .catch(error => {
                console.error("Error fetching gender data", error);
            });
    }, []);

    const onGenderChange = (event) => {
        onGenderSelect(event.target.value);
    };

    return (
        <div className="form-group py-2 category-fields">
            <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
                <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>
            </label>
            <div className='mt-1'>
                {genderData.map(gender => (
                    <div key={gender.key} className="form-check form-check-inline">
                        <input
                            className="form-check-input gender-field"
                            type="radio"
                            name="gender"
                            id={`${gender.key}`}
                            value={gender.value}
                            onChange={onGenderChange}
                            checked={value && value && gender.value === value}
                            disabled={isDisabled}
                        />
                        <label className="form-check-label" htmlFor={`inlineRadio${gender.key}`}>
                            {gender.value}
                        </label>
                    </div>
                ))}
            </div>
            {hasError && <div className='error-message mt-1'>{errorMessage}</div>}
        </div>
    );
};

export default GenderField;
