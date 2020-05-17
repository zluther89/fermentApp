import React from "react";
import "./index.css";

function Nav() {
  return (
    <div className="nav">
      <div>
        <h1>Ferm.int</h1>
      </div>
      <div>
        <button>Start a ferment</button>
      </div>
      <div>
        <label for="search">Search:</label>
        <input name="search"></input>
      </div>
      <div>
        <button>User Guide</button>
      </div>
    </div>
  );
}

export default Nav;
