import React from "react";
import "./index.css";
import Nav from "./NavBar";
import FermContainer from "./Ferments";

function App() {
  return (
    <div className="App">
      <div className="nav-container">
        <Nav />
      </div>
      <div className="ferm-container">
        <FermContainer />
      </div>
    </div>
  );
}

export default App;
