import React, { useState, useEffect } from "react";
import { func, string } from "prop-types";
import axios from "axios";

function StatusForm({ handleStatusId, status, setStatus }) {
  const [statusOps, setStatusOps] = useState([{ status: "status" }]);

  async function getAllStatus() {
    try {
      const { data: res } = await axios.get("/status");
      setStatusOps(res);
    } catch (e) {
      console.warn(e);
    }
  }

  useEffect(() => {
    getAllStatus();
  }, []);

  useEffect(() => {
    let id;
    statusOps.forEach((statusOp) => {
      if (statusOp.status === status) {
        id = statusOp.id;
      }
    });
    handleStatusId(id);
  }, [status, statusOps, handleStatusId]);

  return (
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
  );
}

export default StatusForm;

StatusForm.propTypes = {
  handleStatusId: func.isRequired,
  status: string.isRequired,
  setStatus: func.isRequired,
};
