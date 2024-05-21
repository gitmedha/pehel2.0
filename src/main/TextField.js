import React from 'react';

const TextField = ({
  onTextEntered,
  nameOfLabel,
  isMandatory,
  errorMessage,
  hasError,
  isDisabled,
  value
}) => {

  const onTextChange = (e) => {
    onTextEntered(e.target.value);
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
        disabled={isDisabled}
        value={value}
      />
      {hasError && <div className='error-message'>{errorMessage}</div>}
    </div>
  );
};

export default TextField;
