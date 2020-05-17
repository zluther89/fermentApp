import React, { useState } from "react";
import "./index.css";
import Ferment from "./ferment";

const sampleObj = {
  name: "test-name",
  type: "test-type",
  status: "test-status",
};

function FermContainer() {
  const [ferments, setFerments] = useState([sampleObj, sampleObj, sampleObj]);

  return (
    <div className="ferment-container">
      {ferments.map((ferment) => {
        return (
          <Ferment
            name={ferment.name}
            type={ferment.type}
            status={ferment.status}
          />
        );
      })}
    </div>
  );
}

export default FermContainer;
