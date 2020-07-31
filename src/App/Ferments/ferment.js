import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { string, func, shape } from "prop-types";

function FermentComp({ ferment, removeHandler }) {
  const { name, date, type, status } = ferment;
  return (
    <div className="ferment-item">
      <div className="ferment-header">{name}</div>
      <div className="ferment-text">
        <div>Start Date:{date}</div>
        <div>Type:{type}</div>
        <div>Status:{status}</div>
      </div>
      <div className="button-container">
        <Link to="/fermentdetail">
          <button type="submit">Edit Details</button>
        </Link>
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
