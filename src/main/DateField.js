import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DateField = () => {
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};