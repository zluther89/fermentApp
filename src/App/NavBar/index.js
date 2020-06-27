import React from "react";
// import Modal from "../Modal";
import "./index.css";
import { component } from "prop-types";

function Nav({ children }) {
  return (
    <div className="nav">
      <div>
        <h1>Ferm.int</h1>
      </div>
      <div>{children}</div>
      <div>
        <label htmlFor="search">
          Search:
          <input name="search" />
        </label>
      </div>
      <div>
        <button type="submit">User Guide</button>
      </div>
    </div>
  );
}

Nav.propTypes = {
  children: component.isRequired,
};

export default Nav;
