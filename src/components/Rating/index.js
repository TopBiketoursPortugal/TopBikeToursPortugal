import React from "react";
import PropTypes from "prop-types";
import { Star } from "@styled-icons/boxicons-solid/Star";
import { StarHalf } from "@styled-icons/boxicons-solid/StarHalf";
import { Star as StarEmpty } from "@styled-icons/boxicons-regular/Star";
// import { pure } from "recompose";

function Rating({ className, value, total = 5, size = 24, style, direction }) {
  const fullStars = [...Array(Math.floor(Math.abs(value))).keys()];
  // console.log(fullStars);
  const halfStars = Math.abs(value) === Math.round(value) ? 0 : 1;
  // console.log(halfStars);
  const emptyCount = total - Math.round(value);
  // console.log(emptyCount);
  const emptyStars = [...Array(emptyCount < 0 ? 0 : emptyCount).keys()];
  // console.log(emptyStars);

  return (
    <div style={style} className={className}>
      {fullStars.map((_, index) => (
        <Star key={`sf${index}`} size={size} />
      ))}
      {fullStars.length < total && halfStars === 1 && <StarHalf size={size} />}
      {emptyStars &&
        emptyStars.length > 0 &&
        emptyStars.map((_, index) => (
          <StarEmpty key={`se${index}`} size={size} />
        ))}
    </div>
  );
}

Rating.propTypes = {
  style: PropTypes.any,
  value: PropTypes.number,
  total: PropTypes.number,
  size: PropTypes.number,
  direction: PropTypes.oneOf(["Vertical", "Horizontal"]),
};

// Rating.defaultProps = {
//   value: 0,
//   total: 5,
//   size: 24,
//   direction: "Horizontal"
// };

export default Rating;
