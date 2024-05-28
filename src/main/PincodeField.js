import React from 'react';

const PinCodeField = ({ value, onNumberChange, nameOfLabel, isMandatory, hasError, errorMessage, nameOfSecondaryLabel }) => {
  const onNumberEntered = (e) => {
    const { value } = e.target;
    if (value.length === 0 || value[0] !== '0') {
      onNumberChange(value);
    }
  };

  const inputHandler = (e) => {
    const { value, maxLength } = e.target;
    const key = e.key;

    if (
      key === 'Backspace' ||
      key === 'Delete'
    ) {
      return;
    }

    if (value.length >= maxLength) {
      e.preventDefault();
      return;
    }

    if (value.length === 0 && key === '0') {
      e.preventDefault();
    }
  };

  return (
    <div className="form-group py-2">
      <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
        {nameOfSecondaryLabel !== "Pincode" && <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>}
      </label>
      <input
        type="number"
        className={hasError === true ? "form-control input-error" : "form-control"}
        onChange={onNumberEntered}
        onKeyDown={inputHandler}
        maxLength="6"
      />
      {hasError === true && nameOfSecondaryLabel !== "Pincode" ? <div className='error-message'> {errorMessage} </div> : <div></div>}
      <label className='fz-12 lato-light mb-1'>{nameOfSecondaryLabel}</label>
      {nameOfSecondaryLabel === "Pincode" && <span className='mandatory-class'>{isMandatory ? "*" : ""}</span>}
      {hasError === true && nameOfSecondaryLabel === "Pincode" ? <div className='error-message'> {errorMessage} </div> : <div></div>}
    </div>
  );
};

export default PinCodeField;
