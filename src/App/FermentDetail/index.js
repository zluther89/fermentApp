import React from "react";
import { string, shape } from "prop-types";

function FermentDetail({ ferment }) {
  const { name, status, date, type, description } = ferment;
  return (
    <div>
      <div>{name}</div>
      <div>{status}</div>
      <div>{date}</div>
      <div>{description}</div>
      <div>{type}</div>
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
