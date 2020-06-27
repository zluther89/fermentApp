import React, { useState } from "react";
import "./index.css";
import Nav from "./NavBar";
import FermContainer from "./Ferments";
import Modal from "./Modal";

const sampleObj = {
  name: "test-name",
  type: "test-type",
  status: "test-status",
  date: "01/01/2001",
};

function App() {
  const [show, setModal] = useState(false);
  const [ferments, setFerments] = useState([
    sampleObj,
    sampleObj,
    sampleObj,
    sampleObj,
  ]);

  function showModal(e) {
    e.preventDefault();
    setModal(true);
  }

  function hideModal(e) {
    e.preventDefault();
    setModal(false);
  }

  function addFerment(e, fermObj) {
    e.preventDefault();
    // needs to set ferment in local state
    setFerments([...ferments, fermObj]);

    // when back end is set up needs to post ferment to db
  }

  return (
    <div className="App">
      <div className="nav-container">
        <Nav>
          <Modal show={show} handleClose={hideModal} addHandler={addFerment} />
          <button type="submit" onClick={showModal}>
            Start a ferment
          </button>
        </Nav>
      </div>
      <div className="ferm-container">
        <FermContainer ferments={ferments} />
      </div>
    </div>
  );
}

export default App;
