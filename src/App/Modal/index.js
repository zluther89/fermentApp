import React from "react";
import "./index.css";

function Modal({ show, handleClose, children }) {
  const showHide = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHide}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
}

export default Modal;
