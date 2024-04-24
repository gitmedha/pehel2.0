import React from 'react';

const MultiTextField = ({ value, onChange, nameOfFirstLabel,  nameOfSecondLabel, isMandatory }) => {
  return (
    <div className="form-group">
        <label className='fz-12 lato-light mb-1'>{nameOfFirstLabel}</label>
        <input type="text" className="form-control"/>
        <label className='fz-12 lato-light mb-1'>{nameOfSecondLabel}</label>
    </div>
  );
};

export default MultiTextField;
