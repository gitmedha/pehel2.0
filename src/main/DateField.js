import React, { useState } from "react";

const DateField = ({onDateEntered ,nameOfLabel, isMandatory, hasError, errorMessage, value, isDisabled }) => {

  const dateEntered = (event) => {
    onDateEntered(event.target.value);
  }
  return (
    <div className="form-group py-2">
        <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
        <span className='mandatory-class'>{isMandatory? "*": ""}</span>
        </label>
        <input type="date" className={hasError === true ? "form-control input-error":"form-control"} onChange={(e)=>{dateEntered(e)}} value={value} disabled={isDisabled} min="1920-12-31" max="2020-12-31"/>
        {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
    </div>

  );
};

export default DateField;