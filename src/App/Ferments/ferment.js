import React from "react";
import "./index.css";
import { string } from "prop-types";

function Ferment({ name, date, type, status }) {
  return (
    <div className="ferment-item">
      <div className="ferment-header">{name}</div>
      <div className="ferment-text">
        <div>Start Date:{date}</div>
        <div>Type:{type}</div>
        <div>Status:{status}</div>
      </div>
      <div className="button-container">
        <button type="submit">Edit Details</button>
        <button type="submit">Stash</button>
      </div>
    </div>
  );
}

Ferment.defaultProps = {
  status: null,
};

Ferment.propTypes = {
  name: string.isRequired,
  date: string.isRequired,
  type: string.isRequired,
  status: string,
};

export default Ferment;
