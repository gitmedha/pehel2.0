import React, { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';
import Select from 'react-select'

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
        <Select
        className={hasError === true ? "input-error institution-select-field":"institution-select-field"}
        aria-label="Default select example"
        // value={selectedState}
        onchange={(e) => handleInstitutionSelection(e)}
        options={institutionList.map(collegeName => ({ value: collegeName, label: collegeName }))}
        />
        <label className='fz-12 lato-light mb-1'>{nameOfSecondaryLabel}</label>
        {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
    </div>
  );
};

export default InstitutionField;
