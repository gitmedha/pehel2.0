import React, { useEffect, useState } from 'react';

const CityField = ({ value, onCitySelected, nameOfLabel, isMandatory,nameOfSecondaryLabel, stateName, stateList,hasError, errorMessage,  }) => {
    const [SelctedCity, setSelctedCity] = useState('');

    const handleCityChange = (e) => {
        setSelctedCity(e.target.value);
        onCitySelected(e.target.value);
    };

    return (
        <div className="form-group py-2">
        <label className='fz-16 lato-regular mb-1'>
            {nameOfLabel}
        </label>
        <select
            className="form-control"
            aria-label="Default select example"
            value={SelctedCity}
            onChange={handleCityChange}
        >
            <option value="">Select a city</option>
            {stateList.map((state, index) => (
                <option key={index} value={state.area}>{state.area}</option>
            ))}
        </select>
        <label className='fz-12 lato-light mb-1'>{nameOfSecondaryLabel}</label>
        <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>
        {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
    </div>
    );
};

export default CityField;
