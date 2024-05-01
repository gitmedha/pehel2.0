import React from 'react';

const EmailField = ({ value, onChange, nameOfLabel, isMandatory }) => {
  return (
    <div className="form-group py-2">
      <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
      <span className='mandatory-class'>{isMandatory? "*": ""}</span>
      </label>
      <input type="email" className="form-control"/>
    </div>
  );
};

export default EmailField;