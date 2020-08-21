import React from "react";
import "./index.css";
import { element, arrayOf } from "prop-types";
import { Link } from "react-router-dom";

function Nav({ children }) {
  return (
    <div className="nav">
      <div>
        <h1>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Ferm.int
          </Link>
        </h1>
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
  children: arrayOf(element).isRequired,
};

export default Nav;
