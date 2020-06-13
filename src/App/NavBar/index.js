import React, { useState } from "react";
// import Modal from "../Modal";
import "./index.css";

function Nav({ children }) {
  return (
    <div className="nav">
      <div>
        <h1>Ferm.int</h1>
      </div>
      <div>{children}</div>
      <div>
        <label htmlFor="search">Search:</label>
        <input name="search"></input>
      </div>
      <div>
        <button>User Guide</button>
      </div>
    </div>
  );
}

export default Nav;
