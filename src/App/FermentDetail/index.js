import React from "react";
import PropTypes from "prop-types";

function FermentDetail({ name, status, date, description }) {
  return <div>{(name, status, date, description)}</div>;
}
FermentDetail.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FermentDetail;
