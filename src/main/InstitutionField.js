import React, { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';

const InstitutionField = ({ value, onChange, nameOfLabel, isMandatory,nameOfSecondaryLabel, hasError, onSelection, errorMessage  }) => {
    const [institutionList, setinstitutionList] = useState([]);

    useEffect(() => {
        axiosConfig.get('/api/picklist-field-configs?table=Pitching&field=college_name')
        .then(response => {
            if(response && response.data){
                setinstitutionList(response.data[0].values)
            }
        })
        .catch(error => {
            console.error('Error fetching states:', error);
        });
    }, []);

    const handleInstitutionSelection =(e) =>{
        onSelection(e.target.value);
    };

  return (
    <div className="form-group py-2">
    <label className='fz-16 lato-regular mb-1'>
        {nameOfLabel}
        <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>
    </label>
    <select
        className={hasError === true ? "form-control input-error":"form-control"}
        aria-label="Default select example"
        // value={selectedState}
        onChange={(e) => {handleInstitutionSelection(e)}}
    >
        <option value="">Select</option>
        {institutionList.map((collegeName, index) => (
            <option key={index} value={collegeName}>{collegeName}</option>
        ))}
    </select>
    <label className='fz-12 lato-light mb-1'>{nameOfSecondaryLabel}</label>
    {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
</div>
  );
};

export default InstitutionField;
