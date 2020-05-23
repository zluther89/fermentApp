import React, { useState } from "react";
import Modal from "../Modal";
import "./index.css";

function Nav() {
  const [show, setModal] = useState(false);

  function showModal() {
    setModal(true);
  }

  function hideModal() {
    setModal(false);
  }

  return (
    <div className="nav">
      <div>
        <h1>Ferm.int</h1>
      </div>
      <div>
        <Modal show={show} handleClose={hideModal}>
          <div>test</div>
        </Modal>
        <button onClick={showModal}>Start a ferment</button>
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
