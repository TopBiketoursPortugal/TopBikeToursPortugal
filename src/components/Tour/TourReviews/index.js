import React from "react";
import PropTypes from "prop-types";

const TourReviews = ({ reviews }) => {
  // console.log(JSON.stringify(reviews));
  // return <div>deu</div>;
  return (
    <>
      {reviews &&
        reviews.length > 0 &&
        reviews.map((review, index) => (
          <div key={"review" + index}>
            <h1>{review.title}</h1>
          </div>
        ))}
    </>
  );
};

TourReviews.propsTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
};

export default TourReviews;
