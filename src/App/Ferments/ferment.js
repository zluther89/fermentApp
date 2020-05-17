import React from "react";
import "./index.css";

function Ferment(props) {
  return (
    <div className="ferment">
      <div className="ferment-header">{props.name}</div>
      <div>{props.type}</div>
      <div>{props.status}</div>
      <div></div>
    </div>
  );
}

export default Ferment;
