import React from 'react';

const SelectField = ({ value, onChange, nameOfLabel, isMandatory,nameOfSecondaryLabel  }) => {
  return (
    <div className="form-group py-2">
        <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
        <span className='mandatory-class'>{isMandatory? "*": ""}</span>
        </label>
        <select class="form-control" aria-label="Default select example">
            <option selected>Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <label className='fz-12 lato-light mb-1'>{nameOfSecondaryLabel}</label>
    </div>
  );
};

export default SelectField;
