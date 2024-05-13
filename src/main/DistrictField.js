import React, { useEffect, useState } from 'react';

const DistrictField = ({ value, onDistrictSelected, nameOfLabel, isMandatory,nameOfSecondaryLabel, stateName, stateList  }) => {
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
        onDistrictSelected(e.target.value);
    };

    return (
        <div className="form-group py-2">
        <label className='fz-16 lato-regular mb-1'>
            {nameOfLabel}
            <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>
        </label>
        <select
            className="form-control"
            aria-label="Default select example"
            value={selectedDistrict}
            onChange={handleDistrictChange}
        >
            <option value="">Select a district</option>
            {stateList.map((state, index) => (
                <option key={index} value={state.district}>{state.district}</option>
            ))}
        </select>
        <label className='fz-12 lato-light mb-1'>{nameOfSecondaryLabel}</label>
    </div>
    );
};

export default DistrictField;