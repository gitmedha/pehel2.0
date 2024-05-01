import React from 'react';

const TextField = ({onTextEntered, nameOfLabel, isMandatory }) => {
  const onTextChange =(e) =>{
    onTextEntered(e.target.value);
  }
  return (
    <div className="form-group py-2">
      <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
      <span className='mandatory-class'>{isMandatory? "*": ""}</span>
      </label>
      <input type="text" className="form-control" onChange={(e)=>{onTextChange(e)}}/>
    </div>
  );
};

export default TextField;
