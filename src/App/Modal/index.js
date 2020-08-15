import React, { useState, useEffect } from "react";
import "./index.css";
import { func, bool } from "prop-types";
import axios from "axios";
import NameForm from "./NameForm";
import StatusForm from "./StatusForm";

function Modal({ show, handleClose, addHandler }) {
  const showHide = show
    ? "modal modal-display-block"
    : "modal modal-display-none";

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState();
  const [statusId, setStatusId] = useState();
  const [typeOps, setTypeOps] = useState([{ status: "status" }]);
  const [type, setType] = useState();
  const [typeId, setTypeId] = useState();

  async function getAllTypes() {
    try {
      const { data: res } = await axios.get("/types");
      setTypeOps(res);
    } catch (e) {
      console.warn(e);
    }
  }

  useEffect(() => {
    getAllTypes();
  }, []);

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
          <NameForm handler={setName} />
          <StatusForm
            handleStatusId={setStatusId}
            status={status}
            setStatus={setStatus}
          />
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
                handleClose(e);
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
