import React from 'react';

const NumberField = ({ value, onNumberChange, nameOfLabel, isMandatory, hasError, errorMessage }) => {
  const onNumberEntered = (e) =>{
    onNumberChange(e.target.value)
  }
  return (
    <div className="form-group py-2">
      <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
      <span className='mandatory-class'>{isMandatory? "*": ""}</span>
      </label>
      <input type="number" className={hasError === true ? "form-control input-error":"form-control"} onChange = {(e) =>onNumberEntered(e)}/>
      {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
    </div>
  );
};

export default NumberField;
