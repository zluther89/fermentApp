import React from "react";
import "./index.css";

function Ferment(props) {
  return (
    <div className="ferment-item">
      <div className="ferment-header">{props.name}</div>
      <div className="ferment-text">
        <div>Type:{props.type}</div>
        <div>Status:{props.status}</div>
      </div>
    </div>
  );
}

export default Ferment;
