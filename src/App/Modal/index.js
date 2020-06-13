import React from "react";
import "./index.css";

function Modal({ show, handleClose }) {
  const showHide = show
    ? "modal modal-display-block"
    : "modal modal-display-none";
  return (
    <div className={showHide}>
      <section className="modal-main">
        <div className="modal-header">Create New Ferment</div>
        <form className="new-ferment-form">
          <div className="label-wrapper">
            <label>Name:</label>
            <input className="input-form"></input>
          </div>
          <div className="label-wrapper">
            <label>Status:</label>
            <input className="input-form"></input>
          </div>
          <div className="label-wrapper">
            <label>Start Date:</label>
            <input className="date-input" type="date"></input>
          </div>
          <div className="label-wrapper">
            <label>Description:</label>
            <textarea className="input-form"></textarea>
          </div>
          <div className="button-form-wrapper">
            <button>Submit</button>
            <button onClick={handleClose}>Close</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Modal;
