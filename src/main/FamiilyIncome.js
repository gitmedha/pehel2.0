import React, { useState, useEffect } from 'react';
import axiosConfig from '../axios/axiosConfig';

const FamilyIncome = ({ value, onRangeSelect, nameOfLabel, isMandatory, hasError, errorMessage }) => {
    const[incomeLevel, setIncomeLevel] = useState([]);

    useEffect(() => {
        axiosConfig.get('/api/picklist-field-configs?table=students&field=income_level')
        .then(response => {
            if(response){
            setIncomeLevel(response.data[0].values);
            }
        })
    }, []);

    const onIncomeSelect =(e) =>{
        onRangeSelect(e.target.value);
    }

    return (
        <div className="form-group py-2 category-fields">
            <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
            <span className='mandatory-class'>{isMandatory? "*": ""}</span>
            </label>
            <div className='mt-1'>
            {incomeLevel.map(income => (
                <div key={income.key} className="form-check form-check-inline mt-1">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="familyIncome"
                        id={`inlineRadio${income.key}`}
                        value={income.value}
                        onChange={(e) => {onIncomeSelect(e)}}
                    />
                    <label className="form-check-label" htmlFor={`inlineRadio${income.key}`}>
                        {income.value}
                    </label>
                </div>
            ))}
            </div>
            {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
        </div>
    );
};

export default FamilyIncome;
