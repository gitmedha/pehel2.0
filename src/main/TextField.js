import React, { useState } from 'react';

const TextField = ({
  onTextEntered,
  nameOfLabel,
  isMandatory,
  errorMessage,
  hasError,
  isDisabled,
  value
}) => {

  const [inputValue, setInputValue] = useState(value);

  const onTextChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onTextEntered(newValue);
  };

  const onKeyDown = (e) => {
    const charCode = e.which || e.keyCode;
    if (
      charCode === 8 ||
      charCode === 46 ||
      charCode === 9 ||
      charCode === 27 ||
      charCode === 13 ||
      (charCode >= 37 && charCode <= 40)
    ) {
      return;
    }

    const char = String.fromCharCode(charCode);
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(char)) {
      e.preventDefault();
    }
  };

  return (
    <div className="form-group py-2">
      <label className='fz-16 lato-regular mb-1'>
        {nameOfLabel}
        {isMandatory && <span className='mandatory-class'>*</span>}
      </label>
      <input
        type="text"
        className={hasError ? "form-control input-error" : "form-control"}
        onChange={onTextChange}
        onKeyDown={onKeyDown}
        disabled={isDisabled}
        value={inputValue}
      />
      {hasError && <div className='error-message'>{errorMessage}</div>}
    </div>
  );
};

export default TextField;
