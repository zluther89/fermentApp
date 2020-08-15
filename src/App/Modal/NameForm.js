import React from "react";
import { func } from "prop-types";

function NameForm({ handler }) {
  return (
    <div className="label-wrapper">
      <label htmlFor="name-input">Name:</label>
      <input
        id="name-input"
        className="input-form"
        onChange={(e) => {
          handler(e.target.value);
        }}
      />
    </div>
  );
}

NameForm.propTypes = {
  handler: func.isRequired,
};

export default NameForm;
