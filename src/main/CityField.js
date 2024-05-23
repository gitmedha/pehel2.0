import React, { useEffect, useState } from 'react';

const CityField = ({ value, onCitySelected, nameOfLabel, isMandatory,nameOfSecondaryLabel, stateName, stateList,hasError, errorMessage,  }) => {
    const [SelctedCity, setSelctedCity] = useState('');

    const handleCityChange = (e) => {
        setSelctedCity(e.target.value);
        onCitySelected(e.target.value);
    };

    const filterCityList =() =>{
        let stateDataList= stateList;
        let result = stateDataList.filter(state => state.area !== null);
        const uniqueArea = Array.from(new Set(result.map(state => state.area)));
        return uniqueArea;
    }

    return (
        <div className="form-group py-2">
        <label className='fz-16 lato-regular mb-1'>
            {nameOfLabel}
        </label>
        <select
            className={hasError === true ? "form-control input-error":"form-control"}
            aria-label="Default select example"
            value={SelctedCity}
            onChange={handleCityChange}
        >
            <option value="">Select a city</option>
            {filterCityList().map((state, index) => (
                <option key={index} value={state}>{state}</option>
            ))}
        </select>
        <label className='fz-12 lato-light mb-1'>{nameOfSecondaryLabel}</label>
        <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>
        {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
    </div>
    );
};

export default CityField;
