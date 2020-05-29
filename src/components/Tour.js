import React from "react";
import PropTypes from "prop-types";
// import { v4 } from 'uuid'

const Tours = ({ tours }) => (
  <div>
    {tours.map((testimonial, index) => (
      <div key={`tourtestemonial` + index}>deu</div>
    ))}
  </div>
);

Tours.propTypes = {
  tours: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string
    })
  )
};

export default Tours;
