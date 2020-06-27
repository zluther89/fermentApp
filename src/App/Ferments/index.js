import React from "react";
import "./index.css";
import { arrayOf, shape, string } from "prop-types";
import Ferment from "./ferment";

function FermContainer({ ferments }) {
  return (
    <div className="center-container">
      <div className="ferment-container">
        {ferments.map((ferment) => {
          return (
            <Ferment
              name={ferment.name}
              type={ferment.type}
              status={ferment.status}
              date={ferment.date}
              key={Math.random()}
            />
          );
        })}
      </div>
    </div>
  );
}

FermContainer.defaultProps = {
  ferments: [],
};

FermContainer.propTypes = {
  ferments: arrayOf(
    shape({
      name: string.isRequired,
      type: string.isRequired,
      status: string.isRequired,
      date: string.isRequired,
    })
  ),
};
export default FermContainer;
