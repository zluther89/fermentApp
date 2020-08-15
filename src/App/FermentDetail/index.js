import React, { useState } from "react";
import "./index.css";
import { useLocation } from "react-router-dom";

function FermentDetail() {
  const [editView, toggleEditView] = useState(false);

  const toggleEdit = function () {
    toggleEditView(!editView);
  };

  const { ferment } = useLocation();
  const { name, status, date, type, description } = ferment;

  return (
    <div className="ferment-detail-master-container">
      <div className="ferment-detail-header">
        <div>{name}</div>
      </div>
      <div className="ferment-detail-prop-container">
        <div>
          <div className="ferment-detail-entry">
            <div className="ferment-detail-entry-header">Status:</div>
            {!editView ? <div> {status}</div> : <input defaultValue={status} />}
          </div>
        </div>
        <div className="ferment-detail-entry">
          <div className="ferment-detail-entry-header">Date:</div>
          <div> {date}</div>
        </div>
        <div className="ferment-detail-entry">
          <div className="ferment-detail-entry-header">Desription: </div>
          {!editView ? (
            <div> {description}</div>
          ) : (
            <input defaultValue={description} />
          )}
        </div>
        <div className="ferment-detail-entry">
          <div className="ferment-detail-entry-header">Type: </div>
          {!editView ? <div> {type}</div> : <input defaultValue={type} />}
        </div>
        <div className="ferment-detail-entry">
          <div className="ferment-edit-button">
            <button type="button" onClick={toggleEdit}>
              edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FermentDetail;
