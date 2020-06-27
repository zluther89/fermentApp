import React, { useState } from "react";
import "./index.css";
import { func } from "prop-types";

function Modal({ show, handleClose, addHandler }) {
  const showHide = show
    ? "modal modal-display-block"
    : "modal modal-display-none";

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className={showHide}>
      <section className="modal-main">
        <div className="modal-header">Create New Ferment</div>
        <form className="new-ferment-form">
          <div className="label-wrapper">
            <label htmlFor="name-input">
              Name:
              <input
                id="name-input"
                className="input-form"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="label-wrapper">
            <label htmlFor="status-input">
              Status:
              <input
                id="status-input"
                className="input-form"
                onChange={(e) => setStatus(e.target.value)}
              />
            </label>
          </div>
          <div className="label-wrapper">
            <label htmlFor="date-input">
              Start Date:
              <input
                id="date-input"
                className="date-input"
                type="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="label-wrapper">
            <label htmlFor="description-input">
              Description:
              <textarea
                id="description-input"
                className="input-form modal-description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          <div className="button-form-wrapper">
            <button
              type="submit"
              onClick={(e) =>
                addHandler(e, { name, status, date, description })
              }
            >
              Submit
            </button>
            <button type="submit" onClick={handleClose}>
              Close
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

Modal.propTypes = {
  show: func.isRequired,
  handleClose: func.isRequired,
  addHandler: func.isRequired,
};

export default Modal;