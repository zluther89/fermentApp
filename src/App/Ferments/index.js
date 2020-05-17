import React, { useState } from "react";
import "./index.css";
import Ferment from "./ferment";

const sampleObj = {
  name: "test-name",
  type: "test-type",
  status: "test-status",
  date: "01/01/2001",
};

function FermContainer() {
  const [ferments, setFerments] = useState([
    sampleObj,
    sampleObj,
    sampleObj,
    sampleObj,
  ]);

  return (
    <div className="ferment-container">
      {ferments.map((ferment) => {
        return (
          <Ferment
            name={ferment.name}
            type={ferment.type}
            status={ferment.status}
            date={ferment.date}
          />
        );
      })}
    </div>
  );
}

export default FermContainer;
