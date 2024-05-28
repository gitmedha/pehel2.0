import React, { useEffect, useState } from 'react';

const DistrictField = ({ value, onDistrictSelected, nameOfLabel, isMandatory,nameOfSecondaryLabel, stateName, stateList, hasError, errorMessage}) => {
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
        onDistrictSelected(e.target.value);
    };

    const filterDistrictList = () => {
        let stateDataList = stateList;
        const result = stateDataList.filter(state => state.district !== null);
        let district = [];
        result.map((state) => {
            district.push(state.district);
        });
        district = district.sort();
        return district;
    }


    return (
        <div className="form-group py-2">
        <label className='fz-16 lato-regular mb-1'>
            {nameOfLabel}
        </label>
        <select
            className={hasError === true ? "form-control input-error":"form-control"}
            aria-label="Default select example"
            value={selectedDistrict}
            onChange={handleDistrictChange}
        >
            <option value="">Select a district</option>
            {filterDistrictList().map((district, index) => (
                <option key={index} value={district}>{district}</option>
            ))}
        </select>
        <label className='fz-12 lato-light mb-1'>{nameOfSecondaryLabel}</label>
        <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>
        {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
    </div>
    );
};

export default DistrictField;
