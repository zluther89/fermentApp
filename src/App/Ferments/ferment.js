import React from "react";
import "./index.css";
import { string, func, shape } from "prop-types";

function FermentComp({ ferment, removeHandler }) {
  return (
    <div className="ferment-item">
      <div className="ferment-header">{ferment.name}</div>
      <div className="ferment-text">
        <div>Start Date:{ferment.date}</div>
        <div>Type:{ferment.type}</div>
        <div>Status:{ferment.status}</div>
      </div>
      <div className="button-container">
        <button type="submit">Edit Details</button>
        <button
          type="submit"
          onClick={() => {
            removeHandler(ferment);
          }}
        >
          Stash
        </button>
      </div>
    </div>
  );
}

FermentComp.propTypes = {
  ferment: shape({
    name: string.isRequired,
    type: string.isRequired,
    status: string.isRequired,
    date: string.isRequired,
  }).isRequired,
  removeHandler: func.isRequired,
};

export default FermentComp;
