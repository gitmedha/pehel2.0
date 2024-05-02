import React from 'react';

const EmailField = ({ value, onTextEntered, nameOfLabel, isMandatory }) => {

  const onEmailEntered =(e) => {
    onTextEntered(e.target.value);
  }
  return (
    <div className="form-group py-2">
      <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
      <span className='mandatory-class'>{isMandatory? "*": ""}</span>
      </label>
      <input type="email" className="form-control" onChange={(e)=>{onEmailEntered(e)}}/>
    </div>
  );
};

export default EmailField;
