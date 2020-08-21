import React from "react";
import { func } from "prop-types";

function DateForm({ setDate }) {
  return (
    <div className="label-wrapper">
      <label htmlFor="date-input">Start Date:</label>
      <input
        name="date-input"
        className="date-input"
        type="date"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
    </div>
  );
}

export default DateForm;

DateForm.propTypes = {
  setDate: func.isRequired,
};
