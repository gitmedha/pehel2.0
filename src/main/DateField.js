import React, { useState } from "react";

const DateField = ({nameOfLabel, isMandatory }) => {
    const [startDate, setStartDate] = useState(new Date());
  return (

    <div className="form-group py-2">
        <label className='fz-16 lato-regular mb-1'>{nameOfLabel}
        <span className='mandatory-class'>{isMandatory? "*": ""}</span>
        </label>
        <input type="date" className="form-control"/>
    </div>

  );
};

export default DateField;