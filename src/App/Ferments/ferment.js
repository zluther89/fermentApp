import React from "react";
import "./index.css";

function Ferment(props) {
  return (
    <div className="ferment-item">
      <div className="ferment-header">{props.name}</div>
      <div className="ferment-text">
        <div>Start Date:{props.date}</div>
        <div>Type:{props.type}</div>
        <div>Status:{props.status}</div>
      </div>
      <div className="button-container">
        <button>Edit Details</button>
        <button>Stash</button>
      </div>
    </div>
  );
}

export default Ferment;
