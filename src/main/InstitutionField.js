import React, { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';
import Select from 'react-select'

const InstitutionField = ({ value, onChange, nameOfLabel, isMandatory,nameOfSecondaryLabel, hasError, onSelection, errorMessage  }) => {
    const [institutionList, setinstitutionList] = useState([]);
    const [institution, setInstitution] = useState('');

    useEffect(() => {
        axiosConfig.get('/api/payment-mappings')
            .then(response => {
                if (response && response.data) {
                    let sortedInstitutions = response.data.sort((a, b) => {
                        if (a.institution_name < b.institution_name) return -1;
                        if (a.institution_name > b.institution_name) return 1;
                        return 0;
                    });
                    setinstitutionList(sortedInstitutions);
                }
            })
            .catch(error => {
                console.error('Error fetching institutions:', error);
            });
    }, []);


    const handleInstitutionSelection =(e) =>{
        onSelection(e.value, e.label);
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
        onChange={(e) => handleInstitutionSelection(e)}
        options={institutionList.map(collegeName =>
            ({ value: collegeName.sis_id.id, label: collegeName.institution_name })
        )
        }
        />
        {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
    </div>
  );
};

export default InstitutionField;
