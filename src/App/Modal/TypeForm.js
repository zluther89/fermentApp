import React, { useEffect, useState } from "react";
import { func, string } from "prop-types";
import axios from "axios";

function TypeForm({ setType, setTypeId, type }) {
  const [typeOps, setTypeOps] = useState([{ status: "status" }]);

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
  }, [type, typeOps, setTypeId]);

  return (
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
  );
}

export default TypeForm;

TypeForm.propTypes = {
  setType: func.isRequired,
  setTypeId: func.isRequired,
  type: string.isRequired,
};
