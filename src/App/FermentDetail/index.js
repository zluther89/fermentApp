import React from "react";
import "./index.css";
import { string, shape } from "prop-types";

function FermentDetail({ ferment }) {
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
            <div> {status}</div>
          </div>
        </div>
        <div className="ferment-detail-entry">
          <div className="ferment-detail-entry-header">Date:</div>
          <div> {date}</div>
        </div>
        <div className="ferment-detail-entry">
          <div className="ferment-detail-entry-header">Desription: </div>
          <div> {description}</div>
        </div>
        <div className="ferment-detail-entry">
          <div className="ferment-detail-entry-header">Type: </div>
          <div> {type}</div>
        </div>
      </div>
    </div>
  );
}

FermentDetail.propTypes = {
  ferment: shape({
    name: string.isRequired,
    type: string.isRequired,
    status: string.isRequired,
    date: string.isRequired,
    description: string.isRequired,
  }).isRequired,
};

export default FermentDetail;
