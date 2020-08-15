import React from "react";
import { func } from "prop-types";

function DescriptionForm({ setDescription }) {
  return (
    <div className="label-wrapper">
      <label htmlFor="description-input">Description:</label>
      <textarea
        id="description-input"
        className="input-form modal-description"
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
}

DescriptionForm.propTypes = {
  setDescription: func.isRequired,
};

export default DescriptionForm;
