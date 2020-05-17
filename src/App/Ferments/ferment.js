import React from "react";
import "./index.css";

function Ferment(props) {
  return (
    <div className="ferment">
      <div className="ferment-header">
        <h3>{props.name}</h3>
      </div>
      <div>{props.type}</div>
      <div>{props.status}</div>
      <div></div>
    </div>
  );
}

export default Ferment;
