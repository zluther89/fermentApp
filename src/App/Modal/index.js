import React, { useState } from "react";
import "./index.css";
import { func, bool } from "prop-types";
import NameForm from "./NameForm";
import StatusForm from "./StatusForm";
import TypeForm from "./TypeForm";
import DateForm from "./DateForm";
import DescriptionForm from "./DescriptionForm";

function Modal({ show, handleClose, addHandler }) {
  const showHide = show
    ? "modal modal-display-block"
    : "modal modal-display-none";

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState();
  const [statusId, setStatusId] = useState();
  const [type, setType] = useState();
  const [typeId, setTypeId] = useState();

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
          <TypeForm setType={setType} type={type} setTypeId={setTypeId} />
          <DateForm setDate={setDate} />
          <DescriptionForm setDescription={setDescription} />
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
