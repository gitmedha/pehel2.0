import React, { useState } from "react";

const DateField = ({onDateEntered ,nameOfLabel, isMandatory, hasError, errorMessage }) => {

  const dateEntered = (event) => {
    onDateEntered(event.target.value);
  }

  return (
    <div className="form-group py-2">
        <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
        <span className='mandatory-class'>{isMandatory? "*": ""}</span>
        </label>
        <input type="date" className={hasError === true ? "form-control input-error":"form-control"} onChange={(e)=>{dateEntered(e)}}/>
        {hasError === true ? <div className='error-message'> {errorMessage} </div>:<div></div>}
    </div>

  );
};

export default DateField;