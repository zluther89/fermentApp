import React from "react";
import "./index.css";
import { arrayOf, shape, string, func } from "prop-types";
import FermentComp from "./ferment";

function FermContainer({ ferments, removeHandler }) {
  return (
    <div className="center-container">
      <div className="ferment-container">
        {ferments.map((ferment) => {
          return (
            <FermentComp
              ferment={ferment}
              removeHandler={removeHandler}
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
  removeHandler: func.isRequired,
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
