import React, { useState, useEffect } from "react";
import "./index.css";
import { func, bool } from "prop-types";
import axios from "axios";

function Modal({ show, handleClose, addHandler }) {
  const showHide = show
    ? "modal modal-display-block"
    : "modal modal-display-none";

  const [name, setName] = useState("");
  const [statusOps, setStatusOps] = useState([{ status: "status" }]);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  // const [typeOps, setTypeOps] = useState("");
  const [status, setStatus] = useState([]);

  async function getAllStatus() {
    try {
      const res = await axios.get("http://localhost:3010/status");
      setStatusOps(res.data);
    } catch (e) {
      console.warn(e);
    }
  }

  useEffect(() => {
    getAllStatus();
  }, []);

  return (
    <div className={showHide}>
      <section className="modal-main">
        <div className="modal-header">Create New Ferment</div>
        <form className="new-ferment-form">
          <div className="label-wrapper">
            <label htmlFor="name-input">Name:</label>
            <input
              id="name-input"
              className="input-form"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="label-wrapper">
            <label htmlFor="status-input">Status:</label>
            <select
              name="status-input"
              className="input-form"
              onBlur={(e) => setStatus(e.target.value)}
            >
              {statusOps.map((st) => {
                return <option value={st.status}>{st.status}</option>;
              })}
            </select>
          </div>
          <div className="label-wrapper">
            <label htmlFor="date-input">Start Date:</label>
            <input
              name="date-input"
              className="date-input"
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="label-wrapper">
            <label htmlFor="description-input">Description:</label>
            <textarea
              id="description-input"
              className="input-form modal-description"
              onChange={(e) => setDescription(e.target.value)}
            />
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

Modal.defaultProps = {
  show: false,
};

Modal.propTypes = {
  show: bool,
  handleClose: func.isRequired,
  addHandler: func.isRequired,
};

export default Modal;
