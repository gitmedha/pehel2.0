import React from 'react';

const MultiTextField = ({ value, onTextEntered, nameOfFirstLabel,  nameOfSecondLabel }) => {

  const onTextChange =(e) =>{
    onTextEntered(e.target.value);
  }
  return (
    <div className="form-group">
        <label className='fz-12 lato-light mb-1'>{nameOfFirstLabel}</label>
        <input type="text" className="form-control" onChange={(e) =>{onTextChange(e)}}/>
        <label className='fz-12 lato-light mb-1'>{nameOfSecondLabel}</label>
    </div>
  );
};

export default MultiTextField;
