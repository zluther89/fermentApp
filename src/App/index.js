import React, { useState } from "react";
import "./index.css";
import Nav from "./NavBar";
import FermContainer from "./Ferments";
import Modal from "./Modal";

function App() {
  const [show, setModal] = useState(false);

  function showModal() {
    setModal(true);
  }

  function hideModal() {
    setModal(false);
  }
  return (
    <div className="App">
      <div className="nav-container">
        <Nav>
          <Modal show={show} handleClose={hideModal} />
          <button onClick={showModal}>Start a ferment</button>
        </Nav>
      </div>
      <div className="ferm-container">
        <FermContainer />
      </div>
    </div>
  );
}

export default App;
