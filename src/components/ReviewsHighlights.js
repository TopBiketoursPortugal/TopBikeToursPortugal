import React from "react";
// import LinesEllipsis from "react-lines-ellipsis";
import ReadMore from "./ReadMore";
import Rating from "./Rating";
import "./ReviewsHighlights.scss";
import { HTMLContent } from "./Content";

// const buildGroupedArray = (array, chunk = 10) => {
//   var i,
//     j,
//     temparray = [];
//   for (i = 0, j = array.length; i < j; i += chunk) {
//     temparray.push(array.slice(i, i + chunk));
//     // do whatever
//   }
//   return temparray;
// };

const ReviewsHighlights = ({ reviews, className }) => {
  // var sliderArray = buildGroupedArray(reviews, 2);
  return (
    <div className="container containerReview">
      <div className="row">
        <div className="col-12">
          <h2 className="reviewTitle">What People Are Saying</h2>
        </div>
        {!!reviews &&
          reviews.map((review, index) => (
            <div key={`review` + index} className="col-12 col-sm-12  col-md-6">
              <blockquote>
                <ReadMore>
                  <HTMLContent
                    className="container tourTitle"
                    content={review.html}
                  />
                </ReadMore>
                <cite>
                  <cite>{review.author.name}, </cite>
                  <span>{review.author.country}, </span>
                  <Rating className={`rating`} value={review.score} />
                </cite>
              </blockquote>
            </div>
          ))}
      </div>
    </div>
  );
};

// export default class ReviewsHighlights extends React.Component {
//   render({ reviews }) {
//     return (
//       <div className="containerReview">
//         <div className="row">
//           <div className="col-12">
//             <h2 className="reviewTitle">What People Are Saying</h2>
//           </div>
//           {reviews.map((review, index) => (
//             <div key={`review` + index} className="col-12 col-md-6">
//               <ReviewQuote>
//                 <ReadMore>{review.quote}</ReadMore>
//                 <ReviewCite>
//                   <cite>{review.author.name}</cite>, {review.author.country}
//                 </ReviewCite>
//               </ReviewQuote>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
export default ReviewsHighlights;
// {
//   /* <ReviewQuote key={index}>
//             <TextTruncate
//               line={3}
//               element="div"
//               truncateText="…"
//               text={review.quote}
//               textTruncateChild={<Link to={"/reviews/" + index}>more</Link>}
//             />
//             <div>
//               <cite>{review.author}</cite>, {review.country}
//             </div>
//           </ReviewQuote> */
// }
