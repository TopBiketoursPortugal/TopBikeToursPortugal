import React from "react";
import PropTypes from "prop-types";
import "./tourInformation.scss";

const TourInformation = ({ tour: { title, subtitle, description } }) => (
  <div className="container">
    <div className="row tourInfo">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
    </div>
  </div>
);

TourInformation.propTypes = {
  tour: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default TourInformation;
