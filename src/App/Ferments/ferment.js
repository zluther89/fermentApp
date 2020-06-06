import React from "react";
import "./index.css";

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
        <button>Edit Details</button>
        <button>Stash</button>
      </div>
    </div>
  );
}

export default Ferment;
