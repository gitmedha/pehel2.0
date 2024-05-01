import React, { useState } from "react";

const DateField = ({onDateEntered ,nameOfLabel, isMandatory }) => {

  const dateEntered = (event) => {
    onDateEntered(event.target.value);
  }

  return (
    <div className="form-group py-2">
        <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
        <span className='mandatory-class'>{isMandatory? "*": ""}</span>
        </label>
        <input type="date" className="form-control" onChange={(e)=>{dateEntered(e)}}/>
    </div>

  );
};

export default DateField;