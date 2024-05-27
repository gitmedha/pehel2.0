import React from 'react';

const AadharField = ({ value, onNumberChange, nameOfLabel, isMandatory, hasError, errorMessage, nameOfSecondaryLabel }) => {
  const onNumberEntered = (e) =>{
    onNumberChange(e.target.value)
  }

  const inputHandler = (e) => {
    const { value, maxLength } = e.target;
    const key = e.key;
    if (
      key === 'Backspace' ||
      key === 'Delete'
    ) {
      return;
    }
    if (String(value).length >= maxLength) {
      e.preventDefault();
      return;
    }
  };


  return (
    <div className="form-group py-2">
      <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
      {nameOfSecondaryLabel !== "Pincode" && <span className='mandatory-class'>{isMandatory? "*": ""}</span>}
      </label>
      <input type="number" className={hasError === true ? "form-control input-error":"form-control"} onChange = {(e) =>onNumberEntered(e)} onKeyDown={inputHandler} maxLength="12"/>
      {hasError === true && nameOfSecondaryLabel !== "Pincode"  ? <div className='error-message'> {errorMessage} </div>:<div></div>}
      <label className='fz-12 lato-light mb-1'>{nameOfSecondaryLabel}</label>
      {nameOfSecondaryLabel === "Pincode" && <span className='mandatory-class'>{isMandatory? "*": ""}</span>}
      {hasError === true && nameOfSecondaryLabel === "Pincode"  ? <div className='error-message'> {errorMessage} </div>:<div></div>}
    </div>
  );
};

export default AadharField;
