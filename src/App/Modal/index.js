import React, { useState, useEffect } from "react";
import "./index.css";
import { func, bool } from "prop-types";
import axios from "axios";

function Modal({ show, handleClose, addHandler }) {
  const showHide = show
    ? "modal modal-display-block"
    : "modal modal-display-none";

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [statusOps, setStatusOps] = useState([{ status: "status" }]);
  const [status, setStatus] = useState();
  const [statusId, setStatusId] = useState();

  const [typeOps, setTypeOps] = useState([{ status: "status" }]);
  const [type, setType] = useState();
  const [typeId, setTypeId] = useState();
  async function getAllStatus() {
    try {
      const { data: res } = await axios.get("/status");
      setStatusOps(res);
    } catch (e) {
      console.warn(e);
    }
  }

  async function getAllTypes() {
    try {
      const { data: res } = await axios.get("/types");
      setTypeOps(res);
    } catch (e) {
      console.warn(e);
    }
  }

  useEffect(() => {
    getAllStatus();
    getAllTypes();
  }, []);

  useEffect(() => {
    let id;
    statusOps.forEach((statusOp) => {
      if (statusOp.status === status) {
        id = statusOp.id;
      }
    });
    setStatusId(id);
  }, [status, statusOps]);

  useEffect(() => {
    let id;
    typeOps.forEach((typeOp) => {
      if (typeOp.name === type) {
        id = typeOp.id;
      }
    });
    setTypeId(id);
  }, [type, typeOps]);

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
              id="status-input"
              className="input-form"
              onBlur={(e) => {
                setStatus(e.target.value);
              }}
            >
              {statusOps.map((st) => {
                return <option value={st.status}>{st.status}</option>;
              })}
            </select>
          </div>
          <div className="label-wrapper">
            <label htmlFor="type-input">Type:</label>
            <select
              name="type-input"
              className="input-form"
              onBlur={(e) => setType(e.target.value)}
            >
              {typeOps.map((t) => {
                return <option value={t.name}>{t.name}</option>;
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
              onClick={(e) => {
                addHandler(e, {
                  name,
                  status,
                  date,
                  description,
                  statusId,
                  type,
                  typeId,
                });
                handleClose();
              }}
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
